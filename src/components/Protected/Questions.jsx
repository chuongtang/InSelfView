import React, { useState } from "react";
import questionsList from "./questionBank.json";
// import { Button, Container, Form } from "react-bootstrap";

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
    <div className="text-base sm:text-3xl" >
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        aria-label="Default select example"
        className="mx-auto mt-4 text-gray-500 text-base bg-blue-100 rounded-xl"
      >
        <option>Select Category for random questions</option>
        {Object.keys(questionsList).map((category) => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>

      <button className="flex items-center justify-between p-2 my-8 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 group" onClick={handleChangeQues}>
        <span className="text-base font-medium group-hover:text-white">
          Generate random question
        </span>

        <span
          className="flex-shrink-0 p-2 ml-4 bg-white border border-blue-600 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </button>
      <blockquote className="mx-auto text-gray-500 text-shadow-lg text-base">
        {question}
      </blockquote>
    </div>
  )
}
export default Questions;