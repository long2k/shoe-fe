/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "scss")],
    },
    env: {
        FT_CONTRACT_ID: process.env.FT_CONTRACT_ID,
        SHOP_CONTRACT_ID: process.env.SHOP_CONTRACT_ID,
    },
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "4040",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
