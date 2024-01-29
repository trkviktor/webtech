const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    output: 'standalone',
    staticPageGenerationTimeout: 1000,
    // Optionally, add any other Next.js config below
  }



module.exports = nextConfig
