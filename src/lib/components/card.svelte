<script lang="ts">
  import Icon from "@iconify/svelte";

  export let colorBackground;
  export let colorText;
  export let icon;
  export let text1;
  export let text2;
  export let link;
</script>

<a href={link} class="block group">
  <div
    class="p-4 h-32 rounded-md shadow-md text-center transition transform hover:scale-105"
    style="background-color: {colorBackground}; color:{colorText}"
  >
    <h2 class="text-lg font-semibold text-white">
      <Icon {icon} class="text-2xl" />
      {text1}
    </h2>
    <p class="text-white mt-1">{text2}</p>
  </div>
</a>
