<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Sistema único de acreditación en salud

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/K8kKm1DwHPY?list=PLkc5n6npRWkjeKyZAukb0KCO4qFB-r4ZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .titulo-segundo.mt-5
      #t_3_1.h4 3.1 Concepto

    p.mt-4 #[strong El artículo 5 del decreto 903 de 2014 define el Sistema Único de Acreditación en Salud], como el conjunto de procesos, procedimientos y herramientas de implementación voluntaria y periódica por parte de las entidades a las que se refiere el artículo 2 del presente decreto (Artículo 2. Campo de aplicación. Las disposiciones contenidas en este decreto se aplicarán a las instituciones prestadoras de servicios de salud, a las Entidades Promotoras de Salud, a las Entidades Administradoras de Riesgos Laborales y a las Instituciones Prestadoras de Servicios de Salud que presten servicios de salud ocupacional, que voluntariamente decidan acogerse al proceso de acreditación previsto)

    .row.mt-4
      .col-md-9.fondo-azul-claro.p-4
        p Estos agentes, están destinados a comprobar el cumplimiento gradual de niveles de calidad superiores a los requisitos mínimos obligatorios, para la atención en salud, bajo la dirección del Estado y la inspección, vigilancia y control de la Superintendencia Nacional de Salud.

    .row.mt-1
      .col-md-9.fondo-azul-claro.p-4
        p Dicho sistema se regirá por lo dispuesto en el presente decreto y en las normas que lo modifiquen, adicionen o sustituyan, así como por la reglamentación que, para su desarrollo e implementación, expida el Ministerio de Salud y Protección Social.

    .row.mt-1
      .col-md-9.fondo-azul-claro.p-4
        p Las entidades a que se refiere el artículo 2 deberán contar con la certificación que expida la entidad competente, del cumplimiento de los requisitos mínimos obligatorios que les aplican, como condición para acceder a la acreditación.

    .titulo-segundo.mt-5
      #t_3_2.h4 3.2 Ruta

    p.mt-3 En el siguiente gráfico se muestra la ruta que debe seguir una entidad interesada en lograr la acreditación. 

    .mt-4.fondo-azul-claro.p-4
      h6.text-center ¿Qué pasos se deben seguir para alcanzar la acreditación en salud?
      p.text-center El ciclo de la acreditación en salud contempla los siguientes  procesos

      .text-center
        img.mt-3(src='@/assets/curso/tema3/1.png' style="display:inline")

    .titulo-segundo.mt-5
      #t_3_3.h4 3.3. Alcance

    .row.mt-5
      .col-auto
        .text-center
          img.mt-3(src='@/assets/curso/tema3/2.svg' style="display:inline")

      .col.mt-3
        p El beneficio de la acreditación tiene alcance a todo el país porque con los servicios de calidad en salud hay un posicionamiento a nivel internacional y permite la exportación de servicios de salud teniendo en cuenta que todas las entidades perteneciente al sector están obligadas a generar y suministrar los datos requeridos para el funcionamiento de este sistema, como:

        .row.mt-5
          .col-auto
            img(src='@/assets/curso/tema3/3.svg' style="display:inline")
          .col
            p #[strong Las Entidades Promotoras de Salud.]

        .row.mt-2
          .col-auto
            img(src='@/assets/curso/tema3/3.svg' style="display:inline")
          .col
            p #[strong Las Administradoras del Régimen Subsidiado.]
        .row.mt-2
          .col-auto
            img(src='@/assets/curso/tema3/3.svg' style="display:inline")
          .col
            p #[strong Las Entidades Adaptadas.]
        .row.mt-2
          .col-auto
            img(src='@/assets/curso/tema3/3.svg' style="display:inline")
          .col
            p #[strong Los Prestadores de Servicios de Salud.]

    .titulo-segundo.mt-5
      #t_3_4.h4 3.4. Estándares

    p.mt-4 Las instituciones con servicios ambulatorios y hospitalarios que se encuentren en el proceso de preparación para la acreditación deberán postularse según la resolución 5095 de 2018 con el #[strong “manual de acreditación en salud ambulatorio y hospitalario de Colombia versión 3.1”].

    p.mt-3 En dicho manual se encuentran el grupo de estándares del proceso de atención al cliente asistencial, de direccionamiento, de gerencia, de gerencia de talento humano, de gerencia del ambiente físico, de gerencia de la información, de gestión de la tecnología y mantenimiento de la calidad.

    TabsB.color-acento-contenido.mb-5.mt-5
      .py-4.py-md-5(titulo="Procesos" :icono="require('@/assets/curso/tema3/4.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p.mt-4.p-4 Cada grupo de estándares según el manual va precedido por un prólogo en el cual se explica para que ha sido diseñado cada uno, también se identifican con un código que los identifica según el grupo y subgrupo que se va a evaluar, algunos estándares incluyen adicionalmente, porque pueda que tengan condiciones particulares que deban ser tenidas en cuenta.
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/7.svg', alt='' style="max-width:200px;")

      .py-4.py-md-5(titulo="Procedimientos" :icono="require('@/assets/curso/tema3/5.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p.mt-4.p-4 El manual está diseñado para que la evaluación se realice por medio de un proceso con las siguientes características:
          
            .p-4
              button.btn.btn-primary(type='button' data-bs-toggle='modal' data-bs-target='#modalGrafica') Procedimientos

            #modalGrafica.modal.fade.modal-a(tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true')
              .modal-dialog.modal-lg
                .modal-content
                  .modal-header
                    h5#exampleModalLabel.modal-title Procedimientos
                    button.btn-close(type='button' data-bs-dismiss='modal' aria-label='Close')
                  .modal-body.text-center
                    img(src='@/assets/curso/tema3/10.png' style="display:inline")
                  .modal-footer
                    button.btn.btn-secondary(type='button' data-bs-dismiss='modal') Cerrar
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/8.svg', alt='' style="max-width:200px;")

      .py-4.py-md-5(titulo="Herramientas" :icono="require('@/assets/curso/tema3/6.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            p.mt-4.p-4 Se toma como herramienta para la evaluación de los estándares en la postulación para obtener la acreditación, el manual de acreditación en salud ambulatoria y hospitalario de Colombia versión 3.1
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/9.svg', alt='' style="max-width:200px;")

    .titulo-segundo.mt-5
      #t_3_5.h4 3.5. Entes acreditadores

    p.mt-4 Según Decreto 903 de 2014, para el sistema de acreditación en Colombia todos aquellos que quieran ser entes acreditadores se deben inscribir en el Registro Especial de Acreditadores en Salud, de que trata el artículo 8 del mencionado decreto, para lo cual se le otorgará el código que lo identifica como entidad acreditadora a nivel nacional del Sistema Único de Acreditación en Salud.

    p.h6.mt-4 #[strong Las entidades que estén interesadas en ser acreditadores en salud deben cumplir los siguientes requisitos:]

    .row.mt-5
      .col-auto
        img(src='@/assets/curso/tema3/3.svg' style="display:inline")
      .col
        p Estar acreditada por la International Society for Quality in Healthcare – ISQUA.

    .row.mt-2
      .col-auto
        img(src='@/assets/curso/tema3/3.svg' style="display:inline")
      .col
        p Contar con experiencia mínima de cinco (5) años en la acreditación de entidades del sector salud en Colombia.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
  }),
}
</script>

<style lang="sass" scoped>
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
.tabs-b__tab
  background-color: #F3F9FF !important
  border-right: 1px solid #B0C0D2
  border-bottom: 1px solid #B0C0D2
.tabs-b
  border-bottom: 1px solid #B0C0D2 !important
</style>
