import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name });
  return (
    <input
      type="text"
      id="userName"
      placeholder="Enter your user name"
      className="p-4 rounded-lg bg-white border border-gray-100 transition-all outline-none focus:border-blue-500"
      {...field}
      {...props}
    />
  );
};

export default InputHook;
