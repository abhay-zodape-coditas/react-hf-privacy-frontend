export interface IRequestType {
  id: number;
  name: string;
  active: boolean;
}

export interface IFormDataType {
  entityName: string;
  userType: string;
  country: string;
  requestType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobtitle: string;
  employmentStartDate: string;
  employmentEndDate: string;
  appliedFor: string;
  requestDetails: string;
  termsAggred: boolean;
  locale: string;
  attachment: string[];
}
