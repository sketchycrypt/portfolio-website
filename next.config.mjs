/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio-website',
    assetPrefix: '/portfolio-website/',
    images: {
      loader: 'default',
      unoptimized: true,
    },
  }

export default nextConfig;
