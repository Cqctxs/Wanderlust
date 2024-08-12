"use client";

import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#252323] text-wh p-10">
        <div className="flex justify-center space-x-8">
            <a
            href="#our-team"
            className="rounded-full bg-[#FF6128] px-8 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
            >
            Our Team
            </a>
            <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
            >
            Github
            </a>
            <a
            href="#contact"
            className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
            >
            Contact Us
            </a>
            <a
            href="#other"
            className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
            >
            Back to Top
            </a>
        </div>
    </div>
  )
}

export default Footer;