/** @type {import('next').NextConfig} */
const nextConfig = {

  assetPrefix: ".",
  // trailingSlash: true,

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
