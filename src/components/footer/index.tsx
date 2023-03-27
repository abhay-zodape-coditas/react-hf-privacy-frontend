import { useContext } from "react";
import { getModifiedFileName } from "../../common/utils/helper";
import BrandingLogo from "../../assets/images/Hydrafacial_Pos_Trademark.svg";
import { Container, Row } from "react-bootstrap";
import { LanguageContext } from "../../hoc/languageProvider";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  const { localString, language } = useContext(LanguageContext);

  const downloadableContentList = [
    {
      docPath: getModifiedFileName(localString?.["cookiePolicy"]),
      text: localString?.["cookiePolicy"],
    },
    {
      docPath: getModifiedFileName(localString?.["dataProcessingAggr"]),
      text: localString?.["dataProcessingAggr"],
    },
    {
      docPath: getModifiedFileName(localString?.["standardContractualClauses"]),
      text: localString?.["standardContractualClauses"],
    },
    {
      docPath: getModifiedFileName(localString?.["transparencyReport"]),
      text: localString?.["transparencyReport"],
    },
  ];
  const getDownloadableLink = (
    language: string,
    docPath: string,
    text: string,
    keyIndex: number
  ) => {
    return (
      <a
        href={`/files/${language}/${docPath}`}
        className="policyLink"
        style={{ marginRight: "0.4rem", fontSize: "0.65rem" }}
        key={keyIndex}
        download
        target={"_blank"}
        rel="noreferrer"
      >
        {text}
      </a>
    );
  };

  return (
    <Container fluid className={styles.containerWrapper}>
      <Row className={styles.contentWrapper}>
        <div className={styles.poweredWrapper}>
          {localString?.["poweredBy"]}{" "}
          <img
            src={BrandingLogo}
            alt={localString?.["logoAltText"]}
            width={150}
            height={100}
            data-testid="brandingLogo"
          />
        </div>
      </Row>
      <Row className={styles.contentWrapper}>
        <div className={styles.footerTextWrapper} data-testid="footerTitle">
          {localString?.["footerTitle"]}
        </div>
      </Row>
      <Row className={styles.contentWrapper}>
        <div className={styles.footerAddress} data-testid="footerAddress">
          <span className={styles.addressTitle}>Hydrafacial LLC</span> - 2165 E.
          Spring Street, Long Beach, CA 90806 <br />
          <span className={styles.addressTitle}>Hydrafacial UK Limited</span> -
          3rd Floor 1 Ashley Road, Altrincham, Cheshire, UK WA14 2DT
          <br />
          <span className={styles.addressTitle}>Hydrafacial Germany GmbH</span>
          - Stichlingstrasse 1 , 60327 Frankfurt
          <br />
          <span className={styles.addressTitle}>Hydrafacial France SAS</span> -
          5 rue Tilsit, 75008 Paris
          <br />
          <span className={styles.addressTitle}>
            The Hydrafacial Company Iberia SL
          </span>
          - Claudio Coello 75, 1º A, 28001 Madrid
        </div>
      </Row>
      <Row className={styles.contactWrapper}>
        <div data-testid="contactUs">
          {localString?.["contactUsAt"]} dpo@hydrafacial.com
        </div>
      </Row>
      <Row>
        <div className={styles.privacyWrapper} data-testid="footerLinks">
          <Link
            className="policyLink"
            style={{ marginRight: "0.4rem", fontSize: "0.65rem" }}
            to={`/privacy-notice/${language}`}
            onClick={() => {
              document
                .getElementById("header")
                ?.scrollIntoView({ behavior: "auto" });
            }}
          >
            {localString?.["privacyPolicyLink"]}
          </Link>
          {!!downloadableContentList?.length &&
            downloadableContentList.map((dataObj: any, index: number) =>
              getDownloadableLink(
                language,
                dataObj?.docPath,
                dataObj.text,
                index
              )
            )}
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
