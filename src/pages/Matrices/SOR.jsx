import React from "react";
import { ChangeEvent, useState } from "react";

const SOR = () => {

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
  <section className="container">
  <h2>SOR</h2>
  <form>
    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="function"
        type="text"
      />
      <label htmlFor="textbox">Function</label>
    </div>

    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="function"
        type="text"
      />
      <label htmlFor="textbox">a</label>
    </div>

    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="function"
        type="text"
      />
      <label htmlFor="textbox">b</label>
    </div>

    
    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="function"
        type="text"
      />
      <label htmlFor="textbox">Tolerance</label>
    </div>

    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="function"
        type="text"
      />
      <label htmlFor="textbox">Maximum number of iterations</label>
    </div>
    
    <input type="submit" value="Calculate" className="primary-button login-button" />
    </form>
  </section>

  );
};


export default SOR;