<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    p.mt-2 Apreciado aprendiz en este componente encontrará la normativa que establece el sistema de salud en Colombia, para asegurar los servicios con calidad según estándares establecidos por el ministerio de salud y que son parte del SOGCS. El Subsistema Nacional de Calidad (SNCA) tiene como objetivo  establecer las condiciones obligatorias, la formulación, ejecución y seguimiento de las políticas en materia de normalización, reglamentación técnica, evaluación de la conformidad y metrología; está compuesto por instituciones públicas y privadas que realizan actividades de cualquier orden; para el sector salud, se establece el Sistema Obligatorio de Garantía de Calidad (SOGCS); entendido como el conjunto de instituciones, normas, requisitos, mecanismos y procesos deliberados y sistemáticos que se desarrollan en el sector para generar, mantener y mejorar la calidad de los servicios de salud en el país. Este incluye los requisitos mínimos obligatorios para los agentes intervinientes. 

    p.mt-2 #[span.fondo-azul-claro.p-1 El Sistema Obligatorio de Garantía de Calidad SOGCS, cuenta con una política pública contemplada en el Decreto 1011 de 2006]. Dicha política establece los lineamientos y procesos de calidad que deben cumplir los agentes que intervienen en la atención en salud y determina como a través de la articulación de ellos se integran el sistema único de habilitación, la auditoría para el mejoramiento de la calidad, el sistema único de acreditación y el sistema de información que permiten desde un enfoque básico de riesgo y en la ruta de la mejora continua, poder lograr el máximo nivel de calidad el cual reside en la acreditación en salud.

    p.mt-2 Los sistemas de gestión de calidad avanzan en consonancia con el logro del cumplimiento de las necesidades de las diferentes partes interesadas. Es importante reconocer sus logros, entre ellos el establecimiento de una calidad mucho más técnica, basada en procesos, sistemas estructurales y documentales, los cuales han mostrado ser de gran utilidad; desde que su práctica se introdujo en los modelos productivos industriales y de los servicios, a mediados de los años 80.

    p.mt-2 La calidad de la atención en salud ha evolucionado de forma permanente en la medida que el sistema avanza a través del tiempo y por tal motivo, su estructura debe adaptarse a los cambios sistémicos y del entorno, siendo flexible a las nuevas tecnologías, ingreso de nuevos actores, modelos de negocio, modelos de servicio, necesidades de los pacientes y solidez institucional entre otros.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.fondo-azul-claro
  background-color: #CDEDFE
.titulo-principal__numero
  background-color: #9A4CBC !important
</style>
