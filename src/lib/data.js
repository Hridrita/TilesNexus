export async function getAllTiles() {
  const res = await fetch('https://tiles-nexus-server.onrender.com/tiles');
  const data = await res.json();
  return data;
}

export async function getTrendingTiles() {
  const res = await fetch('https://tiles-nexus-server.onrender.com/trending-tiles');
  const data = await res.json();
  return data;
}

export async function getTilesDetailsById(Tiles_ID) {
  const res = await fetch(`https://tiles-nexus-server.onrender.com/tiles/${Tiles_ID}`);
  const data = await res.json();
  return data;
}