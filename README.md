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
| `public/images/homepage/brick-steam.jpg` | Students actively using LEGO bricks, building blocks, or practical learning materials during a STEAM session. The image should show curiosity, teamwork, creativity, and guided learning. |
| `public/images/homepage/shesteam.jpg` | Girls or young people participating in electronics, coding, sensors, robotics, or innovation activities. The image should communicate confidence, inclusion, and future-ready skills. |
| `public/images/homepage/community-impact.jpg` | A warm community-centered image showing beneficiaries, volunteers, or ISIR Ghana team members during an outreach activity. The image should communicate trust and real-world impact. |
| `public/images/about/team.jpg` | A professional team or leadership image representing ISIR Ghana’s people, credibility, and institutional identity. A clean background and confident posture are preferred. |
| `public/images/about/community.jpg` | ISIR Ghana team members engaging with students, women, youth, farmers, teachers, or local community members. The image should show respectful partnership and community connection. |
| `public/images/programs/brick-steam.jpg` | A clear program image from the Brick STEAM Discovery Caravan showing students building, testing, discussing, or presenting STEAM projects. |
| `public/images/programs/shesteam.jpg` | A program image showing girls or mixed student groups working with electronic components, laptops, ESP32 or Arduino boards, sensors, wires, or creative technology tools. |
| `public/images/programs/mothers-first.jpg` | A respectful maternal and child health image showing women, mothers, health education, community dialogue, or health outreach. Avoid images that feel intrusive or exploitative. |
| `public/images/programs/agrismart.jpg` | Farmers, agricultural training, fieldwork, crops, soil, irrigation, or climate-smart farming activity. The image should communicate resilience and practical learning. |
| `public/images/programs/solar4change.jpg` | A solar energy, water access, borehole, irrigation, rural infrastructure, or renewable energy image showing climate resilience and community benefit. |
| `public/images/impact/community-impact.jpg` | A strong impact image showing people reached by ISIR Ghana’s work, preferably students, women, youth, or community members during a real activity. |
| `public/images/impact/steam-session.jpg` | A lively image showing students participating in practical STEAM learning, teamwork, or innovation challenges. |
| `public/images/impact/farmer-training.jpg` | A field-based agriculture or farmer training image showing learning, demonstration, discussion, or climate-smart practice. |
| `public/images/partners/partner-engagement.jpg` | A professional collaboration image showing ISIR Ghana with partners, school leaders, donors, technical experts, or community stakeholders. |
| `public/images/news/featured-story.jpg` | A strong editorial image suitable for the featured news story, preferably showing a real program moment, field visit, school session, or community engagement. |

## Image Quality Guidelines

- Use real ISIR Ghana photos whenever possible.
- Use landscape orientation for hero and wide section images.
- Minimum recommended width for hero images: 1600 px.
- Minimum recommended width for cards and story images: 800 px.
- Avoid blurry, dark, pixelated, or heavily compressed images.
- Avoid screenshots unless there is no alternative.
- Avoid images that expose children or community members in undignified or vulnerable ways.
- Use consent-aware photos for children, women, and community members.
- Prefer images with natural expressions, active participation, learning, teamwork, and dignity.
- Use lowercase filenames with hyphens and no spaces.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Deployment Recommendation

Deploy with Vercel for the best Next.js performance and automatic GitHub integration.
