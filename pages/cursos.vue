<template>
    <main>
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-left">
                                <h2>Cursos</h2>
                                <h4 class="text-white">¡Estamos preparando una nueva experiencia!</h4>
                                <a href="/contacto" class="btn">Solicite información</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="home-blog-area section-padding30">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/img/cursos/patologia.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    <nuxt-link to="/programa">Curso Patología</nuxt-link>
                                </p>
                                <p class="subtitle">10 de octubre Canal 2</p></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/img/cursos/radio_oncologia.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    <nuxt-link to="/programa">Curso Radio Oncología</nuxt-link>
                                </p>
                                <p class="subtitle">10 de octubre Canal 2</p></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/img/cursos/imagen.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    <nuxt-link to="/programa">Curso Imagen</nuxt-link>
                                </p>
                                <p class="subtitle">9 de octubre Canal 2</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/img/cursos/abc.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    <nuxt-link to="/programa">Curso ABC</nuxt-link>
                                </p>
                                <p class="subtitle">10 de Octubre Canal 1 </p></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/img/cursos/interdisciplinar.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    <nuxt-link to="/programa">Curso Interdisciplinar</nuxt-link>
                                </p>
                                <p class="subtitle">10 de octubre canal 2</p></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="congress-content">
                            <img src="~/assets/img/cursos/oncologia.jpg" alt="">
                            <div class="details">
                                <p class="title">
                                    <nuxt-link to="/programa">Curso Oncología</nuxt-link>
                                </p>
                                <p class="subtitle"></p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
  export default {
    name: "cursos",

    data: () => ({}),


    methods: {}
  }
</script>

<style lang="scss" scoped>
    @import "assets/scss/color";

    .slider-area2 {
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
            padding: 60px 14px;

            .title {
                text-align: center;
                font-weight: bold;
                font-size: 2rem;
                color: #FFF;
                text-shadow: 0px 0px 20px #000000;
            }

            .subtitle {
                text-align: center;
                font-weight: bold;
                color: #FFF;
                text-shadow: 0px 0px 20px #000000;
            }
        }

    }


</style>