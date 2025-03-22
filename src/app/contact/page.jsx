"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaFacebookF, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import nahid from "@/../public/nahid.png";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    try {
      const response = await fetch(
        "https://mail-frx4gc41h-iamnahid591998gmailcoms-projects.vercel.app/send-mail",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const result = await response.json();
      if (result) {
        alert("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-6 py-12">
      {/* Heading & Image */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-5xl">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Get in touch with me via social media <br /> or send me an email.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 my-6">
            <a
              href="https://www.facebook.com/hasan.al.banna.nahid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-blue-500 hover:text-blue-700 transition-all duration-300 transform hover:scale-125"
            >
              <FaFacebookF />
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

        {/* Profile Image */}
        <div>
          <Image
            src={nahid}
            alt="Nahid"
            width={350}
            height={350}
            className="rounded-full border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 w-full max-w-4xl bg-gray-900 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold text-center bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text mb-6">
          Send Me a Message
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-3 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-3 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here..."
              className="p-3 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white py-3 px-6 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Send Mail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
