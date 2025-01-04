"use client";

import React, { useEffect, useState } from "react";

const GetValueFromLocalStorage: React.FC = () => {
  const [Value, setValue] = useState<string>("");
  const [newValue, setNewValue] = useState<string>("");
  useEffect(() => {
    const _Value = localStorage.getItem("Value");
    if (_Value) {
      setValue(_Value);
    }
  }, [Value]);
  return (
    <>
      <p>Local Storage Value:{Value}</p>
      <p>New Value:{newValue}</p>
      <input
        type="text"
        onChange={(e) => {
          localStorage.setItem("Value", e.target.value);
          setNewValue(e.target.value);
        }}
      />
    </>
  );
};
export default GetValueFromLocalStorage;
