<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-left">
                                <h2>Mesa directiva 2019-2021</h2>
                                <h4 class="text-white">{{ title }}</h4>
                                <nuxt-link to="/registro" class="btn btn-transparent">Registro</nuxt-link>
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
                        <div class="card mt-5 directive-table">
                            <div class="card-body">
                                <div class="comments-area">
                                    <template v-for="org in organizers">
                                        <organizer-component :organizer="org"></organizer-component>
                                    </template>
                                    <div class="row organizer-groups">
                                        <div class="col-md-6" v-for="group in groups">
                                            <h2>{{ group.name }}</h2>
                                            <template v-for="org in group.board_directors">
                                                <organizer-component :organizer="org" :hide-picture="true"
                                                                     :hide-title="true"></organizer-component>
                                            </template>
                                        </div>
                                    </div>
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
  import OrganizerComponent from "../components/OrganizerComponent";

  export default {
    components: {OrganizerComponent},
    data() {
      return {
        organizers: [],
        groups: [],
        title: process.env.BASE_APP_TITLE
      }
    },
    async mounted() {
      this.organizers = await this.$axios.$get('/board-directors?board_director_category_null=true');
      this.groups = await this.$axios.$get('/board-director-categories');
    }
  }
</script>

<style lang="scss">

    .slider-area2 {
    }


    .comments-area h5 {
        a {
            &:hover {
                color: #26264b !important;
            }
        }
    }

    .directive-table {
        background-color: #e5f1f3;
    }

    .comment-list {
        border-bottom: 1px solid #86c7d1;
        padding-bottom: 30px;
        margin-bottom: 30px;
    }

    .comments-area {
        padding: 45px 0 0 0 !important;
        border-top: none;
        margin-top: 0px;
    }

    .organizer-groups {
        h2 {
            font-size: 27px;
        }
        .comment-list {
            padding-bottom: 0 !important;
            border: 0 !important;
            margin: 10px 0px;
        }
    }
</style>
