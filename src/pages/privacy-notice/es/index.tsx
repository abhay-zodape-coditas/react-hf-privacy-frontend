import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getModifiedFileName } from "../../../common/utils/helper";
import Footer from "../../../components/footer";
import LanguageSelector from "../../../components/languageSelector";
import PageHeader from "../../../components/pageHeader";
import { LanguageContext } from "../../../hoc/languageProvider";
import styles from "../privacyPolicy.module.scss";

const PrivacyPolicyPageEs = () => {
  const { localString } = useContext(LanguageContext);
  return (
    <>
      <PageHeader />
      <Container>
        <LanguageSelector styleProps={styles} privacyPage={true} />
      </Container>
      <Container className={styles["outerContainer"]}>
        <Row>
          <Col className={styles["container"]}>
            <h2 className={styles["title"]}>
              HYDRAFACIAL{" "}
              <strong className={styles["fontWeightExtraBold"]}>
                privacidad
              </strong>{" "}
              aviso
            </h2>

            <em className={styles["updatedOn"]}>
              Este Aviso de Privacidad se actualizó por última vez el
              24/02/2023.{" "}
            </em>

            <p>
              Este Aviso de Privacidad, que se aplica a todos los productos y
              servicios de Hydrafacial, le ayudará a entender cómo recogemos,
              utilizamos y protegemos sus Datos Personales.
            </p>
            <p>
              Fecha de publicación de la NP Es posible que de vez en cuando
              tengamos que realizar cambios en este Aviso de Privacidad. Cuando
              consideremos que usted no puede esperar razonablemente un cambio
              de este tipo, le comunicaremos las modificaciones más importantes,
              por ejemplo, publicando un aviso en nuestros sitios web o
              enviándole un correo electrónico (si nos ha informado del mismo)
              si así lo exige la legislación aplicable. Puede comprobar cuándo
              se ha producido la última actualización de este Aviso de
              Privacidad consultando la fecha que figura en este espacio. Le
              recomendamos encarecidamente que consulte periódicamente este
              Aviso de Privacidad.
            </p>
            <div className={styles["summary"]}>
              <h3 className={styles["summaryTitle"]}>
                VISIÓN GENERAL DE NUESTRO AVISO DE PRIVACIDAD
              </h3>
              <ol>
                <li>
                  <strong>Nuestro compromiso.</strong> En Hydrafacial, nos
                  comprometemos a proteger sus Datos Personales, siempre le
                  trataremos con respeto y diseñaremos nuestros productos y
                  servicios teniendo en cuenta su privacidad.
                </li>
                <li>
                  {" "}
                  <strong>Los datos que recopilamos. </strong> Para poder
                  ofrecerle nuestros productos o servicios, necesitaremos tratar
                  sus datos personales, como sus datos de contacto, la
                  información de su cuenta, el historial de tratamiento, los
                  datos de pago, identificadores de máquina o información sobre
                  el modo en que interactúa con nosotros.
                </li>
                <li>
                  {" "}
                  <strong>Cómo recopilamos sus datos. </strong> Recogeremos
                  datos sobre usted, sobre el uso que hace de nuestros servicios
                  y de fuentes externas.
                </li>
                <li>
                  {" "}
                  <strong>Cómo utilizamos sus datos. </strong> El tratamiento de
                  sus datos puede obedecer a diversos motivos jurídicos. El
                  tratamiento de sus datos se puede basar en su
                  <strong> consentimiento </strong>
                  (como para crear una cuenta), la{" "}
                  <strong>firma de un contrato </strong>(como en el servicio de
                  atención al cliente), una
                  <strong> obligación legal </strong>(como para ejercer sus
                  derechos o atender una reclamación) o nuestro interés legítimo
                  (como para algunas actividades de marketing o para la
                  prevención del fraude).
                </li>
                <li>
                  {" "}
                  <strong>Compartir datos. </strong> Compartimos sus datos
                  principalmente con proveedores de servicios que nos prestan
                  asistencia y apoyo, que son empresas del Grupo Hydrafacial o
                  terceros proveedores.
                </li>
                <li>
                  {" "}
                  <strong>Protección de datos. </strong>Procuramos aplicar las
                  medidas técnicas y organizativas adecuadas para proteger sus
                  Datos Personales contra la destrucción accidental o ilícita,
                  la pérdida accidental o la alteración, la comunicación o el
                  acceso no autorizados y cualquier otra forma ilícita de
                  tratamiento.
                </li>
                <li>
                  {" "}
                  <strong>¿Cuánto tiempo conservamos sus datos? </strong>No
                  trataremos sus Datos Personales durante más tiempo del
                  necesario ni para fines distintos de aquellos para los que se
                  recogieron.
                </li>
                <li>
                  {" "}
                  <strong>Privacidad infantil. </strong>No recogemos
                  conscientemente ninguna información personal de niños menores
                  de 13 años.
                </li>
                <li>
                  {" "}
                  <strong>Enlaces a otros sitios web. </strong> No asumimos
                  responsabilidad alguna por los sitios web a los que
                  proporcionamos enlaces.
                </li>
                <li>
                  {" "}
                  <strong>Sus derechos. </strong> Usted puede tener ciertos
                  derechos relacionados con sus Datos Personales en función de
                  su ubicación conforme a la legislación local aplicable (por
                  ejemplo, el derecho a que se le informe; el derecho de acceso;
                  el derecho de rectificación; el derecho de supresión; el
                  derecho de oposición). Más adelante encontrará información
                  adicional para los consumidores de Estados Unidos.
                </li>
              </ol>
              <p>
                Le recomendamos que lea nuestro Aviso de Privacidad completo y
                la &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/es/${localString?.["cookiePolicy"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Cookies
                </a>
                &nbsp; cuyo enlace figura a continuación para comprender en
                profundidad la forma en que utilizaremos sus Datos Personales y
                los derechos que tiene sobre ellos.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Nuestro compromiso</h3>
              <p>
                En Hydrafacial, nos comprometemos a proteger sus Datos
                Personales, siempre le trataremos con respeto y diseñaremos
                nuestros productos y servicios teniendo en cuenta su privacidad.
              </p>
              <p>
                Hydrafacial es una marca insignia de The Beauty Health Company
                (en adelante "Hydrafacial", "nuestro", "nos" o "nosotros").
                Hydrafacial es una empresa global creadora de categorías
                centrada en ofrecer experiencias de salud y belleza reinventando
                la relación de nuestros consumidores con su piel, su cuerpo y su
                autoestima.
              </p>
              <p>
                Nuestra marca insignia, Hydrafacial, creó la categoría de la
                hidradermabrasión utilizando un sistema de administración
                Vortex-Fusion para limpiar, exfoliar, extraer, infundir e
                hidratar la piel con soluciones y sueros patentados.
              </p>
              <p>
                Este Aviso de Privacidad cubre los Datos Personales que
                recopilan y tratan a través de diferentes medios Hydrafacial,
                sus subsidiarias y filiales ubicadas en todo el mundo que
                pertenecen al grupo de empresas de The Beauty Health Company
                ("Afiliadas").
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Definiciones</h3>
              <p>
                “Información Personal o Datos Personales” se refiere a la
                información que, de forma aislada o combinada, permite
                identificarle directa o indirectamente.{" "}
              </p>
              <p>
                “Responsable del Tratamiento” es la parte que establece los
                fines y medios del tratamiento de datos personales.
              </p>
              <p>
                “Encargado del Tratamiento o Proveedor de
                Servicios/Contratista/Tercero” es una parte que trata los Datos
                Personales en nombre del Responsable del Tratamiento.
              </p>
              <p>
                “Cliente o Consumidor” persona física que recibe un tratamiento
                Hydrafacial.
              </p>
              <p>
                “Proveedor de Tratamiento” profesional que realiza un
                tratamiento Hydrafacial.
              </p>
              <p>
                “Proveedor o Cliente” clínica o centro que proporciona
                tratamientos de Hydrafacial.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Los datos que recopilamos
              </h3>
              <p>
                Para poder ofrecerle nuestros productos o servicios,
                necesitaremos tratar sus datos personales. Los datos personales
                que recopilamos sobre usted pueden ser los siguientes, entre
                otros:
              </p>
              <ul>
                <li>
                  Sus datos de contacto, como su nombre y apellidos, dirección
                  física y de correo electrónico, número(s) de teléfono, nombre
                  y datos de la clínica/centro (cuando se trata de un
                  esteticista, también el nombre de su empresa o empleador,
                  dirección y número de teléfono para poder trabajar con usted).
                </li>
                <li>
                  La información de su cuenta, como su dirección de correo
                  electrónico, nombre completo, nombre de usuario y contraseña,
                  número de teléfono, fecha de nacimiento, código postal e
                  imagen personal cuando nos lo proporcione al crear una cuenta.
                </li>
                <li>
                  La información de su CV y los datos que nos haya facilitado
                  durante el proceso de contratación.
                </li>
                <li>
                  Su historial de tratamiento*, como el tipo de tratamiento
                  recibido, cualquier ajuste adicional y los productos
                  utilizados (si procede) cuando tenga una cuenta Hydrafacial.
                </li>
                <li>
                  Su información de pago o datos bancarios para realizar pedidos
                  de compra.
                </li>
                <li>
                  Los identificadores de máquina incluyen: su dirección IP,
                  sistema operativo, dispositivo y ubicación cuando utiliza
                  nuestros servicios en línea.
                </li>
                <li>
                  Información sobre su forma de interactuar con nosotros,
                  nuestros sitios web y nuestros servicios.
                </li>
              </ul>
              <p>
                {" "}
                *Se ofrece a los consumidores la opción de compartir su
                historial de tratamiento con el proveedor del mismo. Del mismo
                modo, al utilizar un dispositivo de Hydrafacial, los proveedores
                de tratamiento podrán sincronizar su cuenta de la aplicación con
                el dispositivo para contar con un registro del historial de
                tratamiento de los proveedores. Los proveedores de tratamiento
                verán los datos agregados de los tratamientos que han realizado.
                No se vincula ningún Dato Personal a los tratamientos a los que
                el proveedor de tratamiento puede acceder.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Cómo recopilamos sus datos
              </h3>
              <p>
                Recogeremos datos sobre usted, sobre el uso que hace de nuestros
                servicios y de fuentes externas (por ejemplo, fuentes de acceso
                público).
              </p>
              <p>Recopilaremos sus datos personales cuando:</p>
              <ul>
                <li>
                  Se registra para recibir información sobre nuestros productos
                  u otros servicios.
                </li>
                <li>
                  Interactúa con nosotros o realiza consultas, incluso a través
                  de las redes sociales.
                </li>
                <li>Realiza una compra.</li>
                <li>Utiliza nuestros productos o servicios.</li>
                <li>Crea o actualiza su cuenta.</li>
                <li>Utiliza las funciones de la aplicación Hydrafacial.</li>
                <li>
                  Es usted solicitante de empleo o está en proceso de
                  contratación.
                </li>
                <li>Responde a comunicaciones o encuestas.</li>
                <li>
                  Navega por nuestro sitio web o consulta nuestros servicios en
                  línea.
                </li>
              </ul>
              <p>
                Recopilamos datos sobre usted utilizando tecnologías como
                cookies y fingerprinting, es decir, técnicas que se emplean para
                combinar información que nos ayudan a identificar su
                dispositivo.
              </p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>
                Usted puede aceptar o rechazar las cookies de cualquier sitio
                web modificando la configuración del navegador. Si desea
                restringir o bloquear las cookies que instala nuestro sitio web,
                puede hacerlo a través de la configuración del navegador. Para
                obtener información sobre cómo gestionar y desactivar las
                cookies, puede utilizar la función "Ayuda" del navegador o
                consultar{" "}
                {
                  <a
                    href={"https://www.aboutcookies.org/ "}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    https://www.aboutcookies.org/
                  </a>
                }{" "}
                o{" "}
                {
                  <a
                    href={"https://www.allaboutcookies.org/"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    https://www.allaboutcookies.org/{" "}
                  </a>
                }
                . No obstante, tenga en cuenta que la eliminación o
                desactivación de las cookies podría afectar a la funcionalidad
                de nuestro sitio web y puede que le impida acceder a
                determinadas áreas o características del mismo.
              </p>
              <p>
                Si desea información sobre cómo utilizamos las cookies y otros
                dispositivos similares que se puedan instalar en los terminales
                de nuestros clientes y usuarios, le recomendamos que consulte
                nuestra &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/es/${localString?.["cookiePolicy"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Política de Cookies
                </a>
                .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Cómo utilizamos sus datos
              </h3>
              <p>
                Sus datos se podrían utilizar por diversos motivos con arreglo a
                distintos fundamentos jurídicos, como lo siguientes:
              </p>
              <ul>
                <li>
                  Ponernos en contacto con usted para facilitarle la información
                  solicitada, basado en su consentimiento.
                </li>
                <li>
                  Procesar su pago para pedidos y para fines comerciales y
                  contables, basado en una obligación legal o para ejecutar un
                  contrato.
                </li>
                <li>
                  Proporcionar servicio al cliente, basado en una obligación
                  legal o en el cumplimiento de un contrato.
                </li>
                <li>
                  Tramitar su solicitud para realizar operaciones comerciales
                  con nosotros, basándonos en su consentimiento.
                </li>
                <li>
                  Creación, actualización, asistencia y gestión de cuentas,
                  basado en el consentimiento y la ejecución de un contrato.
                </li>
                <li>
                  Mantenerle informado sobre promociones y novedades por correo
                  electrónico, teléfono, SMS, redes sociales o correo postal, e
                  invitarle por correo electrónico/SMS a crear una cuenta cuando
                  utilice nuestros productos o servicios (en función de sus
                  preferencias), basado en el consentimiento o el interés
                  legítimo, cuando proceda.
                </li>
                <li>
                  Proporcionarle a usted y a otros clientes información
                  pertinente a través de nuestro programa de marketing, basado
                  en el interés legítimo.
                </li>
                <li>
                  Examinar su perfil profesional y su experiencia cuando
                  solicite un empleo y durante el proceso de contratación para
                  elegir al candidato adecuado.
                </li>
                <li>
                  Realizar estudios de mercado, desarrollar productos y con
                  fines estadísticos, basados en un interés legítimo.
                </li>
                <li>
                  Detectar y prevenir el fraude, acceso no autorizado a los
                  productos o servicios y otras actividades ilegales, basado en
                  un interés legítimo.
                </li>
                <li>
                  Gestionar el cobro de deudas, basado en un interés legítimo.
                </li>
                <li>
                  Realizar una evaluación y análisis que nos permitan revisar,
                  desarrollar y mejorar los servicios que ofrecemos, basado en
                  un interés legítimo.
                </li>
              </ul>
              <p>
                Como hemos dicho, a veces necesitamos utilizar sus datos
                personales con fines comerciales legítimos para asegurarnos de
                que seguimos ofreciendo una excelente experiencia al cliente. En
                todos los casos, siempre mantendremos un equilibrio entre
                nuestros intereses y los suyos.
              </p>
              <p>
                Los procesos que se indican a continuación se consideran
                ejemplos de nuestro interés legítimo:
              </p>
              <ul>
                <li>
                  Detección y prevención del fraude a través de Hydrafacial, que
                  puede suponer, entre otros, realizar comprobaciones con la
                  información de dominio público con la que se cuente y los
                  perfiles de las redes sociales.
                </li>
                <li>
                  Interactuar y ponernos en contacto con usted para asegurarnos
                  de que su experiencia como cliente de Hydrafacial sea
                  positiva.
                </li>
                <li>
                  Realizar una auditoría interna de nuestros procesos para
                  mantener un alto nivel de calidad.
                </li>
                <li>
                  Llevar a cabo algunas de nuestras actividades de marketing.
                </li>
                <li>
                  Compartir datos con determinadas terceras partes para añadir
                  valor a nuestros productos.
                </li>
              </ul>
              <p>
                Hydrafacial puede ponerse en contacto con usted de forma
                ocasional para pedirle que participe en encuestas, con el fin de
                permitirnos revisar, desarrollar y mejorar nuestros servicios.
              </p>
              <p>
                Hydrafacial únicamente utilizará sus respuestas a la encuesta,
                como cualquier dato personal que nos proporcione, para los fines
                establecidos en este Aviso de Privacidad. Entre los datos
                personales pueden figurar (entre otros) su nombre, edad y
                dirección de correo electrónico. También podemos recoger datos
                personales de categoría especial, dependiendo de la encuesta a
                la que le pidamos que responda.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Compartir datos</h3>
              <p>No vendemos sus datos personales a terceros.</p>
              <p>
                Podemos contratar a otras empresas, como los Encargados del
                Tratamiento (proveedores de servicios), para que realicen
                determinadas funciones en nuestro nombre. Podemos comunicar sus
                Datos Personales a estos Encargados del Tratamiento que nos
                ayudan a realizar diversas funciones de nuestra actividad
                empresarial, tales como el procesamiento de los pagos, embalaje
                y envío; bufetes de abogados, consultores, auditores en caso
                necesario; servicios de CRM, servicios de correo electrónico,
                comentarios sobre los productos o software de ayuda; analítica
                de sitios web. Si Hydrafacial recibe sus Datos Personales y
                posteriormente transfiere esa información a un Encargado del
                Tratamiento para su tratamiento, Hydrafacial sigue siendo
                responsable de velar por que este Encargado trate sus Datos
                Personales conforme al nivel requerido por las leyes de
                privacidad aplicables, como el Reglamento General Europeo de
                Protección de Datos ("RGPD"). Normalmente, estas transferencias
                se basarán en nuestros intereses legítimos o se convendrá en el
                Acuerdo.
              </p>
              <p>
                Puede ser necesario transferir sus datos personales a otras
                empresas del Grupo o a proveedores de servicios ubicados en
                Estados Unidos. En estos casos, tomaremos medidas para velar por
                que sus datos reciban un nivel de protección adecuado de acuerdo
                con la normativa aplicable para fines coherentes con el presente
                Aviso de Privacidad, basados en nuestro interés legítimo o en
                una necesidad contractual.
              </p>
              <p>
                Existen también determinadas circunstancias en las que
                compartiremos sus datos con empresas externas. En todo momento,
                la privacidad sigue siendo primordial, por lo que en todas las
                ocasiones intentaremos minimizar los datos que compartimos.
              </p>
              <p>Algunas de estas circunstancias son las siguientes:</p>
              <ul>
                <li>
                  Comunicarlos a socios cuidadosamente elegidos para añadir
                  valor a nuestros productos.
                </li>
                <li>
                  Comunicarlos a terceros para que puedan proponerle que realice
                  encuestas.
                </li>
                <li>
                  Crear un perfil de marketing para encontrar clientes con
                  necesidades similares.
                </li>
              </ul>
              <p>
                Además de lo mencionado anteriormente, existen otros supuestos
                en los que tendríamos que compartir sus datos. Por ejemplo:
              </p>
              <ul>
                <li>Cuando estemos legalmente obligados a hacerlo.</li>
                <li>Cuando exista un deber público de comunicar los datos.</li>
                <li>
                  Cuando la comunicación sea necesaria para proteger nuestros
                  intereses.
                </li>
                <li>
                  Cuando la comunicación se realice a petición suya o con su
                  consentimiento.
                </li>
              </ul>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Transferencias Internacionales
              </h3>
              <p>
                Hydrafacial es una empresa que opera a nivel mundial. Por lo
                tanto, los datos personales de quienes visitan nuestros sitios
                web o que utilizan o compran nuestros productos o servicios o
                interactúan de algún otro modo con nosotros, se pueden
                transferir y se puede acceder a ellos desde varios lugares del
                mundo, como los países donde Hydrafacial, sus filiales o
                nuestros encargados del tratamiento operan.
              </p>
              <p>
                Protegeremos sus Datos Personales de acuerdo con este Aviso de
                Privacidad independientemente del lugar en el que se traten. No
                transferimos ni revelamos de forma voluntaria o activa los Datos
                Personales de nuestros clientes a las autoridades
                gubernamentales o a las fuerzas del orden (las “Autoridades”) ni
                concedemos acceso a sus Datos Personales a Autoridad alguna. En
                caso de que las Autoridades realicen una solicitud, disponemos
                de procedimientos y controles para asegurarnos de que dicha
                solicitud se examina de acuerdo con el procedimiento descrito en
                nuestro &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/es/${localString?.["transparencyReport"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Informe de Transparencia
                </a>
                .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Información para particulares del Espacio Económico Europeo
                (“EEE”) o el Reino Unido (“RU”)
              </h3>
              <p className={styles["sectionDescription"]}>
                Al operar a nivel mundial, Hydrafacial puede transferir Datos
                Personales desde el EEE o el Reino Unido a los Estados Unidos y
                otros países, entre otros, los Datos Personales que recibimos de
                personas residentes en el EEE o el Reino Unido que visiten
                nuestros sitios web o que compren nuestro producto o utilicen
                nuestros servicios, o interactúen de otro modo con nosotros.{" "}
              </p>
              <p className={styles["sectionDescription"]}>
                Cuando Hydrafacial realiza dichas transferencias de Datos
                Personales, se basa en:
              </p>
              <ul>
                <li className={styles["sectionDescription"]}>
                  Decisiones de Adecuación, adoptadas por:
                  <ul>
                    <li className={styles["sectionDescription"]}>
                      La Comisión Europea (CE), basándose en el artículo 45 del
                      Reglamento (UE) 2016/679 (RGPD) - para más información y
                      para acceder a la lista completa de países considerados
                      adecuados hasta la fecha, consulte
                      <a
                        href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions
                      </a>
                      .
                    </li>
                    <li className={styles["sectionDescription"]}>
                      El Secretario de Estado del Reino Unido, basándose en el
                      artículo 45 del RGPD del Reino Unido y en la sección 17A
                      de la Ley de Protección de Datos de 2018 - para obtener
                      más información y para acceder a la lista completa de
                      países considerados adecuados hasta la fecha, consulte
                      <a
                        href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/
                      </a>
                      ; o bien
                    </li>
                    <li className={styles["sectionDescription"]}>
                      Las{" "}
                      <a
                        href={getModifiedFileName(
                          `/files/es/${localString?.["standardContractualClauses"]}`
                        )}
                        style={{
                          color: "#0d6efd",
                          textDecoration: "underline",
                        }}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        cláusulas contractuales tipo
                      </a>{" "}
                      ("CCT") de la CE y el apéndice sobre transferencia
                      internacional de datos ("IDTA") de la Oficina del
                      Comisario de Información del Reino Unido, según proceda,
                      complementadas con las medidas de seguridad adicionales
                      recomendadas por el Consejo Europeo de Protección de
                      Datos.
                    </li>
                  </ul>
                </li>
              </ul>
              {/*eslint-disable-next-line react/no-unescaped-entities*/}
              <p className={styles["sectionDescription"]}>
                La Oficina del Comisario de Información de la CE y del Reino
                Unido ("ICO") ha determinado que las CCT y el IDTA pueden
                ofrecer garantías suficientes para proteger los datos personales
                transferidos fuera del EEE y del Reino Unido. Para más
                información, consulte
                <a
                  href="         https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
                </a>{" "}
                and
                <a
                  href="  https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-data-transfer-agreement-and-guidance/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-data-transfer-agreement-and-guidance/
                </a>
                .
              </p>
              <p className={styles["sectionDescription"]}>
                Hydrafacial realiza evaluaciones de impacto de las
                transferencias y supervisa continuamente las circunstancias que
                rodean dichas transferencias para asegurarse de que en la
                práctica mantienen un nivel de protección equivalente en lo
                esencial al que proporciona la legislación europea y británica
                en materia de protección de datos.
              </p>
              <p className={styles["sectionDescription"]}>
                Aplicamos las mismas condiciones y requisitos descritos en este
                Aviso de Privacidad para todas las transferencias
                internacionales de datos, independientemente de su ubicación,
                con las salvaguardas adecuadas y manteniendo siempre seguros sus
                Datos Personales, utilizando las herramientas de transferencia
                internacional de datos más convenientes, de acuerdo con el
                modelo de contrato elaborado por los reguladores.
              </p>
              <p>
                Información para particulares de China, Corea del Sur e
                Indonesia
              </p>
              <p>
                Cuando se tratan datos personales, se almacenan en servidores
                locales de cada país, sin realizar transferencias
                transfronterizas de datos a terceros países.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Protección de datos</h3>
              <p>
                Hydrafacial hace lo posible por aplicar las medidas técnicas y
                organizativas apropiadas para proteger sus datos personales
                contra la destrucción accidental o ilícita, la pérdida
                accidental o la alteración, la comunicación o el acceso no
                autorizados y cualquier otra forma ilícita de tratamiento.
                Nuestro objetivo es garantizar que el nivel de seguridad y las
                medidas adoptadas para proteger sus datos personales sean
                acordes con los riesgos que presentan la naturaleza y el uso de
                sus datos personales. Seguimos prácticas reconocidas en el
                sector para proteger nuestro entorno informático y nuestras
                instalaciones físicas. Algunas de estas medidas son:
              </p>
              <ul>
                <li>Gestión de acceso.</li>
                <li>VPN (red privada virtual) para acceso remoto.</li>
                <li>Cifrado de datos en reposo y en tránsito.</li>
                <li>Funciones de copia de seguridad y recuperación.</li>
                <li>Cortafuegos.</li>
                <li>Software antivirus.</li>
                <li>Autenticación multifactor (AMF).</li>
                <li>Filtrado de seguridad del correo electrónico.</li>
                <li>Sensibilización en materia de seguridad.</li>
              </ul>
              <p>
                En nuestros sitios web y aplicaciones le facilitamos un ID de
                usuario y una contraseña para proteger los datos que nos
                facilita. También utilizamos medidas de seguridad habituales del
                sector para cifrar los datos confidenciales en tránsito hacia
                nuestros servidores. El ID de usuario y la contraseña nos ayudan
                a proteger sus datos personales. Mantenga esta contraseña en un
                lugar seguro y no la comunique a nadie.
              </p>
              <p>
                Algunos correos electrónicos sospechosos contienen archivos
                adjuntos o enlaces a sitios web que intentan instalar software
                malicioso en su ordenador. Si ha introducido su contraseña en lo
                que cree que puede ser un sitio web malicioso, póngase en
                contacto con nosotros inmediatamente y pídanos que la cambiemos.
              </p>
              <p>
                Si ha introducido los datos de su tarjeta de pago en lo que cree
                que puede ser un sitio web malicioso o ha respondido a un correo
                electrónico con esos datos, debe ponerse en contacto
                inmediatamente con la entidad emisora de su tarjeta de crédito.
                No olvide ponerse en contacto con nosotros para actualizar los
                datos de su tarjeta.
              </p>
              <p>
                Cuando nos pida un presupuesto, realizaremos el tratamiento de
                los datos en un servidor seguro. Su navegador le confirmará que
                se encuentra en una zona segura mediante una llave o candado que
                aparecerá en la esquina inferior derecha de la ventana de su
                navegador, donde se mantendrá hasta que salga de ella.
              </p>
              <p>
                Muchas organizaciones utilizan elementos de seguridad como
                cortafuegos para proteger sus sistemas informáticos. Es posible
                que estos cortafuegos le impidan conectarse a nuestro servidor
                seguro. Si está en el trabajo y no puede conectarse a nuestro
                sitio web, hable con su administrador de TI.
              </p>
              <p>
                Tenga en cuenta que las comunicaciones por internet, como los
                correos electrónicos, no son seguras a menos que estén cifradas.
                Es posible que sus comunicaciones pasen por varios países antes
                de que se entreguen, es una característica intrínseca a
                internet. No podemos aceptar responsabilidad alguna por el
                acceso no autorizado o la pérdida de Datos Personales que escape
                a nuestro control.
              </p>
              <p>
                Además, puede proteger su sistema instalando antivirus y
                ejecutando los análisis recomendados por el proveedor. También
                debe ejecutar las actualizaciones/parches de seguridad para su
                sistema que reciba del proveedor.
              </p>
              <p>
                No responda nunca a correos electrónicos no solicitados de
                fuentes desconocidas. Estos correos pueden ser fraudulentos e
                intentar que facilite sus datos personales o información de
                pago.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                ¿Cuánto tiempo conservamos sus datos?
              </h3>
              <p>
                No trataremos sus Datos Personales durante más tiempo del
                necesario ni los trataremos para fines distintos de aquellos
                para los que se recogieron. Almacenamos sus Datos Personales
                durante distintos periodos de tiempo en función de la categoría
                de Datos Personales y de la naturaleza de la relación que tenga
                con nosotros. Determinamos el tiempo que necesitamos los Datos
                Personales en función de cada caso, pero nuestro objetivo es
                conservar sus Datos Personales durante el periodo más breve
                posible para lograr el fin para el que se recogen.
              </p>
              <p>
                Estamos sujetos a diversos requisitos legales relativos a la
                conservación de datos y tenemos nuestros propios intereses
                legítimos en conservar sus datos durante un periodo de tiempo.
                Entre ellos, la defensa ante cualquier reclamación tardía o
                diferida y la mejora de nuestros productos y servicios.
              </p>
              <p>
                Si no realiza ninguna acción después de recibir un correo
                electrónico/SMS de Hydrafacial invitándole a crear una cuenta,
                porque ha recibido un tratamiento Hydrafacial (Syndeo),
                borraremos automáticamente sus datos en un plazo razonable.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Privacidad infantil</h3>
              <p>
                No recopilamos conscientemente ningún Dato Personal de niños
                menores de 13 años, y nuestros productos no están destinados a
                ser comprados o utilizados por niños. Los padres deben saber que
                existen herramientas de control parental en línea que pueden
                utilizarse para evitar que los niños envíen información en línea
                sin permiso paterno o accedan a material perjudicial para
                menores.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Enlaces a otros sitios web
              </h3>
              <p>
                Para mejorar su experiencia con Hydrafacial, podemos incorporar
                a nuestro sitio web enlaces a otros sitios. Esos sitios web
                tendrán sus propias políticas de privacidad que quizás usted
                desee consultar. Hydrafacial no asume responsabilidad alguna por
                el contenido alojado en sitios web de terceros cuyos enlaces
                proporcionamos.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Sus derechos</h3>
              <p>
                Es posible que tenga determinados derechos en relación con sus
                Datos Personales, en función de su ubicación y con arreglo a la
                legislación local aplicable. Entre estos derechos se pueden
                encontrar, salvo excepciones o limitaciones:
              </p>
              <ul>
                <li>
                  Derecho a saber qué datos personales se recogen y con qué fin.{" "}
                </li>
                <li>
                  Derecho a saber qué datos personales se "venden" o
                  "comparten", con qué fin y las categorías de destinatarios de
                  sus datos personales.
                </li>
                <li>Derecho a acceder a sus datos personales.</li>
                <li>
                  Derecho a rectificar, corregir o actualizar sus datos
                  personales.
                </li>
                <li>
                  Derecho a pedirnos que restrinjamos el tratamiento de sus
                  datos en determinadas circunstancias, por ejemplo, si le
                  preocupa la exactitud de los datos o cómo se están utilizando.
                </li>
                <li>
                  Derecho a que se supriman sus datos personales, y que lo hagan
                  terceras partes a las que se hayan vendido, compartido o
                  comunicado dichos datos personales.
                </li>
                <li>
                  Derecho a decidir que sus datos personales no se “vendan” o
                  “compartan”.
                </li>
                <li>
                  Derecho a solicitar que transfiramos la información que nos ha
                  facilitado de una organización a otra, o que se la entreguemos
                  a usted, cuando proceda.
                </li>
                <li>
                  Derecho a oponerse al tratamiento de sus datos personales.
                </li>
                <li>
                  Derecho a no ser objeto de decisiones automatizadas ni de
                  elaboración de perfiles.
                </li>
              </ul>
              <p>
                Si desea acceder, revisar, actualizar, corregir y suprimir
                cualquier dato personal que tengamos sobre usted o ejercer
                cualquier otro derecho de que disponga en materia de privacidad,
                puede hacerlo a través de este formulario de solicitud. Tenga en
                cuenta que estos derechos no proceden en todas las
                circunstancias, aunque siempre que podamos, haremos lo que ha
                solicitado.
              </p>
              <p>
                Nuestro equipo de privacidad examinará su solicitud de derechos
                de privacidad verificable ("Solicitud de Derechos de
                Privacidad") y le responderá lo antes posible. Si no podemos
                atender su solicitud debido a una excepción o limitación, se lo
                explicaremos por escrito. Si necesitamos más tiempo, le
                informaremos por escrito del motivo y de la ampliación del
                plazo.
              </p>
              <p>
                Si desea que un agente autorizado presente una Solicitud de
                Derechos de Privacidad en su nombre, puede hacerlo
                cumplimentando este formulario de solicitud. Le pediremos una
                autorización escrita y firmada indicando que usted ha autorizado
                al agente para actuar en su nombre. Una vez que recibamos la
                autorización escrita estudiaremos su Solicitud de Derechos de
                Privacidad y le responderemos lo antes posible. Responderemos
                directamente a la dirección de correo electrónico que haya
                facilitado el agente autorizado en relación con el cumplimiento
                de la Solicitud de Derechos de Privacidad.
              </p>
              <p>
                Le recordamos que, si no se siente satisfecho por la forma en
                que tratamos sus datos personales, tiene derecho a presentar una
                reclamación ante una Autoridad de Protección de Datos ("APD").
              </p>
              <p>
                APD en el EEE:{" "}
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no
                </a>{" "}
              </p>
              <p>
                APD en el Reino Unido:{" "}
                <a
                  href="https://ico.org.uk/global/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ico.org.uk/global/contact-us/
                </a>
              </p>
              <p>
                APD en suiza:{" "}
                <a
                  href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.edoeb.admin.ch/edoeb/en/home.html
                </a>
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Información adicional para los consumidores de Estados Unidos
              </h3>
              <div className={styles["sectionDescription"]}>
                <p className={styles["sectionDescription"]}>
                  En virtud de la Ley de Derechos de Privacidad de California
                  ("CPRA") y la Ley de Protección de Datos de la Commonwealth de
                  Virginia ("CDPA"), los residentes en California y Virginia
                  tienen determinados derechos en relación con los datos
                  personales sobre ellos que las empresas recopilan y tratan.
                  Esto supone, entre otros, el derecho a solicitar el acceso o
                  la supresión de sus datos personales, así como el derecho a
                  pedir a una empresa que deje de vender o compartir sus datos
                  personales.
                </p>
                <p className={styles["sectionDescription"]}>
                  Tenemos la obligación de dar información detallada sobre las
                  categorías de datos personales que recopilamos o compartimos
                  para los fines descritos en el epígrafe "Cómo utilizamos sus
                  datos" del presente Aviso de Privacidad y, a los Encargados
                  del Tratamiento para los fines mencionados en el epígrafe
                  "Compartir datos".
                </p>
                <p className={styles["sectionDescription"]}>
                  Recogemos las siguientes categorías de Datos Personales para
                  nuestros fines comerciales, y las hemos recogido en los
                  últimos 12 meses:
                </p>
                <ul>
                  <li className={styles["sectionDescription"]}>
                    Identificadores personales.
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Información recogida por cookies y otras tecnologías, como
                    la dirección IP.
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Información sobre la actividad en internet u otras redes
                    electrónicas, como la información de registro de la cuenta,
                    el contenido que ve o con el que participa y la información
                    sobre la cuenta, el navegador y el dispositivo.
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Inferencias extraídas de cualquiera de las categorías
                    anteriores de Datos Personales.{" "}
                  </li>
                </ul>
                <p className={styles["sectionDescription"]}>
                  Aunque Hydrafacial no vende datos personales a cambio de una
                  contraprestación monetaria de ningún tipo, sí compartimos
                  datos personales a cambio de otros beneficios, tal y como se
                  define en el Código Civil de California 1798.140 ad) 2). En
                  los 12 meses anteriores, hemos compartido datos personales en
                  la medida en que ha sido necesario con "fines comerciales"
                  específicos, tal y como se define en el Código Civil de
                  California 1798.140 e) y se indica en el epígrafe “Compartir
                  datos”. Esto supone compartir identificadores personales,
                  información comercial y actividad en Internet u otras redes
                  electrónicas con proveedores de servicios de procesamiento de
                  pagos, gestión de relaciones con los clientes, consultoría,
                  correo electrónico, comentarios sobre productos, servicios de
                  asistencia, redes publicitarias y empresas de análisis de
                  sitios web. Usted tiene derecho a pedir a Hydrafacial que no
                  venda ni comparta sus Datos Personales.
                </p>
                <p className={styles["sectionDescription"]}>
                  Si desea más información sobre cómo ejercer sus derechos, como
                  la lista de derechos de privacidad que puede ejercer, consulte
                  el epígrafe "Sus derechos" del presente Aviso de Privacidad.
                  Si desea acceder, revisar, actualizar, corregir o suprimir los
                  datos personales que tenemos sobre usted, o ejercer cualquier
                  otro derecho que le asista en materia de privacidad, como el
                  derecho a no vender o compartir sus datos personales, por
                  favor rellene este formulario de solicitud o escriba a:
                  <a
                    href="mailto:dpo@hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    dpo@hydrafacial.com
                  </a>
                </p>
                <p className={styles["sectionDescription"]}>
                  Hacemos todo lo posible por responder a las Solicitudes de
                  Derechos de Privacidad en los plazos requeridos. Si
                  necesitamos más tiempo, le informaremos por escrito del motivo
                  y de la ampliación del plazo. Si presenta su Solicitud de
                  Derechos de Privacidad de forma electrónica a través de
                  nuestro formulario de solicitud, le enviaremos nuestra
                  respuesta por escrito al correo electrónico comprobado
                  vinculado a la solicitud. Si no nos ha enviado la solicitud a
                  través del formulario en línea, le enviaremos nuestra
                  respuesta por escrito por correo postal o electrónico, a su
                  elección. No cobramos honorarios por atender o responder a su
                  solicitud verificable como consumidor a menos que sea
                  excesiva, repetitiva o manifiestamente infundada. Si
                  determinamos que la solicitud justifica el pago de una
                  cantidad, le explicaremos los motivos de nuestra decisión y le
                  facilitaremos un presupuesto antes de tramitar su solicitud.{" "}
                </p>
                <p className={styles["sectionDescription"]}>
                  Derecho de recurso – California{" "}
                </p>
                <p className={styles["sectionDescription"]}>
                  En caso de que Hydrafacial no tome ninguna medida en relación
                  con su Solicitud de Derechos de Privacidad en un plazo de
                  respuesta de 45 días o, en caso de prórroga, en un plazo
                  máximo de respuesta de 90 días, le informaremos por escrito de
                  los motivos por los que no hemos tomado ninguna medida y le
                  explicaremos los derechos que le asisten para recurrir la
                  decisión.{" "}
                </p>
                <p className={styles["sectionDescription"]}>
                  Derecho de recurso – Virginia{" "}
                </p>
                <p className={styles["sectionDescription"]}>
                  Usted tiene derecho a apelar una negativa a tomar medidas en
                  relación con una Solicitud de Derechos de Privacidad dentro de
                  un plazo razonable a partir de la recepción de nuestra
                  decisión. En un plazo de 60 días a partir de la recepción de
                  una apelación, Hydrafacial le informará por escrito de las
                  medidas que haya adoptado (en su caso) en respuesta a dicha
                  apelación, con una explicación por escrito de los motivos de
                  las decisiones tomadas. Si se deniega la apelación, se le
                  proporcionará un método a través del cual podrá ponerse en
                  contacto con el fiscal general de Virginia para presentar una
                  queja.
                </p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                California y Delaware: las comunicaciones “Do Not Track”
              </h3>
              <p>
                Las normas de privacidad de los Estados Unidos, como las leyes
                de California y Delaware, exigen a Hydrafacial que indique si
                respeta la configuración “Do Not Track” de su navegador en
                relación con la publicidad dirigida. Hydrafacial suscribe las
                normas establecidas en el presente Aviso de Privacidad y no
                supervisa ni responde a las solicitudes “Do Not Track” del
                navegador.{" "}
              </p>
            </div>
            <h2 className={styles["title"]}>Términos de servicios</h2>
            <br />
            <div className={styles["contentContainer"]}>
              <p>
                ROGAMOS LEA ATENTAMENTE ESTAS CONDICIONES DE USO. ESTA CUENTA
                HYDRAFACIAL™ (LA “CUENTA”) ESTÁ GESTIONADA POR HYDRAFACIAL LLC
                (“Hydrafacial” o “Nosotros”). LAS PRESENTES CONDICIONES DE USO
                (LAS “CONDICIONES”) CONSTITUYEN UN ACUERDO VINCULANTE ENTRE EL
                USUARIO (“USUARIO” o “USTED”) E HYDRAFACIAL Y REGULAN EL ACCESO
                Y USO DE LA CUENTA, CONTIENEN EXENCIONES DE RESPONSABILIDAD Y
                OTRAS DISPOSICIONES QUE LIMITAN NUESTRA RESPONSABILIDAD HACIA EL
                USUARIO Y QUE HYDRAFACIAL PODRÁ MODIFICAR OCASIONALMENTE.
                ROGAMOS LEA ATENTAMENTE ESTAS CONDICIONES DE USO ANTES DE
                EMPEZAR A UTILIZAR SU CUENTA. SI NO ESTÁ DE ACUERDO CON TODAS
                LAS CONDICIONES DEL PRESENTE ACUERDO, HAGA CLIC EN “NO ACEPTAR”,
                DEJE DE UTILIZAR Y DESINSTALE ESTA CUENTA INMEDIATAMENTE. ESTAS
                CONDICIONES TAMBIÉN QUEDAN INCORPORADAS POR REFERENCIA A NUESTRA
                POLÍTICA DE PRIVACIDAD.
              </p>
              <div className={styles["contentTitle"]}>
                SOLO PARA RESIDENTES EN AMÉRICA DEL NORTE SEGÚN SE ESTIPULA A
                CONTINUACIÓN:
              </div>
              <p>
                Estas Condiciones contienen una disposición de Arbitraje que
                regula cualquier conflicto entre usted y nosotros. Dicha
                disposición causará los siguientes efectos:
              </p>
              <ul>
                <li>Suprimirá su derecho a un juicio con jurado.</li>
                <li>
                  Afectará sustancialmente a sus derechos, entre otros, le
                  impedirá presentar, unirse o participar en procedimientos
                  colectivos o consolidados.
                </li>
              </ul>
              <p>
                Acepta que podamos enviarle notificaciones, comunicaciones y
                modificaciones de las presentes Condiciones por medios
                electrónicos, entre otros, cambios en las presentes Condiciones
                en la propia Cuenta o mediante la publicación de las
                modificaciones en el Sitio Web de Hydrafacial.
              </p>
              <div className={styles["contentTitle"]}>Requisitos</div>
              <p>
                La Cuenta no está dirigida ni concebida para su utilización por
                menores de 13 años. PARA ACCEDER A LA CUENTA Y UTILIZARLA, EL
                USUARIO DEBE TENER AL MENOS 13 AÑOS. Si el Usuario tiene entre
                13 y 18 años, únicamente podrá utilizar la Cuenta bajo la
                supervisión de uno de sus progenitores o de un tutor legal que
                acepte regirse por las presentes Condiciones. El Usuario declara
                y garantiza que a)ִ no se encuentra en un país sometido a
                embargo por parte del gobierno de EE.UU. o que el gobierno de
                EE.UU. haya designado como país “que patrocina el terrorismo” y
                b) no figura en ninguna lista del gobierno de EE.UU. de partes
                prohibidas o restringidas.
              </p>
              <p>
                Con el fin de utilizar determinadas funciones de nuestra Cuenta,
                deberá registrarse para crear una cuenta. Usted se compromete a:
                a) crear una sola cuenta; b) proporcionar información precisa,
                veraz, actual y completa al crear su cuenta; c) mantener y
                actualizar puntualmente la información de su cuenta; d) mantener
                la seguridad de su cuenta evitando compartir su contraseña con
                terceros y limitando el acceso a su cuenta y su ordenador;
                e) informar inmediatamente a Hydrafacial si descubre o sospecha
                que se ha producido cualquier violación de seguridad relacionada
                con la Cuenta y f) asumir la responsabilidad de todas las
                actividades que se realicen utilizando su cuenta y aceptar los
                riesgos derivados de un acceso no autorizado.
              </p>
              <div className={styles["contentTitle"]}>Privacidad</div>
              <p>
                El uso que usted haga de nuestros Servicios Syndeo está sujeto
                al Aviso de Privacidad de Hydrafacial, que se puede consultar en{" "}
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Privacy Notice
                </a>
                . El Acuerdo de Tratamiento de Datos se incorpora a estas
                Condiciones y se aplicará cuando usted sea propietario de una
                empresa y acceda a información o datos personales a través de
                los Servicios de Syndeo, en cuyo caso se le considera un
                Encargado del Tratamiento de Datos, y usted se compromete a
                cumplir el Acuerdo de Tratamiento de Datos, que se puede
                consultar en
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Data Processing Agreement
                </a>
                , con respecto a toda información o datos personales tratados a
                través de los Servicios de Syndeo.
              </p>
              <div className={styles["contentTitle"]}>
                Derechos de autor, marcas registradas y licencia de uso
              </div>
              <p>
                A menos que se indique lo contrario, la Cuenta y todo su
                contenido y otros materiales, entre otros, el logotipo de
                Hydrafacial y todos los diseños, ilustraciones, textos,
                gráficos, imágenes, clips de vídeo, información, datos,
                software, archivos de sonido, otros archivos y la selección y
                disposición de los mismos (colectivamente, los “Materiales de la
                Cuenta”) son propiedad, están controlados o licenciados por
                Hydrafacial o sus licenciantes o usuarios y están protegidos por
                las leyes estadounidenses e internacionales sobre derechos de
                autor, marcas registradas, patentes, secretos comerciales y
                otras leyes de propiedad intelectual o derechos de propiedad.
                Syndeo™, Hydrafacial LLC, Hydrafacial, el logotipo de
                Hydrafacial y otras marcas comerciales, marcas de servicio,
                gráficos y logotipos de Hydrafacial utilizados en el marco de la
                Cuenta son nombres comerciales, marcas comerciales o marcas
                registradas protegidas, propiedad de Hydrafacial, controladas o
                licenciadas por Hydrafacial (colectivamente, las “Marcas de
                Hydrafacial”). Otras marcas comerciales, marcas de servicio,
                gráficos y logotipos utilizados en el marco de la Cuenta son
                marcas comerciales o marcas registradas de sus respectivos
                propietarios (colectivamente, las “Marcas de Terceros”). Las
                Marcas de Hydrafacial y las Marcas de Terceros no se pueden
                copiar, imitar o utilizar, en su totalidad o en parte, sin
                autorización previa escrita de Hydrafacial o del titular de la
                marca comercial correspondiente. La Cuenta y el Contenido están
                protegidos por las leyes estatales y federales sobre derechos de
                autor, marcas registradas, patentes, secretos comerciales, así
                como por tratados internacionales y otros derechos de propiedad;
                además, pueden estar dotados de dispositivos de seguridad que
                protegen la información digital a fin de que se utilicen
                exclusivamente con la autorización de Hydrafacial o del
                propietario del Contenido. Quedan reservados todos los derechos
                no concedidos expresamente.
              </p>
              <p>
                La Cuenta y sus Contenidos están destinados exclusivamente a un
                uso personal y no comercial. Sin perjuicio de las presentes
                Condiciones, Hydrafacial concede al Usuario una licencia
                personal, no exclusiva, intransferible, limitada y revocable a
                fin de utilizar la Cuenta únicamente para uso personal de
                conformidad con las presentes Condiciones (“Licencia de
                Usuario”). Queda prohibido todo uso de la Cuenta de otro modo,
                lo que comprende, entre otros, la reventa, transferencia,
                modificación o distribución de la Cuenta o del texto, imágenes,
                música, códigos de barras, vídeo, datos, hipervínculos,
                visualizaciones y otros contenidos vinculados a la Cuenta (el
                “Contenido”). A menos que se indique explícitamente en el
                presente documento, nada de lo dispuesto en estas Condiciones se
                interpretará en el sentido de que pueda conferir en modo alguno,
                ya sea por implicación, impedimento o de otro modo, ningún
                título o propiedad, ni derechos de uso exclusivos sobre ninguna
                propiedad intelectual u otro derecho y ningún fondo de comercio
                asociado al mismo. Estas Condiciones y la Licencia de Usuario
                regulan asimismo cualquier actualización, suplemento o
                sustitución de la Cuenta, a menos que dichas actualizaciones,
                suplementos o sustituciones vayan acompañados de condiciones
                independientes, en cuyo caso se aplicarán estas últimas.
              </p>
              <div className={styles["contentTitle"]}>Uso aceptable</div>
              <p>
                La utilización por parte del Usuario de la Cuenta, de cualquier
                Contenido y de cualquier información proporcionada por el
                Usuario, como los nombres de usuario y contraseñas, direcciones,
                direcciones de correo electrónico, números de teléfono,
                información bancaria (como números de tarjetas de crédito) (la
                "Información del Usuario") que se ha comunicado en relación con
                la Cuenta se limita a la finalidad prevista de la misma. En
                ningún caso se podrá utilizar la Cuenta de forma que a) se
                acose, abuse, hostigue, amenace, difame o se infrinja o vulnere
                de cualquier otra forma los derechos de terceros (entre otros,
                los derechos de publicidad u otros derechos de propiedad);
                b) resulte ilegal, fraudulenta o engañosa; c) proporcione
                información personal sensible a menos que Hydrafacial lo
                solicite específicamente; d) contenga spam o publicidad no
                solicitada; e) utilice tecnología u otros medios para acceder a
                Hydrafacial o al Contenido sin la autorización de Hydrafacial;
                f) utilice o ponga en marcha cualquier sistema automatizado,
                entre otros, “robots”, “arañas” o “lectores fuera de línea”,
                para acceder a Hydrafacial o al Contenido; g) intente introducir
                virus o cualquier otro código informático, archivos o programas
                que interrumpan, destruyan o limiten la funcionalidad de
                cualquier software, hardware o equipo de telecomunicaciones;
                h) intente acceder de manera no autorizada a la red informática
                de Hydrafacial o a las cuentas de usuario; i) fomente conductas
                que constituirían un delito penal o que den lugar a
                responsabilidad civil; j) infrinja estas Condiciones; k) intente
                dañar, deshabilitar, sobrecargar o deteriorar los servidores o
                las redes de Hydrafacial; l) suplante la identidad de cualquier
                persona o entidad o tergiverse su identidad o relación con otra
                persona o entidad de otra manera o m) no cumpla con las
                condiciones de terceros que sean de aplicación (colectivamente,
                el “Uso Aceptable”). Hydrafacial se reserva el derecho, a su
                exclusiva discreción, de rescindir cualquier Licencia de Usuario
                o de emprender acciones legales en relación con el Contenido o
                el uso de la Cuenta, cuando Hydrafacial considere razonablemente
                que infringe o podría infringir estas Condiciones o las
                políticas de Hydrafacial. El hecho de que Hydrafacial no tome
                tales medidas o tarde en hacerlo no constituye una renuncia a
                sus derechos a exigir el cumplimiento de estas Condiciones.
                Hydrafacial solicita que los Usuarios no utilicen la Cuenta
                mientras conducen o manejan maquinaria o equipos.
              </p>
              <div className={styles["contentTitle"]}>
                Material generado por el usuario
              </div>
              <p>
                En la medida en que decidamos aceptar material generado por el
                usuario y de acuerdo con las características de la Cuenta, es
                posible que Usted pueda publicar, transmitir, enviar o colgar de
                algún otro modo reseñas, valoraciones, comentarios, opiniones u
                otros materiales en la Cuenta (el “Material Generado por el
                Usuario”) que puedan ser accesibles y visibles por el público.
                En lo que respecta al Material Generado por el Usuario que Usted
                envíe o publique, Usted declara que i) ha creado y posee los
                derechos de este contenido o cuenta con una autorización expresa
                del propietario para publicar dicho contenido, y ii) el
                contenido no infringe los derechos de ninguna otra persona o
                entidad (entre otros, los derechos de autor, las marcas
                comerciales o los derechos de privacidad) ni infringe ninguna
                ley, norma o reglamento aplicables, estas Condiciones de Uso ni
                ninguna otra de nuestras políticas publicadas.
              </p>
              <div className={styles["contentSubTitle"]}>
                El Material Generado por el Usuario no debe:
              </div>
              <ul>
                <li>
                  Contener ningún material que sea falso, difamatorio,
                  calumnioso, obsceno, acosador, amenazador, discriminatorio,
                  intolerante, que incite al odio, violento, vulgar, profano,
                  pornográfico u ofensivo, inapropiado, perjudicial, ilegal,
                  molesto o dañino.
                </li>
                <li>
                  Vulnerar nuestros derechos legales o los de cualquier otra
                  persona (lo que incluye los derechos de publicidad y
                  privacidad), contener cualquier material que pueda generar
                  responsabilidad civil o penal en virtud de las leyes o
                  reglamentos aplicables o promover, defender o contribuir de
                  algún otro modo a cualquier actividad ilegal o acto ilícito.
                </li>
                <li>
                  Causar o amenazar con causar daños a cualquier persona o
                  pérdidas o daños a cualquier propiedad.
                </li>
                <li>
                  Incluir datos personales de otras personas, como su dirección,
                  número de teléfono, dirección de correo electrónico, número de
                  la seguridad social, número de tarjeta de crédito, información
                  médica, información financiera o cualquier otra información
                  susceptible de utilizarse para rastrear, contactar o suplantar
                  a dicha persona.
                </li>
                <li>
                  Infringir ninguna patente, marca registrada, secreto
                  comercial, derecho de autor, contrato u otra propiedad
                  intelectual u otros derechos de propiedad de Hydrafacial o de
                  cualquier otra persona.
                </li>
                <li>
                  Intentar dañar o explotar a niños exponiéndolos a contenidos
                  inadecuados, pidiéndoles información personal identificable o
                  de cualquier otra forma.
                </li>
                <li>
                  Falsear Su identidad o relación con cualquier persona u
                  organización, entre otras, Hydrafacial.
                </li>
                <li>
                  Intentar recopilar las direcciones de correo electrónico de
                  otros usuarios o los nombres de usuario o contraseñas de sus
                  Cuentas u otros servicios por medios electrónicos o de otro
                  tipo para cualquier fin, incluido el envío de correo
                  electrónico no solicitado u otras comunicaciones electrónicas.
                </li>
                <li>
                  Intentar transmitir cartas en cadena, correo masivo o correo
                  basura, ya sea de forma automatizada o no, o interferir,
                  interrumpir o crear una carga indebida en Hydrafacial o en las
                  redes o servicios relacionados con el Sitio Web o instalar o
                  intentar instalar o promover spyware, malware u otro código
                  informático en nuestros ordenadores o equipos o en los
                  ordenadores o equipos de terceros.
                </li>
                <li>
                  Realizar actividades comerciales como concursos, sorteos u
                  otras promociones de venta, trueques, publicidad u ofertas de
                  venta o compra de bienes y servicios.
                </li>
                <li>
                  Ser inadecuado o no apto para menores, según determine
                  Hydrafacial a su entera discreción.
                </li>
              </ul>
              <p>
                No reclamamos la propiedad del Material Generado por el Usuario.
                Sin embargo, al enviar o publicar Material Generado por el
                Usuario, nos concede irrevocablemente, a nosotros y a nuestros
                cesionarios, agentes y licenciatarios y a otros usuarios una
                licencia mundial, no exclusiva, irrevocable, libre de regalías y
                totalmente pagada con arreglo a todos los derechos de autor,
                marcas comerciales, patentes, secretos comerciales, derechos de
                privacidad y publicidad y otros derechos de propiedad
                intelectual que Usted posea o controle para: i) utilizar,
                reproducir, transmitir, modificar, indexar, adaptar, publicar,
                traducir, crear obras derivadas, distribuir, mostrar y explotar
                de cualquier otro modo dicho contenido en todo el mundo en
                cualquier medio, ya sea conocido o inventado en el futuro, para
                cualquier fin, incluso fines comerciales o de marketing, todo
                ello sin previo aviso, con o sin atribución, sin necesidad de
                solicitarle permiso ni de efectuar pago alguno a Usted ni a
                ninguna otra persona o entidad, y ii) utilizar su nombre,
                persona o imagen solos o en relación con dichos usos, sin
                obligación ni remuneración alguna para Usted. Los derechos
                concedidos incluyen, entre otros, el derecho a: a) configurar,
                alojar, indexar, almacenar en caché, archivar, almacenar,
                digitalizar, comprimir, optimizar, modificar, reformatear,
                editar, adaptar, publicar en formato de búsqueda y eliminar
                dicho Material Generado por el Usuario y combinarlo con otros
                materiales y b) utilizar cualquier idea, concepto, conocimiento
                o técnica contenida en cualquier Material Generado por el
                Usuario para cualquier finalidad, inclusive el desarrollo,
                fabricación y comercialización de productos o servicios. Excepto
                en la medida en que lo prohíba la ley, Usted renuncia, y se
                compromete a renunciar, a cualesquiera derechos morales
                (incluidos los de atribución e integridad) que pudiera tener
                sobre cualquier Material Generado por el Usuario, incluso en el
                caso de que se altere o modifique de un modo que no considere
                aceptable. En la medida en que no sea posible renunciar a ellos,
                Usted se compromete irrevocablemente a no ejercer tales derechos
                (si los hubiere) de forma que interfieran con cualquier
                ejercicio de los derechos concedidos. Usted entiende que no
                recibirá ningún honorario, importe, contraprestación o
                remuneración por ninguno de los derechos concedidos en esta
                Cláusula. Usted se compromete a pagar todos los derechos,
                honorarios y otros importes adeudados a cualquier persona o
                entidad en relación con el Material Generado por el Usuario que
                Usted publique en el Sitio Web.
              </p>
              <p>
                En el caso de que decidamos aceptar Material Generado por el
                Usuario, y en la medida en que lo hagamos, podremos, en función
                de la capacidad de la Cuenta, rechazar, modificar o eliminar un
                Envío de Usuario sin previo aviso por cualquier motivo, a la
                entera discreción de Hydrafacial, inclusive si se debe a que
                consideramos que un Envío de Usuario puede infringir las
                presentes Condiciones de Uso o resultar inaceptable por
                cualquier otro motivo. En el caso de que decidamos aceptar
                Material Generado por el Usuario, y en la medida en que lo
                hagamos, tenemos el derecho, aunque no la obligación, de
                supervisar, revisar, filtrar, publicar, eliminar, rechazar,
                modificar y almacenar todo el Material Generado por el Usuario
                publicado en el Sitio Web, en cualquier momento y por cualquier
                motivo, sin previo aviso, incluso para garantizar que la
                totalidad de este Material Generado por el Usuario cumple las
                presentes Condiciones de Uso. No avalamos ningún Material
                Generado por el Usuario y el Material Generado por el Usuario
                publicado no refleja nuestras opiniones, puntos de vista o
                consejos. Usted es el único responsable de Su Material Generado
                por el Usuario y de las consecuencias de su publicación, y
                reconoce que nosotros únicamente actuamos como un intermediario
                pasivo para la distribución y publicación en línea de dicho
                material. No asumimos responsabilidad alguna por el Material
                Generado por el Usuario que Usted o cualquier otro usuario o
                tercero publique o envíe a través del Sitio Web, ni asumimos
                responsabilidad alguna por ninguna acción u omisión en relación
                con la transmisión, comunicación o contenido proporcionado por
                un usuario o tercero.
              </p>
              <div className={styles["contentTitle"]}>Indemnización</div>
              <p>
                El Usuario se compromete a defender, indemnizar y mantener
                indemne a Hydrafacial, su matriz, subsidiarias y otras compañías
                filiales, contratistas independientes, proveedores de servicios
                y consultores, y sus respectivos trabajadores, contratistas,
                agentes, directivos, miembros y consejeros (“Indemnizados
                Hydrafacial”) de toda reclamación, demanda, daño, costo,
                litigio, multa, sanción, responsabilidad y gasto (inclusive los
                honorarios de abogados) (las “Reclamaciones”) que se deriven o
                estén relacionados con el uso o mal uso de la Cuenta por parte
                del Usuario, la vulneración de las presentes Condiciones o de la
                legislación aplicable, o la vulneración de cualquier derecho de
                un tercero. Hydrafacial se reserva el derecho de asumir la
                defensa y el control exclusivos de toda cuestión que pueda dar
                lugar a una indemnización por parte del Usuario, en cuyo caso el
                Usuario cooperará para hacer valer los fundamentos de la
                defensa. En el caso de cualquier reclamación de terceros que la
                Cuenta o la posesión del Usuario y el uso de la Cuenta infrinja
                el derecho de propiedad intelectual de ese tercero, Hydrafacial
                será el único responsable de la investigación, defensa, solución
                y liquidación de cualquier reclamación por infracción de la
                propiedad intelectual.
              </p>
              <div className={styles["contentTitle"]}>
                Garantías y exenciones de responsabilidad
              </div>
              <p>
                HYDRAFACIAL PROPORCIONA LA CUENTA AL USUARIO “TAL CUAL” Y EL
                USUARIO LA UTILIZA POR SU CUENTA Y RIESGO. EN LA MÁXIMA MEDIDA
                PERMITIDA POR LA LEGISLACIÓN APLICABLE, HYDRAFACIAL RENUNCIA A
                TODA GARANTÍA, YA SEA EXPRESA O IMPLÍCITA, CON INCLUSIÓN DE
                CUALQUIER GARANTÍA DE QUE LA CUENTA ES COMERCIALIZABLE, FIABLE,
                DISPONIBLE, PRECISA, ADECUADA PARA UNA FINALIDAD O NECESIDAD
                PARTICULAR, NO INFRACTORA, LIBRE DE DEFECTOS O VIRUS, CAPAZ DE
                FUNCIONAR DE FORMA ININTERRUMPIDA, QUE EL USO DE LA CUENTA POR
                PARTE DEL USUARIO SEA CONFORME A LA LEGISLACIÓN APLICABLE AL
                USUARIO, QUE LA INFORMACIÓN DEL USUARIO O LOS PEDIDOS
                TRANSMITIDOS EN RELACIÓN CON LA CUENTA SE TRANSMITAN O RECIBAN
                CON ÉXITO, PRECISIÓN O SEGURIDAD, QUE LOS PEDIDOS SE REALICEN
                TAL Y COMO SE SUGIEREN O ESTÉN LISTOS EN EL MOMENTO SUGERIDO O
                QUE CUALQUIER ARTÍCULO CONCRETO SOLICITADO ESTÉ DISPONIBLE. LOS
                MATERIALES Y LA INFORMACIÓN DE LA CUENTA PUEDEN PRESENTAR
                IMPRECISIONES TÉCNICAS O ERRORES TIPOGRÁFICOS. SIN PERJUICIO DE
                LO ANTERIOR, NINGUNA DE LAS EXENCIONES DE RESPONSABILIDAD DEL
                PRESENTE APARTADO SE APLICARÁ A LAS GARANTÍAS RELACIONADAS CON
                DAÑOS PERSONALES.
              </p>
              <div className={styles["contentTitle"]}>
                Exención de responsabilidad
              </div>
              <p>
                SIN PERJUICIO DE LA LEGISLACIÓN APLICABLE, INCLUIDA LA RELATIVA
                A LA RESPONSABILIDAD POR DAÑOS PERSONALES O DERECHOS LEGALES
                IRRENUNCIABLES EN VIRTUD DE LA LEGISLACIÓN DE NUEVA JERSEY, EN
                NINGÚN CASO HYDRAFACIAL O SUS DIRECTIVOS, ADMINISTRADORES,
                MIEMBROS, TRABAJADORES, ACCIONISTAS O AGENTES A) SERÁN
                RESPONSABLES ANTE EL USUARIO CON RESPECTO AL USO DE LA CUENTA,
                LO QUE INCLUYE, ENTRE OTROS, LA PARTICIPACIÓN EN LA HERRAMIENTA
                DE EVALUACIÓN SELFIE, EL CONTENIDO O LOS MATERIALES INCLUIDOS EN
                LA CUENTA O A LOS QUE SE ACCEDA A TRAVÉS DE ELLA, O CUALQUIER
                DAÑO DERIVADO DE CUALQUIER FALLO, OMISIÓN, INTERRUPCIÓN,
                ELIMINACIÓN DE ARCHIVOS, ERROR, DEFECTO, VIRUS, RETRASO EN EL
                FUNCIONAMIENTO O LA TRANSMISIÓN O CUALQUIER FALLO EN EL
                RENDIMIENTO, DEBIDO O NO A CAUSAS FORTUITOS, FALLOS EN LAS
                COMUNICACIONES, ROBO, DESTRUCCIÓN O ACCESO NO AUTORIZADO A LOS
                REGISTROS, PROGRAMAS O SERVICIOS DE HYDRAFACIAL; Y B) SERÁN
                RESPONSABLES ANTE EL USUARIO POR CUALQUIER DAÑO INDIRECTO,
                ESPECIAL, INCIDENTAL, CONSECUENTE, PUNITIVO O EJEMPLAR, LO QUE
                INCLUYE, ENTRE OTROS, DAÑOS POR PÉRDIDA DE FONDO DE COMERCIO,
                PÉRDIDA DE BENEFICIOS, PÉRDIDA, ROBO O CORRUPCIÓN DE INFORMACIÓN
                DEL USUARIO, IMPOSIBILIDAD DE UTILIZAR LA CUENTA O CUALQUIERA DE
                SUS FUNCIONES O FALLO O MAL FUNCIONAMIENTO DEL DISPOSITIVO. EL
                ÚNICO RECURSO DEL USUARIO SERÁ DEJAR DE UTILIZAR LA CUENTA.
              </p>
              <p>
                SI RESIDE EN UN TERRITORIO DISTINTO DE NUEVA JERSEY, ESTADOS
                UNIDOS DE AMÉRICA, ES POSIBLE QUE SU LEGISLACIÓN NO PERMITA QUE
                LOS CONTRATOS CON CONSUMIDORES CONTENGAN LIMITACIONES DE
                RESPONSABILIDAD, POR LO QUE ES POSIBLE QUE ALGUNAS O TODAS ESTAS
                LIMITACIONES DE RESPONSABILIDAD NO SE APLIQUEN EN SU CASO.
              </p>
              <p>
                Contenido de Terceros, Cuentas, Productos y Servicios (inclusive
                Publicidad y Promociones). Hydrafacial puede proporcionar
                contenido de terceros en la Cuenta (inclusive contenido
                incrustado) o enlaces a contenidos de terceros, Cuentas,
                productos y servicios, como anuncios y promociones
                (colectivamente, “Contenido de Terceros”) como un servicio a los
                interesados en esta información. Nosotros no controlamos,
                aprobamos ni adoptamos ningún Contenido de Terceros, lo que
                supone que la inserción de un enlace no implica afiliación,
                aprobación o adopción por parte de Hydrafacial de ninguna Cuenta
                ni de ninguna información contenida en la misma, y no podemos
                ofrecer garantía alguna respecto de su exactitud o integridad.
                Usted reconoce y acepta que Hydrafacial no es en modo alguno
                responsable de los Contenidos de Terceros y no asume ninguna
                responsabilidad respecto a su actualización o modificación.
                Usted acepta utilizar dicho Contenido de Terceros por su cuenta
                y riesgo. Debe saber que cuando utilice otras Cuentas a través
                de Contenido de Terceros o participe en promociones o
                transacciones comerciales con terceros, dejarán de aplicarse
                nuestras condiciones y políticas y pasarán a aplicarse las
                condiciones y políticas de dichas Cuentas de Terceros. Debe
                consultar las condiciones y políticas correspondientes, como las
                prácticas de privacidad y recopilación de datos, de cualquier
                Cuenta a la que acceda desde nuestra Cuenta. Al utilizar la
                Cuenta, deberá cumplir las condiciones pertinentes del tercero
                que corresponda.
              </p>
              <div className={styles["contentTitle"]}>
                Modificaciones de la Cuenta
              </div>
              <p>
                Hydrafacial se reserva el derecho de modificar o interrumpir,
                temporal o permanentemente, la Cuenta o cualquier característica
                o parte de la misma sin previo aviso. Usted acepta que
                Hydrafacial no se hace responsable de ninguna modificación,
                suspensión o interrupción de la Cuenta o de cualquier parte de
                la misma.
              </p>
              <div className={styles["contentTitle"]}>
                Exención de responsabilidad por inexactitud
              </div>
              <p>
                Ocasionalmente en el Sitio puede haber información que contenga
                errores tipográficos, inexactitudes u omisiones. Nos reservamos
                el derecho a corregir cualquier error, inexactitud u omisión y a
                modificar o actualizar la información en cualquier momento sin
                previo aviso.
              </p>
              <div className={styles["contentTitle"]}>
                SOLO PARA RESIDENTES EN NORTEAMÉRICA
                <br />
                Arbitraje
              </div>
              <p>
                Lea atentamente la presente cláusula, ya que afecta a derechos
                que de otro modo le podrían corresponder. Prevé la resolución de
                la mayoría de los litigios mediante arbitraje en lugar de
                mediante juicios y demandas colectivas. El arbitraje es más
                informal que una demanda ante un tribunal, recurre a un árbitro
                neutral en lugar de un juez o un jurado y se limita más la
                presentación de pruebas. El arbitraje es definitivo y vinculante
                y un tribunal únicamente puede realizar una revisión muy
                limitada del laudo. Esta cláusula de arbitraje continuará
                vigente tras la rescisión de estas Condiciones.
              </p>
              <p>
                Arbitraje vinculante. Se pretende que esta disposición se
                interprete de forma amplia con el fin de abarcar todas las
                disputas o reclamaciones que surjan o se deriven de estas
                Condiciones, su uso de la Cuenta y su relación con nosotros.
                Cualquier disputa o reclamación que surja o se derive de estas
                Condiciones o del uso de la Cuenta y de su relación con
                Hydrafacial o cualquier empresa o empresas subsidiarias,
                matrices o filiales (tanto si se basa en un contrato, ilícito
                civil, ley, fraude, falsedad o cualquier otra teoría jurídica)
                se resolverá mediante arbitraje vinculante, con la salvedad de
                que cualquiera de nosotros podrá interponer una demanda ante un
                tribunal de menor cuantía si reúne los requisitos para ser
                juzgada en dicha instancia.
              </p>
              <div className={styles["contentTitle"]}>
                Procedimientos de arbitraje.
              </div>
              <p>
                Procedimientos informales de resolución de conflictos: En
                cualquier conflicto, ya sea judicial o arbitral, en primer
                lugar, debe enviar una carta (por correo certificado o
                prioritario) con una descripción escrita de su pretensión a
                nuestro Departamento Jurídico, Attn.: Legal Dept., en 2165 E.
                Spring St, Long Beach, CA 90806, EE.UU. para darnos la
                oportunidad de resolverlo. Tanto usted como Hydrafacial acuerdan
                negociar su pretensión de buena fe. Tanto usted como Hydrafacial
                acuerdan que el procedimiento de resolución de conflictos es una
                condición previa que es necesario cumplir antes de iniciar
                cualquier arbitraje o de interponer una demanda contra la otra
                parte. Si su reclamación o conflicto no se resuelve en un plazo
                de 60 días, puede solicitar un arbitraje.
              </p>
              <p>
                En caso de que no se pueda resolver una disputa mediante el
                procedimiento informal de resolución de conflictos descrito
                anteriormente, se resolverá a través de un arbitraje individual
                vinculante. Usted acepta que el arbitraje de cualquier conflicto
                o reclamación se lleve a cabo de conformidad con las normas de
                la Asociación Americana de Arbitraje (“AAA”), entre ellas las
                Normas de Arbitraje de Consumo de la AAA (según proceda),
                modificadas por las presentes Condiciones. Las Normas de la AAA
                y la información sobre arbitraje y honorarios están disponibles
                en línea en{" "}
                <a href="https://www.adr.org" target="_blank" rel="noreferrer">
                  www.adr.org
                </a>{" "}
                o llamando a la AAA al (800) 778-7879. Usted e Hydrafacial
                acuerdan que estos Términos constituyen una transacción de
                comercio interestatal y que esta cláusula de arbitraje se
                interpretará y aplicará de conformidad con la Ley Federal de
                Arbitraje de EE.UU. y la ley federal de arbitraje, y no se
                regirá por la ley estatal. El arbitraje se celebrará en un lugar
                razonablemente conveniente del estado en el que usted resida o
                en otro lugar elegido de mutuo acuerdo. El arbitraje se llevará
                a cabo en lengua inglesa. Un árbitro puede conceder de forma
                individual cualquier reparación que pudiera conceder un
                tribunal, incluso medidas cautelares o declaratorias en la
                cuantía necesaria para satisfacer su reclamación individual, y
                debe cumplir y hacer cumplir estas Condiciones del mismo modo
                que lo haría un tribunal. Todo arbitraje será confidencial, y ni
                usted ni nosotros podremos revelar la existencia, el contenido o
                los resultados de ningún arbitraje, salvo en la medida en que lo
                exija la ley o a efectos de ejecución del laudo arbitral.
                Cualquier tribunal competente podrá dictar sentencia sobre un
                laudo arbitral.
              </p>
              <p>
                Costes del arbitraje. El pago de todos los gastos de
                tramitación, administración y honorarios del árbitro se regirá
                por las normas de la AAA. Cada parte correrá con los honorarios
                y gastos de sus propios abogados, peritos, testigos, así como
                los relativos a la preparación y presentación de pruebas en el
                arbitraje. No obstante, en el caso de reclamaciones inferiores a
                10.000 dólares que usted haya notificado y negociado de buena fe
                antes de iniciar el arbitraje, tal y como se exige más arriba,
                si el árbitro determina que usted es la parte ganadora del
                arbitraje, tendrá derecho a recuperar los honorarios y costes
                razonables de los abogados. Excepto en el caso de reclamaciones
                que se consideren injustificadas, de mala fe o con fines
                indebidos, nos comprometemos a no solicitar el pago de
                honorarios de abogados en los procedimientos de arbitraje,
                incluso en el caso de que la legislación aplicable permita dicho
                pago.
              </p>
              <p>
                Renuncia a demanda colectiva y a jurado. Tanto Usted como
                nosotros aceptamos que cualquier procedimiento, ya sea de
                arbitraje o ante un tribunal, se llevará a cabo únicamente de
                forma individual y no formará parte de una demanda acción
                colectiva, consolidada o representativa. Si en una acción entre
                usted y nosotros un tribunal o un árbitro determina que no se
                puede aplicar la presente renuncia a la demanda colectiva, el
                acuerdo de arbitraje será nulo en lo que a usted respecta. Si,
                por cualquier motivo, una reclamación procede ante un tribunal
                en lugar de mediante arbitraje, tanto usted como nosotros
                renunciamos a todo derecho a un juicio con jurado que nos
                pudiera corresponder.
              </p>
              <p>
                Si usted es ciudadano de cualquier país de la Unión Europea o
                del Reino Unido, Suiza, Noruega o Islandia, el derecho y el foro
                aplicables serán las leyes y tribunales de su lugar de
                residencia habitual.
              </p>
              <div className={styles["contentTitle"]}>
                SOLO PARA CIUDADANOS NORTEAMERICANOS
                <br />
                Derecho aplicable y jurisdicción
              </div>
              <p>
                Las presentes Condiciones de Uso, la utilización de la Cuenta y
                cualquier conflicto que pueda surgir entre usted e Hydrafacial
                se regirán e interpretarán de conformidad con la Ley Federal de
                Arbitraje, la legislación federal aplicable y las leyes del
                Estado de California (Estados Unidos), sin que surta efecto
                ninguna disposición o norma sobre elección o conflicto de leyes
                (ya sea del Estado de California o de cualquier otra
                jurisdicción). No se aplicará la Convención de las Naciones
                Unidas sobre los Contratos de Compraventa Internacional de
                Mercaderías. En caso de que en algún momento el acuerdo de
                arbitraje se considere inaplicable o nulo o de que una disputa
                entre las partes no esté sujeta a arbitraje, el Usuario
                consiente irrevocablemente en someterse a la jurisdicción
                exclusiva de los tribunales federales y estatales ubicados en el
                condado de Los Ángeles, California (Estados Unidos de América),
                a efectos de cualquier acción judicial derivada o relacionada
                con el uso de la Cuenta o de las presentes Condiciones.
              </p>
              <div className={styles["contentTitle"]}>
                PARA TODOS LOS RESIDENTES FUERA DE AMÉRICA DEL NORTE
              </div>
              <p>
                Si usted reside fuera de los América del Norte, el derecho y el
                foro aplicables serán las leyes y los tribunales de su lugar de
                residencia habitual.
              </p>

              <div className={styles["contentTitle"]}>Rescisión</div>
              <p>
                Sin perjuicio de lo dispuesto en las presentes Condiciones,
                Hydrafacial se reserva el derecho, sin previo aviso y a su
                entera y absoluta discreción, de rescindir su licencia de
                utilización de la Cuenta y bloquear o impedir su acceso y uso
                futuros de la misma. El hecho de que Hydrafacial no tome estas
                medidas o tarde en hacerlo no constituye una renuncia a sus
                derechos a exigir el cumplimiento de estas Condiciones.
              </p>

              <div className={styles["contentTitle"]}>Modificaciones</div>
              <p>
                Hydrafacial se reserva el derecho de cambiar o modificar estas
                Condiciones o cualquier otra política de Hydrafacial relacionada
                con el uso de la Cuenta en cualquier momento, a su entera
                discreción, mediante la modificación de las Condiciones en la
                propia Cuenta o a través de la publicación de las modificaciones
                en el Sitio Web de Hydrafacial. Si continúa utilizando la Cuenta
                después de que se hayan producido dichos cambios o
                modificaciones en las Condiciones u otras políticas de
                Hydrafacial, se entenderá que los acepta. Si usted no está de
                acuerdo con dichos cambios o modificaciones, debe desinstalar la
                Cuenta inmediatamente.
              </p>

              <div className={styles["contentTitle"]}>
                Cláusula de separabilidad
              </div>
              <p>
                Si alguna de las disposiciones de estas Condiciones de Uso se
                considerara ilegal, nula o, por cualquier motivo, inaplicable,
                dicha disposición se considerará separable de las presentes
                Condiciones y no afectará a la validez y aplicabilidad de las
                disposiciones restantes.
              </p>

              <div className={styles["contentTitle"]}>
                Aviso a los residentes en California
              </div>
              <p>
                En virtud del artículo 1789.3 del Código Civil de California,
                los residentes de California tienen derecho a recibir la
                siguiente información específica relativa a los derechos del
                consumidor: el proveedor de la Cuenta es Hydrafacial LLC, 2165
                E. Spring St, Long Beach, CA 90806, EE.UU. Si desea presentar
                una reclamación relativa a la Cuenta o recibir más información
                sobre el uso de la misma, envíe una carta a la dirección arriba
                indicada o póngase en contacto con Hydrafacial por correo
                electrónico (indicando en el asunto "Solicitud de residente de
                California"). También puede dirigirse por escrito a la Unidad de
                Atención de Reclamaciones de la División de Servicios al
                Consumidor del Departamento de Asuntos del Consumidor, en la
                dirección 1625 North Market Blvd., Suite N 112, Sacramento CA
                95834, EE.UU., o por teléfono llamando al 800.952.5210.
              </p>
              <div className={styles["contentTitle"]}>Contacto</div>
              <div className={styles["contact"]}>
                <p>
                  Todas las preguntas, quejas o reclamaciones relativas a la
                  Cuenta deben dirigirse a:
                </p>
                <p>The Hydrafacial Company</p>
                <p>Atención al consumidor</p>
                <p>
                  Correo electrónico:
                  <a
                    href="mailto:help@Hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    help@Hydrafacial.com
                  </a>
                   
                </p>
                <p>2165 E. Spring St, Long Beach, CA 90806, EE.UU.</p>
                <p>Teléfono: 1-888-791-4888</p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Póngase en contacto con nosotros
              </h3>
              <p>
                Para nuestros clientes: póngase en contacto con la entidad de
                Hydrafacial que figura en su formulario de pedido.
              </p>
              <p>
                Si desea acceder a sus datos personales, revisarlos,
                actualizarlos, corregirlos o suprimirlos, o ejercer cualquier
                otro derecho que le asista en materia de privacidad, por favor,
                rellene este formulario de solicitud.
              </p>
              <p>Información de contacto del responsable del tratamiento:</p>
              <div className={styles["tableWrapper"]}>
                <table className={styles["contactDetailsTable"]}>
                  <thead>
                    <tr>
                      <th>EE.UU.</th>
                      <th>Reino Unido</th>
                      <th>Alemania</th>
                      <th>Francia </th>
                      <th>España</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Hydrafacial LLC</td>
                      <td>HydraFacial UK Limited</td>
                      <td>Hydrafacial Germany GmbH</td>
                      <td>Hydrafacial France SAS</td>
                      <td>The Hydrafacial Company Iberia SL</td>
                    </tr>
                    <tr>
                      <td>2165 E. Spring Street, Long Beach, CA 90806</td>
                      <td>
                        3rd Floor 1 Ashley Road, Altrincham,Cheshire, WA14 2DT
                      </td>
                      <td>Stichlingstrasse 1 , 60327 Frankfurt </td>
                      <td>5 rue Tilsit, 75008 Paris</td>
                      <td>Claudio Coello 75, 1º A, 28001 Madrid </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles["contactDetails"]}>
                Delegado de protección de datos:
              </p>
              <p>Ignacio de la Corte</p>
              <p>
                <a
                  href="mailto:dpo@hydrafacial.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  dpo@hydrafacial.com
                </a>
              </p>
              <p>
                Si tiene alguna duda o pregunta en relación con este aviso, sus
                datos personales o para conocer y hacer valer sus derechos, no
                dude en ponerse en contacto con nosotros.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPageEs;
