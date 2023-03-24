// import { IFormDataType } from "@/common/types/types";
// import "@testing-library/jest-dom";
// import { fireEvent, render, screen } from "@testing-library/react";
// import mockRouter from "next-router-mock";
// import dynamic from "next/dynamic";
// import { SetStateAction } from "react";
// import DragAndDrop from "../components/dragAndDrop";
// import Footer from "../components/footer";
// import HeaderContent from "../components/headerContent";
// import LanguageSelector from "../components/languageSelector";
// import NoteContent from "../components/noteContent";
// import PageHeader from "../components/pageHeader";
// import PrivacyForm from "../components/privacyForm";
// import { LanguageProvider } from "../hoc/languageProvider";
// import FormButtonInput from "../sharedComponents/formButtonInput/formButtonInput";
// import FormButtons from "../sharedComponents/formButtons/formButtons";
// import FormInputs from "../sharedComponents/formInputs/formInputs";
// import FormLabels from "../sharedComponents/formLabels/formLabels";
// import FormSelect from "../sharedComponents/formSelects/formSelects";

// jest.mock("next/navigation", () => require("next-router-mock"));
// mockRouter.push("/");

// describe("Header", () => {
//   it("Renders a Header", () => {
//     render(
//       <LanguageProvider>
//         <HeaderContent />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("contentTitle")).toBeInTheDocument();
//     expect(screen.getByTestId("contentDescriptionOne")).toBeInTheDocument();
//     expect(screen.getByTestId("contentDescriptionTwo")).toBeInTheDocument();
//     expect(screen.getByTestId("contentFooter")).toBeInTheDocument();
//   });
// });
// describe("Page Header", () => {
//   it("Renders a Page Header", () => {
//     render(
//       <LanguageProvider>
//         <PageHeader />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("brandingLogo")).toBeInTheDocument();
//   });
// });

// describe("Footer", () => {
//   it("Renders a Footer", () => {
//     render(
//       <LanguageProvider>
//         <Footer />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("brandingLogo")).toBeInTheDocument();
//     expect(screen.getByTestId("footerTitle")).toBeInTheDocument();
//     expect(screen.getByTestId("footerAddress")).toBeInTheDocument();
//     expect(screen.getByTestId("contactUs")).toBeInTheDocument();
//     expect(screen.getByTestId("footerLinks")).toBeInTheDocument();
//   });
// });

// describe("Note", () => {
//   it("Renders notes with content", () => {
//     render(
//       <LanguageProvider>
//         <NoteContent />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("noteHeading")).toBeInTheDocument();
//     expect(screen.getByTestId("noteDetails")).toBeInTheDocument();
//     expect(screen.getByTestId("privacyPolicyLink")).toBeInTheDocument();
//   });
// });

// describe("drag and Drop", () => {
//   it("Renders Drag and Drop Component", () => {
//     render(
//       <LanguageProvider>
//         <DragAndDrop
//           setFormData={(value: SetStateAction<IFormDataType>): void => {}}
//           formData={undefined}
//         />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("mainContainer")).toBeInTheDocument();
//     expect(screen.getByTestId("dropZone")).toBeInTheDocument();
//     expect(screen.getByTestId("fileSelect")).toBeInTheDocument();
//     expect(screen.getByTestId("attachment")).toBeInTheDocument();
//     expect(screen.getByTestId("uploadMessage")).toBeInTheDocument();
//     expect(screen.getByTestId("filePreview")).toBeInTheDocument();
//   });
// });

// describe("Form Buttons", () => {
//   it("Renders a button", () => {
//     render(
//       <LanguageProvider>
//         <FormButtons
//           key={""}
//           handleClick={() => {}}
//           button={undefined}
//           buttonName={""}
//         />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("button")).toBeInTheDocument();
//   });
// });

// describe("Form Labels Required", () => {
//   it("Renders a Form Label with required symbol", () => {
//     render(
//       <LanguageProvider>
//         <FormLabels labelName={""} required={true} />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("label")).toBeInTheDocument();
//     expect(screen.getByTestId("required")).toBeInTheDocument();
//   });
// });

