<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero 
        span 2
      h1 Identificación del perfil del suelo

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El perfil es el conjunto de horizontes o capas identificadas en sentido vertical, hasta determinada profundidad, la cual está determinada por un límite natural como la roca no alterada, material originario o la capa freática. 


    p.mb-5.text-center A continuación, se encuentra la descripción del perfil del suelo:
    figure.mb-5 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        h5 La descripción del suelo en campo exige un equipamiento mínimo que consta de:

        ul.lista-ul--color
          li
            i.fas.fa-circle.nar
            | Palas de punta y ancha para realización de la calicata.
          li 
            i.fas.fa-circle.nar
            | Cinta métrica de 2 metros o más.
          li
            i.fas.fa-circle.nar
            | Cuchillo o navaja.
          li
            i.fas.fa-circle.nar
            | Carta de Munsell la cual será la herramienta fundamental para poder precisar y especificar el color del suelo en cada horizonte.
          li
            i.fas.fa-circle.nar
            | Ácido para carbonatos diluido para identificar la presencia de carbonatos.
          li
            i.fas.fa-circle.nar
            | Formatos de campo para la toma de apuntes de las características de manera ordenada.
          li
            i.fas.fa-circle.nar
            | Bolsas o envases y etiquetas para muestreo.
          li
            i.fas.fa-circle.nar
            | Otros como pH metro para la medición de pH o un Conductímetro para la medición de sales y/o sales solubles.    

      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema2/img-2.png', alt='Texto que describa la imagen')


    Separador

    #t-2-1.titulo-segundo.color-acento-contenido
      h2 2.1 Horizontes


    .row.justify-content-center.align-items-center.mb-5

      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.fnd-2 
          p El horizonte del suelo u horizontes son capas o estratos diferenciados entre sí por diferentes características físicas y químicas, ordenados en sentido vertical hasta determinada profundidad y pueden ser producto de un proceso formador o degradaciones mecánicas por agentes de transporte con el agua.
        p Para describir de forma adecuada un perfil se deben seguir un sistema de designación o de nomenclatura o simbología que corresponde a los horizontes principales y capas. Los horizontes principales se representan o designan mediante las letras mayúsculas O, A, E, B, C y R. Veamos cómo se conforman:


      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema2/img-3.svg', alt='Texto que describa la imagen')

    h5.text-center Horizontes del suelo



    .row.justify-content-center.align-items-center.mb-5
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-4.svg', alt='Texto que describa la imagen')
  
          .tarjeta.color-acento-botones--borde.p-3(x="37.6%" y="25%" numero="O")
            .h5.mb-2 Capas O
            p Conforman un depósito de materia orgánica que se forma sobre la superficie de los suelos.

          .tarjeta.color-acento-botones--borde.p-3(x="37.6%" y="32.7%" numero="A")
            .h5.mb-2 Los horizontes A
            p Se encuentran los elementos orgánicos, finos o gruesos, y solubles, que han de ser lixiviados.

          .tarjeta.color-acento-botones--borde.p-3(x="37.6%" y="43.6%" numero="E")
            .h5.mb-2 Los horizontes E
            p Lo más importante es la perdida de arcilla y otros compuestos, estos horizontes normalmente tienen escasa estructura o directamente tienden a ser masivos y duros si son de textura fina o muy sueltos en el caso se ser arenosos.

          .tarjeta.color-acento-botones--borde.p-3(x="37.6%" y="54.4%" numero="B")
            .h5.mb-2 Los horizontes B
            p Se encuentran los materiales procedentes del horizonte A

          .tarjeta.color-acento-botones--borde.p-3(x="37.6%" y="67.9%" numero="C")
            .h5.mb-2 Los horizontes C
            p Pueden tener materiales en alta concentración como sales solubles, carbonato o yeso.

          .tarjeta.color-acento-botones--borde.p-3(x="37.6%" y="84%" numero="R")
            .h5.mb-2 Las capas R
            p Es el manto rocoso consolidado subyacente, dependiendo del ambiente geológico o estratigráfico, se pueden encontrar granito, basalto, arenisca, cuarcita y caliza. Puede estar algo meteorizado, pero no es posible su excavación con pala.

          .tarjeta.color-acento-botones--borde.p-3(x="62.9%" y="69.8%" numero="T")
            .h5.mb-2 Los horizontes de transición
            p Se presentan propiedades de 2 horizontes principales el horizonte transicional se ubica entre ambos y su denominación utiliza las letras de cada horizonte: AB, AE, AC - EA, EB, EC - BA, BE, BC – CB, CA. 

          .tarjeta.color-acento-botones--borde.p-3(x="61.1%" y="25%" numero="M")
            .h5.mb-2 Los horizontes mezcla
            p Próximos a la superficie en los que se encuentran materiales de todos los horizontes vecinos. Se diferencian de los horizontes de transición porque el material de cada horizonte que integra la mezcla es identificable, contrastando el color y textura.

      
    Separador

    #t-2-2.titulo-segundo.color-acento-contenido
      h2 2.2 Técnicas de muestreo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema2/img-5.png', alt='Texto que describa la imagen')


      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4.fnd-7 
          p El muestreo es una etapa fundamental e inicial para la interpretación de las pruebas del suelo en el laboratorio, por lo que se deben considerar parámetros técnicos en su ejecución dada la gran heterogeneidad del suelo, su topografía, origen, vegetación, manejo, etc.; es necesario definir las unidades con características similares, lo que se conoce como una unidad de muestreo.

        p Es clave mencionar que la técnica empleada en el proceso de muestreo va a depender del objetivo final del estudio. Existen varias técnicas para el muestreo de suelos asociadas a su clasificación física y mineralógica, así como la fertilidad, para determinar sus macro y microorganismos, etc.

        p Para realizar cualquier tipo de muestreo, es necesario definir previamente un plan, el cual debe incluir toda la programación e información relacionada con los objetivos de este.

    .row.justify-content-center.d-flex.align-items-stretch
      .col-lg-10.mb-5
        .crd_02.fn-5
          .crd_02__icon
            img(src="@/assets/curso/temas/tema2/img-6.svg", alt="alt")          
          .crd_02__txt    
            p Este plan debe detallar claramente los objetivos, los cuales permiten un proceso óptimo en el levantamiento de información al momento de describir el lugar, determinando: a) Área del muestreo, b) Objetivos del muestreo, c) El o los tipos de muestreo a realizar, de conformidad con los objetivos planteados, d) La posición y densidad de los puntos a muestrear, e) El o los procedimientos de campo, f) El o los métodos definidos para la conservación de las muestras, y finalmente g) Las necesidades analíticas a desarrollar.
      .col-lg-10
        h5.text-center.mb-5 De igual manera, el plan de muestreo debe contener como mínimo los aspectos descritos a continuación:

        .titulo-sexto.color-acento-contenido.mb-5
          h5 Tabla 1.
          span Contenido mínimo plan de muestreo

        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h4.mb-0 Contenido mínimo plan de muestreo
          table
            caption <b>Fuente.</b> Perú. Ministerio del Ambiente. (2014). Guía para el muestreo de suelos. https://www.minam.gob.pe/calidadambiental/wp-content/uploads/sites/22/2013/10/GUIA-PARA-EL-MUESTREO-DE-SUELOS-final.pdf (pág. 15)

            tr
              td.text-bold a) 
              td Información básica del suelo (potencialmente) contaminado, comprendiendo los mapas de ubicación, planos de distribución de la infraestructura y construcciones realizadas en el sitio de acuerdo a la evaluación preliminar (investigación histórica e inspección del sitio) descrita en la Guía para la elaboración de Planes de Descontaminación de Suelos (PDS).
            tr
              td.text-bold b) 
              td Resultados de los estudios previos del suelo (potencialmente) contaminado.
            tr
              td.text-bold c) 
              td Determinación de las Áreas de Potencial Interés. La sustentación de la ubicación y el número de puntos de muestreo, la profundidad y el volumen de muestra a colectar.
            tr
              td.text-bold d) 
              td Personal involucrado precisando las responsabilidades y actividades en cada procedimiento.
            tr
              td.text-bold e) 
              td La estrategia y procedimiento de toma de muestras a realizar. Tipo y método de muestreo.
            tr
              td.text-bold f) 
              td Determinación de los parámetros a analizar en las muestras.
            tr
              td.text-bold g) 
              td Las técnicas, el equipo y los instrumentos a emplearse en el muestreo, que aseguren la homogeneidad y representatividad de las muestras.
            tr
              td.text-bold h) 
              td Tipo y características de la preservación y conservación de las muestras a emplearse durante el transporte de las mismas al laboratorio.
            tr
              td.text-bold i) 
              td Medidas de seguridad para el manejo de muestras, que determinen las condiciones óptimas de la calidad del muestreo.
            tr
              td.text-bold j) 
              td Medidas de seguridad ocupacional a seguir durante el muestreo, lo suficientemente explicitadas para garantizar la salud y seguridad de quienes toman la muestra.
            tr
              td.text-bold k) 
              td Número mínimo de puntos de muestreo según el tipo de muestreo.
           

        p De igual manera, el plan de muestreo debe tener una estructura base que permita la correcta ejecución de la práctica en campo y la recolección de información necesaria para el análisis y el logro de los objetivos planteados inicialmente.

        h5.text-center.text-bold A continuación, se presenta la estructura base del plan de muestreo:
        
        .titulo-sexto.color-acento-contenido.mb-5
            h5 Tabla 2.
            span Estructura Plan de Muestreo de suelos

        .tbl-1.color-acento-contenido
          .tabla-b__header
            h4.mb-0 1. DATOS GENERALES
          table
            tr
              td <b>1.1.</b> Objetivo del muestreo: Definir de manera precisa las metas que se desean cumplir. <b><br>1.2.</b> Vías de acceso al sitio: Explicitar el acceso geo-referenciado al sitio de interés.<b><br>1.3.</b> Resumen de estudios previos: Identificar información relevante de acciones previas realizadas en el sitio de estudio.<b><br>1.4.</b> Localización geográfica del sitio (UTM WGS 84): Para su respectivo mapeo.<b><br>1.5.</b> Delimitación de las áreas de interés de muestreo: En base a la información disponible sobre las actividades anteladas o los procesos en curso.

        .tbl-1.color-acento-contenido
          .tabla-b__header
            h4.mb-0 2. PLANEACIÓN Y PROCEDIMIENTO DEL MUESTREO
          table
            tr
              td <b>2.1.</b> Tipo de muestreo. <b><br>2.2.</b> Localización, distribución y número de puntos de muestreo. <b><br>2.3.</b> Profundidad de muestreo. <b><br>2.4.</b> Tipos de muestras (muestras simples o compuestas, de profundidad o superficiales). <b><br>2.5.</b> Estimación del Número total de muestras. <b><br>2.6.</b> Parámetros de campo. <b><br>2.7.</b> Equipo de muestreo de suelo. <b><br>2.8.</b> Medidas para asegurar la calidad del muestreo. <b><br>2.9.</b> Preservación de las muestras. <b><br>2.10.</b> Tipo de recipientes y volumen de las muestras. <b><br>2.11.</b> Plan de salud y seguridad del operario. <b><br>2.12.</b> Plan de cadena de custodia.
        .tbl-1.color-acento-contenido.mb-5
          .tabla-b__header
            h4.mb-0 3. ANEXOS
          table
            tr
              td <b>3.1.</b> Planos de ubicación.<b><br>3.2.</b> Plano vial de carreteras, caminos o calles para llegar al sitio y edificaciones.<b><br>3.3.</b> Imagen aérea o satelital del sitio de alta resolución (de 15 cm a 60 cm) orto-rectificadas.<b><br>3.4.</b> Plano de la zona de estudio e identificación de los puntos de muestreo geo-referenciado en coordenadas UTM.<b><br>3.5.</b> Copia de la acreditación y de la aprobación del laboratorio vigente, con el listado de signatarios autorizados.

    .list2.mb-3(data-aos="fade-down")
      .list2__item
        .list2__item__icon
          img(src='@/assets/curso/temas/tema1/img-5.svg', alt='')
      .list2__txt
        h3.mb-0 Proceso de gestión previa a ir al campo

    p La gestión de servicios de campo (FSM) es la coordinación de los recursos de una empresa, incluyendo a los empleados y el equipo, en actividades de trabajo y operaciones fuera de esta. A continuación, veremos los pasos de la ejecución del plan de muestreo relacionada a la FSM:

    .row.justify-content-center
      .col-lg-8  
        TabsA.color-secundario.mb-5.tabb
          .tarjeta.fnd-12.p-4(titulo="Determinar las<br> unidades de<br> muestreo")
            p Elaborar mapa o croquis de la zona a muestrear identificar el tipo y cantidad de muestras a tomar, definir si será una muestra simple o compuesta, normalmente es recomendable cuatro muestras por hectárea, con un peso de 1 kilogramo de suelo por muestra.

          .tarjeta.fnd-12.p-4(titulo="Frecuencia")
            p La muestra de suelo debe ser repetida en intervalos de 1 a 4 años. Para parcelas con mayor intensidad en el uso de fertilizantes, la frecuencia debe incrementar lo necesario para llevar a cabo el plan definido. Cuando los cultivos son de frecuencia anual, se recomienda tomar la muestra a 20 cm de profundidad.

          .tarjeta.fnd-12.p-4(titulo="Definir la <br>época correcta<br> para tomar las <br>muestras de <br>suelo")
            p El factor meteorológico es fundamental.

          .tarjeta.fnd-12.p-4(titulo="Localización")
            p La posición de las parcelas por muestrear, estas deben ser uniformes en color, tipo de suelo, uso anterior y posición en la pendiente.

          .tarjeta.fnd-12.p-4(titulo="Profundidad <br>del muestreo")
            p No es conveniente hacer muestreos de áreas mayores a diez hectáreas.

          .tarjeta.fnd-12.p-4(titulo="Identificación")
            p Debe acompañar el análisis descrito en el informe de resultados para comprender el proceso de evolución del suelo con el paso del tiempo. Para sistemas de siembra directa, la muestra se debe tomar en dos profundidades, la primera de 0 a 10 y la segunda de 10 a 20 cm.
  
      .col-lg-4.d-md-none.d-lg-block
        figure.img-h
          img.img-h2(src='@/assets/curso/temas/tema2/img-8.png', alt='Texto que describa la imagen')


    p Para definir la época correcta para tomar las muestras de suelo el factor meteorológico es fundamental. Con relación a la frecuencia, la muestra de suelo debe ser repetida en intervalos de 1 a 4 años. Para parcelas con mayor intensidad en el uso de fertilizantes, la frecuencia debe incrementar.

    p.mb-5 Cuando los cultivos son de frecuencia anual, se recomienda tomar la muestra a 20 cm de profundidad. Para sistemas de siembra directa, la muestra se debe tomar en dos profundidades, la primera de 0 a 10 y la segunda de 10 a 20 cm.

    h5.text-center.text-bold.mb-5 Para el lugar del muestreo se debe ejecutar de manera aleatoria o al azar y siguiendo los siguientes parámetros:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Determinación de sitios de muestreo
        figure.mb-5 
          img(src='@/assets/curso/temas/tema2/img-9-.svg', alt='Texto que describa la imagen')

        .tarjeta.color-primario.p-3.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img-10.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Manejo ecológico del suelo - Cómo tomar una muestra
                  p Estimado aprendiz, la forma cómo se realice el muestreo del suelo, es la etapa primera y crucial para una adecuada interpretación de los resultados obtenidos en el laboratorio. Por lo tanto, tomar correctamente la muestra de suelos es fundamental para realizar el respectivo análisis. A continuación más detalle a través del siguiente video: 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=qBdp2waTIsI&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA')" target="_blank")
                    span Ver video
                    i.fas.fa-video

    p.mb-5 Estimado aprendiz, para ampliar la información relacionada con la composición o fases del suelo diríjase a los siguientes enlaces web de páginas gubernamentales, los cuales relacionan artículos relacionados con esta temática:
    .row.justify-content-center.mb-5.d-flex.align-items-stretch
      .col-lg-4
        a.anexo.fnd-13.mb-0(:href="('https://www.minam.gob.pe/calidadambiental/wp-content/uploads/sites/22/2013/10/GUIA-PARA-EL-MUESTREO-DE-SUELOS-final.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            h5.mb-0 Anexo
            h5.mb-0 Guía para el muestreo de suelos
            p Ministerio del Ambiente, Perú.

      .col-lg-4
        a.anexo.fnd-13.mb-0(:href="('https://www.igac.gov.co/sites/igac.gov.co/files/guiademuestreo.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            h5.mb-0 Anexo
            h5.mb-0 Guía de muestreo
            p MInstituto Geográfico Agustín Codazi, Colombia.
      .col-lg-4
        a.anexo.fnd-13.mb-0(:href="('https://inta.gob.ar/sites/default/files/script-tmp-tcnicas_de_toma_y_remisin_de_muestras_de_suelos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            h5.mb-0 Anexo
            h5.mb-0 Técnicas de toma y remisión de muestras
            p Instituto Nacional de Tecnología Agropecuaria, Argentina. 

    .list2.mb-3(data-aos="fade-down")
      .list2__item
        .list2__item__icon
          img(src='@/assets/curso/temas/tema1/img-5.svg', alt='')
      .list2__txt
        h3.mb-0 Formato de diligenciamiento

    h5.text-center.mb-5 La toma de muestra debe documentarse de la siguiente manera:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img-11.svg', alt='Texto que describa la imagen')     


</template>

<script>
export default {
  name: 'Tema2',
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
