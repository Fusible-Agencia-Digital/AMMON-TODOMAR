// Import Vue
import Vue from 'vue';

// Import VueScheduler
import VueScheduler from 'v-calendar-scheduler';
import 'moment/locale/es';

// Import styles
import 'v-calendar-scheduler/lib/main.css';

Vue.use(VueScheduler, {
  locale: 'es',
  initialView: 'day',
  use12: true,
  availableViews: [],
  showTodayButton: false,
  labels: {
    today: 'Hoy',
    back: 'Atrás',
    next: 'Siguiente',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    all_day: 'Todo el día'
  },
  hasDynamicSize: false,
  eventDisplay: 'name'
});