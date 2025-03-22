import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import redrose from "@/../public/rr.png";
import thareja from "@/../public/tr.png";

const RecentProjects = () => {
  return (
    <div className="mt-16 w-full flex justify-center my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Project 1 Card */}
        <div className="max-w-lg rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-500 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-500">
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={redrose} // Add the correct path to your image
              alt="Project 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            Project 1 - Red-Rose-BD
          </h3>
          <p className="text-gray-300 mb-4 text-lg">
            A responsive and scalable Ed-Tech platform built with Next.js,
            Express.js, MongoDB, Laravel, and MySQL.
          </p>
          <a
            href="https://redrosebd.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline transition duration-300"
          >
            View Live Site
          </a>
        </div>

        {/* Project 2 Card */}
        <div className="max-w-lg rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white p-6 transform hover:scale-105 hover:shadow-2xl transition-transform duration-500 hover:bg-gradient-to-br hover:from-green-600 hover:to-yellow-400">
          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
            <Image
              src={thareja} // Add the correct path to your image
              alt="Project 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
            Project 2 - Freelancing Site
          </h3>
          <p className="text-gray-300 mb-4 text-lg">
            A Freelance MarketPlace Under Development,built with Next.js,
            Express.js, MongoDB, and PostgreSQL
          </p>
          <a
            href="https://main.d2iyv1nj0eamw0.amplifyapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline transition duration-300"
          >
            View Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
