<template>
    <div class="col">
        <div class="row">
            <pre>{{ user }}</pre>
        </div>
    </div>
</template>

<script>
  export default {
    name: "perfil",
    middleware: 'auth',

    data: () => ({
      user: null
    }),


    async mounted() {
      let user = await this.$axiosAuth.get('/auth/me');
      this.user = user.data;

      var Tawk_API=Tawk_API||{};

      Tawk_API.visitor = {
        name : this.user.nombre,
        email : this.user.email
      };

      var Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5f59329bf0e7167d000ee744/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();

      Tawk_API.onLoad = function(){
          console.warn("Loaded");
      };
    }
  }
</script>

<style scoped>

</style>