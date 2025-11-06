/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Sitio-Web-Portfolio',
  assetPrefix: '/Sitio-Web-Portfolio',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
