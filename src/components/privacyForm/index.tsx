import {
  getCountryOptions,
  getUserBtns,
  getRequestBtns,
  getRequestBtnsForCountry,
} from "../../common/constants/data";
import { IFormDataType, IRequestType } from "../../common/types/types";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { LanguageContext } from "../../hoc/languageProvider";
import { createNewUser, getUserDetails } from "../../services/user.service";
import FormButtonInput from "../../sharedComponents/formButtonInput/formButtonInput";
import FormLabels from "../../sharedComponents/formLabels/formLabels";
import FormSelect from "../../sharedComponents/formSelects/formSelects";
import DragAndDrop from "../dragAndDrop";
import NoteContent from "../noteContent";
import styles from "./privacyForm.module.scss";
const PrivacyForm = ({ ReCAPTCHA }: any) => {
  const notifySuccess = () => {
    toast.success(localString["formSuccess"], {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyFailure = () => {
    toast.error(localString["formErr"], {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const emailPhoneFieldFailure = () => {
    toast.error(localString["emailPhoneInvalid"], {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const { localString, language } = useContext(LanguageContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [formData, setFormData] = useState<IFormDataType>({
    entityName: "Hydrafacial",
    userType: "",
    country: "",
    requestType: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobtitle: "",
    employmentStartDate: "",
    employmentEndDate: "",
    appliedFor: "",
    requestDetails: "",
    termsAggred: false,
    locale: "en",
    attachment: [],
  });
  const [captchaToken, setCaptchaToken] = useState("");
  const [userTypes, setUserTypes] = useState<IRequestType[]>([]);
  const [userTypeErr, setUserTypeErr] = useState(false);
  const [requestTypes, setRequestTypes] = useState<IRequestType[]>([]);
  const [requestTypeErr, setRequestTypeErr] = useState(false);
  const [isDataLoading, updateDataLoading] = useState(false);
  const captchaRef = useRef<typeof ReCAPTCHA>(null);
  const [captchaErr, setCaptchaErr] = useState(false);
  const countryOptions = getCountryOptions(localString);

  const userBtns = getUserBtns();

  const requestBtns = getRequestBtns();

  const requestBtnsForCountry = getRequestBtnsForCountry();

  const onCaptchaChange = (val: string) => {
    if (val) {
      setCaptchaErr(false);
      setCaptchaToken(val);
    } else {
      setCaptchaErr(true);
      setCaptchaToken("");
    }
  };

  const handleUserType = (userType: string) => {
    setUserTypeErr(false);
    userBtns.forEach((element, index) => {
      if (element.name === userType) {
        element.active = true;
      } else {
        element.active = false;
      }
    });
    if (userType === "jobApplicant") {
      setRequestTypes(requestBtns.slice(0, 5));
    } else if (userType === "employee") {
      if (formData.country === "Japan") {
        setRequestTypes(requestBtnsForCountry.slice(0, 4));
      } else {
        setRequestTypes(requestBtns.slice(0, 5));
      }
    } else if (userType === "provider") {
      if (formData.country === "Japan") {
        setRequestTypes(requestBtnsForCountry);
      } else {
        setRequestTypes(requestBtns);
      }
    } else {
      if (formData.country === "Japan") {
        setRequestTypes(requestBtnsForCountry);
      } else {
        setRequestTypes(requestBtns);
      }
    }
    setUserTypes(userBtns);
    setFormData({
      ...formData,
      userType: userType,
    });
  };

  const handleRequestType = (requestType: string) => {
    setRequestTypeErr(false);
    if (
      formData.userType === "employee" ||
      formData.userType === "jobApplicant"
    ) {
      if (formData.country === "Japan") {
        requestBtnsForCountry.slice(0, 4).forEach((element) => {
          if (element.name === requestType) {
            element.active = true;
          } else {
            element.active = false;
          }
        });
        setRequestTypes(requestBtnsForCountry.slice(0, 4));
      } else {
        requestBtns.slice(0, 5).forEach((element) => {
          if (element.name === requestType) {
            element.active = true;
          } else {
            element.active = false;
          }
        });
        setRequestTypes(requestBtns.slice(0, 5));
      }
    } else {
      if (formData.country === "Japan") {
        requestBtnsForCountry.forEach((element) => {
          if (element.name === requestType) {
            element.active = true;
          } else {
            element.active = false;
          }
        });
        setRequestTypes(requestBtnsForCountry);
      } else {
        requestBtns.forEach((element, index) => {
          if (element.name === requestType) {
            element.active = true;
          } else {
            element.active = false;
          }
        });
        setRequestTypes(requestBtns);
      }
    }
    setFormData({
      ...formData,
      requestType: requestType,
    });
  };

  const getUsers = async () => {
    await getUserDetails();
  };

  const resetFormDetails = () => {
    setFormData({
      ...formData,
      entityName: "Hydrafacial",
      firstName: "",
      lastName: "",
      userType: "",
      country: "",
      requestType: "",
      email: "",
      phone: "",
      requestDetails: "",
      termsAggred: false,
      locale: "en",
      attachment: [],
    });
    setUserTypes(userBtns);
    setRequestTypes(requestBtns);
    setCaptchaToken("");
    grecaptcha.reset();
  };
  const onSubmitClick = () => {
    if (formData.userType === "") {
      setUserTypeErr(true);
    }
    if (formData.requestType === "") {
      setRequestTypeErr(true);
    }
    if (captchaToken === "") {
      setCaptchaErr(true);
    }
  };
  const onSubmit = async (data: any) => {
    if (!formData.email && !formData.phone) {
      emailPhoneFieldFailure();
      updateDataLoading(false);
    } else if (formData.userType === "") {
      setUserTypeErr(true);
    } else if (formData.requestType === "") {
      setRequestTypeErr(true);
    } else if (captchaToken === "") {
      setCaptchaErr(true);
    } else {
      setUserTypeErr(false);
      setCaptchaErr(false);
      setRequestTypeErr(false);
      updateDataLoading(true);

      const details = {
        entity_name: formData.entityName,
        user_type: formData.userType,
        country: formData.country,
        request_type: formData.requestType,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        jobtitle: formData.jobtitle || "",
        employment_start_date: formData.employmentStartDate || null,
        employment_end_date: formData.employmentEndDate || null,
        applied_for: "",
        request_details: formData.requestDetails,
        terms_aggred: formData.termsAggred,
        locale: "en",
      };

      if (formData.userType && formData.requestType) {
        const response = await createNewUser(
          details,
          formData.attachment ? formData.attachment : []
        );
        updateDataLoading(false);
        if (response) {
          notifySuccess();
          resetFormDetails();
        } else {
          notifyFailure();
        }
      }
    }
  };

  const handleRequestClickScroll = () => {
    const element = document.getElementById("requestTypeDiv");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    updateDataLoading(false);
  };

  const handleUserClickScroll = () => {
    const element = document.getElementById("userTypeDiv");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    updateDataLoading(false);
  };

  const handleCaptchaScroll = () => {
    const element = document.getElementById("captchaDiv");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    updateDataLoading(false);
  };

  useEffect(() => {
    if (requestTypeErr) {
      handleRequestClickScroll();
    }
  }, [requestTypeErr]);

  useEffect(() => {
    if (userTypeErr) {
      handleUserClickScroll();
    }
  }, [userTypeErr]);

  useEffect(() => {
    if (captchaErr) {
      handleCaptchaScroll();
    }
  }, [captchaErr]);

  useEffect(() => {
    setUserTypes(userBtns);
    setRequestTypes(requestBtns);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const handleCountry = (e: any) => {
    setFormData({ ...formData, country: e.target.value, requestType: "" });
    if (e.target.value === "Japan") {
      if (
        formData.userType === "employee" ||
        formData.userType === "jobApplicant"
      ) {
        setRequestTypes(requestBtnsForCountry.slice(0, 4));
      } else {
        setRequestTypes(requestBtnsForCountry);
      }
    } else {
      if (
        formData.userType === "employee" ||
        formData.userType === "jobApplicant"
      ) {
        setRequestTypes(requestBtns.slice(0, 5));
      } else {
        setRequestTypes(requestBtns);
      }
    }
  };

  return (
    <Container className={styles.containerWrapper}>
      <ToastContainer />
      <Row>
        <Col data-testid="formContainer">
          <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
            <Row className={styles.rowWrapper} id="userTypeDiv">
              <Col>
                <Row data-testid="userType">
                  <FormLabels
                    labelName={localString?.["userType"]}
                    required={true}
                  />
                </Row>
                <Row>
                  <FormButtonInput
                    buttonList={userTypes}
                    buttonErr={userTypeErr}
                    handleButtonChange={handleUserType}
                  />
                  {userTypeErr && (
                    <p className={styles.errMsg} data-testid="errMsg">
                      {localString?.["requiredFieldError"]}
                    </p>
                  )}
                </Row>
              </Col>
            </Row>

            <Row className={styles.rowWrapper} data-testid="country">
              <FormLabels
                labelName={localString?.["country"]}
                required={true}
              />
              <FormSelect
                options={countryOptions}
                fieldName={"country"}
                required={localString?.["requiredFieldError"]}
                onChange={(e: any) => handleCountry(e)}
                registerProps={register}
                val={formData.country}
              />
              {errors.country ? (
                <>
                  {errors.country.type === "required" && (
                    <p className={styles.errMsg}>
                      {errors.country.message as string}
                    </p>
                  )}
                </>
              ) : null}
            </Row>
            <Row className={styles.rowWrapper} id="requestTypeDiv">
              <Col>
                <Row data-testid="requestType">
                  <FormLabels
                    labelName={localString?.["requestType"]}
                    required={true}
                  />
                </Row>
                <Row>
                  <FormButtonInput
                    buttonList={requestTypes}
                    buttonErr={requestTypeErr}
                    handleButtonChange={handleRequestType}
                  />
                  {requestTypeErr && (
                    <p className={styles.errMsg}>
                      {localString?.["requiredFieldError"]}
                    </p>
                  )}
                </Row>
              </Col>
            </Row>
            <Row className={styles.rowWrapper}>
              <label className={styles.labelWrapper} data-testid="firstName">
                {localString?.["firstName"]}
                <span className={styles.requiredField}>*</span>
              </label>
              <input
                className={styles.inputField}
                type="text"
                placeholder=""
                value={formData.firstName}
                {...register("firstName", {
                  required: localString?.["requiredFieldError"],
                  onChange: (e: any) =>
                    setFormData({ ...formData, firstName: e.target.value }),
                  pattern: {
                    value: /^([^0-9]*)$/g,
                    message: localString?.["invalidName"],
                  },
                })}
              />
              {errors.firstName ? (
                <>
                  {errors.firstName.type === "required" && (
                    <p className={styles.errMsg}>
                      {errors.firstName.message as string}
                    </p>
                  )}
                  {errors.firstName.type === "pattern" && (
                    <p className={styles.errMsg}>
                      {errors.firstName.message as string}
                    </p>
                  )}
                </>
              ) : null}
            </Row>
            <Row className={styles.rowWrapper}>
              <label className={styles.labelWrapper} data-testid="lastName">
                {localString?.["lastName"]}
                <span className={styles.requiredField}>*</span>
              </label>
              <input
                className={styles.inputField}
                type="text"
                placeholder=""
                value={formData.lastName}
                {...register("lastName", {
                  required: localString?.["requiredFieldError"],
                  onChange: (e: any) =>
                    setFormData({ ...formData, lastName: e.target.value }),
                  pattern: {
                    value: /^([^0-9]*)$/g,
                    message: localString?.["invalidName"],
                  },
                })}
              />
              {errors.lastName ? (
                <>
                  {errors.lastName.type === "required" && (
                    <p className={styles.errMsg}>
                      {errors.lastName.message as string}
                    </p>
                  )}
                  {errors.lastName.type === "pattern" && (
                    <p className={styles.errMsg}>
                      {errors.lastName.message as string}
                    </p>
                  )}
                </>
              ) : null}
            </Row>
            <Row className={styles.rowWrapper}>
              <label className={styles.labelWrapper} data-testid="email">
                {localString?.["email"]}
              </label>
              <input
                className={styles.inputField}
                type="email"
                placeholder=""
                value={formData.email}
                {...register("email", {
                  required: false,
                  onChange: (e: any) =>
                    setFormData({ ...formData, email: e.target.value }),
                  pattern: {
                    value:
                      /^[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/gm,
                    message: localString?.["invalidEmail"],
                  },
                })}
              />
              {errors.email ? (
                <>
                  {errors.email.type === "pattern" && (
                    <p className={styles.errMsg}>
                      {errors?.email?.message as string}
                    </p>
                  )}
                </>
              ) : null}
            </Row>
            <Row className={styles.rowWrapper}>
              <label className={styles.labelWrapper} data-testid="phone">
                {localString?.["phone"]}
              </label>
              <input
                className={styles.inputField}
                type="text"
                placeholder=""
                value={formData.phone}
                {...register("phone", {
                  required: false,
                  onChange: (e: any) =>
                    setFormData({ ...formData, phone: e.target.value }),
                  pattern: {
                    value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: localString?.["invalidPhone"],
                  },
                })}
              />
              {errors.phone ? (
                <>
                  {errors.phone.type === "required" && (
                    <p className={styles.errMsg}>
                      {errors.phone.message as string}
                    </p>
                  )}
                  {errors.phone.type === "pattern" && (
                    <p className={styles.errMsg}>
                      {errors.phone.message as string}
                    </p>
                  )}
                </>
              ) : null}
            </Row>
            <Row className={styles.rowWrapper} data-testid="requestDetails">
              <FormLabels
                labelName={localString?.["requestDetails"]}
                required={true}
              />
              <textarea
                className={styles.textInputField}
                value={formData.requestDetails}
                {...register("requestDetails", {
                  required: localString?.["requiredFieldError"],
                  onChange: (e: any) =>
                    setFormData({
                      ...formData,
                      requestDetails: e.target.value,
                    }),
                })}
                maxLength={5000}
              />
              {errors.requestDetails ? (
                <>
                  {errors.requestDetails.type === "required" && (
                    <p className={styles.errMsg}>
                      {errors.requestDetails.message as string}
                    </p>
                  )}
                </>
              ) : null}
            </Row>
            <Row>
              <NoteContent />
            </Row>
            <Row className={styles.rowWrapper} data-testid="agreeTermsLabel">
              <FormLabels
                labelName={localString?.["agreeTermsLabel"]}
                required={false}
              />
              <Form.Check
                type="checkbox"
                id={`default-checkbox`}
                label={localString?.["agreeTerms"]}
                className={styles.agreeTerms}
                checked={formData.termsAggred}
                {...register("termsAggred", {
                  required: localString?.["requiredFieldError"],
                  onChange: (e: any) => {
                    setFormData({
                      ...formData,
                      termsAggred: !formData.termsAggred,
                    });
                  },
                })}
              />
              {errors.termsAggred ? (
                <>
                  {errors.termsAggred.type === "required" && (
                    <p className={styles.errMsg}>
                      {errors.termsAggred.message as string}
                    </p>
                  )}
                </>
              ) : null}
            </Row>
            <Row id="captchaDiv">
              <div className={styles.recaptchaWrapper} data-testid="reCaptcha">
                <ReCAPTCHA
                  ref={captchaRef}
                  sitekey={process.env.REACT_APP_SITE_KEY || ""}
                  onChange={(e: string) => onCaptchaChange(e)}
                  size="normal"
                  hl={language}
                />
              </div>
              {captchaErr && (
                <p className={styles.captchaErrMsg}>
                  {localString?.["requiredFieldError"]}
                </p>
              )}
            </Row>
            <Row className={styles.rowWrapper}>
              <Col>
                <DragAndDrop formData={formData} setFormData={setFormData} />
              </Col>
            </Row>
            <Row className={styles.submitBtnWrapper}>
              <Button
                className={`${styles.submitActiveBtn} ${styles.ripple}`}
                type="submit"
                disabled={isDataLoading}
                data-testid="submitButton"
                onClick={() => {
                  onSubmitClick();
                }}
              >
                {isDataLoading
                  ? localString?.["pleaseWait"]
                  : localString?.["submit"]}
              </Button>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(PrivacyForm);
