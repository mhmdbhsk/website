import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://bhsk.my.id",
      lastModified: new Date(),
    },
  ];
}
