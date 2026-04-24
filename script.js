// ── SERVICE DATA ──
const services = [
  {
    id: 'video',
    icon: 'film',
    title: 'Video Editing',
    desc: 'Cinematic edits for YouTube, Reels, Ads & more—optimized for engagement.',
    detail: 'From vlogs to commercials, I deliver polished video edits with intentional pacing, dynamic cuts, and strategic hooks. Every project is optimized for platform performance and audience retention.',
    types: ['YouTube Videos', 'Short-Form Content', 'Commercial Ads', 'Documentary Style'],
    subServices: [
      {
        name: 'YouTube Editing',
        projects: [
        ]
      },
      {
        name: 'Reels / Shorts',
        projects: [
        ]
      }
    ]
  },
  {
    id: 'web',
    icon: 'layout',
    title: 'Web Design',
    desc: 'Stunning, responsive, and high-converting websites.',
    detail: 'I create modern, scalable web designs with precise aesthetics and optimal user experiences. From landing pages to full e-commerce platforms, every site is crafted for maximum impact.',
    types: ['Landing Pages', 'E-commerce', 'Portfolios', 'Web Apps'],
    subServices: [
      {
        name: 'Landing Pages',
        projects: [
          { name: 'Wedding Invitation Website', client: 'Ayush & Kavya', desc: 'A modern, responsive wedding invitation site with RSVP functionality.', color: 'from-rose-500/20 to-pink-500/20', link: 'https://ayush-kavya.vercel.app', image: './media/Screenshot from 2026-04-24 17-12-10.png' },
        ]
      },
      {
        name: 'E-commerce',
        projects: [
        ]
      }
    ]
  }
];

// ── RENDER SERVICE CARDS ──
const grid = document.getElementById('services-grid');
services.forEach((s, i) => {
  const card = document.createElement('div');
  card.className = 'service-card cursor-pointer relative rounded-xl bg-surface border border-white/5 p-6 group';
  card.style.animationDelay = `${i * 0.1}s`;
  card.innerHTML = `
    <div class="card-glow absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
    <div class="relative z-10">
      <div class="w-11 h-11 rounded-lg bg-accent/15 flex items-center justify-center mb-5"><i data-lucide="${s.icon}" style="width:20px;height:20px;" class="text-accent"></i></div>
      <h3 class="font-semibold mb-2">${s.title}</h3>
      <p class="text-sm text-muted leading-relaxed mb-4">${s.desc}</p>
      <span class="inline-flex items-center gap-1 text-xs text-accent font-medium">View Projects <i data-lucide="arrow-right" style="width:12px;height:12px;"></i></span>
    </div>
  `;
  card.addEventListener('click', () => openService(s.id));
  grid.appendChild(card);
});

