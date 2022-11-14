import React from "react";
import { ChangeEvent, useState } from "react";

const NewtonInterpolation = () => {

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
  <section className="container">
  <h2>Newton Interpolation</h2>
  <form>

    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="function"
        type="text"
      />
      <label htmlFor="textbox">X Values</label>
    </div>

    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="function"
        type="text"
      />
      <label htmlFor="textbox">Y Values</label>
    </div>
    
    <input type="submit" value="Calculate" className="primary-button login-button" />
    </form>
  </section>

  );
};


export default NewtonInterpolation;