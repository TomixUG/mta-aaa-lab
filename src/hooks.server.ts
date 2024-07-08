import constants from "$lib/constants";
import { db } from "$lib/db/db.server";
import { token, user, type User } from "$lib/db/schema";
import type { Handle, RequestEvent } from "@sveltejs/kit";
import { eq } from "drizzle-orm";

async function auth(event: RequestEvent): Promise<User | undefined> {
  // Function implementation
  const tokenCookie = event.cookies.get(constants.cookieName);
  if (!tokenCookie) return undefined;

  console.log(tokenCookie);

  // check the token
  const query = await db
    .select()
    .from(token)
    .innerJoin(user, eq(user.id, token.userId))
    .where(eq(token.id, tokenCookie));

  // invalid token
  if (query.length !== 1) return undefined;

  return query[0].user;
}

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.auth = await auth(event);

  return await resolve(event);
};
