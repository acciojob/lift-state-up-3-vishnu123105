
import React from "react";
import './../styles/App.css';
import { useState } from "react";

  const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const ChildComponent1 = ({ onSelect }) => {
    return (
      <div className="child">
        <h2>Child Component 1</h2>
        <button onClick={() => onSelect("Option 1")}>Option 1</button>
       </div>
    );
  };
  const ChildComponent2 = ({ onSelect }) => {
    return (
      <div className="child1">
        <h2>Child Component 2</h2>
        <button onClick={() => onSelect("Option 2")}>Option 2</button>
      </div>
    );
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent1 onSelect={handleOptionSelect} />
      <ChildComponent2 onSelect={handleOptionSelect} />
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default App
