<template>
    <main>

    	<!--? BIENVENIDOS -->
        <div class="section-bienvenidos">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 pt-4 mt-3 mb-0">
                            <h2 class="mb-4 pl-4">Bienvenido a Pfizer</h2>
                           	<p class="pl-4">Presione en donde vea el símbolo <img src="~/assets/img/buttons/SPOT.png" width="px" class="float-right pr-4 mr-3"><br>para acceder al contenido</p>
                        </div>
                        <div class="col-xl-8 pt-4 mt-3 mb-3">
                             <img src="~/assets/images/Logo-Pfizer.png" width="300px" class=" float-left ml-2 pl-4 pt-3">
                        </div>
                        <div class="col-xl-12 pl-4 registrarte">
                            <a href="https://www.srcongress.mx/somos/registro_virtual.php"
                                           target="_blank" class="btn mb-5 mb-md-3 mt-0 ml-2">
                                            Registrate aquí
                             </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-xl-12 m-4">
                    <div style="position:relative"><img id="main-image" src="~/assets/images/pfizer_stand.jpg" width="100%">
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:5.0%; height:9.2%; left:60.0%; top:63.2%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:5.7%; height:9.4%; left:59.6%; top:51.8%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:3.5%; height:9.4%; left:55.3%; top:63.4%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:3.5%; height:9.4%; left:55.3%; top:52.0%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:3.3%; height:9.2%; left:49.7%; top:51.8%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:3.7%; height:9.9%; left:49.5%; top:63.2%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:3.2%; height:9.4%; left:44.3%; top:63.4%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:5.4%; height:9.9%; left:43.2%; top:51.7%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:8.4%; height:9.1%; left:67.4%; top:53.6%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:4.4%; height:5.8%; left:76.1%; top:64.0%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:10.7%; height:39.9%; left:86.8%; top:48.7%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:6.1%; height:7.6%; left:30.2%; top:69.6%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('tres')" class="rim-hotspot" style="width:9.3%; height:10.2%; left:30.1%; top:49.0%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('dos')" class="rim-hotspot" style="width:6.4%; height:9.9%; left:17.5%; top:61.9%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
                        <a @click="$bvModal.show('uno')" class="rim-hotspot" style="width:11.6%; height:42.6%; left:-0.1%; top:46.0%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
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
                                <h2 class="text-center mb-4">Contacto con Pfizer</h2>
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
                        <div class="col-xl-6 p-0 m-0" style="background-image:url(/images/pfizer/POSTER1.jpg);background-size:cover">
                            <div class="col-xl-3 link text-center"><a href="www.google.com" target="_blank"><h3>www.Pfizer</h3></a></div>
                        </div>
                        <div>
                            <b-modal ref="uno" id="uno" hide-footer>
                                <div class="d-block text-center">
                                    <img src="~/assets/images/pfizer/Roll-up-CDE.jpg"  width="100%;">
                                </div>
                                <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                            </b-modal>

                            <b-modal  id="dos" hide-footer>
                                <div class="d-block text-center">
                                    <img src="~/assets/images/pfizer/Roll-up-CDE.jpg"  width="100%;">
                                </div>
                                <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                            </b-modal>
                            <b-modal  id="tres" hide-footer>
                                <div class="d-block text-center">
                                    <img src="~/assets/images/pfizer/Roll-up-CDE.jpg"  width="100%;">
                                </div>
                                <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
                            </b-modal>
                            
                        </div>
                    </div>
                </div>
        </div>

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