import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { db } from "$lib/db/db.server";
import { paycheck, user } from "$lib/db/schema";
import { eq, sql } from "drizzle-orm";

export const load: PageServerLoad = async ({ params, locals }) => {
  const auth = locals.auth;
  if (auth == undefined) {
    if (!auth) redirect(302, "/auth");
  }

  // normal users dont have access
  if (auth.role.id === 2) {
    redirect(302, "/dashboard/forbidden");
  }

  const parameter = params.slug;

  // check the token
  const query = await db.select().from(user);

  return { query: query };
};
