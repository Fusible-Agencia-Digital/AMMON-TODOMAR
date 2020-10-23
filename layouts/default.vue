<template>
    <div>

        <b-modal id="modal-login" :hide-footer="true" title="Iniciar sesión">
            <login-modal-component/>
        </b-modal>

        <header>
            <div class="header-area">
                <b-navbar toggleable="lg" class="main-header header-sticky">
                    <nuxt-link to="/" class="navbar-brand">
                        <img src="~/assets/img/logo/logo_header_viejo.png" width="100px" class="ml-50 p-1">
                    </nuxt-link>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="ml-auto">
                            <b-nav-item v-if="!$auth.loggedIn" to="/">Inicio</b-nav-item>
                            <b-nav-item v-if="$auth.loggedIn" to="/">Expo</b-nav-item>
                            <b-nav-item v-if="!$auth.loggedIn" to="/registro">Registro</b-nav-item>
                            <b-nav-item  v-if="$auth.loggedIn" href="/congreso-virtual/live" exact exact-active-class="active" >En vivo</b-nav-item>
                            <b-nav-item to="/programa">Jornadas Académicas</b-nav-item>
                            <b-nav-item to="/profesorado">Profesores</b-nav-item>
                            <b-nav-item to="/queretaro">Querétaro 2021</b-nav-item>
                            <template v-if="$auth.loggedIn">
                                <b-nav-item href="#" ><span class="font-weight-bold" style="text-transform: capitalize">Bienvenido(a), {{$auth.user.nombre}} {{$auth.user.apellidoP}}</span></b-nav-item>
                            </template>

                            <div class="text-center  d-sm-block d-lg-block   mt-20">
                                <button v-if="!$auth.loggedIn" v-b-modal.modal-login class="btn btn-header">Iniciar sesión</button>
                                <button v-if="$auth.loggedIn" @click="authLogout" class="btn btn-header">Salir</button>
                                <!--<nuxt-link v-if="!$auth.loggedIn" to="/registro" class="btn btn-header">¡Regístrate!</nuxt-link>-->
                            </div>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
        </header>


        <Nuxt/>


        <footer>
            <!-- Footer Start-->
            <!--<div class="footer-area footer-padding">
                <div class="container">
                    <div class="row d-flex justify-content-between">

                        <div class="col-md-4">
                            <div class="single-footer-caption mb-50">
                                <div class="single-footer-caption mb-30">
                                    <div class="footer-tittle">
                                        <h4>FECHA DE LAS JORNADAS VIRTUALES</h4>
                                        <div class="footer-pera">
                                            <client-only>
                                                <v-calendar v-if="!loadingDates"
                                                            is-dark
                                                            color="blue"
                                                            mode="single"
                                                            nav-visibility="hidden"
                                                            :from-date="attributes[0].dates.start"
                                                            :attributes="attributes"></v-calendar>
                                            </client-only>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Contáctanos</h4>
                                    <ul>
                                        <li>Dirección: <br>
                                            Durango 290 -504 <br>
                                            Col. Roma México 06700 <br>
                                            Ciudad de México</li>
                                        <li><a href="tel:+525555117260">Teléfono: +52 55 55117260</a></li>
                                        <li><a href="mailto:educacion@ammom.mx">Email :
                                            educacion@ammom.mx</a></li>
                                        <li><a href="tel:+5555117819">Teléfono: +52 55 55117819</a></li>
                                        <li><a href="mailto:planeacionestrategica@ammom.mx">Email :
                                            planeacionestrategica@ammom.mx</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Navegación</h4>
                                    <ul>
                                        <li><a href="#" @click="scrollToTop('/')">Inicio</a></li>
                                        <li><a href="#" @click="scrollToTop('/registro')">Registro</a></li>
                                        <li><a href="#" @click="scrollToTop('/mesa-directiva')">Mesa Directiva</a></li>
                                        <li><a href="#" @click="scrollToTop('/programa')">Jornadas Académicas</a></li>
                                        <li><a href="#" @click="scrollToTop('/profesorado')">Profesores</a></li>
                                        <li><a href="#" @click="scrollToTop('/queretaro')">Querétaro 2021</a></li>
                                        <li><a href="#" @click="scrollToTop('/contacto')">Contacto</a></li>
                                        <li v-if="!$auth.loggedIn">
                                            <a href="/#" v-b-modal.modal-login>Login</a>
                                        </li>
                                        <template v-else>
                                            <li>
                                                <nuxt-link to="/perfil" >Perfil</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link to="/congreso" >Congreso Virtual</nuxt-link>
                                            </li>
                                            <li>
                                                <a href="/#" @click="authLogout">Salir</a>
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle social-links">
                                    <h4>Social</h4>
                                    <a href="#" target="_blank"><fa :icon="['fab', 'facebook-f']" class="fa-2x"></fa></a>
                                    <a href="#" target="_blank"><fa :icon="['fab', 'twitter']" class="fa-2x"></fa></a>
                                    <a href="#" target="_blank"><fa :icon="['fab', 'instagram']" class="fa-2x"></fa></a>
                                    <a href="#" target="_blank"><fa :icon="['fab', 'linkedin']" class="fa-2x"></fa></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->
            <!-- footer-bottom area -->
            <div class="footer-bottom-area footer-bg">
                <div class="container">
                    <div class="footer-border">
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-xl-10 col-lg-8 ">
                                <div class="footer-copy-right">
                                    <ul class="list-group list-group-horizontal text-white">
                                              <li class="m-2">
                                                  <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                                                   Asociación Mexicana de Metabolismo Óseo y Mineral &copy; {{ year }}
                                                  <!--| This template is made with <i class="fa fa-heart"
                                                                                  aria-hidden="true"></i> by
                                                  <a
                                                          href="https://colorlib.com" target="_blank">Colorlib</a>
                                                  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                                              </li>
                                              <li class="m-2"><nuxt-link to="/mesa-directiva">Mesa Directiva</nuxt-link></li>
                                              <li class="m-2"><nuxt-link to="/organizadores">Organizadores</nuxt-link></li>
                                              <li class="m-2"><nuxt-link to="/contacto">Contacto</nuxt-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End-->
        </footer>

    </div>
