<template>
    <div class="container">
        <div class="bg-loading" v-if="loading">
            <fa icon="spinner" class="fa-3x icon fa-spin"></fa>
        </div>
        <div class="row">
            <div class="col">
                <form action="" class="form-contact contact_form my-5" @submit.prevent="sendFile">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label required">Nombre(s):</label>
                                <input type="text" class="form-control" required v-model="contact.name">
                            </div>
                            <div class="form-group">
                                <label class="form-label required">Apellido(s):</label>
                                <input type="text" class="form-control" required v-model="contact.last_name">
                            </div>
                            <div class="form-group">
                                <label class="form-label required">Teléfono:</label>
                                <input type="text" class="form-control" required v-model="contact.phone_number">
                            </div>
                            <div class="form-group">
                                <label class="form-label required">Móvil:</label>
                                <input type="text" class="form-control" required v-model="contact.mobile_number">
                            </div>
                            <div class="form-group">
                                <label class="form-label required">Email:</label>
                                <input type="text" class="form-control" required v-model="contact.email">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label class="form-label required">Ciudad:</label>
                                <input type="text" class="form-control" required v-model="contact.city">
                            </div>
                            <div class="form-group">
                                <label class="form-label required">Estado:</label>
                                <input type="text" class="form-control" required v-model="contact.state">
                            </div>
                            <div class="form-group">
                                <label class="form-label required">País:</label>
                                <input type="text" class="form-control" required v-model="contact.country">
                            </div>
                            <div class="form-group">
                                <label class="form-label required">Categoría del trabajo:</label>
                                <select class="form-select" required v-model="contact.work_category">
                                    <option value="e-poster">E-Poster</option>
                                    <option value="oral">Oral</option>
                                </select>
                            </div>
                            <div class="form-group" v-if="contact.work_category==='oral'">
                                <label class="form-label required">Constancia de residencia:</label>
                                <input type="file" class="form-control-file" ref="proof" @change="handleProof" required
                                       accept="image/*, .pdf">
                                <p><span class="muted">Tamaño máximo de archivo: 20MB (Megabytes)</span></p>
                            </div>
                            <div class="form-group">
                                <label class="form-label required">Archivo:</label>
                                <input type="file" class="form-control-file" ref="slide" @change="handleSlide" required
                                       accept=".ppt, .pptx">
                                <p><span class="muted">Tamaño máximo de archivo: 20MB (Megabytes)</span></p>
                            </div>

                        </div>
                    </div>

                    <button class="btn" type="submit">Enviar trabajo</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "work-form-component",
    data() {
      return {
        contact: {
          work_category: 'e-poster',
          proof: null,
          slide: null
        },
        loading: false
      }
    },

    methods: {
      sendFile() {

        this.$swal({
          title: '¿Deseas enviar esta información?',
          text: "Los datos no podrán ser modificados una vez enviados.",
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, enviar',
          cancelButtonText: 'No, cancelar'
        }).then((result) => {

          if (result.value) {
            this.loading = true;
            this.sendData();
          }

        })

      },

      async sendData() {
        let self = this;
        try {
          let form_data = new FormData();

          for (var key in this.contact) {
            form_data.append(key, this.contact[key]);
          }

          await self.$axios.$post('/emails/works', form_data);

          self.loading = false;
          self.contact = {
            work_category: 'e-poster',
            proof: null,
            slide: null
          };

          self.$swal('¡Envío exitoso!', 'Gracias por enviar tu trabajo. El equipo del Comité de Trabajos te estará contactando para confirmar la correcta recepción.', 'success');

        } catch (e) {
          console.error(e);
          self.loading = false;
          self.$swal('Error de envío', 'Por favor inténtalo nuevamente', 'error');
        }
      },


      handleProof() {
        this.contact.proof = this.$refs.proof.files[0];
      },

      handleSlide() {
        this.contact.slide = this.$refs.slide.files[0];
      }
    }
  }
</script>

<style lang="scss" scoped>
    .bg-loading {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);;
        z-index: 3;

        .icon {
            color: white;
            margin: auto;
            display: block;
            margin-top: 20%;
        }
    }
</style>