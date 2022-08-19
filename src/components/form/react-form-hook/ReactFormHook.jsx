import React from "react";
import { useForm } from "react-hook-form";
import InputHook from "../../input/InputHook";
import RadioHook from "../../radio/RadioHook";

export const ReactFormHook = () => {
  const {
    handleSubmit,
    control,
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
      autoComplete="off"
    >
      {/* User name */}
      <div className="flex flex-col gap-3 mb-5">
        <label
          className=" font-medium text-base cursor-pointer "
          htmlFor="username"
        >
          User name
        </label>
        <InputHook
          control={control}
          id="username"
          name="username"
          placeholder="Enter your username"
          type="text"
        ></InputHook>
        <p className="text-red-500 font-normal text-sm ">
          Please enter your username
        </p>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-3 mb-5">
        <label
          className=" font-medium text-base cursor-pointer "
          htmlFor="password"
        >
          Password
        </label>
        <InputHook
          control={control}
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        ></InputHook>
      </div>

      {/* Email address */}
      <div className="flex flex-col gap-3 mb-5">
        <label
          className=" font-medium text-base cursor-pointer "
          htmlFor="email"
        >
          Email address
        </label>
        <InputHook
          control={control}
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
        ></InputHook>
      </div>

      {/*  Gender */}
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="" className=" cursor-pointer ">
          Gender
        </label>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender"></RadioHook>
            <span className="cursor-pointer">Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender"></RadioHook>
            <span className="cursor-pointer">Female</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className=" p-3 bg-blue-500 rounded-lg w-full text-white font-semibold mt-5 "
      >
        Submit
      </button>
    </form>
  );
};
