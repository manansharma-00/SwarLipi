/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false,
        module: false,
        v8: false,
        perf_hooks: false
      }
    }
    return config
  },
  transpilePackages: ['tailwindcss'],
  experimental: {
    optimizePackageImports: ['tailwindcss']
  }
}

module.exports = nextConfig