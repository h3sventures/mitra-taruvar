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
- Home featured profiles and Members page founder, core member and volunteer lists: `src/data/members.ts`

Event entries in this starter are layout examples with unconfirmed dates and locations. Replace them with approved event details before publishing. The homepage counts are illustrative planning values; replace them with community-confirmed totals. Member profiles should use current names and roles approved for public display. Avoid publishing personal phone numbers or email addresses without explicit consent. `coreMembers` feeds both the home spotlight and Core Members directory section; `founderMembers` and `volunteers` fill their own sections. Founder data uses `name`, `profession`, `idea`, and optional `photo`; core member data uses `name`, `profession`, `about`, and optional `photo`; volunteers use `name` and optional `photo`. Put portrait files in `public/images/members/` and set `photo` to the filename; missing photos fall back to initials. Replace the demo names and profession placeholders with member-approved information before publishing.

## Replace the artwork

Replace the SVG illustrations in `public/images/` with photographs the community owns or has permission to publish. Update matching image paths in `src/data/images.ts`, `src/data/events.ts`, `src/data/gallery.ts` and `src/App.tsx` if you use different filenames. Gallery images use native lazy loading. Keep descriptive alt text for meaningful images and empty alt text for decorative art.

See [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for image sources, consent and credits, file-size guidance, and when an external CDN may be useful.

## Contact details

The contact page intentionally has no email, phone number, or working form until the community confirms its preferred public contact. Add an approved `mailto:` or `tel:` link in `src/App.tsx`, or document and configure a static form service. There is no fake form submission or backend.
