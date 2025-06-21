// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["example.com", "cdn.builder.io", "encrypted-tbn0.gstatic.com"],
  },
  webpack: (config,) => {
    // Add THREE.js aliases
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      three: "three/build/three.module.js",
      "three/examples/jsm/controls/OrbitControls":
        "three/examples/jsm/controls/OrbitControls.js",
      "three/examples/jsm/loaders/FontLoader":
        "three/examples/jsm/loaders/FontLoader.js",
      "three/examples/jsm/geometries/TextGeometry":
        "three/examples/jsm/geometries/TextGeometry.js",
    };

    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
