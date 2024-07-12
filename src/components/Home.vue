<script setup lang="ts">
import HomePage from "./HomePage.vue";
import { useNavigation } from "../composables/use.navigation";
import { SubPages } from "../composables/use.navigation";
import { onMounted } from "vue";
import Culture from "./Culture.vue";
import BurningMan from "./BurningMan.vue";
import Media from "./Media.vue";
import Contact from "./Contact/Contact.vue";

const { selectedTab } = useNavigation();

onMounted(() => {
  console.log(selectedTab.value);
});
</script>

<!-- <template>
  <div
    class="relative min-h-screen w-screen bg-gradient-to-tr from-red-500 to-purple-400"
  >
    <div
      class="absolute inset-0 w-full h-full bg-cover bg-repeat"
      :style="{ backgroundImage: 'url(/src/assets/background.jpg)' }"
    ></div>
    <div class="relative min-h-screen">
      <HomePage v-if="selectedTab == SubPages.Home" />
      <Culture v-if="selectedTab == SubPages.Culture" />
      <BurningMan v-if="selectedTab == SubPages.BurningMan" />
      <Contact v-if="selectedTab == SubPages.Contact" />
      <Media v-if="selectedTab == SubPages.Media" />
    </div>
  </div>
</template> -->
<template>
  <div
    className="bg-gradient-to-tr from-red-500 to-purple-400 relative min-h-screen w-screen"
  >
    <img
      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
      alt="main background image"
      src="/src/assets/background.jpg"
    />
    <div class="relative min-h-screen">
      <HomePage v-if="selectedTab == SubPages.Home" />
      <Culture v-if="selectedTab == SubPages.Culture" />
      <BurningMan v-if="selectedTab == SubPages.BurningMan" />
      <Contact v-if="selectedTab == SubPages.Contact" />
      <Media v-if="selectedTab == SubPages.Media" />
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
</style>
