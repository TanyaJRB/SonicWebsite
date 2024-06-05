<script setup lang="ts">
import { ref } from 'vue'
import NavButton from './NavButton.vue';

</script>

<template>

  <div className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
        alt="main background image"
        src="/src/assets/background.jpg"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center font-mono text-white">
          <div className="space-y-8">
            <div className="font-extrabold text-3xl sm:text-4xl md:text-5xl md:leading-tight">
             Sonic Soul Tribe
            </div>
            <div className="font-secondary text-palette-light md:text-lg lg:text-xl">
              We celebrate life through the creation and expression of music, dance and art. 
            </div>
            <div class="flex flex-row justify-center gap-x-10 border-2 border-slate-300 rounded-md text-xs md:text-md">
              <NavButton button-text="Culture"/>
              <NavButton button-text="Burning Man"/>
              <NavButton button-text="Campers"/>
              <NavButton button-text="Media"/>
            </div>
          </div>
      
      </div>
    </div>

</template>

