import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import constants from "$lib/constants";
import { db } from "$lib/db/db.server";
import { accounting } from "$lib/db/schema";
import type { Log } from "$lib/models/accounting";

export const load: PageServerLoad = async ({ cookies, locals }) => {
  cookies.delete(constants.cookieName, { path: "/", secure: false });
  const log: Log = {
    dateTime: new Date(),
    whereItHappened: "/logout",
    severity: "low",
    description: `
      User ${locals.auth?.user.email} logged out at ${new Date().toISOString()}
      `,
  };

  await db.insert(accounting).values({
    content: JSON.stringify(log),
  });

  // await db.insert(accounting).values({
  //   content: `User ${
  //     locals.auth?.user.email
  //   } logged out at ${new Date().toISOString()}`,
  // });

  redirect(302, "/");
};
