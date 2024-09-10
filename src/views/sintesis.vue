<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 En este componente se consolida el material de estudio para que el aprendiz pueda identificar lo referente a la caracterización del suelo según parámetros técnicos. Teniendo en cuenta los componentes que forman el suelo, desde su material originario, pasando por el clima y el tiempo de formación. De igual manera los compuestos del al suelo relacionados con los estados de la materia constituidos por fracciones orgánicas e inorgánicas; por consiguiente, podemos hablar de sus propiedades químicas, físicas y biológicas que se pueden identificar por medio del muestreo, el cual está sujeto a un plan de muestreo que comprende diferentes normas de seguridad y salud en el trabajo y permite conocer el estado del suelo a partir de valores de referencia generando un perfil del suelo.
    p.mb-5 Basado en lo anterior y lo visto en el componente formativo, presentamos de manera conceptual un resumen al respecto:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
