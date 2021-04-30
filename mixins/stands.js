const mixinStand = {
    data: function () {
        return {
            isDisabled: false,
            contact: {
                mail_to: null,
                type: null
            }
        }
    },



    methods: {
        async sendMessage() {
            try {
                await this.$axiosAuth.post("/mail/contact", this.contact);

                this.$swal(
                    "¡Mensaje enviado correctamente!",
                    "Nos pondremos en contacto con usted a la brevedad.",
                    "success"
                );
                this.isDisabled = false;
                this.contact = {
                    type: null,
                };
            } catch (e) {
                console.error(e);
                this.isDisabled = false;
                this.$swal(
                    "¡Error al enviar datos!",
                    "Por favor contacte directamente a " + this.contact.mail_to,
                    "error"
                );
            }
        }
    }

}

export default mixinStand;