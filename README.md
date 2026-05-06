# ISIR Ghana Website

Official website project for the Institute for Sustainable and Innovative Research Ghana.

## Project Purpose

This website is designed as a premium institutional platform for ISIR Ghana, communicating the organization’s work in research, STEAM education, maternal and child health, agriculture, climate resilience, partnerships, impact, and consultancy services.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Brand Colors

- Primary Blue: `#0066F5`
- Primary Green: `#00B82E`
- Dark Navy: `#062A4F`
- Light Blue: `#EEF6FF`
- Light Green: `#ECFFF1`
- Charcoal: `#1F2937`
- Soft Gray: `#E5E7EB`

## Deployment Trigger

This update confirms the repository is connected to Vercel and ready for production deployment.

## Project Structure

```text
app/
  about/
  contact/
  get-involved/
  impact/
  news/
  partners/
  programs/
  research/
components/
public/
  logo/
  images/
```

## Image Upload Locations

Upload logo files to:

```text
public/logo/
```

Upload page images to:

```text
public/images/homepage/
public/images/about/
public/images/programs/
public/images/impact/
public/images/partners/
public/images/news/
```

## Recommended Image Names and Descriptions

Use clear image filenames and always keep a short description of what each image should show. These descriptions help with website quality, accessibility alt text, SEO, and visual consistency.

| File path | Recommended description |
|---|---|
| `public/images/homepage/hero.jpg` | A powerful, high-resolution image showing ISIR Ghana students, facilitators, or community members engaged in hands-on learning, innovation, or outreach. The image should feel hopeful, professional, and action-oriented. |
| `public/images/programs/brick-steam.jpg` | A clear program image from the Brick STEAM Discovery Caravan showing students building, testing, discussing, or presenting STEAM projects. |
| `public/images/programs/shesteam.jpg` | A program image showing girls or mixed student groups working with electronic components, laptops, ESP32 or Arduino boards, sensors, wires, or creative technology tools. |
| `public/images/programs/mothers-first.jpg` | A respectful maternal and child health image showing women, mothers, health education, community dialogue, or health outreach. Avoid images that feel intrusive or exploitative. |
| `public/images/about/community.jpg` | ISIR Ghana team members engaging with students, women, youth, farmers, teachers, or local community members. The image should show respectful partnership and community connection. |
```

## Local Development

```bash
npm install
npm run dev
```

## Deployment Recommendation

Deploy with Vercel for the best Next.js performance and automatic GitHub integration.
