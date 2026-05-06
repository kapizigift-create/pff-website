import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const partners = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/partners' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    website: z.string().optional(),
    order: z.number().default(0),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    program: z.string().default('general'),
  }),
});

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = {
  partners,
  news,
  programs,
};