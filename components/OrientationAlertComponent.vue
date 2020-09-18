<template>
    <div class="alert alert-warning alert-orientation">
        <p class="text-center">Recomendamos mantener tu dispositivo en posición horizontal para una mejor experiencia de usuario.</p>
    </div>
</template>

<script>
  export default {
    name: "OrientationAlertComponent"
  }
</script>

<style lang="scss" scoped>

    @import 'assets/scss/variables';

    .alert-orientation {
        margin: 0;
    }

    @media screen and (orientation:landscape) {
        .alert-orientation {
            display: none;
        }
    }
</style>