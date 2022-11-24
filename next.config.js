/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  env: {
    FT_CONTRACT_ID: process.env.FT_CONTRACT_ID,
    SHOP_CONTRACT_ID: process.env.SHOP_CONTRACT_ID 
  }
}

module.exports = nextConfig
