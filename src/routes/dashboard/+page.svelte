<script lang="ts">
  import Card from "$lib/components/card.svelte";

  export let data;
</script>

<div class="text-xl">Welcome {data.user.name},</div>
<div>Your role is: <b>{data.role.name}</b></div>

<div class="mt-8 mb-8 text-lg">You have access to the following modules:</div>
<div class="flex md:flex-row flex-col gap-4">
  <Card
    colorBackground="#16a34a"
    colorText="white"
    icon="ic:twotone-attach-money"
    text1="Paycheck"
    text2="Check your monthly salary!"
    link="/dashboard/paycheck"
  />
  <Card
    colorBackground="#06b6d4"
    colorText="white"
    icon="mingcute:time-line"
    text1="Attendance"
    text2="Check your hard worked hours"
    link="/dashboard/attendance"
  />
</div>

{#if data.role.id === 1 || data.role.id === 0}
  <div class="mt-8 mb-8 text-lg">Accounting modules:</div>

  <div class="flex md:flex-row flex-col gap-4">
    <Card
      colorBackground="#4ade80"
      colorText="white"
      icon="mingcute:tool-fill"
      text1="Paycheck administration"
      text2="Give salary to our employees"
      link="/dashboard/paycheck-admin"
    />
  </div>
{/if}
