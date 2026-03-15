// ─────────────────────────────────────────────────────────────
// LAYOUT ENGINE — builds asymmetric rows from gallery-data.js
// ─────────────────────────────────────────────────────────────

function gi(item) {
  const d = document.createElement('div');
  d.className = 'gi';
  d.innerHTML = `
    <img src="${item.src}" alt="${item.title}" style="aspect-ratio:${item.ratio};" loading="lazy" />
    <div class="il"><div class="it">${item.title}</div><div class="im">${item.meta}</div></div>`;
  d.addEventListener('click', () => openLightbox(item.src, item.title, item.meta));
  return d;
}

// Builds rows with alternating asymmetric patterns
function buildGallery(items, container) {
  container.innerHTML = '';
  if (!items || items.length === 0) {
    container.innerHTML = '<p style="color:#aaa;font-family:Rubik,sans-serif;font-size:13px;">No images yet — add them to gallery-data.js</p>';
    return;
  }

  const patterns = ['r-wide', 'r-flip', 'r-three', 'r-wide', 'r-flip', 'r-pair'];
  let i = 0, p = 0;

  while (i < items.length) {
    const pat = patterns[p % patterns.length];
    const row = document.createElement('div');
    row.className = `g-row ${pat}`;

    if (pat === 'r-wide' || pat === 'r-flip') {
      if (i + 1 < items.length) {
        // Check if we should stack on the right
        if (i + 2 < items.length && pat === 'r-wide' && p % 4 === 0) {
          row.appendChild(gi(items[i]));
          const stack = document.createElement('div');
          stack.className = 'stack';
          stack.appendChild(gi(items[i+1]));
          if (i + 2 < items.length) stack.appendChild(gi(items[i+2]));
          row.appendChild(stack);
          i += i + 2 < items.length ? 3 : 2;
        } else {
          row.appendChild(gi(items[i]));
          row.appendChild(gi(items[i+1]));
          i += 2;
        }
      } else {
        row.classList.remove(pat);
        row.classList.add('r-pair');
        row.appendChild(gi(items[i]));
        i++;
      }
    } else if (pat === 'r-three') {
      const count = Math.min(3, items.length - i);
      for (let k = 0; k < count; k++) row.appendChild(gi(items[i+k]));
      i += count;
    } else { // r-pair
      const count = Math.min(2, items.length - i);
      for (let k = 0; k < count; k++) row.appendChild(gi(items[i+k]));
      i += count;
    }

    container.appendChild(row);
    p++;
  }
}

// Build ALL view from all categories combined
function buildAll(section, container) {
  const sectionData = GALLERY[section];
  const all = Object.values(sectionData).flat();
  buildGallery(all, container);
}

// ─────────────────────────────────────────────────────────────
// NAV & PAGE LOGIC
// ─────────────────────────────────────────────────────────────

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(id + '-btn');
  if (btn) btn.classList.add('active');
  window.scrollTo(0, 0);
}

function openOnlyNav(section) {
  ['prints','ceramics','drawings'].forEach(s => {
    document.getElementById('lcats-' + s).classList.toggle('open', s === section);
    document.getElementById('lplus-' + s).classList.toggle('open', s === section);
  });
}

function toggleOnlyNav(section) {
  const isOpen = document.getElementById('lcats-' + section).classList.contains('open');
  openOnlyNav(isOpen ? '__none__' : section);
}

function showContent(id, btn, section) {
  openOnlyNav(section);
  document.querySelectorAll('.content-view').forEach(v => v.classList.remove('active'));
  const view = document.getElementById('cv-' + id);
  if (view) {
    view.classList.add('active');
  } else {
    // Build dynamically
    buildContentView(id, section);
  }
  document.querySelectorAll('#lcats-' + section + ' .leftnav-cat').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function buildContentView(id, section) {
  const area = document.getElementById('work-content-area');
  // id format: "prints-portraits", "drawings-maps", etc.
  const parts = id.split('-');
  const cat = parts.slice(1).join('-');

  const view = document.createElement('div');
  view.className = 'content-view active';
  view.id = 'cv-' + id;

  // accent colors per section
  const accents = { prints: '#7abfb4', ceramics: '#c4896a', drawings: '#a08898' };
  const accent = accents[section] || '#7abfb4';
  const sectionLabel = section.charAt(0).toUpperCase() + section.slice(1);
  const catLabel = cat === 'all' ? 'All works' : cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ');

  view.innerHTML = `
    <div class="accent-rule" style="background:${accent};"></div>
    <div class="work-section-heading">${sectionLabel}</div>
    <div class="work-section-meta">${catLabel}</div>
    <div class="gallery-build"></div>`;

  area.appendChild(view);

  const galleryEl = view.querySelector('.gallery-build');
  if (cat === 'all') {
    buildAll(section, galleryEl);
  } else {
    const items = GALLERY[section] && GALLERY[section][cat.replace('-', '')] || [];
    buildGallery(items, galleryEl);
  }
}

function showAbout(id, btn) {
  document.querySelectorAll('.about-view').forEach(v => v.classList.remove('active'));
  document.getElementById('av-' + id).classList.add('active');
  document.querySelectorAll('#lcats-about .leftnav-cat').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// ─────────────────────────────────────────────────────────────
// LIGHTBOX
// ─────────────────────────────────────────────────────────────

function openLightbox(src, title, meta) {
  const img = document.getElementById('lightbox-img');
  img.src = src;
  img.style.display = src ? 'block' : 'none';
  document.getElementById('lightbox-title').textContent = title;
  document.getElementById('lightbox-meta').textContent = meta;
  document.getElementById('lightbox').classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

// ─────────────────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('home-link').addEventListener('click', () => showPage('home'));
  document.getElementById('work-btn').addEventListener('click', () => {
    showPage('work');
    openOnlyNav('prints');
    showContent('prints-all', document.querySelector('#lcats-prints .leftnav-cat'), 'prints');
  });
  document.getElementById('about-btn').addEventListener('click', () => showPage('about'));
  document.getElementById('contact-btn').addEventListener('click', () => showPage('contact'));

  document.getElementById('lnav-prints-btn').addEventListener('click', () => {
    toggleOnlyNav('prints');
    showContent('prints-all', document.querySelector('#lcats-prints .leftnav-cat'), 'prints');
  });
  document.getElementById('lnav-ceramics-btn').addEventListener('click', () => {
    toggleOnlyNav('ceramics');
    showContent('ceramics-all', document.querySelector('#lcats-ceramics .leftnav-cat'), 'ceramics');
  });
  document.getElementById('lnav-drawings-btn').addEventListener('click', () => {
    toggleOnlyNav('drawings');
    showContent('drawings-all', document.querySelector('#lcats-drawings .leftnav-cat'), 'drawings');
  });

  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', e => { if (e.target === e.currentTarget) closeLightbox(); });
});
