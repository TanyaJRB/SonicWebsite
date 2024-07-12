<script setup lang="ts">
import SocialMediaButton from "./SocialMediaButton.vue";
import SoundCloudIcon from "../../icons/SoundCloudIcon.vue";
import InstagramIcon from "../../icons/InstagramIcon.vue";
import FacebookIcon from "../../icons/FacebookIcon.vue";
</script>

<template>
  <div class="my-12 flex flex-row gap-x-5 justify-center">
    <SocialMediaButton link="https://www.instagram.com/sonicsoultribe/?hl=en#"
      ><template #icon
        ><InstagramIcon class="w-10 h-10" fill="currentColor" /></template
    ></SocialMediaButton>
    <SocialMediaButton link="https://www.facebook.com/SonicSoulTribes/"
      ><template #icon
        ><FacebookIcon class="w-10 h-10" fill="currentColor" /></template
    ></SocialMediaButton>
    <SocialMediaButton link="https://on.soundcloud.com/Wk81iFf8pMK6TU4x9"
      ><template #icon
        ><SoundCloudIcon class="w-10 h-10" fill="currentColor" /></template
    ></SocialMediaButton>
  </div>
</template>
