/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: builds to the "out" folder, which Cloudflare Pages serves directly.
  output: "export",
  // Each page becomes its own folder (e.g. /mission/index.html) so links work on Cloudflare.
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
