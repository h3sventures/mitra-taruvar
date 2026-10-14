# Image sourcing and updates

## What to use

1. **Best for Mitra Taruvar:** photographs from community events, shared with the photographer’s and identifiable people’s permission. Ask a parent or guardian before publishing a child’s photo. Keep original photos somewhere private; only place approved, web-ready copies in this public repository.
2. **For temporary decorative images:** download photos from [Unsplash](https://unsplash.com/license) or [Pexels](https://www.pexels.com/license/). Their published licenses allow free use in websites, but check the current license and any visible people, artwork, logos or brands. Do not suggest that a model is a Mitra Taruvar member or endorses the group. Credit photographers when practical, even where the license does not require it.

Avoid using a stock photo as if it documents a real Mitra Taruvar event. Prefer illustrations or clearly generic scenes until approved community photographs are ready.

## Where to put them

For this GitHub Pages site, keep approved image files in `public/images/`. Vite copies that directory to the built site, so no image-hosting account or runtime API is needed. The site currently references the illustrations in that directory through `communityImage()` in `src/data/images.ts` and in the page components in `src/App.tsx`.

Community photos selected from the provided Mitra Taruvar photo folder are in `public/images/community/`. They are resized JPEG copies; the source originals remain outside the public site. The hero, memories, upcoming event cards and group cards use these local photos through `communityPhoto()` in `src/data/images.ts`. The supplied set documents outdoor family gatherings; use event specific photos when available so the images match health camps, festivals or other activities.

As the archive grows, organize it by purpose, for example:

```text
public/images/
  hero/
  events/
  gallery/
  members/
```

Then update the paths in `src/data/events.ts`, `src/data/gallery.ts`, or `src/App.tsx`. Keep a small `image-credits.md` alongside your content with the image filename, photographer/source, license or consent status, and date approved.

## Prepare images for the web

- Prefer WebP or AVIF for photographs; SVG is appropriate for the current illustrations.
- Crop to the composition needed on the page and export a smaller thumbnail for gallery cards if originals are large.
- As practical starting points, target a hero image below roughly 300 KB and gallery images below roughly 200 KB each.
- Keep the original aspect ratio where possible; the page crops with `object-fit: cover`.
- Use descriptive alt text for meaningful photos and empty alt text for decorative ones.
- Avoid uploading large originals. GitHub Pages published sites are limited to 1 GB and have a soft 100 GB monthly bandwidth limit; optimize images as the gallery grows.

## Do you need a free image CDN?

Not for the current site. Local files are simpler, keep the page independent of a third party at runtime, and are a good fit for a modest community gallery. GitHub Pages serves the static site; the Pages quota is the practical reason to keep photos compressed.

If the gallery becomes large or community members need a browser-based upload library, [Cloudinary’s current free plan](https://cloudinary.com/pricing) includes image delivery through its CDN but uses monthly credits and plan limits. Treat it as an optional later step, check its current allowance before relying on it, and keep a backup of originals. Avoid hotlinking Unsplash/Pexels page URLs or using a photo search API as a runtime image source.
