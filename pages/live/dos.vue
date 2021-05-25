<template>
  <main>
    <!--? BIENVENIDOS -->
    <div class="section-bienvenidos">
      <div class="slider-height2 d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 pt-4 mt-3 mb-3">
              <h2 class="mb-4 pl-4">Transmisión en vivo</h2>
            </div>
          </div>
        </div>
      </div>

      <menu-tabs-component>
        <b-nav-item :active="false" href="/live/uno"> Canal uno </b-nav-item>
        <b-nav-item :active="true" href="/live/dos"> Canal dos </b-nav-item>
      </menu-tabs-component>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- <LiveComponent channel="two" /> -->
          <!-- <LiveComponent channel="two"/> -->
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "live",
  middleware: ["authenticated"],

  head() {
    return {
      // __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          hid: "zsiqchat",
          innerHTML:
            'var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "c1a87a31cb4e49328b8e184a76c808eb4b3464d017625c57ec265d6dde80f003", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);',
          type: "text/javascript",
          // charset: "utf-8",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "assets/scss/color";

.section-bienvenidos {
  background: linear-gradient(to bottom, #2f447d, #5798b1);
  height: auto;
  h2,
  p {
    color: white;
    font-weight: lighter;
  }
}

.slider-height2 {
  height: auto;
}
.aviso-pantalla {
  background-color: #7d4199 !important;
  padding: 30px 10px 30px 10px;
  p {
    color: white;
  }
}

.contact-info {
  a {
    color: $theme-color;
  }
}

.chat-frame {
  height: 600px;
  padding-top: 81px;
}

.nav-link {
  background-color: #2c91ae;
  color: #fff !important;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  height: 100%;
}
</style>
