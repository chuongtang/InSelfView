import React, {useState} from "react";
import questionsList from "./questionBank.json";
// import { Button, Container, Form } from "react-bootstrap";

const Questions = () => {
  const [category, setCategory] = useState("Select question Category for recording");
  const [question, setQuestion] = useState("");

  const handleChangeQues = (event) => {
    setQuestion(random_question());
  };

  const RandArray = (array) => array[(Math.random() * array.length) | 0];

  const random_question = () => {
    if (category === "Select question Category for recording") {
      return (
        <div class="alert alert-secondary alert-dismissible fade show">
                   Please select a category prior to generating questions.
        </div>
      );

      // return alert("Please select a category 👇");
    } else {
      let randomly_generated_question = RandArray(questions[category]);
      return randomly_generated_question;
    }
  };

  const QuestionStyle = {
    fontStyle: "italic",
    fontSize: "1.25rem",
    color: "black",
    textShadow: "0.05rem 0.05rem grey",
  };

  return (
    <div style={{ width: "inherit" }}>
      <form.Select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        aria-label="Default select example"
      >
        <option>Select question Category for recording</option>
        {Object.keys(questionsList).map((category) => (
          <option value={category}>{category}</option>
        ))}
      </form.Select>

      <button  className="my-4" variant="secondary" onClick={handleChangeQues}>
        Generate Random Questions
      </button>
      <div style={QuestionStyle}> {question} </div>
    </div>
  );
};
export default Questions;