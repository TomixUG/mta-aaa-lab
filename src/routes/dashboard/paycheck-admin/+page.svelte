<script lang="ts">
  import { goto } from "$app/navigation";

  export let data;
</script>

<h1 class="text-2xl"><b>Pycheck administration</b></h1>

<div>Select an employee from the list:</div>

<div class="m-8">
  {#each data.query as item}
    <li
      class="cursor-pointer p-2 hover:bg-gray-200 border-b border-gray-300"
      on:click={() => {
        goto(`/dashboard/paycheck-admin/${item.id}`);
      }}
    >
      {item.name}
    </li>
  {/each}
</div>
