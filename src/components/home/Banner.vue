<template>
    <section id="head-banner">
        <p id="banner-title">Your service here</p>
    </section>
</template>

<script>
export default {
name: "Banner"
}
</script>

<style scoped>
#head-banner {
    position:relative;
    width: 100%;
    height:500px;
    background: rgb(0,172,255);
    background: -moz-linear-gradient(0deg, rgba(0,172,255,1) 0%, rgba(0,155,227,1) 100%, rgba(0,212,255,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(0,172,255,1) 0%, rgba(0,155,227,1) 100%, rgba(0,212,255,1) 100%);
    background: linear-gradient(0deg, rgba(0,172,255,1) 0%, rgba(0,155,227,1) 100%, rgba(0,212,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00acff",endColorstr="#00d4ff",GradientType=1);
}

#banner-title {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size:60px;
  color:white;
}
</style>