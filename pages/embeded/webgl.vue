<template>
    <client-only>
        <unity src="http://3.16.43.55/Build/Builds.json" width="100%" height="600" unityLoader="http://3.16.43.55/Build/UnityLoader.js"
               ref="myInstance"></unity>
    </client-only>
</template>

<script>
  export default {
    name: "webgl",
  }
</script>

<style scoped>

</style>