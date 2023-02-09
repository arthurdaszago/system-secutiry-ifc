/** @type {import('next').NextConfig} */
const nextConfig = {
  // assetPrefix: 'https://github.com/arthurdaszago/system-secutiry-ifc',
  // assetPrefix: './_next',
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
    }
  },
  trailingSlash: true,
  assetPrefix: '.',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
