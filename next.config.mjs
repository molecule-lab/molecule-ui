import { withContentCollections } from "@content-collections/next";

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
    ];
  },
};

export default withContentCollections(config);
