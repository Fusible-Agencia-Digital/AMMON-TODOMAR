<template>

    <main>
        <!--? slider Area Start-->
        <div class="slider-bg" v-if="loaded">
            <client-only>
                <carousel :per-page="1" :autoplay="true" :loop="true"
                          :paginationEnabled="true"
                          :navigation-enabled="false"
                          :paginationActiveColor="'#37bbe1'"
                          :autoplayTimeout="4000">
                    <slide>
                        <img src="~/assets/img/home/banner1.jpg">
                        <div class="slider-info">
                            <div class="col">
                                <h1>JORNADAS ACADÉMICAS VIRTUALES</h1>
                                <img src="~/assets/img/logo/logo_header.png" alt="">
                                <h2 class="mb-4">del 23 al 25 octubre 2020</h2>
                                <nuxt-link to="/registro"
                                           class="btn">¡Regístrate!
                                </nuxt-link>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <img src="~/assets/img/home/banner1.jpg">
                        <div class="slider-info">
                            <div class="col">
                                <h1>JORNADAS ACADÉMICAS VIRTUALES</h1>
                                <img src="~/assets/img/logo/logo_header.png" alt="">
                                <h2 class="mb-4">del 23 al 25 octubre 2020</h2>
                                <nuxt-link to="/registro"
                                           class="btn">¡Regístrate!
                                </nuxt-link>
                            </div>
                        </div>
                    </slide>
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
        <!--? Brand Area Start -->
        <section class="team-area gradient-bg pt-100 pb-100 section-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 info">
                        <!-- Section Tittle -->
                        <div class="section-tittle section-tittle2 mb-50">
                            <div class="section-tittle mb-35">
                                <h2 class="text-center">Desde 23 de julio</h2>
                            </div>
                            <p class="text-center">
                                Para las Jornadas Académicas Virtuales se requiere una dirección de correo electrónico única para cada participante para acceder a la plataforma virtual. Sin una dirección de correo electrónico única, no podrán obtener acceso a las jornadas académicas.
                            </p>
                            <p class="text-center">
                                Esta dirección de correo electrónico también se utilizará para enviar cualquier comunicado relevante y acceder a la constancia después de las jornadas académicas. Proporcionar esta información por adelantado también nos permitirá procesar todos los registros individuales o de grupo de manera eficiente y entregar detalles de inicio de sesión a los registrados de manera oportuna.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6 register">
                        <div class="counter-section">
                            <h1>YA EMPEZAMOS LA CUENTA REGRESIVA</h1>
                            <div class="cd-timer" id="countdown">
                                <client-only>
                                    <countdown :time="countDown">
                                        <template slot-scope="props">
                                            <div class="cd-item">
                                                <span>{{ props.days }}</span>
                                                <p>Días</p>
                                            </div>
                                            <div class="cd-item">
                                                <span>{{ props.hours }}</span>
                                                <p>Hrs</p>
                                            </div>
                                            <div class="cd-item">
                                                <span>{{ props.minutes }}</span>
                                                <p>Min</p>
                                            </div>
                                            <div class="cd-item">
                                                <span>{{ props.seconds }}</span>
                                                <p>Seg</p>
                                            </div>
                                        </template>
                                    </countdown>
                                </client-only>
                            </div>
                        </div>

                        <nuxt-link to="/registro" class="btn mt-50">¡Regístrate!</nuxt-link>
                    </div>

                </div>
            </div>
        </section>
        <!-- Brand Area End -->
        <!--? Blog Area Start -->
        <section class="home-blog-area section-padding30">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <div class="congress-content">
                            <img src="~/assets/images/contenido/programa.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    <nuxt-link to="/programa">Jornadas Académicas</nuxt-link>
                                </p>
                                <p class="subtitle">Multidisciplinario</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="congress-content">
                            <img src="~/assets/images/contenido/profesores.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    <nuxt-link to="/profesorado">Profesores</nuxt-link>
                                </p>
                                <p class="subtitle">+ 50 Expertos Nacionales</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="congress-content">
                            <img src="~/assets/images/contenido/expo.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    Exhibición Virtual
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="congress-content">
                            <img src="~/assets/images/contenido/simposio.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    Simposio
                                </p>
                            </div>
                        </div>
                    </div>
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
        <!-- Blog Area End -->
        <section class="work-company section-padding" v-if="sponsors.length">
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
                            <carousel :per-page="4" :autoplay="true" paginationActiveColor="#686bc4">
                                <slide class="m-4">
                                    <img src="~/assets/img/sponsors/sponsorsmsd.png">
                                </slide>
                                <slide class="m-4">
                                    <img src="~/assets/img/sponsors/sponsorssandoz.png">
                                </slide>
                                <slide class="m-4">
                                    <img src="~/assets/img/sponsors/sponsorsamgen.png">
                                </slide>
                                <slide class="m-4">
                                     <img src="~/assets/img/sponsors/sponsorsmedix.png">
                                </slide>
                                <slide class="m-4">
                                     <img src="~/assets/img/sponsors/sponsorssmoksha.png">
                                </slide>
                                <slide class="m-4" >
                                     <img src="~/assets/img/sponsors/sponsorsasofarma.png">
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
    </main>


