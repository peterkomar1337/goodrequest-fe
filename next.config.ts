import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pinned explicitly: an unrelated lockfile higher up the tree made Next
    // infer the wrong workspace root.
    root: import.meta.dirname,
  },
};

export default nextConfig;
