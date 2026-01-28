/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Rojo Kasm Registry',
    description: 'Store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/rojosinalma/kasm-registry',
    contactUrl: 'https://github.com/rojosinalma/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