// ── OPEN SERVICE DETAIL ──
function openService(id) {
  const s = services.find(x => x.id === id);
  if (!s) return;
  const page = document.getElementById('service-page');
  page.innerHTML = `
    <div class="page-transition pt-8 pb-16 px-6">
      <div class="max-w-6xl mx-auto">
        <button onclick="closeService()" class="back-btn inline-flex items-center gap-2 text-sm text-muted hover:text-text mb-10">
          <i data-lucide="arrow-left" style="width:16px;height:16px;"></i> Back to Services
        </button>
        <div class="mb-12">
          <div class="inline-flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center"><i data-lucide="${s.icon}" style="width:20px;height:20px;" class="text-accent"></i></div>
            <span class="text-xs text-accent uppercase tracking-[0.2em] font-medium">Service</span>
          </div>
          <h1 class="font-syne text-3xl md:text-5xl font-bold mb-4">${s.title}</h1>
          <p class="text-muted max-w-2xl leading-relaxed mb-8">${s.detail}</p>
          <div class="flex flex-wrap gap-2">
            ${s.types.map(t => `<span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-muted">${t}</span>`).join('')}
          </div>
        </div>

        <div class="space-y-12 mb-8">
          ${s.subServices.map((sub, idx) => `
            <div>
              <div class="flex items-center gap-3 mb-6">
                <span class="w-8 h-[1px] bg-accent/40"></span>
                <h2 class="font-syne text-xl md:text-2xl font-bold">${sub.name}</h2>
              </div>
              <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                ${sub.projects.map((p, i) => `
                  <div class="project-thumb relative rounded-xl overflow-hidden bg-surface border border-white/5 group" style="animation: fadeUp 0.5s ease forwards; animation-delay: ${((idx * 2) + i) * 0.05}s; opacity:0;">
                    ${p.link ? `<a href="${p.link}" target="_blank" class="block relative">` : `<div class="relative">`}
                    <div class="aspect-video bg-gradient-to-br ${p.color} flex items-center justify-center relative bg-cover bg-center" ${p.image ? `style="background-image: url('${p.image}')"` : ''}>
                      <div class="w-14 h-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                        <i data-lucide="${s.icon === 'film' ? 'play' : 'external-link'}" style="width:24px;height:24px;" class="text-white flex-shrink-0 font-bold"></i>
                      </div>
                      <div class="thumb-overlay absolute inset-0 bg-black/30 opacity-0 flex items-center justify-center group-hover:opacity-100 transition-opacity">
                        <span class="text-xs text-white font-medium">View</span>
                      </div>
                    </div>
                    ${p.link ? `</a>` : `</div>`}
                    <div class="p-5">
                      <p class="text-xs text-accent mb-1">${p.client || ''}</p>
                      <h3 class="font-semibold text-sm mb-2">${p.name}</h3>
                      <p class="text-xs text-muted leading-relaxed">${p.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="mt-16 p-8 rounded-xl bg-surface border border-white/5 text-center">
          <h3 class="font-syne text-xl font-bold mb-2">Interested in ${s.title}?</h3>
          <p class="text-sm text-muted mb-6">Let's discuss how I can help elevate your project.</p>
          <button onclick="closeService(); setTimeout(() => document.getElementById('contact').scrollIntoView({behavior:'smooth'}), 300);" class="cta-btn inline-flex items-center gap-2 bg-accent text-bg font-semibold px-7 py-3 rounded-full text-sm">
            Get in Touch <i data-lucide="arrow-right" style="width:16px;height:16px;"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('main-page').classList.add('hidden');
  page.classList.remove('hidden');
  document.getElementById('app').scrollTop = 0;
  lucide.createIcons();
}

function closeService() {
  document.getElementById('service-page').classList.add('hidden');
  document.getElementById('main-page').classList.remove('hidden');
  setTimeout(() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }), 50);
}

// ── MOBILE MENU ──
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
function closeMobile() { document.getElementById('mobile-menu').classList.add('hidden'); }

// ── CONTACT FORM ──
const cfService = document.getElementById('cf-service');
const cfSubservice = document.getElementById('cf-subservice');

const subservicesMap = {
  'Video Editing': ['YouTube Editing', 'Reels / Shorts', 'Other'],
  'Web Design': ['Landing Pages', 'E-commerce', 'Other']
};

if (cfService && cfSubservice) {
  cfService.addEventListener('change', (e) => {
    const val = e.target.value;
    cfSubservice.innerHTML = '<option value="">Select an option</option>';
    if (subservicesMap[val]) {
      cfSubservice.disabled = false;
      cfSubservice.classList.remove('opacity-50', 'cursor-not-allowed');
      subservicesMap[val].forEach(sub => {
        const opt = document.createElement('option');
        opt.value = sub;
        opt.textContent = sub;
        cfSubservice.appendChild(opt);
      });
    } else {
      cfSubservice.disabled = true;
      cfSubservice.classList.add('opacity-50', 'cursor-not-allowed');
      cfSubservice.innerHTML = '<option value="">Choose a service first</option>';
    }
  });
}

document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('form-success').classList.remove('hidden');
  e.target.reset();
  if (cfSubservice) {
    cfSubservice.disabled = true;
    cfSubservice.classList.add('opacity-50', 'cursor-not-allowed');
    cfSubservice.innerHTML = '<option value="">Choose a service first</option>';
  }
  setTimeout(() => document.getElementById('form-success').classList.add('hidden'), 4000);
});

