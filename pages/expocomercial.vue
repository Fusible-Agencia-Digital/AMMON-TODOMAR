<template>
    <main>

    	<!--? BIENVENIDOS -->
        <div class="section-bienvenidos">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-sm-12 pt-4 mt-3 mb-3 text-left">
                            <h2 class="mb-4 pl-4 font-weight-bold">EXPO COMERCIAL 2020</h2>
                            <img src="~/assets/img/logo/logo_header.png" alt="" width="300px" class="float-left">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--
        <div class="alert alert-dark d-block d-sm-none text-center aviso-pantalla m-0" role="alert">
          <img src="~/assets/img/buttons/gira_pantalla.png" width="px" class="float-left p-3 m-3">
          <p class="text-left">En dispositivos moviles le recomendamos mantener la vista  horizontal de su pantalla.</p>
        </div>-->
        <!-- BIENVENIDOS END -->

        <div> 
          <div style="position:relative"><img id="main-image" src="~/assets/images/banner.jpg" width="100%">
            <a href="/congreso-virtual/somos" class="rim-hotspot" style="width:8.5%; height:2.6%; left:82.0%; top:53.5%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <!--<a href="/congreso-virtual/bayer" class="rim-hotspot" style="width:8.0%; height:5.8%; left:72.7%; top:51.8%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>-->
            <a href="/congreso-virtual/roche" class="rim-hotspot" style="width:7.7%; height:4.8%; left:63.8%; top:52.5%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <a href="/congreso-virtual/astra-zeneca" class="rim-hotspot" style="width:7.9%; height:3.3%; left:54.7%; top:52.1%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <a href="/congreso-virtual/pfizer" class="rim-hotspot" style="width:10.1%; height:4.6%; left:43.5%; top:49.5%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <a href="/congreso-virtual/bristol-myers" class="rim-hotspot" style="width:7.8%; height:4.5%; left:35.3%; top:51.7%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <a href="/congreso-virtual/msd" class="rim-hotspot" style="width:7.6%; height:4.8%; left:26.6%; top:52.0%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <a href="/congreso-virtual/maypo" class="rim-hotspot" style="width:8.2%; height:6.3%; left:17.8%; top:52.0%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <a href="/congreso-virtual/lideres-medicos" class="rim-hotspot" style="width:9.7%; height:5.9%; left:7.4%; top:52.5%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <a href="/live/dos" class="rim-hotspot" style="width:7.8%; height:28.4%; left:91.5%; top:44.7%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
            <a href="/live/uno" class="rim-hotspot" style="width:7.1%; height:25.6%; left:0.8%; top:46.5%; position:absolute; cursor:pointer; display:block; z-index:5; overflow:hidden;"></a>
          </div>
        </div>
     </main>
</template>
<script>
  export default {
    name: "congreso-virtual",

   
  }
</script>

<style lang="scss" scoped>
    @import "assets/scss/color";

    .section-bienvenidos{
    	background-image: linear-gradient(180deg, #516ab7 0%, #37bbe1 100%) !important;
    	height:auto;
    	h2 , p{
    		color:white;
    		font-weight:lighter;
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