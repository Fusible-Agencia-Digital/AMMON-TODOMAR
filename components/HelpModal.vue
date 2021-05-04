<template>
  <div>
    <div class="p-4">
      <b-form @submit.prevent="sendMessage()">
        <b-form-group label="Nombre (s)" label-for="input-nombre">
          <b-form-input
            type="text"
            required
            v-model="message.name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Apellido Paterno" label-for="input-apellido-p">
          <b-form-input
            type="text"
            required
            v-model="message.last_name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Apellido Materno" label-for="input-apellido-m">
          <b-form-input
            type="text"
            required
            v-model="message.mother_last_name"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Email" label-for="input-email">
          <b-form-input
            type="email"
            required
            v-model="message.email"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Duda o problématica" label-for="input-duda">
          <b-form-textarea
            type="text"
            required
            v-model="message.message"
          ></b-form-textarea>
        </b-form-group>
        <b-button
          variant="primary"
          class="float-right"
          type="submit"
          :disabled="disabled"
          >Enviar</b-button
        >
      </b-form>
    </div>
  </div>
</template>


<script>
export default {
  props: ['type'],

  data() {
    return {
      message: {
        name: "",
        last_name: "",
        mother_last_name: "",
        email: "",
        phone_number: "",
        message: "",
        city: "",
        //category: 6,
        //speciality: null
      },
      disabled: false,
    };
  },

  methods: {
    async sendMessage() {
      switch (this.type) {
        case "doubts":
          this.message.mail_to = "educacion@ammom.mx";
          break;
        case "access":
          this.message.mail_to = "atencion@srcongress.mx";
          break;
        case "payments":
          this.message.mail_to = "educacion@ammom.mx";
          break;
        default:
          this.message.mail_to = "atencion@srcongress.mx";
          break;
      }

      this.disabled = true;
      this.message.type = this.type;
      try {
        await this.$axiosAuth.post("/mail/contact", this.message);

        this.$swal(
          "¡Mensaje enviado correctamente!",
          "Nos pondremos en contacto contigo a la brevedad.",
          "success"
        );
        this.disabled = false;
        this.message = {};
      } catch (e) {
        console.error(e.responseText);
        this.disabled = false;
        this.$swal(
          "¡Error al enviar datos!",
          "Por favor contacte directamente a atencion@srcongress.mx",
          "error"
        );
      }
    },
  },
};
</script>
