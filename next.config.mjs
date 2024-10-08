/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ["localhost", "images.prismic.io", "mundorail.cdn.prismic.io"]
  },
  productionBrowserSourceMaps: true
};

export default nextConfig;
