import type { Handle, RequestEvent } from "@sveltejs/kit";

async function auth(event: RequestEvent) {
  // Function implementation
  event.cookies.get("token");

  // get user from the database
}

export const handle: Handle = async ({ event, resolve }) => {
  auth(event);

  return await resolve(event);
};
