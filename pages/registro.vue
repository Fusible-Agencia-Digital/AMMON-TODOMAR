<template>
    <main>
        <!--? Hero Start -->
        <div class="slider-area2">
            <div class="slider-height2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="hero-cap text-center">
                                <h2>Registro</h2>
                                <h4 class="text-white">Información importante sobre el registro</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <menu-tabs-component>
                <b-nav-item :active="activeTab===0" @click="activeTab=0" href="#"
                            v-scroll-to="{el: '#general', offset: -180}">Información general
                </b-nav-item>
                <b-nav-item :active="activeTab===1" @click="activeTab=1" href="#"
                            v-scroll-to="{el: '#costo', offset: -180}">Costos
                </b-nav-item>
                <!--b-nav-item :active="activeTab===2" @click="activeTab=2" href="#"
                            v-scroll-to="{el: '#grupales', offset: -180}">Inscripciones grupales
                </b-nav-item-->
                <b-nav-item :active="activeTab===3" @click="activeTab=3" href="#"
                            v-scroll-to="{el: '#limite', offset: -180}">Límite de inscripción
                </b-nav-item>
                <b-nav-item :active="activeTab===4" @click="activeTab=4" href="#"
                            v-scroll-to="{el: '#formas', offset: -180}">Formas de pago
                </b-nav-item>
                <b-nav-item :active="activeTab===5" @click="activeTab=5" href="#"
                            v-scroll-to="{el: '#politica', offset: -180}">Política de cancelación
                </b-nav-item>
            </menu-tabs-component>
        </div>
        <!-- Hero End -->
        <!--? Brand Area Start -->
        <section class="team-area pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-info" id="general">
                            <div class="card-header">
                                <h2 class="mb-0">Información importante sobre el Registro</h2>
                            </div>
                            <div class="card-body">
                                <p>Tenemos nuevos requisitos en torno al Congreso Virtual. Para inscribirte al congreso
                                    SOMOS 2020 deberás afiliarse durante la promoción Membresía más Congreso “Porque
                                    todos somos IMSS”.</p>
                                <p>Se requiere una dirección de correo electrónico única para cada individuo para
                                    acceder a la plataforma virtual. Sin una dirección de correo electrónico única, no
                                    podrá obtener acceso al Congreso Virtual.</p>
                                <p>Esta dirección de correo electrónico también se utilizará para enviar cualquier
                                    correspondencia relevante y acceder a la constancia después del congreso.
                                    Proporcionar esta información por adelantado también nos permitirá procesar todos
                                    los registros individuales o de grupo de manera eficiente y entregar detalles de
                                    inicio de sesión a los registrados de manera oportuna.</p>
                            </div>
                        </div>

                        <div class="card card-info" id="costo">
                            <div class="card-header">
                                <h2 class="mb-0">Costos</h2>
                            </div>
                            <div class="card-body">
                                <div class="row title-cost">
                                    <div class="col-12">
                                        <p>Aprovecha la promoción hasta el 15 de septiembre y afíliate “Porque todos
                                            SOMOS IMSS” </p>
                                    </div>
                                    <div class="col-12">
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>SEPTIEMBRE 15</th>
                                                    <th>DURANTE EL CONGRESO</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th>ESPECIALISTAS</th>
                                                    <td>1,000.00</td>
                                                    <td>2,000.00</td>
                                                </tr>
                                                <tr>
                                                    <th>MÉDICOS GENERALES, TÉCNICOS Y ENFERMERAS</th>
                                                    <td>500.00</td>
                                                    <td>1,000.00</td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        RESIDENTES Y ESTUDIANTES
                                                        <p>Es necesario enviar constancia de estudiante</p>
                                                    </th>
                                                    <td>200.00</td>
                                                    <td>400.00</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <a href="https://www.srcongress.mx/somos/registro_virtual.php"
                                           target="_blank" class="btn mb-5 mb-md-3 mt-3">
                                            Registrate aquí
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--div class="card card-info" id="grupales">
                            <div class="card-header">
                                <h2 class="mb-0">Inscripciones grupales</h2>
                            </div>
                            <div class="card-body">
                                <p>Las inscripciones grupales solo se aceptarán para grupos de 20 asistentes o más. Si
                                    está registrando 19 o menos asistentes, utilice el enlace de registro
                                    individuales.</p>
                                <p>Para grupos de 20 personas o más, envíe un correo electrónico a <a
                                        href="mailto:contacto@somosimss.org.mx">contacto@somosimss.org.mx</a> para
                                    recibir el Formulario de registro de grupo o descárguelo
                                    <a href="/docs/registro_grupal.xls" download="">aquí</a>.</p>
                                <p> No hay descuentos grupales adicionales disponibles.</p>

                                <p>Los líderes de enlaces académicos o grupos institucionales pueden comprar el registro
                                    a granel: </p>
                                <ul>
                                    <li>La cancelación debe recibirse antes del 31 de agosto de 2020 para un reembolso
                                        menos una penalización del 10% del monto de la inscripción grupal.
                                    </li>
                                    <li>El pago de todas las inscripciones grupales debe recibirse a más tardar el 18 de
                                        septiembre de 2020.
                                    </li>
                                    <li>Los formularios de inscripción grupal deben recibirse antes del 18 de septiembre
                                        de 2020
                                    </li>
                                </ul>
                            </div>
                        </div-->

                        <div class="card card-info" id="limite">
                            <div class="card-header">
                                <h2 class="mb-0">Fecha límite de inscripción</h2>
                            </div>
                            <div class="card-body">
                                <p>El último día para recibir el pago del descuento de la tarifa anticipada es el <b>15
                                    de septiembre de 2020</b>.</p>
                                <p>El día 15 de septiembre el registro en línea se cerrará, por lo que deberá realizar
                                    su inscripción en línea hasta el día del congreso, esto puede demorar en las
                                    validaciones por lo que le sugerimos inscribirse antes de septiembre 15.</p>
                            </div>
                        </div>

                        <div class="card card-info" id="">
                            <div class="card-header">
                                <h2 class="mb-0">Confirmaciones de pago</h2>
                            </div>
                            <div class="card-body">
                                <p>Las confirmaciones de inscripción son automáticas si son realizadas con tarjeta de
                                    débito ó crédito, las transferencias bancarias si requieren de validación
                                    administrativa.</p>
                            </div>
                        </div>


                        <div class="row" id="formas">
                            <div class="col-md-6">
                                <div class="card card-info">
                                    <div class="card-header">
                                        <h2 class="mb-0">Formas de pago</h2>
                                    </div>
                                    <div class="card-body">
                                        <p>Para su comodidad contamos con las siguientes formas de pago:</p>
                                        <p>
                                            <a href="https://www.srcongress.mx/somos/registro_virtual.php">Inscripción
                                                en línea con tarjeta de crédito ó débito.</a></p>
                                        <ul>
                                            <li><b>Depósito:</b> A nombre de Sociedad Oncológica Multidisciplinaria de
                                                la Seguridad Social, A.C. Banco BANCOMER, cuenta: 0112998963
                                            </li>
                                            <li><b>Transferencia Electrónica:</b> A nombre de Sociedad Oncológica
                                                Multidisciplinaria de la Seguridad Social, A.C. Banco BANCOMER Clabe:
                                                012180001129989634
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-info">
                                    <div class="card-header">
                                        <h2 class="mb-0">Formas de registro</h2>
                                    </div>
                                    <div class="card-body">
                                        <p>
                                            <a href="https://www.srcongress.mx/somos/registro_virtual.php"
                                               target="_blank">Regístrese en línea aquí</a></p>
                                        <p>Para consultas o dudas de registro, llame al +52 5547377686</p>
                                        <p>También puede escribirnos a
                                            <a href="mailto:contacto@somosimss.org.mx">contacto@somosimss.org.mx</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card card-info" id="politica">
                            <div class="card-header">
                                <h2 class="mb-0">Política de cancelación</h2>
                            </div>
                            <div class="card-body">
                                <p>Las solicitudes de cancelación para el 2do. Congreso Nacional SOMOS deben recibirse
                                    por escrito antes del 20 de septiembre de 2020 al correo
                                    <a href="mailto:contacto@somosimss.org.mx">contacto@somosimss.org.mx</a></p>
                                <p>Todos los rembolsos están sujetos a un cargo del 50% del valor de inscripción. No se
                                    aceptarán cancelaciones por teléfono. Por favor, envíe correo electrónico: <a
                                            href="mailto:contacto@somosimss.org.mx">contacto@somosimss.org.mx</a></p>
                                <p>Para las tarifas de registro inferiores a $1000.00, la tarifa de registro no es
                                    reembolsable. En lugar de un reembolso, también puede solicitar un cupón para
                                    participar en una reunión futura.</p>
                                <p>Los solicitantes de registro que deseen cancelar pueden transferir su registro a otra
                                    persona sin penalización si envían una solicitud por escrito con el nombre de la
                                    persona de reemplazo antes del 15 de septiembre de 2020.</p>
                                <p>Las cancelaciones recibidas después del 15 de septiembre de 2020 recibirán un
                                    comprobante de participación en una reunión futura. Si no cancela por adelantado, no
                                    se emitirán reembolsos una vez que el evento haya concluido, independientemente de
                                    si participó en el evento.</p>
                                <p>Se pueden ofrecer vales de crédito si el programa se suspende o acorta debido a
                                    condiciones o circunstancias que escapan al control de comité organizador,
                                    incluidas, entre otras, el clima, interrupciones en los servicios de Internet,
                                    cortes de energía y cualquier cancelación relacionada con la epidemia de
                                    COVID-19.</p>
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
    data() {
      return {
        activeTab: 0
      }
    }
  }
</script>

<style lang="scss">

    @import "assets/scss/color";

    .slider-area2 {
        background-image: url(/images/cover_main.jpg);
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
</style>
