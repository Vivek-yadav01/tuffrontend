import React, { useState } from "react";
import Header from "../header";

const Adminhome = () => {
  const [data, setData] = useState([
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
  ]);

  const [newQues, setNewQues] = useState("");
  const [newAns, setNewAns] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrEdit = () => {
    if (newQues.trim() === "" || newAns.trim() === "") {
      alert("Please fill both the question and answer fields.");
      return;
    }

    if (editId !== null) {
      const updatedData = data.map((item) =>
        item.id === editId ? { ...item, ques: newQues, ans: newAns } : item
      );
      setData(updatedData);
      setEditId(null);
    } else {
      const newEntry = {
        id: data.length + 1,
        ques: newQues,
        ans: newAns,
      };
      setData([...data, newEntry]);
    }

    setNewQues("");
    setNewAns("");
  };

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setNewQues(itemToEdit.ques);
    setNewAns(itemToEdit.ans);
    setEditId(id);
  };

  return (
    <>
      <Header />
      <div className="p-8">
        <div className="mb-12">
          <input
            type="text"
            placeholder="Enter question"
            value={newQues}
            onChange={(e) => setNewQues(e.target.value)}
            className="border border-red-600 p-2 mb-2 w-full text-black rounded-lg"
          />
          <input
            type="text"
            placeholder="Enter answer"
            value={newAns}
            onChange={(e) => setNewAns(e.target.value)}
            className="border border-red-600 p-2 w-full text-black rounded-lg"
          />
          <button
            onClick={handleAddOrEdit}
            className="bg-red-600 text-white px-4 py-2 mt-2 w-40 rounded-lg"
          >
            {editId !== null ? "Update Card" : "Add Card"}
          </button>
        </div>
        <h1 className="text-red-600 text-2xl font-bold mb-4">Your Cards</h1>
        <ul>
          {data.map((item) => (
            <li key={item.id} className="mb-4">
              <div className="border border-red-600 p-4 rounded-lg">
                <h2 className="text-lg font-bold text-red-600 rounded-lg">
                  {item.ques}
                </h2>
                <p>{item.ans}</p>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-red-600 text-white px-2 py-1 mt-2 mr-2 rounded-lg w-20"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 text-white px-2 py-1 mt-2 rounded-lg w-20"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Adminhome;
