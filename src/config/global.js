export default {
  global: {
    componenteFormativo: 'Normatividad',
    descripcionCurso:
      'El presente contenido pedagógico está dirigido a la contextualización, identificación y apropiación de la estructura y funcionamiento de los sistemas de calidad en el ámbito nacional el cual tiene un sistema propio en el sector salud, siendo parte de un renglón económico cuyo alcance corresponde al Sistema General de Seguridad Social en Salud (SGSSS).',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Subsistema Nacional de Calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Relación con otras normas de calidad',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema Obligatorio de garantía de la calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'fas fa-play-circle',
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Componentes',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Relación con el subsistema nacional de calidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistema único de acreditación en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'fas fa-play-circle',
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Ruta',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Alcance',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Estándares',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Entes acreditadores',
            hash: 't_3_5',
          },
        ],
      },
    ],
    subMenu: [
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
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Néstor Omar Correa Preciado',
          'Cesar Roberto Ocaña Poveda',
          'Jessica Lozano',
        ],
        cargo: ['Expertos temáticos', 'Asesores oficina calidad'],
        centro: 'Ministerio de Salud y Protección Social.',
      },
      {
        nombre: ['María Fernanda Moreno Brand', 'Viviana Ruíz Vergara'],
        cargo: 'Profesionales Especializados SENA',
        centro: 'Centro de Formación de Talento Humano en Salud',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: 'Carlos Julián Ramírez Benítez',
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Zuleidy María Ruiz Torres',
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Maria Carolina Tamayo',
          'Víctor Cardenas',
          'Carmen Martinez',
          'Arnulfo Beltrán Mojica',
          'Oleg Litvin',
          'Andrés Herrera',
        ],
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ley 489 de 1998. (1998, 29 diciembre). Congreso de la República. Diario Oficial No. 43.464',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0489_1998.html',
    },
    {
      referencia:
        'Ley 872 de 2003. (2003, 30 de diciembre). Congreso de la República. Diario Oficial No. 45.418',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0872_2003.html',
    },
    {
      referencia:
        'Ley 1753 de 2015. (2015, 9 junio). Congreso de la República. Diario Oficial No.  49.538',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1753_2015.html',
    },
    {
      referencia:
        'Decreto 1074 de 2015. (2015, 26 de mayo) Decreto Único Reglamentario del Sector Comercio, Industria y Turismo.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76608',
    },
    {
      referencia:
        'Decreto 1011 de 2006. (2006, 3 abril). Ministerio de la protección social',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%201011%20DE%202006.pdf',
    },
    {
      referencia:
        'Resolución 1441 de 2013. (2013, 6 mayo). Ministerio de salud y Protección social',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1441-de-2013.pdf',
    },
    {
      referencia:
        'Resolución 0002003 de 2014. (2014, 28 mayo). Ministerio de salud y Protección social',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%202003%20de%202014.pdf',
    },
    {
      referencia:
        'Decreto 2082 de 2014. (2014, 29 mayo). Ministerio de salud y Protección social',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resolucion-2082-de-2014.pdf',
    },
    {
      referencia:
        'Resolución 0256 de 2016. (2016, 5 febrero). Ministerio de salud y Protección social',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%200256%20de%202016.pdf',
    },
    {
      referencia:
        'Decreto 780 de 2016. (2016, 06 de mayo). Decreto Único Reglamentario del Sector Salud y Protección Social.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      referencia:
        'Resolución 5095 de 2018. (2018, 19 noviembre). Ministerio de salud y Protección social',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-5095-de-2018.pdf',
    },
    {
      referencia:
        'Decreto 4110 de 2004.  (2004, 9 diciembre). Por el cual se reglamenta la Ley 872 de 2003 y se adopta la Norma Técnica de Calidad en la Gestión Pública.',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Decretos/1879263',
    },
  ],
  glosario: [
    {
      termino: 'Atención de salud',
      significado:
        'Se define como el conjunto de servicios que se prestan al usuario en el marco de los procesos propios del aseguramiento, así como de las actividades, procedimientos e intervenciones asistenciales en las fases de promoción y prevención, diagnóstico, tratamiento y rehabilitación que se prestan a toda la población.',
    },
    {
      termino:
        'Auditoría para el mejoramiento de la calidad de la atención de salud',
      significado:
        'Es el mecanismo sistemático y continuo de evaluación y mejoramiento de la calidad observada respecto de la calidad esperada de la atención de salud que reciben los usuarios.',
    },
    {
      termino: 'Calidad de la atención de salud',
      significado:
        'Se entiende como la provisión de servicios de salud a los usuarios individuales y colectivos de manera accesible y equitativa, a través de un nivel profesional óptimo, teniendo en cuenta el balance entre beneficios, riesgos y costos, con el propósito de lograr la adhesión y satisfacción de dichos usuarios. ',
    },
    {
      termino: 'Condiciones de capacidad tecnológica y científica',
      significado:
        'Son los requisitos básicos de estructura y de procesos que deben cumplir los Prestadores de Servicios de Salud por cada uno de los servicios que prestan y que se consideran suficientes y necesarios para reducir los principales riesgos que amenazan la vida o la salud de los usuarios en el marco de la prestación del servicio de salud',
    },
    {
      termino: 'Empresas administradoras de planes de beneficios EAPB',
      significado:
        'Se consideran como tales, las Entidades Promotoras de Salud del Régimen Contributivo y del Régimen Subsidiado (Administradoras del Régimen Subsidiado), Entidades Adaptadas y Empresas de Medicina Prepagada.',
    },
    {
      termino: 'Prestadores de servicios de salud',
      significado:
        'Se consideran como tales, las Instituciones Prestadoras de Servicios de Salud, los Profesionales Independientes de Salud y los Servicios de Transporte Especial de Pacientes.',
    },
    {
      termino: 'Profesional independiente',
      significado:
        'Es toda persona natural egresada de un programa de educación superior de ciencias de la salud de conformidad con la Ley 30 de 1992 o las normas que la modifiquen, adicionen o sustituyan, con facultades para actuar de manera autónoma en la prestación del servicio de salud para lo cual podrá contar con personal de apoyo de los niveles de formación técnico y/o auxiliar',
    },
    {
      termino:
        'Sistema obligatorio de garantía de calidad de atención en salud del sistema general de seguridad social en salud SOGCS',
      significado:
        'Es el conjunto de instituciones, normas, requisitos, mecanismos y procesos deliberados y sistemáticos que desarrolla el sector salud para generar, mantener y mejorar la calidad de los servicios de salud en el país.',
    },
    {
      termino: 'Unidad sectorial de normalización en salud',
      significado:
        'Es una instancia técnica para la investigación, definición, análisis y concertación de normas técnicas y estándares de calidad de la atención de salud, autorizada por el Ministerio de Comercio, Industria y Turismo.',
    },
  ],
  complementario: [
    {
      texto:
        'Protocolo de Londres. Reporte investigación y análisis de eventos adversos e incidentes',
      tipo: 'Video',
      link:
        'https://www.minsalud.gov.co/videoAudio/Documents/Videos%20Web/Salud/prestacion-servicios/seguridad-paciente/Investigacion-incidentes-bajo-protocolo-londres.mp4',
    },
    {
      texto:
        'Min salud, Manual de acreditación en salud ambulatoria y hospitalario de Colombia versión 3.1',
      tipo: 'Manual',
      descarga: '/downloads/Manual_acreditacion.pdf',
    },
  ],
}
