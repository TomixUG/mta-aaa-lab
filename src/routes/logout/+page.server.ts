import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import constants from "$lib/constants";
import { db } from "$lib/db/db.server";
import { accounting } from "$lib/db/schema";

export const load: PageServerLoad = async ({ cookies, locals }) => {
  cookies.delete(constants.cookieName, { path: "/", secure: false });

  await db.insert(accounting).values({
    content: `User ${
      locals.auth?.user.email
    } logged out at ${new Date().toISOString()}`,
  });

  redirect(302, "/");
};
