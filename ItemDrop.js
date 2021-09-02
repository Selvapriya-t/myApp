import React from "react";

const invest = [
  ["X-rayW", "X-ray"],
  ["MRI", "MRI"],
  ["Blood Test", "Blood Test"]
];

const ItemDrop = ({ label, ...others }) => (
  <>
    <label>{label}</label>
    <select {...others}>
      {invest.map(([value, name]) => (
        <option value={value}>{name}</option>
      ))}
    </select>
  </>
);

export default ItemDrop;