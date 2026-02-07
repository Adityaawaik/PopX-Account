import React, { useContext } from "react";
import PopXContext from "../Store/PopXContext";

const AccountSetting = () => {
  const { fullName = "", emailAddress = "" } = useContext(PopXContext);

  const nameParts = fullName.trim().split(" ").filter(Boolean);

  const firstInitial = nameParts[0]?.[0] || "";
  const lastInitial = nameParts[1]?.[0] || "";

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-125 min-h-200 bg-white rounded-xl relative shadow-[0px_0px_1px_0px_black] overflow-hidden">
        <header className="mb-4 p-4 bg-[#dcdcdc]">
          <h1 className="text-2xl">Account Setting</h1>
        </header>

        <div className="flex gap-8 ml-4 max-[350px]:flex-col">
          <div className="w-20 h-20 bg-gray-400 text-white rounded-full flex items-center justify-center">
            <p className="text-2xl font-bold">
              {firstInitial}
              {lastInitial && ` ${lastInitial}`}
            </p>
          </div>

          <div className="account-information">
            <h3 className="font-bold text-[1.3rem]">{fullName || "User"}</h3>
            <p>{emailAddress || "No email available"}</p>
          </div>
        </div>

        <p className="mt-4 ml-4 mr-4 wrap-break-words">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nam
          praesentium accusantium quas odit asperiores consequatur, excepturi
          ut.
        </p>
      </div>
    </div>
  );
};

export default AccountSetting;
