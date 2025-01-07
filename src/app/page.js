"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignInPage from "./signIn/page";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const router = useRouter();

  const handleSignIn = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="relative">
      <Image
        src="/landing.jpeg"
        alt="Landing Image"
        width={1920}
        height={1080}
        className="w-full h-[50vh] object-cover"
      />
      <button
        className="bg-blue-500 border-4 text-white border-green-500 px-4 py-2 rounded mt-4"
        onClick={handleSignIn}
      >
        Sign In Button
      </button>

      <div className="absolute top-10 left-10">
        <h1 className="font-bold text-black text-5xl">
          "Where Your Journey
          <br /> Inspires Others"
        </h1>
        <p className="font-medium text-white w-1/2 text-lg mt-4">
          "Share your travel stories, tips, and experiences to guide and inspire
          a global community of explorers."
        </p>
      </div>
      <div className="mt-20 text-center">
        <h3 className="text-black">"Building India's No.1 Travel Community"</h3>
        <p className="text-gray-500 mt-4">
          "Bringing Together Indian Travelers to Share Stories, Discover Hidden
          Gems, and Inspire Every Journey"
        </p>
      </div>

      {/* Show the modal if it's open */}
      {isModalOpen && <SignInPage onClose={closeModal} />}
    </div>
  );
}
