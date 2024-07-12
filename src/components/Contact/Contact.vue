<script setup lang="ts">
import SubPage from "../SubPage.vue";
import ContactCard from "./ContactCard.vue";
import DjIcon from "../../icons/DjIcon.vue";
import TentIcon from "../../icons/TentIcon.vue";
import CircusIcon from "../../icons/CircusIcon.vue";
import PaintIcon from "../../icons/PaintIcon.vue";
import SocialMediaBar from "./SocialMediaBar.vue";
</script>

<template>
  <SubPage>
    <div class="w-4/5 m-auto flex items-center flex flex-col">
      <SocialMediaBar
        class="h-1/3 w-1/3 items-center bg-slate-900/60 p-10 rounded-full"
      />
      <div
        class="flex flex-col gap-y-12 md:flex-row md:gap-x-4 w-full justify-center"
      >
        <ContactCard
          cardTitle="Camp with us"
          contactName="Hyacinth"
          contactEmail="nomadicwildflower@gmail.com"
          contactSocial="Hyacinth Belcher"
          contactSocialLink="https://www.facebook.com/hyacinth.belcher"
        >
          <template #icon><TentIcon class="h-6 w-6 md:h-12 md:w-12" /></template
        ></ContactCard>
        <ContactCard
          cardTitle="DJs and Musicians"
          contactName="Corey"
          contactEmail="corey@metrotrinity.com"
        >
          <template #icon><DjIcon class="h-6 w-6 md:h-12 md:w-12" /></template
        ></ContactCard>
        <ContactCard
          cardTitle="Performers"
          contactName="Tanya"
          contactEmail="tanya.rashid@hotmail.com"
          contactSocial="@tanyajazmine"
          contactSocialLink="https://www.instagram.com/tanyajazmine/?hl=en#"
        >
          <template #icon
            ><CircusIcon class="h-6 w-6 md:h-12 md:w-12" /></template
        ></ContactCard>
        <ContactCard
          cardTitle="Artists"
          contactName="David"
          contactEmail="davidjordan05@gmail.com"
          contactSocial="@third_eye_gemineye"
          contactSocialLink="https://www.instagram.com/third_eye_gemineye/?hl=en#"
        >
          <template #icon
            ><PaintIcon class="h-6 w-6 md:h-12 md:w-12" /></template
        ></ContactCard>
      </div>
    </div>
  </SubPage>
</template>
