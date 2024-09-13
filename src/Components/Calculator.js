import React, { useState } from "react";
// import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
      setInput((prevInput) => prevInput + value);
  };

  // function handleClick(value) {
  //   setInput(function (prevInput) {
  //     return prevInput + value;
  //   });
  // }

  const clearInput = () => {
    setInput("");
    setResult(""); 
  };

  const calculateResult = () => {
    try {
      if(input === "") {
        setResult("Error");
        return;
      }
      let evalResult = eval(input);
      if(isNaN(evalResult)){
        setResult("NaN");
      }else if(!isFinite(evalResult)) {
        setResult("Infinity");
      } else {
        setResult(evalResult.toString());
        setInput(evalResult.toString());
      }
    } catch(error) {
      setResult("Error");
    }

  };

  return (
    <div style={containerStyle}>
      <div style={styles}>
      <h1> React Calculator</h1>
      <input type="text" value={input} />
      <div className="result">{result}</div>
      <div>
        <button onClick={() => handleClick("7")}  style={buttonStyle}>7</button>
        <button onClick={() => handleClick("8")}  style={buttonStyle}>8</button>
        <button onClick={() => handleClick("9")}  style={buttonStyle}>9</button>
        <button onClick={() => handleClick("/")}  style={buttonStyle}>/</button>

        <button onClick={() => handleClick("4")}  style={buttonStyle}>4</button>
        <button onClick={() => handleClick("5")}  style={buttonStyle}>5</button>
        <button onClick={() => handleClick("6")}  style={buttonStyle}>6</button>
        <button onClick={() => handleClick("*")}  style={buttonStyle}>*</button>

        <button onClick={() => handleClick("1")}  style={buttonStyle}>1</button>
        <button onClick={() => handleClick("2")}  style={buttonStyle}>2</button>
        <button onClick={() => handleClick("3")}  style={buttonStyle}>3</button>
        <button onClick={() => handleClick("-")}  style={buttonStyle}>-</button>

        <button onClick={() => handleClick("0")}  style={buttonStyle}>0</button>
        <button onClick={clearInput}  style={buttonStyle}>C</button>
        <button onClick={calculateResult}  style={buttonStyle}>=</button>
        <button onClick={() => handleClick("+")}  style={buttonStyle}>+</button>
      </div>
    </div>

    </div>
    
  );

}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f0f0f0",
};

const styles = {
  border: "2px solid #000",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px 2px #ccc",
  width: "300px",
  textAlign: "center",
  justifycontent: "center",

};

const buttonStyle = {
  width: "60px",
  height: "60px",
  fontSize: "18px",
  margin: "5px",
  cursor: "pointer",
};

export default Calculator;