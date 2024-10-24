<script lang="ts">
  export let data;
</script>

<h1 class="text-2xl"><b>Accounting</b></h1>

<p>Here you can access this system's logs.</p>
<div class="mt-4">
  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th>ID</th>
          <th>Content</th>
        </tr>
      </thead>
      {#each data.query as item, index}
        <tbody>
          <tr class={index % 2 !== 1 ? "bg-base-200" : ""}>
            <td>{item.id}</td>
            <td>{item.content}</td>
          </tr>
        </tbody>
      {/each}
    </table>
  </div>
</div>
