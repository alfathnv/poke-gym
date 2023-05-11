/** @type {import('next').NextConfig} */
const withYaml = require("next-plugin-yaml");
const nextConfig = {
  images: {
    domains: ["i.imgur.com"],
  },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = withYaml(nextConfig);
