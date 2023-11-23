import React from "react";
// import "./Common.css";

const Dropdown = (props) => {
  return (
    <div>
      <label
        className="inputLabel"
        style={{ display: !props.label ? "none" : "block" }}
      >
        {props.label || ""}
        {props.validate && <span className="common_star_color">*</span>}
      </label>
      <label className="common_select_option_value">
        <select
          id={props.id || ""}
          style={props.style}
          value={props.value}
          onChange={props.onChange}
          disabled={props.disabled || false}
        >
          {props.options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;