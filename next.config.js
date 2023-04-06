/** @type {import('next').NextConfig} */
const nextConfig = {

  basePath: "/system-security-ifc",
  assetPrefix: "/system-security-ifc",
  // trailingSlash: true,

  images: {
    unoptimized: true,
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
