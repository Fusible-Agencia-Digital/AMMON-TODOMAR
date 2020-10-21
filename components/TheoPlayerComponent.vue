<template>
  <div
    class="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer"
    ref="theoplayer"
  ></div>
</template>

<script>
  export default {
    props: ["source"],
    mounted: function() {
      this.playerInit();
    },
    methods: {
      playerInit() {
        const player = new window.THEOplayer.Player(this.$refs.theoplayer, {
          fluid: true,
          libraryLocation: "https://cdn.myth.theoplayer.com/ac28db7f-ce62-4420-805e-a439cb54e97f"
        });
        player.source = {
          sources: this.source
        };
      }
    }
  };
</script>
<style>
  .THEOplayer {
    width: 50%;
    margin: 0 auto;
  }

  .video-js.vjs-16-9 {
    padding-top: 28.12%;
    width: 50%;
  }
</style>