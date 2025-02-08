<script lang="ts">
  export let data;

  let logs = data.query.map((item) => ({
    ...item,
    content: safeParse(item.content),
  }));

  function safeParse(content) {
    try {
      return JSON.parse(content);
    } catch (error) {
      console.error("Invalid JSON:", content);
      return null;
    }
  }
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
          <th>Date/Time</th>
          <th>Location</th>
          <th>Severity</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {#each logs as item, index}
          {#if item.content}
            <!-- Ensure valid JSON -->
            <tr style={index % 2 !== 1 ? "bg-base-200" : ""}>
              <td>{item.id}</td>
              <td
                >{new Date(item.content.dateTime.toString()).toLocaleString(
                  "cs-CZ",
                  {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  }
                )}</td
              >
              <td>{item.content.whereItHappened}</td>
              <td>{item.content.severity}</td>
              <td>{item.content.description}</td>
            </tr>
          {:else}
            <tr>
              <td colspan="5">Invalid JSON</td>
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
</div>
