/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const nextConfig = withFonts({
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    return config;
  }
})

module.exports = nextConfig
