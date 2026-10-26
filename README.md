# Gaurav Kumar — Personal portfolio

A compact static portfolio built with HTML, CSS, and JavaScript. No dependencies, package installation, build step, backend, or external font requests.

Stage 2 includes a short bio, three experience entries, three linked projects, contact links, and a downloadable resume. The public site is configured for https://gaurav12058.github.io/.

The homepage uses the full available width with responsive side margins: name and bio with a larger portrait to the right, then equally sized Experience and Projects columns on desktop, beneath one continuous divider. Contact links, the résumé, and the last-updated label sit in the footer just below the content. Below 1024px the sections stack. Blue text on cream is retained; descriptions use sans-serif while dates and technology summaries use monospace. The layout targets a complete overview at 1280 × 800 and larger. Mobile, increased text size, and unusually short windows scroll naturally rather than clipping content.

## Run locally

From this directory, with Python 3 installed:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Stop the server with `Ctrl+C`. If the port is busy, use `8001` instead. Run through a local server for consistent browser storage behavior.

## Files and editing

- `index.html`: homepage content, metadata, experience, and a short featured-project selection.
- `projects.html`: the complete project list, linked from “All projects.” Add future projects in its marked `ALL PROJECTS` list by duplicating an `<li>`. It shares CSS and JavaScript with the homepage and works without JavaScript.
- `css/styles.css`: layout, responsive behavior, light color tokens, and reduced-motion rules.
- `js/main.js`: optional section reveals and opening the résumé preview alongside the download.
- `assets/resume/resume.pdf`: supplied resume, copied without modification. Replace this file to update the download; the link stays the same. The résumé button downloads the PDF and opens a preview in a new tab. Without JavaScript, it still downloads the PDF.
- `assets/images/gaurav-kumar.jpeg`: your cropped photograph, displayed to the right of the introduction at its natural aspect ratio. Replace the file and update its HTML width/height attributes if the dimensions change.
- `.nojekyll`: tells GitHub Pages to serve the static files without Jekyll processing.

The site always uses the light blue-and-cream palette, regardless of device appearance settings. There is no theme toggle or preference storage. Without JavaScript, all content remains visible.

Only below-the-fold sections receive a once-only reveal. Reduced-motion preferences disable the effect, including when changed while the page is open.

## Publish updates

Repository: https://github.com/Gaurav12058/gaurav12058.github.io

Public site: https://gaurav12058.github.io/

GitHub Pages publishes the root of the `main` branch, with HTTPS. No custom build workflow is needed.

After editing and checking locally:

```sh
git add index.html projects.html css js assets README.md robots.txt sitemap.xml .nojekyll .gitignore
git commit -m "Update portfolio"
git push origin main
```

GitHub automatically redeploys after each push. Check **Actions** for deployment progress, or **Settings → Pages** for the public address and publishing settings.

Canonical and Open Graph URLs, `robots.txt`, and `sitemap.xml` use the public address. Update them if you later add a custom domain. Relative asset links keep local previews working.

Official deployment guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Verification checklist

- Check desktop and narrow mobile layouts, text wrapping, and absence of horizontal scrolling.
- Use `Tab` to reveal the skip link and activate it using the keyboard.
- Check that the site remains light with either light or dark device appearance settings.
- Test with disabled JavaScript and reduced motion enabled.
- Scroll through the page: sections reveal once, remain readable, and never require animation to be understood.
- Check project and contact destinations, the `mailto:` address, and the resume download. Confirm the résumé opens in a new tab and downloads with the same activation.
- Confirm CSS and JavaScript load both at the root URL and under a repository subpath.

## Content sources and updates

Experience and project copy is based on the supplied resume. Cargo Velocity uses the LinkedIn Junior Analyst entry (June 2023–August 2025), verified October 25, 2026. The earlier Consultant Intern role is not listed separately. Projects appear in the requested order: ClubApply.ai, DIDUC, Spy Gadget. The website uses the personal email address supplied in chat; the downloadable resume keeps its original contact information.

Add and update projects inside the marked `ALL PROJECTS` list in `projects.html`. Only edit the homepage’s `FEATURED PROJECTS` list when changing its featured selection or summaries. These are plain HTML lists, so featured names and links should be kept consistent across both pages. Keep homepage entries concise to preserve the desktop overview. Update the bio and page metadata together when education or job-search preferences change.

## Deferred work

Canonical and Open Graph URLs are configured for the public site. Social previews use the existing portrait with a summary card. Both pages have distinct titles and descriptions, and the sitemap lists their canonical URLs.

Stage 3 is skipped by choice: visitors can use Email or LinkedIn; no contact form/backend is planned. Custom-domain configuration and analytics remain optional and are not implemented.

The footer’s last-updated label is static. When updating the site, edit its visible month/year and the matching `datetime="YYYY-MM"` in both `index.html` and `projects.html`.

Project titles on the full list link to demos when available; each entry has its own GitHub source link and technologies line. ClubApply’s demo was supplied directly. DIDUC’s demo link comes from its repository README. No Spy Gadget demo is currently linked. Main technologies were checked against the repositories’ READMEs and frontend/backend dependency manifests on October 25, 2026; they describe the projects, not an assertion that every technology was personally implemented by one contributor.

On phones the introduction keeps all text in a column beside the portrait. The footer stays on one row: contact links use labeled icons (screen-reader names retained), alongside the résumé and month/year. The visible “Last updated” prefix is omitted on narrow screens.

Homepage and full-project descriptions include résumé-supported contributions and results: OpenSearch memory/I/O and indexing improvements, PRP automation and YOLO work, the ClubApply hackathon win, DIDUC backend design, and Spy Gadget latency. Cargo Velocity is absent from the supplied résumé; its previously verified LinkedIn summary remains unchanged.
