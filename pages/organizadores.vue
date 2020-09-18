<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Organizadores</h2>
                                <h4 class="text-white">Congreso 2020</h4>
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
                    <div class="col-md-6 offset-md-3">
                        <div class="card mt-5 executive-table" v-if="executive.length">
                            <div class="card-header">
                                <h3 class="text-center">Comité científico</h3> <!-- TODO IS A DUPLICATED TITLE -->
                            </div>
                            <div class="card-body">
                                <div class="comments-area">
                                    <template v-for="org in executive">
                                        <organizer-component :organizer="org"></organizer-component>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-5 group-table" v-if="groups.length">
                            <div class="card-header">
                                <h3 class="text-center">Comité científico</h3>
                            </div>
                            <div class="card-body board-director-groups" >
                                <div class="comments-area" v-for="group in groups">
                                    <h2>{{ group.name }}</h2>
                                    <template v-for="org in group.organizers">
                                        <organizer-component :organizer="org" :hide-picture="true"
                                                             :hide-title="true"></organizer-component>
                                    </template>
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
  export default {
    data() {
      return {
        executive: [],
        groups: [],
      }
    },
    async mounted() {
      this.executive = await this.$axios.$get('/organizers?organizer_category_null=true');
      this.groups = await this.$axios.$get('/organizer-categories');
    }
  }
</script>

<style lang="scss">
    @import "assets/scss/color";

    .slider-area2 {
    }

    .directive-table {
        background-color: rgba(0, 0, 0, 0.01);
    }

    .comments-area {
        border-top: none !important;
        margin-top: 0px !important;
    }

    .comment-list {
        border-bottom: none;
        padding-bottom: 30px;
        margin-bottom: 0px;
    }

    .board-director-groups {
        .comments-area {
            padding-top: 15px;
            padding-bottom: 15px;
        }
        h2 {
            font-size: 27px;
        }
        .comment-list {
            padding-bottom: 0 !important;
            border: 0 !important;
            margin: 10px 0px;
        }
    }

    .executive-table {
        background-color: $theme-color5;
    }
</style>
