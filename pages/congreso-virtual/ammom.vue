<template>
  <main>
    <!--? BIENVENIDOS -->
    <div class="section-bienvenidos">
      <div class="slider-height2 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 pt-4 mt-3 mb-0">
              <h2 class="mb-4 pl-4">Bienvenido a AMMOM</h2>
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
                src="~/assets/images/ammom/logo.png"
                width="210px"
                class="movil float-left ml-2 pl-4 pt-3"
              />
            </div>
            <div class="col-xl-12 pl-4 registrarte">
              <a
                href="/congreso-virtual/expo"
                class="btn mb-5 mb-md-3 mt-0 ml-2"
                >Regresar</a
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
              src="~/assets/images/ammom/stand.jpg"
              width="100%"
            />
            <a
              @click="$bvModal.show('uno')"
              class="rim-hotspot stand-button"
              style="width: 15.5%; height: 13.4%; left: 28.5%; top: 40.1%"
            ></a>
            <a
              @click="$bvModal.show('dos')"
              class="rim-hotspot stand-button"
              style="width: 10%; height: 7.6%; left: 30.7%; top: 58.4%"
            ></a>
            <a
              @click="$bvModal.show('tres')"
              class="rim-hotspot stand-button"
              style="width: 10.5%; height: 17.4%; left: 54.5%; top: 45.1%"
            ></a>
            <a
              @click="$bvModal.show('cuatro')"
              class="rim-hotspot stand-button"
              style="width: 7%; height: 17.6%; left: 46.7%; top: 45.4%"
            ></a>
            <a
              @click="$bvModal.show('cinco')"
              class="rim-hotspot stand-button"
              style="width: 18.5%; height: 40.4%; left: 81.5%; top: 45.1%"
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
              <h2 class="text-center mb-4 text-white">Contacto con AMMOM</h2>
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
            style="background-color: #0077be !important"
          >
            <div class="col-xl-3 link text-center">
              <a href="https://www.ammom.mx" target="_blank"
                ><h3>Visite nuestro sitio</h3></a
              >
            </div>
          </div>
          <div>
            <b-modal ref="uno" id="uno" hide-footer>
              <div class="d-block text-center">
                <iframe
                  width="420"
                  height="315"
                  frameborder="0"
                  src="https://player.vimeo.com/video/545732493"
                >
                </iframe>
              </div>
            </b-modal>
            <b-modal id="dos" hide-footer>
              <div class="d-block text-center">
                <h2>
                  Póngase en contacto con nosotros a través del formulario y uno
                  de nuestros representantes se comunicará en breve con usted.
                </h2>
              </div>
            </b-modal>
            <b-modal id="tres" hide-footer>
              <div class="d-block text-center">
                <img src="~/assets/images/ammom/3.jpg" width="100%;" />
              </div>
            </b-modal>
            <b-modal id="cuatro" hide-footer>
              <div class="d-block text-center">
                <img src="~/assets/images/ammom/4.jpg" width="100%;" />
              </div>
            </b-modal>
            <b-modal id="cinco" hide-footer>
              <div class="d-block text-center">
                <img src="~/assets/images/ammom/5.jpg" width="100%;" />
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

  methods: {
    async sendContact() {
      this.isDisabled = true;
      this.contact.mail_to = "educacion@ammom.mx";
      this.sendMessage();
    },
  },
};
</script>

