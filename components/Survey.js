"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Survey = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log("Form submitted", data);
    redirect("/survey");
  };
  return (
    <div className=" w-1/3 border border-solid border-black mx-auto my-5 bg-slate-700">
      <div className="flex flex-col p-2 justify-center gap-y-3 max-w-[450px] mx-auto">
        <div>
          <h2 className=" text-pink-300">
            Fill out the form to create a poll for the Magnet owners.
          </h2>
        </div>
        <div>
          <h2 className=" text-white">Poll Name</h2>
          <input
            type="text"
            placeholder="Enter the name of the poll"
            className=" p-2 w-80 rounded-md bg-slate-700 border border-solid border-white"
          />
        </div>
        <div className=" bg-slate-700 w-80">
          <form
            className="space-y-4 md:space-y-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className=" flex flex-col bg-slate-600 rounded-md shadow-inner p-2 space-y-4">
              <div>
                <label htmlFor="question 1" className=" text-white">
                  Question 1
                </label>
                <input
                  type="text"
                  placeholder="Enter your poll question here"
                  className=" w-72 border border-solid border-white rounded-md bg-slate-700 p-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter choice 1"
                  className=" w-72 border border-solid border-white rounded-md bg-slate-700 p-2"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter choice 2"
                  className=" w-72 border border-solid border-white rounded-md bg-slate-700 p-2"
                />
              </div>
              <div className=" flex justify-center">
                <button className=" w-10 h-10 items-center text-xl rounded-full text-white bg-pink-300">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <button className=" w-52 h-10 items-center text-xl rounded-full text-white bg-pink-300">
                + Add New Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Survey;
