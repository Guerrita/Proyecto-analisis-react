import React from "react";
import { ChangeEvent, useState } from "react";

const IncrementalSearch = () => {

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
  <section className="container">
  <h2>Incremental Search</h2>
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
      <label htmlFor="textbox">X<span className="subindex">0</span></label>
    </div>

    <div className="md-textbox">
      <input
        onChange={handleChange}
        className={`${value ? "has-value" : ""}`}
        id="function"
        type="text"
      />
      <label htmlFor="textbox">Δ<span className="subindex">x</span></label>
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


export default IncrementalSearch;