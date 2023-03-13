/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    optimizeFonts: true,
  },
};

module.exports = nextConfig;
