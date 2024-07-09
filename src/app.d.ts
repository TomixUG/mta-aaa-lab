// See https://kit.svelte.dev/docs/types#app

import type { Auth } from "$lib/db/schema";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      auth: Auth | undefined;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
