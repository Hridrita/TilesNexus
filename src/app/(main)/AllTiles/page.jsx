"use client";
import React, { useState, useEffect } from "react";
import TilesCard from "@/components/TilesCard";
import { getAllTiles } from "@/lib/data";
import { Label, SearchField } from "@heroui/react";

const AllTilesPage = () => {
  const [allTiles, setAllTiles] = useState([]); // মেইন ডাটা রাখার জন্য
  const [filteredTiles, setFilteredTiles] = useState([]); // সার্চ করা ডাটা দেখানোর জন্য
  const [loading, setLoading] = useState(true);

  // ১. ডাটা ফেচ করার জন্য useEffect ব্যবহার
  useEffect(() => {
    const fetchTiles = async () => {
      const data = await getAllTiles();
      setAllTiles(data);
      setFilteredTiles(data); // শুরুতে সব টাইলস দেখাবে
      setLoading(false);
    };
    fetchTiles();
  }, []);

  // ২. সার্চ লজিক হ্যান্ডেল করা
  const handleSearch = (value) => {
    const searchTerm = value.toLowerCase();

    const filtered = allTiles.filter(
      (tile) =>
        tile.title.toLowerCase().includes(searchTerm) ||
        tile.category?.toLowerCase().includes(searchTerm),
    );

    setFilteredTiles(filtered);
  };

  if (loading)
    return (
      <div className="flex justify-center my-10">
        <span className="loading loading-spinner"></span>
      </div>
    );

  return (
    <div className="container mx-auto max-w-7xl px-4 py-2">
      
      <div className="flex justify-end mb-6 mt-4">
        <div className="w-full max-w-sm">
          <SearchField name="search" onChange={handleSearch}>
        
            <SearchField.Group className="flex items-center bg-white border-2 border-slate-200 rounded-xl px-3 py-2 shadow-sm focus-within:border-[#f17c13] transition-all">
              <SearchField.SearchIcon className="text-slate-400 w-5 h-5" />
              <SearchField.Input
                placeholder="Search by name..."
                className="flex-1 ml-2 outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
              />
              <SearchField.ClearButton
                className="text-slate-400 hover:text-red-500 transition-colors"
                onClick={() => setFilteredTiles(allTiles)}
              />
            </SearchField.Group>
          </SearchField>
        </div>
      </div>

      
      {filteredTiles.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 container mx-auto">
          {filteredTiles.map((tiles) => (
            <TilesCard key={tiles.id} tiles={tiles} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-slate-400">
          <p className="text-xl italic">No tiles found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default AllTilesPage;
