import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Aucune optimisation : le quota Hobby (5 000 transformations par mois) est
    // partagé par tous les projets du compte, et `/wikipedia/**` ouvrait tout
    // Wikimedia à la transformation. Le site n'utilise pas `next/image` : les
    // portraits sont des `<img>` qui pointent directement sur upload.wikimedia.org.
    unoptimized: true,
  },
};

export default nextConfig;
