import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getModifiedFileName } from "../../../common/utils/helper";
import Footer from "../../../components/footer";
import LanguageSelector from "../../../components/languageSelector";
import PageHeader from "../../../components/pageHeader";
import { LanguageContext } from "../../../hoc/languageProvider";
import styles from "../privacyPolicy.module.scss";

const PrivacyPolicyPageDe = () => {
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
              <strong className={styles["fontWeightExtraBold"]}>
                DATENSCHUTZERKLÄRUNG{" "}
              </strong>
              VON HYDRAFACIAL
            </h2>

            <em className={styles["updatedOn"]}>
              Diese Datenschutzerklärung wurde letztmals aktualisiert am
               24/02/2023.
            </em>

            <p>
              Dieser Datenschutzerklärung können Sie entnehmen, wie wir Ihre
              personenbezogenen Daten erheben, verwenden und schützen. Sie gilt
              für alle Produkte und Dienste von Hydrafacial.
            </p>
            <p>
              Von Zeit zu Zeit müssen wir diese Datenschutzerklärung
              möglicherweise ändern. Wenn wir der Ansicht sind, dass Sie nicht
              mit einer solchen Änderung rechnen müssen, werden wir Sie auf
              wesentliche Änderungen hinweisen, indem wir beispielsweise eine
              Mitteilung auf unserer Website einstellen und/oder Ihnen eine
              E-Mail schicken (sofern Sie uns Ihre E-Mail-Adresse mitgeteilt
              haben), wenn wir aufgrund einschlägiger Gesetze Änderungen
              vornehmen mussten. Sie können das Datum der letzten Aktualisierung
              jeweils diesem Kästchen entnehmen. Es liegt an Ihnen, diese
              Datenschutzerklärung regelmäßig einzusehen.
            </p>
            <div className={styles["summary"]}>
              <h3 className={styles["summaryTitle"]}>
                UNSERE DATENSCHUTZERKLÄRUNG AUF EINEN BLICK
              </h3>
              <ol>
                <li>
                  <strong>Unser Versprechen.</strong> Hydrafacial sieht sich dem
                  Schutz Ihrer personenbezogenen Daten verpflichtet. Wir werden
                  Ihre personenbezogenen Daten stets respektvoll behandeln und
                  unsere Produkte und Dienste so gestalten, dass der Schutz
                  Ihrer Privatsphäre berücksichtigt wird
                </li>
                <li>
                  <strong>Von uns erhobene Daten.</strong> Um Ihnen unsere
                  Dienste zur Verfügung stellen zu können, müssen wir
                  personenbezogene Daten von Ihnen verarbeiten, beispielsweise
                  Kontaktdaten, Kontoinformationen, Behandlungshistorie,
                  Zahlungsinformationen, Gerätekennungen oder Angaben über Ihre
                  Interaktion mit uns.
                </li>
                <li>
                  <strong>Wie wir Ihre Daten erheben.</strong> Wir beziehen
                  Daten von Ihnen, durch Ihre Nutzung unserer Produkte und
                  Dienste und aus externen Quellen.
                </li>
                <li>
                  <strong>Wie wir Ihre Daten nutzen.</strong> . Ihre Daten
                  können aus einer Reihe von Gründen entsprechend den
                  rechtlichen Standards genutzt werden. Die Verarbeitung Ihrer
                  Daten kann auf Ihrer
                  <strong> Einwilligung </strong>
                  (beispielsweise bei der Erstellung eines Kontos), auf
                  <strong>Vertragserfüllung </strong> (beispielsweise
                  Kundendienst), auf einer
                  <strong> rechtlichen Verpflichtung </strong>(beispielsweise,
                  wenn Sie Ihre Rechte ausüben oder eine Forderung erfüllt wird
                  oder auf unseren<strong>berechtigten Interessen</strong>{" "}
                  (beispielsweise bei Marketingaktivitäten und/oder
                  Betrugsprävention) beruhen.
                </li>
                <li>
                  <strong>Weitergabe von daten. </strong> Wir gegen Ihre Daten
                  in erster Linie an Dienstleistungsanbieter weiter, die uns
                  unterstützen und Support leisten. Dabei handelt es ich um
                  Gesellschaften der Hydrafacial-Gruppe oder Drittanbieter.
                </li>
                <li>
                  <strong>Schutz Ihrer Daten. </strong> Wir sind bestrebt,
                  angemessene technische und organisatorische Maßnahmen zu
                  ergreifen, um Ihre personenbezogenen Daten vor zufälliger oder
                  vorsätzlicher Zerstörung, zufälligem Verlust oder zufälliger
                  Veränderung, unbefugter Offenlegung und unbefugtem Zugriff
                  sowie anderen rechtwidrigen Formen der Verarbeitung zu
                  schützen.
                </li>
                <li>
                  <strong>Wie lange wir Ihre Daten aufbewahren. </strong> Wir
                  werden Ihre personenbezogenen Daten nicht länger verarbeiten
                  als erforderlich und wir werden sie nicht für andere Zwecke
                  verwenden, als die Zwecke, für die sie erhoben wurden.
                </li>
                <li>
                  <strong>Datenschutz in Bezug auf Kinder. </strong> Wir erheben
                  absichtlich keine personenbezogenen Daten von Kindern unter 13
                  Jahren.
                </li>
                <li>
                  <strong>Links zu anderen Websites.</strong> Wir übernehmen
                  keine Verantwortung für die verlinkten Websites.
                </li>
                <li>
                  <strong>Ihre Rechte.</strong> Ihnen stehen gegebenenfalls, je
                  nach Ihrem Standort und dem vor Ort geltenden Recht, in Bezug
                  auf Ihre personenbezogenen Daten bestimmte Rechte zu (z. B.
                  das Recht auf Auskunft, das Recht auf Zugriff, das Recht auf
                  Berichtigung, das Recht auf Löschung und das Recht, Beschwerde
                  einzulegen). Zusätzliche Informationen für Verbraucher in den
                  Vereinigten Staaten finden Sie nachstehend.
                </li>
              </ol>
              <p>
                Wir möchten Sie auffordern, unsere vollständige
                Datenschutzerklärung und unsere &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/de/${localString?.["cookiePolicy"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                >
                  Cookie-Richtlinie zu lesen,
                </a>
                &nbsp; die unten verlinkt ist, um umfassend zu verstehen, wie
                wir Ihre personenbezogenen Daten nutzen und welche Rechte Sie an
                Ihren Daten haben.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Unser Versprechen</h3>
              <p>
                Uns bei Hydrafacial ist es ein Anliegen, Ihre personenbezogenen
                Daten zu schützen. Wir werden diese jederzeit mit Respekt
                behandeln und unsere Produkte und Dienste so gestalten, dass
                Ihre Privatsphäre geschützt wird.
              </p>
              <p>
                Hydrafacial ist die Hauptmarke der Beauty Health Company (im
                Folgenden als „Hydrafacial”, „unser”, „uns” oder „wir”
                bezeichnet). Hydrafacial ist ein global tätiges, Kategorien
                schaffendes Unternehmen, das sich darauf konzentriert,
                Gesundheit- und Schönheitserfahrungen zu vermitteln, indem es
                die Beziehung der Verbraucher zu Ihrer Haut und Ihrem Körper neu
                definiert und ihr Selbstvertrauen stärkt.
              </p>
              <p>
                Mit der Hauptmarke HydraFacial wurde die Kategorie der
                Hydradermabrasion geschaffen. Diese Methode bedient sich eines
                Vortex-Fusion-Anwendungssystems, um die Haut zu reinigen, zu
                peelen, zu exfolieren und mit unternehmenseigenen Lösungen und
                Seren zu versorgen und zu hydrieren.
              </p>
              <p>
                Diese Datenschutzmitteilung bezieht sich auf die
                personenbezogenen Daten, die Hydrafacial oder ihre weltweit
                ansässigen, verbundenen Unternehmen oder Tochtergesellschaften
                innerhalb der Beauty Health Company-Unternehmensgruppe
                („verbundene Unternehmen”) auf verschiedenen Wegen erfassen und
                verarbeiten.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Definitionen</h3>
              <p>
                „Personenbezogene Informationen oder personenbezogene Daten”
                sind Informationen, die es (für sich betrachtet oder in
                Kombination mit anderen Informationen) ermöglichen, Sie
                unmittelbar oder mittelbar zu identifizieren.
              </p>
              <p>
                „Verantwortlicher” bezeichnet eine Partei, die die Zwecke und
                Mittel der Verarbeitung von personenbezogenen Daten festlegt.
              </p>
              <p>
                „Auftragsverarbeiter oder
                Dienstleistungsanbieter/Subunternehmer/Drittpartei” bezeichnet
                eine Partei, die für den Verantwortlichen personenbezogen Daten
                verarbeitet.
              </p>
              <p>
                „Klient oder Verbraucher” bezeichnet eine Person, die eine
                Hydrafacial-Behandlung erhält.
              </p>
              <p>
                „Behandlungsanbieter” bezeichnet einen Experten, der eine
                Hydrafacial-Behandlung durchführt.
              </p>
              <p>
                „Anbieter oder Kunde” bezeichnet eine Klinik oder ein Zentrum,
                das Hydrafacial-Behandlungen anbietet.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Von uns erhobene Daten</h3>
              <p>
                Um Ihnen unsere Produkte und/oder Dienste anbieten zu können,
                müssen wir Ihre personenbezogenen Daten verarbeiten. Die von uns
                erhobenen personenbezogenen Daten umfassen beispielsweise
                Folgendes:
              </p>
              <ul>
                <li>
                  Ihre Kontaktdaten, wie vollständiger Name, physische und
                  E-Mail-Adresse, Telefonnummer(n), Name der Klinik/des Zentrums
                  mit näheren Angaben – und, falls Sie Kosmetikerin sind, Name
                  Ihres Unternehmens oder Arbeitgebers sowie Adresse und
                  Telefonnummer, um mit Ihnen Geschäfte tätigen zu können.
                </li>
                <li>
                  Ihre Kontodaten, wie beispielsweise E-Mail-Adresse,
                  vollständiger Name, Nutzername und Passwort, Telefonnummer,
                  Geburtsdatum, Postleitzahl und persönliches Foto, sofern Sie
                  uns ein solches für die Einrichtung eines Kontos zur Verfügung
                  stellen wollen.
                </li>
                <li>
                  Ihren Lebenslauf und die Informationen, die Sie uns während
                  des Einstellungsvorgangs zur Verfügung gestellt haben.
                </li>
                <li>
                  Ihre Behandlungshistorie*, die Art der erhaltenen Behandlung,
                  etwaige zusätzliche Anpassungen und die verwendeten Produkte
                  (falls zutreffend), sofern Sie über ein Hydrafacial-Konto
                  verfügen.
                </li>
                <li>
                  Ihre Zahlungsdaten und Bankangaben, um Ihre Kaufaufträge
                  ausführen zu können.
                </li>
                <li>
                  Zu den Gerätekennungen zählen: Ihre IP-Adresse, Ihr
                  Betriebssystem, Ihr Gerät und Ihr Standort, sofern Sie unsere
                  Online-Dienste in Anspruch nehmen.
                </li>
                <li>
                  Informationen über Ihre Interaktion mit uns, unsere Websites
                  und unsere Diensten.
                </li>
              </ul>
              <p>
                *Es steht Verbrauchern frei, zu entscheiden, ob sie ihre
                Behandlungshistorie den Behandlungsanbietern mitteilen wollen.
                Wenn Behandlungsanbieter ein HydraFacial-Gerät verwenden, steht
                es ihnen ihrerseits frei, zu entscheiden, ob sie ihr
                Applikationskonto mit dem Gerät synchronisieren wollen, um eine
                Aufzeichnung der Behandlungshistorie des entsprechenden
                Anbieters zur Verfügung zu haben. Behandlungsanbieter können
                aggregierte Behandlungsdaten über die von ihnen durchgeführten
                Behandlungen einsehen. Mit für einen Behandlungsanbieter
                einsehbaren Behandlungen sind keine personenbezogenen Daten
                verknüpft.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Wie wir ihre Daten erheben
              </h3>
              <p>
                Wir beziehen Daten von Ihnen, Ihrer Nutzung unserer Dienste und
                externen Quellen (z. B. öffentlich zugänglichen Quellen).
              </p>
              <p>Wir erheben personenbezogene Daten, wenn:</p>
              <ul>
                <li>
                  Sie sich anmelden, um Informationen über Produkte oder andere
                  Dienste zu erhalten;
                </li>
                <li>
                  Sie mit uns interagieren oder über soziale Medien Anfragen
                  stellen;
                </li>
                <li>Sie einen Kauf tätigen;</li>
                <li>Sie ein Produkt oder Dienstleistungen erwerben;.</li>
                <li>Sie Ihr Konto erstellen oder aktualisieren;</li>
                <li>Sie die Funktionen der Hydrafacial-App nutzen;</li>
                <li>
                  Sie sich um einen Arbeitsplatz beworben haben und ein
                  Einstellungsverfahren läuft;
                </li>
                <li>Sie auf Mitteilungen oder Umfragen antworten;</li>
                <li>
                  Sie auf unserer Website oder durch unsere Online-Dienste
                  navigieren.
                </li>
              </ul>
              <p>
                Wir erheben Daten darüber, wie Sie bestimmte Technologien wie
                Cookies oder Gerät-Fingerprinting nutzen, mit anderen Worten
                Techniken, die dazu dienen, mithilfe einer Kombination von
                Informationen Ihr Gerät zu identifizieren
              </p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>
                Es steht Ihnen frei, Cookies von irgendeiner Website zu
                akzeptieren oder abzulehnen, indem Sie die Einstellungen in
                Ihrem Browser entsprechend anpassen. Wenn Sie von unserer
                Website platzierte Cookies einschränken oder blockieren wollen,
                können Sie dies in den Einstellungen in Ihrem Browser tun.
                Informationen darüber, wie man Cookies verwalten oder
                deaktivieren kann, finden Sie über die ‚Hilfe-‘ Funktion Ihres
                Browsers sowie unter
                <a href="https://www.aboutcookies.org/" target={"_blank"}>
                  https://www.aboutcookies.org/
                </a>{" "}
                oder{" "}
                <a href="https://www.allaboutcookies.org/" target={"_blank"}>
                  https://www.allaboutcookies.org/
                </a>{" "}
                . Beachten Sie jedoch bitte, dass die Funktionalität unserer
                Website beeinträchtigt werden könnte und Sie möglicherweise
                keinen Zugang mehr zu bestimmten Bereichen oder Funktionen
                unsere Website haben, wenn Sie Cookies löschen oder
                deaktivieren.
              </p>
              <p>
                Nähere Angaben darüber, wie wir Cookies und ähnliche Anwendungen
                verwenden, die wir gegebenenfalls auf den Endgeräten unsere
                Kunden und Nutzer platzieren, finden Sie in unserer &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/de/${localString?.["cookiePolicy"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                >
                  Cookie-Richtlinie
                </a>
                .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Wie wir Ihre Daten nutzen
              </h3>
              <p>
                Wir können Ihre Daten, basierend auf diversen rechtlichen
                Grundlagen, für verschiedene Zwecke nutzen, beispielsweise um:
              </p>
              <ul>
                <li>
                  Sie zu kontaktieren und Ihnen die von Ihnen gewünschte
                  Auskunft zu erteilen – basierend auf Ihrer Einwilligung;
                </li>
                <li>
                  Ihre Zahlungen für Bestellungen und sonstige Geschäfts- oder
                  Kontozwecke zu verarbeiten– basierend auf einer rechtlichen
                  Verpflichtung und/oder um einen Vertrag zu erfüllen;
                </li>
                <li>
                  Kundendienst zu leisten – basierend auf einer rechtlichen
                  Verpflichtung und/oder um einen Vertrag zu erfüllen;
                </li>
                <li>
                  Ihren Wunsch nach einem Geschäftsabschluss mit uns zu
                  verarbeiten – basierend auf Ihrer Einwilligung;
                </li>
                <li>
                  ein Konto zu erstellen, zu aktualisieren oder zu verwalten
                  oder Support dafür bereitzustellen – basierend auf Ihrer
                  Einwilligung und/oder um einen Vertrag zu erfüllen;
                </li>
                <li>
                  Sie per E-Mail, Telefon, SMS oder über soziale Medien oder
                  Posts über Werbeaktionen und neue Entwicklungen zu informieren
                  oder Sie per E-Mail/SMS einzuladen, ein Konto zu erstellen,
                  wenn Sie unser Produkt oder unsere Dienste (je nach Ihren
                  Präferenzen) nutzen – basierend auf Ihrer Einwilligung oder
                  unseren berechtigten Interessen;
                </li>
                <li>
                  Ihnen und anderen Kunden über unser Marketingprogramm
                  relevante Informationen zukommen zu lassen – basierend auf
                  unseren berechtigten Interessen;
                </li>
                <li>
                  Ihr berufliches Profil und Ihren Hintergrund zu prüfen, wenn
                  Sie sich um einen Arbeitsplatz bewerben sowie während des
                  Einstellungsverfahrens, um den richtigen Kandidaten
                  auszuwählen;
                </li>
                <li>
                  Marktforschung und Produktentwicklung zu betreiben und
                  statistische Zwecke zu erfüllen – basierend auf unseren
                  berechtigten Interessen;
                </li>
                <li>
                  Betrug zu erkennen und Betrug vorzubeugen und unbefugten
                  Zugriff auf das Produkt und/oder die Dienste und andere
                  illegale Aktivitäten zu verhindern – basierend auf unseren
                  berechtigten Interessen;
                </li>
                <li>
                  Forderungen einzutreiben – basierend auf unseren berechtigten
                  Interessen;
                </li>
                <li>
                  Bewertungen und Analysen durchzuführen, die uns in die Lage
                  versetzen, die von uns angebotenen Dienste zu überprüfen,
                  weiterzuentwickeln und zu verbessern – basierend auf unseren
                  berechtigten Interessen.
                </li>
              </ul>
              <p>
                Wie gesagt, müssen wir Ihre personenbezogenen Daten mitunter für
                unsere berechtigten Geschäftsinteressen nutzen, um
                sicherzustellen, dass wir weiterhin eine großartige
                Kundenerfahrung bieten können. In jedem Fall werden wir unsere
                Interessen gegen Ihre Interessen abwägen.
              </p>
              <p>
                Die folgenden Vorgänge dienen als Beispiele für unsere
                berechtigten Interessen:
              </p>
              <ul>
                <li>
                  Betrugserkennung und –prävention im gesamten Unternehmen
                  Hydrafacial, was sich auch auf Überprüfungen auf der Grundlage
                  öffentlich zugänglicher Informationen und sozialer
                  Medienprofile erstrecken kann.
                </li>
                <li>
                  Interaktion und Kontaktaufnahme mit Ihnen, um sicherzustellen,
                  dass Sie als Hydrafacial-Kunde gute Erfahrungen machen.
                </li>
                <li>
                  Interne Prüfung unserer Prozesse, um unsere hohen Standards
                  weiterhin halten zu können.
                </li>
                <li>Einige unserer Marketingaktivitäten.</li>
                <li>
                  Weiterleitung von Daten an ausgewählte dritte Parteien, um
                  unsere Produkte weiter aufzuwerten.
                </li>
              </ul>
              <p>
                Hydrafacial kann mit Ihnen von Zeit zu Zeit Kontakt aufnehmen,
                um Sie zu bitten, an einer Umfrage teilzunehmen, die uns in die
                Lage versetzt, unsere Dienste zu überprüfen, weiterzuentwickeln
                und zu verbessern.
              </p>
              <p>
                Die Ergebnisse unserer Umfragen, einschließlich der zur
                Verfügung gestellten personenbezogenen Daten, wird Hydrafacial
                nur für die in dieser Datenschutzerklärung genannten Zwecke
                verwenden. Die personenbezogenen Daten können beispielsweise
                (unter anderem) Ihren Namen, Ihr Alter und Ihre E-Mail-Adresse
                umfassen. Wir können auch bestimmte Kategorien von
                personenbezogenen Daten erheben, je nachdem, an welcher Umfrage
                Sie teilnehmen.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Weitergabe von Daten </h3>
              <p>
                Wir verkaufen Ihre personenbezogenen Daten nicht an dritte
                Parteien.
              </p>
              <p>
                Wir können andere Unternehmen, beispielsweise
                Auftragsverarbeiter (Dienstleistungsanbieter) einsetzen, um in
                unserem Auftrag bestimmte Funktionen zu erfüllen. Wir können
                Ihre personenbezogenen Daten an Auftragsverarbeiter
                weiterleiten, die uns bei bestimmten Geschäftsfunktionen
                unterstützen, wie beispielsweise Zahlungsabwicklung, Verpackung
                und Versand, soweit erforderlich auch an Rechtsanwaltskanzleien,
                Berater und Wirtschaftsprüfer, oder zur Erfüllung von Funktionen
                wie CRM-Dienste, E-Mail-Dienste, Produktfeedbacks, Software für
                das Help Desk oder Websiteanalytik. Erhält Hydrafacial von Ihnen
                personenbezogene Daten, die anschließend zur Verarbeitung an
                einen Auftragsverarbeiter weitergeleitet werden, bleibt
                Hydrafacial weiterhin dafür verantwortlich, sicherzustellen,
                dass der entsprechende Auftragsverarbeiter Ihre
                personenbezogenen Daten entsprechend den Standards verarbeitet,
                die durch die einschlägigen Datenschutzgesetze, beispielsweise
                die europäische Datenschutz-Grundverordnung („DSGVO”).
                vorgegeben werden. Solche Übermittlungen basieren in der Regel
                auf unseren berechtigten Interessen oder auf vertraglicher
                Vereinbarung.
              </p>
              <p>
                Es kann erforderlich sein, Ihre personenbezogenen Daten an
                andere Gruppengesellschaften oder Dienstleistungsanbieter
                weiterzuleiten, die in den Vereinigten Staaten ansässig sind. In
                solchen Fällen werden wir entsprechende Schritte unternehmen, um
                sicherzustellen, dass Ihre Daten nach Maßgabe der einschlägigen
                Regelungen ein angemessenes Maß an Schutz genießen und nur für
                Zwecke genutzt werden, die mit dieser Datenschutzerklärung
                vereinbar sind, basierend jeweils auf unseren berechtigten
                Interessen oder auf vertraglichen Notwendigkeiten
              </p>
              <p>
                Unter bestimmten Umständen werden wir Ihre Daten an externe
                Unternehmen weiterleiten. Dabei spielt der Datenschutz stets
                eine übergeordnete Rolle und wir werden uns bemühen, die bei den
                entsprechenden Gelegenheiten weitergeleitete Datenmenge zu
                minimieren.
              </p>
              <p>Es kann sich beispielsweise um folgende Umstände handeln:</p>
              <ul>
                <li>
                  Weiterleitung an sorgfältig ausgewählte Partner, um unsere
                  Produkte noch weiter aufzuwerten.
                </li>
                <li>
                  Weiterleitung an dritte Parteien, damit wir Umfragen
                  durchführen können.
                </li>
                <li>
                  Erstellen eines Marketingprofils, um ähnliche Kunden mit
                  ähnlichen Bedürfnissen zu finden.
                </li>
              </ul>
              <p>
                Neben den oben genannten Fällen gibt es weitere Szenarien, in
                denen wir Ihre Daten weiterleiten müssen. Es kann sich
                beispielsweise um folgende Umstände handeln:
              </p>
              <ul>
                <li>Wir sind rechtlich zur Weiterleitung verpflichtet.</li>
                <li>
                  Es besteht eine Pflicht zur Offenlegung gegenüber der
                  Öffentlichkeit.
                </li>
                <li>
                  Eine Offenlegung ist erforderlich, um unsere Interessen zu
                  schützen.
                </li>
                <li>
                  Die Offenlegung erfolgt auf Ihren Wunsch oder mit Ihrer
                  Einwilligung.
                </li>
              </ul>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Internationale Übermittlungen
              </h3>
              <p>
                Hydrafacial ist ein weltweit tätiges Unternehmen. Deshalb können
                personenbezogene Daten von Personen, die unsere Websites
                besuchen und/oder unser Produkt oder unsere Dienste erwerben
                oder auf sonstige Weise mit uns interagieren, von überall auf
                der Welt aus übermittelt und abgerufen werden, beispielsweise
                von Ländern aus, in denen Hydrafacial, die mit Hydrafacial
                verbundenen Unternehmen oder unsere Auftragsverarbeiter tätig
                sind. 
              </p>
              <p>
                Wir werden Ihre personenbezogene Daten entsprechend dieser
                Datenschutzerklärung schützen, unabhängig davon, wo sie
                verarbeitet werden. Freiwillig oder aktiv übermitteln wir
                personenbezogene Daten von Kunden nicht an staatliche Stellen
                oder Vollstreckungsbehörden („Behörden“) und legen diesen
                gegenüber keine Daten offen. Wir gewähren Behörden auch keinen
                sonstigen Zugang zu Ihren personenbezogenen Daten. Für den Fall
                von behördlichen Anforderungen haben wir Verfahren und
                Kontrollen eingeführt, um sicherzustellen, dass entsprechende
                Anforderungen nach Maßgabe des in unserem{" "}
                <a
                  href={getModifiedFileName(
                    `/files/de/${localString?.["transparencyReport"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                >
                  Transparenzbericht dargelegten
                </a>{" "}
                Verfahrens beurteilt werden .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Informationen für Personen im Europäischen Wirtschaftsraum
                („EWR”) oder im Vereinigten Königreich („UK”) 
              </h3>
              <p className={styles["sectionDescription"]}>
                Als weltweit tätiges Unternehmen kann Hydrafacial
                personenbezogene Daten aus dem EWR oder dem Vereinigten
                Königreich in die Vereinigten Staaten oder in andere Länder
                übermitteln, auch personenbezogene Daten von im EWR oder im
                Vereinigten Königreich ansässigen Personen, die unsere Websites
                besuchen und/oder unser Produkt oder unsere Dienste erwerben
                oder auf sonstige Weise mit uns interagieren.
              </p>
              <p className={styles["sectionDescription"]}>
                Wenn Hydrafacial personenbezogene Daten auf solche Weise
                übermittelt, kann das Unternehmen sich berufen auf:
              </p>
              <ul>
                <li className={styles["sectionDescription"]}>
                  {" "}
                  Einen Angemessenheitsbeschluss:
                  <ul>
                    <li className={styles["sectionDescription"]}>
                      der Europäischen Kommission („EK”), basierend auf Artikel
                      45 der Verordnung (EU) 2016/679 (DSGVO) – weitere
                      Informationen und eine vollständige Liste der bis zum
                      heutigen Zeitpunkt als angemessen betrachteten Länder
                      finden Sie unter 
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
                      des zuständigen britischen Ministers, basierend auf
                      Artikel 45 der UK GDPR sowie § 17A des Datenschutzgesetzes
                      von 2018 - weitere Informationen und eine vollständige
                      Liste der bis zum heutigen Zeitpunkt als angemessen
                      betrachteten Länder finden Sie unter visit 
                      <a
                        href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/
                      </a>
                      oder
                    </li>
                    <li className={styles["sectionDescription"]}>
                      die &nbsp;
                      <a
                        href={getModifiedFileName(
                          `/files/de/${localString?.["standardContractualClauses"]}`
                        )}
                        style={{
                          color: "#0d6efd",
                          textDecoration: "underline",
                        }}
                        download
                        target="_blank"
                      >
                        Standardvertragsklauseln
                      </a>
                      &nbsp; der EK („SVK”) oder den Zusatz des
                      UK-Datenschutzbeauftragten betreffend Übermittlungen
                      („IDTA”), ergänzt durch zusätzliche Sicherungsmaßnahmen,
                      die vom Europäischen Datenschutzausschuss empfohlen
                      werden.
                    </li>
                  </ul>
                </li>
              </ul>
              {/*eslint-disable-next-line react/no-unescaped-entities*/}
              <p className={styles["sectionDescription"]}>
                Der EK-Datenschutzbeauftragte und der UK-Datenschutzbeauftragte
                („DSB“) haben beschlossen, dass SVK und IDTA einen ausreichenden
                Schutz personenbezogener Daten bei Übermittlungen außerhalb des
                EWR und des Vereinigten Königreichs bieten. Weitere
                Informationen finden Sie unter 
                <a
                  href="         https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
                </a>{" "}
                und
                <a
                  href="  https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-data-transfer-agreement-and-guidance/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-data-transfer-agreement-and-guidance/
                </a>
                .
              </p>
              <p className={styles["sectionDescription"]}>
                Hydrafacial führt hinsichtlich der Übermittlungen
                Datenschutzfolgenabschätzungen durch und beobachtet ständig die
                Übermittlungsumstände, um sicherzustellen, dass bei den
                Übermittlungen in der Praxis ein Schutzniveau gewahrt wird, das
                im Wesentlichen dem von dem europäischen und dem
                UK-Datenschutzrecht garantierten Schutzniveau entspricht. 
              </p>
              <p className={styles["sectionDescription"]}>
                Wir halten uns in Bezug auf alle internationalen
                Datenübermittlungen standortunabhängig an die gleichen, in
                dieser Datenschutzerklärung beschriebenen Bedingungen und
                Anforderungen, sorgen für angemessene Sicherheitsvorkehrungen
                und schützen Ihre personenbezogenen Daten jederzeit. Dabei
                bedienen wir uns der bequemsten Datenübermittlungs-Tools und
                orientieren uns an dem von den Regulierungsbehörden ausgegebenen
                Mustervertrag.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Informationen für Personen in China, Südkorea und Indonesien
              </h3>
              <p className={styles["sectionDescription"]}>
                Verarbeitete personenbezogene Daten werden auf lokalen Servern
                in dem jeweiligen Land gespeichert und es findet keine
                grenzübergreifende Datenübermittlung in Drittländer statt.
              </p>
            </div>

            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Schutz Ihrer Daten</h3>
              <p>
                Hydrafacial ist bestrebt, angemessene technische und
                organisatorische Maßnahmen einzuführen, um Ihre
                personenbezogenen Daten vor zufälliger oder rechtswidriger
                Zerstörung, zufälligem Verlust, Veränderungen, unbefugter
                Offenlegung oder unbefugtem Zugriff und vor anderen Formen
                rechtswidriger Verarbeitung zu schützen. Unser Ziel ist es,
                dafür zu sorgen, dass das Sicherheitsniveau und die zum Schutz
                Ihrer personenbezogene Daten eingeführten Maßnahmen den Risiken
                angemessen sind, die mit der Art der personenbezogenen Daten und
                deren Nutzung verbunden sind. Zum Schutz unserer IT-Umgebung und
                unserer physischen Einrichtungen wenden wir anerkannte
                Branchenpraktiken an. Zu den ergriffenen Maßnahmen zählen
                beispielsweise unter anderem:
              </p>
              <ul>
                <li>Zugangsmanagement</li>
                <li>VPN (virtuelles privates Netzwerk) für Fernzugriff</li>
                <li>
                  Verschlüsselung von Daten im Ruhezustand und während der
                  Übermittlung
                </li>
                <li>Backup- und Wiederherstellungsfunktionen</li>
                <li>Firewalls</li>
                <li>Antivirus software</li>
                <li>Mehrstufige Authentifizierung (MA)</li>
                <li>E-Mail-Sicherheitsfilterung</li>
                <li>Schulung für Sicherheitsbewusstsein</li>
              </ul>
              <p>
                Auf unseren Websites und Apps schützen wir Daten, die Sie uns
                zur Verfügung gestellt haben, indem wir Ihnen eine Nutzer-ID und
                ein Passwort zuweisen. Wir verwenden zudem
                Sicherheitsvorkehrungen nach Branchenstandard, um sensible Daten
                während der Übermittlung an unsere Server zu schützen. Nutzer-ID
                und Passwort helfen uns, Ihre personenbezogenen Daten zu
                schützen. Es liegt an Ihnen, Ihr Passwort sicher aufzubewahren
                und niemandem gegenüber offenzulegen.
              </p>
              <p>
                Einige verdächtige E-Mails enthalten Anhänge oder Links zu
                Websites, die versuchen, Malware auf Ihrem Computer zu
                installieren. Wenn Sie Ihr Passwort auf einer Website eingegeben
                haben, die Sie für möglicherweise gefährlich halten, nehmen Sie
                bitte sofort mit uns Kontakt auf und bitten Sie uns, Ihr
                Passwort zu ändern
              </p>
              <p>
                Wenn Sie Ihre Zahlungsdaten auf einer Website eingegeben haben,
                die Sie für möglicherweise gefährlich halten oder auf eine
                E-Mail mit den entsprechenden Angaben geantwortet haben, sollten
                Sie sich unverzüglich mit Ihrem Kreditkartenunternehmen in
                Verbindung setzen. Vergessen Sie nicht, uns Ihre neuen
                Kartendaten mitzuteilen.
              </p>
              <p>
                Wenn Sie uns um ein Angebot bitten, verarbeiten wir die Daten
                auf einem sicheren Server. Ihr Browser wird bestätigen, dass Sie
                sich in einem sicheren Bereich bewegen, indem er Ihnen in der
                unteren rechten Ecke Ihres Browserfensters einen ungebrochenen
                Schlüssel oder ein ungebrochenes Schloss anzeigt.
              </p>
              <p>
                Viele Organisationen verwenden Sicherheitsfunktionen wie
                Firewalls zum Schutz ihrer Computersysteme. Solche Firewalls
                können verhindern, dass Sie sich mit unserem sicheren Server
                verbinden können. Wenn Sie in der Arbeit sind und sich nicht mit
                unserer Website verbinden können, sprechen Sie bitte Ihren
                IT-Administrator an.
              </p>
              <p>
                Bitte beachten Sie, dass Kommunikationen über das Internet, wie
                beispielsweise E-Mails, nicht sicher sind, solange sie
                unverschlüsselt bleiben. Ihre Mitteilungen werden möglicherweise
                durch eine ganze Reihe von Ländern geroutet, ehe sie zugestellt
                werden – das liegt in der Natur des Internets. Wir übernehmen
                keine Verantwortung für einen unbefugten Zugriff auf
                personenbezogene Daten oder deren Verlust, wenn diese unserer
                Kontrolle entzogen sind.
              </p>
              <p>
                Zusätzlich können Sie Ihr System schützen, indem Sie ein
                Antivirus-Programm installieren und die vom Anbieter empfohlenen
                Scans laufen lassen. Sie können auch Sicherheits-Updates /
                Patches laufen lassen, die Sie vom Anbieter Ihres Systems
                erhalten.
              </p>
              <p>
                Antworten Sie niemals auf E-Mails, die sie unaufgefordert aus
                unbekannten Quellen erhalten. Solche E-Mails können
                betrügerischer Art sein und versuchen, Ihnen persönliche Angaben
                oder Zahlungsdaten zu entlocken.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Wie lange wir Ihre Daten aufbewahren
              </h3>
              <p>
                Wir werden Ihre personenbezogenen Daten nicht länger als
                notwendig und nicht für andere Zwecke, als die, für die sie
                erhoben wurden, verarbeiten. Wir speichern Ihre
                personenbezogenen Daten unterschiedlich lange, je nach Kategorie
                der personenbezogenen Daten und der Art der Beziehung zwischen
                Ihnen und uns. Wir entscheiden von Fall zu Fall, wie lange wir
                Ihre personenbezogenen Daten benötigen. Unser Ziel ist es
                jedoch, Ihre personenbezogenen Daten so kurz wie möglich
                aufzubewahren, um die Zwecke zu erfüllen, für welche die
                personenbezogenen Daten erhoben wurden.
              </p>
              <p>
                Wir unterliegen verschiedenen gesetzlichen Anforderungen
                bezüglich der Aufbewahrung von Daten und verfolgen bei der
                Aufbewahrung Ihrer Daten für einen bestimmten Zeitraum auch
                eigene Interessen. Diese betreffen beispielsweise die Abwehr von
                verspäteten oder verzögerten Forderungen oder die Verbesserung
                unserer Produkte und Dienste.
              </p>
              <p>
                Wenn Sie nach Erhalt einer E-Mail/SMS von Hydrafacial, in der
                Sie eingeladen werden, ein Konto zu erstellen, weil Sie eine
                Hydrafacial-Behandlung (Syndeo) erhalten haben, nichts
                unternehmen, löschen wir Ihre Daten automatisch nach einer
                angemessenen Frist.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Datenschutz in Bezug auf Kinder
              </h3>
              <p>
                Wir erheben nicht absichtlich personenbezogene Daten von Kindern
                unter 13 Jahren. Unsere Produkte sind auch nicht für den Verkauf
                an Kinder oder die Nutzung durch Kinder bestimmt. Eltern sollten
                wissen, dass es Tools für die elterliche Kontrolle gibt, die
                online zur Verfügung stehen und die verwendet werden können, um
                Kinder davon abzuhalten, ohne elterliche Erlaubnis online
                Informationen preiszugeben oder auf Material zuzugreifen, das
                für Minderjährliche schädlich ist.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Links zu anderen Websites
              </h3>
              <p>
                Um Ihre Erfahrung mit Hydrafacial zu verbessern, kann unsere
                Website Links zu anderen Websites enthalten. Diese Websites
                haben ihre eigenen Datenschutzrichtlinien, die Sie vielleicht
                einsehen möchten. Hydrafacial übernimmt keine Verantwortung für
                die Inhalte, die auf verlinkten Websites dritter Parteien
                gehostet werden.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Ihre Rechte </h3>
              <p>
                Sie haben, je nach Ihrem Standort und den geltenden örtlichen
                Gesetzen, gegebenenfalls bestimmte Rechte in Bezug auf Ihre
                personenbezogenen Daten. Es stehen Ihnen beispielsweise die
                folgenden Rechte zu, für die jedoch Ausnahmen oder
                Einschränkungen gelten können:
              </p>
              <ul>
                <li>
                  das Recht, zu erfahren, dass personenbezogene Daten erhoben
                  werden und für welche Zwecke dies erfolgt;  
                </li>
                <li>
                  das Recht, zu erfahren, welche personenbezogenen Daten für
                  welche Zwecke an welche Kategorien von Empfängern „verkauft”
                  oder „weitergeleitet” werden;
                </li>
                <li>das Recht auf Zugang zu Ihren personenbezogenen Daten;</li>
                <li>
                  das Recht auf Korrektur oder Aktualisierung Ihrer
                  personenbezogenen Daten;
                </li>
                <li>
                  das Recht, von uns unter bestimmten Umständen die
                  Einschränkung der Verarbeitung Ihrer Daten zu verlangen,
                  beispielsweise, wenn Sie Bedenken hinsichtlich der Richtigkeit
                  der Daten oder der Art der Verwendung haben;
                </li>
                <li>
                  das Recht auf Löschung Ihrer personenbezogenen Daten, auch bei
                  dritten Parteien, an Ihre personenbezogenen Daten verkauft,
                  weitergeleitet oder offengelegt wurden;
                </li>
                <li>
                  das Recht, den „Verkauf” oder die „Weiterleitung” Ihrer
                  personenbezogenen Daten auszuschließen.
                </li>
                <li>
                  das Recht, von uns die Übermittlung der uns überlassenen Daten
                  von einer Organisation an eine andere Organisation oder an Sie
                  zu verlangen;
                </li>
                <li>
                  das Recht, der Verarbeitung Ihrer personenbezogenen Daten zu
                  widersprechen;
                </li>
                <li>
                  das Recht, keiner automatisierten Entscheidungsfindung und
                  keinem Profiling ausgesetzt zu werden.
                </li>
              </ul>
              <p>
                Wenn Sie auf personenbezogene Daten zugreifen, diese prüfen,
                aktualisieren, korrigieren oder löschen oder sonstige Ihnen
                zustehende Datenschutzrechte ausüben wollen, können Sie dieses
                Antragsformular ausfüllen . Bitte beachten Sie, dass Ihnen diese
                Rechte nicht unter allen Umständen zustehen. Soweit wie möglich
                werden wir jedoch Ihrem Wunsch entsprechen.
              </p>
              <p>
                Unser Datenschutzteam wird Ihre verifizierbare
                datenschutzrechtliche Anforderung („datenschutzrechtliche
                Anforderung”) prüfen und Ihnen so schnell wie möglich antworten.
                Sollten wir nicht in der Lage sein, Ihrer Anforderung zu
                entsprechen, weil eine Ausnahmen oder Einschränkung zum Tragen
                kommen, werden wir Ihnen dies schriftlich erklären. Sofern wir
                mehr Zeit benötigen, werden wir Ihnen den Grund mitteilen und
                Sie über die Verlängerungsfrist informieren. 
              </p>
              <p>
                Möchten Sie eine datenschutzrechtliche Anforderung durch einen
                Bevollmächtigten in Ihrem Namen vorbringen lassen, kann der
                Bevollmächtigte dafür das Antragsformular verwenden. Wir werden
                Sie um eine schriftliche, unterzeichnete Bestätigung bitten,
                dass der Bevollmächtigte befugt ist, in Ihrem Namen zu handeln.
                Sobald die schriftliche Bevollmächtigungsbestätigung eingegangen
                ist, werden wir Ihre datenschutzrechtliche Anforderung prüfen
                und Ihnen so schnell wie möglich antworten. Wir werden unsere
                Antwort bezüglich unserer Entscheidung über die Erfüllung Ihrer
                datenschutzrechtlichen Anforderung direkt an die E-Mail-Adresse
                schicken, die der Bevollmächtigte angegeben hat.
              </p>
              <p>
                Wir möchten Sie daran erinnern, dass Sie das Recht haben, bei
                einer Datenschutzbehörde („DSchB”) Beschwerde einzulegen, wenn
                Sie mit der Verarbeitung Ihrer personenbezogenen Daten
                unzufrieden sind.
              </p>
              <p>
                DSchB im EWR:
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no
                </a>
              </p>
              <p>
                DSchB im Vereinigten Königreich:
                <a
                  href="https://ico.org.uk/global/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ico.org.uk/global/contact-us/
                </a>
              </p>
              <p>
                DSchB in der Schweiz:
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
                Zusätzliche Informationen für Verbraucher in den Vereinigten
                Staaten
              </h3>
              <div className={styles["sectionDescription"]}>
                <p className={styles["sectionDescription"]}>
                  Nach dem Datenschutzgesetz von Kalifornien (‚CPRA’) und dem
                  Datenschutzgesetz des Virginia Commonwealth (‚CDPA’) stehen
                  den Einwohnern von Kalifornien und Virginia bestimmte Rechte
                  hinsichtlich ihrer von Unternehmen erhobenen und verarbeiteten
                  personenbezogenen Daten zu. Dazu zählen das Recht, Datenzugang
                  oder Löschung ihrer personenbezogenen Daten zu verlangen,
                  sowie das Recht, ein Unternehmen anzuweisen, den Verkauf oder
                  die Weiterleitung ihrer personenbezogenen Daten einzustellen. 
                </p>
                <p className={styles["sectionDescription"]}>
                  Wir sind verpflichtet, die Kategorien von personenbezogenen
                  Daten anzugeben, die wir für die in dem Abschnitt „Wie wir
                  ihre Daten nutzen” dieser Datenschutzerklärung angegebenen
                  Zwecke erheben und/oder für die in dem Abschnitt „Weitergabe
                  von Daten” bezeichneten Zwecke an Auftragsverarbeiter
                  weiterleiten.
                </p>
                <p className={styles["sectionDescription"]}>
                  Für unsere Geschäftszwecke erheben wir die folgenden
                  Kategorien von personenbezogenen Daten und haben solche Daten
                  auch in den letzten 12 Monaten erhoben:
                </p>
                <ul>
                  <li className={styles["sectionDescription"]}>
                    persönliche Kennungen;
                  </li>
                  <li className={styles["sectionDescription"]}>
                    von Cookies und anderen Technologien gesammelte
                    Informationen, wie beispielsweise IP-Adresse;
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Informationen über Aktivitäten im Internet oder in anderen
                    elektronischen Netzwerken, wie beispielsweise
                    Kontoprotokolldaten, Inhalte, die Sie angesehen oder mit
                    denen Sie interagiert haben, sowie Informationen über Konto,
                    Browser und Gerät;
                  </li>
                  <li className={styles["sectionDescription"]}>
                    aus den oben bezeichneten Kategorien von personenbezogenen
                    Daten gezogene Rückschlüsse.
                  </li>
                </ul>
                <p className={styles["sectionDescription"]}>
                  Wenngleich Hydrafacial personenbezogene Daten nicht für Geld
                  verkauft, leiten wir personenbezogene Daten doch auch für
                  andere als die in Cal. Civ. Code 1798.140(ad)(2) definierten
                  Vorteile weiter. In den vergangenen 12 Monaten haben wir
                  personenbezogene Daten weitergeleitet, soweit dies für
                  bestimmte „Geschäftszwecke”, wie in Cal. Civ. Code 1798.140(e)
                  definiert, erforderlich war. Nähere Angaben dazu finden sich
                  in dem Abschnitt „Weiterleitung von Daten”. Dazu gehört
                  beispielsweise die Weiterleitung von persönlichen Kennungen,
                  geschäftlichen Informationen oder Aktivitäten im Internet oder
                  in anderen elektronischen Netzwerken mit
                  Zahlungsdienstleistern oder dem Kundenbeziehungsmanagement in
                  Bezug auf Funktionen wie Beratung, E-Mail, Produktfeedback,
                  Help Desk-Service oder mit Werbenetzwerken und
                  Websiteanalytik-Anbietern. Sie haben das Recht, Hydrafacial
                  anzuweisen, Ihre personenbezogenen Daten nicht zu verkaufen
                  oder weiterzuleiten.
                </p>
                <p className={styles["sectionDescription"]}>
                  Weitere Informationen darüber, wie Sie Ihre Rechte ausüben
                  können, sowie eine Liste der Ihnen gegebenenfalls zur
                  Verfügung stehenden Datenschutzrechte finden Sie in dem
                  Abschnitt „Ihre Rechte” in dieser Datenschutzerklärung. Wenn
                  Sie auf Ihre bei uns gespeicherten personenbezogenen Daten
                  zugreifen oder diese prüfen, aktualisieren, korrigieren oder
                  löschen oder sonstige Ihnen zustehende Datenschutzrechte
                  ausüben wollen, beispielsweise das Recht, einen Verkauf oder
                  eine Weiterleitung Ihrer personenbezogenen Daten
                  auszuschließen, füllen Sie bitte dieses Anforderungsformular
                  aus  oder mailen Sie Ihre Anforderung an
                  <a
                    href="mailto:dpo@hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    dpo@hydrafacial.com
                  </a>
                </p>
                <p className={styles["sectionDescription"]}>
                  Wir bemühen uns, auf datenschutzrechtliche Anforderungen
                  innerhalb der bestehenden Fristen zu reagieren. Sollten wir
                  mehr Zeit benötigten, werden wir Ihnen schriftlich den Grund
                  dafür nennen und die Dauer des Verlängerungszeitraums nennen.
                  Wenn Sie Ihre datenschutzrechtliche Anforderung elektronisch
                  mittels unseres Antragsformulars einreichen, schicken wir
                  Ihnen unsere schriftliche Antwort an die mit ihrer Anforderung
                  verbundene, verifizierte E-Mail-Adresse. Wenn Sie Ihre
                  datenschutzrechtliche Anforderung nicht online mittels unseres
                  Webformulars einreichen, schicken wir Ihnen unsere
                  schriftliche Antwort nach Ihrer Wahl per Post oder
                  elektronisch. Für die Bearbeitung verifizierbarer
                  Kundenanforderungen verlangen wir keine Gebühr, es sei denn im
                  Fall von exzessiven, wiederholten oder offenkundig
                  unbegründeten Anforderungen. Sofern wir der Ansicht sind, dass
                  eine bestimmte Anforderung die Erhebung einer Gebühr
                  rechtfertigt, werden wir Ihnen die Gründe für unsere
                  Entscheidung nennen und Ihnen vor der Bearbeitung Ihrer
                  Anforderung einen Kostenvoranschlag schicken. 
                </p>
                <p className={styles["sectionDescription"]}>
                  Beschwerderecht – Kalifornien  
                </p>
                <p className={styles["sectionDescription"]}>
                  Sofern Hydrafacial auf Ihre datenschutzrechtliche Anforderung
                  nicht innerhalb der Reaktionsfrist von 45 Tagen antwortet oder
                  diese Frist auf maximal 90 Tage verlängert wird, werden wir
                  Sie schriftlich darüber informieren, warum wir nicht tätig
                  geworden sind und Sie auf Ihr Recht hinweisen, sich über die
                  Entscheidung zu beschweren. 
                </p>
                <p className={styles["sectionDescription"]}>
                  Beschwerderecht – Virginia  
                </p>
                <p className={styles["sectionDescription"]}>
                  Sie haben das Recht, innerhalb einer angemessene Frist nach
                  Mitteilung der Entscheidung, eine datenschutzrechtliche
                  Anforderung zurückzuweisen, diese Entscheidung anzufechten.
                  Hydrafacial wird Ihnen innerhalb von 60 Tagen nach Eingang
                  Ihrer Anfechtung schriftlich mitteilen, ob als Reaktion auf
                  Ihre Anfechtung etwas unternommen wurde oder nicht und Ihnen
                  auch die Gründe für die entsprechende Entscheidung darlegen.
                  Wird Ihre Beschwerde zurückgewiesen, erhalten Sie
                  Informationen darüber, wie Sie den Generalstaatsanwalt von
                  Virginia kontaktieren können, um dort Beschwerde einzureichen.
                </p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Kalifornien und Delaware „Offenlegungen, die nicht nachverfolgt
                werden dürfen”
              </h3>
              <p>
                Die Datenschutzregelungen der Vereinigten Staaten,
                beispielsweise das Recht von Kalifornien und Delaware, verlangen
                von Hydrafacial, anzugeben, ob sie die Einstellung „Nicht
                nachverfolgen” Ihres Browsers, die auf gezielte Werbung
                abstellt, honoriert. Hydrafacial hält sich an die in dieser
                Datenschutzerklärung dargelegten Standards, achtet aber nicht
                auf „Nicht nachverfolgen” – Browseraufforderungen und reagiert
                auch nicht auf solche. 
              </p>
            </div>
            <h2 className={styles["title"]}>Nutzungsbedingungen</h2>
            <br />
            <div className={styles["contentContainer"]}>
              <p>
                BITTE LESEN SIE DIESE NUTZUNGSBEDINGUNGEN SORGFÄLTIG DURCH.
                DIESES HYDRAFACIAL™-KONTO (DAS „KONTO”) WIRD VON HYDRAFACIAL LLC
                („Hydrafacial” oder „wir”) GEFÜHRT. DIESE NUTZUNGSBEDINGUNGEN
                („BEDINGUNGEN”) STELLEN EINE BINDENDE VEREINBARUNG ZWISCHEN DEM
                NUTZER („NUTZER” oder „Sie”) UND HYDRAFACIAL DAR, GELTEN FÜR DEN
                ZUGANG ZU DEM KONTO UND DESSEN NUTZUNG, ENTHALTEN
                HAFTUNGSAUSSCHLÜSSE UND ANDERE UNSERE HAFTUNG GEGENÜBER DEM
                NUTZER BESCHRÄNKENDE BESTIMMUNGEN UND KÖNNEN VON HYDRAFACIAL VON
                ZEIT ZU ZEIT ÜBERARBEITET WERDEN. BITTE LESEN SIE DIESE
                BEDINGUNGEN SORGFÄLTIG DURCH, EHE SIE BEGINNEN, DAS KONTO ZU
                NUTZEN. SIND SIE NICHT MIT ALLEN VERTRAGSBEDINGUNGEN
                EINVERSATNDEN, KLICKEN SIE BITTE AUF DIE SCHALTFLÄCHE „NICHT
                AKZEPTIEREN” ODER STELLEN SIE DIE NUTZUNG DES KONTOS EIN UND
                DEINSTALLIEREN SIE ES UMGEHEND. DIESE BEDINGUNG WERDEN MITTELS
                VERWEIS AUCH IN UNSERE DATENSCHUTZERKLÄRUNG MITEINBEZOGEN.
              </p>
              <div className={styles["contentTitle"]}>
                NUR FÜR NORDAMERIKANISCHE EINWOHNER, WIE NACHSTEHEND NÄHER
                AUSGEFÜHRT:
              </div>
              <p>
                Diese Bedingungen enthalten eine Schiedsklausel, die
                gegebenenfalls für zwischen uns entstehende Streitigkeiten
                Anwendung findet. Diese Klausel:
              </p>
              <ul>
                <li>hebt Ihr Recht auf ein Jury-Verfahren auf und</li>
                <li>
                  beeinflusst Ihre Rechte insofern entscheidend, als sie Ihnen
                  verwehrt, Sammelklageverfahren oder konsolidierte Verfahren in
                  die Wege zu leiten oder sich an solchen zu beteiligen.
                </li>
              </ul>
              <p>
                Sie stimmen zu, dass wir Mitteilungen, Offenlegungen und
                Änderungen dieser Bedingungen elektronisch kommunizieren können,
                indem wir entweder diese Kontobedingungen direkt ändern oder die
                Überarbeitungen auf der Hydrafacial-Website posten.
              </p>
              <div className={styles["contentTitle"]}>Berechtigung</div>
              <p>
                Dieses Konto zielt nicht auf Nutzer und 13 Jahren ab und ist
                nicht für solche Nutzer vorgesehen. EIN NUTZER MUSS MINDESTENS
                13 JAHRE ALT SEIN, UM AUF DAS KONTO ZUGREIFEN UND ES NUTZEN ZU
                KÖNNEN. Ist der Nutzer zwischen 13 und 18 Jahre alt, kann er das
                Konto nur unter Aufsicht eines Elternteils oder eines
                gesetzlichen Vormunds nutzen, das oder der sich bereit erklärt
                hat, sich an diese Bedingungen gebunden zu halten. Der Nutzer
                sichert zu und gewährleistet, dass er (a) nicht in einem Land
                ansässig ist, gegen das die Regierung der USA ein Embargo
                verhängt hat oder das von der Regierung der USA als „Terrorismus
                unterstützendes” Land eingestuft wurde, und (b) nicht auf der
                Liste verbotener oder eingeschränkter Personen der Regierung der
                USA verzeichnet ist.
              </p>
              <p>
                Um bestimmte Funktionen unseres Kontos nutzen zu können, müssen
                Sie sich für ein Konto anmelden. Sie erklären sich
                einverstanden, (a) nur ein Konto zu erstellen, (b) bei der
                Erstellung des Kontos richtige, wahrheitsgetreue, aktuelle und
                vollständige Angaben zu machen, (c) Ihre Kontodaten zu pflegen
                und zeitnah zu aktualisieren, (d) die Sicherheit Ihres Kontos zu
                wahren, indem Sie Ihr Passwort nicht mit anderen teilen und den
                Zugang zu Ihrem Konto und Ihrem Computer beschränken, (e)
                Hydrafacial unverzüglich zu informieren, falls Sie Verstöße
                gegen die Sicherheit Ihres Kontos entdecken oder vermuten und
                (f) für alle Aktivitäten, die von Ihrem Konto ausgehen, die
                Verantwortung zu unternehmen und die mit einem unbefugten
                Zugriff verbundenen Risiken zu tragen.
              </p>
              <div className={styles["contentTitle"]}>Datenschutz</div>
              <p>
                Ihre Nutzung der Syndeo-Dienste unterliegt der
                Datenschutzerklärung von Hydrafacial, die Sie unter{" "}
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                >
                  Privacy Notice
                </a>
                . einsehen können. Die Vereinbarung über Datenverarbeitung ist
                Bestandteil dieser Bedingungen und gilt dann, wenn Sie als
                Eigentümer eines Unternehmens über die Syndeo-Dienste auf
                personenbezogene Daten oder Informationen zugreifen, da Sie in
                diesem Fall in Bezug auf durch Syndeo-Dienste verarbeitete
                personenbezogene Daten oder Informationen als
                Auftragsverarbeiter gelten. Sie erklären sich bereit, sich an
                die Vereinbarung über Datenverarbeitung zu halten, die Sie unter
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                >
                  Data Processing Agreement
                </a>
                einsehen können.
              </p>
              <div className={styles["contentTitle"]}>
                Urheberrecht, Marken und Nutzerlizenz
              </div>
              <p>
                Soweit nicht etwas anderes angegeben ist, gilt, dass das Konto
                sowie alle darin befindlichen Inhalte und sonstigen Materialien,
                wie beispielsweise unter anderem das Hydrafacial-Logo sowie
                sämtliche Designs, Illustrationen, Texte, Grafiken, Bilder,
                Videoclips, Informationen, Daten, Softwarekomponenten,
                Audiodateien, sonstigen Dateien und deren Auswahl oder
                Zusammenstellung (gemeinsam als „Kontomaterialien” bezeichnet)
                im Eigentum oder unter der Kontrolle von Hydrafacial, ihren
                Lizenzgebern oder ihren Nutzern stehen oder von diesen
                lizenziert wurden. Diese Inhalte und Materialien genießen den
                Schutz der US-amerikanischen und internationalen Urheberrechts-,
                Markenrechts- und Patenrechtsgesetze sowie der Gesetze zum
                Schutz von Geschäftsgeheimnissen, geistigen Eigentumsrechten und
                anderen Eigentumsrechten. Syndeo™,Hydrafacial LLC, Hydrafacial,
                das Hydrafacial-Logo und die sonstigen Marken,
                Dienstleistungsmarken, Grafiken und Logos, die in Verbindung mit
                dem Konto verwendet werden, sind im Eigentum oder unter der
                Kontrolle von Hydrafacial stehende oder von Hydrafacial
                lizenzierte Markennamen, Markenzeichen oder eingetragene
                Markenzeichen (gemeinsam als „Hydrafacial-Marken” bezeichnet).
                Andere in Verbindung mit dem Konto verwendete Marken,
                Dienstleistungsmarken, Grafiken und Logos sind Markenzeichen
                oder eingetragene Markenzeichen Ihrer jeweiligen Eigentümer
                (gemeinsam als „Drittmarken” bezeichnet). Die Hydrafacial-Marken
                und die Drittmarken dürfen nicht ohne die vorherige schriftliche
                Zustimmung von Hydrafacial oder dem entsprechenden Markeninhaber
                ganz oder teilweise kopiert, imitiert oder verwendet werden.
                Konto und Inhalte sind durch Urheberrechte, Markenrechte,
                Patentrechte, Rechte an Geschäftsgeheimnissen, internationale
                Verträge, staatliche und bundesstaatliche Gesetze und andere
                Eigentumsrechte geschützt. Sie können auch
                Sicherheitskomponenten zum Schutz digitaler Informationen
                enthalten und unterliegen der Erlaubnis von Hydrafacial oder des
                Inhabers des entsprechenden Inhalts. Alle nicht ausdrücklich
                gewährten Rechte bleiben vorbehalten.
              </p>
              <p>
                Konto und Inhalte sind nur für den persönlichen,
                nichtkommerziellen Gebrauch bestimmt. Nach Maßgabe dieser
                Bedingungen gewährt Hydrafacial dem Nutzer eine persönliche,
                nicht exklusive, nicht übertragbare, eingeschränkte,
                widerrufliche Lizenz für die Nutzung des Kontos für
                ausschließlich persönliche Zwecke entsprechend diesen
                Bedingungen („Nutzerlizenz”). Die Nutzung des Kontos auf andere
                Weise, wie beispielsweise unter anderem durch Weiterverkauf,
                Übertragung, Änderungen oder Vertrieb des Kontos oder von Text-,
                Bild- oder Musikinhalten, Barcodes, Videos, Daten, Hyperlinks,
                Displays oder anderen mit dem Konto in Verbindung stehenden
                Inhalten („Inhalte”) ist untersagt. Soweit in diesen Bedingungen
                nicht ausdrücklich etwas anderes bestimmt ist, darf nichts in
                diesen Bedingungen so ausgelegt werden, dass dadurch auf
                irgendeine Weise, sei es implizit oder durch Rechtsverwirkung
                oder aus sonstigen Gründen, Rechte, Eigentumsrechte oder
                exklusive Nutzungsrecht an damit verbundenem geistigem Eigentum,
                anderen Rechten oder Goodwill übertragen würden. Diese
                Bedingungen und die Nutzerlizenz gelten auch für
                Aktualisierungen, Ergänzungen oder Ersetzungen des Kontos,
                sofern mit solchen Aktualisierungen, Ergänzungen oder
                Ersetzungen nicht separate Bedingungen einhergehen. In diesem
                Fall gelten die separaten Bedingungen.
              </p>
              <div className={styles["contentTitle"]}>Akzeptable Nutzung</div>
              <p>
                Die Nutzung des Kontos und der Inhalte seitens des Nutzers sowie
                alle vom Nutzer zur Verfügung gestellten Informationen, wie
                Nutzernamen und Passwörter, Adressen, E-Mail-Adressen,
                Telefonnummern, Zahlungsdaten (beispielsweise
                Kreditkartennummern) („Nutzerinformationen”), die in Verbindung
                mit dem Konto übermittelt werden, beschränken sich auf die
                vorgesehene Funktionalität des Kontos. Unter keinen Umständen
                darf das Konto auf eine Art und Weise genutzt werden, die (a)
                eine andere Partei belästigt, beschimpft, stalkt, bedroht,
                diffamiert oder in sonstiger Weise deren Rechte (beispielsweise
                Öffentlichkeitsrechte oder sonstige Eigentumsrechte)
                beeinträchtigt oder verletzt, (b) rechtwidrig, betrügerisch oder
                täuschend ist, (c) sensible personenbezogene Daten zur Verfügung
                stellt, wenn keine entsprechende Aufforderung dazu von
                Hydrafacial erging, (d) Spam oder unaufgeforderte Werbung
                enthält, (e) mithilfe von technologischen oder anderen Mitteln
                einen von Hydrafacial nicht autorisierten Zugriff auf
                Hydrafacial oder auf Inhalte vornimmt, (f) automatisierte
                Systeme, wie beispielsweise unter anderem „Robots”, „Spiders”
                oder „Offline Readers”, verwendet, um auf Hydrafacial oder auf
                Inhalte zuzugreifen, (g) versucht, Viren oder andere
                Computercodes, Dateien oder Programme einzuführen, die die
                Funktionalität von Computersoftware, Hardware oder
                Telekommunikationsgeräten stört, zerstört oder einschränkt, (h)
                versucht, unbefugt auf das Computernetzwerk von Hydrafacial oder
                auf Nutzerkonten zuzugreifen, (i) ein Verhalten ermutigt, das
                eine Straftat darstellen oder eine zivilrechtliche Haftung
                auslösen würde, (j) gegen diese Bedingungen verstößt, (k)
                versucht, die Server oder Netzwerke von Hydrafacial zu
                beschädigen, zu deaktivieren, zu überlasten oder zu
                beeinträchtigen, (l) darin besteht, sich als eine andere
                natürliche oder juristische Person auszugeben oder auf sonstige
                Weise die eigene Identität oder Zugehörigkeit zu einer
                natürlichen oder juristischen Person falsch darzustellen, oder
                (m) nicht den anwendbaren Bedingungen dritter Parteien
                entspricht (gemeinsam als „akzeptable Nutzung” bezeichnet).
                Hydrafacial behält sich das Recht vor, eine Nutzerlizenz nach
                eigenem Ermessen zu kündigen oder rechtliche Schritte in Bezug
                auf die Inhalte oder die Nutzung des Kontos in die Wege zu
                leiten, wenn Hydrafacial berechtigterweise davon ausgeht, dass
                diese Bedingungen oder die Richtlinien von Hydrafacial verletzt
                wurden oder verletzt worden sein könnten. Unterlässt es
                Hydrafacial, entsprechende Schritte zu unternehmen und verzögert
                Hydrafacial entsprechende Schritte, so bedeutet das keinen
                Verzicht auf das Recht zur Durchsetzung dieser Bedingungen.
                Hydrafacial verlangt von den Nutzern, das Konto nicht zu nutzen,
                während sie Auto fahren oder Maschinen oder Geräte bedienen.
              </p>
              <div className={styles["contentTitle"]}>
                Nutzergenerierte Materialien
              </div>
              <p>
                Sofern und soweit wir uns entscheiden, nutzergenerierte
                Materialien zu akzeptieren, erhalten Sie, entsprechende
                Kapazität des Kontos vorausgesetzt, die Möglichkeit,
                Rezensionen, Bewertungen, Kommentare, Feedbacks oder sonstige
                Materialien auf dem/an das Konto zu veröffentlichen, zu
                übermitteln, hochzuladen oder auf sonstige Weise zu posten
                („nutzergenerierte Materialien”), die sodann für die
                Öffentlichkeit zugänglich und einsehbar sind. In Bezug auf die
                nutzergenerierten Materialen, die Sie hochladen oder posten,
                sichern Sie zu, dass (i) Sie die Inhalte selbst erstellt und die
                Rechte darin innehaben oder die Inhalte mit der Genehmigung des
                Eigentümer posten, und (ii) die Inhalte nicht die Rechte anderer
                natürlicher oder juristischer Personen verletzten (wie
                beispielsweise unter anderem Urheberrechte, Markenrechte oder
                Datenschutzrechte) und nicht gegen einschlägige Gesetze,
                Regelungen, Vorschriften, diese Nutzungsbedingungen oder unsere
                anderen geposteten Richtlinien verstoßen.
              </p>
              <div className={styles["contentSubTitle"]}>
                Nutzergenerierte Inhalte dürfen keine Materialien enthalten,
                die:
              </div>
              <ul>
                <li>
                  falsch, diffamierend, verleumderisch, obszön, belästigend,
                  bedrohend, diskriminierend, engstirnig, gehässig, gewalttätig,
                  vulgär, profan, pornografisch oder auf sonstige Weise
                  aggressiv, unangemessen, schädlich, rechtswidrig, störend oder
                  gefährlich sind;
                </li>
                <li>
                  unsere gesetzlichen Rechte oder die einer anderen Person
                  verletzen (beispielsweise Öffentlichkeitsrechte oder
                  Datenschutzrechte), nach den einschlägigen Gesetzen und
                  Vorschriften eine zivilrechtliche oder strafrechtliche Haftung
                  auslösen können oder auf sonstige Weise illegale Aktivitäten
                  oder rechtswidrige Handlungen fördern, befürworten oder
                  unterstützen;
                </li>
                <li>
                  eine Bedrohung für eine Person schaffen oder befürchten lassen
                  oder Sachschäden oder Verluste androhen oder befürchten
                  lassen;
                </li>
                <li>
                  personenbezogene Daten anderer Personen enthalten, wie
                  beispielsweise Adressen, Telefonnummern, E-Mail-Adressen,
                  Sozialversicherungsnummern, Kreditkartennummern, medizinische
                  Informationen, Zahlungsinformationen oder sonstige
                  Informationen, die verwendet werden könnten, um eine Person
                  ausfindig zu machen, zu kontaktieren oder sich als diese
                  Person auszugeben;
                </li>
                <li>
                  gegen Patent- oder Markenrechte, Rechte an
                  Geschäftsgeheimnissen, vertragliche Rechte oder Rechte an
                  geistigem Eigentum von Hydrafacial oder einer anderen Person
                  verstoßen;
                </li>
                <li>
                  darauf abzielen, Kindern zu schaden oder sie auszunutzen,
                  indem man sie unangemessenen Inhalten aussetzt, von ihnen
                  persönliche, identifizierbare Angaben verlangt oder andere
                  Methoden mit dieser Zielrichtung anwendet;
                </li>
                <li>
                  Ihre Identität oder Zugehörigkeit zu einer Person oder
                  Organisation wie beispielsweise Hydrafacial falsch darstellen;
                </li>
                <li>
                  darauf abzielen, mithilfe elektronischer oder sonstiger Mittel
                  für irgendwelche Zwecke von Nutzern E-Mail-Adressen und/oder
                  Nutzernamen oder Passwörter für deren Konten oder für andere
                  Dienste zu erhalten, beispielsweise durch Versenden
                  unaufgeforderter E-Mails oder anderer elektronischer
                  Mitteilungen;
                </li>
                <li>
                  darauf abzielen, automatisierte oder nicht automatisierte
                  Kettenbriefe, Massen- oder unerwünschte Mails zu versenden,
                  Hydrafacial oder die mit der Website verbundenen Netzwerke
                  oder Dienste zu stören, zu unterbrechen oder ungebührlich zu
                  belasten oder Spyware, Malware oder sonstige Computercodes auf
                  unseren Computern oder Geräten oder den Computern oder Geräten
                  dritter Parteien zu installieren oder eine Installation zu
                  versuchen;
                </li>
                <li>
                  mit kommerziellen Aktionen, wie beispielsweise Wettbewerben,
                  Gewinnspielen und/oder anderen Verkaufswerbungen,
                  Tauschgeschäften, Werbungen oder Angeboten zum Verkauf oder
                  Kauf von Waren oder Dienstleistungen in Zusammenhang stehen,
                  oder
                </li>
                <li>
                  aus sonstigen Gründen anstößig oder nicht familienfreundlich
                  sind, was Hydrafacial nach freiem Ermessen beurteilen wird.
                </li>
              </ul>
              <p>
                Wir beanspruchen nicht das Eigentum an nutzergenerierten
                Materialien. Wenn Sie nutzergenerierte Materialien einsenden
                oder posten, gewähren Sie uns und unseren Zessionaren,
                Bevollmächtigten und Lizenznehmern jedoch eine unwiderrufliche,
                weltweite, nicht exklusive, gebührenfreie, vollständig
                abgegoltene Lizenz an allen Urheberrechten, Markenrechten,
                Patenten, Geschäftsgeheimnissen, Datenschutz- und
                Öffentlichkeitsrechten und sonstigen geistigen Eigentumsrechten,
                die Sie innehaben oder kontrollieren, (i) diese Inhalte überall
                auf der Welt in allen bisher bekannten oder künftig erfundenen
                Medien, für alle Zwecke, auch für kommerzielle und
                Marketingzwecke, zu verwenden, zu reproduzieren, zu übermitteln,
                zu modifizieren, zu indexieren, zu adaptieren, zu
                veröffentlichen, zu übersetzen, abgeleitete Werke davon zu
                kreieren, zu vertreiben, zu präsentieren oder auf sonstige Weise
                zu verwerten, ohne dass es einer weiteren Ankündigung an Sie
                oder einer Zuschreibung bedarf und ohne Ihre Zustimmung einholen
                oder eine Zahlung an Sie oder an eine andere natürliche oder
                juristische Person leisten zu müssen, und (ii) Ihren Namen, Ihre
                Persona oder Ihr Bild alleine oder in Verbindung mit den
                genannten Verwendungsarten ohne jegliche Verpflichtung oder
                Vergütung an Sie zu nutzen. Ohne Begrenzung schließen die
                gewährten Rechte das Recht ein, (a) die nutzergenerierten
                Materialien zu konfigurieren, zu hosten, zu indexieren,
                zwischenzuspeichern, zu archivieren, zu speichern, zu
                digitalisieren, zu komprimieren, zu optimieren, zu modifizieren,
                zu editieren, zu adaptieren, in einem suchbaren Format zu
                veröffentlichen, die nutzergenerierten Materialien mit anderen
                Materialien zu kombinieren oder zu entfernen, (b) in den
                nutzergenerierten Materialien enthaltene(s) Ideen, Konzepte,
                Know-how oder Techniken für beliebige Zwecke zu verwenden, auch
                für die Entwicklung, Herstellung und Vermarktung von Produkten
                und/oder Dienstleistungen. Soweit dies gesetzlich nicht
                untersagt ist, verzichten Sie hiermit auf alle
                Urheberpersönlichkeitsrechte (einschließlich Zuschreibung und
                Integrität), die Ihnen in Bezug auf die nutzergenerierten
                Materialien gegebenenfalls zustehen, auch wenn diese auf eine
                Weise verändert oder abgewandelt wurden, die Ihnen nicht zusagt.
                Soweit ein Verzicht nicht zulässig ist, erklären Sie sich
                unwiderruflich damit einverstanden, solche (gegebenenfalls
                bestehenden) Rechte nicht in einer Weise auszuüben, die die
                Ausübung der gewährten Rechte beeinträchtigt. Ihnen ist bekannt,
                dass Sie für die gemäß diesem Abschnitt generierten Rechte keine
                Gebühren, Beträge, Gegenleistungen oder Vergütungen erhalten.
                Sie erklären sich bereit, alle Lizenzgebühren, Gebühren und
                sonstigen Gelder zu entrichten, die Sie einer natürlichen oder
                juristischen Person für die nutzergenerierten Materialien
                schulden, die Sie auf der Website posten.
              </p>
              <p>
                Sofern und soweit wir uns entscheiden, nutzergenerierte
                Materialien zu akzeptieren, können wir, je nach Kapazität des
                Kontos, die Einreichung eines Nutzers nach alleinigem Ermessen
                von Hydrafacial ablehnen, verändern oder entfernen, ohne dafür
                Gründe angeben zu müssen, beispielsweise, wenn wir der Ansicht
                sind, dass die Einreichung eines Nutzers möglicherweise gegen
                diese Nutzerbedingungen verstößt oder aus sonstigen Gründen
                unerwünscht ist. Sofern und soweit wir uns entscheiden,
                nutzergenerierte Materialien zu akzeptieren, sind wir
                berechtigt, aber nicht verpflichtet, alle auf der Website
                geposteten nutzergenerierte Materialien jederzeit aus beliebigen
                Gründen und ohne Vorankündigung zu überwachen, zu prüfen, zu
                screenen, zu posten, zu entfernen, abzulehnen, zu modifizieren
                oder zu speichern, beispielsweise um sicherzustellen, dass die
                nutzergenerierten Materialien diesen Nutzungsbedingungen
                entsprechen. Wir unterstützen nutzergenerierte Materialien nicht
                und die geposteten nutzergenerierten Materialien spiegeln auch
                nicht unsere Meinungen, Ansichten oder Ratschläge wider. Für
                Ihre nutzergenerierte Materialien und die Folgen von deren
                Posting und Veröffentlichung sind ausschließlich Sie
                verantwortlich. Sie stimmen zu, dass wir lediglich als passive
                Plattform für die Verbreitung und Veröffentlichung Ihrer
                nutzergenerierten Materialien fungieren. Wir übernehmen keine
                Verantwortung oder Haftung für nutzergenerierte Materialien, die
                Sie oder andere Nutzer oder dritte Parteien auf oder über die
                Website posten. Ebenso wenig übernehmen wir die Haftung für
                Handlungen oder Unterlassungen in Bezug auf Sendungen,
                Kommunikationen oder Inhalte von Nutzern oder dritten Parteien.
              </p>
              <div className={styles["contentTitle"]}>Schadloshaltung</div>
              <p>
                Der Nutzer erklärt sich bereit, Hydrafacial, ihre
                Muttergesellschaft, ihre Tochtergesellschaften und andere mit
                ihr verbundene Unternehmen, ihre unabhängigen Auftragsnehmer,
                Dienstleistungsanbieter und Berater sowie deren jeweilige
                Mitarbeiter, Subunternehmer, Bevollmächtigten, Führungskräfte,
                Mitglieder und Direktoren („Entschädigungsberechtigte von
                Hydrafacial”) in Bezug auf alle Forderungen, Klagen,
                Schadensersatzforderungen Kosten, Gerichtsverfahren,
                Vertragsstrafen, Bußgelder, Haftungsverpflichtungen und Auslagen
                (einschließlich Rechtsanwaltsgebühren) („Forderungen”) zu
                verteidigen, zu entschädigen und schadlos zu halten, die sich
                aus oder in Zusammenhang mit der Nutzung oder dem Missbrauch des
                Kontos, der Verletzung dieser Bedingungen oder einschlägiger
                Gesetzesvorschriften oder der Verletzung von Rechten dritter
                Parteien seitens des Nutzers ergeben. Hydrafacial behält sich
                das Recht vor, die alleinige Verteidigung und Kontrolle über
                alle Angelegenheiten zu übernehmen, die die
                Entschädigungspflicht des Nutzers betreffen. In diesem Fall hat
                der Nutzer bei der Geltendmachung des Verteidigungsvorbringens
                zu kooperieren. Macht eine dritte Partei geltend, dass das Konto
                oder der Besitz oder die Nutzung des Kontos durch den Nutzer
                gegen die geistigen Eigentumsrechte dieser dritten Partei
                verstoßen, ist ausschließlich Hydrafacial für die Ermittlung,
                Verteidigung, Beilegung oder Befriedigung einer solchen
                Forderung wegen Verstoßes gegen geistiges Eigentumsrecht
                verantwortlich.
              </p>
              <div className={styles["contentTitle"]}>
                Gewährleistung, Haftungsausschluss
              </div>
              <p>
                HYDRAFACIAL STELLT DEM NUTZER DAS KONTO IM ISTZUSTAND ZUR
                VERFÜGUNG, UND DER NUTZER VERWENDET DAS KONTO AUF EIGENES
                RISIKO. SOWEIT NACH EINSCHLÄGIGEM RECHT ZULÄSSIG, SCHLIESST
                HYDRAFACIAL JEGLICHE EXPLIZITE ODER IMPLIZITE GEWÄHRLEISTUNG AUS
                UND GEWÄHRLEISTET BEISPIELSWEISE NICHT, DASS DAS KONTO
                MARKTGÄNGIG, VERLÄSSLICH, RICHTIG, FÜR EINEN BESTIMMTEN ZWECK
                ODER BEDARF GEEIGNET, NICHT RECHTSVERLETZEND, FREI VON MÄNGELN
                ODER VIREN IST UND OHNE UNTERBRECHUNGEN BETRIEBEN WERDEN KANN,
                DASS DIE NUTZUNG DES KONTOS DURCH DEN NUTZER DEM FÜR DEN NUTZER
                GELTENDEN RECHT ENTSPRICHT, DASS NUTZERINFORMATIONEN ODER
                BESTELLUNGEN, DIE IN VERBINDUNG MIT DEM KONTO ÜBERMITTELT
                WERDEN, ERFOLGREICH, RICHTIG UND SICHER ÜBERMITTELT ODER
                EMPFANGEN WERDEN KÖNNEN, DASS BESTELLUNGEN SO SIND, WIE SIE
                AUFGEGEBEN WURDEN ODER ZUR VEREINBARTEN ZEIT BEREITSTEHEN UND
                DASS BESTIMMTE BESTELLTE ARTIKEL VERFÜGBAR SEIN WERDEN. DIE AUF
                DEM KONTO BEFINDLICHEN MATERIALIEN UND INFORMATIONEN KÖNNEN
                TECHNISCHE UNRICHTIGKEITEN ODER TYPOGRAFISCHE FEHLER ENTHALTEN.
                DIE IN DIESEM ABSCHNITT BEZEICHNETEN HAFTUNGSAUSSCHLÜSSE GELTEN
                NICHT IN BEZUG AUF PERSONENSCHÄDEN.
              </p>
              <div className={styles["contentTitle"]}>Keine Haftung</div>
              <p>
                NACH MASSGABE DES EINSCHLÄGIGEN RECHTS, BEISPIELSWEISE IN BEZUG
                AUF EINE HAFTUNG FÜR PERSONENSCHÄDEN ODER NICHTVERZICHTBARE
                GESETZLICHE RECHTE NACH DEM RECHT VON NEW JERSEY, HAFTEN
                HYDRAFACIAL SOWIE DIE FÜHRUNGSKRÄFTE, DIREKTOREN, MITGLIEDER,
                MITARBEITER, ANTEILSEIGNER UND BEVOLLMÄCHTIGTEN VON HYDRAFACIAL
                UNTER KEINEN UMSTÄNDEN GEGENÜBER DEM NUTZER (A) IN BEZUG AUF DIE
                NUTZUNG DES KONTOS, WIE BEISPIELSWEISE UNTER ANDEREM IN BEZUG
                AUF DIE VERFÜGBARKEIT DES SELBSTEINSCHÄTZUNGS-SELFIE-TOOLS, DIE
                INHALTE ODER MATERIALIEN, DIE AUF DEM KONTO VORHANDEN ODER
                ZUGÄNGLICH SIND UND IN BEZUG AUF SCHÄDEN, DIE AUF FEHLER,
                AUSLASSUNGEN, UNTERBRECHUNGEN, LÖSCHUNG VON DATEIEN, IRRTÜMER,
                MÄNGEL, VIREN, BETRIEBS- ODER ÜBERMITTLUNGSVERZÖGERUNGEN ODER
                SONSTIGE LEISTUNGSSTÖRUNGEN ZURÜCKZUFÜHREN SIND, UNABHÄNGIG
                DAVON, OB ES SICH UM EREIGNISSE HÖHERER GEWALT,
                KOMMUNIKATIONSSTÖRUNGEN, DIEBSTAHL, ZERSTÖRUNG ODER UNBEFUGTE
                EINSICHT VON AUFZEICHNUNGEN, PROGRAMMEN ODER DIENSTEN VON
                HYDRAFACIAL HANDELT, UND (B) FÜR MITTELBARE, BESONDERE,
                ZUFÄLLIGE ODER FOLGESCHÄDEN, STRAFSCHADENSERSATZ ODER
                EXEMPLARISCHE SCHÄDEN, WOZU UNTER ANDEREM SCHÄDEN AUFGRUND EINES
                VERLUSTES DES GOODWILL, ENTGANGENER GEWINN, VERLUST, DIEBSTAHL,
                VERFÄLSCHUNG VON NUTZERDATEN, UNMÖGLICHKEIT DES ZUGRIFFS AUF DAS
                KONTO ODER AUF DESSEN FUNKTIONEN, GERÄTEAUSFÄLLE ODER SONSTIGE
                FEHLFUNKTIONEN HANDELT. DIE EINZIGE RECHTLICHE ABHILFE, DIE DEM
                NUTZER ZUR VERFÜGUNG STEHT, IST DIE EINSTELLUNG DER NUTZUNG DES
                KONTOS. WENN SIE IN EINER ANDEREN RECHTSORDNUNG ALS IN NEW
                JERSEY, VEREINIGTE STAATEN VON AMERIKA, ANSÄSSIG SIND, LÄSST
                IHRE RECHTORDNUNG MÖGLICHERWEISE KEINE HAFTUNGSBESCHRÄNKUNG BEI
                VERTRÄGEN MIT VERBRAUCHERN ZU. FOLGLICH KÖNNTEN EINIGE ODER ALLE
                DER OBEN GENANNTEN HAFTUNGSBESCHRÄNKUNGEN AUF SIE KEINE
                ANWENDUNG FINDEN.
              </p>
              <p>
                Inhalte, Konten, Produkte und Dienstleistungen dritter Parteien
                (einschließlich Werbung und Promotion). Hydrafacial kann auf dem
                Konto als Service für interessierte Personen Inhalte dritter
                Parteien (einschließlich eingebetteter Inhalte) oder Links zu
                Inhalten, Konten, Produkten oder Dienstleistungen dritter
                Parteien, einschließlich Werbung und Promotion, zur Verfügung
                stellen (gemeinsam als „Inhalte dritter Parteien” bezeichnet).
                Wir kontrollieren, befürworten oder übernehmen Inhalte dritter
                Parteien nicht, und die Einbeziehung eines Links impliziert
                keine geschäftliche Verbindung, Befürwortung oder Übernahme
                eines Kontos oder der darin enthaltenen Informationen durch
                Hydrafacial. Hydrafacial übernimmt keine Garantie für die
                Richtigkeit oder Vollständigkeit der entsprechenden
                Informationen. Sie erkennen an und stimmen zu, dass Hydrafacial
                in keiner Weise für Inhalte dritter Parteien verantwortlich oder
                haftbar und nicht verpflichtet ist, solche Inhalte dritter
                Parteien zu aktualisieren oder zu überprüfen. Sie erklären sich
                bereit, solche einbezogenen Inhalte dritter Parteien auf eigenes
                Risiko zu nutzen. Wenn Sie über Inhalte dritter Parteien andere
                Konten nutzen, sich an Promotionen beteiligen oder mit dritten
                Parteien Geschäfte tätigen, sollte Ihnen klar sein, dass unsere
                Bedingungen und Richtlinien dann nicht mehr gelten und
                stattdessen die Bedingungen und Richtlinien Anwendung finden,
                die für solche Konten dritter Parteien gelten. Sie sollten die
                geltenden Bedingungen und Richtlinien, einschließlich der
                Datenschutz- und Datenerhebungspraktiken, eines jeden Kontos
                einsehen, zu dem Sie von unserem Konto aus navigieren. Wenn Sie
                ein solches Konto nutzen, müssen Sie sich an die dafür geltenden
                Bedingungen der dritten Partei halten.
              </p>
              <div className={styles["contentTitle"]}>
                Änderungen des Kontos
              </div>
              <p>
                Hydrafacial behält sich das Recht vor, das Konto oder bestimmte
                Funktionen oder Teile des Kontos ohne Vorankündigung zu ändern
                oder vorübergehend oder dauerhaft einzustellen. Sie erkennen an,
                dass Hydrafacial nicht für eine Änderung, Aussetzung oder
                Einstellung des Kontos oder von Teilen des Kontos haftet.
              </p>
              <div className={styles["contentTitle"]}>
                Haftungsausschluss in Bezug auf Unrichtigkeiten
              </div>
              <p>
                Von Zeit zu Zeit können Informationen auf die Seite gelangen,
                die typografische Fehler, Unrichtigkeiten oder Auslassungen
                enthalten. Wir behalten uns das Recht vor, solche Fehler,
                Unrichtigkeiten oder Auslassungen zu korrigieren und
                Informationen jederzeit ohne Vorankündigung zu ändern oder zu
                aktualisieren.
              </p>
              <div className={styles["contentTitle"]}>
                NUR FÜR EINWOHNER VON NORDAMERIKA
                <br />
                Schiedsgerichtsbarkeit
              </div>
              <p>
                Bitte lesen Sie diesen Abschnitt sorgfältig durch. Er berührt
                Rechte, die Ihnen ansonsten möglicherweise zustehen würden. Er
                sieht vor, die meisten Streitigkeiten schiedsgerichtlich und
                nicht durch ordentliche Gerichtsverfahren oder Sammelklagen
                beizulegen. Ein Schiedsgerichtsverfahren ist weniger formell als
                ein Verfahren vor einem ordentlichen Gericht, es bedient sich
                neutraler Schiedsrichter anstatt eines Richters oder einer Jury
                und die Beweiserhebung ist eingeschränkter. Ein Schiedsspruch
                ist rechtskräftig und bindend und kann nur in sehr begrenztem
                Rahmen gerichtlich überprüft werden. Diese Schiedsklausel bleibt
                auch bei Beendigung dieser Bedingungen weiterhin gültig.
              </p>
              <p>
                Bindendes Schiedsgerichtsverfahren. Diese Klausel soll weit
                ausgelegt werden, um alle Streitigkeiten oder Forderungen zu
                erfassen, die sich aus oder in Zusammenhang mit diesen
                Bedingungen, Ihrer Nutzung des Kontos und Ihrer Beziehung mit
                uns ergeben. Alle Streitigkeiten oder Forderungen, die sich aus
                oder in Zusammenhang mit diesen Bedingungen, Ihrer Nutzung des
                Kontos und Ihrer Beziehung mit uns oder mit einer
                Tochtergesellschaft, Muttergesellschaft oder einem oder mehreren
                mit uns verbundenen Unternehmen ergeben, (unabhängig davon, ob
                sich diese auf Vertrag, unerlaubte Handlung, Gesetz, Betrug,
                Falschdarstellung oder eine anderen rechtliche Theorie stützen)
                werden durch einen bindenden Schiedsspruch beigelegt. Sie und
                wir können jedoch gegebenenfalls bestimmte Forderungen vor
                Bagatellgerichte bringen, wenn diese den Anforderungen für die
                Annahme bei solchen Gerichten entsprechen.
              </p>
              <div className={styles["contentTitle"]}>
                Schiedsgerichtsverfahren
              </div>
              <p>
                Informelles Streitschlichtungsverfahren: Bei allen
                Streitigkeiten, unabhängig davon, ob Sie diese vor einem
                ordentlichen Gericht oder Schiedsgericht verfolgen, müssen Sie
                zuerst ein Schreiben (frankiert oder per Einschreiben) mit einer
                schriftlichen Beschreibung Ihrer Forderung an unsere
                Rechtsabteilung zu Händen: Rechtsabteilung, 2165 E. Spring St,
                Long Beach, CA 90806, schicken, um uns Gelegenheit zu geben, die
                Streitigkeit beizulegen. Sie und Hydrafacial erklären sich
                jeweils bereit, in gutem Glauben über Ihre Forderung zu
                verhandeln. Sie und Hydrafacial erkennen an, dass das
                Streitschlichtungsverfahren eine unabdingbare Voraussetzung ist,
                die erfüllt werden muss, ehe gegen die jeweils andere Partei ein
                Schiedsgerichtsverfahren eingeleitet oder eine Forderung geltend
                gemacht werden kann. Sie können ein Schiedsgerichtsverfahren
                verlangen, wenn Ihre Forderung oder die Streitigkeit nicht
                innerhalb von 60 Tagen beigelegt werden kann.
              </p>
              <p>
                Sofern Sie eine Streitigkeit nicht durch das oben beschriebene
                informelle Streitschlichtungsverfahren beilegen können, wird die
                Streitigkeit durch einen bindenden Schiedsspruch entschieden.
                Sie stimmen zu, dass das Schiedsgerichtsverfahren über die
                Streitigkeit oder Forderung entsprechend den Regeln der American
                Arbitration Association („AAA“), einschließlich der Regeln der
                AAA für Verbraucherschiedsverfahren (falls zutreffend) in der
                durch diese Bedingungen modifizierten Form durchgeführt wird.
                Die Regeln der AAA sowie Informationen über
                Schiedsgerichtsverfahren und Gebühren erfahren Sie online unter{" "}
                <a href="https://www.adr.org" target="_blank" rel="noreferrer">
                  www.adr.org
                </a>{" "}
                oder telefonisch bei der AAA unter (800) 778-7879. Sie und
                Hydrafacial bestätigen, dass diese Bedingungen ein
                Rechtsgeschäft im zwischenstaatlichen Handel beweisen und dass
                diese Schiedsklausel nach dem US-amerikanischen
                Bundesschiedsgerichtsgesetzes und dem Bundesschiedsgerichtsrecht
                und nicht nach staatlichem Recht auszulegen und durchzusetzen
                ist. Das Schiedsgerichtsverfahren wird an einem angemessen
                komfortablen Ort in dem Staat, in dem Sie ansässig sind, oder an
                einem anderen einvernehmlich festgelegten Ort abgehalten. Das
                Schiedsgerichtsverfahren wird in englischer Sprache geführt. Ein
                Schiedsrichter kann auf Einzelfallbasis jede rechtliche Abhilfe
                zusprechen, die auch von einem ordentlichen Gericht verfügt
                werden könnte, einschließlich einstweiliger Verfügung oder
                Feststellungserklärung, soweit eine solche Abhilfe erforderlich
                ist, um Ihre persönliche Forderung zu befriedigen. Der
                Schiedsrichter muss sich an diese Bedingungen halten und diese
                durchsetzen, so wie ein Gericht es tun würde. Ein
                Schiedsgerichtsverfahren ist eine vertrauliche Angelegenheit und
                weder Sie noch wir dürfen die Existenz, den Gegenstand oder das
                Ergebnis eines solchen Schiedsgerichtsverfahrens offenlegen,
                soweit dies nicht gesetzlich vorgeschrieben oder zum Zweck der
                Vollstreckung des Schiedsspruchs erforderlich ist. Ein Urteil
                über einen Schiedsspruch kann vor jedem zuständigen ordentlichen
                Gericht begehrt werden.
              </p>
              <p>
                Kosten des Schiedsgerichtsverfahrens. Die Bezahlung aller
                Einreichungen sowie des Verwaltungsaufwands und der
                Schiedsrichterhonorare richtet sich den AAA-Regeln. Jede Partei
                trägt die Gebühren und Auslagen ihrer eigenen Rechtsanwälte,
                Sachverständigen und Zeugen sowie die Kosten für die
                Vorbereitung und Vorlage der Beweise für das
                Schiedsgerichtsverfahren. Sofern der Schiedsrichter in Bezug auf
                Forderungen unter $10.000, die Sie vor Beginn des
                Schiedsverfahrens wie vorgeschrieben, angemeldet und gutgläubig
                verhandelt haben, feststellt, dass Sie die obsiegende Partei in
                dem Schiedsgerichtsverfahren sind, haben Sie Anspruch auf
                Erstattung angemessener Rechtsanwaltsgebühren und Kosten. Sofern
                Forderungen nicht frivol, bösgläubig oder auf sonstige Weise
                unangebracht sind, erklären wir uns bereit, in dem
                Schiedsverfahren keinen Anspruch auf Erstattung von
                Rechtsanwaltsgebühren zu erheben, auch wenn eine solche
                Erstattung uns nach einschlägigem Recht zustünde.
              </p>
              <p>
                Verzicht auf Sammelklage und Jury-Verfahren. Sie und wir sind
                darüber einig, dass ein Verfahren, sei es vor einem
                Schiedsgericht oder einem ordentlichen Gericht, nur als
                Einzelfallverfahren und nicht im Rahmen einer Sammelklage, einer
                konsolidierten Klage oder einer Prozessstandschaftsklage zu
                führen ist. Befindet ein ordentliches Gericht oder ein
                Schiedsgericht in einem Verfahren zwischen Ihnen und uns, dass
                der Verzicht auf eine Sammelklage undurchsetzbar ist, wird die
                von Ihnen und uns vereinbarte Schiedsvereinbarung hinfällig.
                Sollte eine Forderung aus irgendeinem Grund vor einem
                ordentlichen Gericht und nicht vor einem Schiedsgericht
                verhandelt werden, verzichten Sie und wir auf das Recht auf ein
                Jury-Verfahren.
              </p>
              <p>
                Sofern Sie in der Europäischen Union, im Vereinigten Königreich,
                in der Schweiz, in Norwegen oder in Island ansässig sind,
                entsprechen das anwendbare Recht und der Gerichtsstand dem Recht
                und dem Gerichtsstand Ihres Wohnorts.
              </p>
              <div className={styles["contentTitle"]}>
                NUR FÜR EINWOHNER NORDAMERIKAS
                <br />
                Anwendbares Recht und Gerichtsstand
              </div>
              <p>
                Diese Nutzungsbedingungen, die Nutzung des Kontos sowie etwaige
                Streitigkeiten, die zwischen Ihnen und Hydrafacial entstehen,
                unterliegen dem Bundesschiedsgerichtsgesetz, den einschlägigen
                Bundesgesetzen sowie den Gesetzen des Staates Kalifornien,
                Vereinigte Staaten, ohne Einbeziehung von Rechtswahl- oder
                Kollisionsrechtsbestimmungen oder -regelungen (des Staates
                Kalifornien oder einer anderen Rechtsordnung) und sind diesen
                Gesetzen gemäß auszulegen. Das Übereinkommen der Vereinten
                Nationen über den internationalen Warenkauf findet keine
                Anwendung. Für den Fall, dass die Schiedsvereinbarung in einem
                Fall für undurchsetzbar oder nichtig befunden wird oder eine
                Streitigkeit nicht der Schiedsgerichtsbarkeit unterliegt,
                erkennt der Nutzer unwiderruflich die ausschließliche
                Gerichtsbarkeit der bundesstaatlichen und staatlichen Gerichte
                von Los Angeles County, Kalifornien, Vereinigte Staaten von
                Amerika, für Gerichtsverfahren an, die sich aus oder in
                Zusammenhang mit dem Konto oder diesen Bedingungen ergeben.
              </p>
              <div className={styles["contentTitle"]}>
                FÜR ALLE EINWOHNER AUSSERHALB VON NORDAMERIKA
              </div>
              <p>
                Wenn Sie außerhalb von Nordamerika ansässig sind, entsprechen
                das anwendbare Recht und der Gerichtsstand dem Recht und dem
                Gerichtsstand Ihres Wohnorts.
              </p>

              <div className={styles["contentTitle"]}>Kündigung</div>
              <p>
                Unbeschadet dieser Bestimmungen behält sich Hydrafacial das
                Recht vor, Ihre Lizenz für die Nutzung des Kontos fristlos nach
                absolut freiem Ermessen zu kündigen und Ihren künftigen Zugriff
                auf das Konto zu blockieren oder zu verhindern. Unterlässt es
                Hydrafacial, entsprechende Schritte zu unternehmen und verzögert
                Hydrafacial entsprechende Schritte, so bedeutet das keinen
                Verzicht auf das Recht zur Durchsetzung dieser Bedingungen.
              </p>

              <div className={styles["contentTitle"]}>Änderungen</div>
              <p>
                Hydrafacial behält sich das Recht vor, diese Bedingungen und
                andere mit der Nutzung des Kontos in Zusammenhang stehende
                Richtlinien jederzeit nach freiem Ermessen zu ändern oder zu
                modifizieren, entweder durch direkte Änderung dieser
                Kontobedingungen oder durch Posten der Überarbeitungen auf der
                Hydrafacial-Website. Die fortgesetzte Nutzung des Kontos nach
                solchen Änderungen oder Modifizierungen der Bedingungen oder
                anderer Hydrafacial-Richtlinien stellt eine Annahme dieser
                Änderungen oder Modifizierungen dar. Wenn Sie mit den Änderungen
                oder Modifizierungen nicht einverstanden sind, müssen Sie Ihr
                Konto unverzüglich deinstallieren.
              </p>

              <div className={styles["contentTitle"]}>
                Salvatorische Klausel
              </div>
              <p>
                Sollte eine der Bestimmungen dieser Bedingungen für
                rechtswidrig, nichtig oder aus irgendeinem Grund undurchsetzbar
                befunden werden, gilt eine solche Bestimmung als von diesen
                Bedingungen abgetrennt, und beeinträchtigt nicht die Wirksamkeit
                und Durchsetzbarkeit der übrigen Bestimmungen.
              </p>

              <div className={styles["contentTitle"]}>
                Hinweis für Einwohner von Kalifornien
              </div>
              <p>
                Nach dem kalifornischen Zivilgesetzbuch, § 1789.3, haben die
                Einwohner Kaliforniens einen verbraucherrechtlichen Anspruch auf
                die folgende konkrete Auskunft: Anbieter des Kontos ist
                Hydrafacial LLC, 2165 E. Spring St, Long Beach, CA 90806. Wenn
                Sie eine Beschwerde in Bezug auf das Konto einreichen oder
                weitere Informationen über die Nutzung des Kontos erhalten
                möchten, schicken Sie bitte ein entsprechendes Schreiben an die
                obige Adresse oder wenden Sie sich per E-Mail an Hydrafacial
                (und setzen Sie „Kalifornische Einwohneranforderung” in die
                Betreffzeile). Sie können sich schriftlich unter der Adresse
                1625 North Market Blvd., Suite N 112, Sacramento CA 95834 oder
                telefonisch unter 800.952.5210 an die Beschwerdehilfe-Einheit
                der kalifornischen Abteilung für Verbraucherdienste des
                Ministeriums für Verbraucherangelegenheiten wenden.
              </p>
              <div className={styles["contentTitle"]}>Kontakt</div>
              <div className={styles["contact"]}>
                <p>
                  Sollten Sie Fragen, Beschwerden oder Forderungen bezüglich des
                  Kontos haben, richten Sie diese bitte an:
                </p>
                <p>The Hydrafacial Company</p>
                <p>Consumer Care</p>
                <p>
                  E-Mail:
                  <a
                    href="mailto:help@Hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    help@Hydrafacial.com
                  </a>
                   
                </p>
                <p>2165 E. Spring St, Long Beach, CA 90806</p>
                <p>Telefon: 1-888-791-4888</p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Kontaktieren sie uns</h3>
              <p>
                Für unsere Kunden: Bitte kontaktieren Sie die
                Unternehmenseinheit, die auf Ihrem Bestellformular genannt wird.
              </p>
              <p>
                Wenn Sie auf Ihre bei uns gespeicherten personenbezogenen Daten
                zugreifen oder diese prüfen, aktualisieren, korrigieren oder
                löschen oder sonstige Ihnen zustehende Datenschutzrechte ausüben
                wollen, füllen Sie bitte dieses Anforderungsformular aus.
              </p>
              <p>Kontaktdaten des jeweils Verantwortlichen:</p>
              <div className={styles["tableWrapper"]}>
                <table className={styles["contactDetailsTable"]}>
                  <thead>
                    <tr>
                      <th>USA</th>
                      <th>Vereinigtes Königreich</th>
                      <th>Deutschland</th>
                      <th>Frankreich </th>
                      <th>Spanien</th>
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
                Datenschutzbeauftragter: Ignacio de la Corte
              </p>
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
                Sollten Sie Fragen, Anliegen oder Bedenken bezüglich des
                Schutzes Ihrer Daten und Ihrer Rechte haben, lassen Sie uns
                bitte wissen, wie wir Ihnen helfen können.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPageDe;
