import { createSharedComposable } from '@vueuse/core';
import { Ref, ref} from 'vue';

export enum SubPages {
    Home = "Home",
    Culture = "Culture",
    BurningMan = "Burning Man",
    Contact = "Contact",
    Media = "Media"
};

interface UseNavigationReturn {
  selectedTab: Ref<SubPages>;
  changeSelectedTab(subPage: SubPages): void;
}

function useNavigationComposable(): UseNavigationReturn {
  const selectedTab = ref(SubPages.Home);
  function changeSelectedTab(subPage: SubPages){
    selectedTab.value = subPage;
}

  return {
    selectedTab,
    changeSelectedTab
  };
}

export const useNavigation = createSharedComposable(useNavigationComposable);