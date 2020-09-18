<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-left">
                                <h2>Contacto</h2>
                                <h4 class="text-white">Asociación Mexicana de Metabolismo Óseo y Mineral A.C.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero End -->


        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title">INFORMES</h2>
                    </div>
                    <div class="col-lg-12">
                        <form class="form-contact contact_form" @submit.prevent="sendContact">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input class="form-control valid" name="name" id="name" type="text"
                                               placeholder="Nombre" v-model="contact.name" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="email" id="email" type="email"
                                               placeholder="Email" v-model="contact.email" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control valid" name="phone" id="phone" type="text"
                                               placeholder="Teléfono" v-model="contact.phone" v-mask="'(###) #######'"
                                               required minlength="10">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text"
                                               placeholder="Asunto" v-model="contact.subject" required>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <select name="type" id="type" class="form-select" v-model="contact.type"
                                                required>
                                            <option :value="null" disabled selected>Elija su tipo de consulta</option>
                                            <option value="Congresista">Congresista</option>
                                            <option value="Proveedor">Patrocinador</option>
                                            <option value="Profesor">Profesor</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <textarea class="form-control w-100" name="message" id="message" cols="30"
                                                  rows="9" placeholder="Mensaje" v-model="contact.message"
                                                  required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="boton-rosa button button-contactForm boxed-btn" :disabled="disabled">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="m-4 p-4">
            <div class="col-lg-10 offset-lg-1">
                        <div class="media contact-info">
                            <span class="contact-info__icon"><fa icon="home" class="fa-2x"></fa></span>
                            <div class="media-body">
                                <p>Durango 290 -504<br>
                                Col. Roma México 06700 Ciudad de México<br>
                                </p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><fa icon="phone" class="fa-2x"></fa></span>
                            <div class="media-body">
                                <h3>Teléfonos</h3>
                                <p><a href="tel:+525555117260">+52 5555117260 </a></p>
                                <p><a href="tel:+525555117819">+52 5555117819</a></p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><fa icon="envelope" class="fa-2x"></fa></span>
                            <div class="media-body">
                                <h3>Email</h3>
                                <p><a href="mailto:educacion@ammom.mx">
                                    educacion@ammom.mx</a></p>
                                    <p><a href="mailto:planeacionestrategica@ammom.mx">
                                    planeacionestrategica@ammom.mx</a></p>
                            </div>
                        </div>
                    </div>
        </section>
    </main>
</template>

<script>
  export default {
    name: "contacto",

    data() {
      return {
        contact: {
          type: null
        },
        disabled: false
      }
    },

    methods: {
      async sendContact() {
        this.disabled = true;

        if (this.contact.type === 'Proveedor') {
          this.contact.mail_to = 'jorge@srcongress.mx';
        } else if (this.contact.type === 'Profesor') {
          this.contact.mail_to = 'adriana.sanchez@srcongress.mx';
        } else {
          this.contact.mail_to = 'atencion@srcongress.mx';
        }

        try {
          await this.$axios.$post('/emails/contact', this.contact);

          this.$swal('¡Mensaje enviado correctamente!', 'En caso de ser necesario nos pondremos en contacto contigo a la brevedad.', 'success')
          this.disabled = false;
          this.contact = {
            type: null
          }
        } catch (e) {
          console.error(e);
          this.disabled = false;
          this.$swal('¡Error al enviar datos!', 'Por favor contacte directamente a contacto@mastologia.org.mx', 'error');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "assets/scss/color";
    .boton-rosa{
        background-color:#eb008a;
        color:white!important;
        border-color:#eb008a!important;
    }

    .slider-area2 {
    }


    .contact-info {
        a {
            color:black;
        }
    }
</style>