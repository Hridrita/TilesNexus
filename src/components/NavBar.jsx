"use client";
import Link from "next/link";
import React from "react";
import NavImg from "../assests/10367274.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import avatarImage from "../assests/avatardefault_92824.webp";

const NavBar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending, "session");
  const links = (
    <>
      <NavLink href={"/"} className="text-slate-900 text-2xl">
        Home
      </NavLink>
      <NavLink href={"/AllTiles"} className="text-slate-900 text-xl">
        All Tiles
      </NavLink>
      <NavLink href={"/MyProfile"} className="text-slate-900 text-xl ">
        My Profile
      </NavLink>
    </>
  );
  return (
    <div className="sticky top-0 z-50 py-4">
      <div className="navbar container mx-auto rounded-full bg-base-100 backdrop-blur-md shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-3"
            >
              {links}
            </ul>
          </div>
          <Image
            src={NavImg}
            alt="Tiles"
            width={30}
            height={30}
            className="ml-6"
          ></Image>
          <Link
            href={"/"}
            className="btn btn-ghost text-2xl text-[#f17c13] font-bold"
          >
            TilesNexus
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">{links}</ul>
        </div>

        <div className="navbar-end">
          {isPending ? (
            <span className="loading loading-spinner text-neutral"></span>
          ) : user ? (
            <div className="flex items-center gap-2">
              <h2 className="text-blue-900 font-semibold">{user.name}</h2>
              <Image
                src={user.image || avatarImage}
                alt="user avatar"
                width={40}
                height={40}
              ></Image>
              <button className="btn bg-[#f17c13] text-white mr-6" onClick={async()=> await authClient.signOut()}>
                Logout
              </button>
            </div>
          ) : (
            <button className="btn bg-[#f17c13] text-white mr-6">
              <Link href={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
