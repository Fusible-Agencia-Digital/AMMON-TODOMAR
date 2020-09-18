<template>
    <img v-if="!picture && !hideAvatar" src="~/assets/img/elements/user_avatar.jpg" class="img-fluid">
    <img v-else-if="picture" :src="base_image + picture.url" class="img-fluid">
</template>

<script>

  export default {
    name: "image-component",
    // Picture argument is Picture object from Strapi upload
    props: ['picture', 'hideAvatar'],

    data() {
      return {
        base_image: process.env.BASE_URL_IMAGE
      }
    }
  }
</script>

<style>
    img {
        display: block;
        margin: auto;
    }
</style>