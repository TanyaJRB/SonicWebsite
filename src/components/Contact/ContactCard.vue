<script setup lang="ts">
interface ContactCardProps {
  cardTitle: string;
  contactName: string;
  contactEmail: string;
}
const props = defineProps<ContactCardProps>();
</script>

<template class="h-1/4 w-full md:h-full md:w-full">
  <div
    class="rounded-xl bg-white/80 p-2 lg:p-6 text-center shadow-indigo-100/40 shadow-xl md:w-1/4"
  >
    <div
      class="mx-auto flex h-12 w-12 md:h-24 md:w-24 -translate-y-6 md:-translate-y-10 transform items-center justify-center rounded-full bg-white shadow-lg"
    >
      <slot name="icon"></slot>
    </div>
    <h1
      class="text-darken mb-4 md:mb-8 text-md md:text-xl font-medium lg:px-14 text-indigo-900"
    >
      {{ cardTitle }}
    </h1>
    <div class="px-4 text-gray-500">
      <div class="font-bold text-sm md:text-md">
        {{ contactName }}
      </div>
      <div class="text-xs md:text-sm text-center">
        <a :href="'mailto:' + contactEmail">{{ contactEmail }}</a>
      </div>
    </div>
  </div>
</template>
