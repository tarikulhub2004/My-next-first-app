/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // https://plus.unsplash.com/premium_photo-1779721134765-ce0739361f29

  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
