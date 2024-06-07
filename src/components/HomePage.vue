<script setup lang="ts">
import SonicLogo from '../icons/SonicLogo.vue';
import NavBar from './NavBar.vue';

</script>

<template>
    <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center font-mono text-white">
        <div class="flex flex-col">
            <SonicLogo/>
            <div class="mt-6 mb-10 font-secondary text-palette-light md:text-lg lg:text-xl">
                We celebrate life through the creation and expression of music, dance and art. 
            </div>
            <NavBar class="border-2 border-slate-300 rounded-md"/>
        </div>
    </div>
</template>