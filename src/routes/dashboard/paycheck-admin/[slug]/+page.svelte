<script lang="ts">
  export let data;

  let isModalOpen = false;
</script>

<a href="/dashboard/paycheck-admin" class="link text-blue-600">Go back</a>

<h1 class="text-2xl">Viewing paycheck from an employee <b>{data.name}</b></h1>

<button class="btn btn-info mt-4" on:click={() => (isModalOpen = true)}
  >Add new paycheck</button
>

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

<div class="modal" class:modal-open={isModalOpen}>
  <div class="modal-box">
    <h3 class="font-bold text-lg">Adding new paycheck</h3>
    <p class="py-4"></p>
    <form method="POST" class="space-y-4">
      <div class="form-control">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Pay Period</span>
          </label>
          <input
            name="pay_period"
            type="text"
            placeholder="Enter pay period"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Gross Pay</span>
          </label>
          <input
            name="gross_pay"
            type="text"
            placeholder="Enter gross pay"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Tax Deductions</span>
          </label>
          <input
            name="tax_deductions"
            type="text"
            placeholder="Enter tax deductions"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Net Pay</span>
          </label>
          <input
            name="net_pay"
            type="text"
            placeholder="Enter net pay"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <button type="submit" class="btn btn-info w-full max-w-xs mt-4"
          >Add a paycheck</button
        >
        <p class="text-sm mt-2">
          Clicking this button will send money to this employees account, be
          careful, because this action is irreversable!
        </p>
      </div>
    </form>

    <div class="modal-action">
      <!-- 🔵 set false on click -->
      <button class="btn" on:click={() => (isModalOpen = false)}>Close</button>
    </div>
  </div>
</div>

<div class="text-white">
  Temp login data: 'linus.torvalds@coolcompany.com' 'superSecretPassword!@##'
</div>
