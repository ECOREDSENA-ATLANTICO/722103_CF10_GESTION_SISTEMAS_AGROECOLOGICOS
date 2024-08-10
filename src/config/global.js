export default {
  global: {
    componenteFormativo: 'Caracterización del suelo según parámetros técnicos',
    descripcionCurso:
      'En este componente se podrá conocer la importancia de realizar un estudio de suelos que permita entender los tipos y horizontes del suelo presentes en el área donde se planea ejecutar el proceso productivo y diseñar el plan de manejo agroecológico idóneo para la plantación y el sistema pecuario, ahorrando esfuerzo, tiempo, dinero y lograr óptimos índices de producción y eficiencia.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Edafología',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Propiedades y composición del suelo',
            hash: 't-1-1',
          },
          {
            numero: '1.2',
            titulo: 'Caracterización y clasificación',
            hash: 't-1-2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Identificación del perfil del suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Horizontes',
            hash: 't-2-1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de muestreo',
            hash: 't-2-2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Identificación de la biodiversidad del suelo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fertilidad del suelo',
            hash: 't-3-1',
          },
          {
            numero: '3.2',
            titulo: 'Problemas del suelo',
            hash: 't-3-2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Registro e interpretación de resultados',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CF10_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Edafología',
      referencia:
        'Geotecnia MX. (2019, 2 de octubre).<i> Fases o componentes del suelo.</i>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=68bfpvkb144&ab_channel=GeotecniaMX',
    },
    {
      tema: 'Edafología',
      referencia:
        'Grow Passion. (2020, 10 de septiembre).<i>  Conoce los diferentes tipos de suelo y sus principales características.</i>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=xKatFkhDKLI&ab_channel=GrowPassion',
    },
    {
      tema: 'Identificación del perfil del suelo',
      referencia:
        'Gilson Company Inc. (2019, 14 de junio).<i>  How to Identify the Color of Soil Using the Munsell Soil Color Book.</i>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=JLWT7Gl-9YE&ab_channel=GilsonCompanyInc',
    },
    {
      tema: 'Identificación del perfil del suelo',
      referencia:
        'AGROSAVIA TV. (2019, 28 de enero).<i>  Muestreo físico para el análisis de suelo.</i>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=KC0LIfTBZ5A&ab_channel=AGROSAVIATV',
    },
    {
      tema: 'Identificación del perfil del suelo',
      referencia:
        'AGROSAVIA. (2019, 28 de enero). <i> Muestreo químico para análisis de suelos.</i>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=6d2mR8MKbzc&list=RDCMUC9L1xvAmqcureCbG0HGQ77A&index=2&ab_channel=AGROSAVIATV',
    },
    {
      tema: 'Identificación del perfil del suelo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021, 26 de mayo).<i>  Áreas a evaluar.</i>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=bGIAk8dI4z0&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Identificación de la biodiversidad del suelo',
      referencia:
        'Ciencia Agronómica. (2020, 17 de enero). <i> Suelos y sus problemas actuales.</i> ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=QZN2bPppbBY&ab_channel=CienciaAgronomica',
    },
  ],
  glosario: [
    {
      termino: 'Capa freática',
      significado:
        'el límite superior de las aguas subterráneas en las que la presión del agua es igual a 1 atm, es decir profundidad del nivel de agua en un sondeo cuando el agua subterránea puede entrar libremente en él. Se mide en centímetros por debajo de la superficie del suelo.',
    },
    {
      termino: 'Discontinuidad litológica',
      significado:
        'es un fenómeno que puede ocurrir en algunos suelos en donde los materiales originarios se han podido acumular a lo largo del tiempo en distintas épocas geológicas. Asimismo, es definida como un cambio del material originario dentro de la secuencia de horizontes en un perfil. Se indica con un número arábigo a la izquierda del símbolo de cada horizonte.',
    },
    {
      termino: 'Plan de muestreo',
      significado:
        'documento que contiene la información y programación relacionada con cada una de las etapas que conforman el muestreo y señala los criterios para la toma de muestras.',
    },
    {
      termino: 'Suelo',
      significado:
        'material no consolidado compuesto por partículas inorgánicas, materia orgánica, agua, aire y organismos, que comprende desde la capa superior de la superficie terrestre hasta diferentes niveles de profundidad.',
    },
    {
      termino: 'Textura de suelo',
      significado:
        'es la propiedad física derivada de la composición granulométrica, constituida por arena, limo y arcilla, cuyos diámetros están contempladas en la escala de la Sociedad Internacional de la Ciencia del Suelo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cetabol. (s.f.).<i>  Muestreo de suelos e interpretación de resultados de laboratorio. </i>',
      link:
        'https://www.cetabol.bo/sitio/images/recursos/menu/suelos/publicaciones/1_muestreo_de_suelos_e_interpretacion_de_resultados_de_laboratorio.pdf',
    },
    {
      referencia:
        'Geotecnia MX. (2019). <i>Fases o componentes del suelo.</i> [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=68bfpvkb144&ab_channel=GeotecniaMX',
    },
    {
      referencia:
        'Gilson Company Inc. (2019). <i>How to Identify the Color of Soil Using the Munsell Soil Color Book.</i> [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=JLWT7Gl-9YE&ab_channel=GilsonCompanyInc',
    },
    {
      referencia:
        'Grow Passion. (2020). <i>Conoce los diferentes tipos de suelo y sus principales características.</i> [Video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=xKatFkhDKLI&ab_channel=GrowPassion',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi - IGAC. (s.f.).<i> Guía de Muestreo.</i> ',
      link:
        'https://antiguo.igac.gov.co/sites/igac.gov.co/files/guiademuestreo.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Tecnología Agropecuaria - INTA. (s.f.).<i> Manejo de Suelos Técnica de toma y remisión de muestras de suelo. </i>',
      link:
        'https://inta.gob.ar/sites/default/files/script-tmp-tcnicas_de_toma_y_remisin_de_muestras_de_suelos.pdf',
    },
    {
      referencia:
        'Jordán López, A. (2006). <i>Manual de Edafología.</i> Sevilla, España: Universidad de Sevilla.',
    },
    {
      referencia:
        'Juárez Sanz, M., Sánchez Sánchez, A. & Sánchez Andreu, J. (2006).<i> Química del suelo y medio ambiente.</i> San Vicente del Raspeig: Digitalia.',
    },
    {
      referencia:
        'Ministerio del Ambiente, Perú Dirección General de Calidad Ambiental. (2014). <i>Guía para el muestreo de suelos.</i> ',
      link:
        'https://www.minam.gob.pe/calidadambiental/wp-content/uploads/sites/22/2013/10/GUIA-PARA-EL-MUESTREO-DE-SUELOS-final.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación - FAO. (1996).<i>Ecología y Enseñanza Rural Nociones ambientales básicas para profesores rurales y extensionistas. Tema 2: El suelo.</i>',
      link:
        'https://www.fao.org/3/w1309s/w1309s04.htm#:~:text=El%20suelo%20est%C3%A1%20compuesto%20por,de%20temperatura%20y%20el%20viento',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel De Jesús Paredes Maestre',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Desarrollo Curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Diana Julieth Núñez Ortegón',
          cargo: 'Experta Temática',
          centro: 'Centro de Comercio y Servicio - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nelson Vera',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Alexander Acosta',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Martinez',
          cargo: 'Producción Audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho',
          cargo: 'Desarrollo <em>Full Stack</em>',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Eulises Orduz',
          cargo: 'Diseño de Contenidos Digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Fabian Cuartas',
          cargo: 'Validación de Diseño y Contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Gilberto Herrera',
          cargo: 'Validación de Diseño y Contenido',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
