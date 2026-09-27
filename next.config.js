/** @type {import("next").NextConfig} */
const nextConfig = {
  async redirects() {
    return ["/about", "/contact", "/blog"].map((source) => ({
      source,
      destination: "/#about",
      permanent: false,
    }));
  },
};

module.exports = nextConfig;
