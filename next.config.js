/** @type {import('next').NextConfig} */
// next.config.js
const withPlugins = require('next-compose-plugins');
const nextConfig = {
  reactStrictMode: true,
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
  [nextConfig, {
    reactStrictMode: true,
  }],
  [withBundleAnalyzer],

], nextConfig);