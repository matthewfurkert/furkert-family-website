import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const people = defineCollection({
  loader: glob({ base: "./src/content/people", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    photo: z.string(),
    website: z.string().url(),
  }),
});
export const collections = { people };
