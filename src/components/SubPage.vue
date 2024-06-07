<script setup lang="ts">
import NavBar from './NavBar.vue';
import SonicLogo from '../icons/SonicLogo.vue';
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
    <div class="flex flex-col absolute h-screen">
        <div class="w-screen h-1/6 flex flex-row justify-between">
            <SonicLogo class="m-1 w-[8%]"/>
            <NavBar class="items-center md:text-md lg:text-lg font-mono mr-10"/>
        </div>
        <slot/>
    </div>
</template>