</template>

<script>

  import {mapState} from 'vuex';
  import SpeakerComponent from "../components/SpeakerComponent";
  import ImageComponent from "../components/ImageComponent";

  export default {
    components: {ImageComponent, SpeakerComponent},
    data() {
      return {
        sponsors: [],
        sponsorsCount: this.$device.isMobile ? 2 : 4,
        isMobile: this.$device.isMobile,
        loaded: false
      }
    },

    async mounted() {
      try {
        this.sponsors = await this.$axios.$get(`/sponsors?active_eq=true`);
        this.loaded = true;
      } catch (e) {
        console.warn(e);
        this.$swal('Error', 'Error al obtener profesores', 'error');
      }
    },

    computed: {
      ...mapState([
        'event'
      ]),

      countDown() {
        return this.$moment(this.event.start_date).valueOf() - this.$moment().startOf('day').valueOf();
      }
    }

  }
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

                h1, h2, h3 {
                    font-size: 3rem !important;
                }

                img {
                    width: 170px !important;
                }
            }
        }
    }

    .counter-section {
        > h1 {
            color: #FFF;
            font-size: 25px;
            text-align: center;
        }

        position: unset !important;
        font-family: "alegreya-sans-cs", sans-serif;
        background-color: none;
        padding: 25px 25px !important;
        margin: auto;
        border-radius: 10px;
        color: #FFF !important;
        background:#892AAD;
        width: 76%;
        display: block;

        p, span {
            color: #FFF !important;
        }

        .cd-item {
            &:after {
                background: #FFF !important;
                margin-top: 35px;
            }

            &:before {
                background: #FFF !important;
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
        background-image: linear-gradient(180deg,#516ab7 0%,#37bbe1 100%)!important;
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
            width: 100%;
            -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
        }

        .details {
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 9;
            background-image: linear-gradient(180deg, $theme-color2 0%, rgba(41, 196, 169, 0.13) 100%);
            left: 0;
            bottom: 0;
            padding: 160px 14px;

            .title {
                text-align: center;
                font-weight: bold;
                font-size: 2rem;
                color: #FFF;
                text-shadow: 0px 0px 20px #000000;
            }

            .subtitle {
                text-align: center;
                font-weight: 300;
                color: #FFF;
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
            max-height: 600px;

            .VueCarousel-inner {
                height: 600px !important;
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

                span, h1, h2, h3 {
                    color: #FFF;
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
                    width: 170px;
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
        background-color: #CFDBE0;

        h2 {
            color: #676bc4!important;
            font-size: 2em;
            letter-spacing:2px;
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