// ── ELEMENT SDK ──
const defaultConfig = {
  hero_title: 'Premium visual solutions for individuals & brands.',
  hero_subtitle: 'I blend technical expertise with creative design to deliver high-quality video editing and web design that connects authentically with your audience.',
  profile_image_url: './media/profile_pic.jpeg',
  about_heading: 'Crafting Digital Experiences',
  about_text: 'I am Prashant Agrawal, a Computer Science student blending technical expertise with creative problem-solving. My consistent and hardworking approach allows me to deliver high-quality digital services efficiently, ensuring premium outcomes with rigorous attention to detail.',
  contact_heading: "Let's Create Something Amazing",
  contact_email: 'prashforwork@gmail.com',
  background_color: '#0a0a0b',
  surface_color: '#141416',
  text_color: '#e8e8e8',
  accent_color: '#c8ff00',
  muted_color: '#6b6b6b',
  font_family: 'Outfit',
  font_size: 16
};

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };

  // Text
  const heroEl = document.getElementById('hero-title');
  if (heroEl) heroEl.textContent = c.hero_title || defaultConfig.hero_title;
  const heroSub = document.getElementById('hero-subtitle');
  if (heroSub) heroSub.textContent = c.hero_subtitle || defaultConfig.hero_subtitle;
  
  // Profile image
  const profileImg = document.getElementById('profile-image');
  if (profileImg && c.profile_image_url) {
    profileImg.src = c.profile_image_url;
  }
  
  const aboutH = document.getElementById('about-heading');
  if (aboutH) aboutH.textContent = c.about_heading || defaultConfig.about_heading;
  const aboutT = document.getElementById('about-text');
  if (aboutT) aboutT.textContent = c.about_text || defaultConfig.about_text;
  const contactH = document.getElementById('contact-heading');
  if (contactH) contactH.textContent = c.contact_heading || defaultConfig.contact_heading;
  const contactE = document.getElementById('contact-email-display');
  if (contactE) contactE.innerHTML = `<i data-lucide="mail" style="width:14px;height:14px;"></i> ${c.contact_email || defaultConfig.contact_email}`;

  // Colors
  document.documentElement.style.setProperty('--bg', c.background_color);
  document.body.style.backgroundColor = c.background_color;
  document.body.style.color = c.text_color;

  // Font
  const ff = c.font_family || defaultConfig.font_family;
  document.body.style.fontFamily = `${ff}, Outfit, sans-serif`;
  const base = c.font_size || defaultConfig.font_size;
  document.body.style.fontSize = base + 'px';

  lucide.createIcons();
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => applyConfig(config),
    mapToCapabilities: (config) => ({
      recolorables: [
        { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
        { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
        { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
        { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); } },
        { get: () => config.muted_color || defaultConfig.muted_color, set: (v) => { config.muted_color = v; window.elementSdk.setConfig({ muted_color: v }); } }
      ],
      borderables: [],
      fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
      fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
    }),
    mapToEditPanelValues: (config) => new Map([
      ['hero_title', config.hero_title || defaultConfig.hero_title],
      ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
      ['profile_image_url', config.profile_image_url || defaultConfig.profile_image_url],
      ['about_heading', config.about_heading || defaultConfig.about_heading],
      ['about_text', config.about_text || defaultConfig.about_text],
      ['contact_heading', config.contact_heading || defaultConfig.contact_heading],
      ['contact_email', config.contact_email || defaultConfig.contact_email]
    ])
  });
}

// Init icons
lucide.createIcons();
