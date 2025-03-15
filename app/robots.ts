import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: "/private/",
    },
    sitemap: "https://Walled-it-olive.vercel.app/sitemap.xml",
  };
}
