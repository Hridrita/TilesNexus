"use client";
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Image from "next/image";
import avatarImage from "../../../assests/avatardefault_92824.webp";

const MyProfilePage = () => {
    
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const { register, handleSubmit, reset } = useForm({
        
        values: {
            name: user?.name,
            image: user?.image
        }
    });

    
    const handleUpdateProfile = async (values) => {
        const { error } = await authClient.updateUser({
            name: values.name,
            image: values.image,
        });

        if (error) {
            toast.error(error.message || "Failed to update profile");
            return;
        }

        toast.success("Profile updated successfully!");
    };

    if (isPending) return <div className="flex justify-center my-10"><span className="loading loading-spinner"></span></div>;

    return (
        <div className="container mx-auto p-4 md:p-6 max-w-2xl">
            <div className="card bg-base-100 shadow-xl border border-slate-200">
                <div className="card-body p-5 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-6">My Profile</h2>
                    
                    
                    <div className="flex flex-col items-center mb-8">
                        <div className="avatar mb-4">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full ring ring-[#f17c13] ring-offset-2">
                                <Image 
                                    src={user?.image || avatarImage} 
                                    alt="Profile" 
                                    width={96} 
                                    height={96}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <h2 className="text-slate-500">{user?.name}</h2>
                        <p className="text-slate-500">{user?.email}</p>
                    </div>

                    
                    <form onSubmit={handleSubmit(handleUpdateProfile)} className="space-y-4">
                        <div className="form-control">
                            <label className="label font-semibold">Full Name</label>
                            <input 
                                type="text" 
                                className="input input-bordered focus:input-primary w-full" 
                                {...register("name", { required: true })}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-semibold">Profile Image URL</label>
                            <input 
                                type="text" 
                                className="input input-bordered focus:input-primary w-full" 
                                {...register("image")}
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="btn bg-[#f17c13] text-white w-full mt-4 hover:bg-[#d66a0d]"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;