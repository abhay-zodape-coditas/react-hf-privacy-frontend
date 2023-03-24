import { LanguageContext } from "../../hoc/languageProvider";
import { useContext } from "react";
import BrandingLogo from "../../assets/images/Hydrafacial_Pos_Trademark.svg";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./pageHeader.module.scss";

const PageHeader = () => {
  const { localstring } = useContext(LanguageContext);
  return (
    <Container fluid className={styles.containerWrapper}>
      <Row className={styles.contentWrapper}>
        <Col>
          <img
            src={BrandingLogo}
            alt={localstring?.["logoAltText"]}
            width={200}
            height={60}
            data-testid="brandingLogo"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PageHeader;
