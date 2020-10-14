<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col m-4">

                <div class="row">
                  <div class="col-md-8 offset-md-2">

                    <template v-if="event.activity_category">
                        <h3>Actualmente transmitiendo:</h3>
                        <h2 class="text-white"><nuxt-link to="/programa" class="px-3 py-1" :style="{backgroundColor: event.activity_category.color}">{{ event.activity_category.name }}</nuxt-link></h2>
                    </template>
                    <h1 v-if="event.title" class="mb-4">{{ event.title }}</h1>

                    <div class="embed-responsive embed-responsive-16by9" v-if="channel=='one'">
                        <iframe class="embed-responsive-item" src="https://player.castr.io/live_83fd5620050711ebb1720b1249c4b35d" width="590" height="431" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-12 text-center mt-4" v-if="event.survey_url">
                    <a class="btn" :href="event.survey_url" target="_blank">Ir a encuesta</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const {
  setIntervalAsync,
  clearIntervalAsync
} = require('set-interval-async/dynamic')

export default {

    props:['channel'],

    data: () => ({
        event: {},
    }),

    async mounted() {
      this.refreshEvent();

      if(this.$auth.user.is_free) {
        await this.refreshAccess();
      }
    },

    methods: {
        async getEvent() {
            try {
                this.event = await this.$axios.$get('/activities/current/' + this.channel);
            } catch(e) {
                console.error(e.response);
                this.$swal('Error', 'Error al obtener evento actual', 'error');
            }
        },

        async refreshAccess() {
          let self = this;
            await self.verifyFreeAccess();

            setIntervalAsync(async function() {
              await self.verifyFreeAccess();
            }, 60 * 1000 * 5);
        },

        async refreshEvent() {
            let self = this;
            await self.getEvent();

            setIntervalAsync(async function() {
              await self.getEvent();
            }, 60 * 1000 * 5);
        },

        async verifyFreeAccess() {
            let response  =  await this.$axios.$get('/activities/freeaccess/verify');

            if(!response.access) {
                await this.$swal('Sin acceso', 'Lo sentimos, por el momento no cuentas con acceso a este contenido. Intenta más tarde o verifica tu acceso con un administrador.', "error");
                this.$router.push('/contacto');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    /deep/ .theoplayer-container {
        width: 100% !important;
        padding-top: 56% !important;
    }
</style>
