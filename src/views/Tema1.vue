<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido(data-aos="zoom-in")
      .titulo-principal__numero 
        span 1
      h1 Edafología

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.png')})` }"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ciencia del suelo comenzó dentro de la Geología, con una disciplina básica denominada Pedología, la cual estudia la modificación de la corteza terrestre por medio de procesos de meteorización, explica al suelo como un producto natural de 5 factores formadores, los cuales son:

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Factores formadores del suelo
    .row.justify-content-center.align-items-center.mb-5.fnd-1
      .col-lg-10
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img-2.svg', alt='Muestra los factores formadores del suelo teniendo en cuenta: El tiempo, el relieve, el material orgánico, el clima y la biota.')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-10
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img-3.svg')


      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4.fnd-2 
          p En el contexto de la agricultura, la ciencia del suelo es denominada como edafología, término que viene de una raíz griega <em>“edafos”</em> qué significa suelo donde crecen las plantas o las raíces.
          p La edafología es una ciencia aplicada al estudio del suelo en un agroecosistema y bajo esta perspectiva el suelo también es un producto de 5 factores formadores naturales como se vio en la anterior figura, pero modificado por el factor antrópico o humano que en algunas regiones que de miles de años de acción sobre el suelo original.
        p No existe una definición de suelos universalmente aceptada, pero podemos decir que el suelo es el medio natural que sostiene la vida vegetal, brindando soporte físico, almacenando agua, suministrando oxígeno y nutrientes minerales a las plantas.
        p La formación de suelos es el proceso que parte desde una roca hasta el suelo con un perfil determinado, pasando por una fase denominada material originario; las rocas pueden ser de 3 tipos o grupos según su origen, la cuales son: ígneas, sedimentarias y metamórficas.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-10
        .tarjeta.color-primario.p-3.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ciclo de las rocas
                  p Es un concepto de geología que describe las transiciones de material en el tiempo geológico que permiten que toda roca pueda transformarse en uno de estos tres tipos: rocas sedimentarias, rocas metamórficas y rocas ígneas. Haz clic en el siguiente enlace para profundizar en esta temática: 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=8gIfSdR9xkQ&ab_channel=IngeniaUdeA')" target="_blank")
                    span Consultar video
                    i.fas.fa-video

    .list2.mb-3(data-aos="fade-down")
      .list2__item
        .list2__item__icon
          img(src='@/assets/curso/temas/tema1/img-5.svg', alt='')
      .list2__txt
        h3.mb-0 Proceso de meteorización

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        p Por acción de la temperatura y de la humedad pueden transformarse en material originario mucho más subdividido y favorable para el ingreso de la biota, particularmente las raíces de algunas gramíneas.
        .cajon.color-acento-contenido.p-4.mb-4.fnd-2 
          p El material originario puede ser sedentario o transportado, se denomina sedentario cuando se forma y queda en el mismo lugar en que se formó denominado así residual, si se mueve por efecto de la gravedad a lo largo de una pendiente en una corta distancia se denomina coluvial y el material originario transportado es el material originario que se mueve a distancias considerables por acción del agua, el viento o por los glaciares, que si bien, no son de transporte del material originario en largas distancias, constituyen el material originario de suelos en muchas regiones frías del mundo.
      .col-lg-5.col-md-10
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img-6.svg', alt='Texto que describa la imagen')

    p.mb-5 La transformación progresiva a lo largo del tiempo de un material originario derivado de una roca o mezcla de rocas ese material originario aparece como no diferenciado; es decir, tiene las mismas propiedades desde la superficie hasta la profundidad, con el tiempo que pueden ser desde pocas décadas en regiones tropicales hasta miles o millones de años en regiones más frías o secas, con la participación fundamental de la vegetación el material originario se modifica y por distintos procesos se van formando u originando estratos u horizontes que constituyen el perfil en la fase final de formación del suelo así:


    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Fases de formación del suelo
    .row.justify-content-center.align-items-center.mb-3.fnd-4
      .col-lg-8
        figure.py-5
          img(src='@/assets/curso/temas/tema1/img-9.svg', alt='Muestra las fases de formación del suelo: Roca que son ígneas o magmáticas, sedimentarias y metamórficas, originando una metería en la meteorización, que es un sedentario residual y/o coluvial, después a una edatazación del suelo, hasta llegar a un perfil.')

    Separador

    #t-1-1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1	Propiedades y composición del suelo

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/img-10.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p El suelo está compuesto por minerales, materia orgánica, diminutos organismos vegetales y animales, aire y agua. Es una capa delgada que se ha formado muy lentamente, a lo largo de los siglos, con la desintegración de las rocas superficiales por la acción del agua, los cambios de temperatura y el viento, es un recurso natural no renovable compuesto por sustancias sólidas (materia orgánica, organismos y minerales), agua y aire. La proporción en la que se encuentran estos componentes le confiere al suelo propiedades físicas, químicas y biológicas propias.

    p.text-center.text-bold A continuación, exponemos la composición:


    .tarjeta.tarjeta--azul.p-4.mb-5.fnd-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.mx-lg-5.mx-sm-0
          .col-md-6.mb-4.mb-md-0
            h5 Composición del suelo
            p El suelo, es una capa delgada formada por el paso de los años y siglos a partir de la desintegración de rocas superficiales por la acción del agua, los cambios de temperatura y el viento.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-11.png', alt='Texto que describa la imagen')
        .row.mx-lg-5.mx-sm-0
          .col-md-6.mb-4.mb-md-0
            h5 Fase sólida del suelo
            p La fase sólida está formada por los componentes inorgánicos (minerales) y orgánicos (materia orgánica) del suelo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-12.png', alt='Texto que describa la imagen')
        .row.mx-lg-5.mx-sm-0
          .col-md-6.mb-4.mb-md-0
            h5 Fracción inorgánica
            p Son los primarios los cuales están dentro de la roca madre y que no se encuentran alteradas químicamente y los secundarios que son producidos por el suelo por el proceso de meteorización de un material primario.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-13.png', alt='Texto que describa la imagen')
        .row.mx-lg-5.mx-sm-0
          .col-md-6.mb-4.mb-md-0
            h5 Fracción orgánica
            p Es el recurso primordial para la fertilidad del suelo y que es derivado de las variadas formas y grados de transformación, en que la materia orgánica se puede encontrar en el suelo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-14.png', alt='Texto que describa la imagen')                                          

        .row.mx-lg-5.mx-sm-0
          .col-md-6.mb-4.mb-md-0
            h5 Fase líquida
            p Está constituida por el agua junto con todos los compuestos que se encuentran disueltos en ella, es uno de los factores esenciales para la génesis de los suelos y es una agente de hidrólisis y un medio de dispersión.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-15.png', alt='Texto que describa la imagen')                     

        .row.mx-lg-5.mx-sm-0
          .col-md-6.mb-4.mb-md-0
            h5 Fase gaseosa
            p Se refiere a la atmósfera del suelo que se encuentra en el espacio poroso de este, contribuye en el proceso de respiración de las plantas, el intercambio gaseoso entre el aire del suelo y la atmósfera.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-16.png', alt='Texto que describa la imagen')  

        .row.mx-lg-5.mx-sm-0
          .col-md-6.mb-4.mb-md-0
            h5 Propiedades del suelo físicas o mecánicas
            p Textura, estructura, color, permeabilidad, porosidad, drenaje, consistencia, profundidad efectiva.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-17.png', alt='Texto que describa la imagen')
        .row.mx-lg-5.mx-sm-0
          .col-md-6.mb-4.mb-md-0
            h5 Propiedades del suelo Químicas y Biológicas
            p <b>Las Químicas</b> tienen que ver con la calidad y disponibilidad de agua y nutrientes para las plantas. Mientras que las <b>Biológicas</b> con la cuantificación y la calificación para optimizar el potencial del suelo y de las plantas.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-18.png', alt='Texto que describa la imagen')              

    Separador

    #t-1-2.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      h2 1.2	Caracterización y clasificación


    .row.justify-content-center.align-items-center
      .col-lg-7
        .cajon.color-acento-contenido.p-4.mb-4.fnd-2 
          p La clasificación de los suelos está directamente ligada con las propiedades físicas, químicas y biológicas y con otros criterios que pueden variar por países. Sin embargo, existe una clasificación de suelos a nivel mundial llamada<em> Soil Taxonomy de la United States Department of Agriculture (USDA),</em> que clasifica los suelos con base a la concepción de “Horizonte diagnóstico” e indica 12 órdenes y cuentan diferentes niveles jerárquicos que parten desde los subórdenes hasta las series, a continuación, los relacionamos: 
      .col-lg-5.col-md-10
        figure.mb-5
          img(src='@/assets/curso/temas/tema1/img-20.png', alt='Texto que describa la imagen')

    .titulo-sexto.color-acento-contenido
      h5 Figura 3.
      span Órdenes de suelos según USDA

    .row.justify-content-center.align-items-center.mb-5.d-flex.align-items-stretch(data-aos="fade-left")
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Alfisol
          .col-lg-12.tt3.pb-0
            p Están en climas húmedos y se caracterizan por su fertilidad, por lo que son suelos con un gran desarrollo de la agricultura y la silvicultura. Tienen horizontes formados por arcilla.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-21.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Andisol
          .col-lg-12.tt3.pb-0
            p Se formaron luego de erupciones volcánicas y la característica que la diferencia de otros suelos es que están compuestos por minerales como imogolita y ferrihidrita.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-22.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Aridisol
          .col-lg-12.tt3.pb-0
            p Están en climas áridos o semiáridos en ecosistemas como desiertos. Se caracterizan por la baja presencia de materia orgánica y vegetación debido a las pocas precipitaciones que reciben.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-23.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Entisol
          .col-lg-12.tt3.pb-0
            p Están en zonas secas y frías y su principal característica es que no tienen horizontes desarrollados.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-24.svg", alt="alt") 
         
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Espodosol
          .col-lg-12.tt3.pb-0
            p Están en zonas de clima frío y húmedo y se caracterizan por su baja fertilidad, por tener un color rojizo y ser suelos ácidos.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-25.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Gelisol
          .col-lg-12.tt3.pb-0
            p Están en climas fríos, por lo que son suelos helados y que contienen permafrost. Se los suele encontrar en zonas de alta montaña o en el Ártico.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-26.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Histosol
          .col-lg-12.tt3.pb-0
            p Están en zonas frías y pantanosas y están constituidos principalmente por materia orgánica.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-27.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Inceptisol
          .col-lg-12.tt3.pb-0
            p Están presentes en muchas zonas del planeta, ya que son un tipo de suelo muy común. Se caracterizan por ser suelos jóvenes y con poco desarrollo de horizontes.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-28.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Molisol
          .col-lg-12.tt3.pb-0
            p Están en zonas semihúmedas de pastizales y se caracterizan por su color oscuro y su fertilidad, lo que los convierte en suelos adecuados para las prácticas agrícolas.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-29.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Oxisol
          .col-lg-12.tt3.pb-0
            p Están en zonas tropicales y se caracterizan por su color naranja o rojo y por la presencia de minerales oxidados (de allí su nombre).
          
          img.img-85(src="@/assets/curso/temas/tema1/img-30.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Ultisol
          .col-lg-12.tt3.pb-0
            p Están en zonas húmedas y cálidas y se caracterizan por su color rojizo, por tener arcilla en sus horizontes y por un nivel bajo de algunos nutrientes.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-31.svg", alt="alt") 
      .col-auto.col-lg-3
        .div.mb-5.tt2
          .col-lg-12.tt1.p-2
            h4.m-0.text-white.text-center Vertisol
          .col-lg-12.tt3.pb-0
            p Están en zonas tropicales o mediterráneas y se caracterizan por una gran presencia de arcilla en su composición y por grietas que dificultan las prácticas agrícolas.
          
          img.img-85(src="@/assets/curso/temas/tema1/img-32.svg", alt="alt")           


    p Para determinar esta clasificación se tomó como fundamento el estándar internacional Base Referencial Mundial (WRB) que indica la clasificación y nomenclatura de suelos que incluye 32 grupos de suelos de referencia.
    p Por otro lado, los suelos también pueden dividirse según la evolución, composición, estructura, tipo de uso en la agricultura, la textura, características físicas, entre otros.
    p.mb-5 Conforme a la textura que está relacionada con el tamaño y tipo de mineral presente en el suelo, los suelos pueden clasificarse así:

    .titulo-sexto.color-acento-contenido
      h5 Figura 4.
      span Clasificación de los suelos según la textura

    .row.justify-content-center.mb-5.d-flex.align-items-stretch(data-aos="zoom-in")
      .col-lg-6.mb-5
        .crd_02.fn-1
          .crd_02__icon
            img(src="@/assets/curso/temas/tema1/img-33.svg", alt="alt")          
          .crd_02__txt
            h5 Arenoso  
            p En estos predomina la arena. Por el tamaño grande de sus partículas, suelos no retienen el agua que baja a zonas más profundas. Generalmente, son de color claro y como no contienen mucha materia orgánica, no suelen ser productivos para la agricultura.
      .col-lg-6.mb-5
        .crd_03.fn-2
          .crd_03__icon
            img(src="@/assets/curso/temas/tema1/img-34.svg", alt="alt")          
          .crd_03__txt
            h5 Limosos  
            p Las partículas de tamaño medio, son las que predominan. Por ello, son suelos que no filtran el agua rápidamente, contiene mucha materia orgánica, pero se compactan al secarse.
      .col-lg-6.mb-5
        .crd_02.fn-3
          .crd_02__icon.dan
            img(src="@/assets/curso/temas/tema1/img-35.svg", alt="alt")          
          .crd_02__txt
            h5 Arcillosos  
            p La arcilla, partícula de menor tamaño, es la predominante. Son suelos casi impermeables pero muy compactos en ausencia de agua. Contienen mucha materia orgánica, pero cuando están secos no permiten el crecimiento de las raíces.
      .col-lg-6.mb-5
        .crd_03.fn-4
          .crd_03__icon.dan
            img(src="@/assets/curso/temas/tema1/img-36.svg", alt="alt")          
          .crd_03__txt
            h5 Franco  
            p Es aquel suelo que tiene aproximadamente la misma proporción de las tres clases de partículas minerales. Por ello, tienen propiedades que lo hacen ideal para la agricultura.

    p De acuerdo con la evolución y composición de la roca meteorizada formadora del material originario, el suelo puede clasificarse así:
    .titulo-sexto.color-acento-contenido
      h5 Figura 5.
      span Clasificación de los suelos según evolución y composición
                         
    .tarjeta--container.row.mb-5(data-aos="fade-left")

      .col-md.tarjeta.fnd-6.p-3
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img-37.svg', alt='Texto que describa la imagen')
          
        h5.text-center Suelos no evolucionados
        p.text-center De formación reciente, próximos a la roca madre, con poca materia orgánica.

      .col-md.tarjeta.fnd-7.p-3
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img-38.svg', alt='Texto que describa la imagen')
          
        h5.text-center Suelos poco evolucionados
        p.text-center Con gran cantidad de materia orgánica y color variable dependiendo de la composición.

      .col-md.tarjeta.fnd-6.p-3
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img-39.svg', alt='Texto que describa la imagen')
          
        h5.text-center Suelos evolucionados
        p.text-center Con mucha materia orgánica en diferentes estados de descomposición, roca madre bien desintegrada. Aptos para la agricultura.

    p Según la estructura, el suelo puede clasificarse en:
    .titulo-sexto.color-acento-contenido
      h5 Figura 6.
      span Clasificación de los suelos según estructura

    .row.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-2.fnd-8
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/temas/tema1/img-40.svg', alt='aaaaaa')
          .col-lg-8
            h5 Suelos arenosos
            p Incapaces de retener el agua, son escasos en materia orgánica y por lo tanto poco fértiles.
        .row.justify-content-center.align-items-center.mb-2.fnd-9
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/temas/tema1/img-41.svg', alt='aaaaaa')
          .col-lg-8
            h5 Suelos calizos
            p Abundan en minerales calcáreos y por lo tanto en sales, lo cual les confiere dureza, aridez y color blanquecino.
        .row.justify-content-center.align-items-center.mb-2.fnd-10
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/temas/tema1/img-42.svg', alt='aaaaaa')
          .col-lg-8
            h5 Suelos humíferos
            p De tierra negra, en ellos abunda la materia orgánica en descomposición y retienen muy bien el agua, siendo muy fértiles.
        .row.justify-content-center.align-items-center.mb-2.fnd-11
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/temas/tema1/img-43.svg', alt='aaaaaa')
          .col-lg-8
            h5 Suelos arcillosos
            p Compuestos por finos granos amarillentos que retienen muy bien el agua, por lo que suelen inundarse con facilidad.
        .row.justify-content-center.align-items-center.mb-2.fnd-8
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/temas/tema1/img-44.svg', alt='aaaaaa')
          .col-lg-8
            h5 Suelos pedregosos
            p Compuestos por rocas de distintos tamaños, son muy porosos y no retienen en nada el agua.
        .row.justify-content-center.align-items-center.mb-5.fnd-9
          .col-lg-4.col-md-10
            figure
              img(src='@/assets/curso/temas/tema1/img-45.svg', alt='aaaaaa')
          .col-lg-8
            h5 Suelos mixtos
            p Suelos mezclados, por lo general entre arenosos y arcillosos.
    
    p.text-center.mb-5 Y de acuerdo con las características físicas, el suelo puede clasificarse así:
    .titulo-sexto.color-acento-contenido
      h5 Figura 7.
      span Clasificación de los suelos según las características físicas
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-46.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-white  Litosoles
            p.mb-0.text-white  Capas delgadas de suelo de hasta 10 cm de profundidad, con vegetación muy baja y también llamado “leptosoles”.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-47.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-white  Cambisoles
            p.mb-0.text-white  Suelos jóvenes con acumulación inicial de arcillas.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-48.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-white  Luvisoles
            p.mb-0.text-white  Suelos arcillosos con una saturación de bases del 50% o superior.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-49.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-white  Acrisoles
            p.mb-0.text-white  Otro tipo de suelo arcilloso, con saturación de bases inferior al 50%.   
    .row.justify-content-center.mb-5(data-aos="zoom-in")                                 
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-50.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-white  Gleysoles
            p.mb-0.text-white  Suelos de presencia de agua constante o casi constante.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-51.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-white  Fluvisoles
            p.mb-0.text-white  Suelos jóvenes de depósitos fluviales, por lo general ricos en calcios.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-52.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-white  Rendzina
            p.mb-0.text-white  Suelos ricos en materia orgánica sobre piedra caliza.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img-53.png", alt="alt")
          .crd_hover_txt--body
            h5.mb-3.text-white.tc-1 Vertisoles
            p.mb-0.text-white  Suelos arcillosos y negros, ubicados cerca de escurrimientos y pendientes rocosas.    

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .tarjeta.color-primario.p-3.fnd-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img-54.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  
                  p Estimado aprendiz, se invita a que observe el video ubicado en los materiales complementarios denominado: <em>Grow Passion.</em> (2020). Conoce los diferentes tipos de suelo y sus principales características, a través del cual podrás analizar los diferentes tipos de suelo y sus características como son su composición, clasificación y textura. Lo que nos da las herramientas para su clasificación.
          

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
