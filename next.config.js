/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.vimeocdn.com', port: '', pathname: '/video/**' },
    ],
  },
};

module.exports = nextConfig;
