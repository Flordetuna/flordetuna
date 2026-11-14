import type { NextConfig } from "next";

// Proteções básicas em todas as páginas (o HSTS a Vercel já manda).
const SEGURANCA = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SEGURANCA }];
  },
};

export default nextConfig;
