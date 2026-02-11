// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/projects" }),
  
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    shortDesc: z.string(),
    fullDesc: z.string(),
    mainImage: image(),
    gallery: z.array(image()).optional(),
    hidden: z.boolean().default(false),
    order: z.number().default(0).optional(),
  }),
});

export const collections = { projects };