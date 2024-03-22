/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'default',
      unoptimized: true,
      domains: ['cdn.discordapp.com'],
    },
  }

export default nextConfig;
