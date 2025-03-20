/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.themealdb.com',
          hostname:'avatars.githubusercontent.com',
          hostname:'lh3.googleusercontent.com'
         
        },
      ],
    },
  };

export default nextConfig;
