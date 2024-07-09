<script lang="ts">
  import Icon from "@iconify/svelte";

  export let data;
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl" href="/dashboard">CoolCompany portal</a>
  </div>
  <div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="flex flex-row gap-2 text-sm">
        <Icon icon="mdi:user" class="text-xl" />
        {data.user.name}
        <Icon icon="mingcute:down-fill" class="text-xl" />
      </div>

      <div
        tabindex="-1"
        class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
      >
        <div class="card-body">
          <div>
            <span class="font-bold">Role:</span>
            {data.role.name}
          </div>
          <a href="/logout" class="btn btn-accent">Logout</a>
        </div>
      </div>
    </div>
  </div>
</div>

<slot />