</template>


<script>

  import {mapState} from 'vuex';

  export default {

    async fetch() {
      try {
        let data = await this.$axios.$get('/event');

        this.saveEvent(data);

        this.attributes[0].dates = {};
        this.attributes[0].dates.start = this.$moment(this.event.start_date).toDate();
        this.attributes[0].dates.end = this.$moment(this.event.end_date).toDate();

        this.loadingDates = false;
      } catch (e) {
        console.error(e);
        this.$swal('Error', 'Error al obtener evento', 'error');
      }
    },

    data() {
      return {
        loadingDates: true,
        user: {
            email: "",
            password: ""
        },
        attributes: [
          {
            key: 'today',
            highlight: true,
          }
        ]
      }
    },


    created() {
      if (process.browser) {
        window.addEventListener('scroll', this.handleSCroll);
      }

    },
    destroyed() {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleSCroll);
      }
    },

    async mounted() {
      await this.verifyToken();
    },

    methods: {
      saveEvent(event) {
        this.$store.commit('saveEvent', event);
      },

      handleSCroll(event) {
        if (process.browser) {
          let header = document.querySelector(".main-header");
          if (window.scrollY > 450 && !header.className.includes('sticky-bar') && !this.isMobile()) {
            header.classList.add('sticky-bar', 'w3-animate-top');
          } else if (window.scrollY < 450) {
            header.classList.remove('sticky-bar');
          }
        }
      },

      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },

      scrollToTop(route) {
        if(route !== this.$route.path) {
          this.$router.push(route);
        }
      },

      async authLogin() {
        try {
          let response = await this.$auth.loginWith('local', {data: this.user});
          this.$bvModal.hide('modal-login');
          console.log(response)
        } catch (err) {
          console.log(err)
          this.$swal('Error', 'Error al enviar datos. Por favor compruebe la información e intente nuevamente.', 'error');
        }
      },

      async authLogout() {
        try {
          await this.$auth.logout();
        } catch (err) {
          console.log(err)
          this.$swal('Error', 'Error al enviar datos. Por favor compruebe la información e intente nuevamente.', 'error');
        }
      },

      async authSendCode() {
        try {
            if(!this.user.email) {
                this.user.error = "'Email' es un campo obligatorio."
                return false;
            }

            let user = await this.$axiosAuth.post('/auth/sendcode', {email: this.user.email});
            if(user) {
                return true;
            }
        }
        catch(e) {
            console.error(e);
            this.user.error = "Usuario no encontrado.";
            return false;
        }
      },

      resetWizard() {
          this.$refs['auth-wizard'].reset();
            this.$refs['auth-wizard'].activateAll();
      },


      async verifyToken() {
        if(this.$auth.loggedIn) {
          try {
            await this.$axiosAuth.get('/auth/me')
          } catch(e) {
            await this.$swal('Error', e.response.data.message, 'error');
            await this.$auth.logout();
          }
        }
      }
    },

    computed: {
      ...mapState([
        'event'
      ]),

      year() {
        return this.$moment().format('YYYY')
      }
    },

    watch: {
        '$route': async function (newVal, oldVal) {
          let chatWindow = document.querySelector('.zsiq_floatmain');
          if(chatWindow) {
              chatWindow.classList.add('d-none');
          }

          await this.verifyToken();
        }
    }
  }
</script>

<style lang="scss">
    @import "assets/scss/color";
    .nav-item{
        text-align:center;
    }
    body {
        background-color: #FFF;
        background-size: cover !important;
        background-position: top !important;
        background-repeat: no-repeat !important;
        background-attachment: fixed;
    }

    .nav-link {
        color: #FFF !important;
        font-weight: 400;
        padding: 39px 20px !important;
        display: block;
        font-size: 16px;
        transition: all 0.3s ease-out 0s;
        text-transform: uppercase;
        position: relative;
    }

    .logo {
        a {
            img {
                width: 51%;
                padding: 10px;
            }
        }
    }

    .vc-border-gray-700 {
        border-color: #514e59 !important;
    }

    .vc-bg-gray-900 {
        background-color: #514e59 !important;
    }

    .social-links > a{
        margin: 0px 10px !important;
    }

    .sticky-bar {
        height: 59px !important;
        padding-top: 0px !important;

        .navbar-brand {
            padding-top: 0px;
            img {
                width: 60px;
            }
        }

        .navbar-collapse {
            height: 59px !important;

            .nav-link {
                color: $theme-color !important;
            }
        }
    }

</style>

