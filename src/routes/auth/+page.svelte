<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="bg-gray-50 font-[sans-serif] text-[#333]">
  <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
    <div
      class="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white"
    >
      <img src="/logo.jpg" alt="logo" class="w-40 mb-4" />
      <h2 class="text-center text-3xl font-extrabold">
        Login into your company account
      </h2>
      {#if form?.message}
        <div
          class="relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg mt-5"
          role="alert"
        >
          <p>{form?.message}</p>
          <span class="absolute inset-y-0 right-0 flex items-center mr-4">
          </span>
        </div>
      {/if}
      <form class="mt-5 space-y-4" method="post" use:enhance>
        <div>
          <input
            name="email"
            type="email"
            autocomplete="email"
            required
            class="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
            placeholder="Your email address"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
            placeholder="Your secure password"
          />
        </div>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-3 block text-sm">
              Remember me
            </label>
          </div>
          <div>
            <!-- <a
              href="jajvascript:void(0);"
              class="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot Password?
            </a> -->
          </div>
        </div>
        <div class="!mt-10">
          <button
            type="submit"
            class="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
