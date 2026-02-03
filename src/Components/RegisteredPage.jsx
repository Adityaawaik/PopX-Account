import React, { useContext } from "react";
import PopXContext from "../Store/PopXContext";
import { useNavigate } from "react-router-dom";

const RegisteredPage = () => {
  const { emailAddress, password, handleEmailAddress, handlePassword } =
    useContext(PopXContext);
  const navigation = useNavigate();

  const accountLoggedIn = (e) => {
    e.preventDefault();
    if (emailAddress && password) {
      navigation("/accountCreated");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="w-125 min-h-200 bg-white rounded-xl p-6 relative shadow-[0px_0px_1px_0px_black]">
        <div className="mt-4 mb-4">
          <h1 className="font-bold text-2xl mb-0.5">Signin to your</h1>
          <h1 className="font-bold text-2xl mb-0.5">PopX account</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>adipisicing elit. Perferendis, tempora.</p>
        </div>

        <form className="space-y-6 mt-4 mb-4" onSubmit={accountLoggedIn}>
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-purple-600 font-medium">
              Email Address *
            </label>
            <input
              onChange={handleEmailAddress}
              type="email"
              value={emailAddress}
              placeholder="Enter email address"
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
              className="w-full px-4 pt-5 pb-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
              required
              placeholder="Enter Password"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-200 w-full p-3 rounded-lg cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisteredPage;
