<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Programa</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <menu-tabs-component>
                <b-nav-item v-for="(day, index) in days" :key="index" :active="activeTab===index"
                            :class="{'active': activeTab===index}"
                            @click="[getEvents({date: day}), activeTab=index]">{{ $moment(day).format("DD [de] MMM") }}
                </b-nav-item>
                <b-nav-item :active="activeTab==='all'" @click="activeTab='all'"
                            :class="{'active': activeTab==='all'}"
                >
                    Vista general
                </b-nav-item>
            </menu-tabs-component>
        </div>
        <!-- Hero End -->
        <!--? accordion -->
        <section class="blog_area section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="pdf-download">
                            <h4>
                                <a href="/docs/Programa-SOMOS.pdf" download="">
                                    <img src="~/assets/images/pdf-download.png" alt="">
                                    Bajar programa
                                </a>
                            </h4>
                        </div>
                        <aside class="single_sidebar_widget post_category_widget d-none d-md-block">
                            <h4 class="widget_title mb-3">Categorías</h4>
                            <ul class="list cat-list">
                                <li>
                                    <button class="btn btn-color btn-white mb-1 w-100"
                                            @click="getEvents()"
                                    >Todos
                                    </button>
                                </li>
                                <li v-for="category in categories">
                                    <button class="btn btn-color mb-1 w-100"
                                            :style="{backgroundColor: category.color}"
                                            @click="getEvents({activity_category: category.id})"
                                    >{{ category.name }}
                                    </button>
                                </li>
                            </ul>
                        </aside>
                        <!-- For MOBILE -->
                        <div class="d-md-none">
                            <h4 class="widget_title mb-4" v-b-toggle.collapse-categories>Categorías
                                <fa icon="angle-down"></fa>
                            </h4>
                            <b-collapse id="collapse-categories">
                                <ul class="list cat-list">
                                    <li>
                                        <button class="btn btn-color btn-white mb-1 w-100"
                                                :style="{backgroundColor: '#FFF', color: '#eb008a'}"
                                                @click="getEvents()"
                                        >Todos
                                        </button>
                                    </li>
                                    <li v-for="category in categories">
                                        <button class="btn btn-color mb-1 w-100"
                                                :style="{backgroundColor: category.color}"
                                                @click="getEvents({activity_category: category.id})"
                                        >{{ category.name }}
                                        </button>
                                    </li>
                                </ul>
                            </b-collapse>
                        </div>
                    </div>

                    <div class="col" id="activities" v-if="!loadingCalendar">
                        <div class="row mt-4" v-if="activeTab!=='all'">
                            <div class="col-md-6">
                                <h4 class="widget_title mb-3 text-center">Canal 1</h4>
                                <client-only>
                                    <vue-scheduler
                                            ref="eventsOne"
                                            :events="eventsOne"
                                            :initial-date="currentDay"
                                            :time-range="timeRangeOne"
                                            :disable-dialog="true"
                                            @event-clicked="goToActivity"></vue-scheduler>
                                </client-only>
                            </div>
                            <div class="col-md-6">
                                <h4 class="widget_title mb-3 text-center">Canal 2</h4>
                                <client-only>
                                    <vue-scheduler
                                            :events="eventsTwo"
                                            :initial-date="currentDay"
                                            :time-range="timeRangeTwo"
                                            :disable-dialog="true"
                                            @event-clicked="goToActivity"></vue-scheduler>
                                </client-only>
                            </div>
                        </div>
                        <div class="row event-general" v-for="event in allEvents" @click="goToActivity(event)"
                             v-if="activeTab==='all'">
                            <div class="col">
                                <h6 class="bold"><span :style="{color: event.activity_category.color}">{{ event.activity_category.name }}</span>
                                    <span class="text-black ml-2">Canal {{ event.channel === 'one' ? '1' : '2' }}</span>
                                </h6>
                                <h6 class="bold title">{{ event.title }}</h6>
                                <h6><span
                                        class="bold text-black">{{ $moment(event.start_date).format('D [de] MMMM') }}</span>
                                    <span>De {{ $moment(event.start_date).format('LT') }} a {{ $moment(event.end_date).format('LT') }} hrs.</span>
                                </h6>
                                <p v-if="event.speakers.length">Imparte: <span
                                        v-for="(speaker, speakerIndex) in event.speakers">{{ `${speaker.name} ${speaker.last_name}` }}<span
                                        v-if="speakerIndex!==event.speakers.length-1">, </span></span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col" v-else>
                        <fa icon="spinner" class="fa-3x icon fa-spin d-block mx-auto mt-195"></fa>
                        <h1 class="d-block m-auto text-center">Cargando...</h1>
                    </div>
                </div>
            </div>
        </section>
        <!-- accordion End -->
    </main>
</template>


