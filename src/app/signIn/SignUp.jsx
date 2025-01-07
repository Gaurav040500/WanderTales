import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SignUp = ({ username, setUsername, email, password, setEmail, setPassword }) => {
    function handleRegister(){
        alert("registered");
    }
  return (
    <div>
      <div className="flex flex-col items-center ">
        {/* <h3 className="text-black m-2 font-serif text-xl">Please enter your personal details below:</h3><br/> */}
        <h3 className="text-2xl font-normal m-4 text-black pl-2">
                Join India’s biggest travel community
              </h3>
        <div className="relative mb-4 w-full max-w-[400px]">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            className="w-full pl-10 py-2 text-black border border-gray-300 rounded focus:border-blue-500"
            value={username}
            placeholder="Enter the User Name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="relative mb-4 w-full max-w-[400px]">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 "
          />
          <input
            type="email"
            className="w-full pl-10 py-2 border border-gray-300 rounded focus:border-blue-500 text-black"
            value={email}
            placeholder="Enter your Email-id"
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
            // onKeyDown={handleKeyDownForRegistration}
          />
        </div>
        <button
          className="py-2 px-5 w-full max-w-[400px] border-none rounded bg-blue-600 text-white font-bold cursor-pointer hover:bg-blue-700"
          onClick={handleRegister}
        >
          Register
        </button>
        <h4>Start your Journey with us</h4>
      </div>
    </div>
  );
};

export default SignUp;
