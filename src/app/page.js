"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const [yesText, setYesText] = useState("Yes");
  const [yesSize, setYesSize] = useState(16);
  const [clickCount, setClickCount] = useState(0);

  const textOptions = [
    "Please?",
    "Please say yes",
    "Please, I really mean it",
    "Ella, Please ooo 🥲",
    "Just say yes already!",
    "I'll make it worth your while!",
    "I can keep going you know."
  ];

  const handleNoClick = () => {
    // Increase the size of Yes button and change its text
    setYesSize(yesSize + 8);
    if (clickCount < textOptions.length) {
      setYesText(textOptions[clickCount]);
      setClickCount(clickCount + 1);
    } else {
      setYesText("There's a surprise for you when you click yes 🥰 ");
    }
  };

  const yesButtonStyle = {
    fontSize: `${yesSize}px`,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-back bg-cover">
      <h1 className="text-5xl font-bold text-center mb-8">Will You Be My Valentine Immanuella?</h1>
      <div className="flex space-x-4">
        <button onClick={handleNoClick} className="py-2 px-4 rounded-lg bg-red-500 text-white hover:scale-105">No</button>
        <Link href="/dinner-date">
          <button style={yesButtonStyle} className="py-2 px-4 rounded-lg bg-blue-500 text-white hover:scale-105">{yesText}</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;