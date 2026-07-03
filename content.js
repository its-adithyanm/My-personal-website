const siteContent = {
    meta: {
        title: "Adithyan M — Tech Content Creator | SnapBlitz"
    },
    loader: {
        text: "SNAPBLITZ" // Will be split into spans
    },
    nav: {
        logo: "SNAPBLITZ",
        links: [
            { text: "Home", url: "/" },
            { text: "About", url: "/about-adithyan-m/" },
            { text: "Tech Content", url: "/#work" },
            { text: "Collaborate", url: "/collaborate/" },
            { text: "Contact", url: "/contact/" }
        ]
    },
    hero: {
        bgText: "ADITHYAN M",
        tag: "Adithyan M &middot; Tech Content Creator",
        headingSmall: "",
        headingMain: "ADITHYAN M",
        headingSub: "Tech Content Creator (SnapBlitz)",
        subtext: "I am Adithyan M, a tech content creator sharing smartphone reviews, gadget tips, Android tricks, and engaging tech videos.",
        cta1: { text: "See My Work", url: "#work" },
        cta2: { text: "Get In Touch", url: "#contact" },
        scrollLabel: "Scroll",
        socials: [
            { text: "IG", url: "https://www.instagram.com/snap_blitz", ariaLabel: "Follow Adithyan M on Instagram" },
            { text: "YT", url: "https://www.youtube.com/@snap_blitz", ariaLabel: "Subscribe to Adithyan M on YouTube" },
            { text: "LI", url: "https://www.linkedin.com/in/adithyan-m-content-creator", ariaLabel: "Connect with Adithyan M on LinkedIn" }
        ]
    },
    marquee: {
        text: "Adithyan M &middot; Tech Content Creator &middot; Smartphone Reviews &middot; Gadget Tips &middot; Android Tricks &middot; Mobile Features &middot; Tech Videos &middot;",
        repeat: 2
    },
    about: {
        image: "assets/images/photo.webp",
        location: "Kerala, India",
        title: "About Adithyan M &ndash; Tech Content Creator from Kerala, India",
        bio: [
            "I'm Adithyan M, also known as <strong>SnapBlitz</strong>. This is my official website where I share my passion for technology as a dedicated tech content creator based in Kerala, India.",
            "As Adithyan M, my main niche is tech content creation. I focus on delivering high-quality smartphone reviews, gadget tips, Android tricks, and exploring the latest mobile features.",
            "Through my SnapBlitz channels, I create engaging technology videos and digital content that simplify technology for everyday users. Explore the <a href=\"#work\" style=\"color: var(--text-color); text-decoration: underline;\">Tech Content by Adithyan M</a> to see what I create, or visit the <a href=\"#platforms\" style=\"color: var(--text-color); text-decoration: underline;\">Official Platforms of Adithyan M</a> to watch the latest videos.",
            "Whether you are looking for tech reviews or Android tricks, I, Adithyan M, am here to guide you through the fast-paced world of technology. Feel free to <a href=\"#contact\" style=\"color: var(--text-color); text-decoration: underline;\">Contact Adithyan M</a> for any brand collaborations or tech partnerships."
        ],
        stats: [
            { target: "50", suffix: "K+", label: "Views" },
            { target: "3", suffix: "", label: "Platforms" },
            { target: "100", suffix: "+", label: "Projects" }
        ]
    },
    work: {
        title: "Tech Content by Adithyan M",
        cards: [
            {
                num: "01",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <path d="M12 18h.01"></path>
                            <circle cx="15" cy="11" r="3"></circle>
                            <line x1="17.1" y1="13.1" x2="19" y2="15"></line>
                        </svg>`,
                title: "Tech Reviews & Unboxing",
                desc: "In-depth reviews and unboxing of the latest gadgets, smartphones, and tech products — honest opinions, real experience.",
                tags: ["YouTube", "Instagram"],
                modalBody: `<p>Tech reviews are one of the main things I do on SnapBlitz. I love testing smartphones, gadgets, accessories, and creator tech products and sharing my real experience with them in a simple and honest way. Instead of using complicated technical words, I focus more on how a device actually feels in daily use — like camera quality, gaming performance, battery backup, software smoothness, speaker quality, and whether the product is really worth buying.</p>
                <p>As a tech influencer and digital creator from Kerala, India, I enjoy making content around newly launched smartphones, budget gadgets, useful accessories, and trending technology products. Sometimes I also compare devices, test hidden features, and talk about the things brands usually don't mention properly.</p>
                <p>On SnapBlitz, my goal is to create tech content that feels useful, clean, cinematic, and easy to understand for everyone — whether you are a student, creator, gamer, or just someone who loves technology and smartphones.</p>`
            },
            {
                num: "02",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 18h6"></path>
                            <path d="M10 22h4"></path>
                            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.45.62 2.84 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
                        </svg>`,
                title: "Gadget & Tech Tips",
                desc: "Practical tips, tricks, and hidden features for everyday gadgets and devices that make life easier and smarter.",
                tags: ["YouTube", "Shorts"],
                modalBody: `<p>A big part of SnapBlitz is sharing useful tech tips, smartphone tricks, hidden settings, and small digital hacks that can actually make everyday life easier. I enjoy finding cool features inside smartphones, apps, websites, and gadgets and then explaining them in a simple way that anyone can understand.</p>
                <p>Most of my content is focused on Android tips, mobile tricks, creator tools, useful applications, productivity hacks, and smart digital shortcuts. Sometimes it's a hidden feature, sometimes it's a useful app, and sometimes it's just a small trick that can improve your experience with technology.</p>
                <p>As a content creator, I like making tech feel less confusing and more fun. Through SnapBlitz, I want people to discover technology that is actually useful in real life and not just trending for views.</p>`
            },
            {
                num: "03",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                            <path d="M12 18h.01"></path>
                            <path d="M16 4l1 3 3 1-3 1-1 3-1-3-3-1 3-1z"></path>
                        </svg>`,
                title: "Mobile Tips & Secrets",
                desc: "Secret settings, hidden apps, and powerful mobile tricks most people don't know about — for Android and beyond.",
                tags: ["Reels", "Shorts"],
                modalBody: `<p>Mobile tips and hidden smartphone features are one of my favorite types of content to create on SnapBlitz. I enjoy exploring Android devices, testing secret settings, finding hidden features, and sharing useful smartphone tricks that most people usually miss.</p>
                <p>My content includes Android customization, privacy settings, hidden apps, camera tricks, battery-saving tips, gaming settings, performance improvements, and useful shortcuts that can improve the overall smartphone experience. I also enjoy testing new mobile features and showing practical ways people can use them in daily life.</p>
                <p>As a tech content creator, I always try to make these videos simple, quick, and easy to follow. Through SnapBlitz, I want to help people get more out of their smartphones while making the content visually engaging and entertaining to watch.</p>`
            },
            {
                num: "04",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                            <path d="M3 8h18"></path>
                            <path d="M12 12c-2.5 0-5 2-5 2s2.5 2 5 2 5-2 5-2-2.5-2-5-2z"></path>
                            <circle cx="12" cy="14" r="1"></circle>
                        </svg>`,
                title: "Secret Apps & Websites",
                desc: "Discovering powerful, underrated, and hidden applications and websites that change how you work and create.",
                tags: ["Instagram", "YouTube"],
                modalBody: `<p>One thing I genuinely enjoy doing is discovering hidden apps, underrated websites, useful online tools, and cool digital platforms that most people don't know about. On SnapBlitz, I regularly share secret apps, creator tools, AI websites, editing resources, and useful internet finds that can help people save time, improve productivity, or simply have fun exploring technology.</p>
                <p>Sometimes it's a powerful website for creators, sometimes it's a useful Android app, and sometimes it's just a really interesting tool that deserves more attention. I personally enjoy exploring the internet and finding digital tools that feel genuinely useful instead of just viral for a few days.</p>
                <p>Most of the apps and websites I share are focused on creators, students, smartphone users, editors, gamers, and people who love technology. Through SnapBlitz, I want to help people discover digital tools and hidden online resources that can actually improve creativity, workflow, entertainment, and everyday digital life.</p>`
            },
            {
                num: "05",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
                            <path d="m6.2 5.3 3.1 3.9"></path>
                            <path d="m12.4 3.4 3.1 4"></path>
                            <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
                        </svg>`,
                title: "Cinematic Edits & Visuals",
                desc: "High-quality video edits, color grading, transitions, and visual storytelling — where creativity meets technology.",
                tags: ["Reels", "Branding"],
                modalBody: `<p>I'm someone who loves trying cinematic edits, smooth transitions, aesthetic visuals, and creative camera shots while creating content for SnapBlitz. I'm not a professional filmmaker or advanced cinematic editor, but I genuinely enjoy experimenting with visuals and trying to make my content look cleaner, more immersive, and more engaging.</p>
                <p>A lot of my inspiration comes from modern creator content, cinematic reels, stylish tech videos, and creative storytelling on social media. I like experimenting with color grading, transitions, motion shots, slow-motion clips, lighting, and different editing styles to improve the visual feel of my content over time.</p>
                <p>For me, editing is not just about effects — it's about making videos feel more interesting and visually enjoyable to watch. Through SnapBlitz, I'm constantly learning new editing techniques, testing creative ideas, and improving my visual storytelling style while keeping everything natural and authentic.</p>`
            },
            {
                num: "06",
                iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h2"></path>
                            <path d="M6 11v2"></path>
                            <rect x="2" y="6" width="20" height="12" rx="4"></rect>
                            <circle cx="16" cy="10" r="1"></circle>
                            <circle cx="16" cy="14" r="1"></circle>
                            <circle cx="14" cy="12" r="1"></circle>
                            <circle cx="18" cy="12" r="1"></circle>
                        </svg>`,
                title: "Gaming Spotlights",
                desc: "Introducing games worth playing — not a gaming channel, but an honest guide to what's out there for the audience.",
                tags: ["YouTube", "Community"],
                modalBody: `<p>Gaming is not the main focus of SnapBlitz, but I do enjoy gaming casually and sometimes share games that I personally find interesting, fun, visually impressive, or underrated. I'm not a full-time gaming creator or competitive gamer, and I don't upload gaming content every day. Most of my content is still focused on technology, smartphones, gadgets, apps, and digital trends.</p>
                <p>But whenever I find a really good mobile game, PC game, multiplayer game, horror game, or unique gaming experience, I like introducing it to my audience. Sometimes it's because the graphics look amazing, sometimes it's because the gameplay is fun, and sometimes it's simply a game that deserves more attention.</p>
                <p>On SnapBlitz, gaming content is more like sharing cool experiences with the community rather than building a dedicated gaming channel. I enjoy exploring games casually as a tech enthusiast and sharing recommendations that other tech lovers and casual gamers might enjoy trying themselves.</p>`
            }
        ]
    },
    skills: {
        title: "Tech Creator Expertise",
        desc: "A blend of creative software and strategic execution to bring ideas to life across digital platforms.",
        tools: [
            "Adobe Premiere", "After Effects", "Photoshop", "CapCut", "Canva", "Lightroom"
        ],
        bars: [
            { name: "Video Editing", pct: "92%" },
            { name: "Content Creation", pct: "95%" },
            { name: "Graphic Design", pct: "80%" },
            { name: "Social Media Strategy", pct: "85%" },
            { name: "Visual Storytelling", pct: "90%" },
            { name: "Web Design", pct: "75%" }
        ]
    },
    quote: {
        text: "Creating tech content that simplifies the digital world.",
        author: "&mdash; Adithyan M (SnapBlitz)"
    },
    contact: {
        title: "Contact Adithyan M",
        cards: [
            { label: "Email", value: "snapblitz.officiall@gmail.com", url: "mailto:snapblitz.officiall@gmail.com" },
            { label: "Instagram", value: "@snap_blitz", url: "https://www.instagram.com/snap_blitz" },
            { label: "YouTube", value: "@snap_blitz", url: "https://www.youtube.com/@snap_blitz" },
            { label: "LinkedIn", value: "adithyan-m-content-creator", url: "https://www.linkedin.com/in/adithyan-m-content-creator" }
        ]
    },
    footer: {
        logo: "SNAPBLITZ",
        links: [
            { text: "Home", url: "/" },
            { text: "About", url: "/about-adithyan-m/" },
            { text: "Collaborate", url: "/collaborate/" },
            { text: "Contact", url: "/contact/" }
        ],
        copyright: "&copy; 2025 Adithyan M &middot; Tech Content Creator (SnapBlitz). All rights reserved.",
        location: "Kerala, India 🌴"
    }
};

