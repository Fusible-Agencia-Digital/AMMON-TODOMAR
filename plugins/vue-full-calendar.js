import Vue from 'vue';
import FullCalendar from 'vue-full-calendar';

import 'fullcalendar/dist/fullcalendar.css'
import 'fullcalendar/dist/locale/es'

Vue.use(FullCalendar, {
  locale: 'es',
  timeZone: 'UTC'
});