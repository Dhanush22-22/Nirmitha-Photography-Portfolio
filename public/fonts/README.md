# Fonts pending license verification

`TT Ricordi Nobili`, `Burgues Script` and `New Icon` are used throughout the original
Canva deck but have not been confirmed as licensed for web (`@font-face`) use.

The infrastructure is already wired in `src/styles/typography.css`. To activate a font:

1. Confirm a valid web license for it.
2. Drop the `.woff2` file(s) here using the exact filename(s) referenced in
   `typography.css` (e.g. `TTRicordiNobili-Bold.woff2`).
3. No other changes are needed — every section reads the family through the
   `--font-display` / `--font-script` / `--font-tag` CSS variables.

Until then, the site falls back to close system-font approximations.
