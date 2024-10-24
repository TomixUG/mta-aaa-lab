import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

import { db } from "$lib/db/db.server";
import { accounting, paycheck, user } from "$lib/db/schema";
import { eq, sql } from "drizzle-orm";

export const load: PageServerLoad = async ({ params, locals }) => {
  const auth = locals.auth;
  if (auth == undefined) {
    if (!auth) redirect(302, "/auth");
  }

  // normal users dont have access
  if (auth.role.id === 2) {
    return redirect(302, "/dashboard/forbidden");
  }

  const parameter = params.slug;

  const queryName = await db
    .select()
    .from(user)
    .where(sql`${user.id} = ${parameter}`);

  if (queryName.length === 0) {
    return redirect(302, "/dashboard/");
  }

  // check the token
  const query = await db
    .select()
    .from(paycheck)
    .where(sql`${paycheck.user_id} = ${parameter}`);

  return { name: queryName[0].name, query: query };
};

export const actions = {
  default: async ({ request, locals, params }) => {
    const auth = locals.auth;
    if (auth == undefined) {
      if (!auth) redirect(302, "/auth");
    }

    // normal users dont have access
    if (auth.role.id === 2) {
      redirect(302, "/dashboard/forbidden");
    }

    const employeeId = params.slug;
    if (!employeeId) {
      redirect(302, "/dashboard");
    }

    const data = await request.formData();

    const pay_period = data.get("pay_period");
    const gross_pay = data.get("gross_pay");
    const tax_deductions = data.get("tax_deductions");
    const net_pay = data.get("net_pay");

    await db.insert(paycheck).values({
      user_id: employeeId,
      period: pay_period,
      gross_pay: gross_pay,
      tax_deductions: tax_deductions,
      net_pay: net_pay,
    });

    await db.insert(accounting).values({
      content: `Paycheck has been created for a user ${
        auth.user.email
      } at ${new Date().toISOString()}. The net pay was ${net_pay}`,
    });
  },
} satisfies Actions;
