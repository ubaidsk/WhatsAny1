/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/whatsany1' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
