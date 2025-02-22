"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
     router.push('/dashboard');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gray-500 bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="font-sans text-5xl md:text-6xl font-bold flex">Welcome to&nbsp;<p className="text-cyan-600"> Studify</p></h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
        Studify is your AI-powered study companion, offering personalized notes, flashcards and more. 
        </p>
        <div className="mt-6">
          <button
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-lg font-medium"
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
