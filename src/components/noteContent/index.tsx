import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../hoc/languageProvider";
import styles from "./noteContent.module.scss";

const NoteContent = () => {
  const { language, localString } = useContext(LanguageContext);

  return (
    <Container className={styles.containerWrapper}>
      <Row>
        <Col>
          <p className={styles.heading} data-testid="noteHeading">
            {localString?.["pleaseNote"]}
          </p>
          <p data-testid="noteDetails" className={styles.contentLayout}>
            {localString?.["noteDetailsOne"]}
            <br />
            <br />
            {localString?.["noteDetailsTwo"]}
            <br />
            <br />
            {localString?.["noteDetailsThree"]}{" "}
            <Link
              to={`/privacy-notice/${language}`}
              className="policyLink"
              data-testid="privacyPolicyLink"
            >
              {localString?.["privacyPolicyLink"]}.
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default NoteContent;
