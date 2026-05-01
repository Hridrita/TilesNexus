import Image from "next/image";
import React from "react";
import Link from "next/link";

const TilesCard = ({ tiles }) => {
  return (
    <div className="mb-8 px-2 md:px-0">
      <div className="group flex flex-col md:flex-row bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-2xl overflow-hidden min-h-[450px] md:min-h-[280px]">
        <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
          <Image
            src={tiles.image}
            alt={tiles.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />

          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
            {tiles.category || "Premium"}
          </div>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-3/5">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#5c4b36] leading-tight">
                {tiles.title}
              </h2>
              <div></div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div></div>

            <Link
              href={`/Tiles/${tiles.id}`}
              className="px-6 py-2.5 bg-[#f17c13] hover:bg-[#d66b0e] text-white rounded-xl font-semibold transition-colors shadow-md hover:shadow-orange-200"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesCard;
