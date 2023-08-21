/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'plus.unsplash.com',
      'cdn.sketchbubble.com',
      'localhost',
      'skilliza.com'

    ],
  },
 
}
module.exports = nextConfig
