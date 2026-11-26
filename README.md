# Ahmed Taha | Landscape Engineer portfolio

Personal portfolio built with React, Vite, Tailwind CSS, Swiper and a light three.js garden scene.

Live: https://mohamed-ali97.github.io/ahmed-taha/

## Run locally
```
npm install
npm run dev
```
Build with `npm run build`. The site is served from the `gh-pages` branch.

## Notes
- The garden in the hero is a small low-poly three.js scene. It pauses when off screen and is skipped when WebGL is not available.
- Gallery photos are compressed WebP files in `src/gallery` and load only when their section is near the screen.
