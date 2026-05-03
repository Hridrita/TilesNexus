import { getTilesDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TilesDetails = async ({ params }) => {
  const { id } = await params;
  const tiles = await getTilesDetailsById(id);

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 py-10 px-4 justify-center items-center md:items-stretch">
      <div className="w-full max-w-sm flex justify-center">
        <div className="card bg-base-100 shadow-xl w-full">
          <figure className="h-64">
            <Image
              src={tiles.image}
              alt="Tiles"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </figure>
          <div className="p-4 mt-auto flex justify-center">
            <div 
              className={`px-6 py-2 rounded-full text-white font-bold text-sm uppercase tracking-wide shadow-md ${
                tiles.inStock ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {tiles.inStock ? "In Stock" : "Out of Stock"}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm flex justify-center">
        <div className="card bg-base-100 shadow-sm border border-slate-100 w-full">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title text-3xl text-[#5c4b36]">
                {tiles.title}
              </h2>
              
            </div>
            <p className="text-slate-400 mt-4">{tiles.description}</p>
            <button className="btn bg-[#f17c13] text-white rounded-xl mt-4">
              {tiles.category}
            </button>

            <div className="font-semibold gap-3 flex justify-between my-4">
              <div>
                <div>size: {tiles.dimensions}</div>
              <div>metarial: {tiles.material}</div>
              </div>

              <div><h3 className="text-[#f17c13] font-bold text-3xl">
                ${tiles.price}
              </h3></div>
            </div>
            <div className="card-actions justify-end">
              <Link href={"/AllTiles"} className="btn bg-slate-900 text-white">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesDetails;
