# NLI Landing Page

Next.js landing page for Natural Language Business Intelligence platform.

## Quick Setup

### 1. Install Dependencies

```bash
cd /home/arn/projects/ventures/NLI/landing-page
npm install
```

### 2. Update Cal.com Link

Edit `app/page.tsx` and replace `YOUR-USERNAME` with your Cal.com username:

```typescript
href="https://cal.com/YOUR-USERNAME"
```

(Search for "YOUR-USERNAME" - appears 3 times in the file)

### 3. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

### 4. Deploy to Vercel

**Option A: Connect GitHub (Recommended)**

1. Push to GitHub:
```bash
cd /home/arn/projects/ventures/NLI/landing-page
git init
git add .
git commit -m "Initial commit: NLI landing page"
gh repo create nli-landing --private --source=. --push
```

2. Go to https://vercel.com
3. Click "Add New" → "Project"
4. Import your GitHub repo
5. Click "Deploy"

Done! Your site will be live at `https://nli-landing.vercel.app` (or custom domain)

**Option B: Deploy via CLI**

```bash
npm install -g vercel
vercel login
vercel
```

Follow prompts, site goes live in ~30 seconds.

## Customization

### Update Cal.com Link
- Edit `app/page.tsx`
- Replace `YOUR-USERNAME` with your actual Cal.com username
- Appears in 3 places (hero CTA, pricing CTA, final CTA)

### Update Contact Info
- Add email/social links in footer if desired
- Currently footer is minimal

### Add Demo Video
- Record demo video (see demo-mcp instructions)
- Upload to YouTube/Vimeo
- Add `<iframe>` in page.tsx at demo section:

```tsx
<section id="demo" className="py-16">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 text-center">Demo</h2>
    <div className="aspect-video">
      <iframe
        className="w-full h-full rounded-lg"
        src="https://www.youtube.com/embed/YOUR-VIDEO-ID"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
</section>
```

### Custom Domain

In Vercel dashboard:
1. Go to your project
2. Settings → Domains
3. Add your domain (e.g., nli-platform.com)
4. Follow DNS setup instructions

## Features

- ✅ Fully responsive
- ✅ Rotating headline animation
- ✅ All sections from website-copy.md
- ✅ Tailwind CSS styling
- ✅ Fast (Next.js static export)
- ✅ SEO optimized
- ✅ Cal.com integration ready

## Build for Production

```bash
npm run build
```

Outputs to `out/` directory (static site)

## Tech Stack

- Next.js 15.1.3
- React 19
- TypeScript
- Tailwind CSS
- Static export (no server needed)