<script>

  import {mapState} from 'vuex';

  export default {
    name: "schedule-component",

    props: ['detailDisabled'],

    data() {
      return {
        loadingCalendar: true,
        activeTab: null,
        currentDay: null,
        days: [],
        categories: [],
        eventsOne: [],
        eventsTwo: [],
        timeRangeOne: [0, 0],
        timeRangeTwo: [0, 0],
        allEvents: []
      }
    },

    async fetch() {
      try {
        this.categories = await this.$axios.$get('/activity-categories');
        this.days = this.arrayBetweenDates(this.currentEvent.start_date, this.currentEvent.end_date);

        if (this.days.length) {
          this.activeTab = 0;
        }
      } catch (e) {
        console.error(e);
        this.$swal('Error', 'Error al obtener datos', 'error')
      }
    },

    async mounted() {
      this.currentDay = this.$moment(this.currentEvent.start_date);
      await this.getEvents();
    },

    methods: {
      arrayBetweenDates(startDate, endDate) {
        let dates = [];
        let currDate = this.$moment(startDate).startOf('day');
        let lastDate = this.$moment(endDate).startOf('day');

        dates.push(currDate.clone().toDate());

        while (currDate.add(1, 'days').diff(lastDate) <= 0) {
          dates.push(currDate.clone().toDate());
        }
        return dates;
      },

      async getEvents({date = this.currentDay, activity_category = null} = {}) {
        try {
          let startDate = this.$moment(date).set({hour: 0, minute: 0, second: 0, millisecond: 0});
          let params = {
            start_date_gte: startDate.format(),
            start_date_lte: startDate.add('1', 'days').format(),
            activity_category
          };

          this.currentDay = this.$moment(date);
          this.loadingCalendar = true;
          this.allEvents = await this.$axios.$get('/activities?_sort=start_date:ASC');
          this.eventsOne = await this.$axios.$get('/activities/schedule', {params: {...params, channel: 'one'}});
          this.eventsTwo = await this.$axios.$get('/activities/schedule', {params: {...params, channel: 'two'}});

          this.timeRangeOne = this.getTimeRange(this.eventsOne);
          this.timeRangeTwo = this.getTimeRange(this.eventsTwo);

          this.loadingCalendar = false;

          setTimeout(() => {
            this.setHeights();
            window.dispatchEvent(new Event('resize'));
          }, 100);

        } catch (e) {
          console.error(e);
          this.$swal('Error', 'Error al obtener datos', 'error')
        }
      },

      goToActivity(event) {
        if (!this.detailDisabled)
          this.$router.push({name: 'programa-slug', params: {slug: event.slug}})
      },

      getTimeRange(array) {
        return [this.getStartTime(array), this.getEndTime(array)]
      },

      getStartTime(array) {
        if (!array.length) return 0;

        return Math.min.apply(Math, array.map(function (object) {
          return parseInt(object.startTime);
        }));
      },

      getEndTime(array) {
        if (!array.length) return 0;

        return Math.max.apply(Math, array.map(function (object) {
          return parseInt(object.endTime);
        }));
      },

      setHeights() {
        let activities = this.$el.querySelectorAll('.v-cal-day__hour-block');
        let hours = this.$el.querySelectorAll('.v-cal-hour');

        activities.forEach((activityDiv, index) => {
          let hasElements = !!activityDiv.querySelectorAll('.v-cal-event-item').length;

          if (activityDiv.classList.contains('has-marker') && hasElements) {
            hours[index].style.height = '150px';
            activityDiv.style.height = '150px';
          }

          if (!activityDiv.classList.contains('has-marker')) {
            hours[index].style.display = 'none';
            activityDiv.style.display = 'none';
          }
        })
      }
    },


    computed: {
      ...mapState({
        currentEvent: 'event'
      })
    }
  }
</script>


<style lang="scss" scoped>
    @import "assets/scss/color";

    /deep/ .v-cal-header {
        display: none !important;
    }

    /deep/ .has-marker {
        overflow: hidden;
    }

    /deep/ .v-cal-event-item {
        //height: auto !important;
        position: absolute !important;
        width: 100% !important;
        left: 0 !important;
        overflow: unset;

        .v-cal-event-name {
            white-space: normal;
            margin: 0;
        }
    }

    .btn-color {
        padding: 15px 30px !important;
        line-height: normal;
        text-align: center;

        &::before {
            background: none;
        }
    }

    .btn-white {
        color: $theme-color !important;
        background-color: #FFF !important;
        border: 1px solid $theme-color;

        &:hover {
            color: $theme-color !important;
            background-color: #FFF !important;
        }
    }


    .pdf-download {
        margin-bottom: 50px;

        img {
            width: 30px;
            display: flex;
            float: left;
            margin-right: 20px;
        }
    }


    @keyframes right_to_left {
        from {
            margin-left: 100%;
        }
        to {
            margin-left: -100%;
        }
    }

    .event-general {
        border: 1px solid #404040;
        border-radius: 15px;
        padding: 15px;
        margin-top: 25px;
        cursor: pointer;

        h6, p {
            color: #666;
        }

        p {
            margin-bottom: 0;
        }

        .bold {
            font-weight: bold;
        }

        .text-black {
            color: #000;
        }
    }
</style>
