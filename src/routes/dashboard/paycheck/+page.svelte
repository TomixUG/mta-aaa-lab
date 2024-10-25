<script lang="ts">
  export let data;
  let comment = 1;
</script>

{#if comment}
  {@html ` <!--This is a comment. Comments are not displayed in the browser-->`}
{/if}

<h1 class="text-2xl"><b>Paycheck</b></h1>
Employee: {data.user?.name}
<div class="mt-4">
  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        <tr>
          <th>Pay Period</th>
          <th>Gross Pay</th>
          <th>Tax Deductions</th>
          <th>Net Pay</th>
        </tr>
      </thead>
      {#each data.query as item, index}
        <tbody>
          <tr class={index % 2 !== 1 ? "bg-base-200" : ""}>
            <td>{item.period}</td>
            <td>{item.gross_pay}</td>
            <td>{item.tax_deductions}</td>
            <td>{item.net_pay}</td>
          </tr>
        </tbody>
      {/each}
    </table>
  </div>
</div>
