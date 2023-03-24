import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getModifiedFileName } from "../../../common/utils/helper";
import Footer from "../../../components/footer";
import LanguageSelector from "../../../components/languageSelector";
import PageHeader from "../../../components/pageHeader";
import { LanguageContext } from "../../../hoc/languageProvider";
import styles from "../privacyPolicy.module.scss";

const PrivacyPolicyPageFr = () => {
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
                DÉCLARATION DE CONFIDENTIALITÉ
              </strong>
            </h2>

            <em className={styles["updatedOn"]}>
              Date de dernière révision : 24/02/2023.
            </em>

            <p>
              Cette déclaration de confidentialité vous permettra de comprendre
              comment nous recueillons, utilisons et protégeons vos informations
              personnelles. Elle s'applique à l’ensemble des produits et
              services Hydrafacial.
            </p>
            <p>
              De temps à autre, nous pouvons être amenés à modifier la présente
              déclaration de confidentialité. Si nous pensons que vous ne pouvez
              raisonnablement pas vous attendre à une telle modification, nous
              vous avertirons des changements significatifs, en plaçant par
              exemple un avis sur nos sites internet et/ou en vous envoyant un
              e-mail (si vous nous avez communiqué votre adresse électronique)
              lorsque nous sommes tenus de le faire en vertu de la législation
              applicable. Vous pouvez vérifier la date de dernière révision de
              la présente déclaration de confidentialité en consultant la date
              indiquée dans cet espace. Il vous incombe de consulter
              régulièrement la présente déclaration de confidentialité.
            </p>
            <div className={styles["summary"]}>
              <h3 className={styles["summaryTitle"]}>
                NOTRE DÉCLARATION DE CONFIDENTIALITÉ EN BREF
              </h3>
              <ol>
                <li>
                  <strong>Notre promesse.</strong> Hydrafacial s'engage à
                  protéger vos informations personnelles. Nous traiterons
                  toujours vos informations personnelles avec respect et
                  concevons nos produits et services dans le respect de votre
                  vie privée.
                </li>
                <li>
                  <strong>Donnees collectées.</strong> Afin de vous fournir nos
                  services, nous devons traiter vos informations personnelles,
                  comme par exemple vos coordonnées de contact, les
                  renseignements relatifs à votre compte, votre historique de
                  traitement, vos coordonnées de paiement, les identifiants de
                  votre appareil ou les renseignements relatifs à vos
                  interactions avec nous.
                </li>
                <li>
                  <strong>Comment nous collectons vos données.</strong> . Nous
                  recueillons des données auprès de vous, lors de votre
                  utilisation de nos produits et services et auprès de sources
                  extérieures.
                </li>
                <li>
                  <strong>Comment nous utilisons vos données.</strong> Vos
                  données peuvent être utilisées pour différentes raisons en
                  vertu de bases légales. Leur traitement peut être fondé sur
                  votre <strong>consentement</strong> (ex. création d'un
                  compte), l'<strong>exécution d'un contrat</strong> (ex.
                  service client), une <strong>obligation légale</strong> (ex.
                  exercice de vos droits ou réponse à une réclamation) ou notre
                  <strong>intérêt légitime</strong> (ex. certaines activités de
                  marketing et/ou prévention de la fraude).
                </li>
                <li>
                  <strong>Partage des données.</strong> Nous partageons vos
                  données principalement avec des prestataires de services qui
                  nous fournissent une assistance et un soutien, à savoir des
                  sociétés du groupe Hydrafacial ou des prestataires extérieurs.
                </li>
                <li>
                  <strong>Protection de vos données.</strong> Nous nous
                  efforçons de mettre en œuvre des mesures techniques et
                  organisationnelles appropriées pour protéger vos informations
                  personnelles contre la destruction accidentelle ou illicite,
                  la perte ou l'altération accidentelle, la divulgation ou
                  l'accès non autorisé et toute autre forme de traitement
                  illicite.
                </li>
                <li>
                  <strong>Durée de conservation de vos données.</strong> Nous ne
                  traiterons pas vos informations personnelles plus longtemps
                  que nécessaire, ni à d'autres fins que celles pour lesquelles
                  elles ont été recueillies.
                </li>
                <li>
                  <strong>Protection de l'enfance.</strong> Nous ne collectons
                  pas sciemment des informations personnelles auprès d'enfants
                  âgés de moins de 13 ans.
                </li>
                <li>
                  <strong>Liens vers d'autres sites.</strong> Nous ne sommes pas
                  responsables des sites liés.
                </li>
                <li>
                  <strong>Vos droits.</strong> Vous pouvez disposer de certains
                  droits relatifs à vos informations personnelles en fonction de
                  votre lieu de résidence et sous réserve de la législation
                  locale (ex. droit d'être informé, droit d'accès, droit de
                  rectification, droit à l'effacement, droit d'opposition). Vous
                  trouverez ci-dessous des renseignements complémentaires pour
                  les consommateurs des États-Unis.
                </li>
              </ol>
              <p>
                Nous vous encourageons à lire l’intégralité de notre déclaration
                de confidentialité et de notre politique en &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/fr/${localString?.["cookiePolicy"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  matière de cookies
                </a>
                &nbsp; dont les liens figurent ci-dessous pour en savoir
                davantage sur la manière dont nous utilisons vos informations
                personnelles et les droits dont vous disposez concernant vos
                données.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Notre promesse</h3>
              <p>
                Chez Hydrafacial, nous nous engageons à protéger vos
                informations personnelles, à les traiter avec respect et à
                concevoir nos produits et services en respectant votre vie
                privée.
              </p>
              <p>
                Hydrafacial est une marque phare de la société The Beauty Health
                Company (désignée ci-après par les termes « Hydrafacial », «
                notre », « nos » ou « nous »). Hydrafacial est une entreprise
                internationale créatrice de catégories qui se concentre sur
                l'offre d'expériences de beauté et de santé en réinventant la
                relation des consommateurs avec leur peau, leur corps et leur
                confiance en soi.
              </p>
              <p>
                Notre marque phare, HydraFacial, a créé la catégorie de
                l'hydradermabrasion en utilisant un système de diffusion
                Vortex-Fusion pour nettoyer, exfolier, extraire, infuser et
                hydrater la peau avec des solutions et des sérums exclusifs.
              </p>
              <p>
                La présente déclaration de confidentialité couvre les
                informations personnelles collectées par Hydrafacial, ses
                filiales et ses sociétés affiliées situées dans le monde entier
                au sein du groupe The Beauty Health Company (les « sociétés
                affiliées ») par le biais de différentes méthodes.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Définitions</h3>
              <p>
                Les « informations personnelles », « données personnelles » ou «
                données à caractère personnel » sont des informations qui
                permettent (à elles seules ou associées à d’autres informations)
                de vous identifier directement ou indirectement.
              </p>
              <p>
                Le « responsable du traitement » est une partie qui définit les
                finalités et les moyens de traitement des données à caractère
                personnel.
              </p>
              <p>
                Le « sous-traitant » ou « prestataire de services/intervenant
                extérieur/tiers » est une partie qui traite des informations
                personnelles pour le compte du responsable du traitement.
              </p>
              <p>
                Le « consommateur » est la personne qui reçoit un traitement
                Hydrafacial
              </p>
              <p>
                Le « prestataire de soins » est le professionnel qui réalise un
                traitement Hydrafacial.
              </p>
              <p>
                Le « prestataire » ou le « client » est la clinique ou le centre
                qui dispense des traitements Hydrafacial.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Données collectées</h3>
              <p>
                Pour vous fournir nos produits et/ou services, nous avons besoin
                de traiter vos données personnelles. Les informations
                personnelles que nous recueillons à votre sujet peuvent inclure
                :
              </p>
              <ul>
                <li>
                  vos coordonnées, comprenant votre nom complet, votre adresse
                  postale et électronique, votre/vos numéro(s) de téléphone, le
                  nom et les coordonnées de votre clinique/centre - y compris,
                  si vous êtes esthéticienne, le nom de votre entreprise ou de
                  votre employeur, votre adresse et votre numéro de téléphone
                  afin de pouvoir travailler avec vous ;
                </li>
                <li>
                  les renseignements relatifs à votre compte, comprenant votre
                  adresse électronique, votre nom complet, votre nom
                  d'utilisateur et votre mot de passe, votre numéro de
                  téléphone, votre date de naissance, votre code postal et votre
                  image personnelle, lorsque vous nous les communiquez pour
                  créer un compte ;
                </li>
                <li>
                  votre CV et les données fournies pendant la procédure de
                  recrutement ;
                </li>
                <li>
                  votre historique de traitement*, comprenant le type de
                  traitement reçu, les ajustements complémentaires et les
                  produits utilisés (le cas échéant) lorsque vous avez un compte
                  Hydrafacial ;
                </li>
                <li>
                  vos coordonnées de paiement et/ou vos coordonnées bancaires
                  afin de compléter vos commandes d'achat ;
                </li>
                <li>
                  les identifiants d’appareil, comprenant votre adresse IP,
                  votre système d'exploitation, votre appareil et votre
                  localisation lorsque vous utilisez nos services en ligne ;
                </li>
                <li>
                  des informations sur vos interactions avec notre société, nos
                  sites internet et nos services.
                </li>
              </ul>
              <p>
                * Les consommateurs ont la possibilité de partager leur
                historique de traitement avec les prestataires de soins. De
                même, lorsque des prestataires de soins utilisent un appareil
                Hydrafacial, ils ont la possibilité de synchroniser leur compte
                dans l’application avec l’appareil afin d’obtenir l’historique
                de traitement des prestataires. Les prestataires de soins
                verront des données agrégées concernant les traitements qu’ils
                ont réalisés. Aucune information personnelle liée à ces
                traitements n’est consultable par le prestataire de soins.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Comment nous collectons vos données
              </h3>
              <p>
                Nous recueillons des données auprès de vous, lors de votre
                utilisation de nos produits et services et auprès de sources
                extérieures (par exemple, des sources accessibles au public).
              </p>
              <p>
                Nous recueillons des données à caractère personnel lorsque :
              </p>
              <ul>
                <li>
                  vous vous inscrivez pour recevoir des informations sur nos
                  produits ou sur d’autres services ;
                </li>
                <li>
                  vous nous contactez ou vous nous demandez des renseignements,
                  y compris par le biais des réseaux sociaux ;
                </li>
                <li>vous effectuez un achat ;</li>
                <li>vous utilisez nos produits ou services ;</li>
                <li> vous créez ou modifiez votre compte ;</li>
                <li>
                  {" "}
                  vous utilisez les fonctionnalités de l'application Hydrafacial
                  ;
                </li>
                <li>
                  vous postulez à un emploi ou suivez la procédure de
                  recrutement ;
                </li>
                <li>vous répondez à des communications ou à des enquêtes ;</li>
                <li>
                  vous visitez notre site internet ou nos services en ligne.
                </li>
              </ul>
              <p>
                Nous recueillons des données vous concernant au moyen de
                technologies telles que les cookies et les empreintes
                numériques, qui sont des techniques qui nous permettent de
                combiner des informations pour identifier votre appareil.
              </p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>
                Vous avez la possibilité d'accepter ou de refuser les cookies de
                n'importe quel site internet en modifiant les paramètres de
                votre navigateur. Si vous souhaitez restreindre ou bloquer les
                cookies installés par notre site internet, vous pouvez le faire
                par le biais des paramètres de votre navigateur. Pour savoir
                comment gérer et désactiver les cookies, vous pouvez utiliser la
                fonction « Aide » de votre navigateur ou consulter les sites
                <a
                  href="https://www.aboutcookies.org/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  https://www.aboutcookies.org/
                </a>{" "}
                ou{" "}
                <a
                  href="https://www.allaboutcookies.org/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  https://www.allaboutcookies.org/
                </a>
                . Veuillez toutefois noter qu'en supprimant ou en désactivant
                les cookies, vous risquez d'affecter la fonctionnalité de notre
                site internet et de ne pas pouvoir accéder à certaines zones ou
                fonctionnalités du site.
              </p>
              <p>
                Si vous souhaitez en savoir davantage sur la manière dont nous
                utilisons les cookies et autres dispositifs équivalents
                susceptibles d'être installés sur les terminaux de nos clients
                et utilisateurs, nous vous recommandons de consulter notre
                &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/fr/${localString?.["cookiePolicy"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Politique en matière de cookies
                </a>
                .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Comment nous utilisons vos données
              </h3>
              <p>
                Vos données peuvent être utilisées pour diverses raisons en
                vertu de différentes bases légales, comme par exemple :
              </p>
              <ul>
                <li>
                  vous contacter pour vous fournir les informations demandées –
                  sur la base du consentement ;
                </li>
                <li>
                  traiter le paiement de vos commandes ainsi qu’à d’autres fins
                  comptables et commerciales – sur la base d’une obligation
                  légale et/ou de l’exécution d’un contrat ;
                </li>
                <li>
                  fournir un service client – sur la base d’une obligation
                  légale et/ou de l’exécution d’un contrat ;
                </li>
                <li>
                  traiter votre demande d’entrée en relation– sur la base du
                  consentement ;
                </li>
                <li>
                  créer, mettre à jour, gérer votre compte et fournir le support
                  nécessaire – sur la base du consentement et de l’exécution
                  d’un contrat ;
                </li>
                <li>
                  vous tenir informé des promotions et des nouveautés par
                  e-mail, téléphone, SMS, réseaux sociaux ou courrier, et vous
                  inviter par e-mail/SMS à créer un compte lorsque vous utilisez
                  nos produits ou services (en fonction de vos préférences) -
                  sur la base du consentement ou de l'intérêt légitime, le cas
                  échéant ;
                </li>
                <li>
                  vous fournir, ainsi qu'à d'autres clients, des informations
                  pertinentes dans le cadre de notre programme de marketing –
                  sur la base de l'intérêt légitime ;
                </li>
                <li>
                  examiner votre profil professionnel et vos antécédents lorsque
                  vous postulez à un emploi et au cours du processus de
                  recrutement afin de sélectionner le bon candidat ;
                </li>
                <li>
                  réaliser des études de marché, des développements de produits
                  et des statistiques - sur la base de l'intérêt légitime ;
                </li>
                <li>
                  détecter et prévenir la fraude, l’accès non autorisé au
                  produit et/ou aux services et d’autres activités illicites -
                  sur la base de l'intérêt légitime.
                </li>
                <li>
                  administrer le recouvrements de nos créances - sur la base de
                  l'intérêt légitime.
                </li>
                <li>
                  évaluations et analyses pour nous permettre de réviser,
                  développer et améliorer les services que nous proposons - sur
                  la base de l'intérêt légitime.
                </li>
              </ul>
              <p>
                Comme indiqué par ailleurs, nous pouvons avoir besoin d'utiliser
                vos données personnelles à des fins commerciales légitimes pour
                nous assurer de continuer à offrir une expérience client de
                qualité. Nous nous efforcerons à chaque fois de trouver un
                équilibre entre nos intérêts et les vôtres.
              </p>
              <p>
                Les processus ci-dessous sont considérés comme des exemples de
                notre intérêt légitime :
              </p>
              <ul>
                <li>
                  détection et prévention de la fraude au sein de l’entreprise,
                  pouvant inclure des vérifications par rapport aux informations
                  accessibles au public et aux profils figurant sur les réseaux
                  sociaux ;
                </li>
                <li>
                  prise de contact pour veiller à ce que vous ayez une bonne
                  expérience en tant que client d'Hydrafacial ;
                </li>
                <li>
                  audit interne de nos processus afin de maintenir des normes
                  élevées ;
                </li>
                <li>certaines de nos activités de marketing ;</li>
                <li>
                  partage de données avec des tiers sélectionnés afin d'ajouter
                  de la valeur à nos produits.
                </li>
              </ul>
              <p>
                Hydrafacial peut vous contacter de temps à autre pour vous
                demander de participer à une enquête, afin de nous permettre de
                réviser, développer et améliorer nos services.
              </p>
              <p>
                Vos réponses à une telle enquête, y compris les données à
                caractère personnel que vous nous communiquez, ne seront
                utilisées par Hydrafacial qu'aux fins énoncées dans la présente
                déclaration de confidentialité. Les données à caractère
                personnel peuvent inclure (sans s’y limiter) votre nom, votre
                âge et votre adresse e-mail. Selon l'enquête à laquelle vous
                répondez, nous pouvons également recueillir des données relevant
                de catégories particulières.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Partage de données</h3>
              <p>
                Nous ne vendons pas vos informations personnelles à des tiers.
              </p>
              <p>
                Nous pouvons faire appel à des entreprises extérieures, y
                compris des sous-traitants (prestataires de services), pour
                réaliser certaines fonctions pour notre compte. Nous pouvons
                partager vos informations personnelles avec ces sous-traitants
                qui nous assistent dans nos activités commerciales, comme par
                exemple le traitement des paiements, le conditionnement et
                l'expédition ; les cabinets d'avocats, les consultants, les
                auditeurs en cas de besoin ; les services CRM, les services de
                courrier électronique, les commentaires sur les produits ou les
                logiciels d'assistance ; les systèmes d’analyse de site
                internet. Lorsque Hydrafacial reçoit vos informations
                personnelles et les transfère ensuite à un sous-traitant pour
                traitement, Hydrafacial conserve la responsabilité de s'assurer
                que ce sous-traitant traite vos informations personnelles selon
                les normes prescrites par la législation applicable en matière
                de protection des données, dont notamment le Règlement général
                sur la protection des données (« RGPD ») de l’UE. Ces transferts
                seront généralement basés sur notre intérêt légitime ou convenus
                par contrat.
              </p>
              <p>
                Nous pouvons avoir besoin de transférer vos données à caractère
                personnel à d'autres sociétés du groupe ou à des prestataires de
                services situés aux États-Unis. Nous prendrons dans ce cas des
                mesures garantissant que vos données bénéficient d'un niveau de
                protection adéquat conformément aux réglementations applicables,
                à des fins compatibles avec la présente déclaration de
                confidentialité et fondées sur notre intérêt légitime ou une
                nécessité contractuelle
              </p>
              <p>
                Dans certaines circonstances, nous partageons également vos
                données avec des entreprises extérieures. La protection de la
                vie privée reste toujours primordiale et nous nous efforçons
                systématiquement de minimiser les données ainsi partagées.
              </p>
              <p>Il peut s’agir des circonstances suivantes :</p>
              <ul>
                <li>
                  partage avec des partenaires soigneusement sélectionnés afin
                  d'ajouter de la valeur à nos produits ;
                </li>
                <li>
                  partage avec des tiers pour qu'ils puissent vous proposer des
                  enquêtes ;
                </li>
                <li>
                  création d'un profil marketing pour trouver des clients
                  similaires ayant des besoins comparables.
                </li>
              </ul>
              <p>
                En plus des cas mentionnés ci-dessus, il existe d'autres
                scénarios dans lesquels nous pourrions avoir besoin de partager
                vos données. Il s'agit notamment des cas suivants :
              </p>
              <ul>
                <li>lorsque nous avons l’obligation légale de le faire ;</li>
                <li>lorsqu'il existe un devoir de communication au public ;</li>
                <li>
                  lorsque cette divulgation est nécessaire pour protéger nos
                  intérêts ;
                </li>
                <li>
                  lorsque cette divulgation est faite à votre demande ou avec
                  votre consentement.
                </li>
              </ul>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Transferts à l’étranger
              </h3>
              <p>
                Hydrafacial exerce son activité au niveau mondial. Par
                conséquent, les données à caractère personnel des personnes qui
                visitent nos sites Internet et/ou qui utilisent ou achètent nos
                produits ou services, ou qui entrent en contact avec nous de
                toute autre manière, peuvent être transférées et consultées dans
                le monde entier, notamment dans les pays où Hydrafacial, ses
                sociétés affiliées ou ses sous-traitants exercent leur activité.
              </p>
              <p>
                Nous protégerons vos informations personnelles conformément à la
                présente déclaration de confidentialité, quel que soit l'endroit
                où elles sont traitées. Nous ne transférons pas et ne divulguons
                pas de manière active ou volontaire des informations
                personnelles de nos clients aux pouvoirs publics et aux
                autorités chargées de l'application de la loi (les « autorités
                ») et/ou ne leur donnons pas accès à vos informations
                personnelles. En cas de demande émanant d'une autorité, nous
                avons mis en place des procédures et des systèmes de contrôle
                pour nous assurer que cette demande est évaluée conformément à
                la procédure décrite dans notre &nbsp;
                <a
                  href={getModifiedFileName(
                    `/files/fr/${localString?.["transparencyReport"]}`
                  )}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  rapport de transparence
                </a>
                .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Informations destinées aux personnes situées dans l'Espace
                économique européen (« EEE ») ou le Royaume-Uni
              </h3>
              <p className={styles["sectionDescription"]}>
                En tant qu’entreprise mondiale, Hydrafacial peut transférer des
                informations personnelles de l'EEE ou du Royaume-Uni vers les
                États-Unis ou d'autres pays, y compris des informations
                personnelles reçues de personnes résidant dans l'EEE ou au
                Royaume-Uni qui visitent nos sites Internet, achètent nos
                produits ou utilisent nos services, ou entrent en contact avec
                nous de toute autre manière.
              </p>
              <p className={styles["sectionDescription"]}>
                Hydrafacial s'appuie dans ce cas sur les éléments suivants :
              </p>
              <ul>
                <li className={styles["sectionDescription"]}>
                  Décisions d'adéquation, telles qu'adoptées par :
                  <ul>
                    <li className={styles["sectionDescription"]}>
                      la Commission européenne (« CE »), sur la base de
                      l'article 45 du règlement (UE) 2016/679 (RGPD) - pour en
                      savoir davantage et accéder à la liste complète des pays
                      jugés adéquats à ce jour, veuillez consulter le site
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
                      le secrétaire d'État britannique, sur la base de l'article
                      45 du RGPD britannique et de l’article 17A du Data
                      Protection Act de 2018 - pour en savoir davantage et
                      accéder à la liste complète des pays jugés adéquats à ce
                      jour, veuillez consulter le site
                      <a
                        href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/
                      </a>
                      ; ou
                    </li>
                    <li className={styles["sectionDescription"]}>
                      les &nbsp;
                      <a
                        href={getModifiedFileName(
                          `/files/fr/${localString?.["standardContractualClauses"]}`
                        )}
                        style={{
                          color: "#0d6efd",
                          textDecoration: "underline",
                        }}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        clauses contractuelles types
                      </a>
                      &nbsp; (« CCT ») de la CE ou l'addendum sur le transfert
                      international de données (« IDTA ») de l’Information
                      Commissioner’s Office (« ICO ») britannique, selon le cas,
                      complétés par les mesures de sécurité supplémentaires
                      recommandées par le Comité européen de la protection des
                      données.
                    </li>
                  </ul>
                </li>
              </ul>
              {/*eslint-disable-next-line react/no-unescaped-entities*/}
              <p className={styles["sectionDescription"]}>
                Les commissaires à l’information de la CE et du Royaume-Uni ont
                déterminé que les CCT et l'IDTA sont susceptibles d’offrir des
                garanties suffisantes pour protéger les données à caractère
                personnel transférées en dehors de l'EEE et du Royaume-Uni. Pour
                en savoir davantage, vous pouvez visiter les sites suivants :
                <a
                  href="         https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
                </a>{" "}
                et
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
                Hydrafacial effectue des évaluations de l'impact des transferts
                et assure une surveillance constante des conditions dans
                lesquels ils sont effectués pour vérifier qu'ils maintiennent,
                dans la pratique, un niveau de protection essentiellement
                équivalent à celui garanti par la législation européenne et
                britannique sur la protection des données.
              </p>
              <p className={styles["sectionDescription"]}>
                Nous appliquons les conditions et exigences décrites dans la
                présente déclaration de confidentialité à tous les transferts
                internationaux de données, quel qu’en soit l’endroit, avec des
                garanties adéquates et en veillant toujours à la sécurité de vos
                informations personnelles, au moyen des outils de transfert
                international de données les plus pratiques, conformément au
                contrat type préparé par les régulateurs.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Informations destinées aux personnes situées en Chine, en Corée
                du Sud et en Indonésie
              </h3>
              <p className={styles["sectionDescription"]}>
                Les données à caractère personnel qui font l’objet d’un
                traitement sont stockées sur des serveurs locaux situés dans
                chacun de ces pays, sans transfert de données transfrontalier
                vers d'autres pays.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Protection de vos données
              </h3>
              <p>
                Hydrafacial s'efforce de mettre en œuvre des mesures techniques
                et organisationnelles appropriées pour protéger vos données à
                caractère personnel contre la destruction accidentelle ou
                illicite, la perte ou l'altération accidentelle, la divulgation
                ou l'accès non autorisé et toute autre forme de traitement
                illicite. Nous veillons à ce que le niveau de sécurité et les
                mesures adoptées pour protéger vos données à caractère personnel
                soient adaptés aux risques liés à la nature et à l'utilisation
                de ces données. Nous suivons les pratiques reconnues dans le
                secteur pour protéger notre environnement informatique et nos
                installations physiques, comprenant notamment :
              </p>
              <ul>
                <li>la gestion des accès</li>
                <li>
                  l’utilisation de VPN (réseau privé virtuel) pour l'accès à
                  distance
                </li>
                <li>le cryptage des données au repos et en transit</li>
                <li>des capacités de sauvegarde et de récupération</li>
                <li>des firewalls</li>
                <li>des logiciels antivirus</li>
                <li>l’authentification multifactorielle (MFA)</li>
                <li>le filtrage de sécurité du courrier électronique</li>
                <li>des formations de sensibilisation à la sécurité</li>
              </ul>
              <p>
                Sur nos sites internet et nos applications, nous protégeons les
                données que vous nous avez communiquées en vous fournissant un
                identifiant et un mot de passe. Nous utilisons également la
                sécurité standard du secteur pour crypter les données sensibles
                en transit vers nos serveurs.
              </p>
              <p>
                L'identifiant et le mot de passe nous aident à protéger vos
                données à caractère personnel. Vous devez garder ce mot de passe
                confidentiel et ne pas le divulguer à qui que ce soit.
              </p>
              <p>
                Certains e-mails suspects contiennent des pièces jointes ou des
                liens vers des sites internet qui essaient d'installer des
                logiciels malveillants sur votre ordinateur. Si vous avez saisi
                votre mot de passe sur un site qui vous semble malveillant,
                contactez-nous immédiatement pour nous demander de modifier
                votre mot de passe.
              </p>
              <p>
                Si vous avez saisi vos coordonnées de paiement sur un site qui
                vous semble malveillant, ou si vous avez répondu à un e-mail en
                fournissant ces informations, vous devez immédiatement contacter
                l’établissement bancaire concerné. N'oubliez pas de nous
                contacter pour mettre à jour vos coordonnées de paiement.
              </p>
              <p>
                Lorsque vous nous demandez un devis, nous traitons les données
                sur un serveur sécurisé. Votre navigateur vous confirmera que
                vous vous trouvez dans une zone sécurisée en affichant une clé
                ou un cadenas fermé dans le coin inférieur droit de la fenêtre
                du navigateur.
              </p>
              <p>
                Beaucoup d’organisations utilisent des dispositifs de sécurité
                tels que des firewalls pour protéger leurs systèmes
                informatiques. Ces firewalls peuvent vous empêcher de vous
                connecter à notre serveur sécurisé. Si vous êtes au travail et
                que vous n’arrivez pas à vous connecter à notre site internet,
                veuillez vous adresser à votre administrateur informatique.
              </p>
              <p>
                Sachez que les communications sur internet, telles que les
                courriers électroniques, ne sont pas sécurisées à moins qu'elles
                n'aient été cryptées. Il est possible que vos communications
                transitent par plusieurs pays avant d’arriver à leur
                destinataire - c'est la nature même de l'internet. Nous ne
                saurons être tenus responsables de l'accès non autorisé ou de la
                perte d'informations personnelles qui échappent à notre
                contrôle.
              </p>
              <p>
                Vous pouvez également protéger votre système en installant un
                antivirus et en effectuant les scans recommandés par le
                fournisseur. Vous devez également exécuter toutes les mises à
                jour de sécurité et tous les correctifs que vous recevez du
                fournisseur pour votre système
              </p>
              <p>
                Ne répondez jamais à des e-mails non sollicités provenant de
                sources inconnues. Ces messages peuvent être frauduleux et avoir
                pour but d’obtenir vos données personnelles ou des informations
                de paiement.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Durée de conservation de vos données
              </h3>
              <p>
                Nous ne traiterons pas vos informations personnelles plus
                longtemps que nécessaire ni à d’autres fins que celles pour
                lesquelles elles ont été recueillies. Nous conservons vos
                informations personnelles pendant différentes durées en fonction
                de la catégorie à laquelle elles appartiennent et de la nature
                de votre relation avec nous. Nous déterminons au cas par cas la
                durée pendant laquelle nous avons besoin des
              </p>
              <p>
                informations personnelles, mais notre objectif est de conserver
                vos informations personnelles le moins longtemps possible pour
                réaliser la finalité de leur collecte.
              </p>
              <p>
                Nous sommes soumis à différentes obligations légales concernant
                la conservation des données et avons nos propres intérêts
                légitimes à conserver vos données pendant un certain temps. Ces
                intérêts comprennent la défense de toute réclamation tardive ou
                différée et l'amélioration de nos produits et services.
              </p>
              <p>
                Si vous ne faites rien après avoir reçu un e-mail ou SMS
                d'Hydrafacial vous invitant à créer un compte, parce que vous
                avez reçu un traitement Hydrafacial (Syndeo), nous supprimerons
                automatiquement vos données dans un délai raisonnable.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Protection de l’enfance
              </h3>
              <p>
                Nous ne collectons pas sciemment des informations personnelles
                auprès d'enfants âgés de moins de 13 ans et nos produits ne sont
                pas destinés à être achetés ou utilisés par des enfants. Les
                parents doivent savoir qu'il existe des outils de contrôle
                parental disponibles en ligne qui peuvent être utilisés pour
                empêcher les enfants de soumettre des informations en ligne sans
                l'autorisation de leurs parents ou d'accéder à des contenus
                dangereux pour des mineurs.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Liens vers d’autres sites
              </h3>
              <p>
                Pour améliorer votre expérience Hydrafacial, notre site internet
                peut contenir des liens vers d'autres sites. Ces sites ont leur
                propre politique de confidentialité que vous pouvez consulter.
                Hydrafacial n'est pas responsable du contenu hébergé sur les
                sites internet de tiers dont les liens figurent sur son site.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Vos droits</h3>
              <p>
                Vous pouvez disposer de certains droits relatifs à vos
                informations personnelles en fonction de votre lieu de résidence
                et sous réserve de la législation locale. Il s’agit notamment,
                sous réserve d'exceptions ou de limitations, des droits suivants
                :
              </p>
              <ul>
                <li>
                  le droit de savoir quelles sont les données personnelles
                  collectées et la finalité de leur collecte ;
                </li>
                <li>
                  le droit de savoir quelles sont les données personnelles qui
                  sont « vendues » ou « partagées », dans quel but, et les
                  catégories de destinataires ;
                </li>
                <li>le droit d'accéder à vos données personnelles ;</li>
                <li>
                  le droit de demander la rectification, la correction ou la
                  mise à jour de vos données personnelles ;
                </li>
                <li>
                  le droit de nous demander de limiter le traitement de vos
                  informations dans certaines circonstances, par exemple lorsque
                  vous vous inquiétez de l'exactitude des données ou de la
                  manière dont elles sont utilisées ;
                </li>
                <li>
                  le droit à l’effacement de vos données personnelles, y compris
                  auprès de tiers lorsque ces données ont été vendues, partagées
                  ou divulguées ;
                </li>
                <li>
                  le droit de refuser la « vente » ou le « partage » de vos
                  données personnelles ;
                </li>
                <li>
                  le droit de nous demander de transférer les informations que
                  vous nous avez communiquées à une autre organisation, ou de
                  vous les restituer, le cas échéant.
                </li>
                <li>
                  le droit de s'opposer au traitement de vos données
                  personnelles ;
                </li>
                <li>
                  le droit de ne pas faire l'objet de décisions ou de profilages
                  automatisés.
                </li>
              </ul>
              <p>
                Si vous souhaitez : accéder, examiner, mettre à jour, corriger
                et/ou supprimer les données à caractère personnel que nous
                détenons à votre sujet ; ou exercer tout autre droit à la vie
                privée dont vous disposez, vous pouvez remplir ce formulaire de
                demande. Sachez toutefois que ces droits ne s'appliquent pas
                dans toutes les circonstances ; nous vous fournirons ce que vous
                nous avez demandé lorsque nous pouvons le faire.
              </p>
              <p>
                Notre équipe chargée de la protection des données examinera
                votre demande vérifiable (la « demande de respect de vie privée
                ») et vous répondra dans les meilleurs délais. Si nous ne sommes
                pas en mesure de répondre à votre demande en raison d'une
                exception ou d'une limitation, nous vous l'expliquerons par
                écrit. Si nous avons besoin de plus de temps, nous vous
                informerons par écrit de la raison et de la durée de ce délai.
              </p>
              <p>
                Si vous souhaitez que la demande soit effectuée pour votre
                compte par un agent autorisé, celui-ci peut le faire en
                remplissant le présent formulaire de demande. Nous vous
                demanderons une autorisation écrite et signée attestant que cet
                agent est autorisé à agir en votre nom. Une fois l'autorisation
                reçue, nous examinerons votre demande au titre de vos droits à
                la vie privée et vous répondrons dans les meilleurs délais. Nous
                répondrons directement à l'adresse électronique fournie par
                l'agent autorisé dans le cadre de la demande faite pour votre
                compte.
              </p>
              <p>
                Nous vous rappelons que si vous n'êtes pas satisfait du
                traitement de vos données à caractère personnel, vous avez le
                droit de déposer une plainte auprès d'une autorité de protection
                des données (« APD »).
              </p>
              <p>
                APD de l’EEE :
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no
                </a>
              </p>
              <p>
                APD du Royaume-Uni :
                <a
                  href="https://ico.org.uk/global/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ico.org.uk/global/contact-us/
                </a>
              </p>
              <p>
                APD de la Suisse :
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
                Informations complémentaires pour les consommateurs situés aux
                États-Unis
              </h3>
              <div className={styles["sectionDescription"]}>
                <p className={styles["sectionDescription"]}>
                  En vertu du California Privacy Rights Act (« CPRA ») et du
                  Virginia Commonwealth Data Protection Act (« CDPA »), les
                  résidents de la Californie et de la Virginie disposent de
                  certains droits concernant les informations personnelles que
                  les entreprises collectent et traitent à leur sujet. Ils ont
                  notamment le droit de demander l'accès à leurs données
                  personnelles et la suppression de ces données, ainsi que le
                  droit d'ordonner à une entreprise de cesser de vendre ou de
                  partager leurs données personnelles.
                </p>
                <p className={styles["sectionDescription"]}>
                  Nous sommes tenus de détailler les catégories de données
                  personnelles que nous collectons et/ou partageons aux fins
                  décrites dans la section « Comment nous utilisons vos données
                  » de la présente déclaration de confidentialité et aux
                  sous-traitants aux fins indiquées à la section « Partage des
                  données ».
                </p>
                <p className={styles["sectionDescription"]}>
                  Nous collectons et avons collecté au cours des 12 derniers
                  mois les catégories suivantes d'informations personnelles à
                  des fins commerciales :
                </p>
                <ul>
                  <li className={styles["sectionDescription"]}>
                    identifiants personnels ;
                  </li>
                  <li className={styles["sectionDescription"]}>
                    renseignements collectés par des cookies ou d'autres
                    technologies, comprenant l'adresse IP ;
                  </li>
                  <li className={styles["sectionDescription"]}>
                    informations relatives aux activités réalisées en ligne ou
                    sur d'autres réseaux électroniques, comprenant les
                    informations de connexion, les contenus consultés ou
                    utilisés et les renseignements concernant le compte, le
                    navigateur et l'appareil utilisé ;
                  </li>
                  <li className={styles["sectionDescription"]}>
                    informations dérivées de l'une quelconque des catégories
                    d'informations personnelles ci-dessus.
                  </li>
                </ul>
                <p className={styles["sectionDescription"]}>
                  Bien qu'Hydrafacial ne vende pas de données personnelles en
                  échange d'une contrepartie monétaire, nous partageons des
                  données personnelles pour d'autres avantages tels que définis
                  par l’article 1798.140(ad)(2) du code civil californien. Au
                  cours des 12 derniers mois, nous avons partagé si nécessaire
                  des données personnelles à des « fins commerciales »
                  spécifiques, telles que définies par l’article 1798.140(e) du
                  code civil californien et indiquées au chapitre « Partage des
                  données ». Cela inclut le partage d'identifiants personnels,
                  d'informations commerciales et d'activités réalisées en ligne
                  ou sur d'autres réseaux électroniques avec des prestataires de
                  paiement, des services de gestion des relations avec la
                  clientèle, des consultants, des e-mails, des retours
                  d'information sur les produits, des services d'assistance, des
                  réseaux publicitaires, des services d'analyse de sites
                  internet. Vous avez le droit de demander à Hydrafacial de ne
                  pas vendre ou partager vos informations personnelles.
                </p>
                <p className={styles["sectionDescription"]}>
                  Pour en savoir davantage sur la manière d'exercer vos droits,
                  y compris la liste des droits à la protection de la vie privée
                  dont vous pouvez bénéficier, veuillez consulter la section «
                  Vos droits » de la présente déclaration de confidentialité. Si
                  vous souhaitez consulter, mettre à jour, corriger ou supprimer
                  les données personnelles que nous détenons à votre sujet, ou
                  exercer tout autre droit au respect de la vie privée dont vous
                  disposez, y compris le droit de refuser la vente ou le partage
                  de vos données personnelles, vous pouvez remplir ce formulaire
                  de demande ou envoyer votre demande à l'adresse suivante :
                  <a
                    href="mailto:dpo@hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    dpo@hydrafacial.com
                  </a>
                </p>
                <p className={styles["sectionDescription"]}>
                  Nous nous efforçons de répondre à ces demandes dans les délais
                  prescrits. Si nous avons besoin d’un délai supplémentaire,
                  nous vous informerons par écrit du motif et de la durée de ce
                  délai. Si vous soumettez votre demande par voie électronique
                  au moyen de notre formulaire de demande en ligne, nous vous
                  enverrons notre réponse écrite à l'adresse électronique
                  vérifiée associée à votre demande. Si vous n'avez pas soumis
                  votre demande par ce moyen, nous vous enverrons notre réponse
                  écrite par courrier ou par voie électronique, à votre choix.
                  Nous ne facturons pas de frais pour traiter ou répondre à
                  votre demande vérifiable en tant que consommateur, sauf si
                  celle-ci est excessive, récurrente ou manifestement infondée.
                  Si nous estimons que la demande justifie des frais, nous vous
                  expliquerons les raisons de cette décision et vous fournirons
                  une estimation du prix avant de traiter votre demande.
                </p>
                <p className={styles["sectionDescription"]}>
                  Droit d’appel – Californie
                </p>
                <p className={styles["sectionDescription"]}>
                  Si Hydrafacial ne donne pas suite à votre demande effectuée au
                  titre du droit au respect de la vie privée dans un délai de 45
                  jours ou, en cas de délai supplémentaire, dans le délai de
                  réponse maximum de 90 jours, nous vous informerons par écrit
                  des raisons pour lesquelles nous n'avons pas donné suite à
                  votre demande et vous expliquerons les droits dont vous
                  disposez pour faire appel de la décision.
                </p>
                <p className={styles["sectionDescription"]}>
                  Droit d’appel – Virginie
                </p>
                <p className={styles["sectionDescription"]}>
                  Vous avez le droit de faire appel d'un refus de donner suite à
                  une demande effectuée au titre du droit au respect de la vie
                  privée dans un délai raisonnable à compter de la réception de
                  notre décision. Dans les 60 jours suivant la réception d'un
                  appel, Hydrafacial vous informera par écrit de toute mesure
                  prise ou non en réponse à votre appel, y compris une
                  explication écrite des raisons de sa décision. Si votre appel
                  est rejeté, vous recevrez un moyen de contacter l'Attorney
                  General de Virginie pour déposer une plainte.
                </p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Californie et Delaware : information « do not track »
              </h3>
              <p>
                Les réglementations sur la protection de la vie privée aux
                États-Unis, telles que les lois de la Californie et du Delaware,
                exigent qu'Hydrafacial indique si elle respecte les paramètres «
                Do Not Track » de votre navigateur concernant la publicité
                ciblée. Hydrafacial applique les normes décrites dans la
                présente déclaration de confidentialité et ne surveille pas ni
                ne répond aux demandes « do not track » des navigateurs.
              </p>
            </div>
            <h2 className={styles["title"]}>Conditions de services</h2>
            <br />
            <div className={styles["contentContainer"]}>
              <p>
                VEUILLEZ LIRE ATTENTIVEMENT LES PRÉSENTES CONDITIONS
                D'UTILISATION. CE COMPTE HYDRAFACIAL™ (LE « COMPTE ») EST GÉRÉ
                PAR HYDRAFACIAL LLC (« Hydrafacial » ou « Nous »). CES
                CONDITIONS D'UTILISATION (LES « CONDITIONS ») CONSTITUENT UN
                CONTRAT JURIDIQUEMENT CONTRAIGNANT ENTRE L'UTILISATEUR (L’«
                UTILISATEUR » ou « Vous ») ET HYDRAFACIAL. ELLES RÉGISSENT
                L'ACCÈS ET L'UTILISATION DU COMPTE, CONTIENNENT DES CLAUSES
                D’EXCLUSION DE RESPONSABILITÉ ET D'AUTRES DISPOSITIONS QUI
                LIMITENT NOTRE RESPONSABILITÉ ENVERS L'UTILISATEUR, TELLES QUE
                RÉVISÉES DE TEMPS À AUTRE PAR HYDRAFACIAL. VEUILLEZ LIRE
                ATTENTIVEMENT LES PRÉSENTES CONDITIONS AVANT DE COMMENCER À
                UTILISER LE COMPTE. SI VOUS N'ACCEPTEZ PAS TOUTES LES CONDITIONS
                DE CET ACCORD, CLIQUEZ SUR LE BOUTON « NE PAS ACCEPTER », OU
                CESSEZ D'UTILISER ET DÉSINSTALLEZ CE COMPTE IMMÉDIATEMENT. CES
                CONDITIONS SONT ÉGALEMENT INCORPORÉES PAR RÉFÉRENCE À NOTRE
                POLITIQUE DE CONFIDENTIALITÉ.
              </p>
              <div className={styles["contentTitle"]}>
                POUR LES RÉSIDENTS D'AMÉRIQUE DU NORD UNIQUEMENT, COMME STIPULÉ
                CI-DESSOUS :
              </div>
              <p>
                Les présentes conditions contiennent une clause d'arbitrage qui
                régit tout litige entre vous et nous. Cette disposition :
              </p>
              <ul>
                <li>élimine votre droit à un procès avec jury ; et</li>
                <li>
                  affecte substantiellement vos droits, en vous empêchant
                  notamment d’entamer, de rejoindre ou de participer à des
                  procédures collectives ou consolidées.
                </li>
              </ul>
              <p>
                Vous nous autorisez à vous envoyer des avis, des communications
                et des avenants aux présentes conditions par des moyens
                électroniques, y compris en modifiant les présentes conditions
                dans le compte ou en publiant des révisions de ces conditions
                sur le site internet d’Hydrafacial.
              </p>
              <div className={styles["contentTitle"]}>Éligibilité</div>
              <p>
                Le compte n’est pas destiné aux utilisateurs de moins de 13 ans.
                L'UTILISATEUR DOIT ÊTRE ÂGÉ DE 13 ANS OU PLUS POUR ACCÉDER AU
                COMPTE ET L'UTILISER. Si l'utilisateur a entre 13 et 18 ans,
                il/elle ne peut utiliser le compte que sous la supervision d'un
                parent ou d'un tuteur légal qui accepte d'être engagé par les
                présentes conditions. L'utilisateur déclare et garantit (a)
                qu'il/elle n'est pas situé dans un pays soumis à un embargo du
                gouvernement américain ou désigné par le gouvernement américain
                comme un pays soutenant le terrorisme ; et (b) qu'il/elle ne
                figure pas sur une liste de parties interdites ou soumises à des
                restrictions publiée par le gouvernement américain.
              </p>
              <p>
                Afin d'utiliser certaines fonctions de notre Compte, vous devrez
                vous inscrire pour créer un compte. Vous vous engagez à : (a) ne
                créer qu’un seul compte ; (b) fournir des informations exactes,
                véridiques, actuelles et complètes lors de la création de votre
                compte ; (c) maintenir et mettre à jour en temps utile les
                informations de votre compte ; (d) maintenir la sécurité de
                votre compte en ne divulguant pas votre mot de passe à d'autres
                personnes et en limitant l'accès à votre compte et à votre
                ordinateur ; (e) notifier rapidement Hydrafacial si vous
                découvrez ou suspectez des violations de sécurité relatives au
                Compte ; et (f) assumer la responsabilité de toutes les
                activités qui ont lieu sur votre compte et accepter tous les
                risques d'accès non autorisé.
              </p>
              <div className={styles["contentTitle"]}>
                Protection de la vie privée
              </div>
              <p>
                Votre utilisation des Services Syndeo est soumise à la
                Déclaration de confidentialité d'Hydrafacial, disponible sur{" "}
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Avis de confidentialité
                </a>
                . L'Accord de traitement des données est incorporé aux présentes
                conditions et s'applique à tout utilisateur qui possède une
                entreprise et accède à des informations/données à caractère
                personnel par l’intermédiaire des Services Syndeo, auquel cas
                cet utilisateur est considéré comme un sous-traitant. Si vous
                êtes dans ce cas, vous vous engagez à vous conformer à l'Accord
                de traitement des données, disponible sur
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Accord de traitement des données
                </a>
                , en ce qui concerne les informations/données à caractère
                personnel traitées par l’intermédiaire des Services Syndeo.
              </p>
              <div className={styles["contentTitle"]}>
                Droits d'auteur, marques de commerce et licence d'utilisation
              </div>
              <p>
                Sauf indication contraire, le compte et tout contenu et autres
                éléments figurant dans celui-ci, y compris, entre autres, le
                logo Hydrafacial et tous les visuels, illustrations, textes,
                graphiques, images, clips vidéo, informations, données,
                logiciels, fichiers sonores, autres fichiers et la sélection et
                l'arrangement de ceux-ci (collectivement dénommés les « éléments
                du compte ») sont détenus, contrôlés ou concédés sous licence
                par Hydrafacial, ses concédants ou ses utilisateurs, et sont
                protégés par la législation américaine et internationale sur les
                droits d'auteur, les marques de commerce, les brevets, les
                secrets commerciaux et, plus généralement, la propriété
                intellectuelle et les droits de propriété. Syndeo™, Hydrafacial
                LLC, Hydrafacial, le logo Hydrafacial et les autres marques
                commerciales, marques de service, visuels et logos Hydrafacial
                utilisés en relation avec le Compte sont des noms commerciaux,
                des marques commerciales ou des marques déposées enregistrées,
                détenues, contrôlées ou concédées sous licence par Hydrafacial
                (collectivement dénommées les « marques Hydrafacial »). Les
                autres marques, marques de service, visuels et logos utilisés en
                relation avec le compte sont des marques commerciales ou des
                marques déposées de leurs propriétaires respectifs
                (collectivement dénommées les « marques de tiers »). Il est
                interdit de copier, d’imiter ou d’utiliser tout ou partie des
                marques Hydrafacial et des marques de tiers sans l'autorisation
                écrite préalable d'Hydrafacial ou du propriétaire de la marque
                concernée. Le compte et son contenu sont protégés par des droits
                d'auteur, des marques, des brevets, des secrets commerciaux, des
                traités internationaux, des lois fédérales et d'état et d'autres
                droits de propriété et peuvent également comporter des éléments
                de sécurité qui protègent les informations numériques avec
                l'autorisation d'Hydrafacial ou du propriétaire du contenu
                concerné. Tous les droits non expressément accordés sont
                réservés.
              </p>
              <p>
                Le compte et son contenu sont uniquement destinés à un usage
                personnel et non commercial. Sous réserve des présentes
                conditions, Hydrafacial accorde à l'utilisateur une licence
                personnelle, non exclusive, non transférable, limitée et
                révocable pour utiliser le compte à des fins personnelles dans
                le respect des présentes conditions (la « licence d'utilisation
                »). Toute autre utilisation du compte, y compris, entre autres,
                la revente, le transfert, la modification ou la distribution du
                compte ou de textes, d’images, de musique, de codes-barres, de
                vidéos, de données, d’hyperliens, d’éléments affichés ou de tout
                autre contenu associé au compte (le « contenu du compte ») est
                interdite. Sauf mention contraire explicite, aucune disposition
                des présentes conditions ne doit être interprétée comme
                conférant de quelque manière que ce soit, implicitement, par
                préclusion ou autrement, un titre ou un droit de propriété ou
                d'utilisation exclusive se rapportant à un droit de propriété
                intellectuelle ou un autre droit et au goodwill qui s’y
                rapporte. Ces conditions et la licence d'utilisation régissent
                également les mises à jour, les ajouts et les remplacements
                concernant le compte, sauf si ces mises à jour, ajouts ou
                remplacements s’accompagnent de conditions distinctes, qui
                seront dans ce cas les conditions applicables.
              </p>
              <div className={styles["contentTitle"]}>
                Utilisation acceptable
              </div>
              <p>
                L’utilisation du compte, de son contenu et de toute information
                fournie par l'utilisateur, y compris les noms d'utilisateur et
                les mots de passe, les adresses, les adresses e-mail, les
                numéros de téléphone, les renseignements financiers (tels que
                les numéros de carte de paiement) (ci-après dénommés les «
                renseignements de l'utilisateur ») transmis en rapport avec le
                compte, est limitée à la fonctionnalité prévue du compte. Le
                compte ne peut en aucun cas être utilisé d'une manière qui (a)
                harcèle, maltraite, traque, menace, diffame une autre partie ou
                enfreint ses droits (y compris, entre autres, les droits de
                publicité ou d'autres droits de propriété) ; (b) est illégale,
                frauduleuse ou trompeuse ; (c) fournit des informations
                personnelles sensibles, sauf si celles-ci sont expressément
                demandées par Hydrafacial ; (d) contient du courrier indésirable
                ou des publicités non sollicitées ; (e) utilise une technologie
                ou un autre moyen d'accéder à Hydrafacial ou au contenu du
                compte qui n’est pas autorisé par Hydrafacial ; (f) utilise ou
                lance un système automatisé, y compris, entre autres, des «
                robots », des « araignées » ou des « lecteurs hors ligne » pour
                accéder à Hydrafacial ou au contenu du compte ; (g) tente
                d'introduire des virus ou tout autre code informatique, fichier
                ou programme qui interrompent, détruisent ou limitent la
                fonctionnalité des logiciels, matériels et équipements de
                télécommunication ; (h) tente d’accéder de manière non autorisée
                au réseau informatique d'Hydrafacial ou aux comptes de ses
                utilisateurs ; (i) encourage une conduite qui pourrait
                constituer une infraction pénale ou entraîner une action en
                responsabilité civile ; (j) enfreint les présentes conditions ;
                (k) tente d'endommager, de désactiver, de surcharger ou
                d'altérer les serveurs ou réseaux d'Hydrafacial ; (l) usurpe
                l'identité d'une personne physique ou morale ou camoufler votre
                identité ou votre affiliation avec une autre personne physique
                ou morale ; ou (m) ne respecte pas les conditions applicables
                d’une tierce partie (ci-après dénommée « utilisation acceptable
                »). Hydrafacial se réserve le droit, à sa seule discrétion, de
                résilier la licence d’utilisation ou d'intenter une action en
                justice concernant le contenu ou l'utilisation du compte lorsque
                Hydrafacial estime de manière raisonnable que ce contenu ou
                cette utilisation enfreint les présentes conditions ou les
                règles d’Hydrafacial, ou pourrait les enfreindre. Le fait de ne
                pas prendre de telles mesures, ou de tarder à le faire, ne
                constitue en aucun cas une renonciation d’Hydrafacial à son
                droit de faire appliquer les présentes conditions. Hydrafacial
                demande aux utilisateurs de ne pas utiliser leur compte
                lorsqu'ils conduisent ou utilisent des machines ou des
                équipements.
              </p>
              <div className={styles["contentTitle"]}>
                Contenu généré par l'utilisateur
              </div>
              <p>
                Si (et dans la mesure où) nous décidons d'accepter des contenus
                générés par l'utilisateur et sous réserve des fonctionnalités
                disponibles du compte, vous pouvez avoir la possibilité de
                publier, transmettre, soumettre ou publier de toute autre
                manière des avis, des évaluations, des commentaires, des
                suggestions ou d'autres éléments sur le compte (le « contenu
                généré par l'utilisateur ») qui pourront être accédés et
                consultés par le public. En ce qui concerne le contenu généré
                par l'utilisateur que vous soumettez ou publiez, vous certifiez
                que (i) vous avez créé le contenu concerné et en détenez les
                droits correspondants, ou avez l'autorisation expresse de son
                propriétaire pour le publier, et que (ii) ce contenu ne porte
                pas atteinte aux droits d'une autre personne physique ou morale
                (y compris, entre autres, les droits d'auteur, les marques
                commerciales et les droits au respect de la vie privée) et
                n’enfreint aucune loi, règle ou réglementation applicable, ni
                les présentes conditions d'utilisation ou toute autre politique
                publiée par Hydrafacial.
              </p>
              <div className={styles["contentSubTitle"]}>
                Le contenu généré par l'utilisateur ne doit pas :
              </div>
              <ul>
                <li>
                  contenir des informations fausses, diffamatoires, obscènes,
                  blessantes, menaçantes, discriminatoires, fanatiques,
                  haineuses, violentes, vulgaires, injurieuses, pornographiques
                  ou pouvant être jugées offensantes, inappropriées,
                  dommageables, illégales, perturbatrices ou nuisibles ;
                </li>
                <li>
                  enfreindre nos droits légaux ou ceux d’une autre personne (y
                  compris les droits de publicité et les droits au respect de la
                  vie privée), contenir des informations susceptibles de donner
                  lieu à un action en responsabilité civile ou pénale en vertu
                  de la législation applicable, ou promouvoir, encourager ou
                  faciliter de toute autre manière des activités ou des actes
                  illicites ;
                </li>
                <li>
                  infliger ou menacer d’infliger des dommages à des biens ou des
                  personnes ;
                </li>
                <li>
                  inclure des informations personnelles d'autres personnes,
                  telles que l'adresse, le numéro de téléphone, l'adresse
                  e-mail, le numéro de sécurité sociale, le numéro de carte
                  bancaire, les renseignements médicaux ou financiers ou toute
                  autre information pouvant permettre de trouver, contacter ou
                  usurper l'identité de la personne concernée ;
                </li>
                <li>
                  enfreindre un brevet, une marque, un secret commercial, un
                  droit d'auteur, un contrat ou un autre droit de propriété
                  intellectuelle ou autre d'Hydrafacial ou d'une autre personne
                  ;
                </li>
                <li>
                  tenter de porter préjudice à des enfants ou à les exploiter en
                  les exposant à un contenu inapproprié, en leur demandant des
                  informations personnelles identifiables ou de toute autre
                  manière ;
                </li>
                <li>
                  camoufler votre identité ou votre affiliation avec toute autre
                  personne ou organisation, y compris Hydrafacial ;
                </li>
                <li>
                  chercher à recueillir les adresses e-mail d’autres
                  utilisateurs et/ou leurs noms d'utilisateur et mots de passe
                  pour leurs comptes ou d’autres services par des moyens
                  électroniques ou autres à quelque fin que ce soit, y compris
                  pour envoyer des e-mails non sollicités ou d'autres
                  communications électroniques ;
                </li>
                <li>
                  chercher à transmettre des chaînes de lettres, du courrier
                  électronique de masse ou indésirable, automatisé ou non, ou
                  interférer avec, perturber ou créer une charge indue pour
                  Hydrafacial, ses réseaux ou ses services connectés au site
                  internet, ou installer, tenter d'installer ou faciliter
                  l’installation de logiciels espions, de logiciels malveillants
                  ou d'autres codes informatiques sur nos ordinateurs ou
                  équipements ou sur les ordinateurs ou équipements de tiers ;
                </li>
                <li>
                  se rapporter à des activités commerciales, comme par exemple
                  des concours, des tirages au sort et/ou d’autres promotions
                  commerciale, du troc, de la publicité ou des offres de vente
                  ou d'achat de biens ou services ;
                </li>
                <li>
                  être répréhensible de toute autre manière, ou non adapté à un
                  usage familial tel que déterminé par Hydrafacial à sa seule
                  discrétion.
                </li>
              </ul>
              <p>
                Nous ne revendiquons pas la propriété du contenu généré par
                l'utilisateur. Toutefois, lorsque vous soumettez ou publiez du
                contenu généré par l’utilisateur, vous nous accordez
                irrévocablement, ainsi qu'à nos ayants droit, agents et
                détenteurs de licence, ainsi qu’aux autres utilisateurs, une
                licence mondiale, non exclusive, irrévocable, libre de
                redevances et entièrement payée en vertu de tous les droits
                d'auteur, marques, brevets, secrets commerciaux, droits à la vie
                privée et à la publicité et autres droits de propriété
                intellectuelle que vous possédez ou contrôlez, nous permettant :
                (i) d'utiliser, de reproduire, de transmettre, de modifier,
                d'indexer, d'adapter, de publier, de traduire, de créer des
                œuvres dérivées, de distribuer, d'afficher et d'exploiter de
                toute autre manière ce contenu dans le monde entier sur tout
                support, qu'il soit actuellement connu ou inventé
                ultérieurement, y compris à toutes fins, notamment commerciales,
                le tout sans autre avis, avec ou sans crédit d’auteur, sans
                paiement et sans qu'aucune autorisation ne soit requise de votre
                part ou de la part d’une autre personne physique ou morale ;
                (ii) d'utiliser votre nom, votre persona ou votre image
                isolément ou en rapport avec ces utilisations, sans autre
                obligation ou rémunération en votre faveur. Sans limitation, les
                droits accordés comprennent le droit : (a) de configurer,
                héberger, indexer, mettre en cache, archiver, stocker,
                numériser, compresser, optimiser, modifier, reformater,
                modifier, adapter, publier dans un format consultable et
                supprimer ledit contenu généré par l’utilisateur et de le
                combiner avec d'autres contenus, et (b) d’utiliser les idées,
                concepts, savoir-faire ou techniques figurant dans tout contenu
                généré par l’utilisateur à quelque fin que ce soit, y compris le
                développement, la fabrication et la commercialisation de
                produits et/ou de services. Sauf si la loi l'interdit, vous
                renoncez par la présente, et vous acceptez de renoncer, à tout
                droit moral (y compris le crédit et l'intégrité) que vous
                pourriez avoir sur tout contenu généré par l’utilisateur, même
                s'il est altéré ou modifié d'une manière qui ne vous convient
                pas. Dans la mesure où vous ne pouvez pas y renoncer, vous
                acceptez irrévocablement de ne pas exercer ces droits (le cas
                échéant) d'une manière qui interfère avec l'exercice des droits
                accordés. Vous comprenez que vous ne recevrez aucune redevance,
                somme, contrepartie ou rémunération pour l'un quelconque des
                droits accordés dans le présent article. Vous acceptez de payer
                toutes les royalties, droits ou autres sommes dues à une
                personne physique ou morale quelconque au titre du contenu
                généré par l’utilisateur que vous publiez sur le site internet
                d’Hydrafacial.
              </p>
              <p>
                Si (et dans la mesure où) nous décidons d'accepter des contenus
                générés par l'utilisateur et sous réserve des fonctionnalités
                disponibles du compte, nous pouvons, à notre entière discrétion,
                refuser, modifier ou retirer une soumission d'utilisateur sans
                préavis, quelle qu’en soit la raison, y compris notre conviction
                que cette soumission pourrait violer les présentes conditions
                d'utilisation ou être répréhensible d’une quelconque manière. Si
                (et dans la mesure où) nous décidons d'accepter des contenus
                générés par l’utilisateur, nous avons le droit, mais non
                l'obligation, de surveiller, réviser, filtrer, afficher,
                supprimer, rejeter, modifier et stocker tout contenu généré par
                l’utilisateur qui est publié sur notre site internet, à tout
                moment et sans préavis, quelle qu’en soit la raison, en vue
                notamment de garantir le respect des présentes conditions
                d'utilisation. Nous ne cautionnons aucun contenu généré par des
                utilisateurs et ces contenus ne reflètent pas nos opinions, nos
                points de vue ou nos conseils. Vous êtes seul responsable du
                contenu que vous générez et des conséquences de son affichage et
                de sa publication, et vous acceptez le fait que nous
                intervenions uniquement en tant qu'intermédiaire passif pour la
                distribution et la publication en ligne du contenu que vous
                générez. Nous déclinons toute responsabilité liée aux contenus
                générés par des utilisateurs qui sont publiés par vous ou par
                d’autres utilisateurs sur le site internet d’Hydrafacial ou
                envoyés par le biais de celui-ci, ou découlant de notre
                intervention ou absence d’intervention concernant les
                transmissions, les communications ou le contenu fourni par un
                utilisateur ou un tiers.
              </p>
              <div className={styles["contentTitle"]}>Indemnisation</div>
              <p>
                L'utilisateur accepte de défendre, d'indemniser et de dégager de
                toute responsabilité Hydrafacial, sa société mère, ses filiales
                et autres sociétés affiliées, ses sous-traitants, ses
                prestataires de services et ses consultants, ainsi que leurs
                employés, sous-traitants, agents, dirigeants, membres et
                administrateurs respectifs (les « bénéficiaires ») pour les
                réclamations, plaintes, dommages-intérêts, frais, procédures
                judiciaire, amendes, pénalités, responsabilités et dépenses (y
                compris les frais d'avocats) (les « réclamations ») qui
                pourraient découler de l'utilisation normale ou abusive du
                compte par l'utilisateur, d’une violation des présentes
                conditions, de la législation applicable ou de droits de tiers,
                ou s’y rapporter. Hydrafacial se réserve le droit d'assumer la
                défense et le contrôle exclusifs de toute question faisant
                l’objet par ailleurs d’une indemnisation par l'utilisateur,
                auquel cas l'utilisateur devra coopérer en faisant valoir tout
                recours à sa disposition. En cas de réclamation d'un tiers selon
                laquelle le compte, ou la possession et l'utilisation du compte
                par l'utilisateur, enfreint les droits de propriété
                intellectuelle de ce tiers, Hydrafacial sera seule responsable
                de l'investigation, de la défense, du règlement ou du rejet de
                toute réclamation pour violation de propriété intellectuelle.
              </p>
              <div className={styles["contentTitle"]}>
                Garanties ; clauses de non-responsabilité
              </div>
              <p>
                HYDRAFACIAL FOURNIT LE COMPTE À L'UTILISATEUR « EN L’ÉTAT » ET
                L'UTILISATEUR UTILISE LE COMPTE À SES PROPRES RISQUES. DANS
                TOUTE LA MESURE PERMISE PAR LA LÉGISLATION APPLICABLE,
                HYDRAFACIAL DÉCLINE TOUTE GARANTIE, EXPRESSE OU IMPLICITE, Y
                COMPRIS TOUTE GARANTIE QUE LE COMPTE EST COMMERCIALISABLE,
                FIABLE, DISPONIBLE, EXACT, ADAPTÉ À UN USAGE OU UN BESOIN
                PARTICULIER, SANS INFRACTION, EXEMPT DE DÉFAUTS OU DE VIRUS,
                CAPABLE DE FONCTIONNER DE FAÇON ININTERROMPUE, QUE L'UTILISATION
                DU COMPTE PAR L'UTILISATEUR EST CONFORME À LA LÉGISLATION QUI
                S’APPLIQUE À L'UTILISATEUR, QUE LES INFORMATIONS DE
                L'UTILISATEUR OU LES COMMANDES PASSÉES EN LIEN AVEC LE COMPTE
                SERONT TRANSMISES OU REÇUES CORRECTEMENT, PRÉCISÉMENT ET EN
                TOUTE SÉCURITÉ, QUE LES COMMANDES SERONT PASSÉES OU PRÊTES AU
                MOMENT INDIQUÉ, OU QU'UN ARTICLE PARTICULIER COMMANDÉ SERA
                DISPONIBLE. LES CONTENUS ET LES RENSEIGNEMENTS FIGURANT SUR LE
                COMPTE PEUVENT COMPORTER DES INEXACTITUDES TECHNIQUES OU DES
                ERREURS TYPOGRAPHIQUES. NONOBSTANT CE QUI PRÉCÈDE, AUCUNE DES
                CLAUSES DE NON-RESPONSABILITÉ DU PRÉSENT PARAGRAPHE NE
                S'APPLIQUE AUX GARANTIES RELATIVES AUX DOMMAGES CORPORELS.
              </p>
              <div className={styles["contentTitle"]}>
                Absence de responsabilité{" "}
              </div>
              <p>
                SOUS RÉSERVE DE LA LÉGISLATION APPLICABLE, EN MATIÈRE NOTAMMENT
                DE RESPONSABILITÉ POUR DOMMAGE CORPORELS OU DE DROITS LÉGAUX
                AUXQUELS IL N’EST PAS POSSIBLE DE RENONCEREN VERTU DU DROIT DE
                L’ÉTAT DU NEW JERSEY, HYDRAFACIAL OU SES DIRIGEANTS,
                ADMINISTRATEURS, ASSOCIÉS, EMPLOYÉS, ACTIONNAIRES OU AGENTS NE
                SAURAIENT EN AUCUN CAS (A) ÊTRE TENUS RESPONSABLES ENVERS
                L'UTILISATEUR DE TOUT CE QUI CONCERNE SON UTILISATION DU COMPTE,
                Y COMPRIS, ENTRE AUTRES, LA PARTICIPATION À L’OUTIL D'ÉVALUATION
                DES SELFIES, LE CONTENU OU LES ÉLÉMENTS CONTENUS OU CONSULTABLES
                SUR LE COMPTE, OU TOUT PRÉJUDICE RÉSULTANT D'ERREURS,
                D'OMISSIONS, D'INTERRUPTIONS, DE LA SUPPRESSION DE FICHIERS, DE
                DÉFAUTS, DE VIRUS, DE DÉLAIS DE FONCTIONNEMENT OU DE
                TRANSMISSION OU DE DÉFAILLANCES QUELCONQUES, RÉSULTANT OU NON
                D'UN CAS DE FORCE MAJEURE, D'UNE PANNE DE COMMUNICATION, D'UN
                VOL, D'UNE DESTRUCTION DES DOSSIERS, PROGRAMMES OU SERVICES
                D'HYDRAFACIAL OU D’UN ACCÈS NON AUTORISÉS À CEUX ; NI (B) ÊTRE
                REDEVABLES ENVERS L'UTILISATEUR DE DOMMAGES-INTÉRÊTS INDIRECTS,
                SPÉCIAUX, ACCESSOIRES, CONSÉCUTIFS, PUNITIFS OU EXEMPLAIRES, Y
                COMPRIS, ENTRE AUTRES, LES DOMMAGES-INTÉRÊTS POUR PERTE DE
                CLIENTÈLE, MANQUE À GAGNER, PERTE, VOL OU CORRUPTION
                D'INFORMATIONS DE L'UTILISATEUR, IMPOSSIBILITÉ D'UTILISER LE
                COMPTE OU L'UNE DE SES FONCTIONNALITÉS, DÉFAILLANCE OU MAUVAIS
                FONCTIONNEMENT DE L'APPAREIL. LE SEUL RECOURS DE L'UTILISATEUR
                CONSISTE À CESSER D'UTILISER LE COMPTE. SI VOUS RÉSIDEZ DANS UN
                TERRITOIRE AUTRE QUE L’ÉTAT DU NEW JERSEY AUX ÉTATS-UNIS, IL EST
                POSSIBLE QUE CES LIMITATIONS DE RESPONSABILITÉ NE SOIENT PAS
                AUTORISÉES DANS LES CONTRATS AVEC LES CONSOMMATEURS ET QU’ELLES
                PUISSENT PAR CONSÉQUENT NE PAS S’APPLIQUER À VOUS, EN PARTIE OU
                EN TOTALITÉ.
              </p>
              <p>
                Contenu de tiers, comptes, produits et services (y compris la
                publicité et les promotions) Hydrafacial peut fournir des
                contenus de tiers dans le compte (y compris du contenu intégré)
                ou des liens vers des contenus, des comptes, des produits et des
                services de tiers, y compris des publicités et des promotions
                (collectivement dénommés le « contenu de tiers ») à titre de
                service pour ceux qui sont intéressés par ces informations. Nous
                ne contrôlons pas, ne cautionnons pas et n’adoptons pas ce
                contenu de tiers et l’inclusion d’un lien extérieur n’implique
                aucune affiliation, approbation ou adoption par Hydrafacial des
                comptes ou informations présentées, dont nous ne garantissons en
                aucun cas l’exactitude ou l’exhaustivité. Vous reconnaissez et
                acceptez qu'Hydrafacial n’assume aucune responsabilité liée aux
                contenus de tiers et ne s’engage en aucun cas à le tenir à jour
                ou à le réviser. Vous acceptez d'utiliser le contenu de tiers à
                vos risques et périls. Lorsque vous utilisez d'autres comptes
                par le biais de contenus de tiers, ou que vous participez à des
                promotions ou à des transactions commerciales avec des tiers,
                vous devez comprendre que nos conditions et politiques ne
                s'appliquent plus et que ce sont les conditions et politiques de
                ces comptes de tiers qui s'appliquent dans ce cas. Vous devez
                consulter les conditions et politiques applicables, y compris
                les pratiques en matière de confidentialité et de collecte de
                données, de tout compte vers lequel vous naviguez à partir de
                notre compte. Vous devez vous conformer à toutes les conditions
                applicables de ces tiers lorsque vous utilisez le compte.
              </p>
              <div className={styles["contentTitle"]}>
                Modifications du compte
              </div>
              <p>
                Hydrafacial se réserve le droit de modifier ou de suspendre sans
                préavis le compte ou toute fonctionnalité ou partie de celui-ci,
                à titre temporaire ou définitif. Hydrafacial décline toute
                responsabilité liée à la modification, la suspension ou
                l’interruption du compte ou d'une partie de celui-ci.
              </p>
              <div className={styles["contentTitle"]}>
                Avis de non-responsabilité concernant l'inexactitude
              </div>
              <p>
                Le site peut parfois contenir des informations contenant des
                erreurs typographiques, des inexactitudes ou des omissions. Nous
                nous réservons le droit de corriger toute erreur, inexactitude
                ou omission et de modifier ou mettre à jour les informations à
                tout moment et sans préavis.
              </p>
              <div className={styles["contentTitle"]}>
                POUR LES RÉSIDENTS D'AMÉRIQUE DU NORD UNIQUEMENT
                <br />
                Arbitrage
              </div>
              <p>
                Veuillez lire attentivement la présente section. Elle affecte
                des droits que vous pourriez avoir par ailleurs. Elle prévoit le
                règlement de la plupart des litiges par voie d'arbitrage au lieu
                de procédures judiciaires ou de recours collectifs. L'arbitrage
                est plus informel qu'une action en justice, fait appel à un
                arbitre neutre plutôt qu'à un juge ou à un jury, et la
                communication des pièces est plus limitée. L'arbitrage est
                définitif et contraignant et n'est soumis qu'à un contrôle très
                limité de la part d'un tribunal. La présente clause d'arbitrage
                survivra à la résiliation des présentes conditions.
              </p>
              <p>
                Arbitrage exécutoire. Cette disposition doit être interprétée au
                sens large afin d'englober tous les litiges ou réclamations
                découlant des présentes conditions, de votre utilisation du
                compte ou de votre relation avec nous, ou se rapportant à
                celles-ci. Les litiges ou réclamations découlant des présentes
                conditions, de l'utilisation du compte ou de votre relation avec
                Hydrafacial ou sa société mère, ses filiales ou ses sociétés
                affiliées (qu’ils reposent sur un contrat, un délit, une loi,
                une fraude, une fausse déclaration ou toute autre théorie
                juridique) seront résolus par arbitrage exécutoire, sauf si l'un
                ou l'autre d'entre nous remplit les conditions requises pour
                être entendu par un tribunal des petites créances et saisit un
                tel tribunal.
              </p>
              <div className={styles["contentTitle"]}>
                Procédures d'arbitrage.
              </div>
              <p>
                Procédure de résolution informelle des litiges : pour tout
                litige, qu'il donne lieu à une action en justice ou une
                procédure d’arbitrage, vous devez d'abord envoyer une lettre
                (par courrier première classe ou recommandé) avec une
                description écrite de votre réclamation à notre service
                juridique à l'attention de : Legal Dept. 2165 E. Spring St, Long
                Beach, CA 90806 (USA) pour nous donner la possibilité de
                résoudre le litige. Vous et Hydrafacial convenez de négocier
                votre réclamation de bonne foi. Vous et Hydrafacial acceptez que
                la procédure de résolution des litiges constitue une condition
                préalable qui doit être satisfaite avant d'entamer une procédure
                d’arbitrage ou une action en justice à l’encontre de l'autre
                partie. Vous pouvez demander un arbitrage si votre réclamation
                ou votre litige ne peut être résolu dans un délai de 60 jours.
              </p>
              <p>
                Si le litige ne peut être résolu au moyen de la procédure de
                résolution informelle des litiges décrite ci-dessus, il devra
                l’être par un arbitrage individuel exécutoire. Vous acceptez que
                l'arbitrage de tout litige ou de toute réclamation se déroule
                conformément aux règles de l'American Arbitration Association («
                AAA »), y compris les Consumer Arbitration Rules de l'AAA (le
                cas échéant), telles que modifiées par les présentes conditions.
                Les règles de l'AAA et les informations concernant l'arbitrage
                et les frais sont disponibles en ligne à{" "}
                <a href="https://www.adr.org" target="_blank" rel="noreferrer">
                  www.adr.org
                </a>{" "}
                ou en appelant l'AAA au (800) 778-7879. Vous et Hydrafacial
                convenez que les présentes conditions constituent une
                transaction de commerce interétatique et que la présente clause
                d'arbitrage sera interprétée et appliquée conformément au
                Federal Arbitration Act des États-Unis et au droit fédéral
                l'arbitrage, et ne sera pas régie par le droit d’un État
                américain. Dans la mesure du possible, l’arbitrage se déroulera
                dans un lieu facile d’accès de l'État dans lequel vous résidez
                ou dans un autre lieu convenu d'un commun accord. L'arbitrage se
                déroulera en anglais. Un arbitre peut accorder, sur une base
                individuelle, toute réparation qui serait disponible devant un
                tribunal, y compris une mesure injonctive ou déclaratoire dans
                la mesure nécessaire pour satisfaire votre réclamation
                individuelle, et doit suivre et faire appliquer les présentes
                conditions comme le ferait un tribunal. Tout arbitrage est
                confidentiel et ni vous ni nous ne sommes autorisés à divulguer
                l'existence, le contenu ou les résultats d'un arbitrage, sauf si
                la loi l'exige ou à des fins d'exécution de la sentence
                arbitrale. Un jugement sur une sentence arbitrale peut être
                rendu par tout tribunal compétent.
              </p>
              <p>
                Frais d'arbitrage. Le paiement de tous les frais de dépôt,
                d'administration et d'arbitrage sera régi par les règles de
                l'AAA. Chaque partie assumera les honoraires et les frais de ses
                propres avocats, experts et témoins, ainsi que la préparation et
                la présentation des preuves dans le cadre de l'arbitrage.
                Toutefois, pour les réclamations inférieures à 10 000 dollars
                ayant donné lieu à préavis et négociation de bonne foi comme
                exigé plus haut avant le début l'arbitrage, si l'arbitre estime
                que vous êtes la partie gagnante dans l'arbitrage, vous aurez
                droit à un recouvrement des frais et honoraires raisonnables
                d'avocat. À l'exception des réclamations jugées frivoles, de
                mauvaise foi ou à des fins inappropriées, nous acceptons de ne
                pas demander l’attribution des honoraires d'avocats liés à
                l'arbitrage, même si la législation applicable permet par
                ailleurs d'obtenir cette attribution. Renonciation aux recours
                collectifs et aux procès avec jury. Vous et Hydrafacial convenez
                que toute procédure (judiciaire ou d'arbitrage) sera engagée
                uniquement à titre individuel et non dans le cadre d'une
                procédure collective, consolidée ou représentative. Si un
                tribunal ou un arbitre décidait, dans le cadre d'une action
                entre vous et nous, que cette renonciation à l'action collective
                était inapplicable, la convention d'arbitrage serait nulle en ce
                qui vous concerne. Si, pour quelque raison que ce soit, une
                réclamation est portée devant un tribunal plutôt que devant
                l’arbitrage, vous et Hydrafacial renoncez à tout droit à un
                procès avec jury.
              </p>
              <p>
                Si vous êtes un ressortissant d'un pays de l'Union européenne,
                du Royaume-Uni, de la Suisse, de la Norvège ou de l'Islande, la
                législation applicable et les tribunaux compétents seront ceux
                de votre lieu de résidence habituel.
              </p>
              <div className={styles["contentTitle"]}>
                POUR LES CITOYENS NORD-AMÉRICAINS UNIQUEMENT
                <br />
                Droit applicable et tribunaux compétents
              </div>
              <p>
                Les présentes conditions d'utilisation, l'utilisation du compte
                et tout litige pouvant survenir entre vous et Hydrafacial seront
                régis et interprétés conformément au Federal Arbitration Act des
                États-Unis, au droit fédéral applicable et aux lois de l'État de
                la Californie, sans donner effet à des choix ou des conflits de
                dispositions ou de règles de droit (de l'État de Californie ou
                de toute autre territoire). La Convention des Nations unies sur
                les contrats de vente internationale de marchandises ne
                s’applique pas. Si la convention d'arbitrage est jugée
                inapplicable ou nulle ou si un litige entre les parties n'est
                pas soumis à l'arbitrage, l'utilisateur accepte irrévocablement
                la compétence exclusive des tribunaux fédéraux et d'État situés
                dans le comté de Los Angeles, en Californie (USA) aux fins de
                toute action en justice découlant de l'utilisation du compte ou
                des présentes conditions ou s'y rapportant.
              </p>
              <div className={styles["contentTitle"]}>
                POUR TOUS LES RÉSIDENTS EN DEHORS DE L'AMÉRIQUE DU NORD
              </div>
              <p>
                Si vous résidez en dehors de l'Amérique du Nord, le droit
                applicable et les tribunaux compétents sont ceux de votre lieu
                de résidence habituel.
              </p>

              <div className={styles["contentTitle"]}>Résiliation </div>
              <p>
                Nonobstant les présentes conditions, Hydrafacial se réserve le
                droit, sans préavis et à sa seule et entière discrétion, de
                résilier votre licence d'utilisation du compte et de bloquer ou
                d'empêcher tout accès ou utilisation de votre compte. Le fait de
                ne pas prendre de telles mesures, ou de tarder à le faire, ne
                constitue en aucun cas une renonciation d’Hydrafacial à son
                droit de faire appliquer les présentes conditions.
              </p>

              <div className={styles["contentTitle"]}>Modifications</div>
              <p>
                Hydrafacial se réserve le droit de modifier ou de réviser à tout
                moment et à sa seule et entière discrétion les présentes
                conditions ou n’importe quelle autre politique se rapportant à
                l'utilisation du compte en les modifiant dans le compte ou en
                publiant les révisions sur son site internet. La poursuite de
                l'utilisation du compte après toute modification ou révision des
                présentes conditions ou d’autres politiques d’Hydrafacial vaut
                acceptation de celles-ci. Si vous n'acceptez pas ces
                modifications ou révisions, vous devez immédiatement
                désinstaller le compte.
              </p>

              <div className={styles["contentTitle"]}>Divisibilité </div>
              <p>
                Si une disposition des présentes conditions est jugée illégale,
                nulle ou inapplicable pour quelque raison que ce soit, cette
                disposition sera considérée comme dissociable des présentes
                conditions et n'affectera pas la validité et l'applicabilité des
                autres dispositions.
              </p>

              <div className={styles["contentTitle"]}>
                Avis destiné aux résidents de Californie
              </div>
              <p>
                En vertu de l’article 1789.3 du code civil de Californie, les
                résidents de Californie ont droit aux informations suivantes sur
                les droits des consommateurs : le fournisseur du compte est
                Hydrafacial LLC, 2165 E. Spring St, Long Beach, CA 90806 (USA).
                Pour déposer une réclamation concernant le compte ou pour
                recevoir de plus amples informations concernant l'utilisation du
                compte, veuillez envoyer un courrier à l'adresse ci-dessus ou
                contactez Hydrafacial par e-mail (en indiquant « California
                Resident Request » dans la ligne d'objet). Vous pouvez également
                contacter l'Unité d'assistance aux réclamations de la Division
                des services aux consommateurs du Department of Consumer Affairs
                par écrit au 1625 North Market Blvd, Suite N 112, Sacramento CA
                95834 (USA) ou par téléphone au +1 800 952 5210.
              </p>
              <div className={styles["contentTitle"]}>Contact </div>
              <div className={styles["contact"]}>
                <p>
                  Toute question, plainte ou réclamation concernant le compte
                  doit être adressée à :
                </p>
                <p>The Hydrafacial Company </p>
                <p>Consumer Care</p>
                <p>
                  Email:
                  <a
                    href="mailto:help@Hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    help@Hydrafacial.com
                  </a>
                </p>
                <p>2165 E. Spring St, Long Beach, CA 90806</p>
                <p>Phone: 1-888-791-4888</p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Nous contacter</h3>
              <p>
                Pour nos clients : veuillez contacter l’entité Hydrafacial qui
                figure sur votre formulaire de commande.
              </p>
              <p>
                Si vous souhaitez consulter, examiner, mettre à jour, corriger
                ou supprimer des données personnelles que nous détenons à votre
                sujet ou exercer d’autres droits dont vous disposez au titre du
                respect de la vie privée, veuillez remplir ce formulaire de
                demande.
              </p>
              <p>Coordonnées de contact du responsable du traitement :</p>
              <div className={styles["tableWrapper"]}>
                <table className={styles["contactDetailsTable"]}>
                  <thead>
                    <tr>
                      <th>États-Unis</th>
                      <th>Royaume-Uni</th>
                      <th>Allemagne</th>
                      <th>France </th>
                      <th>Espagne</th>
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
                Délégué à la protection des données : Ignacio de la Corte
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
                En cas de question ou de demande de renseignements concernant la
                présente déclaration, vos données personnelles, vos droits ou
                l’exercice de ceux-ci, n’hésitez pas à nous contacter.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPageFr;
