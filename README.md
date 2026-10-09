# Mitra Taruvar

A responsive, static community website built with React, TypeScript and Vite. It uses hash navigation, so page links work when hosted beneath a GitHub Pages repository path. No backend, database, or runtime image service is required.

## Run locally

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

Vite writes the deployable site to `dist/`.

## Publish with GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Set **Build and deployment → Source** to **GitHub Actions**.
4. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds and deploys `dist/`.

Vite uses a relative base (`./`) so built assets resolve beneath the repository path (for example `/mitra-taruvar/`) as well as on a custom domain. The app uses URL hashes for pages and does not need server-side fallback configuration.

## Update community content

- Events and their categories, descriptions and dates: `src/data/events.ts`
- Memories and gallery captions: `src/data/gallery.ts`
- Activities and homepage sample counts: `src/data/activities.ts`
- Chapter and group descriptions, shown in the Members page: `src/data/groups.ts`
- Home featured profiles and Members page directory: `src/data/members.ts`
- Social profile URLs, RSS feed and Google Forms links: `src/data/community-links.ts`
- Homepage and event/group media: `src/data/activities.ts`, `src/data/events.ts`, and `src/data/groups.ts`

Event entries in this starter are layout examples with unconfirmed dates and locations. Replace them with approved event details before publishing. Homepage counts are illustrative; replace them with confirmed totals. Member profiles should use current names and roles approved for public display. Avoid publishing personal contact information without explicit consent. Member data uses `title` (an array such as `['Founder', 'Core Member']`), `profession`, optional `about`, optional `idea`, and optional `photo`; `idea` is displayed when `Founder` is one of the titles. `members` feeds the home spotlight and Members directory, while `volunteers` fills its own section. Put portrait files in `public/images/members/`; missing photos fall back to initials.

Activities, events and groups accept an optional `media` object with `type: 'image' | 'video' | 'embed'`, `src`, and optional `alt` or `poster`. For photos, `src` points to a local file in `public/images/`. For a self-hosted video, use a short compressed MP4/WebM and set `poster` to a local thumbnail; it uses `preload="none"`. For YouTube/Vimeo, use `type: 'embed'` with the provider's embed URL to avoid adding large video files to the GitHub Pages repository.

Public Facebook, X, and RSS links from the existing site are prefilled in `src/data/community-links.ts`; add or remove profile URLs there. For Google Forms, paste the public form link into `googleFormUrl` and the embed URL from Google Forms **Send → Embed HTML** into `googleFormEmbedUrl`. The site is static, so responses are collected by Google Forms and no server or API key is required.

## Replace the artwork

Replace the temporary SVG illustrations in `public/images/` with community photographs that people have approved for publication. Update matching image paths in `src/data/images.ts`, `src/data/activities.ts`, `src/data/events.ts`, `src/data/groups.ts`, `src/data/gallery.ts` and `src/App.tsx` if you use different filenames. Gallery images use native lazy loading. Keep descriptive alt text for meaningful images and empty alt text for decorative art.

See [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for image sources, consent and credits, file-size guidance, and when an external CDN may be useful.

## Contact details

The contact page embeds the Google Form when `googleFormEmbedUrl` is configured. Social and RSS links are configured in `src/data/community-links.ts`.
