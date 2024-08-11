import React, { useState } from "react";
import "./card.css"; // Import the CSS file

const Card = ({ item }) => {
  // State to track if the card is flipped

  const [isFlipped, setIsFlipped] = useState(false);

  // Function to handle the flip action
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`w-[200px] h-[300px] perspective-1000 m-4`}>
      <div
        className={`w-full h-full relative transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 w-full h-full bg-white flex items-center justify-center rounded-lg backface-hidden">
          <p className="text-center text-gray-800">{item.ques}</p>
        </div>
        <div className="absolute inset-0 w-full h-full bg-red-100 flex items-center justify-center rounded-lg backface-hidden rotate-y-180">
          <p className="text-center text-red-600">{item.ans}</p>
        </div>
      </div>
      <div className="flex justify-center m-2">
        <span>
          <button
            onClick={handleFlip}
            class="flex items-center gap-x-2 border-2 rounded-lg px-8 py-2.5 border-red-600 h-12"
          >
            <span class="text-[16px] text-red-600 font-medium">{"Flip"}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="text-red-600 fill-current w-4"
            >
              <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32l0 32L160 64C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160z" />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card;
