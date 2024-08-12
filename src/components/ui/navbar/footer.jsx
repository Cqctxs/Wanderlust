"use client";

import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#252323] text-wh p-10">
        <div className="flex justify-center space-x-8">
            <a
            href="https://gemini.google.com/"
            className="rounded-full bg-[#FF6128] px-8 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
            >
            Gemini AI
            </a>
            <a
            href="https://github.com/Cqctxs/Client-GADC"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
            >
            View on Github
            </a>
            <a
            href="mailto:itsaveryleee@gmail.com"
            className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
            >
            Contact Us
            </a>
            <a
            href="/plan"
            className="rounded-full bg-[#FF6128] px-6 py-3 text-lg font-medium transition duration-100 ease-in-out hover:bg-[#2176FF] transform hover:scale-105"
            >
            Back to Top
            </a>
        </div>
    </div>
  )
}

export default Footer;