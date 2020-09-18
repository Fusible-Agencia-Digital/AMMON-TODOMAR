<template>
    <div class="comment-list">
        <div class="single-comment justify-content-between d-flex">
            <div class="user justify-content-between d-flex">
                <div class="thumb" v-if="!hidePicture">
                    <image-component :picture="organizer.picture"></image-component>
                </div>
                <div class="desc">
                    <p class="comment" v-if="!hideTitle">{{ organizer.job_title }}</p>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex align-items-center">
                            <h5 v-if="organizer.external_link"><a href="#">{{ `${ organizer.name } ${ organizer.last_name }` }}</a></h5>
                            <h5 v-else>{{ `${ organizer.name } ${ organizer.last_name }` }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "organizer-component",
    props: ['organizer', 'hidePicture', 'hideTitle']
  }
</script>

<style scoped>

</style>