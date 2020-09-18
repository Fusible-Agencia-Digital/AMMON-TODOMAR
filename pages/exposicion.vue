<template>
    <main>
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-left">
                                <h2>Exposición Comercial</h2>
                                <h4 class="text-white">¡Estamos preparando una nueva experiencia!</h4>
                                <a href="/contacto" class="btn">Solicite información</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="~/assets/images/plano_expo.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-md-9">
                        <h2 class="contact-title">Contacto Expositor</h2>
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
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <input class="form-control" name="subject" id="subject" type="text"
                                               placeholder="Asunto" v-model="contact.subject" required>
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
                                <button type="submit" class="button button-contactForm boxed-btn" :disabled="disabled">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-3 offset-lg-1">
                        <!--div class="media contact-info">
                            <span class="contact-info__icon"><fa icon="home" class="fa-2x"></fa></span>
                            <div class="media-body">
                                <p>Av Amsterdam #124, Col. Hipódromo Condesa. Delegación Cuauhtémoc.
                                    CP. 06170, México, CDMX</p>
                            </div>
                        </div>
                        <div class="media contact-info">
                            <span class="contact-info__icon"><fa icon="phone" class="fa-2x"></fa></span>
                            <div class="media-body">
                                <h3>Teléfonos</h3>
                                <p><a href="tel:+525552116604">+52 5552116604</a></p>
                                <p><a href="tel:+525555530672">+52 5555530672</a></p>
                                <p><a href="tel:018008410838">Lada: 01 800 8410838</a></p>
                            </div>
                        </div-->
                        <div class="media contact-info">
                            <span class="contact-info__icon"><fa icon="envelope" class="fa-2x"></fa></span>
                            <div class="media-body">
                                <h3>Email</h3>
                                <p><a href="mailto:atencion@srcongress.mx">
                                    atencion@srcongress.mx</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
  export default {
    name: "exposicion",

    data: () => ({
      contact: {
        //mail_to: 'arturo@todomar.net',
        type: "Nuevo Contacto Expositor",
        mail_to: 'marisol.cornejo@mastologia.org.mx'
      },

      disabled: false
    }),


    methods: {
      async sendContact() {
        this.disabled = true;

        try {
          await this.$axios.$post('/emails/contact', this.contact);

          this.$swal('¡Mensaje enviado correctamente!', 'En caso de ser necesario nos pondremos en contacto contigo a la brevedad.', 'success')
          this.disabled = false;
          this.contact = {
            mail_to: 'arturo@todomar.net'
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

    .contact-info {
        a {
            color: $theme-color;
        }
    }
</style>