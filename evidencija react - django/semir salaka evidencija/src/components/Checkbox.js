import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange }) => (
  <div className="">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className=""
      />
      {label}
    </label>
  </div>
);

export default Checkbox
