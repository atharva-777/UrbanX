/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "tailwindui.com"],
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
        dns: false,
        net: false,
        tls: false,
      },
    };
    return config;
  },
};

module.exports = nextConfig;
