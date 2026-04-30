export async function getAllTiles() {
  const res = await fetch('https://tiles-nexus-server.onrender.com/tiles');
  const data = await res.json();
  return data;
}