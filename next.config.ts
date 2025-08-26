import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {},
    poweredByHeader: false,
    headers: async () => [
        {
            source: "/(.*)",
            headers: [
                { key: "X-Frame-Options", value: "SAMEORIGIN" },
                { key: "X-Content-Type-Options", value: "nosniff" },
                { key: "Referrer-Policy", value: "no-referrer" },
            ],
        },
    ],
};

export default nextConfig;
