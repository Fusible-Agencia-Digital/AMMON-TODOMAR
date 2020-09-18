<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Trabajos del congreso</h2>
                                <h4 class="text-white">Fecha límite para recepción: 31 de agosto 2020</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <menu-tabs-component>
                <b-nav-item :active="activeTab===0" @click="activeTab=0" href="#"
                            v-scroll-to="{el: '#bases', offset: -180}">Bases
                </b-nav-item>
                <b-nav-item :active="activeTab===1" @click="activeTab=1" href="#"
                            v-scroll-to="{el: '#oral', offset: -180}">Oral
                </b-nav-item>
                <b-nav-item :active="activeTab===2" @click="activeTab=2" href="#"
                            v-scroll-to="{el: '#eposter', offset: -180}">E-Poster
                </b-nav-item>
                <b-nav-item :active="activeTab===3" @click="activeTab=3" href="#"
                            v-scroll-to="{el: '#formulario', offset: -180}">Formulario de envío
                </b-nav-item>
                <b-nav-item :active="activeTab===4" @click="activeTab=4" href="#"
                            v-scroll-to="{el: '#beca', offset: -180}">Beca de apoyo
                </b-nav-item>
            </menu-tabs-component>
        </div>
        <!-- Hero End -->
        <!--? Brand Area Start -->
        <section class="team-area pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-info" id="convocatoria">
                            <div class="card-header">
                                <h2 class="mb-0">Convocatoria</h2>
                            </div>
                            <div class="card-body">
                                <p>La Asociación Mexicana de Mastología tiene el gusto de convocar al concurso de
                                    Trabajos del Congreso del “XVII Congreso Nacional de Mastología y XIV Reunión
                                    Internacional” en sus dos modalidades: E-POSTER y ORAL, siendo parte de las
                                    actividades académicas de nuestro congreso.</p>
                            </div>
                        </div>

                        <div class="card card-info" id="bases">
                            <div class="card-header">
                                <h2 class="mb-0">Bases</h2>
                            </div>
                            <div class="card-body">
                                <ol>
                                    <li>Fecha límite para la recepción de resúmenes: 31 de agosto de 2020.</li>
                                    <li>Cada participante podrá aparecer máximo en dos trabajos como primer autor.</li>
                                    <li>Se deberá enviar el resumen del trabajo a través de la plataforma de trabajos
                                    </li>
                                    <li>Seleccionar la categoría del trabajo: oral o e-poster.</li>
                                    <li>El resumen deberá contener la siguiente información completa, sin omitir ningún
                                        concepto para ser evaluado por el comité de selección:
                                        <ul>
                                            <li>Título, autores, instituciones y ciudad en mayúscula y sin abreviar,
                                                subrayando el expositor<br> 250 palabras máximo
                                            </li>
                                            <li>Antecedentes</li>
                                            <li>Objetivo de estudio</li>
                                            <li>Material y método (o informe del caso)</li>
                                            <li>Resultados</li>
                                            <li>Discusión</li>
                                            <li>Conclusiones</li>
                                        </ul>
                                    </li>
                                    <li>El autor principal proporcionará sus datos correctos para que sean enviadas las
                                        notificaciones.
                                    </li>
                                    <li>No se aceptarán trabajos que mencionen que los resultados y/o las conclusiones
                                        serán discutidas durante la presentación.
                                    </li>
                                    <li>Para que el trabajo oral o e-poster sea considerado en el programa, es
                                        indispensable, que el autor se encuentre inscrito en el Congreso a más tardar el
                                        21 de agosto del 2020.
                                    </li>
                                    <li>Los autores aceptan la responsabilidad absoluta de lo vertido en el resumen.
                                    </li>
                                    <li>No se permiten ilustraciones, sin embargo, los cuadros y tablas son permitidas,
                                        siempre y cuándo se encuentren dentro del formato.
                                    </li>
                                    <li>Las abreviaturas pueden ser usadas siempre y cuando se definan en la primera
                                        aparición de la misma.
                                    </li>
                                    <li>Para los trabajos e-poster, el autor dispondrá de un espacio digital.</li>
                                    <li>Para la presentación de trabajos libres en la modalidad oral, los salones
                                        estarán provistos de un proyector de datos por computadora.
                                    </li>
                                    <li>Se otorgará BECA DE APOYO de inscripción al congreso SOLAMENTE a los autores
                                        (siempre y cuando sean residentes) de los TRABAJOS ORALES aceptados y
                                        acreditados. Dichas becas no serán transferibles.&nbsp;<a
                                                href="https://congreso.mastologia.org.mx/trabajos-del-congreso/#becas"
                                                data-et-has-event-already="true">revisar bases de la beca</a></li>
                                    <li>La decisión del comité de selección será inapelable.</li>
                                </ol>
                            </div>
                        </div>

                        <div class="card card-info" id="oral">
                            <div class="card-header">
                                <h2 class="mb-0">Oral - Convocatoria</h2>
                            </div>
                            <div class="card-body">
                                <p>Para la presentación de trabajos libres en la modalidad oral, se presentarán el
                                    sábado 10 de octubre por el canal 1 exclusivamente los tres primeros lugares.</p>
                                <ol>
                                    <li>El tiempo de exposición para los trabajos libres orales será en total de 10
                                        minutos, y contará con 8 minutos para presentación y 2 minutos de discusión.
                                    </li>
                                    <li>Los moderadores de esta sesión tienen instrucción estricta de atenerse a los
                                        tiempos.
                                        <p>
                                            <a href="https://congreso.mastologia.org.mx/wp-content/uploads/2020/07/plantilla_oral.ppt">Descargar
                                                plantilla Power Point</a></p>
                                    </li>
                                    <li>Se recomienda usar no más de 10 diapositivas, con tamaño de letra adecuado no
                                        menor a 10 puntos (en Power Point), utilizar tipografías de fácil lectura
                                        (Calibri, Arial, Century Gothic, Geneva, Gill Sans, Myriad pro), y siempre
                                        incluyendo:
                                        <ul>
                                            <li>Título, autores y su proveniencia (no cuenta entre las 10
                                                diapositivas)
                                            </li>
                                            <li>Introducción</li>
                                            <li>&nbsp;Objetivos</li>
                                            <li>Material y métodos</li>
                                            <li>Resultados</li>
                                            <li>Conclusiones</li>
                                        </ul>
                                    </li>
                                    <li>Deberá adjuntar su presentación de Power Point (.ppt) en formulario, completando
                                        los campos indicados. La fecha límite de envió es hasta el 31 de agosto 2020.
                                    </li>
                                    <li>En caso de aceptación y acreditación del trabajo oral, le serán enviadas nuevas
                                        instrucciones a más tardar el 10 de septiembre del 2020.
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div class="card card-info" id="eposter">
                            <div class="card-header">
                                <h2 class="mb-0">E-Poster - Convocatoria</h2>
                            </div>
                            <div class="card-body">
                                <p>Para los trabajos en e-poster, el autor dispondrá de un espacio digital en la
                                    plataforma del congreso virtual.</p>
                                <ol>
                                    <li>Su cartel debe tener una proporción 16:9 en formato vertical
                                        <p>
                                            <a href="https://congreso.mastologia.org.mx/wp-content/uploads/2020/07/plantilla_e-poster.ppt">Descargar
                                                formato e-poster.</a></p>
                                    </li>
                                    <li>Tipografías adecuadas: El tamaño puede ser hasta de 6 puntos (en Power Point),
                                        tamaños más pequeños dificultan la lectura de posters en pantallas aún de alta
                                        resolución.
                                    </li>
                                    <li>Inserción de imágenes y gráficos: Puede insertar en la forma habitual en Power
                                        Point cualquier imagen, fotografía, logotipo, gráfico, fondo, etc., que desee,
                                        ubicándola en la sección pertinente o indicando a que corresponde.
                                    </li>
                                    <li>Es muy importante que las fotografías, diagramas o cualquier imagen que incluya
                                        tenga una resolución (densidad de pixeles o puntos en pantalla) de buena
                                        calidad, para que evite distorsionarse, volverse borrosa o pixelarse al
                                        colocarla en el poster. Estos problemas surgen habitualmente al utilizar
                                        imágenes “bajadas” desde internet (por ejemplo) y que están en un tamaño muy
                                        pequeño y al darles un tamaño mayor adecuado al poster, pierden su calidad y se
                                        distorsionan. Otros casos son por cambiar el tamaño sólo en forma vertical u
                                        horizontal, donde la imagen pierde sus proporciones.
                                    </li>
                                    <li>GUARDAR COMO TIPO: elija la opción Presentación de Power Point (.ppt). *No envíe
                                        su trabajo en otros formatos de archivo ni tampoco en proporciones de tamaño
                                        diferentes a lo indicado, ya que podría no ser posible presentarlo.
                                    </li>
                                    <li>Recuerde que su archivo debe tener sólo una diapositiva.</li>
                                    <li>Adjunte su trabajo al formulario siguiente, completando los campos indicados. La
                                        fecha límite de envió es hasta el 31 de agosto del 2020
                                    </li>
                                    <li>La organización se encargará de efectuar la transformación a formato poster
                                        digital.
                                    </li>
                                    <li>En caso de haber algún inconveniente técnico para la presentación de su trabajo,
                                        se le contactará para solucionar el problema.
                                    </li>
                                    <li>En caso de aprobación de su trabajo se le contactara para brindarle nuevas
                                        instrucciones a más tardar el 10 de septiembre del 2020.
                                    </li>
                                </ol>
                            </div>
                        </div>


                        <div class="card card-info" id="formulario">
                            <div class="card-header">
                                <h2 class="mb-0">Formulario de envío de trabajos</h2>
                            </div>
                            <div class="card-body">
                                <work-form-component></work-form-component>
                            </div>
                        </div>

                        <div class="card card-info" id="beca">
                            <div class="card-header">
                                <h2 class="mb-0">Beca de apoyo</h2>
                            </div>
                            <div class="card-body">
                                <h3 class="my-5">La Asociación Mexicana de Mastología, A.C. (A.M.M.) fundada en
                                    1986</h3>
                                <h4>Convoca</h4>
                                <p>A residentes que se encuentran cursando la especialidad, sub especialidad o postgrado
                                    en el diagnóstico o tratamiento relacionados a las enfermedades de la glándula
                                    mamaria a postularse para la <strong>BECA DE APOYO</strong> en la inscripción
                                    virtual al “XVII Congreso Nacional de Mastología, XIV Reunión Internacional” cuyo
                                    objetivo es contribuir a su formación académica y profesional.</p>
                                <h4>Características de la beca</h4>
                                <p>La <strong>beca de apoyo</strong> consiste en la INSCRIPCIÓN al “XVII Congreso
                                    Nacional de Mastología, XIV Reunión Internacional”.</p>
                                <h4>Requisitos</h4>
                                <p>Los postulantes se ajustarán a las siguientes bases:</p>
                                <ol>
                                    <li>Ser residente</li>
                                    <li>Enviar constancia de residencia.</li>
                                    <li>Haber sido aceptado y aprobado por el comité para su presentación en el congreso
                                        en los&nbsp;<strong>TRABAJOS ORALES&nbsp;</strong>del congreso 2020.
                                    </li>
                                </ol>
                                <p>La presentación de las postulaciones en los términos de esta convocatoria, implica la
                                    aceptación expresa de las bases establecidas en la misma y demás normativa
                                    aplicable.</p>
                                <p>Revise las bases para participar en los&nbsp;<a href="#bases">TRABAJOS DEL
                                    CONGRESO</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <!-- Brand Area End -->
    </main>
</template>

<script>
  export default {
    name: "trabajos",
    data() {
      return {
        activeTab: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import "assets/scss/color";
    
    .slider-area2 {
    }

    .nav-link {
        padding-left: 17px !important;
        padding-right: 17px !important;
    }

    .card-info {
        border: 0px;

        .card-header {
            background: none;

            h2 {
                font-size: 18pt;
            }
        }

        .card-body {
            p {
                color: #7f8192;

                a {
                    color: $theme-color;
                }
            }

            ul {
                li {
                    list-style-type: circle;
                    margin-left: 30px;
                    color: #7f8192;

                    a {
                        color: $theme-color;
                    }
                }
            }
        }
    }

    .title-cost {
        h3 {
            color: $theme-color;
            font-size: 20px;
        }
    }

    ol {
        li {
            list-style: decimal;
        }
    }
</style>