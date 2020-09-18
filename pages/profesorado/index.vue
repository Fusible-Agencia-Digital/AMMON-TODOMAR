<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Profesores del Congreso</h2>
                                <h4 class="text-white">Conoce a los especialistas que te transmitirán lo último en
                                    investigación
                                    <br> y tecnología al servicio de la medicina</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <b-nav tabs justified class="cover-tabs">
                            <b-nav-item :active="activeTab===0" @click="activeTab=0">Internacionales</b-nav-item>
                            <b-nav-item :active="activeTab===1" @click="activeTab=1">Nacionales</b-nav-item>
                        </b-nav>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero End -->
        <!--? Brand Area Start -->
        <section class="team-area pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mt-5 py-5 profesors-container">
                        <div class="row" v-if="activeTab===1">
                            <div class="col-lg-3 col-md-4 col-sm-6" v-for="doc in nationals">
                                <div>
                                    <speaker-component :doctor="doc" color="#242b5e"></speaker-component>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="activeTab===0">
                            <div class="col-lg-3 col-md-4 col-sm-6" v-for="doc in internationals">
                                <div>
                                    <speaker-component :doctor="doc" color="#242b5e"></speaker-component>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Brand Area End -->
    </main>
</template>

<script>
  import SpeakerComponent from "../../components/SpeakerComponent";
  export default {
    components: {SpeakerComponent},
    data() {
      return {
        nationals: [],
        internationals: [],
        activeTab: 0
      }
    },

    async mounted() {
      try {
        this.nationals = await this.$axios.$get(`/speakers?is_foreign=false&_sort=name:ASC`);
        this.internationals = await this.$axios.$get(`/speakers?is_foreign=true&_sort=name:ASC`);
      }catch (e) {
        console.warn(e);
        this.$swal('Error', 'Error al obtener profesores', 'error');
      }

    }
  }
</script>


<style lang="scss" scoped>

    .slider-area2 {
    }


    .team-caption {
        h3, p {
            color: #d9d9d9;
        }
    }

    .profesors-container {

    }

    .single-team {
        margin: 10px;
        background-color: #f2f5f6;
        padding: 10px;
        min-height: 375px;
    }
</style>