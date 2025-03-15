import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://Walled-it-olive.vercel.app",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://Walled-it-olive.vercel.app/editor",
      lastModified: new Date().toISOString(),
    },
  ];
}
