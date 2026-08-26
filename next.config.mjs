/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/Saint", destination: "/saint", permanent: true }
    ];
  }
};

export default nextConfig;
