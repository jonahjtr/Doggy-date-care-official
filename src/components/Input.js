import React from "react";

const Input = (props) => {
  const { label, type, id, value, onChange } = props;
  return (
    <div>
      <label>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
