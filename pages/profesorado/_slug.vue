<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>{{ speaker.name }} {{ speaker.last_name }}</h2>
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
                    <div class="col-md-3">
                        <div class="blog_right_sidebar" v-if="speaker.activities">
                            <aside class="single_sidebar_widget popular_post_widget">
                                <h3 class="widget_title">Eventos programados con {{ speaker.name }} {{ speaker.last_name }}:</h3>
                                <div class="socials">
                                    <a v-for="activity in speaker.activities" class="social-link" :href="`/programa/${activity.slug}`">{{ activity.title }}</a>
                                </div>
                            </aside>
                        </div>
                    </div>
                    <div class="col">
                        <div class="blog_left_sidebar">
                            <article class="blog_item">
                                <div class="blog_item_img">
                                    <image-component :picture="speaker.picture"></image-component>
                                </div>
                                <div class="blog_details">
                                    <h3 class="blog-head text-center" style="color: #2d2d2d;">{{ `${speaker.name} ${speaker.last_name} - ${speaker.job_title}` }}</h3>
                                    <p class="mt-5" v-html="speaker.biography"></p>
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
  
  export default {
    async asyncData({ $axios, params }) {
      const speaker = await $axios.$get(`/speakers/slug/${params.slug}` );
      console.warn(speaker);
      return {speaker}
    }
  }
</script>


<style lang="scss" scoped>
    @import "assets/scss/color";

    .socials {
        display: inline-grid;
    }
    .social-link {
        color: $theme-color !important;
        margin: 10px;

        &:hover {
            color: $theme-color !important;
        }
    }
</style>