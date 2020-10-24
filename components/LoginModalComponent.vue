<template>
    <div>
        <div class="row" v-if="optionForm==1">
            <div class="col-12">
                <form @submit.prevent="authLogin">
                    <div class="form-group">
                        <label class="required">Email</label>
                        <p>Ingrese el correo electrónico con el que se registró</p>
                        <input type="email" class="form-control" v-model="user.email" required>
                    </div>

                    <div class="form-group">
                        <label class="required">Clave de acceso</label>
                        <p>Si olvidó o no cuenta con su CLAVE DE ACCESO, ingrese su correo electrónico y presione SOLICITAR CÓDIGO</p>
                        <input type="text" class="form-control" v-model="user.password" required>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-sm" type="submit" :disabled="disabled">Entrar</button>
                        <button class="btn btn-sm float-left" type="button" @click="authSendCode" :disabled="disabled || !user.email">Solicitar código</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="row" v-if="optionForm==2">
            <div class="col-12">
                <ul class="faq-list">
                    <li><strong>Si el correo con tu CLAVE DE ACCESO no ha llegado:</strong> Generalmente la CLAVE DE ACCESO es enviada dentro de los proximos 5 minutos, sin embargo pueden existir demoras de mayor tiempo dependiendo del tráfico.</li>
                    <!--li><strong>Acceso a usuarios:</strong> Si has recibido un correo electrónico con tu código anteriorimente, puedes utilizarlo. Este no cambiará.</li-->
                    <li>Si tienes dudas o mayores problemas para ingresar, puedes escribirnos en el formulario y en seguida nos pondremos en contacto contigo.</li>
                    <li>Linea de atención telefónica a problemas de acceso: <a href="tel:5534114697">55 3411 4697</a></li>
                </ul>
            </div>
            <div class="col-12">
                <p>Ingresa tus datos a continuación y un asesor se pondrá en contacto contigo lo más pronto posible.</p>
                <form @submit.prevent="sendContact">
                    <div class="form-group">
                        <label class="required">Nombre</label>
                        <input type="text" class="form-control" v-model="user.name" required>
                    </div>
                    <div class="form-group">
                        <label class="required">Apellido paterno</label>
                        <input type="text" class="form-control" v-model="user.last_name" required>
                    </div>
                    <div class="form-group">
                        <label>Apellido materno</label>
                        <input type="text" class="form-control" v-model="user.mother_last_name">
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label class="required">Teléfono</label>
                        <input type="text" class="form-control" v-model="user.phone_number" required>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-sm" type="submit" :disabled="disabled">Contáctanos</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="row">
            <div class="col text-center" v-if="optionForm!=2">
                <label class="cursor-pointer" @click="optionForm=2">¿Problemas para accesar?</label>
            </div>
            <div class="col text-center" v-if="optionForm!=1">
                <label class="cursor-pointer" @click="optionForm=1">¿Ya estás registrado?</label>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data: () => ({
        user: {
            email: "",
            password: "",
        },
        optionForm: 1,
        resendCode: false,
        disabled: false
    }),


    methods: {
      async authLogin() {
        this.disabled = true;
        try {
          let response = await this.$auth.loginWith('local', {data: this.user});
          await this.$auth.setUser(response.data.user);
          //this.$router.push('/congreso-virtual');
          //this.$bvModal.hide('modal-login');
          window.location.href = '/congreso-virtual'
        } catch (e) {
          console.error(e.response)
          this.$swal('Error', e.response.data.message, 'error');
          this.disabled = false;
        }
      },

      async authSendCode() {
        this.disabled = true;
        try {
            await this.$axiosAuth.post('/auth/sendcode', this.user);
            await this.$swal('¡Bien!', 'Tu código de acceso se ha enviado correctamente al correo electrónico proporcionado.', 'success');
            this.disabled = false;
            return true;
        }
        catch(e) {
            console.error(e.response);
            this.disabled = false;
            await this.$swal('Error al enviar código', e.response.data.message, 'error');
            return false;
        }
      },

      async sendContact() {

        this.disabled = true;
        this.user.mail_to = 'atencion@srcongress.mx';
        this.user.type = 'access';
        try {
          await this.$axiosAuth.post('/mail/contact', this.user);

          this.$swal('¡Mensaje enviado correctamente!', 'Nos pondremos en contacto contigo a la brevedad.', 'success')
          this.disabled = false;
          this.user = {};
        } catch (e) {
          console.error(e.responseText);
          this.disabled = false;
          this.$swal('¡Error al enviar datos!', 'Por favor contacte directamente a contacto@mastologia.org.mx', 'error');
        }
      },

      resetWizard() {
          this.$refs['auth-wizard'].reset();
          this.$refs['auth-wizard'].activateAll();
      }

    }
}

</script>


<style lang="scss">
    .cursor-pointer {
        cursor: pointer !important;
    }

    .btn-sm {
        height: 40px !important;
        padding: 5px;
        width: 160px;
        float: right;
        margin-bottom: 20px;
    }

    .btn-link {
      color: #eb008a;
      pointer-events: none;
      background: none;

    }

    .faq-list {
        padding: 10px;

        li {
            list-style: inherit;
            margin-bottom: 10px;
            font-size: 13px;

            a {
                color: #15baac
            }
        }
    }
</style>
