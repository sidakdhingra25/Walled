import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://walled-sidakdhingra25s-projects.vercel.app/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://walled-sidakdhingra25s-projects.vercel.app/editor",
      lastModified: new Date().toISOString(),
    },
  ];
}
