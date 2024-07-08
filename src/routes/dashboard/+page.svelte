<script lang="ts">
  export let data;
  console.log(data);
</script>

{#each data.result as d}
  <div>{d.id}</div>
  <div>{d.name}</div>
{/each}
