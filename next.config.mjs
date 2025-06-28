import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
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
