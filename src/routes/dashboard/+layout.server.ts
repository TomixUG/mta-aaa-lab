import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ locals }) => {
  const auth = locals.auth;
  if (!auth) redirect(302, "/auth");

  return auth;
};
