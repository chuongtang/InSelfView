import React, { useState } from "react";
import questionsList from "./questionBank.json";

const Questions = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");

  const handleChangeQues = (event) => {
    setQuestion(random_question());
  };

  const RandArray = (array) => array[(Math.random() * array.length) | 0];

  const random_question = () => {
    if (category === "") {
      return (
        <div
          className="p-4 text-red-700 border rounded border-red-900/10 bg-red-50"
          role="alert"
        >
          <strong className="text-sm font-medium"> Please select a Category </strong>
        </div>
      )
    } else {
      let randomly_generated_question = RandArray(questionsList[category]);
      return randomly_generated_question;
    }
  };


  return (
    <div className="my-8 text-gray-600" >
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        aria-label="Default select example"
        className="mx-auto mt-4 p-4 text-gray-500 text-base bg-gray-200 rounded-lg"
      >
        <option>Select Category for mock interview</option>
        {Object.keys(questionsList).map((category) => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
      <button className="block w-full mt-6 mb-16 py-3 px-6 text-center rounded-xl transition bg-blue-200 hover:bg-blue-100 active:bg-blue-300 focus:bg-blue-100 sm:w-max" onClick={handleChangeQues}>
        Generate random question
      </button>

      <blockquote className="mx-auto text-gray-500 text-shadow-lg text-base">
        {question}
      </blockquote>
  
    </div>
  )
}
export default Questions;