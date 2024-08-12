import React, { useEffect, useState } from "react";
import Header from "../header";
import axios from "axios";

const Adminhome = () => {
  const [data, setData] = useState([]);
  const [newQues, setNewQues] = useState("");
  const [newAns, setNewAns] = useState("");
  const [editId, setEditId] = useState(null);

  // Function to fetch data from the backend
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/data`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddOrEdit = () => {
    if (newQues.trim() === "" || newAns.trim() === "") {
      alert("Please fill both the question and answer fields.");
      return;
    }

    if (editId !== null) {
      // Update existing entry
      axios
        .put(`${process.env.REACT_APP_API_URL}/data/${editId}`, {
          ques: newQues,
          ans: newAns,
        })
        .then(() => {
          fetchData(); // Refetch data to update the UI
          setEditId(null);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
          setEditId(null);
        });
    } else {
      // Add new entry
      axios
        .post(`${process.env.REACT_APP_API_URL}/data`, {
          ques: newQues,
          ans: newAns,
        })
        .then(() => {
          fetchData(); // Refetch data to update the UI
        })
        .catch((error) => {
          console.error("Error adding data:", error);
        });
    }

    setNewQues("");
    setNewAns("");
  };

  const handleDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/data/${id}`)
      .then(() => {
        fetchData(); // Refetch data to update the UI
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleEdit = (id) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
              <div className="border border-white-600 p-4 rounded-lg">
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