// Make it globally available for script.js
window.siteContent = siteContent;

// --- DYNAMIC INJECTION SCRIPT ---
// This runs synchronously and modifies the DOM before script.js attaches listeners.

function initContent() {
    // 1. Meta Title
    document.title = siteContent.meta.title;

    // 2. Loader Text
    const loaderTextContainer = document.querySelector('.loader-text');
    if(loaderTextContainer) {
        loaderTextContainer.innerHTML = siteContent.loader.text.split('').map(char => `<span>${char}</span>`).join('');
    }

    // 3. Navigation
    const navbarLogos = document.querySelectorAll('.logo');
    navbarLogos.forEach(logo => logo.innerHTML = siteContent.nav.logo);

    const desktopNav = document.querySelector('.desktop-nav');
    if(desktopNav) {
        desktopNav.innerHTML = siteContent.nav.links.map(link => `<a href="${link.url}" class="hover-target">${link.text}</a>`).join('');
    }

    const mobileNavLinks = document.querySelector('.mobile-nav-links');
    if(mobileNavLinks) {
        mobileNavLinks.innerHTML = siteContent.nav.links.map(link => `<a href="${link.url}" class="mobile-link">${link.text}</a>`).join('');
    }

    // 4. Hero Section
    const heroBgText = document.querySelector('.hero-bg-text');
    if(heroBgText) heroBgText.innerHTML = siteContent.hero.bgText;

    const heroTag = document.querySelector('.hero-tag');
    if(heroTag) heroTag.innerHTML = siteContent.hero.tag;

    const heroHeadingSmall = document.querySelector('.hero-heading-small');
    if(heroHeadingSmall) heroHeadingSmall.innerHTML = siteContent.hero.headingSmall;

    const heroHeadingMain = document.querySelector('.hero-heading-main');
    if(heroHeadingMain) heroHeadingMain.innerHTML = siteContent.hero.headingMain;

    const heroHeadingSub = document.querySelector('.hero-heading-sub');
    if(heroHeadingSub) heroHeadingSub.innerHTML = siteContent.hero.headingSub;

    const heroSubtext = document.querySelector('.hero-subtext');
    if(heroSubtext) heroSubtext.innerHTML = siteContent.hero.subtext;

    const heroCtaContainer = document.querySelector('.hero-cta');
    if(heroCtaContainer) {
        heroCtaContainer.innerHTML = `
            <a href="${siteContent.hero.cta1.url}" class="btn btn-filled hover-target">${siteContent.hero.cta1.text}</a>
            <a href="${siteContent.hero.cta2.url}" class="btn btn-outlined hover-target">${siteContent.hero.cta2.text}</a>
        `;
    }

    const scrollLabel = document.querySelector('.scroll-label');
    if(scrollLabel) scrollLabel.innerHTML = siteContent.hero.scrollLabel;

    const heroSocials = document.querySelector('.hero-socials');
    if(heroSocials) {
        heroSocials.innerHTML = siteContent.hero.socials.map(social => `
            <a href="${social.url}" target="_blank" class="hover-target" aria-label="${social.ariaLabel}">${social.text}</a>
        `).join('');
    }

    // 5. Marquee
    const marqueeContent = document.querySelector('.marquee-content');
    if(marqueeContent) {
        let marqueeSpans = "";
        for(let i=0; i<siteContent.marquee.repeat; i++){
            marqueeSpans += `<span>${siteContent.marquee.text}</span>`;
        }
        marqueeContent.innerHTML = marqueeSpans;
    }

    // 6. About Section
    const aboutImageWrapper = document.querySelector('.about-image-wrapper');
    if (aboutImageWrapper) {
        const borderDiv = '<div class="about-image-border"></div>';
        const imgTag = `<img src="${siteContent.about.image}" alt="Adithyan M — Tech Content Creator (SnapBlitz) from Kerala, India" class="about-image" loading="lazy" decoding="async" width="400" height="500" style="width:100%; height:100%; object-fit:cover; position:relative; z-index:2;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">`;
        // Fallback placeholder if image fails to load or isn't present
        const placeholderDiv = `<div class="about-image placeholder" style="display:none;"><span>Replace with your photo</span></div>`;
        
        const locationDiv = `
            <div class="location-tag">
                <div class="pulsing-dot"></div>
                <span>${siteContent.about.location}</span>
            </div>
        `;
        aboutImageWrapper.innerHTML = borderDiv + imgTag + placeholderDiv + locationDiv;
    }

    const aboutTitle = document.querySelector('.about-text-col .section-title');
    if(aboutTitle) aboutTitle.innerHTML = siteContent.about.title;

    const aboutBio = document.querySelector('.about-bio');
    if(aboutBio) {
        aboutBio.innerHTML = siteContent.about.bio.map(p => `<p>${p}</p>`).join('');
    }

    const aboutStats = document.querySelector('.about-stats');
    if(aboutStats) {
        aboutStats.innerHTML = siteContent.about.stats.map(stat => `
            <div class="stat-item">
                <div class="stat-number"><span class="counter" data-target="${stat.target}">0</span>${stat.suffix}</div>
                <p class="stat-label">${stat.label}</p>
            </div>
        `).join('');
    }

    // 7. Work Section
    const workTitle = document.querySelector('.work .section-title');
    if(workTitle) workTitle.innerHTML = siteContent.work.title;

    const workGrid = document.querySelector('.work-grid');
    if(workGrid) {
        workGrid.innerHTML = siteContent.work.cards.map((card, index) => `
            <div class="work-card hover-target tilt-card reveal-up" data-delay="${(index % 3) * 100}">
                <div class="card-content">
                    <div class="card-header">
                        <span class="card-num">${card.num}</span>
                        <div class="card-icon">
                            ${card.iconSvg}
                        </div>
                    </div>
                    <h3 class="card-title">${card.title}</h3>
                    <p class="card-desc">${card.desc}</p>
                    <div class="card-tags">
                        ${card.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <div class="card-overlay"></div>
            </div>
        `).join('');
    }

    // 8. Skills Section
    const skillsTitle = document.querySelector('.skills .section-title');
    if(skillsTitle) skillsTitle.innerHTML = siteContent.skills.title;

    const skillsDesc = document.querySelector('.skills-text p');
    if(skillsDesc) skillsDesc.innerHTML = siteContent.skills.desc;

    const toolChips = document.querySelector('.tool-chips');
    if(toolChips) {
        toolChips.innerHTML = siteContent.skills.tools.map(tool => {
            const slug = tool.toLowerCase().replace(/ /g, '-');
            return `<a href="tools/${slug}/" target="_blank" rel="noopener" class="chip hover-target">${tool}</a>`;
        }).join('');
    }

    const skillsBars = document.querySelector('.skills-bars');
    if(skillsBars) {
        skillsBars.innerHTML = siteContent.skills.bars.map(bar => `
            <div class="skill-item">
                <div class="skill-info">
                    <span class="skill-name">${bar.name}</span>
                    <span class="skill-pct">${bar.pct}</span>
                </div>
                <div class="skill-bar-bg">
                    <div class="skill-bar-fill" data-width="${bar.pct}"></div>
                </div>
            </div>
        `).join('');
    }

    // 9. Quote Section
    const mainQuote = document.querySelector('.main-quote');
    if(mainQuote) mainQuote.innerHTML = siteContent.quote.text;

    const quoteAuthor = document.querySelector('.quote-author');
    if(quoteAuthor) quoteAuthor.innerHTML = siteContent.quote.author;

    // 10. Contact Section - Redesigned statically in index.html for premium two-column layout

    // 11. Footer
    const footerLinks = document.querySelector('.footer-links');
    if(footerLinks) {
        footerLinks.innerHTML = siteContent.footer.links.map(link => `<a href="${link.url}" class="hover-target">${link.text}</a>`).join('');
    }

    const footerBottomP = document.querySelectorAll('.footer-bottom p');
    if(footerBottomP.length >= 2) {
        footerBottomP[0].innerHTML = siteContent.footer.copyright;
        footerBottomP[1].innerHTML = siteContent.footer.location;
    }
}

// Run injection
initContent();
