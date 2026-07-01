# Portfolio Template

A personal portfolio website built with Nuxt 3, Vue 3, and Tailwind CSS v4. Features a responsive design with dark/light theme support, multi-language (EN/TR) internationalization, and a contact form with email integration.

## Tech Stack

- Nuxt 3 (Vue 3, Nitro server engine)
- Tailwind CSS v4
- @nuxtjs/i18n (English / Turkish)
- @nuxtjs/color-mode (dark / light themes)
- nuxt-svgo (SVG icons as components)
- @nuxt/image (optimized images)
- nodemailer (SMTP email sending via ZeptoMail)

## Features

- Home page with profile and social media links
- About page with tech stack
- Projects showcase with cards
- Contact page with form (ZeptoMail SMTP integration)
- Contact form spam protection (honeypot, rate limiting, time check)
- SEO optimized (meta tags, JSON-LD schema, sitemap)
- Responsive and accessible design
- Animated background (noise + blurred gradient circles)

## Setup

Install dependencies:

```bash
npm install
```

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Fill in your SMTP credentials and recipient email:

```
SMTP_HOST=smtp.zeptomail.eu
SMTP_PORT=587
SMTP_USER=emailapikey
SMTP_PASS=your_smtp_password
MAIL_FROM_ADDRESS=noreply@yusufonaran.com
MAIL_FROM_NAME="Portfolio Website"
MAIL_TO=your_email@example.com
VITE_GA_ID=your_google_analytics_id
```

## Development

Start the dev server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Contact Form

The contact form sends emails via a Nuxt server API route (`server/api/contact.post.ts`) using nodemailer and SMTP. Messages are delivered to the email address specified in `MAIL_TO`.

Spam protection is built in:

- Honeypot field (hidden from users, filled by bots)
- Rate limiting (3 requests per minute per IP)
- Time check (rejects submissions faster than 15 seconds or older than 1 hour)

## Deployment

The project is configured for Vercel. See `vercel.json` for settings. Make sure to add all environment variables in your Vercel project settings.
