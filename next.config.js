/** @type {import('next').NextConfig} */
require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
  env: {
    CONTACT_ENDPOINT: process.env.CONTACT_ENDPOINT,
    REGISTRATION_ENDPOINT: process.env.REGISTRATION_ENDPOINT,
  },
};
