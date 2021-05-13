<template>
  <main class="container my-4">
    <h2>Resultados de aprobación:</h2>

    <div>
      <div
        class="card"
        v-for="(dateValue, dateKey, index) in data"
        :key="index"
      >
        <div
          class="card-header"
          id="headingOne"
          v-b-toggle="`collapse-${index}`"
        >
          <h4 class="mb-0">
            {{ dateKey }}
          </h4>
        </div>

        <b-collapse :id="`collapse-${index}`" class="mt-2 px-4">
          <p class="link" v-b-toggle="`users-${index}`"><b>Usuarios registrados durante este día: </b> {{ Object.keys(dateValue.users).length }}</p>
          <b-collapse :id="`users-${index}`" class="mt-2">
            <b-card>
              <div v-for="(userValue, userKey, indexUsers) in dateValue.users" :key="indexUsers">
                <p> <b>Día: </b>{{ dateKey }}</p>
                <p> <b>Nombre:</b> {{`${userValue.user.nombre} ${userValue.user.apellidoP} ${userValue.user.apellidoM}`}}</p>
                <p> <b>Email:</b> {{userKey}}</p>
                <p> <b>Porcentaje de tiempo en línea:</b> {{userValue.percentage_online ? userValue.percentage_online.toFixed(2) : '0'}}%</p>
                <p> <b>Aprobado:</b> <span class="badge" :class="userValue.approved ? 'bg-success' : 'bg-danger'">{{userValue.approved ? 'Sí' : 'No'}}</span> </p>
                <p class="link" v-b-toggle="`tracks-${index}-${indexUsers}`"><b>Tracking de usuario: </b> {{ userValue.tracks.length }}</p>

                <b-collapse :id="`tracks-${index}-${indexUsers}`" class="mt-2">
                  <b-card>
                      <p v-for="(track, indexTracks) in userValue.tracks" :key="indexTracks"> <b>Fecha y hora: {{`${date(track.starts_at)} a ${date(track.ends_at)}`}}</b></p>
                  </b-card>
                </b-collapse>
                <hr>
              </div>
            </b-card>
          </b-collapse>


          <p class="link" v-b-toggle="`activities-${index}`"><b>Actividades/conferencias totales:</b> {{ dateValue.activities.length }}</p>
          <b-collapse :id="`activities-${index}`" class="mt-2">
            <b-card>
              <div v-for="(activity, indexActivities) in dateValue.activities" :key="indexActivities">
                <p> <b>Horario:</b> {{`${date(activity.start_date)} a ${date(activity.end_date)}`}}</p>
                <p> <b>Actividad/conferencia:</b> {{activity.title}}</p>
                <p> <b>Duración:</b> {{activity.duration.toFixed(2)}}hr(s)</p>
                <hr>
              </div>
            </b-card>
          </b-collapse>


          <p> <b>Horas totales de stream:</b> {{ dateValue.total_hours.toFixed(2) }} hr(s)</p>


          
        </b-collapse>
      </div>
    </div>
  </main>
</template>


<script>
import json from "../static/response.json";
export default {
  name: "index",
  middleware: ["authenticated"],

  data: () => ({
    data: json,
  }),

  methods: {
    date(date) {
      return this.$moment(date).format("YYYY-MM-DD H:mm")
    }
  }
};
</script>

<style lang="scss" scoped>
b, .link {
  color: #000 !important;
}

.link {
  text-decoration: underline;
}
</style>
