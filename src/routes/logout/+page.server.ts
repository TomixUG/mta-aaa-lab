import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import constants from "$lib/constants";

export const load: PageServerLoad = async ({ cookies }) => {
  cookies.delete(constants.cookieName, { path: "/", secure: false });
  redirect(302, "/");
};
