export default {
  global: {
    componenteFormativo: 'Acreditación en salud',
    descripcionCurso:
      'El presente contenido pedagógico está dirigido a la contextualización, identificación y apropiación de la estructura y funcionamiento de los sistemas de calidad en el ámbito nacional, el cual tiene un sistema propio en el sector salud, siendo parte de un renglón económico cuyo alcance corresponde al Sistema General De Seguridad Social en Salud (SGSSS)',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
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
            hash: '',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Relación con otras normas de calidad',
            hash: 't_1_1',
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
            icono: 'far fa-file-alt',
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
            icono: 'far fa-file-alt',
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
            titulo: 'Estandares',
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
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Gloria Matilde Lee Mejía',
        cargo: 'Responsable del equipo',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Astrid Lili Puerta',
        cargo: 'Experta temática',
        centro: 'Centro Agropecuario de Buga',
        regional: 'Regional valle',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Michael Andrés Cortés Caro',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Mauricio Jiménez Fajardo',
        cargo: 'Experto temático',
        centro: 'Ministerio de Ambiente y Desarrollo Sostenible',
      },
      {
        nombre: 'Manuel Alejandro Garzón Cárdenas',
        cargo: 'Experto temático',
        centro: 'Deutsche Gesellschaft für',
        regional: 'Internationale Zusammenarbeit (GIZ)',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Rodríguez',
        cargo: 'Evaluador instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
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
        cargo: 'Integración de recursos y pruebas',
      },
      {
        nombre: ['Adriana Rincón Avendaño', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Zlackman, C. (2012). 100 años de moda. Sistema de Bibliotecas SENA: ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000060086&vid=SENA&search_scope=sena_completo&tab=sena_completo&lang=es_ES&context=L',
    },
    {
      referencia:
        'Castellanos, O., Fumeque A., y Ramirez D. (2011). Análisis de tendencias: de la información hacia la innovación. Universidad Nacional de Colombia. Sistema de Bibliotecas SENA: ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
    },
    {
      referencia:
        'Harpersbazaar. (2019). La ropa que eliges afecta a tu estado de ánimo y cerebro, según expertos. En arpersbazaar.mx.',
    },
    {
      referencia:
        'Lafuente M., Navarro J., y Navarro J. (2005). Ilustración de moda. Sistema de Bibliotecas SENA',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000025549',
    },
    {
      referencia:
        'Laver, J.,  Albizua, H., y Fortea, B. (1990). Breve historia del traje y la moda. Sistema de Bibliotecas SENA. ',
    },
    {
      referencia:
        'Navarro, J.,  y Lafuente, M. (2010). Ilustración de moda: dibujo plano. Sistema de Bibliotecas SENA:',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000023241',
    },
    {
      referencia:
        'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000051551',
    },
    {
      referencia:
        'Szkutnicka, B., Cuenca, C., Koyama, A. (2010). El dibujo técnico de moda paso a paso. Sistema de Bibliotecas SENA.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000057728',
    },
  ],
  glosario: [
    {
      termino: 'ATENCIÓN DE SALUD',
      significado:
        'Se define como el conjunto de servicios que se prestan al usuario en el marco de los procesos propios del aseguramiento, así como de las actividades, procedimientos e intervenciones asistenciales en las fases de promoción y prevención, diagnóstico, tratamiento y rehabilitación que se prestan a toda la población.',
    },
    {
      termino:
        'AUDITORÍA PARA EL MEJORAMIENTO DE LA CALIDAD DE LA ATENCIÓN DESALUD.',
      significado:
        'Es el mecanismo sistemático y continuo de evaluación y mejoramiento de la calidad observada respecto de la calidad esperada de la atención de salud que reciben los usuarios.',
    },
    {
      termino: 'CALIDAD DE LA ATENCIÓN DE SALUD.',
      significado:
        'Se entiende como la provisión de servicios de salud a los usuarios individuales y colectivos de manera accesible y equitativa, a través de un nivel profesional óptimo, teniendo en cuenta el balance entre beneficios, riesgos y costos, con el propósito de lograr la adhesión y satisfacción de dichos usuarios. ',
    },
    {
      termino: 'CONDICIONES DE CAPACIDAD TECNOLÓGICA Y CIENTÍFICA',
      significado:
        'Son los requisitos básicos de estructura y de procesos que deben cumplir los Prestadores de Servicios de Salud por cada uno de los servicios que prestan y que se consideran suficientes y necesarios para reducir los principales riesgos que amenazan la vida o la salud de los usuarios en el marco de la prestación del servicio de salud',
    },
    {
      termino: 'EMPRESAS ADMINISTRADORAS DE PLANES DE BENEFICIOS. -EAPB-',
      significado:
        'Se consideran como tales, las Entidades Promotoras de Salud del Régimen Contributivo y del Régimen Subsidiado (Administradoras del Régimen Subsidiado), Entidades Adaptadas y Empresas de Medicina Prepagada.',
    },
    {
      termino: 'PRESTADORES DE SERVICIOS DE SALUD.',
      significado:
        'Se consideran como tales, las Instituciones Prestadoras de Servicios de Salud, los Profesionales Independientes de Salud y los Servicios de Transporte Especial de Pacientes.',
    },
    {
      termino: 'PROFESIONAL INDEPENDIENTE',
      significado:
        'Es toda persona natural egresada de un programa de educación superior de ciencias de la salud de conformidad con la Ley 30 de 1992 o las normas que la modifiquen, adicionen o sustituyan, con facultades para actuar de manera autónoma en la prestación del servicio de salud para lo cual podrá contar con personal de apoyo de los niveles de formación técnico y/o auxiliar',
    },
    {
      termino:
        'SISTEMA OBLIGATORIO DE GARANTÍA DE CALIDAD DE ATENCIÓN EN SALUD DEL SISTEMA GENERAL DE SEGURIDAD SOCIAL EN SALUD -SOGCS-',
      significado:
        'Es el conjunto de instituciones, normas, requisitos, mecanismos y procesos deliberados y sistemáticos que desarrolla el sector salud para generar, mantener y mejorar la calidad de los servicios de salud en el país.',
    },
    {
      termino: 'UNIDAD SECTORIAL DE NORMALIZACIÓN EN SALUD.',
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
