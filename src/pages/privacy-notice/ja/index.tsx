import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getModifiedFileName } from "../../../common/utils/helper";
import Footer from "../../../components/footer";
import LanguageSelector from "../../../components/languageSelector";
import PageHeader from "../../../components/pageHeader";
import { LanguageContext } from "../../../hoc/languageProvider";
import styles from "../privacyPolicy.module.scss";

const PrivacyPolicyPageJa = () => {
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
              <strong className={styles["fontWeightExtraBold"]}>PRIVACY</strong>{" "}
              NOTICE
            </h2>

            <em className={styles["updatedOn"]}>
              This Privacy Notice was last updated on 24/02/2023.
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
              registered your e-mail with us) when we are required to do so by
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
                  href={getModifiedFileName(
                    `/files/ja/${localString?.["cookiePolicy"]}`
                  )}
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
                  href={getModifiedFileName(
                    `/files/ja/${localString?.["cookiePolicy"]}`
                  )}
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
                  href={getModifiedFileName(
                    `/files/ja/${localString?.["transparencyReport"]}`
                  )}
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
                        href={getModifiedFileName(
                          `/files/ja/${localString?.["standardContractualClauses"]}`
                        )}
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
            <h2 className={styles["title"]}>利用規約</h2>
            <br />
            <div className={styles["contentContainer"]}>
              <p>
                本利用規約をよくお読みください。この HYDRAFACIAL™ アカウント
                (以下「アカウント」という。) は、HYDRAFACIAL LLC
                (以下「Hydrafacial」または「当社」という)
                によって運営されています。これらの利用規約
                (以下「本規約」という。) は、ユーザー
                (以下「ユーザー」または「お客様」という。) と HYDRAFACIAL
                の間の拘束力のある契約であり、アカウントへのアクセスと使用を管理し、免責事項、およびユーザーに対する当社の責任を制限するその他の条項を含みます。これらは、HYDRAFACIAL
                によって随時改訂される場合があります。アカウントの使用を開始する前に、本規約をよくお読みください。本契約のすべての条件に同意しない場合は、「同意しない」ボタンをクリックするか、または使用を中止して、このアカウントを直ちにアンインストールしてください。これらの条件は、参照により当社のプライバシー
                ポリシーにも組み込まれています。
              </p>
              <div className={styles["contentTitle"]}>
                以下にさらに規定されているように北米の居住者のみ
              </div>
              <p>
                本規約には、お客様と当社の間の紛争を管理する仲裁規定が含まれています。この規定は以下を行います。
              </p>
              <ul>
                <li> 陪審による裁判を受ける権利を排除する。</li>
                <li>
                  お客様が集団訴訟または併合手続きを持ち込む、集団訴訟または併合手続きの加わるまたは参加することを妨げるなどを含み、お客様の権利に実質的に影響を与える。
                </li>
              </ul>
              <p>
                お客様は、Hydrafacialが、アカウント内で本規約を変更するまたはHydrafacial
                ウェブサイトに改訂を掲載することによることを含め、電子的手段により本規約の通知、開示、および修正を提供する場合があることに同意するものとします。
              </p>
              <div className={styles["contentTitle"]}>適格性</div>
              <p>
                アカウントは、13
                歳未満のユーザーを対象としたものではなく、また、13
                歳未満のユーザーによる使用を意図したものでもありません。ユーザーは、アカウントにアクセスして使用するには、少なくとも13
                歳以上でなければなりません。ユーザーが 13 歳から 18
                歳の場合、本規約に拘束されることに同意した親の監督下または法定後見人の監督下でのみ、アカウントを使用することができます。ユーザーは、(a)
                米国政府の禁輸措置の対象となる国、または米国政府によって「テロ支援」国として指定された国に居住していないこと、および(b)
                禁止または制限された当事者の米国政府リストに記載されていないことを表明及び保証します。
              </p>
              <p>
                アカウントの特定の機能を使用するには、アカウントを登録する必要があります。お客様は、(a)
                アカウントを 1 つだけ作成する、(b)
                アカウントを作成する際に、正確、真実、最新かつ完全な情報を提供する、(c)
                アカウント情報を維持し、速やかに更新する、(d)
                パスワードを他人と共有せず、アカウントとコンピュータへのアクセスを制限することにより、アカウントのセキュリティを維持する、
                (e)
                アカウントに関連するセキュリティ侵害を発見した場合、またはその疑いがある場合は、Hydrafacial
                に速やかに通知する、および(f)
                お客様のアカウントで発生するすべての活動に責任を持ち、不正アクセスのすべてのリスクを受け入れることに同意します。
              </p>
              <div className={styles["contentTitle"]}>プライバシー</div>
              <p>
                当社の Syndeo サービスの使用は、{" "}
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  プライバシー通知
                </a>
                で入手可能な Hydrafacial
                のプライバシー通知の対象となります。データ処理契約は、本規約に組み込まれており、お客様がビジネスを所有し、Syndeo
                サービスを通じて個人情報/データにアクセスする場合に適用されます。この場合、お客様は処理者とみなされ、Syndeo
                サービスを通じて処理される個人情報/データに関し、
                <a
                  href={`/files/en/data_processing_agreement.docx`}
                  className="policyLink"
                  download
                  target={"_blank"}
                  rel="noreferrer"
                >
                  データ処理契約
                </a>
                で入手可能なデータ処理契約に従うことに同意します。
              </p>
              <div className={styles["contentTitle"]}>
                著作権、商標、およびユーザーライセンス
              </div>
              <p>
                特に明記されていない限り、Hydrafacial
                ロゴ、すべてのデザイン、イラスト、テキスト、グラフィックス、写真、ビデオ
                クリップ、情報、データ、ソフトウェア、サウンド
                ファイル、その他のファイル、およびその選択と配置
                (以下総称して「アカウント資料」という。)
                を含みますがそれらに限定されない、アカウントとその中のすべてのコンテンツおよびその他の資料は、Hydrafacial
                またはそのライセンサーまたはユーザーによって所有、管理またはライセンス供与されており、米国および国際的な著作権、商標、特許、企業秘密およびその他の知的財産法または所有権法によって保護されています。アカウントに関連して使用される
                Syndeo™、Hydrafacial LLC、Hydrafacial、Hydrafacial
                のロゴ、およびその他の Hydrafacial
                の商標、サービスマーク、グラフィックス、およびロゴは、Hydrafacial
                によって登録、所有、管理、またはライセンスされた商号、商標、または登録商標(以下総称して「
                Hydrafacialマーク」という。）です。アカウントに関連して使用されるその他の商標、サービスマーク、グラフィックス、およびロゴは、それぞれの所有者の商標または登録商標(以下総称して「サードパーティマーク」という。)
                です。Hydrafacialマークおよびサードパーティマークは、Hydrafacialまたは該当する商標所有者の事前の書面による許可なしに、全体または一部をコピー、模倣、または使用することはできません。アカウントとコンテンツは、著作権、商標、特許、企業秘密、国際条約、州法および連邦法、およびその他の所有権によって保護されており、Hydrafacialまたはコンテンツの所有者によって許可された場合にのみ、デジタル情報を保護するセキュリティコンポーネントを備えている場合があります。明示的に付与されていないすべての権利は留保されます。
              </p>
              <p>
                アカウントとそのコンテンツは、個人的な使用、非商業的な使用のみを目的としています。
                本規約に従い、Hydrafacial
                は、ユーザーに対し、本規約に従うことを条件として個人的な使用に限り、アカウントを使用するための個人的、非独占的、譲渡不可、限定的、および取消可能なライセンス
                (以下「ユーザー ライセンス」という。)
                を付与します。アカウントまたはテキスト、写真、音楽、バーコード、ビデオ、データ、ハイパーリンク、表示、およびアカウントに関連付けられたその他のコンテンツ(
                以下「コンテンツ」という。）の再販、譲渡、修正または配布を含みますがこれらに限定されない、その他の方法でのアカウントの使用は禁止されています。本規約に明示的に記載されていない限り、本規約のいかなる内容も、黙示、禁反言、またはその他の方法によるかどうかを問わず、知的財産権またはその他の権利の権原、所有権、または独占的使用権を付与するものと解釈されないものとします。本規約およびユーザーライセンスに関連付けられているのれんは、アカウントの更新、または補足あるいは置換にも適用されますが、かかる更新、補足、または置換に別の条件が付随されている場合は、別の条件が適用されます。
              </p>
              <div className={styles["contentTitle"]}>許容される使用</div>
              <p>
                ユーザーによるアカウント、あらゆるコンテンツ、およびアカウントに関連して送信されるユーザー名とパスワード、住所、電子メール
                アドレス、電話番号、財務情報 (例えばレジットカード番号など)
                を含むユーザーによって提供されたあらゆる情報
                (以下「ユーザー情報」という。)
                の使用は、アカウントの意図された機能に限定されます。いかなる場合も、(a)
                嫌がらせ、乱用、ストーキング、脅迫、中傷、またはその他の方法で他者の権利
                (パブリシティ権またはその他の所有権を含むがこれらに限定されない)
                を侵害または違反するような方法、(b)
                違法、詐欺的、または欺瞞的な方法、(c) Hydrafacial
                から特に要求されることないまま、機密性の高い個人情報を提供する方法、(d)
                スパムまたは未承諾の広告を含む方法、(e) Hydrafacial または
                Hydrafacial
                によって許可されていないコンテンツにアクセスするために、テクノロジーまたはその他の手段を使用する方法、(f)
                Hydrafacial
                またはコンテンツにアクセスするために、「ロボット」、「スパイダー」、または「オフライン
                リーダー」を含むがこれらに限定されない自動システムを使用または起動する方法、(g)
                コンピューターソフトウェア、ハードウェア、または電気通信機器の機能を中断、破壊、または制限するウイルスまたはその他のコンピューターコード、ファイル、またはプログラムを導入する試みの方法、(h)
                Hydrafacial
                のコンピューターネットワークまたはユーザーアカウントへの不正アクセスを試みる方法、(i)
                刑事犯罪を構成する、または民事責任を生じさせる行為を促す方法、(j)
                本規約に違反する方法、(k) Hydrafacial
                のサーバーまたはネットワークに損害を与える、無効にする、過剰な負荷をかける、または損傷を与えるように試みる方法、(l)
                任意の個人または団体になりすます、または自分の身元または他の個人あるいは団体との提携を偽って伝える方法、または
                (m) 該当するサードパーティの条件
                (以下総称して「許容される使用」という。)
                を順守しない方法、でアカウントを使用してはなりません。Hydrafacial
                は、Hydrafacial が本規約または Hydrafacial
                ポリシーに違反している、または違反している可能性があると合理的に判断したユーザーライセンスを独自の裁量で終了する権利、またはコンテンツあるいはアカウントの使用に関して法的措置を主張する権利を留保します。Hydrafacial
                がかかる措置を講じなかった、または措置が遅滞したとしても、本規約を執行する権利を放棄するものではありません。Hydrafacial
                は、ユーザーが運転中または機械や設備の操作中はアカウントを使用しないように要求します。
              </p>
              <div className={styles["contentTitle"]}>
                ユーザー生成マテリアル
              </div>
              <p>
                ユーザーが生成したマテリアルを当社が受け入れることを選択し、アカウントの機能を条件とした場合においてかつその範囲内で、お客様は、一般の人がアクセスして閲覧できる可能性があるレビュー、評価、コメント、フィードバック、またはその他のマテリアル
                (以下「ユーザー生成マテリアル」という。)
                を公開、送信、送信、またはその他の方法でアカウントに投稿する機会があります。お客様が提出または投稿したユーザー生成マテリアルに関して、お客様は、(i)
                お客様がコンテンツを作成し、そのコンテンツに対する権利を所有するまたはかかるコンテンツを投稿するための所有者の明示的な許可を所有する、および(ii)
                コンテンツが、他の個人または団体の権利
                (著作権、商標、またはプライバシー権を含むがこれらに限定されない)
                を侵害しないこと、または適用される法律、規則あるいは規制、本利用規約、または当社が投稿したその他のポリシーに違反しないこと、を表明します。
              </p>
              <div className={styles["contentSubTitle"]}>
                ユーザー生成マテリアルについて、以下を行ってはなりません。
              </div>
              <ul>
                <li>
                  虚偽、名誉毀損、誹謗中傷、わいせつ、嫌がらせ、脅迫、差別、偏見、憎悪、暴力、下品、冒涜的、ポルノ的、またはその他の攻撃的、不適切、損害的、違法、破壊的、または有害であるマテリアルを含む。
                </li>
                <li>
                  当社またはその他の人物の法的権利
                  (パブリシティ権およびプライバシー権を含む)
                  を侵害する、適用される法律または規制の下で民事または刑事責任を生じさせる可能性のある資料を含む、または違法行為または違法行為を助長、擁護または支援する。
                </li>
                <li>
                  人に対する危害、財産に対する損失または損害を生じさせるまたは脅かす。
                </li>
                <li>
                  別の個人の住所、電話番号、電子メールアドレス、社会保障番号、クレジットカード番号、医療情報、財務情報、または追跡、連絡、あるいは個人になりすますために使用される可能性のあるその他の情報などの別の個人情報を含める。
                </li>
                <li>
                  Hydrafacialまたは別の個人の特許、商標、企業秘密、著作権、契約、その他の知的財産権、またはその他の所有権を侵害する。
                </li>
                <li>
                  子供を不適切なコンテンツにさらして、個人を特定できる情報を要求して、またはその他の方法で子供に危害を加えようと模索するまたは子供を搾取しようと模索する。
                </li>
                <li>
                  お客様の身元または個人との提携あるいはHydrafacial
                  を含む組織との提携を偽る。
                </li>
                <li>
                  未承諾の電子メールまたはその他の電子通信を送信することを含め、目的を問わず、電子的またはその他の手段により、他のユーザーの電子メールアドレスおよび/またはアカウントまたはその他のサービスのユーザー名あるいはパスワードを収集しようと模索する。
                </li>
                <li>
                  自動化されているかどうかにかかわらず、チェーン
                  レター、バルクまたはジャンク
                  メールを送信しようと模索する、または、Hydrafacial
                  またはウェブサイトに接続されたネットワークまたはサービスの妨害、中断、または過度の負担を生じよう模索する、またはスパイウェア、マルウェア、またはその他のコンピューターコードを、当社のコンピューターまたは機器、またはサードパーティのコンピューターまたは機器にインストールしようと、インストールを試みようと、またはそれらを促進しようと模索する。または、
                </li>
                <li>
                  コンテスト、懸賞および/またはその他の販売促進、物々交換、広告、または商品やサービスの販売あるいは購入の申し出などの商業活動に関与する。または
                </li>
                <li>
                  その他、Hydrafacial
                  が独自の裁量で判断したように、好ましくない、または家族向けではないものである。
                </li>
              </ul>
              <p>
                当社は、ユーザー生成マテリアルの所有権を主張しません。ただし、ユーザー生成マテリアルを送信または投稿することにより、お客様は、
                (i)
                かかるコンテンツを、商業目的またはマーケティング目的を含むありとあらゆる目的で、帰属の有無にかかわらず、あなたまたは他の個人または団体からの許可または支払いを必要とせずに、すべてあなたにさらに通知することなく、現在知られているか今後発明されるかを問わず、世界中のあらゆるメディアで使用、複製、送信、変更、索引付け、適応、公開、翻訳、派生作品の作成、配布、表示、およびその他の方法で活用するため、および(ii)
                お客様への義務や報酬なしに、お客様の名前、ペルソナまたは肖像を単独でまたはかかる使用に関連して使用するために、当社および当社の譲受人、代理人、ライセンシー、およびその他のユーザーに、取消不能な形でお客様が所有または管理するすべての著作権、商標、特許、企業秘密、プライバシーおよびパブリシティー権およびその他の知的財産権に基づく世界的、非独占的、取消不能、ロイヤルティフリー、全額支払済みのライセンスを付与するものとします。
                付与される権利は、(a)
                かかるユーザー生成マテリアルを設定する、ホストする、インデックス作成する、キャッシュする、アーカイブする、保存する、デジタル化する、圧縮する、最適化する、修正する、再フォーマットする、編集する、適応する、検索可能な形式で公開する、および削除する並びに他のマテリアルと組み合わせる権利、および(b)
                製品および/またはサービスの開発、製造、およびマーケティングを含む、あらゆる目的のためにユーザー生成マテリアルに含まれるアイデア、概念、ノウハウ、または技術を使用する権利を含みますが、これらに限定されません。法律で禁止されている場合を除き、ユーザー生成マテリアルがユーザーにとって同意できない方法で変更または修正された場合でも、ユーザー生成マテリアルに含まれる可能性のある道徳的権利
                (帰属および完全性を含む)
                を放棄し、放棄することに同意するものとします。放棄不可能な範囲で、付与された権利の行使を妨げるような方法でかかる権利
                (もしあれば)
                を行使しないことに、取消不能の形で同意するものとします。お客様は、このセクションで付与された権利のいずれに対しても、手数料、金額、対価、または報酬を受け取らないことを理解しています。お客様は、お客様がウェブサイトに投稿したユーザー生成マテリアルを理由として、個人または団体に支払うべきすべての使用料、料金、およびその他の金銭を支払うことに同意します。
              </p>
              <p>
                ユーザーが生成したマテリアルを当社が受け入れることを選択し、アカウントの機能を条件とした場合においてかつその範囲内で、当社は、理由の如何を問わず、通知なしにユーザー提出物をユーザー提出物が本利用規約に違反している、またはその他の方法で好ましくない可能性があるという当社の信念を含め、Hydrafacial
                の独自の裁量により拒否、変更、または削除する場合があります。ユーザーが生成したマテリアルを当社が受け入れることを選択した場合においてかつその範囲内で、当社は、ウェブサイトに投稿されたすべてのユーザー生成マテリアルを監視、レビュー、スクリーニング、投稿、削除、拒否、変更、および保存する権利を有しますが、義務ではなく、いつでも理由の如何を問わず、通知なしに、かかるユーザー生成マテリアルがすべて本利用規約に準拠していることを確認する権利を含みます。当社はいかなるユーザー生成マテリアルも支持せず、投稿されたユーザー生成マテリアルは当社の意見、見解またはアドバイスを反映するものではありません。お客様は、お客様のユーザー生成マテリアルと、その投稿および公開の結果について単独で責任を負い、お客様は、当社がお客様のユーザー生成マテリアルのオンライン配布および公開のための受動的なパイプとしてのみ機能していることに同意するものとします。当社は、お客様、他のユーザー、または第三者が本ウェブサイト上または本ウェブサイトを通じて投稿または送信したユーザー生成マテリアルに対して一切責任を負わず、また、送信、通信、またはユーザーあるいはサードパーティにより提供されたコンテンツに関する活動または不活動についても、当社は責任を負いません。
              </p>
              <div className={styles["contentTitle"]}>補償</div>
              <p>
                ユーザーは、ユーザーによるアカウントの使用または誤用、本規約または適用法の違反、または第三者の権利の侵害に起因または関連するあらゆる請求、訴訟、損害、コスト、訴訟、罰金、罰則、責任、および費用
                (弁護士費用を含む) (以下「申立」というr。)
                から、Hydrafacial、その親会社、子会社およびその他の関連会社、独立請負業者、サービスプロバイダーおよびコンサルタント、ならびにそれぞれの従業員、請負業者、代理人、役員、メンバーおよび取締役
                (以下「Hydrafacial 被補償者」という。)
                を防御し、補償し、無害に保つことに同意します。Hydrafacialは、ユーザーによる補償の対象となる事項に対し独占的な防御および管理を行う権利を留保し、その場合、ユーザーは利用可能な防御を主張することに協力します。アカウントまたはユーザーによるアカウントの所有と使用がサードパーティの知的財産権を侵害しているというサードパーティの主張があった場合、Hydrafacial
                は、かかる知的財産権侵害の主張の調査、弁護、和解、および免責について単独で責任を負います。
              </p>
              <div className={styles["contentTitle"]}>保証、免責事項</div>
              <p>
                HYDRAFACIAL
                はアカウントを「現状有姿」でユーザーに提供し、ユーザーは自身のリスクでアカウントを使用しています。適用法の下で許容される最大限の範囲で、HYDRAFACIAL
                は、明示または黙示を問わず、アカウントが商業的であり、信頼性があり、利用可能であり、正確であり、特定の目的またはニーズに適合し、権利を侵害しておらず、欠陥やウイルスがなく、中断なく運用できる、ユーザーによるアカウントの使用が、ユーザーに適用される法律に準拠している、アカウントに関連して送信されるユーザー情報または注文が正常に,正確にまたは安全に送信または受信される、注文は提案された時間通りに準備ができている、または注文された特定のアイテムが入手可能であるという保証を含め、全ての保証を否認します。アカウント内のマテリアルおよび情報には、技術的な誤りまたは誤字脱字が含まれる場合があります。上記にかかわらず、この段落の免責事項は、人身傷害に関連する保証には適用されないものとします。
              </p>
              <div className={styles["contentTitle"]}>責任免除</div>
              <p>
                ニュージャージー州法に基づく、人身傷害または放棄不可能な法的権利に対する責任に関するものを含め、適用法に従い、HYDRAFACIAL
                またはその役員、取締役、メンバー、従業員、株主または代理人は、いかなる場合も、(A)
                天災、通信障害、盗難、破壊、HYDRAFACIAL
                の記録、プログラム、またはサービスへの無許可のアクセスの結果であるかどうかにかかわらず、間違い、省略、中断、ファイルの削除、エラー、欠陥、ウイルス、操作または送信の遅延、またはパフォーマンスの障害に起因するセルフィー評価ツールへの参加、アカウントに含まれる、またはアカウントを通じてアクセスされるコンテンツまたは素材、またはあらゆる損害を含みますが、これらに限定されないアカウントのの使用に関して、ユーザーに対して責任を負うこと、及び(B)
                ユーザーに対し、信用の喪失、逸失利益、損失、ユーザー情報の盗難または破損、アカウントまたはその機能のいずれかを使用できないこと、またはデバイスの故障または誤動作による損害が含まれますが、これらに限定されない間接的、特別、偶発的、結果的、懲罰的、または懲罰的損害に対して責任を負うことは一切ないものとします。ユーザーの唯一の救済策は、アカウントの使用を中止することです。お客様がアメリカ合衆国のニュージャージー州以外の法域に居住している場合、お客様の法域は消費者との契約における責任の制限を許可しない可能性があるため、これらの責任の制限の一部またはすべてがお客様に対し適用されない場合があります。
              </p>
              <p>
                サードパーティのコンテンツ、アカウント、製品およびサービス
                (広告およびプロモーションを含む)
                Hydrafacialは、アカウント内のサードパーティのコンテンツ
                (埋め込みコンテンツを含む)、または広告およびプロモーションを含むサードパーティのコンテンツ、アカウント、製品およびサービスへのリンク
                (以下総称して「
                サードパーティコンテンツ」という。）を、この情報に関心のある人へのサービスとして提供することができます。リンクを含めることは、Hydrafacialによるアカウントまたはそこに含まれる情報の提携、承認、または採用を意味するものではなく、その正確性またはその完全性について保証することはできないことを含め、当社はサードパーティコンテンツを管理、支持、又は採用することはありません。お客様は、Hydrafacial
                がサードパーティのコンテンツに対していかなる形でも責任を負わず、かかるサードパーティコンテンツを更新または確認する責任を負わないことを認め、同意します。お客様は、そこに含まれるサードパーティコンテンツを自身の責任で使用することに同意します。サードパーティコンテンツを介して他のアカウントを使用する場合、またはサードパーティとのプロモーションやビジネス取引に参加する場合は、当社の条件とポリシーが適用されなくなり、サードパーティアカウントの条件とポリシーが適用されることを理解する必要があります。お客様は、当社のアカウントからナビゲートするすべてのアカウントのプライバシーおよびデータ収集慣行を含む、適用される条件およびポリシーを確認する必要があります。アカウントを使用する際は、該当するサードパーティの条件を遵守しなければなりません。
              </p>
              <div className={styles["contentTitle"]}>アカウントの変更</div>
              <p>
                Hydrafacial
                は、事前の通知なしに、アカウントまたはその機能または一部を一時的または永久的に変更または中止する権利を留保します。お客様は、Hydrafacial
                がアカウントまたはその一部の変更、一時停止、または中止について責任を負わないことに同意します。
              </p>
              <div className={styles["contentTitle"]}>不正確な免責事項</div>
              <p>
                時折、誤字、間違い、または脱字を含む情報がサイトにある場合があります。当社は、誤り、不正確さ、または省略を修正し、事前の通知なしにいつでも情報を変更または更新する権利を留保します。
              </p>
              <div className={styles["contentTitle"]}>
                北米の居住者のみ
                <br />
                仲裁
              </div>
              <p>
                このセクションを注意深くお読みください。お客様が有する可能性のある権利に影響を与えます。
                裁判所の裁判や集団訴訟ではなく、仲裁によるほとんどの紛争の解決を規定しています。仲裁は法廷での訴訟よりも非公式であり、裁判官や陪審員の代わりに中立的な仲裁人を使用し、証拠開示はより制限されています。仲裁は最終的かつ拘束力があり、裁判所による非常に限られた審査のみの対象となります。この仲裁条項は、本規約の終了後も存続するものとします。
              </p>
              <p>
                拘束力のある仲裁。
                この条項は、本規約、お客様によるアカウントの使用、およびお客様と当社との関係に起因または関連するすべての紛争または請求を含むように広く解釈されることを意図しています。本規約またはアカウントの使用、およびお客様とハイドラフェイシャルまたは子会社、親会社、または関連会社との関係に起因または関連して生じる紛争または請求
                (契約、不法行為、法令、詐欺、虚偽表示、またはその他の法理論に基づくかどうかにかかわらず)は、拘束力のある仲裁によって解決されます。ただし、少額裁判所による審議を受ける資格がある場合、当社またはお客様のいずれかが少額裁判所に申立を行うことができます。
              </p>
              <div className={styles["contentTitle"]}>仲裁手続き</div>
              <p>
                非公式の紛争手続き:
                法廷または仲裁で追求されたかどうかにかかわらず、すべての紛争について、最初に、当社に論争を解決する機会を与えるために、申立内容を書面で説明した書簡を
                (普通郵便または書留郵便で)
                法務部に送付（法務部宛、カリフォルニア州ロングビーチ市イーストスプリング通り2165番地）する必要があります。お客様とHydrafacialはそれぞれ、お客様の申立について誠実に交渉することに同意します。お客様と
                Hydrafacial
                の両者は、紛争解決手順が、仲裁を開始する前または相手方に対する申立の提起の前に満たされなければならない条件であることに同意します。申立または紛争が
                60 日以内に解決できない場合、仲裁を要求することができます。
              </p>
              <p>
                上記の非公式の紛争解決手順によって紛争を解決できない範囲において、紛争は拘束力のある個別の仲裁によって解決されるものとします。お客様は、紛争または請求の仲裁が、米国仲裁協会
                (以下「AAA」という。) の規則（本規約によって変更された AAA
                の消費者仲裁規則 (該当する場合)
                を含む）に従って実施されるものとすることに同意します。AAA
                規則および仲裁と手数料に関する情報は、{" "}
                <a href="https://www.adr.org" target="_blank" rel="noreferrer">
                  www.adr.org
                </a>{" "}
                でオンラインでの入手可能、または(800) 778-7879 で AAA
                に電話することで入手可能です。お客様と Hydrafacial
                は、これらの条件が州際通商における取引を証明するものであり、この仲裁規定が米国連邦仲裁法および連邦仲裁法に従って解釈および執行され、州法に支配されないことに同意します。仲裁は、お客様が居住する州の合理的に便利な場所、または相互に合意した別の場所で行われます。仲裁は英語で行われます。仲裁人は、お客様の個々の申立を満たすために必要な範囲での差止命令または宣言的救済を含む、裁判所で利用可能な救済を個別に裁定することができ、裁判所が行うように本規約に従い、執行しなければなりません。仲裁は機密であるものとし、法律で義務付けられている場合、または仲裁裁定の執行を目的としている場合を除き、お客様も当社も、仲裁の存在、内容、または結果を開示することはできません。仲裁裁定に関する判決は、適切な管轄権を有する裁判所に登録することができます。
              </p>
              <p>
                仲裁費用。すべての申立、管理、仲裁手数料の支払いは、AAA
                規則に準拠します。各当事者は、仲裁における自身の弁護士、専門家、証人、および証拠の準備と提示の手数料と費用を負担します。ただし、仲裁を開始する前に上記の必要に応じて通知し、誠意を持って交渉した10,000ドル未満の申立については、仲裁人がお客様が仲裁の勝訴当事者であると判断した場合、お客様は合理的な弁護士費用および費用を回収する権利を有します。根拠のない、不誠実である、または不適切な目的によるものと判断された申立を除き、適用法の下で裁定が利用可能な場合でも、仲裁において弁護士費用の裁定を求めないことに同意します。
                集団訴訟の権利放棄および陪審の権利放棄。お客様および当社はそれぞれ、仲裁または法廷を問わず、いかなる手続きも個人ベースでのみ行われ、集団訴訟、併合訴訟、または代表訴訟では行わないことに同意します。裁判所または仲裁人が、お客様と当社との間の訴訟において、この集団訴訟の権利放棄が執行不能であると判断した場合、仲裁合意はお客様に対して無効になります。何らかの理由で、申立が仲裁ではなく法廷で行われる場合、お客様および当社はそれぞれ、陪審裁判を受ける権利を放棄します。
              </p>
              <p>
                お客様が欧州連合加盟国または英国、スイス、ノルウェー、アイスランドの市民である場合、準拠法および裁判地は、お客様の通常の居住地の法律および裁判所となります。
              </p>
              <div className={styles["contentTitle"]}>
                北米市民のみ
                <br />
                準拠法および管轄裁判所
              </div>
              <p>
                本利用規約、アカウントの使用、およびお客様とHydrafacialの間で発生する可能性のある紛争は、法の規定または規則(カリフォルニア州またはその他の管轄区域を問わず)の選択または抵触に影響を与えることなく、連邦仲裁法、適用される連邦法および米国カリフォルニア州法に準拠し、これらの法律に従って解釈されるものとします。国際物品売買契約に関する国際連合条約は適用されないものとします。仲裁合意が執行不能または無効とみなされた場合、または当事者間の紛争が仲裁の対象ではない場合、ユーザーは、アカウントの使用または本規約に起因または関連する法的措置を目的として、アメリカ合衆国カリフォルニア州ロサンゼルス郡に所在する連邦裁判所および州裁判所の専属管轄権に取り消し不能の形で同意するものとします。
              </p>
              <div className={styles["contentTitle"]}>
                北米以外の全ての居住者について
              </div>
              <p>
                お客様が北米以外の、である場合、準拠法および法定地は、お客様の通常の居住地の法律および裁判所とします。
              </p>

              <div className={styles["contentTitle"]}>終了</div>
              <p>
                本規約のいずれにも関わらず、Hydrafacial
                は、通知なしにかつ独自の絶対的な裁量で、アカウントを使用するお客様のライセンスを終了し、アカウントへの将来のアクセスと使用をブロックまたは防止する権利を留保します。Hydrafacial
                がかかる行動を行わなかった、または行動を遅滞したとしても、本規約を執行する権利を放棄するものではありません。
              </p>

              <div className={styles["contentTitle"]}>変更</div>
              <p>
                Hydrafacial
                は、アカウント内で本規約を変更するまたはHydrafacialのウェブサイトに改訂を掲載することにより、いつでも独自の裁量で、本規約またはアカウントの使用に関連するその他のHydrafacialのポリシーを変更または修正する権利を留保します。本規約またはその他の
                Hydrafacial
                ポリシーの変更または修正後も継続してアカウントを使用することは、かかる変更または修正を受け入れたと見なされます。かかる変更または修正に同意しない場合は、すぐにアカウントをアンインストールする必要があります。
              </p>

              <div className={styles["contentTitle"]}>可分性</div>
              <p>
                本規約のいずれかの規定が違法、無効、または何らかの理由で執行不能とみなされる場合、その条項は本規約から分離可能とみなされ、残りの条項の有効性および執行可能性に影響を与えないものとします。
              </p>

              <div className={styles["contentTitle"]}>
                カリフォルニア州居住者への通知
              </div>
              <p>
                カリフォルニア州民法第 1789.3
                項に基づき、カリフォルニア州の居住者は、次の特定の消費者の権利情報を得る権利があります。アカウントのプロバイダーは、郵便番号90806カリフォルニア州ロングビーチ市イーストスプリング通り2165番地に所在するHydrafacial
                LLCです。アカウントに関する苦情を申し立てる、またはアカウントの使用に関する詳細情報を受け取るには、上記の住所に手紙を郵送するか、電子メールで
                Hydrafacial に連絡してください
                (件名は「カリフォルニア居住者リクエスト」を使用)。また、消費者事務局の消費者サービス部門の苦情支援ユニットに、郵便番号95834カリフォルニア州サクラメント市ノースマーケット大通り1625番地スィートN112まで書面で連絡する、または
                800.952.5210 に電話で連絡することもできます。
              </p>
              <div className={styles["contentTitle"]}>Contact</div>
              <div className={styles["contact"]}>
                <p>
                  アカウントに関する質問、苦情、または申立は、以下までご連絡ください。
                </p>
                <p>The Hydrafacial Company</p>
                <p>消費者ケア</p>
                <p>
                  電子メール:
                  <a
                    href="mailto:help@Hydrafacial.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    help@Hydrafacial.com
                  </a>
                </p>
                <p>
                  郵便番号90806カリフォルニア州ロングビーチ市イーストスプリング通り2165番地
                </p>
                <p>電話番号: : 1-888-791-4888</p>
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

export default PrivacyPolicyPageJa;
