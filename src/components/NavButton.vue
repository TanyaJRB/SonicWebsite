<script setup lang="ts">

interface NavButtonProps {
  buttonText?: string;
}

interface NavButtonEvents {
  (eventName: 'click', event: MouseEvent): void;
}

const props = defineProps<NavButtonProps>();
const emit = defineEmits<NavButtonEvents>();

function handleClick(event: MouseEvent): void {
  emit('click', event);
}

</script>

<template>
    <button class="text-slate-200 hover:text-blue-300 hover:cursor-pointer p-2" @click="handleClick">{{ props.buttonText }}</button>
</template>

