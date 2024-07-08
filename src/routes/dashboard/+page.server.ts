import type { PageServerLoad } from "./$types";
import { db } from "$lib/db/db.server";
import { role } from "$lib/db/schema";

export const load: PageServerLoad = async ({ params }) => {
  const result = await db.select().from(role);
  return { result };
};
