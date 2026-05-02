'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const registerPage = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    
      const handleRegisterFunc = (data) => {
        console.log(data);
        
        const { name, email, url, password} = data;
        console.log(name, email, url , password);


        
    
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
        
                  <form className="space-y-6" onSubmit={handleSubmit(handleRegisterFunc)}>


                    <div className="form-control flex flex-col">
                      <label className="label">
                        <span className="label-text font-semibold text-slate-600">Name</span>
                      </label>
                      <input  
                        type="text" 
                        placeholder="enter your name" 
                        className="input input-bordered focus:input-primary bg-slate-50 border-slate-200 rounded-lg transition-all" 
                        {...register("name",{required: "Name field is required"})}
                      />
                      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-slate-600">Email Address</span>
                      </label>
                      <input  
                        type="email" 
                        placeholder="name@example.com" 
                        className="input input-bordered focus:input-primary bg-slate-50 border-slate-200 rounded-lg transition-all" 
                        {...register("email",{required: "Email field is required"})}
                      />
                      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text font-semibold text-slate-600">Photo URL</span>
                      </label>
                      <input  
                        type="text" 
                        placeholder="URL..." 
                        className="input input-bordered focus:input-primary bg-slate-50 border-slate-200 rounded-lg transition-all" 
                        {...register("url",{required: "URL field is required"})}
                      />
                      {errors.url && <p className="text-red-500">{errors.url.message}</p>}
                    </div>
        
                    
                    <div className="form-control">
                      <div className="flex justify-between items-center mb-1">
                        <label className="label py-0">
                          <span className="label-text font-semibold text-slate-600">Password</span>
                        </label>
                        
                      </div>
                      <input 
                        name="password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="input input-bordered focus:input-primary bg-slate-50 border-slate-200 rounded-lg transition-all" 
                        {...register("password", {required: "Password Field is required"})}
                      />
                      {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
                    </div>
        
                    
                    <div className="form-control mt-4">
                      <button className="btn bg-purple-600 hover:bg-purple-700 text-white border-none rounded-lg shadow-lg shadow-purple-200 h-12 w-full text-lg font-bold transition-all active:scale-95">
                        Register
                      </button>
                    </div>
                  </form>
        
                  
        
        
                  
                  
                </div>
              </div>
            </div>
    );
};

export default registerPage;