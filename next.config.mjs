/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: builds to the "out" folder, which Cloudflare Pages serves directly.
  output: "export",
  images: { unoptimized: true },
};
export default nextConfig;
