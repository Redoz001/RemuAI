import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RemuAI",
    short_name: "RemuAI",

    description:
      "Software, business systems, automation, cloud platforms, and practical AI designed around how organisations actually work.",

    start_url: "/",
    scope: "/",
    display: "standalone",

    background_color: "#070707",
    theme_color: "#070707",

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
