import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { db } from "$lib/db/db.server";
import { accounting, paycheck, user } from "$lib/db/schema";
import { desc, eq, sql } from "drizzle-orm";

export const load: PageServerLoad = async ({ params, locals }) => {
  const auth = locals.auth;
  if (auth == undefined) {
    if (!auth) redirect(302, "/auth");
  }

  // normal users dont have access
  if (auth.role.id !== 0) {
    redirect(302, "/dashboard/forbidden");
  }

  // check the token
  const query = await db.select().from(accounting).orderBy(desc(accounting.id));

  return { query: query };
};
