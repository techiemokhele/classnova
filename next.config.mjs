/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com', "example.com", "media.takealot.com"],
    },
    async headers() {
        return [
            {
                source: '/:all*(jpg|jpeg|png|svg|mp4)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
