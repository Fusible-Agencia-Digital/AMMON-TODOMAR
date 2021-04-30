<template>
  <main>
    <!--? BIENVENIDOS -->
    <div class="section-bienvenidos">
      <div class="slider-height2 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 pt-4 mt-3 mb-0">
              <h2 class="mb-4 pl-4">Bienvenido a ASOFARMA</h2>
              <p class="pl-4">
                Presione en donde vea el símbolo
                <img
                  src="~/assets/img/buttons/SPOT.png"
                  width="60px"
                  class="float-right mr-2"
                /><br />para acceder al contenido
              </p>
            </div>
            <div class="col-xl-8 pt-4 mt-3 mb-3 movil">
              <img
                src="~/assets/images/asofarma/logo.png"
                width="210px"
                class="movil float-left ml-2 pl-4 pt-3"
              />
            </div>
            <div class="col-xl-12 pl-4 registrarte">
              <nuxt-link
                to="/congreso-virtual"
                class="btn mb-5 mb-md-3 mt-0 ml-2"
                >Regresar</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-12 p-0">
          <div style="position: relative">
            <img
              id="main-image"
              src="~/assets/images/asofarma/stand.jpg"
              width="100%"
            />
            <a
              @click="$bvModal.show('uno')"
              class="rim-hotspot stand-button"
              style="width: 9.5%; height: 6.5%; left: 23.4%; top: 59%"
            ></a>
            <a
              @click="$bvModal.show('dos')"
              class="rim-hotspot stand-button"
              style="width: 11%; height: 18.6%; left: 32.7%; top: 40.4%"
            ></a>
            <a
              @click="$bvModal.show('tres')"
              class="rim-hotspot stand-button"
              style="width: 6.5%; height: 18.4%; left: 47.5%; top: 45.1%"
            ></a>
            <a
              @click="$bvModal.show('cuatro')"
              class="rim-hotspot stand-button"
              style="width: 6.5%; height: 18.4%; left: 54.3%; top: 45.1%"
            ></a>
            <a
              @click="$bvModal.show('cinco')"
              class="rim-hotspot stand-button"
              style="width: 15.5%; height: 9.4%; left: 54.5%; top: 65.1%"
            ></a>
            <a
              @click="$bvModal.show('seis')"
              class="rim-hotspot stand-button"
              style="width: 6.3%; height: 18.4%; left: 61.1%; top: 45.1%"
            ></a>
            <a
              @click="$bvModal.show('siete')"
              class="rim-hotspot stand-button"
              style="width: 15%; height: 51.1%; left: 83.8%; top: 45%"
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!--? CONTACTO-->
    <div class="section-contacto">
      <div class="container-expanded">
        <div class="row">
          <div class="col-xl-6 mb-0 contacto">
            <div class="col-xl-10 offset-xl-1 p-4">
              <h2 class="text-center mb-4 text-white">Contacto con ASOFARMA</h2>
              <form
                class="form-contact contact_form"
                @submit.prevent="sendContact"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Nombre"
                        v-model="contact.name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        v-model="contact.email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        class="form-control valid"
                        name="phone"
                        id="phone"
                        type="text"
                        placeholder="Teléfono"
                        v-model="contact.phone"
                        v-mask="'(###) #######'"
                        required
                        minlength="10"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder="Asunto"
                        v-model="contact.subject"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control w-100"
                        name="message"
                        id="message"
                        cols="30"
                        rows="9"
                        placeholder="Mensaje"
                        v-model="contact.message"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3 text-center">
                  <button
                    type="submit"
                    class="button button-contactForm boxed-btn"
                    :disabled="isDisabled"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            class="col-xl-6 p-0 m-0"
            style="background-color: #ee3a44 !important"
          >
            <div class="col-xl-3 link text-center">
              <a href="http://www.asofarma.com.mx" target="_blank"
                ><h3>Visite nuestro sitio</h3></a
              >
            </div>
          </div>
          <div>
            <b-modal ref="uno" id="uno" hide-footer>
              <div class="d-block text-center">
                <h2>
                  Póngase en contacto con nosotros a través del formulario y uno
                  de nuestros representantes se comunicará en breve con usted.
                </h2>
              </div>
            </b-modal>

            <b-modal id="dos" hide-footer>
              <div class="d-block text-center">
                <iframe
                  width="420"
                  height="315"
                  frameborder="0"
                  src="https://player.vimeo.com/video/542848197"
                >
                </iframe>
              </div>
            </b-modal>
            <b-modal id="tres" hide-footer>
              <div class="d-block text-center">
                <img src="~/assets/images/asofarma/3.jpg" width="100%;" />
              </div>
            </b-modal>
            <b-modal id="cuatro" hide-footer>
              <div class="d-block text-center">
                <img src="~/assets/images/asofarma/4.jpg" width="100%;" />
              </div>
            </b-modal>
            <b-modal id="cinco" hide-footer>
              <div class="d-block text-center">
                <h2>
                  Nuestros representantes están listos para atenderle en directo
                  en horarios del Congreso. ¡Contáctelos ahora!
                </h2>
              </div>
            </b-modal>
            <b-modal id="seis" hide-footer>
              <div class="d-block text-center">
                <img src="~/assets/images/asofarma/6.jpg" width="100%;" />
              </div>
            </b-modal>
            <b-modal id="siete" hide-footer>
              <div class="d-block text-center">
                <img src="~/assets/images/asofarma/7.jpg" width="100%;" />
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import mixinStand from "../../mixins/stands";
export default {
  middleware: ["authenticated"],

  mixins: [mixinStand],

//   head() {
//     return {
//       __dangerouslyDisableSanitizers: ["script"],
//       script: [
//         {
//           hid: "zoho",
//           innerHTML:
//             'var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"831184da6989e307a217d8c6768d24130e7ea43e89b47b2fd17e2efcc4b72f07", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id=\'zsiqwidget\'></div>");',
//           type: "text/javascript",
//           charset: "utf-8",
//         },
//       ],
//     };
//   },

  methods: {
    async sendContact() {
      this.isDisabled = true;
      this.contact.mail_to = "informacionmedica@asofarma.com.mx";
      this.sendMessage();
    },
  },
};
</script>

