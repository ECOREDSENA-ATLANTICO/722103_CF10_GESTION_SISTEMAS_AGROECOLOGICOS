<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 3
      h1 Identificación de la biodiversidad del suelo

    p.mb-5 El suelo alberga diversidad de organismos que se encuentran adaptados a este sistema y son parte fundamental para el desarrollo del ciclo de los nutrientes. Asimismo, pueden afectar la formación y evolución de los suelos, siendo considerado como un factor de formación del suelo.

    h5.mb-5.text-center Los factores y clasificación que limitan el desarrollo del suelo son:

    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.color-primario.p-3.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/img-1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Simbióticos 
                  p Este grupo de organismos obtienen la energía y nutrientes por medio de asociaciones, veamos a más profundidad esto en el siguiente video
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=cSgOReTdHSc&t=74s')" target="_blank")
                    span Ver video
                    i.fas.fa-video


    Separador

    #t-3-1.titulo-segundo.color-acento-contenido
      h2 3.1 Fertilidad del suelo
    .row.justify-content-center.align-items-center.mb-5

      .col-lg-8
        
        p Para el óptimo desarrollo de las plantas es necesario que el suelo cuente con determinados minerales y con el recurso hídrico para que estos puedan ser absorbidos por estas por medio de las raíces. Las plantas consiguen del aire y del agua algunos elementos que necesitan, como el carbono, el hidrógeno y el oxígeno.
        .cajon.color-acento-contenido.p-4.mb-4.fnd-2 
          p Las plantas a través del proceso de fotosíntesis capturan los elementos necesarios para su desarrollo como lo son el carbono, el hidrógeno y el oxígeno y otros nutrientes esenciales que se encuentran presentes en el suelo como los son los nutrientes principales como el nitrógeno, fósforo, potasio, calcio y magnesio procedentes de la descomposición de la materia orgánica a través de los microorganismos.


      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema3/img-2.png', alt='Texto que describa la imagen')

    h5.text-center Conozcamos los factores que influyen:
      


    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-5
      SlyderA(tipo="b")
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Fertilidad del suelo
            p Un suelo se considera fértil en cuanto contenga los nutrientes necesarios e indispensables para que las plantas puedan desarrollarse.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-3.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Consistencia y profundidad
            p La consistencia del suelo se mide por muestras de suelo mojado, húmedo y seco. Suelos profundos tienen un metro o más hasta llegar a una capa limitante.
            p Se debe determinar en las muestras de suelo de varios lugares si hay raíces presentes a distintas profundidades.

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-4.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Nutrientes
            p Los nutrientes son las sustancias químicas que toda planta toma del suelo para asegurar su crecimiento y desarrollo normal, como el nitrógeno, el fósforo, el potasio, el calcio y el magnesio, la falta de enriquecimiento de nutrientes posterior a la cosecha de los cultivos hace que el suelo pierda su fertilidad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-5.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Absorbe y retiene el agua 
            p El agua se retiene en el suelo en los poros entre las partículas del suelo.

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-6.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Aireado el suelo
            p El airear la tierra mediante perforaciones superficiales en el terreno, (entre 5 y 15 centímetros) para crear conductos por los que permitir el acceso del aire, el agua y los nutrientes al suelo y evitando la compactación del terreno.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-7.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Conservación de los suelos de sustancias tóxicas
            p Los suelos intercambian nutrientes y agua con las raíces de la planta. El suelo es un recurso no renovable y su preservación es esencial para la seguridad alimentaria.

        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-8.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Conservación de la estructura del suelo
            p Los suelos arados oponen menor resistencia a ser transportados por medio del agua y el viento. Los procesos erosivos pueden ser más agudos en terrenos con alta pendiente y que no cuenten por protección de árboles o arbustos.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-9.png', alt='Texto que describa la imagen')
       
    Separador

    #t-3-2.titulo-segundo.color-acento-contenido
      h2 3.2 Problemas del suelo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.fnd-2 
          .row.justify-content-center.align-items-center
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema3/img-10.svg', alt='Texto que describa la imagen')
            .col-lg-10            
              p.mb-0 El ser humano usa de diversas formas la superficie de la tierra y ese uso afecta en muchos casos al recurso suelo donde la agricultura, la ganadería, la extracción de minerales y de construcción, la eliminación de recursos y otras actividades son las principales causas de su deterioro y contaminación.
        p Cuando se habla de contaminación del suelo, se pueden encontrar fuentes puntuales o difusas, continuas o discontinuas.
        p El suelo puede recibir contaminación directa cuando se realiza un proceso de fertilización a partir de fertilizantes químicos y productos fitosanitarios, con el propósito de incrementar la producción vegetal. 
        p Donde podemos encontrar que los principales riesgos ambientales que se generan del empleo inadecuado de fertilizantes son:

      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema3/img-11.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-5.fnd-14.px-3
      .col-lg-7
        figure
          img(src='@/assets/curso/temas/tema3/img-12.png', alt='Texto que describa la imagen')
      .col-lg-5.fnd-15
        ul.lista-ul--color
          li
            i.fas.fa-circle.nar
            | Cambios en el tipo y estructura de la vegetación natural.
          li 
            i.fas.fa-circle.nar
            | Cambio en la calidad química del agua, en donde se pueden presentar procesos de eutrofización, cambios en la población de macrófitas y riesgos para la salud humana.  
          li 
            i.fas.fa-circle.nar
            | La incorporación de metales pesados a los suelos.
          li 
            i.fas.fa-circle.nar
            | Acidificación de los suelos y aguas superficiales.
          li 
            i.fas.fa-circle.nar
            | Producción de óxidos de nitrógenos.











</template>

<script>
export default {
  name: 'Tema3',
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
