<script lang="ts">
  export let data;
</script>

<h1 class="text-2xl"><b>Paycheck</b></h1>
Employee: {data.user?.name}
<div class="mt-4">
  {#if data.role.id == 0}
    <div class="overflow-x-auto">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th>Pay Period</th>
              <th>Gross Pay</th>
              <th>Tax Deductions</th>
              <th>Net Pay</th>
            </tr>
          </thead>
          <tbody>
            <!-- October -->
            <tr class="bg-base-200">
              <td>01 Oct 2024 - 15 Oct 2024</td>
              <td>$4,500.00</td>
              <td>$1,200.00</td>
              <td>$3,300.00</td>
            </tr>
            <tr>
              <td>16 Oct 2024 - 31 Oct 2024</td>
              <td>$4,500.00</td>
              <td>$1,150.00</td>
              <td>$3,350.00</td>
            </tr>
            <!-- September -->
            <tr class="bg-base-200">
              <td>01 Sep 2024 - 15 Sep 2024</td>
              <td>$4,500.00</td>
              <td>$1,220.00</td>
              <td>$3,280.00</td>
            </tr>
            <tr>
              <td>16 Sep 2024 - 30 Sep 2024</td>
              <td>$4,500.00</td>
              <td>$1,180.00</td>
              <td>$3,320.00</td>
            </tr>
            <!-- August -->
            <tr class="bg-base-200">
              <td>01 Aug 2024 - 15 Aug 2024</td>
              <td>$4,500.00</td>
              <td>$1,210.00</td>
              <td>$3,290.00</td>
            </tr>
            <tr>
              <td>16 Aug 2024 - 31 Aug 2024</td>
              <td>$4,500.00</td>
              <td>$1,200.00</td>
              <td>$3,300.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  {:else if data.role.id == 1}
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Pay Period</th>
            <th>Gross Pay</th>
            <th>Tax Deductions</th>
            <th>Net Pay</th>
          </tr>
        </thead>
        <tbody>
          <!-- October -->
          <tr class="bg-base-200">
            <td>01 Oct 2024 - 15 Oct 2024</td>
            <td>$5,200.00</td>
            <td>$1,450.00</td>
            <td>$3,750.00</td>
          </tr>
          <tr>
            <td>16 Oct 2024 - 31 Oct 2024</td>
            <td>$5,200.00</td>
            <td>$1,400.00</td>
            <td>$3,800.00</td>
          </tr>
          <!-- September -->
          <tr class="bg-base-200">
            <td>01 Sep 2024 - 15 Sep 2024</td>
            <td>$5,200.00</td>
            <td>$1,470.00</td>
            <td>$3,730.00</td>
          </tr>
          <tr>
            <td>16 Sep 2024 - 30 Sep 2024</td>
            <td>$5,200.00</td>
            <td>$1,410.00</td>
            <td>$3,790.00</td>
          </tr>
          <!-- August -->
          <tr class="bg-base-200">
            <td>01 Aug 2024 - 15 Aug 2024</td>
            <td>$5,200.00</td>
            <td>$1,460.00</td>
            <td>$3,740.00</td>
          </tr>
          <tr>
            <td>16 Aug 2024 - 31 Aug 2024</td>
            <td>$5,200.00</td>
            <td>$1,450.00</td>
            <td>$3,750.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  {:else}
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Pay Period</th>
            <th>Gross Pay</th>
            <th>Tax Deductions</th>
            <th>Net Pay</th>
          </tr>
        </thead>
        <tbody>
          <!-- October -->
          <tr class="bg-base-200">
            <td>01 Oct 2024 - 15 Oct 2024</td>
            <td>$3,800.00</td>
            <td>$900.00</td>
            <td>$2,900.00</td>
          </tr>
          <tr>
            <td>16 Oct 2024 - 31 Oct 2024</td>
            <td>$3,800.00</td>
            <td>$850.00</td>
            <td>$2,950.00</td>
          </tr>
          <!-- September -->
          <tr class="bg-base-200">
            <td>01 Sep 2024 - 15 Sep 2024</td>
            <td>$3,800.00</td>
            <td>$920.00</td>
            <td>$2,880.00</td>
          </tr>
          <tr>
            <td>16 Sep 2024 - 30 Sep 2024</td>
            <td>$3,800.00</td>
            <td>$870.00</td>
            <td>$2,930.00</td>
          </tr>
          <!-- August -->
          <tr class="bg-base-200">
            <td>01 Aug 2024 - 15 Aug 2024</td>
            <td>$3,800.00</td>
            <td>$910.00</td>
            <td>$2,890.00</td>
          </tr>
          <tr>
            <td>16 Aug 2024 - 31 Aug 2024</td>
            <td>$3,800.00</td>
            <td>$900.00</td>
            <td>$2,900.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  {/if}
</div>
