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

<template>
  <div
    className="bg-gradient-to-tr from-red-500 to-purple-400 relative h-screen w-screen"
  >
    <img
      className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50"
      alt="main background image"
      src="/src/assets/background.jpg"
    />

    <HomePage v-if="selectedTab == SubPages.Home" />
    <Culture v-if="selectedTab == SubPages.Culture" />
    <BurningMan v-if="selectedTab == SubPages.BurningMan" />
    <Contact v-if="selectedTab == SubPages.Contact" />
    <Media v-if="selectedTab == SubPages.Media" />
  </div>
</template>
