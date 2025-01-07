import React, { useState } from "react";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInPage = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-green-200 border-2 border-green-800 rounded-lg relative flex row">
        {/* Left Half - Image */}
        <div className="w-1/2 flex justify-center items-center h-full">
          <Image
            src="/Frame 37.png"
            alt="Landing Image"
            width={500}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Half - Form */}
        <div className="w-1/2 flex flex-col justify-center items-center h-full ">
          {/* Sign-in Form */}
          <div className="flex justify-center items-center mt-10">
            <div className="border-2 border-black bg-gray-50 p-4 rounded-lg w-full flex flex-col">
              <div className="flex items-center gap-2 pl-4 mt-1">
                <div className="text-xl font-bold text-black uppercase font-[Audiowide]">
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="logo img"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
                <div>
                  <h2 className="text-black uppercase">WanderTales</h2>
                </div>
              </div>
              {/* <h3 className="text-2xl font-normal m-4 text-black pl-2">
                Join India’s biggest travel community
              </h3> */}
              <div className="flex w-full mb-4 pl-4 mt-5">
                <button
                  className={`flex-1 py-4 font-serif bg-blue-400 text-white text-lg rounded-l-lg transition-colors hover:bg-blue-500 ${
                    isSignIn ? "bg-blue-600 font-bold" : ""
                  }`}
                  onClick={() => setIsSignIn(true)}
                >
                  Sign In
                </button>
                <button
                  className={`flex-1 py-4 font-serif bg-blue-400 text-white text-lg rounded-r-lg transition-colors hover:bg-blue-500 ${
                    !isSignIn ? "bg-blue-600 font-bold" : ""
                  }`}
                  onClick={() => setIsSignIn(false)}
                >
                  Sign Up
                </button>
              </div>
              {isSignIn ? (
                <SignIn
                  setUsername={setUsername}
                  email={email}
                  password={password}
                  setEmail={setEmail}
                  setPassword={setPassword}
                />
              ) : (
                <SignUp
                  username={username}
                  email={email}
                  password={password}
                  setUsername={setUsername}
                  setEmail={setEmail}
                  setPassword={setPassword}
                />
              )}
              <div className="text-black pl-4">
                <p>
                  ----------------------------or continue
                  with-------------------------------------
                </p>
                <div className="flex flex-row justify-between mt-2 gap-3 mb-3">
                  <button className="border-2 border-gray-300 bg-white p-4 rounded-lg font-semibold flex items-center gap-4">
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className="text-gray-500"
                    />
                    Google
                  </button>
                  <button className="border-2 border-gray-300 bg-white p-4 rounded-lg font-semibold flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-blue-500"
                    />
                    Facebook
                  </button>
                  <button className="border-2 border-gray-300 bg-white p-4 rounded-lg font-semibold flex items-center gap-5">
                    <FontAwesomeIcon icon={faApple} className="text-current" />
                    Apple
                  </button>
                </div>

                <p>
                  By creating an account, you agree to our{" "}
                  <span className="text-blue-400">Privacy policy</span> and
                  <span className="text-blue-400"> Terms of use.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <div className="absolute top-0 right-0 translate-x-[31px] translate-y-[37px]">
          <button
            onClick={onClose}
            className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
