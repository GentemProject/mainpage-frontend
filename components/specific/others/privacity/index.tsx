import { useEffect } from 'react'
import style from '../style.module.scss'
import Paragraph from 'components/specific/others/paragraph'
import Banner from 'components/specific/others/banner'
import { useHeader, header } from 'contexts/general'
function PrivacityContent(): JSX.Element {
  const currentHeader = useHeader()
  useEffect(() => {
    currentHeader.changeClass('solid')
  }, [])
  return (
    <div className={style.content}>
      <Banner title="Privacidad" />
      <Paragraph title="Introducción" id="introduccion">
        <p>
          La organización gentem (en adelante GENTEM), dando cumplimiento a la
          Ley Estatutaria 1581 de 2012, la Ley de Habeas Data 1266 de 2008 y el
          artículo 15 de la Constitución Política, presenta su Política de
          Tratamiento de Datos Personales.
        </p>
      </Paragraph>
      <Paragraph title="Objetivo" id="objetivo">
        <p>
          Establecer los criterios que se deben tener en cuenta al momento de la
          recolección, almacenamiento, uso, circulación y supresión de los datos
          de las personas naturales o jurídicas que serán tratados por GENTEM,
          quien actúa en calidad de Responsable del tratamiento de los datos
          personales. Lo anterior con el fin de proteger el derecho que tienen
          todas las personas a conocer, actualizar y rectificar la información
          que se recolecte sobre ellas.
        </p>
      </Paragraph>
      <Paragraph title="Alcance" id="alcance">
        <p>
          Esta política aplica para la información de personas naturales o
          jurídicas respecto a las cuales GENTEM dé tratamiento a sus datos
          personales. El presente documento cubre todos los aspectos
          administrativos, organizacionales y de control que deben ser cumplidos
          por los directivos, colaboradores, contratistas y terceros que laboren
          o tengan alguna relación con GENTEM.
        </p>
      </Paragraph>
      <Paragraph title="Marco normativo" id="marconormativo">
        <p>
          Artículo 15 de la Constitución Política de Colombia Ley Estatutaria
          1581 de 201, compilada por el Decreto 1074 de 2015, conforme la cual
          se dictan disposiciones generales para la protección de datos
          personales, y demás normas que la reglamenten, modifiquen o deroguen.
          <br />
          <br />
          Ley 1266 de 2008, en la que se dictan las disposiciones generales de
          habeas data y se regula el manejo de la información contenida en las
          bases de datos personales, en especial la financiera, crediticia,
          comercial, de servicios y la proveniente de terceros países y se
          dictan otras disposiciones.
          <br />
          <br />
          Instrucciones impartidas por la Superintendencia de Industria y
          Comercio en ejercicio de la función establecida en el artículo 21 de
          la Ley 1581 de 2012.
          <br />
          <br />
          Circular externa 003 del 01 de agosto del 2018
        </p>
      </Paragraph>
      <Paragraph title="Responsable" id="responsable">
        <p>
          GENTEM, organización sin ánimo de lucro con correo electrónico
          admin@gentem.org
        </p>
      </Paragraph>
      <Paragraph title="Obligaciones" id="obligaciones">
        <p>
          Esta Política es de obligatorio y estricto cumplimiento para GENTEM.
          GENTEM tiene presente que los datos personales pertenecen a sus
          titulares y que solamente ellos pueden decidir sobre los mismos, por
          lo tanto GENTEM hará uso de los mismos solamente para las finalidades
          para las que se encuentra debidamente facultada como plataforma de
          creación y firma de documentos legales, en virtud de su objeto social,
          respetando en todo momento la normativa vigente sobre la Protección de
          Datos Personales.
        </p>
      </Paragraph>
      <Paragraph title="Política" id="politica">
        <p>
          Incorpora en todas sus actuaciones el respeto por la protección de
          datos personales. En consecuencia, solicitará desde el ingreso del
          dato, autorización para el uso de la información que reciba para las
          finalidades propias de su objeto misional.
          <br />
          <br />
          Respeta los principios establecidos en la ley y atenderá en sus
          actuaciones y manejo de información de datos personales las
          finalidades que se deriven de la recolección de los mismos.
          <br />
          <br />
          Implementará las estrategias y acciones necesarias para dar
          efectividad a la Ley estatutaria 1581 de 2012 y demás normativa que la
          complemente, modifique o derogue.
          <br />
          <br />
          Dará a conocer a todos sus titulares los derechos que se derivan de la
          protección de datos personales.
        </p>
      </Paragraph>
      <Paragraph title="Principios rectores" id="principiosrectores">
        <p>
          En cumplimiento de la Ley 518 de 2012 y sus reglamentaciones, GENTEM,
          en calidad de Responsable en el tratamiento de datos personales, dará
          cumplimiento a los siguientes principios:
          <br />
          <ul>
            <li>
              <span className={style.bold}>
                Principio de Legalidad en materia de Tratamiento de datos:&nbsp;
              </span>
              El tratamiento de datos es una actividad reglada que debe
              sujetarse a lo establecido en la ley y en las demás disposiciones
              que la desarrollen.
            </li>
            <li>
              <span className={style.bold}>Principio de Finalidad: </span>
              El tratamiento debe obedecer a una finalidad legítima de acuerdo
              con la Constitución Política y la ley, la cual debe ser informada
              al Titular.
            </li>
            <li>
              <span className={style.bold}>Principio de Libertad: </span>
              El tratamiento sólo puede ejercerse con el consentimiento, previo,
              expreso e informado del Titular. Los datos personales no podrán
              ser obtenidos o divulgados sin previa autorización, o en ausencia
              de mandato legal o judicial que releve el consentimiento.
            </li>
            <li>
              <span className={style.bold}>
                Principio de Veracidad o Calidad:&nbsp;
              </span>
              La información sujeta a tratamiento debe ser veraz, completa,
              exacta, actualizada, comprobable y comprensible. Se prohíbe el
              tratamiento de datos parciales, incompletos, fraccionados o que
              induzcan a error.
            </li>
            <li>
              <span className={style.bold}>Principio de Transparencia: </span>
              En el tratamiento debe garantizarse el derecho del Titular a
              obtener del Responsable de dicho tratamiento o del Encargado, en
              cualquier momento y sin restricciones, información acerca de la
              existencia de datos que le concierne.
            </li>
            <li>
              <span className={style.bold}>
                Principio de Acceso y Circulación Restringida:&nbsp;
              </span>
              El tratamiento se sujeta a los límites que se derivan de la
              naturaleza de los datos personales y de las disposiciones
              constitucionales y legales. En este sentido, el tratamiento sólo
              podrá hacerse por personas autorizadas por el Titular y/o por las
              personas previstas en la Ley. Los datos personales, salvo la
              información pública, no podrán estar disponibles en Internet u
              otros medios de divulgación o comunicación masiva, salvo que el
              acceso sea técnicamente controlable para brindar un conocimiento
              restringido sólo a los Titulares o terceros autorizados conforme a
              la citada ley.
            </li>
            <li>
              <span className={style.bold}>Principio de Seguridad: </span>
              La información sujeta a tratamiento por el Responsable del
              Tratamiento o Encargado del tratamiento a que se refiere la ley se
              deberá manejar con las medidas técnicas, humanas y administrativas
              que sean necesarias para otorgar seguridad a los registros, y
              evitar su adulteración, pérdida, consulta, uso o acceso no
              autorizado o fraudulento.
            </li>
            <li>
              <span className={style.bold}>
                Principio de Confidencialidad:&nbsp;
              </span>
              Todas las personas que intervengan en el tratamiento de datos
              personales que no tengan la naturaleza de públicos están obligadas
              a garantizar la reserva de la información, inclusive después de
              finalizada su relación con alguna de las labores que comprende el
              tratamiento, pudiendo sólo realizar suministro o comunicación de
              datos personales cuando ello corresponda al desarrollo de las
              actividades autorizadas en la Ley y en los términos de la misma.
            </li>
          </ul>
        </p>
      </Paragraph>
      <Paragraph title="Tratamiento y finalidad" id="tratamientofinalidad">
        <>
          <p>
            El tratamiento que realizará GENTEM con la información personal
            puede involucrar datos personales:
            <br />
            <ol>
              <li>De naturaleza pública</li>
              <li>
                Datos privados, semiprivados con previa autorización del titular
              </li>
              <li>
                Datos sensibles, con previa autorización del titular y
                exponiendo el carácter facultativo que le asiste
              </li>
              <li>
                Datos de los menores de edad mediante autorización previa, clara
                y expresa de sus representantes legales, previo el ejercicio del
                menor de su derecho a ser escuchado
              </li>
            </ol>
            <br />
            El tratamiento involucra la recolección, almacenamiento, uso,
            circulación, para:
            <ol>
              <li>
                Efectuar las gestiones pertinentes para el desarrollo del objeto
                social de GENTEM en lo que tiene que ver con el cumplimiento del
                objeto del contrato celebrado o relación comercial con el
                Titular de la información.
              </li>
              <li>
                Realizar invitaciones a eventos y ofrecer nuevos productos y
                servicios.
              </li>
              <li>Gestionar trámites (solicitudes, quejas, reclamos).</li>
              <li>
                Efectuar encuestas de satisfacción respecto de los bienes y
                servicios ofrecidos por GENTEM.
              </li>
              <li>
                Suministrar información de contacto a la fuerza comercial,
                telemercadeo, investigación de mercados y cualquier tercero con
                el cual GENTEM tenga un vínculo contractual para el desarrollo
                de actividades de ese tipo (investigación de mercados y
                telemercadeo, etc.) para la ejecución de las mismas.
              </li>
              <li>
                Contactar al Titular a través de medios telefónicos para
                realizar encuestas, estudios y/o confirmación de datos
                personales necesarios para la ejecución de una relación
                comercial.
              </li>
              <li>
                Contactar al Titular a través de medios electrónicos – SMS o
                chat para el envío de noticias relacionadas con campañas de
                fidelización o mejora de servicio.
              </li>
              <li>
                Contactar al Titular a través de correo electrónico para el
                envío de extractos, estados de cuenta o facturas en relación con
                las obligaciones derivadas del contrato celebrado entre las
                partes.
              </li>
              <li>
                Transmitir los datos personales a terceros con los cuales GENTEM
                haya suscrito un contrato de procesamiento de datos y sea
                necesario entregársela para el cumplimiento del objeto
                contractual.
              </li>
              <li>
                Prestar los servicios ofrecidos por GENTEM y aceptados en el
                contrato suscrito.
              </li>
              <li>
                Suministrar la información a terceros con los cuales GENTEM
                tenga relación contractual y que sea necesario entregársela para
                el cumplimiento del objeto contratado.
              </li>
              <li>
                Las demás finalidades que sean informadas por GENTEM al titular
                de los datos personales a través de la Autorización de
                Tratamiento de Datos Personales.
              </li>
            </ol>
          </p>
          <p>
            GENTEM restringe el tratamiento de datos personales sensibles y de
            los menores de edad a lo estrictamente indispensable y solicita
            consentimiento previo y expreso a los titulares (representantes
            legales, apoderados, causahabientes) informando sobre la finalidad
            exclusiva de su tratamiento.
          </p>
          <p>
            Los datos recolectados serán tratados para cumplir con la finalidad
            de efectuar las gestiones pertinentes para el desarrollo del objeto
            social de GENTEM en lo que tiene que ver con el cumplimiento del
            objeto del contrato celebrado con el Titular de la información.
          </p>
        </>
      </Paragraph>
      <Paragraph title="Despliegue" id="despliegue">
        <p>
          Oficial de Protección de Datos: En cumplimiento del deber legal
          consagrado en el artículo 17 de la ley 1581 de 2012, relativo a la
          necesidad de asignar unas responsabilidades directas a un sujeto
          dentro de la Organización, esta será a cargo del área jurídica de la
          empresa, quien tomará todas las acciones pertinentes para el efectivo
          cumplimiento de la Política de Protección de Datos Personales.
        </p>
      </Paragraph>
      <Paragraph
        title="Privilegios y derechos de los titulares"
        id="privilegiosyderechos"
      >
        <p>
          <ol>
            <li>
              Acceder de forma gratuita a los datos proporcionados que hayan
              sido objeto de tratamiento.
            </li>
            <li>
              Conocer, actualizar y rectificar su información frente a datos
              parciales, inexactos, incompletos, fraccionados, que induzcan a
              error, o aquellos cuyo tratamiento esté prohibido o no haya sido
              autorizado.
            </li>
            <li>
              Por cualquier medio válido, solicitar prueba de la existencia de
              la autorización otorgada a GENTEM, salvo los casos en los que la
              Ley exceptúa la autorización.
            </li>
            <li>
              Recibir información por parte de GENTEM, previa solicitud,
              respecto del uso que le ha dado a sus datos personales.
            </li>
            <li>
              Acudir ante la Superintendencia de Industria y Comercio (SIC) y
              presentar quejas por infracciones a lo dispuesto en la normativa
              vigente, previo trámite de consulta o requerimiento ante el
              Responsable del tratamiento.
            </li>
            <li>
              Modificar o revocar la autorización y/o solicitar la supresión de
              los datos personales cuando en el tratamiento no se respeten los
              principios, derechos y garantías previstos en la normativa vigente
              en materia de protección de datos personales.
            </li>
            <li>
              Tener conocimiento y acceder en forma gratuita a sus datos
              personales que hayan sido objeto de tratamiento.
            </li>
            <li>
              Abstenerse de responder las preguntas sobre datos sensibles.
              Tendrá carácter facultativo las respuestas que versen sobre datos
              sensibles o sobre datos de las niñas y niños y adolescentes.
            </li>
          </ol>
        </p>
      </Paragraph>

      <Paragraph
        title="Mecanismos y procedimientos para ejercer los derechos de consulta y reclamo"
        id="mecanismosyprocedimientos"
      >
        <p>
          <ol>
            <li>
              Las consultas o reclamos relacionadas con los derechos de los
              titulares sobre datos personales se deben realizar mediante un
              correo electrónico dirigido al correo electrónico
              admin@gentem.org, adjuntando fotocopia del documento de identidad
              del Titular interesado.
            </li>
            <li>
              El Titular podrá consultar sus datos personales en cualquier
              momento. Para tal fin, podrá elevar una solicitud indicando la
              información que desea conocer, a través de cualquiera de los
              mecanismos arriba señalados.
            </li>
            <li>
              El Titular o sus causahabientes deberán acreditar su identidad, la
              de su representante, la representación o estipulación a favor de
              otro o para otro. Cuando la solicitud sea formulada por persona
              distinta del Titular y no se acredite que la misma actúa en
              representación de aquél, se tendrá por no presentada.
            </li>
            <li>
              La consulta y/o petición debe contener como mínimo el nombre y
              dirección de contacto del Titular o cualquier otro medio para
              recibir la respuesta, así como una descripción clara y precisa de
              los datos personales respecto de los cuales el Titular busca
              ejercer el derecho de consulta y/o petición.
            </li>
            <li>
              Si la consulta y/o petición realizada por el Titular del dato
              resulta incompleta, GENTEM requerirá al interesado dentro de los
              ocho (8) días hábiles siguientes a la recepción de la consulta y/o
              petición para que subsane las fallas.
            </li>
            <li>
              Transcurrido un (1) mes desde la fecha del requerimiento, sin que
              el solicitante presente la información requerida, se entenderá que
              ha desistido de su consulta.
            </li>
            <li>
              Las peticiones y/o consultas serán atendidas por GENTEM en un
              término máximo de quince (15) días hábiles contados a partir de la
              fecha de recibo de la misma. Cuando no fuere posible atender la
              petición o consulta dentro de dicho término, este hecho se
              informará al solicitante, expresando los motivos de la demora y
              señalando la fecha en que se atenderá su petición consulta, la
              cual en ningún caso podrá superar los cinco (5) días hábiles
              siguientes al vencimiento del primer término.
            </li>
            <li>
              Cuando el Titular o sus causahabientes consideren que la
              información tratada por GENTEM deba ser objeto de corrección,
              actualización o supresión, o cuando deba ser revocada por
              advertirse el presunto incumplimiento de cualquiera de los deberes
              contenidos en la normativa vigente, podrán presentar una solicitud
              la cual será tramitada bajo las siguientes reglas:
              <ol>
                <li>
                  Si la solicitud se presenta incompleta, GENTEM deberá requerir
                  al interesado dentro de los ocho (8) días siguientes a su
                  recepción para que subsane las fallas. Transcurrido un (1) mes
                  desde la fecha del requerimiento, sin que el solicitante
                  presente la información requerida, se entenderá que ha
                  desistido de su solicitud.
                </li>
                <li>
                  En caso de que quien reciba la solicitud no sea competente
                  para resolverlo, dará traslado al área de Legal de GENTEM, en
                  un término máximo de dos (2) días hábiles e informará de la
                  situación al interesado.
                </li>
                <li>
                  Una vez recibida la solicitud, se incluirá una leyenda que
                  diga &quot;reclamo en trámite&quot; y el motivo del mismo, en
                  un término no mayor a dos (2) días hábiles. Dicha leyenda
                  deberá mantenerse hasta que ésta sea decidida.
                </li>
                <li>
                  El término máximo para atender esta solicitud será de quince
                  (15) días hábiles contados a partir del día siguiente a la
                  fecha de su recibo. Cuando no fuere posible atenderla dentro
                  de dicho término, se informará al interesado sobre los motivos
                  de la demora y la fecha en que se atenderá su reclamo, la cual
                  en ningún caso podrá superar los ocho (8) días hábiles
                  siguientes al vencimiento del primer término.
                </li>
                <li>
                  La solicitud de supresión de la información y la revocatoria
                  de la autorización de tratamiento de datos personales no
                  procederán cuando el titular tenga un deber legal o
                  contractual de conservar su información en GENTEM.
                </li>
              </ol>
            </li>
          </ol>
        </p>
      </Paragraph>
      <Paragraph title="Vigencia y actualización" id="vigenciayactualizacion">
        <>
          <p>
            La presente Política entra en vigencia a partir de su actualización
            y publicación en la plataforma.
          </p>
          <p>
            Se articularán las acciones conducentes a la protección de datos
            personales, el cual realizará revisiones periódicas de la correcta
            ejecución de la Política de manera conjunta con el Oficial de
            Protección de Datos de la Compañía.
          </p>
          <p>
            Los datos personales se conservarán por el tiempo en que se mantenga
            y utilice la información para las finalidades descritas en esta
            Política. Una vez se cumplan esas finalidades y siempre que no
            exista un deber legal o contractual de conservar su información, sus
            datos serán eliminados.
          </p>
          <p>
            Es un deber de los trabajadores de GENTEM, conocer esta Política y
            realizar todos los actos conducentes para su cumplimiento,
            implementación y mantenimiento.
          </p>
        </>
      </Paragraph>
    </div>
  )
}

export default PrivacityContent
