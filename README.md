# Aazeez & Fasleena — Nikkah Invitation (v3)

A phone-first React invitation, built with Vite. Deep emerald, warm
brass and ivory; a brass "seal" as the recurring signature mark;
circular photo frames instead of arches.

## What's new in this version

- **Fancier opening** — tapping the seal now also triggers a soft
  golden glow flash and a brief spark burst, instead of just cracking
  open silently.
- **Photos animate on their own** — every photo (hero, venue, gallery)
  has its own gentle scale-and-focus reveal as it scrolls into view,
  independent from the text around it, so pictures and words don't
  compete for attention.
- **A quiet spark burst** — three small, staggered gold-toned bursts
  play once, right when the invitation opens. They fade within about a
  second and never repeat — a little celebration, not a light show.
- **Add to Google Calendar** — the button now opens Google Calendar
  directly with the event pre-filled, instead of downloading a file.
- Removed the "Share this Invitation" button, as requested.
- Added everything needed to deploy straight to **GitHub Pages** or
  **Netlify** (see below).

## Run it locally in VS Code

1. Open this folder in VS Code.
2. Terminal (``Ctrl + ` ``): `npm install`
3. `npm run dev`, then open the printed local URL.

## Deploy to Netlify

**Easiest — drag and drop:**
1. `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag
   the `dist` folder in. Done — you'll get a live URL immediately.

**Connected to Git (auto-deploys on every push):**
1. Push this folder to a new GitHub repo.
2. In Netlify: **Add new site → Import an existing project** → pick
   the repo. Netlify will read `netlify.toml` automatically (build
   command `npm run build`, publish folder `dist`) — just click Deploy.

## Deploy to GitHub Pages

This project already includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and publishes the site
automatically every time you push to `main`.

1. Push this folder to a new GitHub repo.
2. In the repo: **Settings → Pages → Source**, choose
   **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab).
   Your site will be live at `https://<username>.github.io/<repo>/`
   within a minute or two.

*(`vite.config.js` is already set to `base: './'`, so the build works
correctly whether it's hosted at a domain root, like Netlify, or a
subpath, like GitHub Pages — no extra config needed either way.)*

## Project structure

```
.github/workflows/deploy.yml   auto-deploy to GitHub Pages
netlify.toml                   Netlify build settings
src/
  assets/                       your photos + the audio track
  components/
    Icons.jsx                    calendar / clock / pin / music icons
    Reveal.jsx                    scroll-in wrapper — "up" for text,
                                   "photo" for images
    Intro.jsx                     tap-the-seal opening screen
    Fireworks.jsx                 the one-time spark burst on open
    AudioToggle.jsx               floating play/pause button
    Hero.jsx                      names + hero photo
    Verse.jsx                     Quran 78:8
    Details.jsx                   date, time, venue photo + map,
                                   countdown, Add to Google Calendar
    Countdown.jsx                 the ticking countdown logic
    Gallery.jsx                   the two extra photos
    Footer.jsx                    closing note + seal mark
  utils/googleCalendar.js        builds the Add to Calendar link
  App.jsx                        wires everything together
  App.css                        every colour, font and layout rule
  index.css                      base reset
```

## Things you may want to adjust

- **Exact map pin** — `Details.jsx` links to a Google Maps *search*
  for "JKAB Park Trincomalee". If you have the exact share link for
  the hall, replace the `MAP_URL` constant near the top of
  `Details.jsx`.
- **Calendar event length** — `utils/googleCalendar.js` currently
  books 12:00 PM–3:00 PM Sri Lanka time. Adjust `START_UTC` /
  `END_UTC` there if the ceremony runs longer or shorter.
- **Colors / fonts** — everything lives under `:root` at the top of
  `App.css`.
