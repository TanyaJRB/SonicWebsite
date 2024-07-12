<script setup lang="ts">
// import { ref } from 'vue';
import NavButton from "./NavButton.vue";
import { useNavigation } from "../composables/use.navigation";
import { SubPages } from "../composables/use.navigation";

const props = defineProps<{ applyButtonClass: boolean }>();

const { changeSelectedTab, selectedTab } = useNavigation();
</script>

<template>
  <div class="flex flex-row justify-center gap-x-10 text-xs md:text-md">
    <div v-for="page in SubPages">
      <NavButton
        :class="
          applyButtonClass && selectedTab == page
            ? 'bg-slate-300/40 rounded rounded-full'
            : ''
        "
        :button-text="page"
        @click="changeSelectedTab(page)"
      />
    </div>
  </div>
</template>
