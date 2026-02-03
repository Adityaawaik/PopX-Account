import React, { useContext } from "react";
import PopXContext from "../Store/PopXContext";

const AccountSetting = () => {
  const { fullName, emailAddress } = useContext(PopXContext);

  const splitName = fullName.split(" ");
  const firstNameIndex = splitName[0].split("");
  const lastNameIndex = splitName[1].split("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-125 min-h-200 bg-white rounded-xl  relative shadow-[0px_0px_1px_0px_black] overflow-hidden">
        <header className="mb-4 p-4 bg-[#dcdcdc]">
          <h1 className="text-2xl">Account Setting</h1>
        </header>
        <div className="flex gap-8 ml-4 max-[350px]:flex-col">
          <div className="w-20 h-20 bg-gray-400 text-white rounded-[50%] flex items-center justify-center">
            <p className="text-center text-2xl font-bold">{`${firstNameIndex[0]} ${lastNameIndex[0]}`}</p>
          </div>

          <div className="account-information">
            <h3 className="font-bold text-[1.3rem] ">{fullName}</h3>
            <p>{emailAddress}</p>
          </div>
        </div>
        <p className="mt-4 ml-4 mr-4  wrap-break-word">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nam
          praesentium accusantium quas odit asperiores consequatur, excepturi
          ut. Exercitationem nobis ipsa doloribus excepturi corporis rem
          dignissimos, molestiae quaerat quod.
        </p>
      </div>
    </div>
  );
};

export default AccountSetting;
