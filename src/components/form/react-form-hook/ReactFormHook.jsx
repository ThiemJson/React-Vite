import React from "react";
import { useForm } from "react-hook-form";

export const ReactFormHook = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (values) => {
    console.log(
      "🚀 ~ file: ReactFormHook.jsx ~ line 12 ~ onSubmitHandler ~ values",
      values
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className=" max-w-[300px] mx-auto mt-5 "
    >
      <div className="flex flex-col gap-3">
        <label
          className=" font-medium text-base cursor-pointer "
          htmlFor="userName"
        >
          User name
        </label>
        <input
          type="text"
          id="userName"
          placeholder="Enter your user name"
          className="p-4 rounded-lg bg-white border border-gray-100 transition-all outline-none focus:border-blue-500"
        />
        <p className="text-red-500 font-normal text-sm ">
          Please enter your username
        </p>
      </div>
    </form>
  );
};
