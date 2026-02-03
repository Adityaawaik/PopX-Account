import { createContext } from "react";

const defaultContext = {
  fullName: "",
  phoneNumber: "",
  emailAddress: "",
  password: "",
  companyName: "",
  handleFullName: () => {},
  handlePhoneNumber: () => {},
  handleEmailAddress: () => {},
  handlePassword: () => {},
  handleCompanyName: () => {},
};

const PopXContext = createContext(defaultContext);

export default PopXContext;
