import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, locals }) => {
  const auth = locals.auth;
  if (auth == undefined) {
    if (!auth) redirect(302, "/auth");
  }
  return auth;
};
