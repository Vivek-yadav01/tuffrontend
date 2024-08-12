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
    <div
      onClick={handleFlip}
      className={`w-[250px] h-[350px] perspective-1000 m-4 `}
    >
      <div
        className={`w-full h-full relative transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-500 to-gray-800 flex items-center justify-center rounded-lg backface-hidden shadow-xl  ">
          <div className="absolute top-[-2.0rem] right-[-2.2rem]  text-white text-lg font-bold px-2 py-1 rounded-lg">
            {
              <svg
                fill="#f00"
                height="50px"
                width="50px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 31.891 31.891"
              >
                <g>
                  <path d="M30.543,5.74l-4.078-4.035c-1.805-1.777-4.736-1.789-6.545-0.02l-4.525,4.414c-1.812,1.768-1.82,4.648-0.02,6.424   l2.586-2.484c-0.262-0.791,0.061-1.697,0.701-2.324l2.879-2.807c0.912-0.885,2.375-0.881,3.275,0.01l2.449,2.42   c0.9,0.891,0.896,2.326-0.01,3.213l-2.879,2.809c-0.609,0.594-1.609,0.92-2.385,0.711l-2.533,2.486   c1.803,1.781,4.732,1.789,6.545,0.02l4.52-4.41C32.34,10.396,32.346,7.519,30.543,5.74z" />
                  <path d="M13.975,21.894c0.215,0.773-0.129,1.773-0.752,2.381l-2.689,2.627c-0.922,0.9-2.414,0.895-3.332-0.012l-2.498-2.461   c-0.916-0.906-0.91-2.379,0.012-3.275l2.691-2.627c0.656-0.637,1.598-0.961,2.42-0.689l2.594-2.57   c-1.836-1.811-4.824-1.82-6.668-0.02l-4.363,4.26c-1.846,1.803-1.855,4.734-0.02,6.549l4.154,4.107   c1.834,1.809,4.82,1.818,6.668,0.018l4.363-4.26c1.844-1.805,1.852-4.734,0.02-6.547L13.975,21.894z" />
                  <path d="M11.139,20.722c0.611,0.617,1.611,0.623,2.234,0.008l7.455-7.416c0.621-0.617,0.625-1.615,0.008-2.234   c-0.613-0.615-1.611-0.619-2.23-0.006l-7.457,7.414C10.529,19.103,10.525,20.101,11.139,20.722z" />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
              </svg>
            }
          </div>
          <p className="text-center text-white text-2xl font-bold lilita-one-regular">
            {item.ques}
          </p>
        </div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-500 to-gray-800 flex items-center justify-center rounded-lg backface-hidden rotate-y-180 shadow-2xl transform  transition-transform duration-300 ease-out border border-gray-300">
          <div className="absolute top-[-2.0rem] left-[-2.2rem] text-white text-lg font-bold px-2 py-1 rounded-lg">
            {
              <svg
                fill="#f00"
                height="50px"
                width="50px"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 31.891 31.891"
                className="rotate-y-180"
              >
                <g>
                  <path d="M30.543,5.74l-4.078-4.035c-1.805-1.777-4.736-1.789-6.545-0.02l-4.525,4.414c-1.812,1.768-1.82,4.648-0.02,6.424   l2.586-2.484c-0.262-0.791,0.061-1.697,0.701-2.324l2.879-2.807c0.912-0.885,2.375-0.881,3.275,0.01l2.449,2.42   c0.9,0.891,0.896,2.326-0.01,3.213l-2.879,2.809c-0.609,0.594-1.609,0.92-2.385,0.711l-2.533,2.486   c1.803,1.781,4.732,1.789,6.545,0.02l4.52-4.41C32.34,10.396,32.346,7.519,30.543,5.74z" />
                  <path d="M13.975,21.894c0.215,0.773-0.129,1.773-0.752,2.381l-2.689,2.627c-0.922,0.9-2.414,0.895-3.332-0.012l-2.498-2.461   c-0.916-0.906-0.91-2.379,0.012-3.275l2.691-2.627c0.656-0.637,1.598-0.961,2.42-0.689l2.594-2.57   c-1.836-1.811-4.824-1.82-6.668-0.02l-4.363,4.26c-1.846,1.803-1.855,4.734-0.02,6.549l4.154,4.107   c1.834,1.809,4.82,1.818,6.668,0.018l4.363-4.26c1.844-1.805,1.852-4.734,0.02-6.547L13.975,21.894z" />
                  <path d="M11.139,20.722c0.611,0.617,1.611,0.623,2.234,0.008l7.455-7.416c0.621-0.617,0.625-1.615,0.008-2.234   c-0.613-0.615-1.611-0.619-2.23-0.006l-7.457,7.414C10.529,19.103,10.525,20.101,11.139,20.722z" />
                </g>
              </svg>
            }
          </div>
          <p className="text-center text-white text-3xl font-bold lilita-one-regular">
            {item.ans}
          </p>
        </div>
      </div>
      <div className="flex justify-center m-2">
        <button
          onClick={handleFlip}
          className="flex items-center gap-x-2 border-2 rounded-lg px-6 py-2 border-red-600 h-12 text-red-600 font-medium hover:bg-red-600 hover:text-white transition-colors duration-300"
        >
          <span className="text-[16px]">Flip</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-current w-4"
          >
            <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96l160 0 0 32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32l0 32L160 64C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96l-160 0 0-32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-32 160 0c88.4 0 160-71.6 160-160z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
