import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Pinned so Next doesn't infer the workspace root from a stray lockfile
	// higher up the tree.
	turbopack: {
		root: path.resolve(__dirname),
	},
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [],
	},
	experimental: {
		optimizePackageImports: ["lucide-react"],
	},
};

export default nextConfig;
