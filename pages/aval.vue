<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-left">
                                <h2>Aval</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero End -->
        <!--? Brand Area Start -->
        <section class="team-area pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <div class="card mt-5">
                            <div class="card-body">
                                <p>Las constancias digitales estarán disponibles para su descarga a partir del 24 de octubre siempre y cuando se cumpla el 80% de asistencias al programa correspondiente.</p>
                                <p>Las constancias contarán con el aval de los siguientes consejos:</p>
                                <ul>
                                    <li>Consejo Mexicano de Oncología</li>
                                    <li>Consejo Mexicano de Ginecología y Obstetricia</li>
                                    <li>Consejo Mexicano de Certificación en Radioterapia</li>
                                </ul>
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
  import OrganizerComponent from "../components/OrganizerComponent";

  export default {
    components: {OrganizerComponent},
    data() {
      return {
        organizers: [],
        groups: [],
      }
    },
    async mounted() {
      this.organizers = await this.$axios.$get('/board-directors?board_director_category_null=true');
      this.groups = await this.$axios.$get('/board-director-categories');
    }
  }
</script>

<style lang="scss" scoped>
    li {
        list-style: circle !important;
        margin-left: 20px;
    }
</style>
