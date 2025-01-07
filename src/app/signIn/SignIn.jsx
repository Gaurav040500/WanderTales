import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SignIn = ({ setUsername, email, password, setEmail, setPassword }) => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login functionality
  };

  const handleKeyDownForLogin = (e) => {
    // Handle keydown events if needed
  };

  return (
    <div className="flex flex-col items-center text-black">
      {/* <h3 className="text-black font-serif text-xl">
        Discover the Joy of Travelling on <strong>WanderTales</strong>!
      </h3> */}
      <br />
      <div className="relative mb-4 w-full max-w-[400px]">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          className="w-full pl-10 py-2 border border-gray-300 rounded focus:border-blue-500 text-black"
          value={email}
          placeholder="Enter your Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative mb-4 w-full max-w-[400px]">
        <FontAwesomeIcon
          icon={faLock}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
        <input
          type="password"
          className="w-full pl-10 py-2 border border-gray-300 rounded focus:border-blue-500 text-black"
          value={password}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDownForLogin}
        />
      </div>
      <div className=" text-lg text-gray-300 cursor-pointer hover:text-gray-700">
        <span>Forgot Password?</span>
      </div>
      <button
        className="py-2 px-5 w-full max-w-[400px] border-none rounded bg-blue-600 text-white font-bold cursor-pointer hover:bg-blue-700"
        onClick={handleLogin}
      >
        Log in
      </button>
      {/* <h4 className="text-black m-6">
        Take only memories, leave only footprints
      </h4> */}
    </div>
  );
};

export default SignIn;
