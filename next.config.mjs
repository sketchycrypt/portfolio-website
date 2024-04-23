/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  assetPrefix: "",
  images: {
    loader: "default",
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
