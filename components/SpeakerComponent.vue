<template>
    <div class="single-team mb-30" v-if="doctor">
        <div class="team-img">
            <image-component :picture="doctor.picture" :hide-avatar="hideAvatar" v-if="disabled"></image-component>
            <nuxt-link :to="`/profesorado/${ doctor.slug }`" v-if="!disabled">
                <image-component :picture="doctor.picture"></image-component>
            </nuxt-link>
            <!-- Blog Social -->
            <ul class="team-social">
                <li v-for="activity in doctor.activities"><nuxt-link :to="`/programa/${activity.slug}`" v-b-tooltip.hover :title="activity.title"><fa icon="calendar"></fa></nuxt-link></li>
            </ul>
        </div>
        <div class="team-caption">
            <h3 class="text-center"  v-if="doctor.job_title">{{ `${doctor.job_title}` }}</h3>
            <h3 class="text-center" v-if="doctor.name">{{ `${doctor.name} ${doctor.last_name}` }}</h3>
        </div>
    </div>
</template>


<script>
    export default {
      name: "speaker-component",
      props: ['doctor', 'color', 'disabled', 'hideAvatar']
    }
</script>

<style lang="scss">
    @import "assets/scss/color";

    .team-img img {
        border-radius: 50% !important;
    }

    .team-caption {
        h3 {
            color: $theme-color !important;
        }
    }
</style>
