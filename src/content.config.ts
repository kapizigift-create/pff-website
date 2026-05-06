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
    active: z.boolean().default(true),
  }),
});

const siteSettings = defineCollection({
  loader: glob({ pattern: 'site-settings.json', base: './src/content' }),
  schema: z.object({
    facebook: z.string().default(''),
    x: z.string().default(''),
    linkedin: z.string().default(''),
    tiktok: z.string().default(''),
    instagram: z.string().default(''),
    youtube: z.string().default(''),
    whatsapp: z.string().default(''),
    stats: z.array(z.object({
      number: z.string(),
      label: z.string(),
    })).default([]),
    methods: z.array(z.object({
      type: z.string(),
      label: z.string(),
      active: z.boolean(),
      mobileType: z.string().default(''),
      details: z.object({
        bankName: z.string().default(''),
        accountName: z.string().default(''),
        accountNumber: z.string().default(''),
        swiftCode: z.string().default(''),
        branch: z.string().default(''),
        provider: z.string().default(''),
        phoneNumber: z.string().default(''),
        agentCode: z.string().default(''),
        paymentLink: z.string().default(''),
      }),
    })).default([]),
  }),
});

export const collections = {
  partners,
  news,
  programs,
  siteSettings,
};