import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

import { db } from "$lib/db/db.server";
import { paycheck } from "$lib/db/schema";
import { eq, sql } from "drizzle-orm";

export const load: PageServerLoad = async ({ params, locals }) => {
  const auth = locals.auth;
  if (auth == undefined) {
    if (!auth) redirect(302, "/auth");
  }

  // check the token
  const query = await db
    .select()
    .from(paycheck)
    .where(sql`${paycheck.user_id} = ${auth.user.id}`);

  return { auth: auth, query: query };
};
