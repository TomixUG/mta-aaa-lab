import constants from "$lib/constants";
import { db } from "$lib/db/db.server";
import { role, token, user, type Auth } from "$lib/db/schema";
import type { Handle, RequestEvent } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

async function auth(event: RequestEvent): Promise<Auth | undefined> {
  // Function implementation
  const tokenCookie = event.cookies.get(constants.cookieName);
  if (!tokenCookie) return undefined;

  // check the token
  const query = await db
    .select()
    .from(token)
    .innerJoin(user, eq(user.id, token.userId))
    .innerJoin(role, eq(user.roleId, role.id))
    .where(eq(token.id, tokenCookie));

  // invalid token
  if (query.length !== 1) return undefined;

  return { user: query[0].user, role: query[0].role };
}

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.auth = await auth(event);

  return await resolve(event);
};
