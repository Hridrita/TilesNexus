import Link from "next/link";
import React from "react";
import NavImg from "../assests/10367274.png"
import Image from "next/image";

const NavBar = () => {
    const links = 
    <>
    <Link href={"/"} className="text-[#f17c13] text-xl">Home</Link>
    <Link href={"/AllTiles/id"} className="text-[#f17c13] text-xl">All Tiles</Link>
    <Link href={"/MyProfile"} className="text-[#f17c13] text-xl ">My Profile</Link>
    </>
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
          <Image src={NavImg} alt="Tiles" width={30} height={30} className="ml-6"></Image>
          <Link href={"/"} className="btn btn-ghost text-2xl text-[#f17c13] font-bold">TilesNexus</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"/login"} className="btn bg-[#f17c13] text-white mr-6">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
