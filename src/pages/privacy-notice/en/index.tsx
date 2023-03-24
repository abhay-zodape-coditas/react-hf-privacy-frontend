import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../../components/footer";
import LanguageSelector from "../../../components/languageSelector";
import PageHeader from "../../../components/pageHeader";
import styles from "../privacyPolicy.module.scss";

const PrivacyPolicyPageEn = () => {
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
              <strong className={styles["fontWeightExtraBold"]}>PRIVACY</strong>{" "}
              NOTICE
            </h2>

            <em className={styles["updatedOn"]}>
              This Privacy Notice was last updated on 24/02/2023.
            </em>

            <p>
              This Privacy Notice will help you understand how we collect, use
              and protect your Personal Information, and it is applicable to all
              Hydrafacial products and services.
            </p>
            <p>
              From time to time we may need to change this Privacy Notice. Where
              we believe you may not reasonably expect such a change, we will
              alert you about material changes by, for example, placing a notice
              on our websites and/or sending you an e-mail (if you have
              registered your e-mail with us) when we are required to do so by
              applicable law. You can see when this Privacy Notice was last
              updated by checking the date at this space. You are responsible
              for periodically reviewing this Privacy Notice.
            </p>
            <div className={styles["summary"]}>
              <h3 className={styles["summaryTitle"]}>
                OUR PRIVACY NOTICE AT A GLANCE
              </h3>
              <ol>
                <li>
                  <strong>Our promise.</strong> Hydrafacial is committed to the
                  protection of your Personal Information. We will always treat
                  your Personal Information with respect and design our products
                  and services with your privacy in mind.
                </li>
                <li>
                  <strong>Data we collect.</strong> In order to provide you with
                  our services, we will need to process your Personal
                  Information, such as contact details, account information,
                  treatment history, payment details, machine identifiers or
                  info about how you interacted with us.
                </li>
                <li>
                  <strong>How we collect your data.</strong> We will collect
                  your data from you, from your use of our products and
                  services, and from external sources.
                </li>
                <li>
                  <strong>How we use your data.</strong> Your data could be used
                  for a variety of reasons under legal standings. The processing
                  of your data could be based on your
                  <strong> consent </strong>
                  (e.g. account creation),
                  <strong>the performance of a contract</strong> (e.g. customer
                  service), a legal obligation (e.g. exercise your rights or
                  fulfill a claim) or our
                  <strong> legitimate interest </strong>(e.g. some marketing
                  activities and/or fraud prevention).
                </li>
                <li>
                  <strong>Sharing data.</strong> We mainly share your data with
                  service providers who provide us with assistance and support,
                  these being companies in the Hydrafacial Group or third party
                  providers.
                </li>
                <li>
                  <strong>Protecting your data.</strong> We strives to implement
                  approapriate technical and organisational measures in order to
                  protect your Personal Information against accidental or
                  unlawful destruction, accidental loss or alteration,
                  unauthorised disclosure or access and any other unlawful forms
                  of processing.
                </li>
                <li>
                  <strong>How long do we keep your data.</strong> We will not
                  process your Personal Information for longer than is necessary
                  nor will we process it for purposes beyond what it was
                  collected for.
                </li>
                <li>
                  <strong>Children’s privacy.</strong> We do not knowingly
                  collect any personal information from children under 13.
                </li>
                <li>
                  <strong>Links to other websites.</strong> We have no
                  responsibility for the linked websites.
                </li>
                <li>
                  <strong>Your rights.</strong> You may have certain rights
                  relating to your Personal Information depending on your
                  location and subject to local applicable laws (e.g. the right
                  to be informed; the right of access; the right to
                  rectification; the right to erasure; the right to object).
                  Additional information for consumers in the United States
                  below.
                </li>
              </ol>
              <p>
                We encourage you to read our full Privacy Notice and the&nbsp;
                <a
                  href={`/files/en/cookie_policy.docx`}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Cookie Policy
                </a>
                &nbsp; linked below to understand in depth the way we will use
                your Personal Information and your rights over your data.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Our promise</h3>
              <p>
                Here in Hydrafacial, we are committed to protecting your
                Personal Information, and we will always treat it with respect
                and design our products and services with your privacy in mind.
              </p>
              <p>
                Hydrafacial is a flagship brand of The Beauty Health Company
                (hereinafter “Hydrafacial”, “our”, “us” or “we”). Hydrafacial is
                a global category-creating company focused on delivering beauty
                health experiences by reinventing our consumer’s relationship
                with their skin, their bodies and their self-confidence.
              </p>
              <p>
                The flagship brand, HydraFacial, created the category of
                hydradermabrasion by using a Vortex-Fusion Delivery System to
                cleanse, peel, exfoliate, extract, infuse, and hydrate the skin
                with proprietary solutions and serums.
              </p>
              <p>
                This Privacy Notice covers the Personal Information that
                Hydrafacial, its subsidiaries and affiliates located worldwide
                within The Beauty Health Company family of companies
                (“Affiliates”) collect and process through the different means.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Definitions</h3>
              <p>
                “Personal Information or personal data” means information that
                (either in isolation or in combination with other information)
                enables you to be directly or indirectly identified.
              </p>
              <p>
                “Controller” is a party that sets out the purposes and means of
                processing of personal data.
              </p>
              <p>
                “Processor or a Service Provider/Contractor/Third Party” is a
                party that processes Personal Information on the Controller’s
                behalf.
              </p>
              <p>
                “Client or Consumer” individual that receives a Hydrafacial
                treatment.
              </p>
              <p>
                “Treatment provider” professional that performs a Hydrafacial
                treatment.
              </p>
              <p>
                “Provider or Customer” clinic or center that provides
                Hydrafacial treatments.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Data we collect</h3>
              <p>
                In order to provide you with our products and/or services, we
                will need to process your personal data. The personal
                information we collect about you may include:
              </p>
              <ul>
                <li>
                  Your contact details, such as your full name, physical and
                  email addresses, phone number(s), clinic/center name & details
                  – including, if you are an esthetician, the name of your
                  business or employer, address and phone number in order to do
                  business with you.
                </li>
                <li>
                  Your account information, such as your email address, full
                  name, username & password, phone number, date of birth, ZIP
                  code & personal image when you provide it to us for setting-up
                  an account.
                </li>
                <li>
                  Your CV information and data provided during the recruitment
                  process.
                </li>
                <li>
                  Your treatment history*, such as type of treatment received,
                  any add-ons adjustments, and the products used (as applicable)
                  when you have a Hydrafacial account.
                </li>
                <li>
                  Your payment information and/or banking details in order to
                  complete your purchase orders.
                </li>
                <li>
                  Machine identifiers include: your IP address, operating
                  system, device, and location when you use our online services.
                </li>
                <li>
                  Information about how you interacted with us, our websites and
                  our services.
                </li>
              </ul>
              <p>
                *Consumers have the option to share their treatment history with
                the treatment providers. Likewise, when treatment providers use
                a HydraFacial device, they have the option to sync their
                application account with the device in order to have a record of
                the providers’ treatment history. Treatment providers will see
                aggregated treatment data on treatments they have given. No
                Personal Information is tied to the treatments that the
                treatment provider sees.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                How we collect your data
              </h3>
              <p>
                We will collect data from you, from your use of our services and
                from external sources (e.g., publicly accessible sources).
              </p>
              <p>We will collect your personal data when:</p>
              <ul>
                <li>
                  You register for information about our products or other
                  services.
                </li>
                <li>
                  You interact with us or make enquiries including through
                  social media.
                </li>
                <li>You make a purchase.</li>
                <li>You use our product or services.</li>
                <li>You create or update your account.</li>
                <li>You use the Hydrafacial app features.</li>
                <li>
                  You are a job applicant or you are in the recruitment process.
                </li>
                <li>You respond to communications or surveys.</li>
                <li>You navigate through our website or online services.</li>
              </ul>
              <p>
                We collect data about you using technology such as cookies and
                device fingerprinting, in other words, techniques used to
                combine information that help us identify your device.
              </p>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p>
                You have the ability to accept or decline cookies from any
                website by modifying the settings in your browser. If you wish
                to restrict or block the cookies which are set by our website,
                you can do this through your browser settings. For information
                about how to manage and disable cookies you can use the 'Help'
                function within your browser or please visit
                <a
                  href="https://www.aboutcookies.org/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  https://www.aboutcookies.org/
                </a>{" "}
                or{" "}
                <a
                  href="https://www.allaboutcookies.org/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  https://www.allaboutcookies.org/
                </a>
                . However, please note that by deleting or disabling cookies
                this could affect the functionality of our website and you may
                not be able to access certain areas or features of our site.
              </p>
              <p>
                If you would like information about how we use cookies and
                similar devices that may be installed on the terminals of our
                customers and users, we recommend you consult our&nbsp;
                <a
                  href={`/files/en/cookie_policy.docx`}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Cookie Policy
                </a>
                .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>How we use your data</h3>
              <p>
                Your data could be used for a variety of reasons under various
                legal basis, such as:
              </p>
              <ul>
                <li>
                  Contact you to provide you with the information requested -
                  based on your consent.
                </li>
                <li>
                  Process your payment for orders and for other business and
                  accounting purposes – based on a legal obligation and/or the
                  performance of a contract.
                </li>
                <li>
                  Provide customer service – based on a legal obligation and/or
                  the performance of a contract.
                </li>
                <li>
                  Process your request to conduct business with us – based on
                  consent.
                </li>
                <li>
                  Account creation, update, support and management – based on
                  consent and the performance of a contract.
                </li>
                <li>
                  Keeping you informed about promotions and new developments by
                  email, telephone, SMS, social media or post, and inviting you
                  through email/SMS to create an account when you use our
                  product or services (dependent on your preferences) – based on
                  consent or legitimate interest where applicable.
                </li>
                <li>
                  Provide you and other customers with relevant information
                  through our marketing program – based on legitimate interest.
                </li>
                <li>
                  Review your professional profile and background when you apply
                  for a job and during the recruitment process to select the
                  right candidate.
                </li>
                <li>
                  Undertaking market research, product development and
                  statistical purposes -based on legitimate interest.
                </li>
                <li>
                  Fraud detection and prevention, unauthorized access to the
                  product and/or services, and other illegal activities – based
                  on legitimate interest.
                </li>
                <li>
                  Administering debt recoveries – based on legitimate interest.
                </li>
                <li>
                  For assessment and analysis to enable us to review, develop
                  and improve the services we offer – based on legitimate
                  interest.
                </li>
              </ul>
              <p>
                As said, sometimes we need to use your personal data for
                legitimate business purposes to ensure that we continue to
                provide a great customer experience. In every instance, we will
                always balance our interests against yours.
              </p>
              <p>
                The processes below are considered examples of our legitimate
                interests:
              </p>
              <ul>
                <li>
                  Fraud detection and prevention across Hydrafacial, which may
                  include conducting checks against publicly available
                  information and social media profiles.
                </li>
                <li>
                  Engaging and contacting you to ensure you have a good
                  experience as a Hydrafacial customer.
                </li>
                <li>
                  Internally auditing our processes to maintain our high
                  standards.
                </li>
                <li>Some of our marketing activities.</li>
                <li>
                  Sharing data with selected third parties in order to add value
                  to our products.
                </li>
              </ul>
              <p>
                Hydrafacial may contact you from time to time to ask you to take
                part in a survey, in order to enable us to review, develop and
                improve our services.
              </p>
              <p>
                Your survey responses, including any personal data provided,
                will only be used by Hydrafacial for the purposes stated within
                this Privacy Notice statement. Personal data can include (but is
                not restricted to) your name, age and e-mail address. We may
                also collect special category personal data, depending on the
                survey to which you are responding.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Sharing data </h3>
              <p>We do not sell your personal information to third parties.</p>
              <p>
                We may employ other companies, including Processors (service
                providers), to perform functions on our behalf. We may share
                your Personal Information with these Processors who assist us
                with our business functions, such as payment processing,
                packaging, and shipping; law firms, consultants, auditors in
                case needed; CRM services, e-mail services, product feedback or
                help desk software; website analytics. If Hydrafacial receives
                your Personal Information and subsequently transfers that
                information to a Processor for processing, Hydrafacial remains
                responsible for ensuring that such Processor processes your
                Personal Information to the standard required by the applicable
                privacy laws, including the European General Data Protection
                Regulation (“GDPR”). These transfers will typically be based on
                our legitimate interests or agreed upon in the Agreement.
              </p>
              <p>
                It may be necessary to transfer your personal data to other
                Group companies or service providers located in the United
                States. In these instances we will take steps to ensure that
                your data is given an adequate level of protection according to
                the applicable regulations and for purposes consistent with this
                Privacy Notice and based on our legitimate interest or
                contractual necessity.
              </p>
              <p>
                There are also some circumstances where we will share your data
                with external companies. At all time, privacy remains paramount
                and we will endeavour to minimize the data shared at every
                opportunity.
              </p>
              <p>These circumstances include:</p>
              <ul>
                <li>
                  Sharing with carefully selected partners in order to add value
                  to our products.
                </li>
                <li>
                  Sharing with third parties so they can provide you with
                  surveys.
                </li>
                <li>
                  Building a marketing profile to find similar customers with
                  similar needs.
                </li>
              </ul>
              <p>
                As well as what’s been mentioned above, there are further
                scenarios where we would have to share your data. These may
                include:
              </p>
              <ul>
                <li>Where we are legally compelled to do so.</li>
                <li>Where there is a duty to the public to disclose.</li>
                <li>Where disclosure is required to protect our interest.</li>
                <li>
                  Where disclosure is made at your request or with your consent.
                </li>
              </ul>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                International Transfers
              </h3>
              <p>
                Hydrafacial is a company operating globally. Therefore, personal
                data of individuals who visit our websites and/or who use or buy
                our product or services, or otherwise interact with us, may be
                transferred and accessed from around the world, such as from
                countries where Hydrafacial, its Affiliates, or our processors
                operate.
              </p>
              <p>
                We will protect your Personal Information in accordance with
                this Privacy Notice wherever it is processed. We do not
                voluntarily or actively transfer or disclose our customers’
                Personal Information to the government or law enforcement
                authorities (“Authorities”) and/or otherwise grant any
                Authorities access to your Personal Information. In the event of
                a request from the Authority, we have procedures and controls in
                place to make sure that any such request is assessed according
                to the procedure outlined in our &nbsp;
                <a
                  href={`/files/en/transparency_report.docx`}
                  style={{
                    color: "#0d6efd",
                    textDecoration: "underline",
                  }}
                  download
                  target="_blank"
                  rel="noreferrer"
                >
                  Transparency Report
                </a>
                .
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Information for individuals in the European Economic Area
                (“EEA”) or in the United Kingdom (“UK”)
              </h3>
              <p className={styles["sectionDescription"]}>
                Operating globally, Hydrafacial may transfer Personal
                Information from the EEA or the UK to the United States and
                other countries, including Personal Information we receive from
                individuals residing in the EEA or the UK who visit our websites
                and/or who may buy our product or use our services, or otherwise
                interact with us.
              </p>
              <p className={styles["sectionDescription"]}>
                When Hydrafacial engages in such transfers of Personal
                Information, it relies on:
              </p>
              <ul>
                <li className={styles["sectionDescription"]}>
                  Adequacy Decisions, as adopted by:
                  <ul>
                    <li className={styles["sectionDescription"]}>
                      European Commission (“EC”), based on Article 45 of
                      Regulation (EU) 2016/679 (GDPR) – for more information,
                      and to access the full list of countries deemed adequate
                      to date, please visit
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
                      UK Secretary of State, based on Article 45 of the UK GDPR
                      and Section 17A of the Data Protection Act 2018 - for more
                      information, and to access the full list of countries
                      deemed adequate to date, please visit
                      <a
                        href="https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/international-transfers/
                      </a>
                      ; or
                    </li>
                    <li className={styles["sectionDescription"]}>
                      The EC’s &nbsp;
                      <a
                        href={`/files/en/standard_contractual_clauses.docx`}
                        style={{
                          color: "#0d6efd",
                          textDecoration: "underline",
                        }}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        Standard Contractual Clauses
                      </a>
                      &nbsp; (“SCCs”) and the UK Information Commissioner’s
                      Office’s International Data Transfer Addendum (“IDTA”), as
                      applicable, supplemented by additional security measures
                      as recommended by the European Data Protection Board.
                    </li>
                  </ul>
                </li>
              </ul>
              {/*eslint-disable-next-line react/no-unescaped-entities*/}
              <p className={styles["sectionDescription"]}>
                The EC’s and the UK’s Information Commissioner’s Office ("ICO”)
                have determined that the SCCs and IDTA may provide sufficient
                safeguards to protect personal data transferred outside the EEA
                and the UK. For more information, please visit
                <a
                  href="         https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en
                </a>{" "}
                and
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
                Hydrafacial performs transfers impact assessments and
                continually monitors the circumstances surrounding such
                transfers to ensure that these maintain, in practice, a level of
                protection that is essentially equivalent to the one guaranteed
                by the European and UK data protection laws.
              </p>
              <p className={styles["sectionDescription"]}>
                We apply the same conditions and requirements described in this
                Privacy Notice for all international data transfers, regardless
                of location, with adequate safeguards and always keeping your
                personal information safe, using the most convenient
                international data transfer tools, in accordance with the model
                contract prepared by regulators.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3
                className={`${styles["contentTitle"]} ${styles["contentSubTitle"]}`}
              >
                Information for individuals in China, South Korea and Indonesia
              </h3>
              <p className={styles["sectionDescription"]}>
                Where personal data is processed, it is stored on local servers
                in each country, with no cross-border data transfers to third
                countries.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Protecting your data</h3>
              <p>
                Hydrafacial strives to implement appropriate technical and
                organizational measures in order to protect your personal data
                against accidental or unlawful destruction, accidental loss or
                alteration, unauthorized disclosure or access and any other
                unlawful forms of processing. We aim to ensure that the level of
                security and the measures adopted to protect your personal data
                are appropriate for the risks presented by the nature and use of
                your personal data. We follow recognized industry practices for
                protecting our IT environment and physical facilities. Some of
                these measures are:
              </p>
              <ul>
                <li>Access management</li>
                <li>VPN (virtual private network) for remote Access</li>
                <li>Encryption of data at rest and in transit</li>
                <li>Backup and recovery capabilities</li>
                <li>Firewalls</li>
                <li>Antivirus software</li>
                <li>Multi-factor authentication (MFA)</li>
                <li>Email security filtering</li>
                <li>Security awareness training</li>
              </ul>
              <p>
                On our websites and apps, we protect any data you have given us
                by providing you with a User ID and password. We also use
                industry standard security to encrypt sensitive data in transit
                to our servers. The User ID and password helps us to protect
                your personal data. You must keep this password safe and must
                not disclose it to anyone.
              </p>
              <p>
                Some suspicious emails contain attachments or links to websites
                that try to install malicious software on your computer. If you
                have entered your password on what you think might be a
                malicious website, please contact us immediately and ask us to
                change your password.
              </p>
              <p>
                If you have entered your payment card information on what you
                think might be a malicious website or replied to an e-mail with
                that information, you should contact your credit card company
                immediately. Do not forget to contact us to update your card
                details.
              </p>
              <p>
                When you ask for a quote from us, we will process the data on a
                secure server. Your browser will confirm that you are in a
                secure area by displaying an unbroken key or lock in the bottom
                right-hand corner of your browser window.
              </p>
              <p>
                Many organisations use security features such as firewalls to
                protect their computer systems. These firewalls may prevent you
                from connecting to our secure server. If you are at work and
                cannot connect to our web site, please speak to your IT
                administrator.
              </p>
              <p>
                Please be aware that communications over the Internet, such as
                emails, are not secure unless they have been encrypted. Your
                communications may route through a number of countries before
                being delivered - this is the nature of the Internet. We cannot
                accept responsibility for any unauthorized access or loss of
                personal information that is beyond our control.
              </p>
              <p>
                Additionally, you can protect your system by installing
                anti-virus and running scans as recommended by the vendor. You
                should also run any security updates / patches you receive for
                your system from the supplier.
              </p>
              <p>
                Never respond to unsolicited emails from unfamiliar sources.
                Such emails may be fraudulent and attempt to get you to provide
                your personal details or payment information.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                How long do we keep your data
              </h3>
              <p>
                We will not process your Personal Information for longer than is
                necessary nor will we process it for purposes beyond what it was
                collected for. We store your Personal Information for different
                time periods depending on the category of Personal Information
                and the nature of relationship that you have with us. We
                determine how long we need Personal Information on a
                case-by-case basis, but our goal is to keep your Personal
                Information for as short period as possible to achieve the
                purpose for which Personal Information is collected.
              </p>
              <p>
                We are subject to various legal requirements concerning
                retention of data, and also have our own legitimate interests in
                retaining your data for a period of time. These include defence
                of any late or delayed claims and improving our products and
                services.
              </p>
              <p>
                If you don’t take any action after receiving an email/SMS from
                Hydrafacial inviting you to create an account, because you have
                received a Hydrafacial treatment (Syndeo), we will automatically
                delete your data within a reasonable time.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Children’s privacy</h3>
              <p>
                We do not knowingly collect any personal information from
                children under 13, and our products are not intended for
                purchase or use by children. Parents should be aware that there
                are parental control tools available online that can be used to
                prevent children from submitting information online without
                parental permission or from accessing material that is harmful
                to minors.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                Links to other websites
              </h3>
              <p>
                To enhance your Hydrafacial experience, our website may include
                links to other sites. Those websites will have their own privacy
                policies that you may wish to review. Hydrafacial has no
                responsibility for the content hosted on third party linked
                websites.
              </p>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>Your rights</h3>
              <p>
                You may have certain rights relating to your Personal
                Information, depending on your location and subject to local
                applicable laws. These rights may include, subject to any
                exceptions or limitations:
              </p>
              <ul>
                <li>
                  The right to know what personal data is being collected and
                  for what purpose.
                </li>
                <li>
                  The right to know what personal data is being “sold” or
                  “shared”, for what purpose and the categories of recipients of
                  your personal data.
                </li>
                <li>The right to access your personal data.</li>
                <li>
                  The right to have your personal data rectified, corrected, or
                  updated.
                </li>
                <li>
                  The right to ask us to restrict the processing of your
                  information in certain circumstances, such as when you are
                  concerned about the accuracy of the data or how it is being
                  used.
                </li>
                <li>
                  The right to have your personal data deleted, including from
                  any third parties where your personal data has been sold,
                  shared or disclosed.
                </li>
                <li>
                  The right to opt out of the “sale” or “sharing” of your
                  personal data.
                </li>
                <li>
                  The right to ask that we transfer the information you gave us
                  from one organization to another, or give it to you, where
                  applicable.
                </li>
                <li>
                  The right to object to the processing of your personal data.
                </li>
                <li>
                  The right not to be subject to any automated decision making
                  and profiling.
                </li>
              </ul>
              <p>
                If you would like to: access, review, update, correct, and
                delete any personal data we hold about you; or exercise any
                other privacy rights available to you, you can fill out this
                request form. Please be aware that these rights do not apply in
                all circumstances; however, where we can we will provide you
                with what you have requested.
              </p>
              <p>
                Our privacy team will review your verifiable privacy rights
                request (“Privacy Rights Request”) and respond to you as quickly
                as possible. If we are unable to comply with your request due to
                an exception or limitation, we will explain this in writing. If
                we need more time, we will inform you of the reason and
                extension period in writing.
              </p>
              <p>
                If you would like an authorized agent to make a Privacy Rights
                Request on your behalf, the agent may do so by filling out this
                request form. We will ask for written, signed permission that
                the agent has been authorized to act on their behalf. Once
                written authorization is provided, we will review your Privacy
                Rights Request and respond to you as quickly as possible. We
                will respond directly to the e-mail address provided by the
                authorized agent regarding the fulfillment of the Privacy Rights
                Request.
              </p>
              <p>
                We remind you that you have a right to lodge a complaint with a
                Data Protection Authority (“DPA”) should you feel unsatisfied
                with our processing of your personal data.
              </p>
              <p>
                DPAs in the EEA:
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://edpb.europa.eu/about-edpb/about-edpb/members_es#member-no
                </a>
              </p>
              <p>
                DPA in the UK:
                <a
                  href="https://ico.org.uk/global/contact-us/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://ico.org.uk/global/contact-us/
                </a>
              </p>
              <p>
                DPA in Switzerland:
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
                Additional Information for Consumers in the United States
              </h3>
              <div className={styles["sectionDescription"]}>
                <p className={styles["sectionDescription"]}>
                  Under the California Privacy Rights Act (‘CPRA’) and Virginia
                  Commonwealth Data Protection Act (‘CDPA’), residents of
                  California and Virginia have certain rights regarding the
                  Personal Information that businesses collect and process about
                  them. This includes the rights to request access or deletion
                  of your personal data, as well as the right to direct a
                  business to stop selling or sharing your personal data.
                </p>
                <p className={styles["sectionDescription"]}>
                  We are required to detail the categories of personal data that
                  we collect and/or share for the purposes described in the
                  section “How We Use Your Data” of this Privacy Notice and, to
                  the Processors for the purposes mentioned in the section
                  “Sharing Data”.
                </p>
                <p className={styles["sectionDescription"]}>
                  We collect and in the past 12 months have collected the
                  following categories of Personal Information for our business
                  purposes:
                </p>
                <ul>
                  <li className={styles["sectionDescription"]}>
                    Personal Identifiers.
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Information collected by cookies and other technologies,
                    including IP address.
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Internet or other electronic network activity information,
                    including account log information, content you view or
                    engage with, and account, browser, and device information.
                  </li>
                  <li className={styles["sectionDescription"]}>
                    Inferences drawn from any of the above categories of
                    Personal Information.
                  </li>
                </ul>
                <p className={styles["sectionDescription"]}>
                  While Hydrafacial does not sell personal data in exchange for
                  any monetary consideration, we do share personal data for
                  other benefits as defined by Cal. Civ. Code 1798.140(ad)(2).
                  We have shared in the preceding 12 months personal data as
                  necessary for specific “business purposes,” as defined by Cal.
                  Civ. Code 1798.140(e) and specified in the section “Sharing
                  Data”. This includes sharing personal identifiers, commercial
                  information, and internet or other electronic network activity
                  with payment processing providers, customer relationship
                  management, consulting, e-mail, product feedback, helpdesk
                  services, advertising networks, website analytics companies.
                  You have a right to direct Hydrafacial not to sell or share
                  your Personal Information.
                </p>
                <p className={styles["sectionDescription"]}>
                  For more information on how to exercise your rights, including
                  the list of privacy rights that may be available to you,
                  please see section “Your Rights” of this Privacy Notice. If
                  you would like to access, review, update, correct, delete any
                  personal data we hold about you, or exercise any other privacy
                  rights available to you, including the right to opt out from
                  selling or sharing your personal, you fill out this request
                  form or send your request to:
                  <a
                    href="mailto:dpo@hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    dpo@hydrafacial.com
                  </a>
                </p>
                <p className={styles["sectionDescription"]}>
                  We endeavor to respond to a Privacy Rights Request within the
                  required timeframes. If we need more time, we will inform you
                  of the reason and extension period in writing. If you submit
                  your Privacy Rights Request electronically through our request
                  form, we will deliver our written response to the verified
                  email associated with the request. If you did not submit the
                  request to us via the online webform, we will deliver our
                  written response by mail or electronically, at your option. We
                  do not charge a fee to process or respond to your verifiable
                  consumer request unless it is excessive, repetitive, or
                  manifestly unfounded. If we determine that the request
                  warrants a fee, we will tell you why we made that decision and
                  provide you with a cost estimate before completing your
                  request.
                </p>
                <p className={styles["sectionDescription"]}>
                  Right to Appeal – California
                </p>
                <p className={styles["sectionDescription"]}>
                  If Hydrafacial does not take action on your Privacy Rights
                  Request within the 45 days response period, or in the event of
                  an extension, within the maximum 90-day response period, we
                  will inform you in writing of the reasons for not taking
                  action, as well as provide an explanation of any rights you
                  have to appeal the decision.
                </p>
                <p className={styles["sectionDescription"]}>
                  Right to Appeal – Virginia
                </p>
                <p className={styles["sectionDescription"]}>
                  You have the right to appeal a refusal to take action on a
                  Privacy Rights Request within a reasonable period of time
                  after your receipt of our decision. Within 60 days of receipt
                  of an appeal, Hydrafacial will inform you in writing of any
                  action taken or not taken in response to the appeal, including
                  a written explanation of the reasons for the decisions. If the
                  appeal is denied, you will be provided with a method through
                  which you may contact Attorney General of Virginia to submit a
                  complaint.
                </p>
              </div>
            </div>
            <div className={styles["contentContainer"]}>
              <h3 className={styles["contentTitle"]}>
                California & Delaware “Do Not track Disclosures”
              </h3>
              <p>
                Privacy regulations in the United States, such as the laws of
                California and Delaware, require Hydrafacial to indicate whether
                it honors your browser’s “Do Not Track” settings concerning
                targeted advertising. Hydrafacial adheres to the standards set
                out in this Privacy Notice and does not monitor or respond to Do
                Not Track browser requests.
              </p>
            </div>
            <h2 className={styles["title"]}>Terms Of Services</h2>
            <br />
            <div className={styles["contentContainer"]}>
              <p>
                PLEASE READ THESE TERMS OF USE CAREFULLY. THIS HYDRAFACIAL™
                ACCOUNT (THE “ACCOUNT”) IS OPERATED BY HYDRAFACIAL LLC
                (“Hydrafacial” or “Us”). THESE TERMS OF USE (“TERMS”) ARE A
                BINDING AGREEMENT BETWEEN THE USER (“USER” or “ You”) AND
                HYDRAFACIAL AND GOVERN THE ACCESS AND USE OF THE ACCOUNT,
                CONTAIN DISCLAIMERS AND OTHER PROVISIONS THAT LIMIT OUR
                LIABILITY TO USER, AS SUCH MAY BE REVISED BY HYDRAFACIAL FROM
                TIME TO TIME. PLEASE READ THESE TERMS CAREFULLY BEFORE YOU START
                USING THE ACCOUNT. IF YOU DO NOT AGREE TO ALL OF THE TERMS OF
                THIS AGREEMENT, CLICK THE “DO NOT ACCEPT” BUTTON, OR DISCONTINUE
                USE AND UNINSTALL THIS ACCOUNT IMMEDIATELY. THESE TERMS ARE ALSO
                INCORPORATED BY REFERENCE INTO OUR PRIVACY POLICY.
              </p>
              <div className={styles["contentTitle"]}>
                FOR NORTH AMERICAN RESIDENTS ONLY AS FURTHER STIPULATED BELOW:
              </div>
              <p>
                These Terms include an Arbitration provision that governs any
                disputes between you and us. This provision will:
              </p>
              <ul>
                <li>Eliminate your right to a trial by jury; and</li>
                <li>
                  Substantially affect your rights, including preventing you
                  from bringing, joining or participating in class or
                  consolidated proceedings.
                </li>
              </ul>
              <p>
                You agree that we may provide notices, disclosures and
                amendments to these Terms by electronic means, including by
                changing these Terms within the Account or by posting revisions
                on the Hydrafacial Website
              </p>
              <div className={styles["contentTitle"]}>Eligibility</div>
              <p>
                The Account is not targeted towards, nor intended for use by,
                anyone under the age of 13. A USER MUST BE AT LEAST AGE 13 TO
                ACCESS AND USE THE ACCOUNT. If the User is between the ages of
                13 and 18, he or she may only use the Account under the
                supervision of a parent or legal guardian who agrees to be bound
                by these Terms. User represents and warrants that (a) he/she is
                not located in a country that is subject to a U.S. government
                embargo, or that has been designated by the U.S. government as a
                “terrorist supporting” country; and (b) he/she is not listed on
                any U.S. government list of prohibited or restricted parties.
              </p>
              <p>
                In order to use certain functions of our Account, you will need
                to register for an account. You agree to (a) create only one
                account; (b) provide accurate, truthful, current and complete
                information when creating your account; (c) maintain and
                promptly update your account information; (d) maintain the
                security of your account by not sharing your password with
                others and restricting access to your account and your computer;
                (e) promptly notify Hydrafacial if you discover or otherwise
                suspect any security breaches relating to the Account; and (f)
                take responsibility for all activities that occur under your
                account and accept all risks of unauthorized access.
              </p>
              <div className={styles["contentTitle"]}>Privacy</div>
              <p>
                Your use of our Syndeo Services is subject to Hydrafacial's
                Privacy Notice, available at{" "}
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Privacy Notice
                </a>
                . The Data Processing Agreement is incorporated into these Terms
                and applies in cases where you own a business and access
                personal information/data through the Syndeo Services, in which
                case you are considered a Processor and agree to comply with the
                Data Processing Agreement, which is available at
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Data Processing Agreement
                </a>
                , in respect of any personal information/data processed through
                the Syndeo Services.
              </p>
              <div className={styles["contentTitle"]}>
                Copyright, Trademarks, and User License
              </div>
              <p>
                Unless otherwise indicated, the Account and all content and
                other materials therein, including, without limitation, the
                Hydrafacial logo and all designs, illustrations, text, graphics,
                pictures, video clips, information, data, software, sound files,
                other files and the selection and arrangement thereof
                (collectively, “Account Materials”) are owned, controlled or
                licensed by Hydrafacial or its licensors or users and are
                protected by United States and international copyright,
                trademark, patent, trade secret and other intellectual property
                or proprietary rights laws. Syndeo™,Hydrafacial LLC,
                Hydrafacial, the Hydrafacial logo, and other Hydrafacial
                trademarks, service marks, graphics, and logos used in
                connection with the Account are trade names, trademarks or
                registered trademarks registered, owned, controlled or licensed
                by Hydrafacial (collectively “Hydrafacial Marks”). Other
                trademarks, service marks, graphics and logos used in connection
                with the Account are the trademarks or registered trademarks of
                their respective owners (collectively “Third Party Marks”). The
                Hydrafacial Marks and Third-Party Marks may not be copied,
                imitated, or used, in whole or in part, without the prior
                written permission of Hydrafacial or the applicable trademark
                holder. The Account and the Content are protected by copyright,
                trademark, patent, trade secret, international treaties, state
                and federal laws, and other proprietary rights and also may have
                security components that protect digital information only as
                authorized by Hydrafacial or the owner of the Content. All
                rights not expressly granted are reserved.
              </p>
              <p>
                The Account and its Contents are intended solely for personal,
                non-commercial use. Subject to these Terms, Hydrafacial grants
                the User a personal, non-exclusive, non-transferable, limited,
                and revocable license to use the Account for personal use only
                in accordance with these Terms (“User License”). Any use of the
                Account in any other manner, including, without limitation,
                resale, transfer, modification or distribution of the Account or
                text, pictures, music, barcodes, video, data, hyperlinks,
                displays, and other content associated with the Account
                (“Content”) is prohibited. Unless explicitly stated herein,
                nothing in these Terms shall be construed as conferring in any
                manner, whether by implication, estoppel or otherwise, any title
                or ownership of, or exclusive use-rights to, any intellectual
                property or other right and any goodwill associated therewith
                These Terms and User License also govern any updates to, or
                supplements or replacements for, the Account, unless separate
                terms accompany such updates, supplements, or replacements, in
                which case the separate terms will apply.
              </p>
              <div className={styles["contentTitle"]}>Acceptable Use</div>
              <p>
                User’s use of the Account, any Content, and any information
                provided by the User including usernames and passwords,
                addresses, e-mail addresses, phone number, financial information
                (such as credit card numbers) (“User Information”) transmitted
                in connection with the Account is limited to the contemplated
                functionality of the Account. In no event may the Account be
                used in a manner that (a) harasses, abuses, stalks, threatens,
                defames, or otherwise infringes or violates the rights of any
                other party (including but not limited to rights of publicity or
                other proprietary rights); (b) is unlawful, fraudulent, or
                deceptive; (c) provides sensitive personal information unless
                specifically requested by Hydrafacial , (d) includes spam or any
                unsolicited advertising; (e) uses technology or other means to
                access Hydrafacial or Content that is not authorized by
                Hydrafacial; (f) uses or launches any automated system,
                including without limitation, “robots,” “spiders,” or “offline
                readers,” to access Hydrafacial or Content; (g) attempts to
                introduce viruses or any other computer code, files, or programs
                that interrupt, destroy, or limit the functionality of any
                computer software, hardware, or telecommunications equipment;
                (h) attempts to gain unauthorized access to Hydrafacial’s
                computer network or user accounts; (i) encourages conduct that
                would constitute a criminal offense or that gives rise to civil
                liability; (j) violates these Terms; (k) attempts to damage,
                disable, overburden, or impair Hydrafacial’s servers or
                networks; (l) impersonates any person or entity or otherwise
                misrepresents your identity or affiliation with another person
                or entity; or (m) fails to comply with applicable third party
                terms (collectively “Acceptable Use”). Hydrafacial reserves the
                right, in its sole discretion, to terminate any User License, or
                assert legal action with respect to Content or use of the
                Account, that Hydrafacial reasonably believes is or might be in
                violation of these Terms, or Hydrafacial policies. Hydrafacial’s
                failure or delay in taking such actions does not constitute a
                waiver of its rights to enforce these Terms. Hydrafacial
                requests that Users not use the Account while driving or
                operating machinery or equipment.
              </p>
              <div className={styles["contentTitle"]}>
                User Generated Material
              </div>
              <p>
                If and to the extent that we elect to accept user generated
                material and subject to the Account’s capabilities, You may have
                the opportunity to publish, transmit, submit or otherwise post
                reviews, ratings, comments, feedback or other materials on the
                Account (“User Generated Material”) that may be accessible and
                viewable by the public. With respect to User Generated Material
                submitted or posted by You, You represent that (i) You created
                and own the rights to the content or You have the owner’s
                express permission to post such content, and (ii) the content
                does not infringe any other person’s or entity’s rights
                (including, without limitation, copyrights, trademarks or
                privacy rights) or violate any applicable laws, rules or
                regulations, these Terms of Use or any of our other posted
                policies.
              </p>
              <div className={styles["contentSubTitle"]}>
                User Generated Material must not:
              </div>
              <ul>
                <li>
                  Contain any material which is false, defamatory, libelous,
                  obscene, harassing, threatening, discriminatory, bigoted,
                  hateful, violent, vulgar, profane, pornographic or otherwise
                  offensive, inappropriate, damaging, unlawful, disruptive or
                  harmful;
                </li>
                <li>
                  Violate our or any other person’s legal rights (including the
                  rights of publicity and privacy), contain any material that
                  could give rise to any civil or criminal liability under
                  applicable laws or regulations or otherwise promote, advocate
                  or assist any illegal activity or unlawful act;
                </li>
                <li>
                  Create or threaten harm to any person or loss or damage to any
                  property;
                </li>
                <li>
                  Include other peoples’ personal information, such as another
                  person’s address, phone number, e-mail address, social
                  security number, credit card number, medical information,
                  financial information, or any other information that may be
                  used to track, contact, or impersonate that individual;
                </li>
                <li>
                  Infringe any patent, trademark, trade secret, copyright,
                  contract or other intellectual property or other proprietary
                  rights of Hydrafacial or any other person;
                </li>
                <li>
                  Seek to harm or exploit children by exposing them to
                  inappropriate content, asking for personally identifiable
                  information or otherwise;
                </li>
                <li>
                  Misrepresent Your identity or affiliation with any person or
                  organization, including Hydrafacial;
                </li>
                <li>
                  Seek to collect other users’ e-mail addresses and/or their
                  usernames or passwords for their Accounts or other services by
                  electronic or other means for any purpose, including to send
                  unsolicited e-mail or other electronic communications;
                </li>
                <li>
                  Seek to transmit chain letters, bulk or junk e-mail, whether
                  automated or not, or interfere with, disrupt or create an
                  undue burden on Hydrafacial or the networks or services
                  connected to the Website or install or attempt to install or
                  promote spyware, malware or other computer code on our
                  computers or equipment or the computers or equipment of third
                  parties; or
                </li>
                <li>
                  Involve commercial activities such as contests, sweepstakes
                  and/or other sales promotions, barter, advertising or offers
                  of sale or purchase of goods and services; or
                </li>
                <li>
                  Be otherwise objectionable or non-family friendly as
                  determined by Hydrafacial at its sole discretion.
                </li>
              </ul>
              <p>
                We do not claim ownership to User Generated Material. However,
                by submitting or posting User Generated Material, You
                irrevocably grant us and our assigns, agents and licensees and
                other users a worldwide, non¬exclusive, irrevocable,
                royalty-free, fully paid license under all copyrights,
                trademarks, patents, trade secrets, privacy and publicity rights
                and other intellectual property rights You own or control to:
                (i) use, reproduce, transmit, modify, index, adapt, publish,
                translate, create derivative works from, distribute, display and
                otherwise exploit such content throughout the world in any
                media, whether now known or hereafter invented, including for
                any and all purposes, including commercial or marketing
                purposes, all without further notice to You, with or without
                attribution, and without the requirement of any permission from
                or payment to You or any other person or entity, and (ii) to use
                Your name, persona or likeness alone or in connection with such
                uses, without any obligation or remuneration to You. Without
                limitation, the granted rights include the right to: (a)
                configure, host, index, cache, archive, store, digitize,
                compress, optimize, modify, reformat, edit, adapt, publish in
                searchable format, and remove such User Generated Material and
                combine same with other materials, and (b) use any ideas,
                concepts, know-how, or techniques contained in any User
                Generated Material for any purposes whatsoever, including
                developing, manufacturing, and marketing products and/or
                services. Except as prohibited by law, You hereby waive, and You
                agree to waive, any moral rights (including attribution and
                integrity) that You may have in any User Generated Material,
                even if it is altered or changed in a manner not agreeable to
                You. To the extent not waivable, You irrevocably agree not to
                exercise such rights (if any) in a manner that interferes with
                any exercise of the granted rights. You understand that You will
                not receive any fees, sums, consideration, or remuneration for
                any of the rights granted in this Section. You agree to pay all
                royalties, fees and other monies owing to any person or entity
                by reason of the User Generated Material that You post on the
                Website.
              </p>
              <p>
                If and to the extent that we elect to accept user generated
                material and subject to the Account’s capabilities, we may
                refuse, alter, or remove a User Submission without notice for
                any reason at Hydrafacial’s sole discretion, including our
                belief that a User Submission may violate these Terms of Use or
                be otherwise objectionable. If and to the extent that we elect
                to accept User Generated Material, we have the right, but not
                the obligation, to monitor, review, screen, post, remove,
                reject, modify and store all User Generated Material posted on
                the Website, at any time and for any reason, without notice,
                including to ensure that all such User Generated Material
                complies with these Terms of Use. We do not endorse any User
                Generated Material and the User Generated Material posted does
                not reflect our opinions, views or advice. You are solely
                responsible for Your User Generated Material and the
                consequences of posting and publishing it and You agree that we
                are acting only as a passive conduit for Your online
                distribution and publication of Your User Generated Material. We
                take no responsibility and assume no liability for any User
                Generated Material that You or any other user or third-party
                posts or sends on or through the Website, nor do we assume any
                liability for any action or inaction regarding transmissions,
                communications or content provided by any user or third party.
              </p>
              <div className={styles["contentTitle"]}>Indemnification</div>
              <p>
                The User agrees to defend, indemnify, and hold harmless
                Hydrafacial, its parent, subsidiary and other affiliated
                companies, independent contractors, service providers and
                consultants, and their respective employees, contractors,
                agents, officers, members and directors (“Hydrafacial
                Indemnitees”) from any and all claims, suits, damages, costs,
                lawsuits, fines, penalties, liabilities, and expenses (including
                attorneys’ fees) (“Claims”) that arise from or relate to the
                User’s use or misuse of the Account, violation of these Terms or
                applicable law, or violation of any rights of a third party.
                Hydrafacial reserves the right to assume the exclusive defense
                and control of any matter otherwise subject to indemnification
                by the User, in which event the User will cooperate in asserting
                any available defenses. In the event of any third-party claim
                that the Account or User’s possession and use of the Account
                infringes that third party’s intellectual property right,
                Hydrafacial will be solely responsible for the investigation,
                defense, settlement, and discharge of any such intellectual
                property infringement claim.
              </p>
              <div className={styles["contentTitle"]}>
                Warranties; Disclaimers
              </div>
              <p>
                HYDRAFACIAL IS PROVIDING THE ACCOUNT TO THE USER “AS IS” AND THE
                USER IS USING THE ACCOUNT AT HIS OR HER OWN RISK. TO THE FULLEST
                EXTENT ALLOWABLE UNDER APPLICABLE LAW, HYDRAFACIAL DISCLAIMS ALL
                WARRANTIES, WHETHER EXPRESS OR IMPLIED, INCLUDING ANY WARRANTIES
                THAT THE ACCOUNT IS MERCHANTABLE, RELIABLE, AVAILABLE, ACCURATE,
                FIT FOR A PARTICULAR PURPOSE OR NEED, NON-INFRINGING, FREE OF
                DEFECTS OR VIRUSES, ABLE TO OPERATE ON AN UNINTERRUPTED BASIS,
                THAT THE USE OF THE ACCOUNT BY THE USER IS IN COMPLIANCE WITH
                LAWS APPLICABLE TO THE USER, THAT USER INFORMATION OR ORDERS
                TRANSMITTED IN CONNECTION WITH THE ACCOUNT WILL BE SUCCESSFULLY,
                ACCURATELY, OR SECURELY TRANSMITTED OR RECEIVED, THAT ORDERS
                WILL BE AS PLACED OR READY AT THE SUGGESTED TIME, OR THAT ANY
                PARTICULAR ITEM ORDERED WILL BE AVAILABLE. THE MATERIALS AND
                INFORMATION IN THE ACCOUNT MAY INCLUDE TECHNICAL INACCURACIES OR
                TYPOGRAPHICAL ERRORS. NOTWITHSTANDING THE FOREGOING, NONE OF THE
                DISCLAIMERS IN THIS PARAGRAPH SHALL APPLY TO WARRANTIES RELATED
                TO PERSONAL INJURY.
              </p>
              <div className={styles["contentTitle"]}>No Liability</div>
              <p>
                SUBJECT TO APPLICABLE LAW, INCLUDING WITH RESPECT TO LIABILITY
                FOR PERSONAL INJURY OR NON-WAIVABLE STATUTORY RIGHTS UNDER NEW
                JERSEY LAW, IN NO EVENT SHALL HYDRAFACIAL OR ITS OFFICERS,
                DIRECTORS, MEMBERS, EMPLOYEES, SHAREHOLDERS OR AGENTS (A) BE
                LIABLE TO THE USER WITH RESPECT TO USE OF THE ACCOUNT, INCLUDING
                WITHOUT LIMITATION PARTICIPATION IN SELFIE ASSESSMENT TOOL, THE
                CONTENT OR THE MATERIALS CONTAINED IN OR ACCESSED THROUGH THE
                ACCOUNT, OR ANY DAMAGES THAT RESULT FROM MISTAKES, OMISSIONS,
                INTERRUPTIONS, DELETION OF FILES, ERRORS, DEFECTS, VIRUSES,
                DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF
                PERFORMANCE, WHETHER OR NOT RESULTING FROM ACTS OF GOD,
                COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED
                ACCESS TO HYDRAFACIAL RECORDS, PROGRAMS OR SERVICES; AND (B) BE
                LIABLE TO THE USER FOR ANY INDIRECT, SPECIAL, INCIDENTAL,
                CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING,
                WITHOUT LIMITATION, DAMAGES FOR LOSS OF GOODWILL, LOST PROFITS,
                LOSS, THEFT OR CORRUPTION OF USER INFORMATION, THE INABILITY TO
                USE THE ACCOUNT OR ANY OF ITS FEATURES OR DEVICE FAILURE OR
                MALFUNCTION. THE USER’S SOLE REMEDY IS TO CEASE USE OF THE
                ACCOUNT. IF YOU RESIDE IN A JURISDICTION OTHER THAN NEW JERSEY,
                UNITED STATES OF AMERICA, YOUR JURISDICTION MAY NOT ALLOW THE
                LIMITATION OF LIABILITY IN CONTRACTS WITH CONSUMERS, SO SOME OR
                ALL OF THESE LIMITATIONS OF LIABILITY MAY NOT APPLY TO YOU.
              </p>
              <p>
                Third Party Content, Accounts, Products and Services (including
                Advertising and Promotions) Hydrafacial may provide third party
                content in the Account (including embedded content) or links to
                third party content, Accounts, products and services, including
                advertisements and promotions (collectively, “Third Party
                Content”) as a service to those interested in this information.
                We do not control, endorse or adopt any Third-Party Content,
                including that the inclusion of any link does not imply
                affiliation, endorsement or adoption by Hydrafacial of any
                Account or any information contained therein, and can make no
                guarantee as to its accuracy or completeness. You acknowledge
                and agree that Hydrafacial is not responsible or liable in any
                manner for any Third-Party Content and undertakes no
                responsibility to update or review such Third-Party Content. You
                agree to use such Third-Party Content contained therein at your
                own risk. When you use other Accounts via Third-Party Content,
                or participate in promotions or business dealings with third
                parties, you should understand that our terms and policies no
                longer govern, and that the terms and policies of those
                third-party Accounts will now apply. You should review the
                applicable terms and policies, including privacy and data
                gathering practices, of any Account to which you navigate from
                our Account. You must comply with any applicable third-party
                terms when using the Account.
              </p>
              <div className={styles["contentTitle"]}>
                Modifications to the Account
              </div>
              <p>
                Hydrafacial reserves the right to modify or discontinue,
                temporarily or permanently, the Account or any features or
                portions thereof without prior notice. You agree that
                Hydrafacial will not be liable for any modification, suspension
                or discontinuance of the Account or any part thereof.
              </p>
              <div className={styles["contentTitle"]}>
                Inaccuracy Disclaimer
              </div>
              <p>
                From time to time there may be information on the Site that
                contains typographical errors, inaccuracies, or omissions. We
                reserve the right to correct any errors, inaccuracies or
                omissions and to change or update information at any time
                without prior notice.
              </p>
              <div className={styles["contentTitle"]}>
                FOR NORTH AMERICAN RESIDENTS ONLY
                <br />
                Arbitration
              </div>
              <p>
                Please read this section carefully. It affects rights that you
                may otherwise have. It provides for resolution of most disputes
                through arbitration instead of court trials and class actions.
                Arbitration is more informal than a lawsuit in court, uses a
                neutral arbitrator instead of a judge or jury, and discovery is
                more limited. Arbitration is final and binding and subject to
                only very limited review by a court. This arbitration clause
                shall survive termination of these Terms.
              </p>
              <p>
                Binding Arbitration. This provision is intended to be
                interpreted broadly to encompass all disputes or claims arising
                out of or relating to these Terms, your use of the Account, and
                your relationship with us. Any dispute or claim arising out of
                or relating to these Terms or use of the Account and your
                relationship with Hydrafacial or any subsidiary, parent or
                affiliate company or companies (whether based in contract, tort,
                statute, fraud, misrepresentation or any other legal theory)
                will be resolved by binding arbitration, except that either of
                us may take claims to small claims court if they qualify for
                hearing by such a court.
              </p>
              <div className={styles["contentTitle"]}>
                Arbitration Procedures.
              </div>
              <p>
                Informal Dispute Procedures: For all disputes, whether pursued
                in court or arbitration, you must first send a letter (by first
                class or registered mail) with a written description of your
                claim to our Legal department Attn: Legal Dept., at 2165 E.
                Spring St, Long Beach, CA 90806 to allow us an opportunity to
                resolve the dispute. You and Hydrafacial each agree to negotiate
                your claim in good faith. Both you and Hydrafacial agree that
                the dispute resolution procedure is a condition precedent which
                must be satisfied prior to initiating any arbitration or filing
                any claim against the other party. You may request arbitration
                if your claim or dispute cannot be resolved within 60 days.
              </p>
              <p>
                To the extent you cannot resolve any dispute through the
                informal dispute resolution procedure described above, a dispute
                shall be resolved through binding individual arbitration. You
                agree that the arbitration of any dispute or claim shall be
                conducted in accordance with the rules of the American
                Arbitration Association ("AAA"), including the AAA's Consumer
                Arbitration Rules (as applicable), as modified by these Terms.
                The AAA Rules and information about arbitration and fees are
                available online at{" "}
                <a href="https://www.adr.org" target="_blank" rel="noreferrer">
                  www.adr.org
                </a>{" "}
                or by calling the AAA at (800) 778-7879.. You and Hydrafacial
                agree that these Terms evidence a transaction in interstate
                commerce and that this arbitration provision will be interpreted
                and enforced in accordance with the U.S. Federal Arbitration Act
                and federal arbitration law, and will not be governed by state
                law. Any arbitration will be held in a reasonably convenient
                location in the state in which you reside or at another mutually
                agreed location. The arbitration will be conducted in the
                English language. An arbitrator may award on an individual basis
                any relief that would be available in a court, including
                injunctive or declaratory relief to the extent required to
                satisfy your individual claim, and must follow and enforce these
                Terms as a court would. Any arbitration shall be confidential,
                and neither you nor we may disclose the existence, content or
                results of any arbitration, except as may be required by law or
                for purposes of enforcement of the arbitration award. Judgment
                on any arbitration award may be entered in any court having
                proper jurisdiction.
              </p>
              <p>
                Costs of Arbitration. Payment of all filing, administration and
                arbitrator fees will be governed by AAA Rules. Each party will
                bear the fees and expense of its own attorneys, experts,
                witnesses and preparation and presentation of evidence at the
                arbitration. However, for claims under $10,000 as to which you
                provided notice and negotiated in good faith as required above
                before initiating arbitration, if the arbitrator finds you are
                the prevailing party in the arbitration, you will be entitled to
                a recovery of reasonable attorneys’ fees and costs. Except for
                claims determined to be frivolous, bad faith or with an improper
                purpose, we agree not to seek an award of attorneys’ fees in
                arbitration even if an award is otherwise available under
                applicable law. Class Action Waiver and Jury Waiver. You and we
                each agree that any proceeding, whether in arbitration or in
                court, will be conducted only on an individual basis and not in
                a class, consolidated or representative action. If a court or
                arbitrator determines in an action between you and us that this
                class action waiver is unenforceable, the arbitration agreement
                will be void as to you. If for any reason a claim proceeds in
                court rather than through arbitration, you and we each waive any
                right to a jury trial.
              </p>
              <p>
                If you are a citizen of any European Union country or the United
                Kingdom, Switzerland, Norway or Iceland, the governing law and
                forum shall be the laws and courts of your usual place of
                residence.
              </p>
              <div className={styles["contentTitle"]}>
                FOR NORTH AMERICAN CITIZENS ONLY
                <br />
                Governing Law and Jurisdiction
              </div>
              <p>
                These Terms of Use, the use of Account and any dispute that may
                arise between you and Hydrafacial shall be governed by and
                construed in accordance with the Federal Arbitration Act,
                applicable federal law and the laws of the State of California,
                United States, without giving effect to any choice or conflict
                of law provision or rule (whether of the State of California or
                any other jurisdiction). The United Nations Convention on
                Contracts for the International Sale of Goods shall have no
                applicability. If the arbitration agreement is ever deemed
                unenforceable or void or a dispute between the parties is not
                subject to arbitration, the User irrevocably consents to the
                exclusive jurisdiction of the federal and state courts located
                in Los Angeles County, California, United States of America, for
                purposes of any legal action arising out of or related to the
                use of the Account or these Terms.
              </p>
              <div className={styles["contentTitle"]}>
                FOR ALL RESIDENTS OUTSIDE NORTH AMERICA
              </div>
              <p>
                If you are a resident outside North America, the governing law
                and forum shall be the laws and courts of your usual place of
                residence.
              </p>

              <div className={styles["contentTitle"]}>Termination</div>
              <p>
                Notwithstanding any of these Terms, Hydrafacial reserves the
                right, without notice and in its sole and absolute discretion,
                to terminate your license to use the Account and to block or
                prevent your future access to and use of the Account.
                Hydrafacial’s failure or delay in taking such actions does not
                constitute a waiver of its rights to enforce these Terms.
              </p>

              <div className={styles["contentTitle"]}>Changes</div>
              <p>
                Hydrafacial reserves the right to change or modify these Terms
                or any other Hydrafacial policies related to use of the Account
                at any time and at its sole discretion by changing these Terms
                within the Account or by posting revisions on the Hydrafacial
                Website. Continued use of the Account following such changes or
                modifications to the Terms or other Hydrafacial policies will
                constitute acceptance of such changes or modifications. If you
                do not agree to such changes or modifications, you should
                uninstall the Account immediately.
              </p>

              <div className={styles["contentTitle"]}>Severability</div>
              <p>
                If any provision of these Terms shall be deemed unlawful, void
                or for any reason unenforceable, then that provision shall be
                deemed severable from these Terms and shall not affect the
                validity and enforceability of any remaining provisions.
              </p>

              <div className={styles["contentTitle"]}>
                Notice to California Residents
              </div>
              <p>
                Under California Civil Code Section 1789.3, California residents
                are entitled to the following specific consumer rights
                information: the provider of the Account is Hydrafacial LLC,
                2165 E. Spring St, Long Beach, CA 90806. To file a complaint
                regarding the Account or to receive further information
                regarding use of the Account, send a letter to the above address
                or contact Hydrafacial via e-mail (with “California Resident
                Request” as the Subject Line). You may also contact the
                Complaint Assistance Unit of the Division of Consumer Services
                of the Department of Consumer Affairs in writing at 1625 North
                Market Blvd., Suite N 112, Sacramento CA 95834 or by telephone
                at 800.952.5210.
              </p>

              <div className={styles["contentTitle"]}>Contact</div>
              <div className={styles["contact"]}>
                <p>
                  Any questions, complaints, or claims regarding the Account
                  should be directed to:
                </p>
                <p>The Hydrafacial Company</p>
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
              <h3 className={styles["contentTitle"]}>Contact Us</h3>
              <p>
                For our customers: please contact the Hydrafacial entity
                identified on your order form.
              </p>
              <p>
                If you would like to access, review, update, correct, delete any
                personal data we hold about you, or exercise any other privacy
                rights available to you, including the right to opt out from
                selling or sharing your personal, you fill out this request
                form.
              </p>
              <p>Controller’s Contact Information:</p>
              <div className={styles["tableWrapper"]}>
                <table className={styles["contactDetailsTable"]}>
                  <thead>
                    <tr>
                      <th>USA</th>
                      <th>United Kingdom</th>
                      <th>Germany</th>
                      <th>France </th>
                      <th>Spain</th>
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
                Data Protection Officer: Ignacio de la Corte
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
                Any questions or enquiries in relation to this notice, your
                personal data or to know & enforce your rights please let us
                know how we can help.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPageEn;
