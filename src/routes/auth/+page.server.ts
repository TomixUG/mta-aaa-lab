// routes/login/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";
import { db } from "$lib/db/db.server";
import { accounting, token, user } from "$lib/db/schema";
import { eq, and } from "drizzle-orm";
import constants from "$lib/constants";

export const actions: Actions = {
  default: async ({ request, locals, cookies, url }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (email === undefined || password === undefined) {
      return fail(400, {
        message: "You must enter some login details",
      });
    }

    console.log(email);
    console.log(password);

    const result = await db
      .select()
      .from(user)
      .where(and(eq(user.email, email), eq(user.password, password)));

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor
      ? forwardedFor.split(",")[0]
      : request.headers.get("host"); // Fallback to host in local dev

    if (result.length !== 1) {
      await db.insert(accounting).values({
        content: `Invalid login attempt from ${ip} at ${new Date().toISOString()}`,
      });
      return fail(400, {
        message: "Invalid login details",
      });
    }

    // successful login
    const ires = await db
      .insert(token)
      .values({ userId: result[0].id })
      .returning();

    const generatedToken = ires[0].id;

    console.log(generatedToken);

    cookies.set(constants.cookieName, generatedToken, {
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 365,
      secure: false,
    });

    const log: Log = {
      dateTime: new Date(),
      whereItHappened: "/auth",
      severity: "medium",
      description: `User ${email} logged in at ${new Date().toISOString()}`,
    };

    await db.insert(accounting).values({
      content: JSON.stringify(log),
    });

    // await db.insert(accounting).values({
    //   content: `User ${email} logged in at ${new Date().toISOString()}`,
    // });

    redirect(302, "/dashboard");
  },
};

export const load: PageServerLoad = async ({ locals }) => {
  const auth = locals.auth;
  if (auth) redirect(302, "/dashboard");
};
