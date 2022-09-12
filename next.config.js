/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  env: {
    API_BASEURL: 'http://localhost:10013',
    API_USER: 'admin',
    API_PASSWORD: 'admin',
  },
}
