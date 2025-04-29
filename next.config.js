module.exports = {
  async redirects() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "hycel.eu",
          },
        ],
        destination: "https://www.hycel.eu/:path*",
        permanent: true,
      },
    ];
  },
};
