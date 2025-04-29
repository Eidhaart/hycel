module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "host",
            value: "hycel.eu",
          },
        ],
        destination: "https://www.hycel.eu",
        permanent: true,
      },
    ];
  },
};
