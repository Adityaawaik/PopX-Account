import React, { useEffect, useState } from "react";
import PopXContext from "./PopXContext";

const PopXLogic = ({ children }) => {
  const [fullName, setFullName] = useState(() => {
    const savedFullName = localStorage.getItem("fullName");
    return savedFullName || "";
  });
  const [phoneNumber, setPhoneNumber] = useState(() => {
    const savedPhoneNumner = localStorage.getItem("phoneNumber");
    return savedPhoneNumner || "";
  });
  const [emailAddress, setEmailAddress] = useState(() => {
    const emailAddress = localStorage.getItem("emailAddress");
    return emailAddress || "";
  });
  const [password, setPassword] = useState(() => {
    const savedPassword = localStorage.getItem("password");
    return savedPassword || "";
  });
  const [companyName, setCompanyName] = useState(() => {
    const savedCompanyName = localStorage.getItem("companyName");
    return savedCompanyName || "";
  });

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailAddress = (e) => {
    setEmailAddress(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("emailAddress", emailAddress);
    localStorage.setItem("password", password);
    localStorage.setItem("companyName", companyName);
  }, [fullName, phoneNumber, emailAddress, password, companyName]);
  return (
    <PopXContext.Provider
      value={{
        fullName,
        phoneNumber,
        emailAddress,
        password,
        companyName,
        handleFullName,
        handlePhoneNumber,
        handleEmailAddress,
        handlePassword,
        handleCompanyName,
      }}
    >
      {children}
    </PopXContext.Provider>
  );
};

export default PopXLogic;
