/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {}
    }
};

import NextPWA from '@ducanh2912/next-pwa';

const withPWA = NextPWA({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: process.env.NODE_ENV === "development",
    workboxOptions: {
      disableDevLogs: true,
    },
});

export default withPWA(nextConfig);
