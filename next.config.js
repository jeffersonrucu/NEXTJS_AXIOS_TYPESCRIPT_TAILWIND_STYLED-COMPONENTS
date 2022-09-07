/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  env: {
    API_BASEURL: 'https://jsonplaceholder.typicode.com',
  },
}
