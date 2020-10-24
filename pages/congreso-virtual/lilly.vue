<template>
    <main>

    	<!--? BIENVENIDOS -->
        <div class="section-bienvenidos">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 pt-4 mt-3 mb-0">
                            <h2 class="mb-4 pl-4 font-weight-bold">Bienvenido a Lilly</h2>
                           	<p class="pl-4">Presione en donde vea el símbolo <img src="~/assets/img/buttons/SPOT.png" width="px" class="float-right pr-4 mr-3"><br>para acceder al contenido</p>
                        </div>
                        <div class="col-xl-8 pt-4 mt-3 mb-3 movil">
                             <img src="~/assets/images/lilly/LOGO.png" width="300px" class="movil float-left ml-2 pl-4 pt-3">
                        </div>
                        <div class="col-xl-12 pl-4 registrarte">
                            <nuxt-link to="/congreso-virtual" class="btn mb-5 mb-md-3 mt-0 ml-2">Regresar</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12 p-0">
                    <div style="position:relative"><img id="main-image" src="~/assets/images/lilly/stand.jpg" width="100%">
                        <a @click="$bvModal.show('once')" class="rim-hotspot" style="width:3.3%; height:4.3%; left:90.1%; top:80.5%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a href="../docs/lilly/5.1_ESTUDIO.pdf" target="_blank" class="rim-hotspot" style="width:2.8%; height:5.0%; left:90.1%; top:72.9%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('nueve')" class="rim-hotspot" style="width:3.0%; height:5.3%; left:83.8%; top:83.0%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a href="../docs/lilly/5.2_ESTUDIO.pdf" target="_blank" download class="rim-hotspot" style="width:3.5%; height:5.6%; left:83.2%; top:75.6%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('seis')" class="rim-hotspot" style="width:4.9%; height:5.4%; left:75.5%; top:73.6%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('siete')" class="rim-hotspot" style="width:8.3%; height:14.2%; left:73.8%; top:56.3%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('cinco')" class="rim-hotspot" style="width:7.4%; height:20.3%; left:64.4%; top:56.1%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('video')" class="rim-hotspot" style="width:14.1%; height:19.3%; left:49.3%; top:56.3%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('dos')" class="rim-hotspot" style="width:9.7%; height:13.7%; left:38.7%; top:55.9%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('tres')" class="rim-hotspot" style="width:21.8%; height:22.1%; left:22.7%; top:70.8%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')"  class="rim-hotspot" style="width:14.3%; height:53.1%; left:5.2%; top:42.1%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                    </div>
                </div>

            </div>
        </div>
        <b-modal  id="uno" hide-footer >
            <div class="d-block text-center">
                <img src="~/assets/images/lilly/ROLLUP-FORTEO.jpg"  width="100%;">
            </div>
        </b-modal>
         <b-modal  id="dos" hide-footer >
            <div class="d-block text-center">
                <img src="~/assets/images/lilly/IMAGEN-IZQUIERDA.jpg"  width="100%;">
            </div>
        </b-modal>
        <b-modal  id="tres" hide-footer >
            <div class="d-block text-center">
                 <h2 class="p-4">Puede enviarnos un mensaje a través de nuestro formulario de contacto y le enviaremos la información requerida</h2>
            </div>
        </b-modal>
        <b-modal  id="cinco" hide-footer >
            <div class="d-block text-center">
                  <img src="~/assets/images/lilly/IMAGEN.jpg"  width="100%;">
            </div>
        </b-modal>
        <b-modal  id="seis" hide-footer >
            <div class="d-block text-center">
                  <h2 class="p-4">Nuestros ejecutivos están listos para atenderle en nuestro chat.</h2>
            </div>
        </b-modal>
        <b-modal  id="siete" hide-footer >
            <div class="d-block text-center">
                 <img src="~/assets/images/lilly/IMAGEN-DERECHA.jpg"  width="100%;">
            </div>
        </b-modal>
        <b-modal  id="nueve" hide-footer >
            <div class="d-block text-center">
                 <img src="~/assets/images/lilly/REPISA-4.jpg"  width="100%;">
            </div>
        </b-modal>
        <b-modal  id="once" hide-footer >
            <div class="d-block text-center">
                 <img src="~/assets/images/lilly/REPISA-3.jpg"  width="100%;">
            </div>
        </b-modal>

        <b-modal  id="video" hide-footer size="xl" >
            <div class="d-block text-center">
                <iframe src="https://player.vimeo.com/video/470207925?autoplay=1" width="100%" height="361" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
        </b-modal>



        <!--? CONTACTO-->
        <div class="section-contacto">
                <div class="container-expanded">
                    <div class="row">
                        <div class="col-xl-6 mb-0 contacto">
                            <div class="col-xl-10 offset-xl-1 p-4">
                                <h2 class="text-center mb-4 text-white">Contacto con Lilly</h2>
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
                                    <div class="form-group mt-3 text-center">
                                        <button type="submit" class="button button-contactForm boxed-btn" :disabled="disabled">
                                            Enviar
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                        <div class="col-xl-6 p-0 m-0" style="background-color: #d52b1e;">
                            <div class="col-xl-4 link text-center"><a href="https://www.lilly.com.mx" target="_blank"><h3>Visite nuestro sitio</h3></a></div>
                        </div>
                        <div>


                        </div>
                    </div>
                </div>
        </div>

     </main>
