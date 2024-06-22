<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5 El estudio de suelos permite obtener información representativa de los tipos de suelo presentes en el área donde se planea ejecutar el proceso productivo. Es así como el siguiente video introductorio nos adentrará sobre la caracterización de los suelos, de acuerdo a sus propiedades, perfil, biodiversidad y normas de seguridad y salud; temáticas a tratar en este componente formativo, bienvenidos:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Exf8srScD0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
