/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  distDir: 'build',  // Custom build output directory
}

export default nextConfig
