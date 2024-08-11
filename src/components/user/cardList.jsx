import React, { useEffect, useState } from "react";
import Card from "./card";

const CardList = () => {
  const data = [
    {
      id: 1,
      ques: "What is an array?",
      ans: "An array is a linear data structure.",
    },
    {
      id: 2,
      ques: "What is a Linked List?",
      ans: "A Linked List is a linear data structure with dynamic memory allocation.",
    },
    {
      id: 3,
      ques: "What is a tree?",
      ans: "A tree is a non-linear data structure.",
    },
  ];
  const [curr, setCurr] = useState(data[0]);
  const [ind, setInd] = useState(0);
  const handleLeft = () => {
    setInd((prevInd) => (prevInd > 0 ? prevInd - 1 : data.length - 1));
  };

  const handleRight = () => {
    setInd((prevInd) => (prevInd < data.length - 1 ? prevInd + 1 : 0));
  };

  useEffect(() => {
    setCurr(data[ind]);
  }, [ind]);
  return (
    <>
      {" "}
      <div className="flex flex-col justify-around h-full">
        <div className="flex justify-around mt-auto">
          <button
            onClick={handleLeft}
            className="flex items-center gap-x-2 bg-red-600 text-white px-4 py-2 rounded-lg h-12 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 self-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 fill-current"
            >
              <path d="M177.5 414c-8.8 3.8-19 2-26-4.6l-144-136C2.7 268.9 0 262.6 0 256s2.7-12.9 7.5-17.4l144-136c7-6.6 17.2-8.4 26-4.6s14.5 12.5 14.5 22l0 72 288 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-288 0 0 72c0 9.6-5.7 18.2-14.5 22z" />
            </svg>
          </button>

          <div className="flex flex-wrap justify-around ">
            <Card key={ind} item={curr} />
          </div>

          <button
            onClick={handleRight}
            className="flex items-center gap-x-2 bg-red-600 text-white px-4 py-2 rounded-lg h-12 hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 self-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-4 fill-current"
            >
              <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardList;
