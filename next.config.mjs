/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com', // এখানে শেষে '.com' যোগ করা হয়েছে
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // আগেরটিও রাখুন যদি কোনো ইমেজ এখান থেকে আসে
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;