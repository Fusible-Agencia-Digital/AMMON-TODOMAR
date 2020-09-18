<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2" id="banner-image">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>{{ activity.title }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero End -->
        <!--? accordion -->
        <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 mb-100">
                        <div class="blog_right_sidebar">
                            <aside class="single_sidebar_widget popular_post_widget">
                                <div class="media post_item">
                                    <div class="media-body">
                                        <h4>Transmitido por <b>canal {{ activity.channel === 'one' ? '1' : '2' }}</b>
                                        </h4>
                                        <h2>{{ dateString }}</h2>
                                        <h3>{{ time }}</h3>
                                    </div>
                                </div>
                            </aside>
                            <aside class="single_sidebar_widget popular_post_widget">
                                <h3 class="widget_title">Comparte</h3>
                                <div class="social-icons" v-if="activity">
                                    <ShareNetwork
                                            network="facebook"
                                            :url="activityUrl"
                                            :title="activity.title"
                                            hashtags="AMM2020">
                                        <fa :icon="['fab', 'facebook-f']"></fa>
                                    </ShareNetwork>
                                    <ShareNetwork
                                            network="twitter"
                                            :url="activityUrl"
                                            :title="activity.title"
                                            hashtags="AMM2020">
                                        <fa :icon="['fab', 'twitter']"></fa>
                                    </ShareNetwork>
                                    <ShareNetwork
                                            network="whatsapp"
                                            :url="activityUrl"
                                            :title="activity.title">
                                        <fa :icon="['fab', 'whatsapp']"></fa>
                                    </ShareNetwork>
                                </div>
                            </aside>
                            <aside class="single_sidebar_widget popular_post_widget">
                                <h3 class="widget_title">Agéndalo</h3>
                                <button class="btn btn-sm" @click="addToCalendar">Añadir</button>
                                <client-only>
                                    <add-to-calendar :title="activity.title"
                                                     :start="$moment(activity.start_date).toDate()"
                                                     :end="$moment(activity.end_date).toDate()"
                                                     inline-template class="btn btn-sm btn-calendar">
                                        <div>

                                            <google-calendar id="google-calendar">
                                                <i class="fa fa-google"></i> Google calendar
                                            </google-calendar>
                                        </div>
                                    </add-to-calendar>
                                </client-only>
                            </aside>
                        </div>
                    </div>
                    <div class="col">
                        <div class="blog_left_sidebar">
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <image-component v-if="activity.picture" :picture="activity.picture"
                                                     class="card-img rounded-0"></image-component>
                                    <div class="blog_item_date">
                                        <h3>{{ dateDay }}</h3>
                                        <p>{{ dateMonth }}</p>
                                    </div>
                                </div>
                                <div class="blog_details">
                                    <h3 class="blog-head" style="color: #2d2d2d;">{{ activity.title }}</h3>
                                    <div v-html="activity.description"></div>
                                    <div class="row team-area mt-5">
                                        <div class="col" v-if="activity.speakers.length">
                                            <h2 class="blog-head ml-5" style="color: #2d2d2d;">Imparte:</h2>
                                            <div class="row">
                                                <div class="col-6 col-md-3"
                                                     v-for="speaker in activity.speakers">
                                                    <speaker-component :doctor="speaker"></speaker-component>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col " v-if="activity.moderator">
                                            <h2 class="blog-head ml-5" style="color: #2d2d2d;">Modera:</h2>
                                            <div class="row">
                                                <div class="col-6 col-md-3 moderator-info">
                                                    <speaker-component :doctor="activity.moderator" :disabled="true" :hide-avatar="true"></speaker-component>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- accordion End -->
    </main>
</template>


<script>

  const ics = require('ics');

  export default {

    data: () => ({
      loadingCoverImage: true
    }),

    async asyncData({$axios, params}) {
      const activity = await $axios.$get(`/activities/${params.slug}`);
      return {activity}
    },

    methods: {
      addToCalendar() {

        let startDate = this.$moment(this.activity.start_date).toArray();
        startDate.pop();
        startDate[1] = startDate[1] + 1;

        const event = {
          start: startDate,
          duration: {minutes: 30},
          title: this.activity.title,
          status: 'CONFIRMED',
        };

        ics.createEvent(event, (error, vcard) => {
          if (error) {
            console.log(error);
            return;
          }

          const url = window.URL.createObjectURL(new Blob([vcard]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'event.ics');
          document.body.appendChild(link);
          link.click();

        })
      },

      setCategoryPicture() {
        let element = this.$el.querySelector('#banner-image');
        try {
          if (this.activity.activity_category) {
            if (this.activity.activity_category.picture) {
              element.style.backgroundImage = `url(${this.backendImage}${this.activity.activity_category.picture.url})`;
            }
          }
        } catch (e) {
          console.error(e);
        }
      }
    },

    mounted() {
      this.setCategoryPicture();
    },


    computed: {
      dateString() {
        return this.$moment(this.activity.start_date).format('DD [de] MMMM');
      },
      time() {
        return 'De ' + this.$moment(this.activity.start_date).format('LT') + ' a ' + this.$moment(this.activity.end_date).format('LT');
      },
      dateDay() {
        return this.$moment(this.activity.start_date).format('DD');
      },
      dateMonth() {
        return this.$moment(this.activity.start_date).format('MMMM');
      },
      activityUrl() {
        return process.env.BASE_DOMAIN + this.$route.fullPath;
      },
      backendImage() {
        return process.env.BASE_URL_IMAGE;
      }
    }
  }
</script>


<style lang="scss" scoped>
    @import "assets/scss/color";

    .slider-area2 {
        background-image: url(/images/banner_programa.jpg);
    }

    $fb: #4266b2;
    $tw: #39a1f2;
    $wa: #25D366;

    /deep/ .vue-add-to-calendar {
        color: #FFF !important;

        &:hover {
            color: #FFF !important;
            -webkit-text-fill-color: #FFF;
        }
    }

    .btn-sm {
        padding: 15px 5px !important;
        margin-bottom: 10px !important;
        width: 100% !important;
        color: #FFF !important;

        &:hover {
            color: #FFF !important;
            -webkit-text-fill-color: inherit;
        }
    }

    .moderator-info {
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: #EEEEEE
    }

    /deep/ .social-icons {
        a {
            border-radius: 50%;
            color: #FFF !important;
            cursor: pointer;

            &:hover {
                -webkit-background-clip: unset !important;
            }
        }

        .share-network-facebook {
            background-color: $fb;
            padding: 10px 17px;

            &:hover {
                background: $fb !important;
            }
        }

        .share-network-twitter {
            background-color: $tw;
            padding: 10px 14px;

            &:hover {
                background: $tw !important;
            }
        }

        .share-network-whatsapp {
            background-color: $wa;
            padding: 10px 15px;

            &:hover {
                background: $wa !important;
            }
        }
    }

    /deep/ .single-team {
        .team-caption {
            h3 {
                font-size: 1rem;
            }
        }
    }


</style>