module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "web-cdn.snapp.ir",
      "snapp.ir",
      "jek.snapp.ir",
      "corporate.snapp.taxi",
      "digitalsignup.snapp.ir",
      "career.snapp.ir",
      "club.snapp.ir",
    ],
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },
};
