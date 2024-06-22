<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-left")
      .titulo-principal__numero
        span 4
      h1 Registro e interpretación de resultados

      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")

      .col-lg-8
        p Los resultados del análisis en el laboratorio permiten comprender los niveles de nutrientes presentes en el suelo, al igual que otras características las cuales son muy útiles al momento de dar una buena recomendación de manejo para el suelo analizado.
        h5.text-center Equipos medidores de minerales del suelo son:

        .row.justify-content-center.d-flex.align-middle
          .col-lg-3.p-2
            .tt-m.p-3.fnd-16
              p.text-center El espectrofotómetro de absorción atómica.
          .col-lg-3.p-2
            .tt-m.p-3.fnd-17
              p.text-center Medidores de pH.
          .col-lg-3.p-2
            .tt-m.p-3.fnd-18
              p.text-center Fotómetro de llama.
          .col-lg-3.p-2
            .tt-m.p-3.fnd-19
              p.text-center Espectrofotómetro UV visible. 

      .col-lg-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema4/img-4.png', alt='Texto que describa la imagen')


    h5.text-center.mb-5  Para realizar un correcto diagnóstico de las condiciones del suelo se deben tener en cuenta los siguientes parámetros:
    .row.justify-content-center.align-items-center.mb-5.fnd-14(data-aos="fade-right")
      .col-lg-10
        figure.mb-5
          img(src='@/assets/curso/temas/tema4/img-5.svg', alt='Texto que describa la imagen')


    .list2.mb-3(data-aos="fade-down")
      .list2__item
        .list2__item__icon
          img(src='@/assets/curso/temas/tema1/img-5.svg', alt='')
      .list2__txt
        h3.mb-0 Valores referenciales para determinar la condición nutricional del suelo
    p.mb-5 Para definir cuál es la condición actual del suelo se deben usar los valores referenciales, que permiten determinar la cantidad exacta de fertilizante que requiere un cultivo. Estas tablas son la primera instancia en el proceso de validación de los análisis de laboratorio y permiten verificar el o los nutrientes con menor cantidad para el terreno; se deben considerar las unidades para evitar interpretaciones erróneas, de conformidad con las siguientes tablas:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      LineaTiempoD.color-acento-contenido.fnd-20
        .row.justify-content-center.align-items-center(numero="1" titulo="Valores de referencia de las condiciones de pH y Conductividad eléctrica del suelo")

          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4.
              span Valores	referenciales	de	las	condiciones	de	pH	y	Conductividad	eléctrica	del	suelo.
            .tabla-b.color-acento-contenido.mb-5
              table.tbl-2
                caption Metodologías de análisis. Fundación	CETABOL,	2008.
                thead
                  tr
                    th Valores referenciales 
                    th pH 
                    th Valores referenciales 
                    th umho/cm <br>CE                  
                tbody
                  tr
                    td Muy ácido
                    td < 5.5 
                    td No salino 
                    td < 330
                  tr
                    td Acido
                    td 5.5	-	6.5
                    td Débilmente salino
                    td 330	-	570
                  tr
                    td Neutro
                    td 6.6 - 7.3
                    td Moderadamente salino
                    td 571 - 1060
                  tr
                    td Alcalino
                    td 7.4	-	8.4
                    td Fuertemente	salino
                    td 1061 - 2040
                  tr
                    td Muy alcalino
                    td > 8.4
                    td Muy fuertemente salino 
                    td > 2040



        .row.justify-content-center.align-items-center(numero="2" titulo="Valores de referencia de la materia orgánica y de los macronutrientes del suelo")

          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 5.
              span Valores de referencia de la materia orgánica y de los macronutrientes del suelo
            .tabla-b.color-acento-contenido.mb-5
              table.tbl-2
                thead
                  tr
                    th(rowspan='2') Valores referenciales 
                    th(colspan='2') g/kg 
                    th(colspan='3') mg/kg
                  tr 
                    th M.O.
                    th N. total
                    th N. disp. 
                    th P Olsen 
                    th Azufre                  
                tbody
                  tr
                    td Muy bajo
                    td < 12
                    td < 0.6
                    td < 16
                    td < 5
                    td < 4
                  tr
                    td Bajo
                    td 12 - 24
                    td 0.6 - 1.2
                    td 16 - 32
                    td 5 - 10
                    td 4 - 8
                  tr
                    td Moderado
                    td 25 - 42
                    td 1.3 - 2.1
                    td 33 - 56
                    td 11 - 17
                    td 9 - 14
                  tr
                    td Alto
                    td 43	-	60
                    td 2.2	-	3.0
                    td 57	-	80
                    td 18	-	25
                    td 15	-	20
                  tr
                    td Muy alto
                    td > 60
                    td > 3.0
                    td > 80
                    td > 25
                    td > 20
              br

              table.tbl-2
                caption Fuente: Metodologías de análisis. Fundación	CETABOL,	2008.
                thead
                  tr
                    th(rowspan='2') Valores referenciales 
                    th(colspan='4') cmolc/kg
                  tr 
                    th Potasio
                    th Calcio
                    th Magnesio
                    th Sodio
                tbody
                  tr
                    td Muy bajo
                    td < 0,20
                    td < 2,39
                    td < 0,40
                    td < 0,2
                  tr
                    td Bajo
                    td 0,20 - 0,39
                    td 2,39 - 4,79
                    td 0,40 - 0,80
                    td 0,2 - 0,4
                  tr
                    td Moderado
                    td 0,40 - 0,70
                    td 4,80 - 8,38
                    td 0,81 - 1,40
                    td 0,41 - 0,7
                  tr
                    td Alto
                    td 0,71	-	1,0
                    td 8,39	-	11,98
                    td 1,41	-	2,0
                    td 0,71	-	1,0
                  tr
                    td Muy alto
                    td > 1,0
                    td > 11,98
                    td > 2,0
                    td > 1,0


        .row.justify-content-center.align-items-center(numero="3" titulo="Valores de referencia de las condiciones de pH y Conductividad eléctrica del suelo")

          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 6.
              span Valores de referencia de los micronutrientes del suelo.
            .tabla-b.color-acento-contenido.mb-5
              table.tbl-2
                caption Fuente: Metodologías de análisis. Fundación	CETABOL,	2008
                thead
                  tr
                    th(rowspan='2') Valores referenciales 
                    th(colspan='5') mg/kg
                  tr 
                    th Fe
                    th Mn
                    th Zn
                    th Cu
                    th B
                tbody
                  tr
                    td Bajo
                    td < 18
                    td < 6
                    td < 1.2
                    td < 0.6
                    td < 0.4
                  tr
                    td Moderado
                    td 18 - 32
                    td 6 - 11
                    td 1.2 - 2.1
                    td 0.6 - 1.1
                    td 0.4 - 0.7
                  tr
                    td Alto
                    td 33	-	45
                    td 12	-	15
                    td 2.2	-	3.0
                    td 1.2	-	1.5
                    td 0.8	-	1.0
                  tr
                    td Muy alto
                    td > 45
                    td > 15
                    td > 3
                    td > 1.5
                    td > 1

        .row(numero="4" titulo="Requerimiento de los cultivos en relación a la necesidad del índice de cosecha")
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 7.
              span Requerimiento de los cultivos en relación a la necesidad del índice de cosecha
          .row.justify-content-center.mb-5
            .col-12
              .tabla-c.color-acento-botones.mb-5
                table.tbl-2
                  caption Fuentes: World	Fertilizer	Use	manual,	1992.	García	F.	y	A	Berardo.	2006.	IFA,	Fundación	CETABOL,	2010.
                  thead
                    tr
                      th(colspan='2') Para 1 t de producción
                      th(colspan='12') N u t r i e n t e s    
                    tr 
                      th Cultivo 
                      th Necesidad
                      th N <br>(kg/ha)
                      th P <br>(kg/ha)
                      th K <br>(kg/ha)
                      th Ca <br>(kg/ha)
                      th Mg <br>(kg/ha)
                      th S <br>(kg/ha)
                      th Fe <br>(g/ha)
                      th Mn <br>(g/ha)
                      th Zn <br>(g/ha)
                      th Cu <br>(g/ha)
                      th B <br>(g/ha)
                      th Mo <br>(g/ha)
                  tbody
                    tr
                      td.tm-1(rowspan='2') Arroz	 
                      td.tm-1 Requerimiento	 
                      td 22,2	 
                      td 3,1	 
                      td 26,2	 
                      td 2,8	 
                      td 2,4	 
                      td 0,94	 
                      td 0,35	 
                      td 0,37	 
                      td 0,04	 
                      td 0,027	 
                      td 0,016	 
                      td 0,26
                    tr 
                      td Índice cosecha	 
                      td 0,66	 
                      td 0,84	 
                      td 0,1	 
                      td 0,04	 
                      td 0,42	 
                      td 0,64	 
                      td 0,57	 
                      td 0,16	 
                      td 0,5	 
                      td 0,92	 
                      td 0,5	 
                      td -
                    tr 
                      td(rowspan='2') Maíz	 
                      td Requerimiento	 	 
                      td 22	 	 
                      td 3,8	 	 
                      td 21	 	 
                      td 3,5	 	 
                      td 2,7	 	 
                      td 2,5	 	 
                      td 0,125	 	 
                      td 0,189	 	 
                      td 0,053	 	 
                      td 0,013	 	 
                      td 0,020	 	 
                      td 0,001
                    tr
                      td Índice cosecha 	 	 
                      td 0,68 	 	 
                      td 0,76 	 	 
                      td 0,21 	 	 
                      td 0,07 	 	 
                      td 0,53 	 	 
                      td 0,35 	 	 
                      td 0,36 	 	 
                      td 0,17 	 	 
                      td 0,5 	 	 
                      td 0,29 	 	 
                      td 0,25 	 	 
                      td 0,63
                    tr 
                      td(rowspan='2') Sorgo	 	 	 
                      td Requerimiento	 	 	 
                      td 30	 	 	 
                      td 4,4	 	 	 
                      td 20,8	 	 	 
                      td 4	 	 	 
                      td 4,5	 	 	 
                      td 3,75	 	 	 
                      td 0,36	 	 	 
                      td 0,34	 	 	 
                      td 0,162	 	 	 
                      td 0,073	 	 	 
                      td 0,001	 	 	 
                      td 0,0027
                    tr
                      td Índice cosecha 	 	 
                      td 0,66 
                      td 0,82 	 	 
                      td 0,19 	 	 
                      td - 	 	 
                      td 0,29 	 	 
                      td 0,57 	 	 
                      td - 	 	 
                      td - 	 	 
                      td - 	 	 
                      td - 	 	 
                      td - 	 	 
                      td -
                    tr 
                      td(rowspan='2') Trigo	 	 	 
                      td Requerimiento	 	 	 
                      td 30	 	 	 
                      td 5	 	 	 
                      td 19	 	 	 
                      td 3	 	 	 
                      td 3	 	 	 
                      td 4,7	 	 	 
                      td 0,137	 	 	 
                      td 0,070	 	 	 
                      td 0,052	 	 	 
                      td 0,010	 	 	 
                      td 0,025
                      td
                    tr
                      td Índice cosecha 	 	 
                      td 0,69 	 	 
                      td 0,8 	 	 
                      td 0,21 	 	 
                      td 0,14 	 	 
                      td 0,63 	 	 
                      td 0,34 	 	 
                      td - 	 	 
                      td 0,36 	 	 
                      td 0,44 	 	 
                      td 0,75 	 	 
                      td - 	 	 
                      td -
                    tr 
                      td(rowspan='2') Soya	 	 	 
                      td Requerimiento	 	 	 
                      td 86,55	 	 	 
                      td 6,15	 	 	 
                      td 24,91	 	 	 
                      td 10,42	 	 	 
                      td 4,78	 	 	 
                      td 3	 	 	 
                      td 0,300	 	 	 
                      td 0,150	 	 	 
                      td 0,060		 	 
                      td 0,025	 	 	 
                      td 0,025	 	 	 
                      td 0,005
                    tr
                      td Índice cosecha 	 	 
                      td 0,73 	 	 
                      td 0,88 	 	 
                      td 0,49 	 	 
                      td 0,19 	 	 
                      td 0,39 	 	 
                      td 0,72 	 	 
                      td 0,25 	 	 
                      td 0,33 	 	 
                      td 0,7	 	 
                      td 0,53 	 	 
                      td 0,31 	 	 
                      td 0,85
      .list2.mb-3(data-aos="fade-down")
      .list2__item
        .list2__item__icon
          img(src='@/assets/curso/temas/tema1/img-5.svg', alt='')
      .list2__txt
        h3.mb-0 Normas de seguridad y salud aplicadas para la caracterización del suelo
    p.mb-5 El levantamiento de información y la toma de muestras dependiendo del contexto, ubicación, factor climático y demás elementos sociopolíticos, podría llegar a ser considerado como una actividad con algún grado de riesgo de seguridad y salud de las personas involucradas, así como para la población local, por lo cual se deben tener en cuenta los siguientes aspectos:        



    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Consideraciones con las muestras
            p Considerando que las muestras pueden tener propiedades tóxicas, corrosivas, explosivas e inflamables, debe evitarse el contacto a través de la piel o las mucosas.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-8.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Protección recomendada para la toma de muestras
            p Una protección mínima implica el uso de gafas de seguridad, de guantes de látex o de otro tipo (dependiendo de los potenciales contaminantes), de botas aislantes, protectores auditivos, ropa adecuada y uso de explosímetros.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-9.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Acciones de contingencia
            p Tener edefinidas las acciones de contingencia frente a ingestión accidental de medios contaminados (suelos, aguas, alimentos, etc.).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-10.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Prevención para muestras en áreas cerradas
            p Durante el muestreo emplear mascarillas y respiradores de oxígeno para evitar la inhalación de gases o vapores presenten o que se desprendan cuando el muestreo se realiza en pozos o áreas cerradas y en cúmulos de residuos químicos, para ello deberán usarse detectores automáticos de gases y tubos colorimétricos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-11.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Casos comunes a los que se expone al tomar muestras 
            p Inicialmente son los peligros físicos durante las actividades de muestreo y/o uso de la maquinaria y equipos tales como detectores de canalizaciones y tuberías enterradas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-12.png', alt='Texto que describa la imagen')
        .row.mx-5
          .col-md-6.mb-4.mb-md-0
            h5 Recomendaciones de los casos para uso de ropa protectora especial 
            p Al estar expuesto a riesgos eléctricos, fuego o explosiones, es necesario el uso de ropa protectora especial.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema4/img-13.png', alt='Texto que describa la imagen')











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
