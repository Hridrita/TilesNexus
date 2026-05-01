import { getTilesDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TilesDetails = async ({ params }) => {
  const { id } = await params;
  const tiles = await getTilesDetailsById(id);

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-6 py-10 px-4 justify-center items-stretch">
      <div className="flex-1 max-w-sm">
        <div className="card bg-base-100 image-full shadow-xl h-full">
          <figure className="h-64">
            <Image
              src={tiles.image}
              alt="Tiles"
              className="w-full h-full object-cover"
              width={1000}
              height={1000}
            />
          </figure>
        </div>
      </div>

      <div className="flex-1 max-w-sm">
        <div className="card bg-base-100 w-96 shadow-sm">
          <div className="card-body">
            <div className="flex justify-between">
              <h2 className="card-title text-3xl text-[#5c4b36]">
                {tiles.title}
              </h2>
              <h3 className="text-[#f17c13] font-bold text-3xl">
                ${tiles.price}
              </h3>
            </div>
            <p className="text-slate-400 mt-4">{tiles.description}</p>
            <button className="btn bg-[#f17c13] text-white rounded-xl mt-4">
              {tiles.category}
            </button>

            <div className="font-semibold gap-3">
              <div>size: {tiles.dimensions}</div>
              <div>metarial: {tiles.material}</div>
            </div>
            <div className="card-actions justify-end">

              <button className="btn bg-slate-900 text-white">Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesDetails;
