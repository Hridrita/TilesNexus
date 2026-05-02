"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { toast } from "react-toastify";

const loginPage = () => {
    const handleGoggleSignIn = async() =>{
        const data = await authClient.signIn.social({
    provider: "google",
  });

    }

    const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = async (value) => {
    console.log(value);
    console.log(errors);

    const { email, password } = value;

    const { data, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });

    if(data){
        toast.success("Login Successful...!")
    }

    if(error){
        toast.error("Please register first or use proper registered information")
    }
  };
  return (
    <div className="container mx-auto min-h-[85vh] flex justify-center items-center px-4">
      <div className="card bg-white w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden">
        <div className="h-2 bg-linear-to-r from-purple-500 to-indigo-600"></div>

        <div className="card-body p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="font-black text-3xl text-slate-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-slate-500 text-sm">
              Please login to your account to continue
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(handleLoginFunc)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-slate-600">
                  Email Address
                </span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="input input-bordered focus:input-primary bg-slate-50 border-slate-200 rounded-lg transition-all"
                {...register("email", { required: "Email field is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="form-control">
              <div className="flex justify-between items-center mb-1">
                <label className="label py-0">
                  <span className="label-text font-semibold text-slate-600">
                    Password
                  </span>
                </label>
              </div>
              <input
                
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="input input-bordered focus:input-primary bg-slate-50 border-slate-200 rounded-lg transition-all"
                {...register("password", {
                  required: "Password Field is required",
                })}
              />
              
              {errors.password && (
                <p className="text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>

            <div className="form-control mt-4">
              <button type="submit"
                
                className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-lg shadow-lg shadow-purple-200 h-12 w-full text-lg font-bold transition-all active:scale-95"
              >
                Login
              </button>
              <button type="button" className='btn border-blue-500 text-blue-500 w-full mt-3' onClick={handleGoggleSignIn}> <IoLogoGoogle />Login With Goggle</button>
            </div>
          </form>

          <div className="divider text-slate-400 text-xs my-6 uppercase tracking-widest">
            OR
          </div>

          <div className="text-center">
            <p className="text-slate-500">
              Don't have an account?
              <Link
                href="/register"
                className="text-purple-600 font-bold ml-2 hover:underline"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
