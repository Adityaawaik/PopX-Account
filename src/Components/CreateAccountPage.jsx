import React, { useContext } from "react";

import PopXContext from "../Store/PopXContext";
import { useNavigate } from "react-router-dom";

const CreateAccountPage = () => {
  const {
    handleFullName,
    fullName,
    handlePhoneNumber,
    phoneNumber,
    handleEmailAddress,
    emailAddress,
    handlePassword,
    password,
    handleCompanyName,
    companyName,
  } = useContext(PopXContext);

  const navigation = useNavigate();

  const navigateToAccountCreated = (e) => {
    e.preventDefault();
    if (fullName && phoneNumber && emailAddress && password && companyName) {
      navigation("/accountCreated");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-125 min-h-200 bg-white rounded-xl p-6 relative shadow-[0px_0px_1px_0px_black]">
        <div className="mb-8">
          <h1 className="text-3xl font-bold leading-tight">Create your</h1>
          <h1 className="text-3xl font-bold leading-tight">PopX account</h1>
        </div>

        <form className="space-y-6" onSubmit={navigateToAccountCreated}>
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Full Name*
            </label>
            <input
              onChange={handleFullName}
              type="text"
              placeholder="Marry Doe"
              className="w-full px-4 pt-5 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
              value={fullName}
              required
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Phone number*
            </label>
            <input
              type="text"
              onChange={handlePhoneNumber}
              value={phoneNumber}
              placeholder="Marry Doe"
              maxLength={10}
              className="w-full px-4 pt-5 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
              required
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Email address*
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              onChange={handleEmailAddress}
              value={emailAddress}
              className="w-full px-4 pt-5 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
              required
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Password*
            </label>
            <input
              type="password"
              onChange={handlePassword}
              value={password}
              placeholder="Marry Doe"
              className="w-full px-4 pt-5 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
              required
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Company name
            </label>
            <input
              onChange={handleCompanyName}
              value={companyName}
              type="text"
              placeholder="Marry Doe"
              className="w-full px-4 pt-5 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>

          <div>
            <p className="text-sm font-medium mb-2">Are you an Agency?*</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  defaultChecked
                  className="accent-purple-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="absolute bottom-6 left-6 right-6 bg-purple-600 text-white py-4 cursor-pointer rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
