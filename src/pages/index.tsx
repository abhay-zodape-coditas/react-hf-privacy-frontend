import { useContext } from "react";

import BrandingLogo from "../assets/images/Hydrafacial_Pos_Trademark.svg";

import { Fragment, lazy, Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/footer";
import HeaderContent from "../components/headerContent";
import LanguageSelector from "../components/languageSelector";
import PrivacyForm from "../components/privacyForm";
import { LanguageContext } from "../hoc/languageProvider";
import styles from "./page.module.scss";

const Home = () => {
  const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));
  const { localstring } = useContext(LanguageContext);
  return (
    <Fragment>
      <Container fluid className={styles.containerWrapper}>
        <Row className={styles.contentWrapper}>
          <Col>
            <img
              data-testid="brandLogo"
              src={BrandingLogo}
              alt={localstring?.["logoAltText"]}
              width={220}
              height={140}
            />
          </Col>
        </Row>
      </Container>
      <LanguageSelector privacyPage={false} />
      <HeaderContent />
      <Suspense fallback={<div>Loading...</div>}>
        <PrivacyForm ReCAPTCHA={ReCAPTCHA} />
      </Suspense>
      <Footer />
    </Fragment>
  );
};

export default Home;
