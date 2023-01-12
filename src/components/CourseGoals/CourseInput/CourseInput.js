import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isChange, setIsChange] = useState(true);
  

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
      setIsChange(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setIsChange(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label 
        // style={{ color: !isValid ? "red" : "black" }}
        >Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
        <Button onIsChange = {isChange} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// style={{
//   backgroundColor: !isValid ? "salmon" : "transparent",
//   borderColor: !!isValid ? "2px solid red" : "black"
// }}