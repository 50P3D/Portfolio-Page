


# portfolio

a personal portfolio with a token-gated lock screen, cinematic transition, and a brutalist project index.

hosted on github pages. zero backend. zero frameworks.

---

## what this is

* a **lock screen** that plays gatekeeper — visitors arrive via linkedin, github, or nfc tap
* a **cinematic upward transition** that fires on unlock — ground to sky
* a **falling characters scene** in the background (svg animated, original artwork)
* a **brutalist numbered index** of projects, papers, and videos — mschf-style
* a **frosted translucent panel** floating over the scene on mobile
* a **hover preview window** that shows a still or clip before you click through
* **ncs background music** that starts on unlock

---

## project structure

```
portfolio/
├── index.html          # lock screen (default landing)
├── portfolio.html      # unlocked portfolio index
├── css/
│   ├── lock.css        # lock screen styles
│   ├── portfolio.css   # index styles
│   └── transition.css  # upward pan animation
├── js/
│   ├── auth.js         # token detection + cookie logic
│   ├── transition.js   # unlock animation trigger
│   ├── player.js       # music player
│   └── preview.js      # hover preview window
├── audio/
│   └── track.mp3       # ncs track (credit in footer)
├── images/
│   └── bg/             # your personal photos for background
└── README.md
```

---

## how the access model works

three valid entry points, each with a url token:

| source   | url                       |
| -------- | ------------------------- |
| linkedin | `yoursite.com/?ref=li`  |
| github   | `yoursite.com/?ref=gh`  |
| nfc card | `yoursite.com/?ref=nfc` |

when a valid token is detected:

1. a cookie is set (`access=granted`, expires in 7 days)
2. the transition animation fires
3. music starts
4. portfolio index is revealed

when no token and no cookie:

* visitor sees the lock screen only
* message explains how to get access

returning visitors (cookie already set) skip straight to the portfolio.

---

## prerequisites — what to know before building this

### html (basics)

you need to understand the structure of an html document. specifically:

* what `<head>` vs `<body>` does
* how to link css and js files with `<link>` and `<script>`
* semantic elements: `<main>`, `<section>`, `<nav>`, `<a>`, `<audio>`
* how `class` and `id` attributes work

**resource:** [mdn html basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

---

### css (intermediate basics)

you need to be comfortable with:

* the box model (margin, padding, border)
* `position`: relative, absolute, fixed — and how they interact
* `flexbox` for layout (this does most of the heavy lifting)
* `z-index` for layering elements (falling scene behind, panel in front)
* `backdrop-filter: blur()` for the frosted glass panel
* css variables (`--color-bg`, `--font-mono`) for consistency
* `@keyframes` for animations
* `transform: translateY()` for the upward pan transition
* `@media (max-width: 768px)` for basic mobile adjustments
* `@media (prefers-reduced-motion: reduce)` for accessibility

**resource:** [css tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

### javascript (the five concepts you actually need)

**1. reading url parameters**

```javascript
// reads the ?ref=li part of the url
const params = new URLSearchParams(window.location.search)
const token = params.get('ref') // returns 'li', 'gh', 'nfc', or null
```

**2. setting and reading cookies**

```javascript
// set a cookie that lasts 7 days
document.cookie = "access=granted; max-age=604800; path=/"

// check if cookie exists
const hasAccess = document.cookie.includes("access=granted")
```

**3. triggering animations with classlist**

```javascript
// adding a class fires the css animation defined in transition.css
document.body.classList.add('unlocked')
```

**4. event listeners for hover previews**

```javascript
const item = document.querySelector('.project-item')
item.addEventListener('mouseenter', showPreview)
item.addEventListener('mouseleave', hidePreview)
```

**5. audio playback**

```javascript
const audio = new Audio('audio/track.mp3')
audio.volume = 0.4
audio.loop = true
audio.play() // must be called after a user interaction (browser rule)
```

**what you do not need:**

* react, vue, or any framework
* node.js or any backend
* npm or build tools
* php

---

### git + github pages (deployment)

you need to know:

* `git init`, `git add`, `git commit`, `git push`
* how to create a github repo and enable github pages (`settings → pages → main branch`)
* your site will live at `yourusername.github.io/portfolio`

**resource:** [github pages quickstart](https://docs.github.com/en/pages/quickstart)

---

### svg basics (light touch)

the falling characters scene is built in svg. you do not need to write svg from scratch — it is already built — but you should understand:

* svg is just xml, like html
* `<rect>`, `<ellipse>`, `<line>`, `<path>` are the basic shapes
* `animation` in css applies to svg elements the same way it applies to html
* `viewBox` controls the coordinate system

---

## design decisions

| decision         | choice                                       | reason                                     |
| ---------------- | -------------------------------------------- | ------------------------------------------ |
| visual direction | brutalist index + dramatic lock screen       | one wow moment, then clarity               |
| background       | personal photos (blurred)                    | original, personal, zero copyright risk    |
| music            | ncs tracks via embed                         | licensed for free use with attribution     |
| characters       | original svg illustrations                   | transformative, no copyright risk          |
| mobile layout    | translucent frosted panel over falling scene | `backdrop-filter`handles this natively   |
| frameworks       | none                                         | github pages, zero backend, keep it simple |

---

## music attribution

music by ncs — [nocopyrightsounds.com](https://nocopyrightsounds.com/)

track: [track name — artist name]

license: free to use with credit

---

## accessibility notes

* `@media (prefers-reduced-motion: reduce)` disables all animations for users who need it
* color contrast should meet wcag aa minimum (4.5:1 ratio) — check with [coolors contrast checker](https://coolors.co/contrast-checker)
* keyboard navigation should work for the index list (tab + enter)
* add `alt=""` to all decorative images, meaningful descriptions to content images

---

## build order

```
1. lock screen html + css
2. token detection + cookie js (auth.js)
3. transition animation (transition.css + transition.js)
4. falling scene svg animation
5. portfolio index html + css
6. hover preview window
7. music player
8. mobile responsive pass
9. deploy to github pages
10. program nfc card to ?ref=nfc url
```

---

## still to decide

* [ ] your name and role line for the lock screen
* [ ] which ncs tracks to use
* [ ] final list of projects / papers to include
* [ ] photo selection for background
* [ ] whether paper entries link to pdf, doi, or medium writeu
