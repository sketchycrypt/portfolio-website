/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio-website',
    assetPrefix: '/portfolio-website/',
    images: {
      loader: 'default',
      unoptimized: true,
    },
  }

export default nextConfig;
