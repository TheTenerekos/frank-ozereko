# Frank Ozereko — Artist Website

## Project Structure
```
frank-ozereko/
├── index.html
├── css/style.css
├── js/
│   ├── gallery-data.js  ← EDIT THIS to add/update artwork
│   └── main.js
└── images/
    ├── home/
    ├── about/
    ├── prints/
    ├── ceramics/
    └── drawings/
```

## Adding New Images
1. Drop the image into the correct `images/` subfolder
2. Add an entry to `js/gallery-data.js`:
```js
{ s: 'images/prints/assemblies_01.jpg', t: 'Assembly No. 1', m: 'Screen print, 2024', r: '4/3' }
```
Use `ratio: '3/4'` for portrait, `ratio: '4/3'` for landscape.

## Deploying to GitHub Pages
1. Create a new **public** repo on GitHub
2. Upload all files (keep the folder structure)
3. Settings → Pages → Source: main branch / root
4. Live at: `https://yourusername.github.io/frank-ozereko`

## Custom Domain
Add a file called `CNAME` containing just: `frankozereko.com`
Then point your domain DNS to GitHub Pages.
