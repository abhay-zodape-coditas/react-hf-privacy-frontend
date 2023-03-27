import { Fragment, useContext, useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { languagesMapping } from "../../common/constants/data";
import ROUTES from "../../common/constants/routes";
import { LanguageContext } from "../../hoc/languageProvider";
import styles from "./languageSelector.module.scss";
import { ILanguageSelectorProps } from "./languageSelector.types";

const LanguageSelector = ({
  privacyPage,
  styleProps,
}: ILanguageSelectorProps) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { localString } = useContext(LanguageContext);
  const [defaultTranslateLang, setTranslateLang] = useState("English");
  const [isCurrentMatchingRoute, updateMatchingRoute] = useState(false);
  const { pathname } = useLocation();
  const router = useNavigate();
  const pathName = pathname;
  const [, currentRoute] = pathName!.split("/");

  const handleChange = (lang: string | null) => {
    if (privacyPage) {
      router(`${ROUTES.PRIVACY_NOTICE}/${lang}`);
    } else {
      router(`/${lang}`);
    }
  };

  useEffect(() => {
    updateMatchingRoute(`/${currentRoute}` === ROUTES.PRIVACY_NOTICE);
    if (pathName !== "/") {
      if (privacyPage) {
        setTranslateLang(languagesMapping[pathName!.split("/")[2]]);
        setLanguage(pathName?.split("/")[2]);
      } else {
        setTranslateLang(languagesMapping[pathName!.slice(1)]);
        setLanguage(pathName?.slice(1));
      }
    }
  }, [pathName]);

  return (
    <Container className={styleProps?.containerWrapper}>
      <Row>
        <Col className={styles.linkToPrivacyNoticeWrapper} lg={6}>
          <Link
            to={`${
              isCurrentMatchingRoute ? "" : ROUTES.PRIVACY_NOTICE
            }/${language}`}
            rel="noopener noreferrer"
            className="policyLink"
            data-testid="policyLink"
          >
            {isCurrentMatchingRoute
              ? localString?.["viewPrivacyRequestForm"]
              : localString?.["viewPrivacyNotice"]}
          </Link>
        </Col>
        <Col className={styles.languageWrapper} lg={6}>
          <Fragment>
            <span data-testid="language" className={styles.title}>
              {localString?.["language"]} :
            </span>
            <Dropdown
              className={styles.languageDropdown}
              onSelect={handleChange}
              data-testid="dropdown"
            >
              <Dropdown.Toggle
                className={styles.dropDownToggleBtn}
                variant="default"
                data-testid="defaultLang"
              >
                {defaultTranslateLang}
              </Dropdown.Toggle>

              <Dropdown.Menu data-testid="dropdownContainer">
                {!!Object.keys(languagesMapping)?.length &&
                  Object.keys(languagesMapping)
                    ?.filter((dataObj) => {
                      return dataObj !== language;
                    })
                    .map((dataObj, index) => (
                      <Dropdown.Item
                        eventKey={dataObj}
                        data-testid={dataObj}
                        key={index}
                      >
                        {languagesMapping[dataObj]}
                      </Dropdown.Item>
                    ))}
              </Dropdown.Menu>
            </Dropdown>
          </Fragment>
        </Col>
      </Row>
    </Container>
  );
};

export default LanguageSelector;