// describe("Form Inputs", () => {
//   it("Renders a Form Input", () => {
//     render(
//       <LanguageProvider>
//         <FormInputs
//           type={""}
//           placeholder={""}
//           fieldName={""}
//           requiredText={""}
//           onChange={(): void => {}}
//           maxLength={0}
//           pattern={undefined}
//         />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("formInput")).toBeInTheDocument();
//   });
// });

// describe("Form Select", () => {
//   it("Renders a Form Select", () => {
//     render(
//       <LanguageProvider>
//         <FormSelect
//           fieldName={""}
//           required={false}
//           onChange={function (e: any): void {}}
//           options={undefined}
//           registerProps={undefined}
//           val={""}
//         />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("select")).toBeInTheDocument();
//     expect(screen.getByTestId("option")).toBeInTheDocument();
//   });
// });

// describe("Form Button Inputs", () => {
//   it("Renders a Form Buttons List", () => {
//     render(
//       <LanguageProvider>
//         <FormButtonInput
//           buttonList={undefined}
//           buttonErr={false}
//           handleButtonChange={() => {}}
//         />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("formButtonsInput")).toBeInTheDocument();
//   });
// });

// describe("Language Selector", () => {
//   it("Renders a Language Selector Component", () => {
//     render(
//       <LanguageProvider>
//         <LanguageSelector privacyPage={false} styleProps={undefined} />
//       </LanguageProvider>
//     );
//     fireEvent.click(screen.getByTestId("defaultLang"));
//     expect(screen.getByTestId("policyLink")).toBeInTheDocument();
//     expect(screen.getByTestId("language")).toBeInTheDocument();
//     expect(screen.getByTestId("dropdown")).toBeInTheDocument();
//     expect(screen.getByTestId("dropdownContainer")).toBeInTheDocument();
//     expect(screen.getByTestId("defaultLang")).toBeInTheDocument();
//     expect(screen.getByTestId("english")).toBeInTheDocument();
//     expect(screen.getByTestId("french")).toBeInTheDocument();
//     expect(screen.getByTestId("dutch")).toBeInTheDocument();
//     expect(screen.getByTestId("spanish")).toBeInTheDocument();
//     expect(screen.getByTestId("japanese")).toBeInTheDocument();
//     expect(screen.getByTestId("portuguese")).toBeInTheDocument();
//     expect(screen.getByTestId("chinese")).toBeInTheDocument();
//   });
// });

// describe("Home", () => {
//   it("Renders all the Pages", () => {
//     render(
//       <LanguageProvider>
//         <Home />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("brandLogo")).toBeInTheDocument();
//   });
// });

// describe("Privacy Form", () => {
//   const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"));
//   it("Renders Privacy Form", () => {
//     render(
//       <LanguageProvider>
//         <PrivacyForm ReCAPTCHA={ReCAPTCHA} />
//       </LanguageProvider>
//     );
//     expect(screen.getByTestId("formContainer")).toBeInTheDocument();
//     expect(screen.getByTestId("form")).toBeInTheDocument();
//     expect(screen.getByTestId("userType")).toBeInTheDocument();
//     expect(screen.getByTestId("requestType")).toBeInTheDocument();
//     expect(screen.getByTestId("country")).toBeInTheDocument();
//     expect(screen.getByTestId("firstName")).toBeInTheDocument();
//     expect(screen.getByTestId("lastName")).toBeInTheDocument();
//     expect(screen.getByTestId("email")).toBeInTheDocument();
//     expect(screen.getByTestId("phone")).toBeInTheDocument();
//     expect(screen.getByTestId("requestDetails")).toBeInTheDocument();
//     expect(screen.getByTestId("agreeTermsLabel")).toBeInTheDocument();
//     expect(screen.getByTestId("reCaptcha")).toBeInTheDocument();
//     expect(screen.getByTestId("submitButton")).toBeInTheDocument();
//   });
// });
export {};
