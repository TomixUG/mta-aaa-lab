import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  const auth = locals.auth;

  if (auth) redirect(302, "/dashboard");
  else redirect(302, "/auth");
};
