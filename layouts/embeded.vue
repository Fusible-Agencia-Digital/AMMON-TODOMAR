<template>
    <div>
        <Nuxt/>
    </div>
</template>


<script>
    export default {
      async fetch() {
        try {

          let data = await this.$axios.$get('/event');

          this.saveEvent(data);

          this.loadingDates = false;
        } catch (e) {
          console.error(e);
          this.$swal('Error', 'Error al obtener evento', 'error');
        }
      },

      methods: {
        saveEvent(event) {
          this.$store.commit('saveEvent', event);
        },
      }
    }
</script>


