// ── Gallery item builder ──────────────────────────────────────
function gi(item){
  const d=document.createElement('div');
  d.className='gi';
  const img=document.createElement('img');
  img.src=item.s;img.alt=item.t;
  img.style.cssText=`aspect-ratio:${item.r};width:100%;object-fit:cover;`;
  img.loading='lazy';
  d.appendChild(img);
  d.innerHTML+=`<div class="il"><div class="it">${item.t}</div><div class="im">${item.m}</div></div>`;
  d.addEventListener('click',()=>lb(item.t,item.m,item.s));
  return d;
}

// ── Build gallery rows ────────────────────────────────────────
function buildRows(items,container){
  container.innerHTML='';
  if(!items||!items.length){container.innerHTML='<p style="color:#aaa;font-family:Rubik,sans-serif;font-size:13px;font-style:italic;">No images yet</p>';return;}
  const pats=['r-wide','r-flip','r-three','r-wide','r-pair','r-flip'];
  let i=0,p=0;
  while(i<items.length){
    const pat=pats[p%pats.length];
    const row=document.createElement('div');
    row.className='g-row '+pat;
    if(pat==='r-wide'&&i+2<items.length&&p%3===0){
      row.appendChild(gi(items[i]));
      const st=document.createElement('div');st.className='stack';
      st.appendChild(gi(items[i+1]));st.appendChild(gi(items[i+2]));
      row.appendChild(st);i+=3;
    }else if(pat==='r-three'){
      const c=Math.min(3,items.length-i);
      for(let k=0;k<c;k++)row.appendChild(gi(items[i+k]));i+=c;
    }else{
      const c=Math.min(2,items.length-i);
      for(let k=0;k<c;k++)row.appendChild(gi(items[i+k]));i+=c;
    }
    container.appendChild(row);p++;
  }
}

// ── Build a work content view ─────────────────────────────────
function buildView(id,section,cat){
  const area=document.getElementById('work-area');
  const v=document.createElement('div');
  v.className='content-view active';v.id='cv-'+id;
  const accents={prints:'#7abfb4',ceramics:'#c4896a',drawings:'#a08898'};
  const accent=accents[section]||'#7abfb4';
  const sl=section.charAt(0).toUpperCase()+section.slice(1);
  const cl=cat==='all'?'All works':cat.charAt(0).toUpperCase()+cat.slice(1);
  v.innerHTML=`<div class="accent-rule" style="background:${accent};"></div><div class="work-section-heading">${sl}</div><div class="work-section-meta">${cl}</div><div class="gb"></div>`;
  area.appendChild(v);
  const items=cat==='all'?Object.values(GD[section]).flat():GD[section][cat]||[];
  buildRows(items,v.querySelector('.gb'));
}

// ── Show a work category ──────────────────────────────────────
function showCat(section,cat,btn){
  document.querySelectorAll('.content-view').forEach(v=>v.classList.remove('active'));
  const id=section+'-'+cat;
  let v=document.getElementById('cv-'+id);
  if(!v)buildView(id,section,cat);
  else document.getElementById('cv-'+id).classList.add('active');
  document.querySelectorAll('#lcats-'+section+' .leftnav-cat').forEach(c=>c.classList.remove('active'));
  if(btn)btn.classList.add('active');
  lbItems=cat==='all'?Object.values(GD[section]).flat():GD[section][cat]||[];
  window.scrollTo(0,0);
}

// ── Left nav helpers ──────────────────────────────────────────
function openOnly(s){
  ['prints','ceramics','drawings'].forEach(x=>{
    document.getElementById('lcats-'+x).classList.toggle('open',x===s);
    document.getElementById('lplus-'+x).classList.toggle('open',x===s);
  });
}
function toggleNav(s){
  const isOpen=document.getElementById('lcats-'+s).classList.contains('open');
  openOnly(isOpen?'__':s);
}
function closeWorkNav(){
  ['prints','ceramics','drawings'].forEach(x=>{
    document.getElementById('lcats-'+x).classList.remove('open');
    document.getElementById('lplus-'+x).classList.remove('open');
  });
}

// ── About sub-nav ─────────────────────────────────────────────
function showAbout(id,btn){
  document.querySelectorAll('.about-view').forEach(v=>v.classList.remove('active'));
  document.getElementById('av-'+id).classList.add('active');
  document.querySelectorAll('#lcats-about .leftnav-cat').forEach(c=>c.classList.remove('active'));
  if(btn)btn.classList.add('active');
}

// ── Page switching ────────────────────────────────────────────
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const b=document.getElementById(id+'-btn');if(b)b.classList.add('active');
  window.scrollTo(0,0);
}

// ── Lightbox with prev/next ───────────────────────────────────
let lbItems=[];
let lbIndex=0;

function lb(t,m,s){
  // find index in current items
  const idx=lbItems.findIndex(item=>item.s===s);
  lbIndex=idx>=0?idx:0;
  lbShow();
  document.getElementById('lightbox').classList.add('open');
}

