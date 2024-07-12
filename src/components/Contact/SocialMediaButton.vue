<script setup lang="ts">
interface SocialMediaButtonProps {
  link: string;
}
const props = defineProps<SocialMediaButtonProps>();
</script>

<template>
  <a
    :href="link"
    class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
  >
    <slot name="icon"></slot>
  </a>
</template>
