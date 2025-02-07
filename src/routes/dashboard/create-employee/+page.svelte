<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  export let form: ActionData;
  export let data: PageData;
</script>

<h1 class="text-2xl"><b>Create new employee</b></h1>

<form method="POST" class="space-y-4">
  {#if form?.success}
    <div role="alert" class="alert alert-success mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>User has been created successfully</span>
    </div>
  {/if}
  <div class="form-control">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Name</span>
      </label>
      <input
        name="name"
        type="text"
        placeholder="Enter name"
        class="input input-bordered w-full max-w-xs"
      />
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input
        name="email"
        type="text"
        placeholder="Enter email"
        class="input input-bordered w-full max-w-xs"
      />
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Password</span>
      </label>
      <input
        name="password"
        type="text"
        placeholder="Enter new password"
        class="input input-bordered w-full max-w-xs"
      />
    </div>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Role</span>
      </label>
      <select
        name="role"
        id="role"
        class="select select-bordered w-full max-w-xs"
      >
        <option value="0">Admin</option>
        <option value="1">Accounting</option>
        <option value="2">Employee</option>
      </select>
    </div>

    <button type="submit" class="btn btn-info w-full max-w-xs mt-4"
      >Add a new employee</button
    >
  </div>
</form>
