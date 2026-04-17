/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'github.com'],
  },
  // Uncomment and set this if deploying to a repository (not username.github.io)
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
};

module.exports = nextConfig;
