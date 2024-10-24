<script lang="ts">
  import Icon from "@iconify/svelte";

  export let colorBackground;
  export let colorText;
  export let icon;
  export let text1;
  export let text2;
  export let link;
</script>

<a
  class="card hover:none w-48 btn h-40 m-0 p-0"
  style="background-color: {colorBackground}; color:{colorText}"
  href={link}
>
  <div>
    <div class="card-body">
      <h2 class="card-title">
        <Icon {icon} class="text-2xl" />
        {text1}
      </h2>
      <p>{text2}</p>
    </div>
  </div>
</a>
