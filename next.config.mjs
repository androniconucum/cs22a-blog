/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'wwww.facebook.com/messages',
              port: '',
            }
          ],

        domains: [
          "api.microlink.io",
        ],
    },
};
    

export default nextConfig;
