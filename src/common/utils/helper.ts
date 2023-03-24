export const getModifiedFileName = (languageStr: string) =>
  `${languageStr?.toLowerCase()?.trim()?.replaceAll(" ", "_")}.docx`;
