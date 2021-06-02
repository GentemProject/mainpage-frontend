import Link from 'next/link'
import style from '../style.module.scss'
import Paragraph from 'components/specific/others/paragraph'
import Banner from 'components/specific/others/banner'
function TermsConditionContent() {
  return (
    <div className={style.content}>
      <Banner title="Privacidad" />
      <Paragraph title="Introducción" id="introduccion">
        <p>
          Bienvenido a esta plataforma (el &quot;sitio&quot;) de propiedad de la
          organización <span className={style.bold}>GENTEM</span> (en adelante
          GENTEM). GENTEM ofrece la plataforma como servicio a sus visitantes de
          acuerdo con los siguientes términos y condiciones de uso de la
          plataforma:
        </p>
      </Paragraph>
      <Paragraph title="Primero" id="Primero">
        <p>
          Al utilizar la plataforma, se entenderá que acepta los términos de uso
          aquí establecidos. En caso de no estar de acuerdo con los términos de
          uso, le recomendamos no utilizar los servicios.
        </p>
      </Paragraph>
      <Paragraph title="Segundo" id="segundo">
        <p>
          GENTEM se reserva el derecho a modificar el contenido de la plataforma
          y términos de uso en cualquier momento sin previo aviso, por lo que le
          recomendamos consultar con regularidad los términos de uso para estar
          al tanto de los distintos cambios que se puedan efectuar.
        </p>
      </Paragraph>
      <Paragraph title="Tercero" id="tercero">
        <p>
          GENTEM le brinda a los usuarios los recursos técnicos adecuados para
          que de manera previa, puedan acceder a este reglamento sobre la
          Política de Privacidad o cualquier otra información relevante y puedan
          prestar su consentimiento libremente. Salvo en los campos en que se
          indique lo contrario, las respuestas a las preguntas sobre datos
          personales son voluntarias, sin que la falta de contestación implique
          una merma en la calidad o cantidad de los servicios correspondientes,
          a menos que se indique otra cosa.
        </p>
      </Paragraph>
      <Paragraph
        title="Uso del contenido de la plataforma"
        id="usodelcontenido"
      >
        <p>
          Es posible ver, descargar e imprimir contenido de la plataforma de
          acuerdo a las siguientes condiciones:
          <br />
          <ol>
            <li>
              El contenido se debe utilizar con el único propósito de obtener
              información
            </li>
            <li>
              El contenido no se debe modificar ni alterar en modo alguno. No se
              puede volver a publicar, distribuir, preparar trabajos derivados
              ni utilizar el contenido de ningún otro modo que no sea el
              permitido explícitamente en el presente documento.
            </li>
            <li>
              No se permite enmarcar ni utilizar técnicas de enmarcado para
              incluir marcas comerciales, logotipos u otra información de
              propiedad (incluidas imágenes, textos, diseños de página o
              formularios) de GENTEM sin el consentimiento expreso y por escrito
              de este. Se prohíbe el uso de códigos meta u otro tipo de
              &quot;texto oculto&quot; que incorpore las marcas comerciales o el
              nombre de GENTEM sin el consentimiento expreso y por escrito de
              este. Se prohíbe utilizar logotipos, marcas comerciales o
              cualquier otro gráfico de propiedad de GENTEM como parte de un
              enlace sin permiso expreso y por escrito.
            </li>
            <li>
              Usted no adquiere ningún tipo de derecho de propiedad sobre el
              contenido de la plataforma. En caso de que se realice un uso no
              autorizado, se dará por finalizado el permiso o la licencia
              concedida por GENTEM.
            </li>
          </ol>
        </p>
      </Paragraph>
      <Paragraph
        title="Revisiones, comentarios, comunicaciones y otros contenidos"
        id="revisionesymas"
      >
        <p>
          Es posible enviar comentarios y proporcionar otros contenidos siempre
          que no sean obscenos, ilegales, intimidatorios o difamatorios y
          siempre que no invadan la privacidad ni infrinjan la propiedad
          intelectual de un tercero. Asimismo, estos contenidos no podrán
          incorporar virus informáticos, mensajes masivos, cartas en cadena ni
          ninguna otra forma de &quot;correo basura&quot;. No se podrán utilizar
          direcciones de correo electrónico falsas, suplantar a otras personas o
          entidades o mentir de cualquier otro modo acerca del origen de la
          información.
          <br />
          Al enviar la información, se concede a GENTEM el derecho para
          reproducir, utilizar, modificar, publicar, adaptar, traducir, crear
          trabajos derivados, distribuir y mostrar dicho contenido por todo el
          mundo y en cualquier soporte. Se trata de un derecho no exclusivo,
          exento de derechos de autor, perceptivo, irrevocable y del que se
          pueden conceder sublicencias. Asimismo, al enviar la información
          declara y garantiza que el contenido es preciso; que posee o tiene
          permiso para utilizar el contenido que ha enviado; y que el uso de
          dicho contenido no causará ningún tipo de daño a ninguna persona o
          entidad.
        </p>
      </Paragraph>

      <Paragraph
        title="Información sobre derechos de autor"
        id="derechosdeautor"
      >
        <p>
          La plataforma y el contenido incluido en esta son propiedad de GENTEM
          y están protegidos por las normas jurídicas de derechos de autor de
          Colombia y la Comunidad Andina de Naciones y por las disposiciones de
          tratados internacionales. La compilación, organización y publicación
          del contenido, así como el software y las invenciones utilizadas en
          este sitio y en relación a este sitio son propiedad exclusiva de
          GENTEM. GENTEM se reserva cualquier derecho con respecto a la
          plataforma y su contenido que no se haya concedido específicamente en
          ningún acuerdo con GENTEM ni en los términos de uso.
        </p>
      </Paragraph>
      <Paragraph
        title="Información sobre marcas comerciales"
        id="marcascomerciales"
      >
        <p>
          GENTEM es una marca comercial registrada por GENTEM en Colombia y en
          otros países. El resto de marcas, gráficos, logotipos, encabezados de
          página, iconos de botones y secuencias de comandos que aparecen en la
          plataforma pertenecen única y exclusivamente a KANTARCT. La marca
          GENTEM no se deben utilizar de ningún modo que pueda causar confusión
          entre los clientes o que pueda menospreciar o desacreditar la marca ni
          en conexión con ningún servicio o producto que no haya sido
          patrocinado, aprobado o producido por GENTEM. El resto de marcas
          comerciales que no sean propiedad de GENTEM que aparezcan en la
          plataforma pertenecen a sus respectivos propietarios.
        </p>
      </Paragraph>
      <Paragraph
        title="Políticas de privacidad y protección de datos personales"
        id="datospersonales"
      >
        <p>
          Como consecuencia de nuestro respeto al derecho de privacidad, hemos
          desarrollado una política de privacidad y protección de datos
          personales para informarle acerca de nuestras prácticas. Consulte la
          política
          <Link href="/util/privacidad">
            <a> aquí</a>
          </Link>
          .
        </p>
      </Paragraph>
      <Paragraph
        title="Información y sitios Web de terceros"
        id="websdeterceros"
      >
        <p>
          La plataforma puede ofrecer hipervínculos o acceso a sitios Web y
          contenidos de otras personas o entidades. GENTEM no controla, refrenda
          ni garantiza el contenido incluido en dichos sitios. Usted acepta que
          GENTEM no es responsable de ningún contenido, enlace asociado, recurso
          o servicio relacionado con el sitio de un tercero. Asimismo, acepta
          que GENTEM no será responsable de ninguna pérdida o daño de cualquier
          tipo que se derive del uso que se realice de los contenidos de un
          tercero. Los enlaces y el acceso a estos sitios se proporcionan
          exclusivamente para su comodidad.
        </p>
      </Paragraph>
      <Paragraph title="Indemnización" id="indemnizacion">
        <p>
          Acepta defender, indemnizar y eximir de toda responsabilidad a GENTEM,
          sus empleados y agentes (los &quot;indemnizados&quot;) frente a
          cualquier reclamación, gasto, responsabilidad, pérdida, coste y daño,
          incluidos los honorarios de los abogados, en el que incurran los
          indemnizados (i) en relación con un uso del sitio o cualquiera de los
          sitios Web con hipervínculos en la plataforma que no está permitido o
          que no se ajuste a los fines perseguidos por GENTEM o (ii) que se
          derive del contenido que usted ha proporcionado.
        </p>
      </Paragraph>
      <Paragraph title="Renuncia de Garantías" id="renunciadegarantias">
        <>
          <p>
            El uso de la plataforma es bajo su propio riesgo, salvo que
            expresamente se establezca otra cosa. la plataforma, incluidos los
            servicios, los contenidos y la información es entregada tal y como
            está disponible y con posibles defectos. GENTEM expresamente excluye
            toda condición expresa o implícita, y garantías de cualquier tipo.
            <br />
            <br />
            GENTEM no se pronuncia, ni garantiza, la calidad, conveniencia,
            veracidad, exactitud o integridad de ninguno de los contenidos
            disponibles en la plataforma de GENTEM.
          </p>
          <p>
            GENTEM no garantiza que:
            <br />
            <ol>
              <li>
                La plataforma funcionará ininterrumpidamente o libre de error
              </li>
              <li>
                Las condiciones de uso de los productos, servicios, contenidos,
                informaciones u otro material comprado u obtenido a través de la
                plataforma colmará sus expectativas
              </li>
              <li>Cualquier error en la plataforma será corregido</li>
            </ol>
          </p>
          <p>
            El usuario de la plataforma asume todo riesgo con respecto a
            cualquier daño o pérdida de datos que pueda sufrir su sistema
            informático consecuencia de la obtención de cualquier contenido
            desde la plataforma, incluyendo cualquier daño derivado de virus
            informáticos.
          </p>
        </>
      </Paragraph>
      <Paragraph title="Legislación aplicable" id="legislacionaplicable">
        <p>
          Todos los asuntos relacionados con el acceso al sitio y su uso se
          regirán por lo establecido en la DPC de GENTEM y por la legislación de
          Colombia. Cualquier medida o acción legal en relación con el acceso o
          el uso de la plataforma deberá remitirse a la solución de
          controversias establecida en la DPC. En el caso de que se determine
          que cualquiera de las disposiciones de estos términos de uso no es
          válida o aplicable, dicha determinación no afectará al resto de
          términos de uso y se realizarán las enmiendas mínimas necesarias para
          que los términos de uso sean válidos y aplicables.
        </p>
      </Paragraph>
      <Paragraph title="Información de contacto" id="infocontacto">
        <p>
          Si tiene cualquier duda acerca de estos términos de uso, póngase en
          contacto con GENTEM en la dirección XXXXXX
        </p>
      </Paragraph>
    </div>
  )
}

export default TermsConditionContent
