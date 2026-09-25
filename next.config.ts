import type { NextConfig } from "next";

// Static export for Apache/PHP hosting (Aruba): `npm run build` writes `out/`.
const nextConfig: NextConfig = {
  output: "export",
  // Emit `/azienda/index.html` so Apache serves `/azienda/` without rewrites.
  trailingSlash: true,
  // No Node image optimizer on static hosting.
  images: { unoptimized: true },
};

export default nextConfig;
