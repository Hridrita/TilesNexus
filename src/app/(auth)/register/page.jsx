"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { IoLogoGoogle } from "react-icons/io";
import { toast } from "react-toastify";

const registerPage = () => {
    const handleGoggleSignIn = async() =>{
            const data = await authClient.signIn.social({
        provider: "google",
      });
    
        }

    const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (value) => {
    console.log(value);

    const { name, email, url, password } = value;
    console.log(name, email, url, password);

    const {data, error} = await authClient.signUp.email({
      name: name, 
      email: email, 
      password: password, 
      image: url,
      callbackURL: "/login",
    });

    console.log(data, error);

    if(error){
        toast.error(error.message);
    }

    if(data){
        await authClient.signOut();
        toast.success("Successfully Registered...!!!");
        router.push("/login");
    }
  };
  return (
    <div className="container mx-auto min-h-[85vh] flex justify-center items-center px-4">
      <div className="card bg-white w-full max-w-md shadow-2xl border border-slate-100 overflow-hidden">
        <div className="h-2 bg-linear-to-r from-purple-500 to-indigo-600"></div>

        <div className="card-body p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="font-black text-3xl text-slate-800 mb-2">
              Register Your Accout
            </h2>
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit(handleRegisterFunc)}
          >
            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text font-semibold text-slate-600">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="enter your name"
                className="input input-bordered focus:input-primary bg-slate-50 border-slate-200 rounded-lg transition-all"
                {...register("name", { required: "Name field is required" })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

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
              <label className="label">
                <span className="label-text font-semibold text-slate-600">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                placeholder="URL..."
                className="input input-bordered focus:input-primary bg-slate-50 border-slate-200 rounded-lg transition-all"
                {...register("url", { required: "URL field is required" })}
              />
              {errors.url && (
                <p className="text-red-500">{errors.url.message}</p>
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
                name="password"
                type="password"
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
              <button type="submit" className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-lg shadow-lg shadow-purple-200 h-12 w-full text-lg font-bold transition-all active:scale-95">
                Register
              </button>
              <button type="button" className='btn border-blue-500 text-blue-500 w-full mt-3' onClick={handleGoggleSignIn}> <IoLogoGoogle />Register With Goggle</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default registerPage;
