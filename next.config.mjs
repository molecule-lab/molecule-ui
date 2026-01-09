import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Ensure TypeScript config is bundled for runtime type table generation.
  outputFileTracingIncludes: {
    "app/docs/[[...slug]]/page": ["./tsconfig.json"],
  },
  async redirects() {
    return [
      {
        source: "/r/:path([^.]*)",
        destination: "/r/:path.json",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/docs/llms",
        destination: "/llms.txt",
      },
      {
        source: "/llms-full",
        destination: "/llms-full.txt",
      },
    ]
  },
}
const withMDX = createMDX({})
export default withMDX(config)
