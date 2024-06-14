/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
              port: '',
            }
          ],

        domains: [
          "api.microlink.io",
        ],
    },
};
    

export default nextConfig;
