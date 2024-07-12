<script setup lang="ts">
import NavBar from "./NavBar.vue";
import SonicLogo from "../icons/SonicLogo.vue";
import SocialMediaBar from "./Contact/SocialMediaBar.vue";

// interface NavButtonProps {
//   buttonText?: string;
// }

// interface NavButtonEvents {
//   (eventName: 'click', event: MouseEvent): void;
// }

// const props = defineProps<NavButtonProps>();
// const emit = defineEmits<NavButtonEvents>();

// function handleClick(event: MouseEvent): void {
//   emit('click', event);
// }
</script>

<template>
  <div class="flex flex-col relative min-h-screen">
    <div class="w-screen flex flex-row justify-between bg-slate-200/10">
      <SonicLogo class="m-1 w-[8%]" />
      <NavBar applyButtonClass class="items-center md:text-md lg:text-lg" />
      <SocialMediaBar class="mr-4" />
    </div>
    <slot />
  </div>
</template>
