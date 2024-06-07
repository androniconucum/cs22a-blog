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
    }
};
    

export default nextConfig;
