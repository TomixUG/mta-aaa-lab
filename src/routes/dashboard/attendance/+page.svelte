<script lang="ts">
  export let data;
</script>

<h1 class="text-2xl"><b>Attendance</b></h1>
Employee: {data.user?.name}
<div class="mt-4">
  {#if data.role.id == 0}
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
            <th>Total Work Hours</th>
          </tr>
        </thead>
        <tbody>
          <!-- October -->
          <tr class="bg-base-200">
            <td>01 Oct 2024</td>
            <td>Present</td>
            <td>09:00 AM</td>
            <td>05:00 PM</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>02 Oct 2024</td>
            <td>Present</td>
            <td>09:10 AM</td>
            <td>05:10 PM</td>
            <td>8 hours</td>
          </tr>
          <tr class="bg-base-200">
            <td>03 Oct 2024</td>
            <td>Absent</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>04 Oct 2024</td>
            <td>Present</td>
            <td>09:05 AM</td>
            <td>05:05 PM</td>
            <td>8 hours</td>
          </tr>
          <!-- September -->
          <tr class="bg-base-200">
            <td>30 Sep 2024</td>
            <td>Present</td>
            <td>09:00 AM</td>
            <td>05:00 PM</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>29 Sep 2024</td>
            <td>Present</td>
            <td>09:15 AM</td>
            <td>05:15 PM</td>
            <td>8 hours</td>
          </tr>
          <tr class="bg-base-200">
            <td>28 Sep 2024</td>
            <td>Present</td>
            <td>09:00 AM</td>
            <td>05:00 PM</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>27 Sep 2024</td>
            <td>Absent</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  {:else if data.role.id == 1}
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
            <th>Total Work Hours</th>
          </tr>
        </thead>
        <tbody>
          <!-- October -->
          <tr class="bg-base-200">
            <td>01 Oct 2024</td>
            <td>Present</td>
            <td>08:45 AM</td>
            <td>05:15 PM</td>
            <td>8.5 hours</td>
          </tr>
          <tr>
            <td>02 Oct 2024</td>
            <td>Present</td>
            <td>09:00 AM</td>
            <td>05:00 PM</td>
            <td>8 hours</td>
          </tr>
          <tr class="bg-base-200">
            <td>03 Oct 2024</td>
            <td>Late</td>
            <td>10:30 AM</td>
            <td>06:30 PM</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>04 Oct 2024</td>
            <td>Present</td>
            <td>08:50 AM</td>
            <td>05:20 PM</td>
            <td>8.5 hours</td>
          </tr>
          <!-- September -->
          <tr class="bg-base-200">
            <td>30 Sep 2024</td>
            <td>Present</td>
            <td>08:40 AM</td>
            <td>05:10 PM</td>
            <td>8.5 hours</td>
          </tr>
          <tr>
            <td>29 Sep 2024</td>
            <td>Absent</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr class="bg-base-200">
            <td>28 Sep 2024</td>
            <td>Present</td>
            <td>09:10 AM</td>
            <td>05:10 PM</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>27 Sep 2024</td>
            <td>Present</td>
            <td>08:55 AM</td>
            <td>05:25 PM</td>
            <td>8.5 hours</td>
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
            <th>Date</th>
            <th>Status</th>
            <th>Check-in Time</th>
            <th>Check-out Time</th>
            <th>Total Work Hours</th>
          </tr>
        </thead>
        <tbody>
          <!-- October -->
          <tr class="bg-base-200">
            <td>01 Oct 2024</td>
            <td>Present</td>
            <td>09:00 AM</td>
            <td>06:00 PM</td>
            <td>9 hours</td>
          </tr>
          <tr>
            <td>02 Oct 2024</td>
            <td>Absent</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr class="bg-base-200">
            <td>03 Oct 2024</td>
            <td>Present</td>
            <td>09:15 AM</td>
            <td>05:15 PM</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>04 Oct 2024</td>
            <td>Late</td>
            <td>10:00 AM</td>
            <td>06:00 PM</td>
            <td>8 hours</td>
          </tr>
          <!-- September -->
          <tr class="bg-base-200">
            <td>30 Sep 2024</td>
            <td>Present</td>
            <td>09:05 AM</td>
            <td>05:05 PM</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>29 Sep 2024</td>
            <td>Present</td>
            <td>09:00 AM</td>
            <td>05:30 PM</td>
            <td>8.5 hours</td>
          </tr>
          <tr class="bg-base-200">
            <td>28 Sep 2024</td>
            <td>Late</td>
            <td>10:00 AM</td>
            <td>06:00 PM</td>
            <td>8 hours</td>
          </tr>
          <tr>
            <td>27 Sep 2024</td>
            <td>Present</td>
            <td>09:00 AM</td>
            <td>05:00 PM</td>
            <td>8 hours</td>
          </tr>
        </tbody>
      </table>
    </div>
  {/if}
</div>
