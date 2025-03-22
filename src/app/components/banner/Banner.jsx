import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import nahid from "@/../public/nahid.png";

export default function Banner() {
  return (
    <div className="bg-gray-900 text-white p-6 shadow-lg w-full h-screen flex justify-center items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
        {/* Left Section - Tech Icons in Grid */}
        <div className="grid grid-cols-4 md:grid-cols-3 gap-6 text-4xl md:text-5xl animate-fade-in-out">
          <FaReact className="text-blue-500 animate-pulse" />
          <SiNextdotjs className="text-white animate-bounce" />
          <FaNodeJs className="text-green-500 animate-pulse" />
          <SiExpress className="text-gray-500 animate-spin" />
          <SiJavascript className="text-yellow-300 animate-bounce" />
          <SiTypescript className="text-blue-400 animate-pulse" />
          <SiFirebase className="text-orange-500 animate-bounce" />
          <SiRedux className="text-purple-500 animate-spin" />
          <SiMongodb className="text-green-600 animate-pulse" />
          <SiTailwindcss className="text-teal-400 animate-bounce" />
        </div>

        {/* Middle Section - Larger Animated Image Placeholder */}
        <div className="w-full h-full bg-gray-700 rounded-full flex justify-center items-center relative group overflow-hidden">
          <Image
            src={nahid}
            width={1000}
            height={700}
            alt="nahid"
            className="transition-transform duration-500 group-hover:scale-110 group-hover:opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
        </div>

        {/* Right Section - Coder Title with Glow Effect */}
        <div className="text-center animate-fade-in-out">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-glow">
            &lt;Coder&gt;
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl animate-fade-in">
            Full Stack Developer Who Writes Code Efficient, Clean, Elegant
          </p>
        </div>
      </div>
    </div>
  );
}
