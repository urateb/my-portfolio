/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio/' : '',
}

module.exports = nextConfig
