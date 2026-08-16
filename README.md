# Parcel Simulator — Acceptance Criteria

Every acceptance criterion from [Parcel Simulator](https://store.steampowered.com/app/2424010/Parcel_Simulator/)
on a single screen, no scrolling: which cargo types ship on which weekday,
prohibited contents, accepted countries, valid stamps and weight classes.

Meant as a second-monitor or phone cheat sheet next to the running game.

**➜ [Open the page](https://pixelschmied.github.io/Parcel-Sim-Helper/)**

---

## What's on it

| Block | Contents |
|---|---|
| Cargo type | Pick a weekday in the top bar; the types that ship that day appear below it |
| Prohibited contents | The five items that make a parcel a reject |
| Countries | All twelve accepted countries, flag and name |
| Stamps | The five valid stamps |
| Weight classes | A through E with their kg ranges |

### Cargo type calendar

| | MON | TUE | WED | THU | FRI | SAT | SUN |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Truck | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Train | ✔ | ✔ | ✔ | ✔ | ✔ | | |
| Plane | | | ✔ | | ✔ | | |
| Ship | | ✔ | | | | | |

## Using it

- **Weekday**: switch it in the top bar. Your choice is remembered. It
  deliberately has nothing to do with the real date, because the in-game day
  is its own thing.
- **Language**: the flag in the top right corner. Your browser language is
  detected on first visit; after that your choice wins.
- The page fits any window size and never scrolls. On narrow screens the
  headings and hint texts drop out and the buttons stay finger-sized.

## Languages

The same twelve the game ships with: English, Deutsch, Français,
Español (España), Español (Latinoamérica), Português (Brasil), Italiano,
Polski, Русский, 简体中文, 日本語, 한국어.

Country names stay in Latin script in every language — they have to match
what is printed on the parcel label character for character.

## Running it locally

No build step, no package manager. Opening `index.html` in a browser is enough.

```bash
git clone https://github.com/pixelschmied/Parcel-Sim-Helper.git
```

Layout:

```
index.html    page, layout and logic
i18n.js       translations for all twelve languages
flags.js      SVG flags for the language picker
assets/       31 image crops taken from the game
```

To change the criteria, edit the data blocks `FREIGHT`, `ITEMS`, `COUNTRIES`
and `WEIGHTS` in `index.html`; all wording lives in `i18n.js`.

---

## Legal

**This is an unofficial fan project. It is not affiliated with, endorsed by,
or reviewed by Dansan Digital.**

### The game

- Game: **Parcel Simulator**
- Developer and publisher: **Dansan Digital**
- Released: 20 June 2025
- Steam: <https://store.steampowered.com/app/2424010/Parcel_Simulator/>

### Artwork

Every file in `assets/` is a crop taken from screenshots of Parcel Simulator.
They show the game's icons, flags, stamps, weight classes and item renders,
and they are **© Dansan Digital. All rights reserved.**

They are used here for one purpose only: to let players recognise the
acceptance criteria that appear in the game. Non-commercial, no ads, no
donation links, nothing for sale. The crops are copied pixel for pixel and
their content is unaltered; the only change is that the background has been
made transparent so they sit cleanly on the page.

This use is **not** covered by the project's MIT licence. Forking or reusing
this project grants you no rights whatsoever to that artwork.

> **To Dansan Digital:** if you would rather this artwork were not used this
> way, please open an issue on this repository. The artwork, or the whole
> project, will be taken down promptly.

### Trademarks

"Parcel Simulator", "Dansan Digital" and all other names and marks mentioned
here belong to their respective owners and are used purely to identify the
game.

### Language flags

The flags in the language picker (`flags.js`) are original, deliberately
simplified SVG drawings and do not come from the game. They exist to make the
language picker readable and make no claim to heraldic accuracy.

### No warranty

The information here was taken from the game to the best of our knowledge. It
may go stale after a game update or simply be wrong. When in doubt, what the
game says wins.

## Licence

The **source code** is under the [MIT licence](LICENSE).

The **artwork in `assets/` is not** — see "Artwork" above.
