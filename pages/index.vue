<template>
  <main>
    <!--? slider Area Start-->
    <div class="slider-bg" v-if="loaded">
      <client-only>
        <carousel
          :per-page="1"
          :autoplay="true"
          :loop="true"
          :paginationEnabled="true"
          :navigation-enabled="false"
          :paginationActiveColor="'#37bbe1'"
          :autoplayTimeout="4000"
        >
          <slide>
            <img src="~/assets/img/home/banner1.jpg" />
            <div class="slider-info">
              <div class="col">
                <h1>
                  XX CONGRESO MEXICANO DE OSTEOPOROSIS Y ENFERMEDADES
                  METABÓLICAS OSEAS
                </h1>
                <h2>CONGRESO VIRTUAL</h2>
                <img
                  src="~/assets/img/logo/logo_cover_2.png"
                  alt="Logo AMMOM"
                  class="w-100"
                />
                <h2 class="mb-4">DEL 6 AL 8 DE MAYO 2021</h2>
                <a
                  class="btn"
                  href="https://www.srcongress.mx/ammom/registro_virtual.php"
                  >Descargue su constancia</a
                >
                <br />
                <br />
                <!-- <a href="#" v-b-modal.modal-login class="mt-3"
                  >Si ya estás registrado, ingrese aquí.</a
                > -->
              </div>
            </div>
          </slide>
          <!--slide>
                        <img src="~/assets/img/home/banner1.jpg">
                        <div class="slider-info">
                            <div class="col">
                                <h1>JORNADAS ACADÉMICAS VIRTUALES</h1>
                                <img src="~/assets/img/logo/logo_combinado_white.png" alt="">
                                <h2 class="mb-4">del 23 al 25 octubre 2020</h2>
                                <nuxt-link to="/registro"
                                           class="btn">¡Regístrate!
                                </nuxt-link>
                            </div>
                        </div>
                    </slide-->
        </carousel>
      </client-only>
    </div>
    <!-- slider Area End-->
    <!--? About Law Start-->
    <!--section class="about-low-area section-padding2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-caption mb-50">
                            <div class="section-tittle mb-35">
                                <h2>Desde 23 de julio</h2>
                            </div>
                            <p>Tenga en cuenta que para 2020 tenemos nuevos requisitos en torno al Congreso virtual. Se
                                requiere una dirección de correo electrónico única para cada individuo para acceder a la
                                plataforma virtual. Sin una dirección de correo electrónico única, el miembro del grupo
                                no podrá obtener acceso al Congreso virtual.</p>

                            <p>Esta dirección de correo electrónico también se utilizará para enviar cualquier
                                correspondencia relevante y acceder a la constancia después del congreso. Proporcionar
                                esta información por adelantado también nos permitirá procesar todos los registros
                                individuales o de grupo de manera eficiente y entregar detalles de inicio de sesión a
                                los registrados de manera oportuna.</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-10">
                                <div class="single-caption mb-20">
                                    <div class="caption-icon">
                                        <fa icon="calendar" class="fa-3x" style="color: #26264b"/>
                                    </div>
                                    <div class="caption">
                                        <h5>Fecha</h5>
                                        <p>9 y 10 de octubre</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="http://registro.mastologia.org.mx/" target="_blank" class="btn mt-50">¡Regístrate!</a>
                    </div>
                    <div class="col-lg-6 col-md-12 mt-5">
                        <img src="~/~/assets/images/logo-small.png" class="mt-100 d-block m-auto">
                    </div>
                </div>
            </div>
        </section-->
    <!-- About Law End-->

    <!--? Blog Area Start -->
    <section class="home-blog-area mb-4" style="padding: 30px 0 30px 0">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-4 mt-4">
            <h2 class="text-center">CENTRO DE ATENCIÓN AMMOM 2021</h2>
          </div>
          <!--div class="col-md-4 col-lg-4">
                        <a href="https://www.srcongress.mx/ammom/jornada_virtual.php" >
                        <div class="congress-content">
                            <img src="~/assets/images/contenido/registro.jpg" alt="">
                            <div class="details">
                                <p class="title text-left pl-2">DESCARGA TU CONSTANCIA</p>
                            </div>
                        </div>
                        </a>
                    </div-->
          <!--div class="col-md-4 col-lg-4">
                        <a href="/docs/Manual_constancias_AMMOM1.pdf" download >
                        <div class="congress-content">
                            <img src="~/assets/images/contenido/atencion_dudas.jpg" alt="">
                            <div class="details">
                                <p class="title textl-left pl-2">DESCARGA MANUAL PARA OBTENER CONSTANCIA</p>
                            </div>
                        </div>
                        </a>
                    </div-->
          <div class="col-md-4 col-lg-4">
            <a href="#" @click="$bvModal.show('acceso')">
              <div class="congress-content">
                <img
                  src="~/assets/images/contenido/problemas_acceso.jpg"
                  alt=""
                />
                <div class="details">
                  <p class="title text-left pl-2">PROBLEMAS DE ACCESO</p>
                  <p class="subtitle"></p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4 col-lg-4">
            <a href="#" @click="$bvModal.show('pagos')">
              <div class="congress-content">
                <img src="~/assets/images/contenido/pagos.jpg" alt="" />
                <div class="details">
                  <p class="title text-left pl-2">
                    ACLARACIÓN DE PAGOS Y/O BECAS
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-4 col-lg-4">
            <a href="/docs/ammom_programa_5_mayo.pdf" target="_blank">
              <div class="congress-content">
                <img src="~/assets/images/contenido/programa.jpg" alt="" />
                <div class="details">
                  <p class="title text-left pl-2">DESCARGA EL PROGRAMA</p>
                </div>
              </div>
            </a>
          </div>
          <!--div class="col-md-4 col-lg-4">
                        <a href="http://streamingmx.com.mx/ammom/landing.php" target="_blank">
                        <div class="congress-content">
                            <img src="~/assets/images/contenido/CONFERENCIA_OSTEOPOROSIS.jpg" alt="">
                            <div class="details" style="top:63px;">
                                <p class="title text-left pl-2 pr-2">
                                   24 DE OCTUBRE. CONFERENCÍA DÍA MUNDIAL DE LA OSTEOPOROSIS
                                </p>

                            </div>
                        </div>
                        </a>
                    </div-->

          <!--div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/img/content/eposter_2.jpg" alt="">
                            <div class="details">
                                <p class="title"><nuxt-link to="/trabajos">Trabajos</nuxt-link></p>
                                <p class="subtitle">+ 100 Trabajos</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/images/contenido/simposio.jpg" alt="">
                            <div class="details">
                                <p class="title">Simposio</p>
                                <p class="subtitle">Actualidades en cáncer de mama</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/img/content/cursos.jpg" alt="">
                            <div class="details">
                                <p class="title"><nuxt-link to="/cursos">Cursos</nuxt-link></p>
                                <p class="subtitle">Lo mejor de las disciplinas en AMM</p>
                            </div>
                        </div>
                    </div-->
        </div>
      </div>
    </section>
    <b-modal id="dudas" class="text-center" hide-footer>
      <h2 class="text-center">ATENCIÓN DE DUDAS</h2>
      <p class="my-4 text-center">
        Si tienes dudas generales sobre respecto al congreso, <br />
        escríbenos y nos pondremos en contacto a través del correo <br />
        eléctronico que nos proporciones.
      </p>
      <help-modal type="doubts" />
    </b-modal>

    <b-modal id="acceso" class="text-center" hide-footer>
      <h2 class="text-center">PROBLEMAS DE ACCESO</h2>
      <p class="my-4 text-center">
        Si tienes dudas generales sobre respecto al congreso, <br />
        escribenos y nos pondremos en contacto a través del correo <br />
        eléctronico que nos proporciones.
      </p>
      <p class="text-center">
        Linea de atención telefónica:
        <a
          class="text-black"
          style="color: black !important"
          href="tel:5540940718"
          >55 4094 0718</a
        >
        y
        <a
          class="text-black"
          style="color: black !important"
          href="tel:9841330675"
          >98 413 306 75</a
        >
      </p>
      <help-modal type="access" />
    </b-modal>

    <b-modal id="pagos" class="text-center" hide-footer>
      <h2 class="text-center">ACLARACIÓN DE PAGOS</h2>
      <p class="my-4 text-center">
        Descríbanos el problema sobre el pago de su registro y nos <br />
        pondremos en contacto a través del correo eléctronico que nos <br />
        proporcione
      </p>
      <!--<p class="text-center">Linea de atención a acalración de pagos: </p>-->
      <help-modal type="payments" />
    </b-modal>

    <b-modal id="oncologia" class="text-center" hide-footer>
      <h2 class="text-center">REGISTRO</h2>
      <p class="my-4 text-center">
        Registra tus datos y recibirás vía correo electrónico una
        <strong
          >clave <br />
          de acceso</strong
        >
        con la que podrás ingresar de forma gratuita al <br />
        Curso Interdisciplinar de Congreso
      </p>
      <div class="p-4">
        <b-form @submit.prevent="registerUser()">
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
          <b-form-group label="Ciudad" label-for="input-duda">
            <b-form-input
              type="text"
              required
              v-model="message.city"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Email" label-for="input-email">
            <b-form-input
              type="email"
              required
              v-model="message.email"
            ></b-form-input>
          </b-form-group>
          <!--div class="form-group">
                      <label>Especialidad</label>
                      <select class="form-control" required v-model="message.speciality">
                        <option v-for="(speciality, index) in specialities" :key="index" :value="speciality.id">{{ speciality.especialidad }}</option>
                      </select>
                    </div-->

          <b-button
            variant="primary"
            class="float-right"
            type="submit"
            :disabled="disabled"
            >Enviar</b-button
          >
        </b-form>
      </div>
    </b-modal>
    <!-- Blog Area End -->
    <section class="work-company section-padding mt-4" v-if="sponsors.length">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12">
            <!-- Section Tittle -->
            <div class="section-tittle section-tittle2 mb-50">
              <h2 class="text-center">PATROCINADORES OFICIALES DEL CONGRESO</h2>
            </div>
          </div>
          <div class="col-md-12">
            <client-only>
              <carousel
                :loop="true"
                :per-page="sponsorsCount"
                :autoplay="true"
                :paginationEnabled="true"
                :navigation-enabled="true"
                paginationActiveColor="#686bc4"
              >
                <slide v-for="sponsor in sponsors" :key="sponsor.id">
                  <image-component :picture="sponsor.picture" class="px-3" />
                </slide>
              </carousel>
            </client-only>
          </div>
        </div>
      </div>
    </section>
    <!--? Brand Area Start-->
    <!--section class="row my-5">
                <div class="col-md-8 offset-md-2">
                    <div class="embed-responsive embed-responsive-16by9">
                        <a class="btn btn-video" href="https://mastologia.org.mx" target="_blank">#VisitMexico</a>
                        <video class="embed-responsive-item"
                               src="~/assets/video/congreso.mp4"
                               loop controls playsinline autoplay muted></video>

                    </div>
                </div>
        </section-->
    <!-- Brand Area End-->

    <!-- <b-modal id="modal-login" :hide-footer="true" title="Iniciar sesión">
      <login-modal-component />
    </b-modal> -->
  </main>
