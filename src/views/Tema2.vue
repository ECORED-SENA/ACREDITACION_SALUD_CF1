<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Sistema Obligatorio de garantía de la calidad.
    
    .bg-1.p-4.row
      .col-4.text-center.mt-5.mb-4
        img.img_thumbnail.mt-4(src='@/assets/curso/tema2/2.svg' alt='Sistema Obligatorio de garantía de la calidad')
      .col-8.mt-4.mb-4
        .bg-white.p-5.mt-4
          br
          p #[strong El Decreto 1011 de 2006,] establece que el Sistema Obligatorio de Garantía de Calidad en Salud (SOGCS), es el conjunto de instituciones, normas, requisitos, mecanismos y procesos deliberados y sistemáticos del sector salud para generar, mantener y mejorar la calidad de servicios de salud del país.
          br

    h6.mt-5 El SOGCS está integrado por cuatro componentes a saber:

    .row.mt-3
      .col

        .p-4.fondo-azul-claro.mt-3
          .row.mt-2
            .col-auto
              img(src='@/assets/curso/tema2/3.svg' alt='Check' width="20px" height="20px")

            .col
              p Sistema Único de Habilitación (SUH),
          .row.mt-2
            .col-auto
              img(src='@/assets/curso/tema2/3.svg' alt='Check' width="20px" height="20px")

            .col
              p Programa de Auditoría para el Mejoramiento de la Calidad (PAMEC),

          .row.mt-2
            .col-auto
              img(src='@/assets/curso/tema2/3.svg' alt='Check' width="20px" height="20px")

            .col
              p Sistema Único de Acreditación (SUA)

          .row.mt-2
            .col-auto
              img(src='@/assets/curso/tema2/3.svg' alt='Check' width="20px" height="20px")

            .col
              p Sistema de Información para la Calidad en Salud.

      .col-auto.text-center
        img(src='@/assets/curso/tema2/4.svg' alt='El SOGCS está integrado por cuatro componentes a saber')

    .titulo-segundo.mt-5
        #t_2_1.h4 2.1 Concepto

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .titulo-segundo.mt-5
        #t_2_2.h4 2.2 Componentes

    p.mt-3 En el mismo Decreto en mención, define como componentes del #[strong SOGC] para los Prestadores de Servicios de Salud y Entidades Administradoras, los siguientes sistemas:

    ol.lista-ol--cuadro.mt-5
        li 
          .lista-ol--cuadro__vineta(style="background-color: #9A4CBC")
            span a
          | #[strong La habilitación.]

    p.mt-4 Consiste en una evaluación externa, de carácter gubernamental y obligatoria, orientada a garantizar unas condiciones mínimas de seguridad, de manejo del riesgo y de dignidad para los usuarios, sin las cuales no se pueden ofrecer ni contratar servicios de salud, cuya vigilancia es de la competencia del Estado, específicamente de las Direcciones Territoriales de Salud.

    p.mt-3 Este componente se entiende como el conjunto de normas, requisitos y procedimientos mediante los cuales se establece, registra, verifica y controla el cumplimiento de las condiciones básicas de capacidad tecnológica y científica, de suficiencia patrimonial y financiera y de capacidad técnico-administrativa indispensables para la entrada y permanencia en el sistema. La habilitación busca dar seguridad a los usuarios frente a los potenciales riesgos asociados a la atención en salud. La habilitación es de carácter obligatorio para: 

    .row.mt-5
      .col-9.fondo-azul-claro
        .row
          .col
            .p-4.mt-3
              .row.mt-2
                .col-auto
                  img(src='@/assets/curso/tema2/3.svg' alt='Check' width="20px" height="20px")

                .col
                  p Sistema Único de Habilitación (SUH),
              .row.mt-2
                .col-auto
                  img(src='@/assets/curso/tema2/3.svg' alt='Check' width="20px" height="20px")

                .col
                  p Programa de Auditoría para el Mejoramiento de la Calidad (PAMEC),

              .row.mt-2
                .col-auto
                  img(src='@/assets/curso/tema2/3.svg' alt='Check' width="20px" height="20px")

                .col
                  p Sistema Único de Acreditación (SUA)

              .row.mt-2
                .col-auto
                  img(src='@/assets/curso/tema2/3.svg' alt='Check' width="20px" height="20px")

                .col
                  p Sistema de Información para la Calidad en Salud.

          .col-auto.text-center.p-4
            img(src='@/assets/curso/tema2/5.svg' alt='El SOGCS está integrado por cuatro componentes a saber')

    ol.lista-ol--cuadro.mt-5
        li 
          .lista-ol--cuadro__vineta(style="background-color: #9A4CBC")
            span b
          | #[strong La auditoría para el mejoramiento de la calidad (PAMEC).]

    p.mt-4 Identificada como una herramienta básica de evaluación interna, continua y sistemática del cumplimiento de estándares de calidad complementarios a los que se determinan como básicos en el Sistema Único de Habilitación. Los procesos de auditoría son obligatorios para las direcciones departamentales, distritales y municipales de salud, cuando actúan como aseguradoras, las instituciones prestadoras de servicios de salud, las entidades promotoras de salud del régimen contributivo y subsidiado, las entidades adaptadas y las empresas de medicina pre pagada.

    p.mt-3 Este componente se entiende como el mecanismo sistemático y continuo de evaluación del cumplimiento de estándares de calidad “concordante con la intencionalidad de los estándares de acreditación y superior a los que se determinan como básicos en el Sistema Único de Habilitación”.

    p.mt-3 Cuenta con un proceso lógico comprendido por una ruta crítica la cual incorpora nueve (9) pasos secuenciales, que permiten desde el autodiagnóstico de la entidad, e identificando el estado de avance y madurez de sus procesos y acciones, lograr mejoras continuas incrementales que consecuentemente llevarán a la Acreditación.

    .row.mt-5
      .col-9.fondo-azul-claro(style="padding-left: 2.2rem")
        .row
          .col-8
            .p-4
              ol.lista-1
                li.mt-3 Autoevaluación
                li.mt-3 Selección de procesos a mejorar.
                li.mt-3 Priorización de procesos.
                li.mt-3 Selección de procesos a mejorar.
                li.mt-3 Medición del desempeño inicial de procesos.
                li.mt-3 Plan de acción para procesos seleccionados.
                li.mt-3 Ejecución del plan de acción.
                li.mt-3 Evaluación del mejoramiento.
                li.mt-3 Aprendizaje organizacional.

          .col-4.text-center.p-4.mt-5
            img.img_thumbnail(src='@/assets/curso/tema2/6.svg' style="display:inline" alt='')

    p.mt-4 El componente de auditoría para el mejoramiento de la calidad inicia con el cumplimiento de los requisitos mínimos de habilitación e incorpora la información de los indicadores del sistema de información para la calidad con el objeto de ir verificando la implementación de las condiciones de calidad, que paso a paso, puede llevar a alcanzar los estándares del sistema único de acreditación. 

    p.mt-3 La auditoría para el mejoramiento de la calidad es la herramienta para Identificar las brechas entre la calidad esperada y la observada, a través de la verificación del continuo de la atención clínico – administrativa del paciente y su familia con el fin de promover la realización de acciones de mejoramiento que busquen mejorar, mantener o incrementar la calidad de la prestación de los servicios de salud.

    ol.lista-ol--cuadro.mt-5
        li 
          .lista-ol--cuadro__vineta(style="background-color: #9A4CBC")
            span c
          | #[strong La acreditación en salud.]

    p.mt-4 Como el conjunto de entidades, estándares, actividades de apoyo y procedimientos de autoevaluación, mejoramiento y evaluación externa, destinados a demostrar, evaluar y comprobar el cumplimiento de niveles superiores de calidad por parte de las entidades que voluntariamente decidan acogerse a este proceso. 

    p.mt-3 Es una estrategia utilizada por aquellas entidades del Sistema General de Seguridad Social en Salud, SGSSS, que voluntariamente quieran demostrar el cumplimiento de niveles superiores de calidad, a través de una herramienta de gestión gerencial que impacta de manera notable la resolución de muchos de sus problemas críticos.

    p.mt-3 El Sistema Único de Acreditación es una estrategia y una metodología de mejoramiento continuo de la calidad específica para las entidades de salud, de larga trayectoria y desarrollo conceptual y metodológico a escala mundial y de probada efectividad.

    .row.fondo-azul-claro.p-5.mt-5
      .col-auto
        img.img_thumbnail(src='@/assets/curso/tema2/7.svg' style="display:inline" alt='')
      .col
        p #[strong El Sistema Obligatorio de Garantía de Calidad de la Atención en Salud], establecido mediante el Decreto 1011 de 2006, dice que la acreditación en salud está planteada como uno de los componentes para obtener el objetivo del mejoramiento continuo de la calidad; llegando al máximo nivel de calidad establecida. Consecuentemente, para que una entidad pueda aplicar ante el ente acreditador para optar al otorgamiento del título de acreditado en salud debe estar previamente habilitada, verificado su cumplimiento por el ente correspondiente y no estar sujeta a ninguna sanción en el último año, como mínimo.

    p.mt-4 El sistema de acreditación se constituye en una oportunidad para que las entidades sean competitivas en el plano internacional, dado que nuestro modelo de acreditación cuenta con el reconocimiento de ISQua, la Sociedad Internacional para la Calidad de la atención en Salud a nuestro ente acreditador, encontrándose en proceso la estandarización internacional de nuestros estándares, de esta forma se continúa incrementando la competitividad de nuestras entidades para la exportación de servicios de salud.

    p.mt-3 Asimismo, el sistema trae consigo el prestigio que genera competencia entre las entidades para ofrecer mejores servicios, lo cual redundará directamente en beneficio de los usuarios, quienes tendrán la opción de escoger entre aquellas instituciones que presenten más altos estándares de calidad.

    ol.lista-ol--cuadro.mt-5
        li 
          .lista-ol--cuadro__vineta(style="background-color: #9A4CBC")
            span d
          | #[strong El sistema de información para la calidad.]

    .row.mt-5
      .col-8
        p El cual permite estimular la competencia por calidad entre los agentes del sector y orientar a los usuarios en el conocimiento de las características del sistema, en el ejercicio de sus derechos y deberes, así como de los niveles de calidad de los prestadores de servicios de salud, las entidades promotoras de salud del régimen contributivo y subsidiado, las entidades adaptadas y las empresas de medicina pre pagada, para que puedan tomar decisiones informadas en el momento de ejercer sus derechos en el Sistema General de Seguridad Social en Salud.

      .col-4.text-center
        img.img_thumbnail(src='@/assets/curso/tema2/8.svg' style="display:inline" alt='')

    .titulo-segundo.mt-5
        #t_2_3.h4 2.3 Relación con el subsistema nacional de calidad.

    .row.mt-5
      .col-auto.text-center
        img.mt-4(src='@/assets/curso/tema2/9.svg' style="display:inline" alt='')

      .col.p-3
        p El sistema único de acreditación es un proceso formal y voluntario. El término acreditación en salud significa #[strong “Proceso voluntario y periódico de autoevaluación interna y revisión externa de los procesos y resultados que garantizan y mejoran la calidad de la atención del usuario en una organización de salud, a través de una serie de estándares óptimos y factibles de alcanzar, previamente conocidos por las entidades evaluadas. Es realizada por personal idóneo y entrenado para tal fin y su resultado es avalado por entidades de acreditación autorizados para dicha función”]. Cuando se utiliza el término acreditación en salud se hace referencia a una metodología específica para este sector, con amplio reconocimiento internacional y en este sentido es un proceso diferente al mencionado en el Sistema Nacional de Normalización, Certificación y Metrología.

        p.mt-3 Mediante este proceso se reconoce públicamente que una institución, que presta servicios de salud, cumple requisitos superiores de calidad, previo cumplimiento de los requisitos mínimos. El sistema único de acreditación está orientado y dirigido por una única entidad que es seleccionada cada cinco años por el MPS y la cual es la responsable de conferir o negar la acreditación a las entidades que se acojan a este proceso.

        p.mt-4 Actualmente, dicha entidad es el ICONTEC, como resultado de un concurso de méritos abierto en el año 2003. El Sistema prevé un mecanismo para el reconocimiento internacional a través del proceso internacional de acreditación de la Sociedad Internacional para la Calidad en Atención de la Salud (ISQua).

    .row.mt-5
      .col-9
        .row.p-4.fondo-azul-claro
          .col
            p.mt-4 En el tema de la metrología, laboratorios de ensayo y calibración el Sistema Obligatorio de garantía de Calidad no tiene desarrollos específicos y es usuario de los desarrollos del SNNCM, con la salvaguarda de las previsiones necesarias a sus especificidades.

          .col-auto
            img(src='@/assets/curso/tema2/10.svg' style="display:inline" alt='')

      .col-3


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),
}
</script>

<style lang="sass">
.fondo-azul-claro
  background-color: #F3F9FF
.titulo-principal__numero
  background-color: #9A4CBC !important
.titulo-segundo::after
  border-left: solid 50px #9A4CBC !important
.fondo-gris-claro
  background-color: #E4E0FF
.fondo-rosado
  background-color: #F5DEFF
.text-left
  text-align: left !important
.linea-tiempo-a::before
  background: #5D4CBC !important
.linea-tiempo-a__row::before
  background-color: #9A4CBC !important
.linea-tiempo-a__row::after
  background-color: #FFFFFF !important
.linea-tiempo-a__icon__container
  background-color: #9A4CBC !important
.linea-tiempo-a__icon__container::before
  background-color: #9A4CBC !important
.bg-1
  background: url('../assets/curso/tema2/1.svg')
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.img_thumbnail
  width: 150px
  height: 150px
  display: inline
.lista-1
  list-style: decimal
.lista-1 li::marker
  font-weight: bold
</style>
