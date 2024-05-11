/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "*.cdninstagram.com",
                port: "",
            },
        ],
    },
};

export default nextConfig;
