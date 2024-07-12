<script setup lang="ts">
import SubPage from "./SubPage.vue";
import BurningManIcon from "../icons/BurningManIcon.vue";
</script>

<template>
  <SubPage>
    <div class="h-full w-4/5 m-auto flex flex-col items-center text-white">
      <div
        class="w-full flex flex-row items-center justify-center text-center h-24 m-4 text-2xl"
      >
        Burning
        <BurningManIcon class="h-12 w-12" fill="white" />
        Man 2024
      </div>
      <div class="text-xl m-4">2024 Placement - 2 & Baffle</div>
      <div class="text-md m-4">
        This year will be our smaller year (we alternate between a large stage
        and a smaller stage each year). <br />
        Last year we had our large stage so we were on the corner (2 &
        Esplanade). <br />
        This year we will be at 2 & Baffle for our smaller year.
      </div>
      <img
        class="w-1/3 m-2 mb-6"
        alt="main background image"
        src="/src/assets/2023 map.png"
      />
      <div class="text-xl m-4">2023 Moop Map - 2 & Esplanande</div>
      <div class="text-md m-4">
        Our camp achieved a remarkable outcome with our moop map. With a
        relatively small number for a corner camp, our family of 85 people
        nailed it. The corner camps also have more real estate. We were
        responsible for a hundred feet out on both sides of the corner. Thank
        you Sonic Soul Tribe for an amazing effort of Leave No Trace!
      </div>

      <img
        class="w-1/6 m-2 mb-6"
        alt="main background image"
        src="/src/assets/moop map.jpg"
      />
      <div class="text-xl m-4">2023 Campers</div>
      <img
        class="w-2/3 m-2 mb-6"
        alt="main background image"
        src="/src/assets/2023 crew.jpg"
      />
      <div class="text-xl m-4">Daytime</div>
      <img
        class="w-1/3 m-2 mb-6"
        alt="main background image"
        src="/src/assets/sonic daytime.jpg"
      />
    </div>
  </SubPage>
</template>
