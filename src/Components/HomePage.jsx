import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigation = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div className="w-125 h-200 bg-white rounded-lg shadow-[0px_0px_1px_0px_black]">
        <div className="min-h-200 flex justify-center items-end">
          <div className="w-full">
            <h1 className="ml-4 text-[2rem] font-bold">Welcome to PopX</h1>
            <p className="ml-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="account-btn flex ml-4">
              <div className="w-[95%]">
                <div className="create-account-btn mt-4 mb-4">
                  <button
                    onClick={() => navigation("/createAccount")}
                    className="w-full bg-[#5d64fb] text-white p-3 rounded-[0.3rem] font-bold cursor-pointer"
                  >
                    Create Account
                  </button>
                </div>
                <div className="mt-4 mb-4">
                  <button
                    onClick={() => navigation("/registeredAccount")}
                    className="login-btn w-full bg-[#5D64FB7A] p-3 rounded-[0.3rem] font-bold cursor-pointer "
                  >
                    Already Registerd? Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
