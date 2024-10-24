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
