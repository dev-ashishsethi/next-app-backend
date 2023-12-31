/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  publicRuntimeConfig: {
    API_ROOT_URL: process.env.NEXT_PUBLIC_API_ROOT_URL,
  },
  headers:[{
    source:'/read-users',
    headers:[{
      key:"Cache-Control",
      value:"no-cache, no-store, max-age=0, must-revalidate"
    }]
  }]
}

module.exports = nextConfig
