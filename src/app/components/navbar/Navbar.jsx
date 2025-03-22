import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/logo.png";
import { FaFacebook, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src={logo}
              width={60}
              height={60}
              alt="logo"
              quality={100}
              placeholder="blur"
            />
          </Link>
        </div>

        {/* Navigation Links (Uncomment if needed) */}
        {/* <div className="space-x-6 hidden md:flex">
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/project" className="hover:text-gray-400">
            Project
          </Link>
        </div> */}

        {/* Icons Section */}
        <div className="flex justify-center md:justify-start gap-6 my-6">
          <a
            href="https://www.facebook.com/hasan.al.banna.nahid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-blue-500 hover:text-blue-700 transition-all duration-300 transform hover:scale-125"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/Hasan-Al-Banna-Nahid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-gray-300 hover:text-gray-500 transition-all duration-300 transform hover:scale-125"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/hasan-al-banna-84390b276/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-blue-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-125"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Mobile Navbar Toggle (Hamburger Menu) */}
      <div className="md:hidden flex justify-between items-center mt-4">
        <button className="text-white text-2xl">
          <i className="fa fa-bars"></i>{" "}
          {/* You can replace this with a custom hamburger icon */}
        </button>
      </div>
    </nav>
  );
}
