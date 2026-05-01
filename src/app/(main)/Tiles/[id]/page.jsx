import { getTilesDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TilesDetails = async ({ params }) => {
  const { id } = await params;
  const tiles = await getTilesDetailsById(id);

  if (!tiles) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="card lg:card-side bg-base-100 shadow-sm overflow-hidden">
        {/* ইমেজের জায়গা বাড়ানো হয়েছে (lg:w-2/3) এবং হাইট ফিক্সড করা হয়েছে */}
        <figure className="relative w-full lg:w-1/2 h-[450px] bg-slate-50 flex items-center justify-center p-4">
  <Image
    src={tiles.image}
    alt="tiles"
    fill
    priority
    unoptimized={true} 
    className="object-contain p-2" // object-contain ইমেজের কোয়ালিটি ঠিক রাখবে
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</figure>

        {/* টেক্সট সেকশন এখন ইমেজের সাথে সামঞ্জস্য রেখে ছোট থাকবে */}
        <div className="card-body lg:w-1/3 flex flex-col justify-center">
          <div className="flex justify-between items-start gap-4">
            <h2 className="card-title text-3xl text-[#5c4b36] font-black leading-tight">
              {tiles.title}
            </h2>
            <h3 className="font-bold text-2xl text-slate-800">${tiles.price}</h3>
          </div>

          <div className="flex mt-2">
            <button className="px-4 py-1.5 bg-[#f17c13] hover:bg-[#d66b0e] text-white rounded-full text-[10px] uppercase tracking-wider font-bold transition-all">
              {tiles.category}
            </button>
          </div>

          <p className="text-slate-500 mt-4 text-sm leading-relaxed italic">
            {tiles.description}
          </p>

          <div className="flex flex-col gap-3 mt-6 py-4 border-t border-slate-50 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 uppercase tracking-tighter">Size:</span>
              <span className="text-slate-800">{tiles.dimensions}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-400 uppercase tracking-tighter">Type:</span>
              <span className="text-slate-800">{tiles.material}</span>
            </div>
          </div>

          <div className="card-actions justify-end mt-auto">
            <Link href={"/AllTiles"} className="btn bg-slate-900 text-white rounded-lg px-8 border-none hover:bg-slate-800">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TilesDetails;