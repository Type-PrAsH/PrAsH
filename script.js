// ── SERVICE DATA ──
const services = [
  {
    id: 'video',
    icon: 'film',
    title: 'Video Editing',
    desc: 'Cinematic edits for YouTube, Reels, Ads & more—optimized for engagement.',
    detail: 'From vlogs to commercials, I deliver polished video edits with intentional pacing, dynamic cuts, and strategic hooks. Every project is optimized for platform performance and audience retention.',
    types: ['YouTube Videos', 'Short-Form Content', 'Commercial Ads', 'Documentary Style'],
    projects: [
      { name: 'Tech Review Series', client: 'TechVault', desc: 'Edited 12-episode tech review series achieving 2M+ combined views with 65% avg retention.', color: 'from-blue-500/20 to-purple-500/20' },
      { name: 'Travel Vlog Rebrand', client: 'WanderMore', desc: 'Complete channel rebrand with new intro, transitions, and pacing style. Subscriber growth +40%.', color: 'from-emerald-500/20 to-teal-500/20' },
      { name: 'Product Launch Campaign', client: 'StartupXYZ', desc: 'Fast-paced commercial edit for product launch. 500K views in first week.', color: 'from-orange-500/20 to-red-500/20' }
    ]
  },
  {
    id: 'design',
    icon: 'palette',
    title: 'Design & Motion',
    desc: 'Custom motion graphics, animations & visual effects for dynamic content.',
    detail: 'I create eye-catching motion graphics and animated designs that elevate your message. From animated logos and title sequences to kinetic typography and data visualizations.',
    types: ['Motion Graphics', 'Animated Titles', 'Logo Animation', 'Kinetic Typography'],
    projects: [
      { name: 'Channel Intro Package', client: 'GameZone', desc: 'Complete animated intro, outro, and transition package with particle effects.', color: 'from-red-500/20 to-orange-500/20' },
      { name: 'Explainer Video', client: 'FinTech App', desc: '90s animated explainer breaking down complex features into clear, engaging visuals.', color: 'from-teal-500/20 to-cyan-500/20' },
      { name: 'Social Media Kit', client: 'Startup Co', desc: 'Animated template kit with 20+ customizable motion graphics for consistent brand content.', color: 'from-fuchsia-500/20 to-purple-500/20' }
    ]
  },
  {
    id: 'brand',
    icon: 'sparkles',
    title: 'Brand Direction',
    desc: 'Visual identity and creative strategy aligned with your brand goals.',
    detail: 'Strategic creative direction that defines your brand\'s visual language. Color palettes, typography, visual guidelines, and campaign concepts—everything you need for consistent, compelling brand presence.',
    types: ['Brand Identity', 'Color Grading', 'Visual Guidelines', 'Campaign Concepts'],
    projects: [
      { name: 'Tech Startup Rebrand', client: 'QuantumVenture', desc: 'Complete visual identity overhaul: new color palette, typography, and brand voice application across all touchpoints.', color: 'from-indigo-500/20 to-blue-500/20' },
      { name: 'E-commerce Brand Refresh', client: 'LuxeGoods', desc: 'Cohesive visual system with mood boards, color grading, and lifestyle photography direction.', color: 'from-rose-500/20 to-pink-500/20' },
      { name: 'Agency Brand Guidelines', client: 'Creative Plus', desc: 'Complete 50+ page brand guidelines document with visual systems and application examples.', color: 'from-amber-500/20 to-yellow-500/20' }
    ]
  },
  {
    id: 'color',
    icon: 'sun',
    title: 'Color Grading',
    desc: 'Cinematic color correction that sets mood and elevates visual quality.',
    detail: 'Professional color grading using industry-standard tools to deliver polished, consistent color across your project. From subtle corrections to bold cinematic looks—each grade serves your story.',
    types: ['Film Look', 'Batch Color Correction', 'HDR Grading', 'Brand Color Matching'],
    projects: [
      { name: 'Short Film "Dusk"', client: 'Indie Director', desc: 'Full color grade for 22-minute short film with warm golden-hour palette and teal shadow tones.', color: 'from-amber-500/20 to-orange-500/20' },
      { name: 'Music Video Grade', client: 'Artist NOVA', desc: 'Moody, desaturated grade with selective color pops and cohesive emotional arc.', color: 'from-indigo-500/20 to-blue-500/20' },
      { name: 'Wedding Film', client: 'Private Client', desc: 'Romantic, airy color palette with soft highlights and pastel tones across entire film.', color: 'from-rose-500/20 to-pink-500/20' }
    ]
  },
  {
    id: 'strategy',
    icon: 'target',
    title: 'Creative Consulting',
    desc: 'Strategic guidance on video content, branding & visual communication.',
    detail: 'Collaborate with me on your creative vision. From concept development to execution strategy, I provide actionable insights to ensure your content resonates and converts.',
    types: ['Content Strategy', 'Creative Workshops', 'Project Planning', 'Campaign Strategy'],
    projects: [
      { name: 'YouTube Channel Strategy', client: 'Creator Academy', desc: 'Developed content pillars, posting schedule, and thumbnail strategy increasing watch time by 3x.', color: 'from-red-500/20 to-pink-500/20' },
      { name: 'Social Media Blueprint', client: 'Wellness Brand', desc: 'Quarterly content calendar with 80+ video concepts, trending formats, and brand alignment.', color: 'from-green-500/20 to-emerald-500/20' },
      { name: 'Brand Launch Campaign', client: 'Fashion Label', desc: 'End-to-end creative strategy for brand launch including video narrative, visuals, and rollout timeline.', color: 'from-purple-500/20 to-violet-500/20' }
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

        <h2 class="font-syne text-xl md:text-2xl font-bold mb-8">Sub Services</h2>
        <div class="grid md:grid-cols-3 gap-5">
          ${s.projects.map((p, i) => `
            <div class="project-thumb relative rounded-xl overflow-hidden bg-surface border border-white/5 group" style="animation: fadeUp 0.5s ease forwards; animation-delay: ${i * 0.15}s; opacity:0;">
              <div class="aspect-video bg-gradient-to-br ${p.color} flex items-center justify-center relative">
                <div class="w-14 h-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                  <i data-lucide="play" style="width:24px;height:24px;" class="text-white ml-1"></i>
                </div>
                <div class="thumb-overlay absolute inset-0 bg-black/30 opacity-0 flex items-center justify-center">
                  <span class="text-xs text-white font-medium">View</span>
                </div>
              </div>
              <div class="p-5">
                <p class="text-xs text-accent mb-1">${p.client}</p>
                <h3 class="font-semibold text-sm mb-2">${p.name}</h3>
                <p class="text-xs text-muted leading-relaxed">${p.desc}</p>
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
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('form-success').classList.remove('hidden');
  e.target.reset();
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
