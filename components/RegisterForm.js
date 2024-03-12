"use client";
import InputField from "@/components/InputField";
import supabase from "@/config/SupabaseClient";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FcGoogle } from "react-icons/fc";
import { FaEyeLowVision } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const schema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid Email",
    }),
    Createpassword: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    ConfirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      Createpassword: "",
      ConfirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  async function handleSignInWithOAuth(formData) {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.Createpassword,
    });
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-serif  dark:text-whiteq"
        >
          SURVEYOR
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
              Create your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputField
                label="Email"
                id="email"
                type="email"
                register={register}
                placeholder="Enter your email address ..."
                errorMessage={errors?.email?.message}
              />
              <div className=" relative">
                <InputField
                  label="Create Password"
                  id="Createpassword"
                  type={showPassword ? "text" : "password"}
                  register={register}
                  placeholder="••••••••"
                  errorMessage={errors?.Createpassword?.message}
                />
                {showPassword ? (
                  <IoMdEye
                    className=" absolute right-2 top-10 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeLowVision
                    className=" absolute right-2 top-10 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <div className="relative">
                <InputField
                  label="Confirm Password"
                  id="ConfirmPassword"
                  type={showPassword ? "text" : "password"}
                  register={register}
                  placeholder="••••••••"
                  errorMessage={errors?.ConfirmPassword?.message}
                />
                {showPassword ? (
                  <IoMdEye
                    className=" absolute right-2 top-10 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaEyeLowVision
                    className=" absolute right-2 top-10 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              <button
                type="submit"
                onClick={handleSubmit(handleSignInWithOAuth)}
                className="w-full text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <div className="flex items-center justify-between space-x-2 ">
                <hr className="w-full" />
                <p className=" uppercase text-center text-sm text-black ">OR</p>
                <hr className="w-full" />
              </div>
              <div className="flex justify-center">
                <FcGoogle
                  onClick={handleSignInWithOAuth}
                  className="hover:bg-slate-100 rounded-full text-xl cursor-pointer"
                />
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already Register?{" "}
                <Link
                  href="/sign-in"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
