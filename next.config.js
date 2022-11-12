/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.jsdelivr.net", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
