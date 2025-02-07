import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { db } from "$lib/db/db.server";
import { accounting, paycheck, user } from "$lib/db/schema";
import { eq, sql } from "drizzle-orm";
import type { Log } from "$lib/models/accounting";

export const load: PageServerLoad = async ({ params, locals }) => {
  const auth = locals.auth;
  if (auth == undefined) {
    if (!auth) redirect(302, "/auth");
  }

  // normal users dont have access
  if (auth.role.id !== 0) {
    redirect(302, "/dashboard/forbidden");
  }

  return { auth: auth };
};

export const actions = {
  default: async ({ request, locals, params }) => {
    const auth = locals.auth;
    if (auth == undefined) {
      if (!auth) redirect(302, "/auth");
    }

    // normal users dont have access
    if (auth.role.id !== 0) {
      redirect(302, "/dashboard/forbidden");
    }

    const data = await request.formData();

    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const role = data.get("role");
    console.log(role);

    if (role !== "0" && role !== "1" && role !== "2") {
      // invalid role
      throw new Error("Invalid role");
    }

    await db.insert(user).values({
      name: name,
      email: email,
      password: password,
      roleId: role,
    });

    function getRoleText(role: string) {
      if (role === "0") {
        return "Admin";
      } else if (role === "1") {
        return "Accounting";
      } else if (role === "2") {
        return "Employee";
      }
    }

    const log: Log = {
      dateTime: new Date(),
      whereItHappened: "/create-employee",
      severity: "critical",
      description:
        "A new employee has been created. Name: " +
        name +
        ", Email: " +
        email +
        ", Role: " +
        getRoleText(role),
    };

    await db.insert(accounting).values({
      content: JSON.stringify(log),
    });

    return { success: true };
  },
} satisfies Actions;
