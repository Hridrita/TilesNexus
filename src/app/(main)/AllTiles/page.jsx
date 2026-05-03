import TilesList from "@/components/TilesList"; 

export const metadata = {
  title: "TileNexus - All Tiles",
};

export default function AllTilesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-2">
      <TilesList />
    </div>
  );
}