function lbShow(){
  const item=lbItems[lbIndex];
  if(!item)return;
  document.getElementById('lb-title').textContent=item.t;
  document.getElementById('lb-meta').textContent=item.m;
  const img=document.getElementById('lb-img');
  img.src=item.s;img.style.display='block';
  // show/hide arrows
  document.getElementById('lb-prev').classList.toggle('hidden',lbIndex===0);
  document.getElementById('lb-next').classList.toggle('hidden',lbIndex===lbItems.length-1);
}

function closeLb(){document.getElementById('lightbox').classList.remove('open');}

// ── Mobile drawer helpers ─────────────────────────────────────
function closeMobileMenu(){
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-backdrop').classList.remove('open');
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  window.scrollTo(0,0);

  // Hamburger
  document.getElementById('hamburger').addEventListener('click',()=>{
    document.getElementById('hamburger').classList.toggle('open');
    document.getElementById('drawer').classList.toggle('open');
    document.getElementById('drawer-backdrop').classList.toggle('open');
  });

  // Close drawer
  document.getElementById('drawer-close').addEventListener('click',closeMobileMenu);
  document.getElementById('drawer-backdrop').addEventListener('click',closeMobileMenu);

  // Work heading toggle in drawer
  document.getElementById('mob-work-heading').addEventListener('click',()=>{
    const h=document.getElementById('mob-work-heading');
    const s=document.getElementById('mob-work-sub');
    document.getElementById('mob-about-heading').classList.remove('open');
    document.getElementById('mob-about-sub').classList.remove('open');
    h.classList.toggle('open');s.classList.toggle('open');
  });

  // About heading toggle in drawer
  document.getElementById('mob-about-heading').addEventListener('click',()=>{
    const h=document.getElementById('mob-about-heading');
    const s=document.getElementById('mob-about-sub');
    document.getElementById('mob-work-heading').classList.remove('open');
    document.getElementById('mob-work-sub').classList.remove('open');
    h.classList.toggle('open');s.classList.toggle('open');
  });

  // Work sub-items in drawer
  document.querySelectorAll('.drawer-sub-item[data-section]').forEach(el=>{
    el.addEventListener('click',()=>{
      const section=el.dataset.section;
      const cat=el.dataset.cat;
      showPage('work');
      openOnly(section);
      const btn=document.querySelector('#lcats-'+section+' .leftnav-cat');
      showCat(section,cat,btn);
      document.querySelectorAll('.drawer-sub-item[data-section]').forEach(i=>i.classList.remove('active'));
      el.classList.add('active');
      closeMobileMenu();
    });
  });

  // About sub-items in drawer
  document.querySelectorAll('.drawer-sub-item[data-about]').forEach(el=>{
    el.addEventListener('click',()=>{
      const id=el.dataset.about;
      showPage('about');
      showAbout(id,document.querySelector('#lcats-about .leftnav-cat'));
      document.querySelectorAll('.drawer-sub-item[data-about]').forEach(i=>i.classList.remove('active'));
      el.classList.add('active');
      closeMobileMenu();
    });
  });

  // Contact in drawer
  document.getElementById('mob-contact-btn').addEventListener('click',()=>{
    showPage('contact');closeMobileMenu();
  });

  // Desktop nav
  document.getElementById('home-link').addEventListener('click',()=>showPage('home'));
  document.getElementById('work-btn').addEventListener('click',()=>{
    showPage('work');openOnly('prints');
    showCat('prints','all',document.querySelector('#lcats-prints .leftnav-cat'));
  });
  document.getElementById('about-btn').addEventListener('click',()=>showPage('about'));
  document.getElementById('contact-btn').addEventListener('click',()=>showPage('contact'));

  // Desktop work left nav
  document.getElementById('lnav-prints').addEventListener('click',()=>toggleNav('prints'));
  document.getElementById('lnav-ceramics').addEventListener('click',()=>toggleNav('ceramics'));
  document.getElementById('lnav-drawings').addEventListener('click',()=>toggleNav('drawings'));

  // Lightbox
  document.getElementById('lb-close').addEventListener('click',closeLb);
  document.getElementById('lightbox').addEventListener('click',e=>{
    if(e.target===e.currentTarget)closeLb();
  });
  document.getElementById('lb-prev').addEventListener('click',e=>{
    e.stopPropagation();
    if(lbIndex>0){lbIndex--;lbShow();}
  });
  document.getElementById('lb-next').addEventListener('click',e=>{
    e.stopPropagation();
    if(lbIndex<lbItems.length-1){lbIndex++;lbShow();}
  });

  // Keyboard navigation
  document.addEventListener('keydown',e=>{
    if(!document.getElementById('lightbox').classList.contains('open'))return;
    if(e.key==='ArrowLeft'&&lbIndex>0){lbIndex--;lbShow();}
    if(e.key==='ArrowRight'&&lbIndex<lbItems.length-1){lbIndex++;lbShow();}
    if(e.key==='Escape')closeLb();
  });

});
