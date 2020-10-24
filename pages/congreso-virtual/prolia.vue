<template>
    <main>

    	<!--? BIENVENIDOS -->
        <div class="section-bienvenidos">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 pt-4 mt-3 mb-0">
                            <h2 class="mb-4 pl-4">Bienvenido a AMGEN</h2>
                           	<p class="pl-4">Presione en donde vea el símbolo <img src="~/assets/img/buttons/SPOT.png" width="px" class="float-right pr-4 mr-3"><br>para acceder al contenido</p>
                        </div>
                        <div class="col-xl-8 pt-4 mt-3 mb-3 movil">
                             <img src="~/assets/images/amgen/logo.png" width="300px" class="movil float-left ml-2 pl-4 pt-3">
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
                    <div style="position:relative"><img id="main-image" src="~/assets/images/amgen/stand.jpg" width="100%">
                        <a @click="$bvModal.show('seis')" class="rim-hotspot" style="width:3.3%; height:14.4%; left:83.2%; top:70.8%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('cinco')" class="rim-hotspot" style="width:8.3%; height:20.0%; left:74.1%; top:56.1%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('cuatro')" class="rim-hotspot" style="width:7.8%; height:21.8%; left:64.3%; top:56.3%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('tres')" class="rim-hotspot" style="width:10.3%; height:22.3%; left:38.2%; top:52.1%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('dos')" class="rim-hotspot" style="width:7.1%; height:34.8%; left:23.3%; top:55.9%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:14.0%; height:55.9%; left:4.3%; top:38.6%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
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
                                <h2 class="text-center mb-4 text-white">Contacto con AMGEN</h2>
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
                        <div class="col-xl-6 p-0 m-0" style=" background-image: linear-gradient(180deg, #54bb5a 0%, #159bd7 100%) !important;">
                            <div class="col-xl-3 link text-center"><a href="https://www.amgen.com.mx/" target="_blank"><h3>Visite nuestro sitio</h3></a></div>
                        </div>
                        <div>


                        </div>
                    </div>
                </div>
        </div>

        <b-modal  id="uno" hide-footer >
            <div class="d-block text-center">
                   <img src="~/assets/images/amgen/2_1280x2700px.jpg"  width="100%;">
            </div>
        </b-modal>
        <b-modal  id="tres" hide-footer >
            <div class="d-block text-center">
                   <img src="~/assets/images/amgen/1280x1280_px.jpg"  width="100%;">

            </div>
        </b-modal>
        <b-modal  id="dos" hide-footer >
            <div class="d-block text-center">
                   <h2 class="p-4">Nuestros representantes están listos para atenderle en nuestro chat. </h2>

            </div>
        </b-modal>

        <b-modal  id="cuatro" hide-footer  >
            <div class="d-block text-center">
                 <img src="~/assets/images/amgen/1080_1600_px_2.jpg"  width="100%;">

            </div>
        </b-modal>
        <b-modal  id="cinco" hide-footer >
            <div class="d-block text-center">
                   <img src="~/assets/images/amgen/1080_1600_px.jpg"  width="100%;">
            </div>
        </b-modal>
        <b-modal  id="seis" hide-footer >
            <div class="d-block text-center">
                   <h2 class="p-4"> Pónganse en contacto con nuestro equipo a través del formulario</h2>

            </div>
        </b-modal>





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
                    innerHTML: 'var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"c1a87a31cb4e49328b8e184a76c808eb8781798c20454206b2e5863f4a4fade4", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id=\'zsiqwidget\'></div>");',
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
            /*if (this.contact.type === 'Proveedor') {
            this.contact.mail_to = 'jorge@srcongress.mx';
            } else if (this.contact.type === 'Profesor') {
            this.contact.mail_to = 'adriana.sanchez@srcongress.mx';
            } else {
            this.contact.mail_to = 'atencion@srcongress.mx';
            }*/
            this.contact.mail_to = 'mparraol@amgen.com';
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
            left:40%;
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
