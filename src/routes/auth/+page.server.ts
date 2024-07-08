// routes/login/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";
import { db } from "$lib/db/db.server";
import { token, user } from "$lib/db/schema";
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

    if (result.length !== 1) {
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

    redirect(302, "/dashboard");
  },
};

export const load: PageServerLoad = async ({ cookies }) => {
  if (cookies.get(constants.cookieName)) {
    // if check auth, redirect
    //   console.log("redirecting to /");
    redirect(302, "/dashboard");
  }
};
