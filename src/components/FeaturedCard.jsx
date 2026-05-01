import Image from "next/image";
import React from "react";

const FeaturedCard = ({ trend }) => {
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <Image
            src={trend.image}
            alt="Tiles"
            width={500} 
            height={300} 
            className="w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#5c4b36] font-bold">{trend.title}</h2>
          <p className="text-[#5c4b36]">
            {trend.description}
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#f17c13] text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
