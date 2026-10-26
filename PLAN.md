# Karnataka: A Story in Scroll — Build Plan

## Chapter list

1. Before Kingdoms — stone, ash, iron
2. Edicts and Empires — Ashoka and Satavahana trade
3. The First Kannada Kingdoms — Banavasi, Talakadu, Shravanabelagola
4. Chalukyas of Badami — Pulakeshin II, caves, Aihole, Pattadakal
5. Rashtrakutas — Manyakheta, Amoghavarsha, Kavirajamarga
6. Hoysala Brilliance — Belur, Halebidu, Somanathapura
7. Vijayanagara — Hampi, Krishnadevaraya, Talikota
8. Sultanates and Wodeyars — Bahmani, Bijapur, Mysore
9. Tipu Sultan — rockets, the Anglo-Mysore Wars, 1799
10. Rebels and Queens — Kittur Chennamma, Rayanna, Coorg, freedom movement
11. One Land, One Language — 1956 unification, 1973 renaming
12. Karnataka Today — Bengaluru, Mysuru, Kannada culture, craft, coffee
13. Closing — a quiet line in Kannada and English

## Scene architecture

- A fixed, full-viewport stage carries image layers, the vignette, grain, copy, letterbox bars, and a mini-map.
- The opening is a dedicated 500vh scroll sequence: black cue → outline draw → flag fill wipe → titles → map dock.
- Each chapter is a 360–440vh pinned block driven by one GSAP master timeline with labeled beats.
- Chapter transitions alternate clip wipe, zoom-through, dissolve, horizontal pan, curtain, and mask reveal.
- Reduced-motion mode replaces scrubbed motion with short fades and disables parallax.

## Asset list

- `public/assets/replace-with-real/` — licensed photo drop zone for monuments.
- Local temporary abstract placeholders for each hero and parallax layer; replace with Nano Banana or licensed archival assets later.
- A single `grain-tile.svg` overlay and CSS color-grade layers keep the scene set lightweight.
- The Karnataka outline is derived from DataMeet India state GeoJSON, simplified to 464 points, and rendered as one SVG path.

## File structure

```text
index.html
package.json
README.md
PLAN.md
public/assets/
  replace-with-real/.gitkeep
src/
  main.js
  lenis.js
  animations.js
  map.js
  styles.css
  data/chapters.js
  chapters/ch01.js ... ch13.js
```
