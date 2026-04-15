import { defineCollection, z } from "astro:content";

export const collections = {
  berita: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      author: z.string(),
      image: z.string().optional(),
    }),
  }),
};