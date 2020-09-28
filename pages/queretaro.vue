<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-left">
                                <h2>Congreso AMMOM</h2>
                                <h4 class="text-white">Querétaro 2021</h4>
                                <!--nuxt-link to="/registro" class="btn btn-transparent">Registro</nuxt-link>-->
                                <img src="~/assets/img/logo/logo_header.png" alt="" width="300px" class="float-left">

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
                               <img src="~/assets/images/Poster_2021.jpg" alt="" width="100%">
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