</template>

<script>
import { mapState } from "vuex";
import SpeakerComponent from "../components/SpeakerComponent";
import ImageComponent from "../components/ImageComponent";

export default {
  middleware: ["guest"],

  components: { ImageComponent, SpeakerComponent },

  head() {
    return {
      // __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          id: "pixel-script-poptin",
          src: 'https://cdn.popt.in/pixel.js?id=9806b22c1e4e5',
          type: "text/javascript",
          async: true
        },
      ],
    };
  },

  
  data() {
    return {
      sponsors: [],
      sponsorsCount: this.$device.isMobile ? 2 : 4,
      isMobile: this.$device.isMobile,
      loaded: false,
      disabled: false,
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
    };
  },
  async mounted() {
    try {
      this.sponsors = await this.$axios.$get(`/sponsors?active_eq=true`);
      this.loaded = true;
    } catch (e) {
      console.warn(e);
      this.$swal("Error", "Error al obtener profesores", "error");
    }
  },
  methods: {
    showModal() {
      this.$refs["inicio"].show();
    },

    async registerUser() {
      this.disabled = true;
      try {
        let user = await this.$axiosAuth.post(`/auth/register`, {
          ...this.message,
        });
        this.$swal(
          "Registro exitoso.",
          "Tu código de acceso se ha enviado correctamente. La recepción puede demorar hasta 5 minutos.",
          "success"
        );
        this.disabled = false;
      } catch (e) {
        console.error(e.response);
        this.disabled = false;
        this.$swal("Error", e.response.data.message, "error");
      }
    },
  },

  computed: {
    ...mapState(["event"]),

    countDown() {
      let time =
        this.$moment(this.event.start_date).valueOf() -
        this.$moment().startOf("day").valueOf();

      return time < 0 ? 0 : time;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/color";
@import "assets/scss/variables";

@media (min-width: 1200px) {
  .video-player {
    height: 500px;
  }

  .slider-bg {
    /deep/ .VueCarousel .slider-info {
      padding: 0 10rem !important;

      h1,
      h2,
      h3 {
        font-size: 3rem !important;
      }

      img {
        width: 300px !important;
      }
    }
  }
}

.counter-section {
  > h1 {
    color: #fff;
    font-size: 25px;
    text-align: center;
  }

  position: unset !important;
  font-family: "alegreya-sans-cs", sans-serif;
  background-color: none;
  padding: 25px 25px !important;
  margin: auto;
  border-radius: 10px;
  color: #fff !important;
  background: #892aad;
  width: 76%;
  display: block;

  p,
  span {
    color: #fff !important;
  }

  .cd-item {
    &:after {
      background: #fff !important;
      margin-top: 35px;
    }

    &:before {
      background: #fff !important;
    }

    span {
      margin-top: 20px !important;
      margin-bottom: 0 !important;
    }
  }
}

.single-slider {
  background-image: url("/img/banner.jpg");
  background-size: cover !important;
  background-position: top !important;
  background-repeat: no-repeat !important;
  background-attachment: fixed;
}

.gradient-bg {
  background-image: linear-gradient(
    180deg,
    #516ab7 0%,
    #37bbe1 100%
  ) !important;
}

.team-area {
  .info {
    h2 {
      font-size: 44px;
    }
  }

  .register {
    a {
      display: block;
      margin: 50px auto;
      width: 200px;
    }
  }
}

.congress-content {
  margin-bottom: 100px;
  position: relative;

  img {
    z-index: 5;
    position: relative;
    width: 100%;
    -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    min-height: 265px;
  }

  .details {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 9;
    background-color: #0f6b82;
    left: 0;
    z-index: 1;
    bottom: 0;
    padding: 160px 14px;

    .title {
      text-align: center;
      font-weight: 300;
      font-size: 1.4rem;
      font-family: bebas-neue-pro, sans-serif !important;
      color: #fff;
      text-shadow: 0px 0px 20px #000000;
      position: absolute;
      bottom: 0;
    }

    .subtitle {
      text-align: center;
      font-weight: 300;
      color: #fff;
      text-shadow: 0px 0px 20px #000000;
    }
  }
}

.video-player {
  width: 100%;

  video {
    width: 100%;
  }
}

.slider-bg {
  /deep/ .VueCarousel {
    max-height: 650px;

    .VueCarousel-inner {
      height: 650px !important;
    }

    .VueCarousel-pagination {
      position: absolute;
      bottom: 10px;
    }

    .VueCarousel-slide {
      height: 100%;
    }

    .slider-info {
      width: 100%;
      position: absolute;
      top: 10%;
      padding: 0 1rem;
      text-align: right;

      span,
      h1,
      h2,
      h3 {
        color: #fff;
        text-shadow: 0px 0px 20px #000000;
        text-transform: uppercase;
      }

      h1 {
        font-weight: 700 !important;
        font-size: 26px;
      }

      h2 {
        font-weight: 700 !important;
        font-size: 30px !important;
      }

      h3 {
        font-weight: 700 !important;
        font-size: 26px;
      }

      img {
        margin: 25px 0 25px auto !important;
        width: 400px;
      }
    }
  }
}

.VueCarousel-slide > img {
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
}

.btn-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.work-company {
  background-color: #cfdbe0;

  h2 {
    color: #676bc4 !important;
    font-size: 2em;
    letter-spacing: 2px;
  }
}

@-webkit-keyframes floatText {
  from {
    left: 00%;
  }

  to {
    /* left: auto; */
    left: 100%;
  }
}
</style>
