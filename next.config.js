/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com'

    ],
  },
 
}
module.exports = nextConfig