</template>
<script>
  export default {
    name: "contacto",
   middleware: ['authenticated'],

    head() {
        return {
            __dangerouslyDisableSanitizers: ['script'],
            script: [
                {
                    hid: 'zoho',
                    //innerHTML: "var _smartsupp = _smartsupp || {};_smartsupp.key = 'f05d28f4332f6998dbbe2ee4832c4ce37d354e07';window.smartsupp||(function(d) {var s,c,o=smartsupp=function(){ o.push(arguments)};o=[];s=d.getElementsByTagName('script')[0];c=d.createElement('script');c.type='text/javascript';c.charset='utf-8';c.async=true;c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);})(document);",
                    innerHTML: 'var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"c1a87a31cb4e49328b8e184a76c808eb0f518f6a5caea4d66677f95a57bf6c0a", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id=\'zsiqwidget\'></div>");',
                    type: 'text/javascript',
                    charset: 'utf-8'
                }
            ]
        }
    },

    data() {
      return {
        contact: {
          type: null
        },
        disabled: false
      }
    },

    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        toggleModal() {
            // We pass the ID of the button that we want to return focus to
            // when the modal has hidden
            this.$refs['my-modal'].toggle('#toggle-btn')
        },
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
            await this.$axiosAuth.post('/mail/contact', this.contact);

            this.$swal('¡Mensaje enviado correctamente!', 'Nos pondremos en contacto con usted a la brevedad', 'success')
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
    @media (max-width: 576px) {
         .section-contacto .link{
             top:0!important;
             left:0!important;

         }
         .movil{
             padding-top: 0!important;
             margin-top:0!important;
             text-align: center;
            display: block;
         }
     }

    @media (max-width: 768px) {
         .section-contacto .link{
            top:0!important;
            left:0!important;

         }
         .movil{
             padding-top: 0!important;
             margin-top:0!important;
             text-align: center;
             display: block;
         }
     }
     @media (max-width: 992px) {
         .section-contacto .link{
            top:0!important;
            left:0!important;

         }
         .movil{
             padding-top: 0!important;
             margin-top:0!important;
             text-align: center;
             display: block;
         }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (max-width: 1200px) {
        .section-contacto .link{
            top:0!important;
            left:0!important;

         }
         .movil{
             padding-top: 0!important;
             margin-top:0!important;
             text-align: center;
             display: block;
         }
     }

    .section-bienvenidos{
    	height:auto;
    	h2 , p{
    		color:black;
    		font-weight:lighter;
    	}
        a{
            background:#676BC4;
        }
    }
    .section-contacto{
        .contacto{
            background:#676bc4;
            .form-contact .form-control{
                background:white;
            }
        }
        .link{
            position:relative;
            top:50%;
            left:35%;
            background-color:white;
            opacity:.7;
            border-radius:10px;

        }
    }
    .slider-height2{
    	height:auto;
    }
    .aviso-pantalla{
      background-color:#7D4199!important;
      padding:30px 10px 30px 10px;
      p{
        color:white;
      }
    }


    .contact-info {
        a {
            color: $theme-color;
        }
    }
</style>
