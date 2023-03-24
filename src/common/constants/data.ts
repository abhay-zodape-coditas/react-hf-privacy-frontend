import Home from "../../pages";
import PrivacyPolicyPageDe from "../../pages/privacy-notice/de";
import PrivacyPolicyPageEn from "../../pages/privacy-notice/en";
import PrivacyPolicyPageEs from "../../pages/privacy-notice/es";
import PrivacyPolicyPageFr from "../../pages/privacy-notice/fr";
import PrivacyPolicyPageJa from "../../pages/privacy-notice/ja";
import PrivacyPolicyPagePt from "../../pages/privacy-notice/pt";
import PrivacyPolicyPageZh from "../../pages/privacy-notice/zh";

export const languages = {
  english: "en",
  français: "fr",
  deutsch: "de",
  español: "es",
  日本語: "ja",
  Português: "pt",
  中國人: "zh",
};
export const path = "./locales/languages/";
export const cloudTypeOptions = [
  {
    id: 1,
    name: "Privacy & Data Governance Cloud",
    value: "Privacy & Data Governance Cloud",
  },
  {
    id: 2,
    name: "GRC & Security Assurance Cloud",
    value: "GRC & Security Assurance Cloud",
  },
  {
    id: 3,
    name: "Ethics & Compliance Cloud",
    value: "Ethics & Compliance Cloud",
  },
  {
    id: 4,
    name: "ESG & Sustainability Cloud",
    value: "ESG & Sustainability Cloud",
  },
  {
    id: 5,
    name: "Hydrafacial PreferenceChoice",
    value: "Hydrafacial PreferenceChoice",
  },
  {
    id: 6,
    name: "Hydrafacial Ethics",
    value: "Hydrafacial Ethics",
  },
  {
    id: 7,
    name: "Hydrafacial ESG",
    value: "Hydrafacial ESG",
  },
];

export const entityTypeOptions = [
  {
    id: 1,
    name: "Hydrafacial",
    value: "Hydrafacial",
  },
];

export const countryOptions = [
  {
    id: 1,
    name: "Australia",
    value: "Australia",
  },
  {
    id: 10,
    name: "Canada",
    value: "Canada",
  },
  {
    id: 3,
    name: "China",
    value: "China",
  },
  {
    id: 12,
    name: "France",
    value: "France",
  },
  {
    id: 15,
    name: "Germany",
    value: "Germany",
  },
  {
    id: 5,
    name: "Hong Kong",
    value: "Hong Kong",
  },
  {
    id: 7,
    name: "India",
    value: "India",
  },

  {
    id: 11,
    name: "Ireland",
    value: "Ireland",
  },
  {
    id: 4,
    name: "Japan",
    value: "Japan",
  },
  {
    id: 2,
    name: "New Zealand",
    value: "New Zealand",
  },
  {
    id: 14,
    name: "Portugal",
    value: "Portugal",
  },
  {
    id: 6,
    name: "Singapore",
    value: "Singapore",
  },
  {
    id: 13,
    name: "Spain",
    value: "Spain",
  },
  {
    id: 8,
    name: "United Kingdom",
    value: "United Kingdom",
  },
  {
    id: 9,
    name: "United States",
    value: "United States",
  },
  {
    id: 10,
    name: "My Country is not Listed",
    value: "My Country is not Listed",
  },
];

export const languagesMapping: {
  [key: string]: string;
} = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  ja: "日本語",
  pt: "Português",
  zh: "中國人",
};
export const acceptedFileTypes =
  "image/png, image/jpeg, image/jpg, image/gif, image/svg, application/pdf";

export const getCountryOptions = (localString: any) => {
  return [
    {
      id: 1,
      name: localString?.["australia"],
      value: "Australia",
    },
    {
      id: 10,
      name: localString?.["canada"],
      value: "Canada",
    },
    {
      id: 3,
      name: localString?.["china"],
      value: "China",
    },
    {
      id: 12,
      name: localString?.["france"],
      value: "France",
    },
    {
      id: 15,
      name: localString?.["germany"],
      value: "Germany",
    },
    {
      id: 5,
      name: localString?.["hongkong"],
      value: "Hong Kong",
    },
    {
      id: 7,
      name: localString?.["india"],
      value: "India",
    },
    {
      id: 11,
      name: localString?.["ireland"],
      value: "Ireland",
    },
    {
      id: 4,
      name: localString?.["japan"],
      value: "Japan",
    },
    {
      id: 2,
      name: localString?.["newzealand"],
      value: "New Zealand",
    },
    {
      id: 14,
      name: localString?.["portugal"],
      value: "Portugal",
    },
    {
      id: 6,
      name: localString?.["singapore"],
      value: "Singapore",
    },
    {
      id: 13,
      name: localString?.["spain"],
      value: "Spain",
    },
    {
      id: 8,
      name: localString?.["unitedkingdom"],
      value: "United Kingdom",
    },
    {
      id: 9,
      name: localString?.["unitedstates"],
      value: "United States",
    },
    {
      id: 16,
      name: localString?.["other"],
      value: "My Country is not Listed",
    },
  ];
};

export const getUserBtns = () => {
  return [
    {
      id: 2,
      name: "employee",
      active: false,
    },
    {
      id: 3,
      name: "provider",
      active: false,
    },
    {
      id: 4,
      name: "esti",
      active: false,
    },
    {
      id: 5,
      name: "client",
      active: false,
    },
    {
      id: 6,
      name: "marketingRecipient",
      active: false,
    },
  ];
};

export const getRequestBtns = () => {
  return [
    {
      id: 1,
      name: "accessRequest",
      active: false,
    },
    {
      id: 2,
      name: "infoRequest",
      active: false,
    },
    {
      id: 3,
      name: "updateRequest",
      active: false,
    },
    {
      id: 4,
      name: "restrictionRequest",
      active: false,
    },
    {
      id: 5,
      name: "deletionRequest",
      active: false,
    },
    {
      id: 6,
      name: "marketingUnsubscribe",
      active: false,
    },
  ];
};

export const getRequestBtnsForCountry = () => [
  {
    id: 1,
    name: "accessRequest",
    active: false,
  },
  {
    id: 2,
    name: "infoRequest",
    active: false,
  },
  {
    id: 3,
    name: "updateRequest",
    active: false,
  },
  {
    id: 4,
    name: "deletionRequest",
    active: false,
  },
  {
    id: 5,
    name: "marketingUnsubscribe",
    active: false,
  },
];

export const routesData = [
  {
    path: "/privacy-notice/en",
    element: PrivacyPolicyPageEn,
  },
  {
    path: "/privacy-notice/de",
    element: PrivacyPolicyPageDe,
  },
  {
    path: "/privacy-notice/es",
    element: PrivacyPolicyPageEs,
  },
  {
    path: "/privacy-notice/fr",
    element: PrivacyPolicyPageFr,
  },
  {
    path: "/privacy-notice/ja",
    element: PrivacyPolicyPageJa,
  },
  {
    path: "/privacy-notice/pt",
    element: PrivacyPolicyPagePt,
  },
  {
    path: "/privacy-notice/zh",
    element: PrivacyPolicyPageZh,
  },
  {
    path: "/",
    element: Home,
  },
  {
    path: "/en",
    element: Home,
  },
  {
    path: "/fr",
    element: Home,
  },
  {
    path: "/pt",
    element: Home,
  },
  {
    path: "/zh",
    element: Home,
  },
  {
    path: "/es",
    element: Home,
  },
  {
    path: "/ja",
    element: Home,
  },
  {
    path: "/de",
    element: Home,
  },
  {
    path: "*",
    element: Home,
  },
];
