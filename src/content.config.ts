import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const guides = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/guides",
  }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    subtitle: z.string(),
    description: z.string(),
    related: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
          desc: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { guides };
