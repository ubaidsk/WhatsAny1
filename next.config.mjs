import NextPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {}
    },
    output: 'export',
    basePath: process.env.NODE_ENV === 'production' ? '/whatsany1' : '',
    images: {
        unoptimized: true,
    },
};

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

// Make sure to wrap nextConfig with withPWA
const finalConfig = withPWA(nextConfig);
export default finalConfig;
