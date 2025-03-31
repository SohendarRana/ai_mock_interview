"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen">
      {/* Full-Screen Background */}
      <Image
        src="/Background.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0"
      />

      {/* Centered Home Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/home.jpg"
          alt="Home"
          width={650}
          height={650}
          objectFit="contain"
          className="shadow-lg rounded-lg"
        />
      </div>

      {/* Left Section - Welcome Text */}
      <div className="absolute top-1/3 left-10 max-w-md">
        <h1 className="text-4xl font-bold mb-3 text-black tracking-widest drop-shadow-lg">
          Welcome
        </h1>
        <p className="text-md font-semibold text-black opacity-80 bg-white/50 px-4 py-2 rounded-lg shadow-md">
          Click on the 'Dive in' to begin!
        </p>
      </div>

      {/* Right Section - Dive In Button */}
      <div className="absolute top-1/2 right-10">
        <button
          onClick={() => router.push("/dashboard")}
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-700 text-white text-lg font-bold rounded-full shadow-lg hover:scale-110 transition-all hover:shadow-2xl tracking-wide border-2 border-white"
        >
          🚀 Dive In
        </button>
      </div>
    </div>
  );
}
