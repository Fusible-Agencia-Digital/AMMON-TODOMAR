<template>
    <!--? accordion -->
    <section class="blog_area section-padding">
        <div class="container">
            <div class="row" v-if="!loadingCalendar">
                <div class="col-md-3">
                    <aside class="single_sidebar_widget post_category_widget d-none d-md-block">
                        <h4 class="widget_title mb-3">Categorías</h4>
                        <ul class="list cat-list">
                            <li>
                                <button class="btn btn-color btn-white mb-1 w-100"
                                        :style="{backgroundColor: '#FFF', color: '#eb008a'}"
                                        @click="getEvents({})"
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
                                            @click="getEvents({})"
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
                <div class="col" id="activities">
                    <b-nav tabs justified small>
                        <b-nav-item active v-for="(day, index) in days" :key="index" :active="index===activeTab"
                                    @click="getEvents({date: day, index})">{{ $moment(day).format("DD [de] MMM") }}
                        </b-nav-item>
                    </b-nav>
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <h4 class="widget_title mb-3 text-center">Canal 1</h4>
                            <client-only>
                                <vue-scheduler
                                        :events="eventsOne"
                                        :event-display="eventDisplay"
                                        :initial-date="currentDay"
                                        :time-range="timeRangeOne"
                                        @event-clicked="goToActivity"></vue-scheduler>
                            </client-only>
                        </div>
                        <div class="col-md-6">
                            <h4 class="widget_title mb-3 text-center">Canal 2</h4>
                            <client-only>
                                <vue-scheduler
                                        :events="eventsTwo"
                                        :event-display="eventDisplay"
                                        :initial-date="currentDay"
                                        :time-range="timeRangeTwo"
                                        @event-clicked="goToActivity"></vue-scheduler>
                            </client-only>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- accordion End -->
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

      }
    },

    async mounted() {
      try {
        this.categories = await this.$axios.$get('/activity-categories');
        this.days = this.arrayBetweenDates(this.currentEvent.start_date, this.currentEvent.end_date);

        if (this.days.length) {
          this.activeTab = 0;
        }

        await this.getEvents({});

      } catch (e) {
        console.error(e);
        this.$swal('Error', 'Error al obtener datos', 'error')
      }
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

      async getEvents({date = this.currentEvent.start_date, index = 0, activity_category = null}) {
        try {
          let params = {
            //start_date: date,
            activity_category
          };

          this.loadingCalendar = true;
          this.currentDay = this.$moment(date);
          this.eventsOne = await this.$axios.$get('/activities', {params: {...params, channel: 'one'}});
          this.eventsTwo = await this.$axios.$get('/activities', {params: {...params, channel: 'two'}});
          this.activeTab = index;

          this.timeRangeOne = this.getTimeRange(this.eventsOne);
          this.timeRangeTwo = this.getTimeRange(this.eventsTwo);

          this.loadingCalendar = false;

        } catch (e) {
          console.error(e);
          this.$swal('Error', 'Error al obtener datos', 'error')
        }
      },

      goToActivity(event) {
        if (!this.detailDisabled)
          this.$router.push({name: 'programa-slug', params: {slug: event.slug}})
      },

      eventDisplay(event) {
        let label = event.name + ' - ';

        event.speakers.forEach(speaker => {
          label = label + speaker.name;
        });

        return label;
      },

      getTimeRange(array) {
        return [this.getStartTime(array), this.getEndTime(array)]
      },

      getStartTime(array) {
        if(!array.length) return 0;

        return Math.min.apply(Math, array.map(function (object) {
          return parseInt(object.startTime);
        }));
      },
      getEndTime(array) {
        if(!array.length) return 0;

        return Math.max.apply(Math, array.map(function (object) {
          return parseInt(object.endTime);
        }));
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
    /deep/ .v-cal-header {
        display: none !important;
    }

    /deep/ .v-cal-day__hour-content {
        overflow-y: scroll;
    }

    /deep/ .v-cal-event-item {
        min-height: 30px;
    }

    .btn-color {
        padding: 27px 40px !important;

        &::before {
            background: none;
        }
    }

    .btn-white {
        &:hover {
            color: rgb(235, 0, 138) !important;
        }
    }

    /deep/ .v-cal-event-time  {
        display: none !important;
    }

    /deep/ .v-cal-event-name {
        z-index: 9;
        animation: right_to_left 6s ease;
        animation-iteration-count: infinite;
    }

    @keyframes right_to_left {
        from {
            margin-left: 100%;
        }
        to {
            margin-left: -100%;
        }
    }
</style>

