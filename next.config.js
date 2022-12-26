/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      "cdn.jsdelivr.net",
      "res.cloudinary.com",
      "arpitbhalla.gallerycdn.vsassets.io",
    ],
  },
};

module.exports = nextConfig;
