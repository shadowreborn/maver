export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
};

// Recent Work entries. `kind` discriminates who made the work so third-party
// industry examples are never presented as Rapho projects.
type RecentWorkBase = {
  serviceSlug: string;
  title: string;
  summary: string;
  image: string;
  metrics: { value: string; label: string }[];
};

export type RecentWorkItem =
  | (RecentWorkBase & {
      kind: "industry-example";
      credit: string;
      sourceName: string;
      sourceUrl: string;
    })
  | (RecentWorkBase & { kind: "rapho-project"; client?: string });

export const recentWork: RecentWorkItem[] = [
  // 1. Google & Digital Identity (Knowledge Panel Verification)
  {
    kind: "industry-example",
    serviceSlug: "google-digital-identity",
    title: "Google Knowledge Panel — Artist Entity Verification",
    summary:
      "MusicBrainz ID linking, structured Schema.org MusicGroup markup, Wikidata entity resolution, and official Knowledge Panel claiming for a verified music artist on Google Search.",
    image: "/images/service-google-knowledge-panel.svg",
    metrics: [
      { value: "Verified", label: "Google Knowledge Panel Claimed" },
      { value: "+129%", label: "Organic Google Search Traffic" },
    ],
    credit: "Google Knowledge Graph & Semantic Entity Resolution Framework",
    sourceName: "InstantPress & Google Search Central Case Study",
    sourceUrl: "https://support.google.com/knowledgepanel/answer/9163198",
  },
  // 2. Music Distribution
  {
    kind: "industry-example",
    serviceSlug: "music-distribution",
    title: "CARYS — ~waves~ EP",
    summary:
      "A coordinated global distribution rollout across 200+ digital streaming platforms with synchronized ISRC metadata, lossless audio ingestion, and day-one editorial pitching.",
    image: "/images/service-music-distribution.svg",
    metrics: [
      { value: "200+", label: "digital service providers live" },
      { value: "46", label: "editorial playlist adds across DSPs" },
    ],
    credit: "Symphonic Distribution",
    sourceName: "Hypebot Case Study",
    sourceUrl: "https://www.hypebot.com/carys-a-case-study-in-independent-artist-growth/",
  },
  // 3. Track Mastering
  {
    kind: "industry-example",
    serviceSlug: "track-mastering",
    title: "Precision Audio Mastering & Loudness Optimization",
    summary:
      "Multi-stage stereo mastering achieving a balanced tonal spectrum, controlled dynamic range (6.8 LU), and safe true-peak headroom to eliminate streaming loudness penalties.",
    image: "/images/service-track-mastering.svg",
    metrics: [
      { value: "-14.1 LUFS", label: "Integrated streaming target achieved" },
      { value: "-1.0 dBTP", label: "True-peak ceiling (0 inter-sample clips)" },
      { value: "6.8 LU", label: "Loudness range (LRA)" },
    ],
    credit: "Mastering The Mix Audio Engineering Study",
    sourceName: "Mastering The Mix Technical Analysis",
    sourceUrl: "https://www.masteringthemix.com",
  },
  // 4. Sync Licensing
  {
    kind: "industry-example",
    serviceSlug: "sync-licensing",
    title: "Independent Sync Catalog Placement Campaign",
    summary:
      "Catalog preparation with 100% pre-cleared instrumental stems and cue sheets, securing six placements across global SVOD streaming series, commercial advertising, and film trailers.",
    image: "/images/service-sync-licensing.svg",
    metrics: [
      { value: "$19,700", label: "Year-1 sync fees & backend royalties" },
      { value: "6 Placements", label: "Global SVOD series, commercial & trailer" },
    ],
    credit: "Independent Sync Agency Case Study (Chartlex & Songtools)",
    sourceName: "Chartlex Sync Licensing Analysis",
    sourceUrl: "https://chartlex.com",
  },
  // 5. Music Monetization
  {
    kind: "industry-example",
    serviceSlug: "music-monetization",
    title: "YouTube Content ID & Royalty Recovery Engine",
    summary:
      "Automated digital fingerprinting and Content ID ingestion across user-generated content, recovering passive ad revenue from hundreds of gaming videos, vlogs, and shorts without issuing copyright strikes.",
    image: "/images/service-music-monetization.svg",
    metrics: [
      { value: "+340%", label: "YouTube revenue growth via Content ID" },
      { value: "450+", label: "UGC videos claimed & monetized" },
    ],
    credit: "Digital Rights Management & Content ID Study",
    sourceName: "Orphiq & Dynamoi Rights Analysis",
    sourceUrl: "https://dynamoi.com",
  },
  // 6. CD & Physical Sales
  {
    kind: "industry-example",
    serviceSlug: "cd-selling",
    title: "Collector Vinyl & Deluxe Digipak D2C Campaign",
    summary:
      "Complete manufacturing, packaging design, and direct-to-consumer store rollout for a 180g heavyweight vinyl and 6-panel CD digipak run, selling out completely in 72 hours.",
    image: "/images/service-cd-physical-sales.svg",
    metrics: [
      { value: "1,200 Units", label: "Pressed & sold out in 72 hours" },
      { value: "$28,500", label: "Direct-to-fan gross physical revenue" },
    ],
    credit: "Bandcamp D2C Physical Distribution Case Study",
    sourceName: "Bandcamp Artist Success Study",
    sourceUrl: "https://bandcamp.com",
  },
  // 7. Copyright Protection
  {
    kind: "industry-example",
    serviceSlug: "copyright-protection",
    title: "Catalog Copyright Registration & Takedown Enforcement",
    summary:
      "Full chain-of-title protection, co-writer split contracts, US Copyright Office eCO filings, and automated DMCA monitoring to eliminate unauthorized leaks and stem piracy.",
    image: "/images/service-copyright-protection.svg",
    metrics: [
      { value: "100%", label: "Secured copyright chain-of-title" },
      { value: "32 Works", label: "Registered with US Copyright Office & PROs" },
    ],
    credit: "Songtrust & Legal Catalog Protection Case Study",
    sourceName: "Songtrust Publishing Administration Guide",
    sourceUrl: "https://www.songtrust.com",
  },
  // 8. Radio & Music Submission
  {
    kind: "industry-example",
    serviceSlug: "radio-submission",
    title: "National Radio Airplay & Chart Campaign",
    summary:
      "Targeted radio promotion reaching college, specialist non-commercial, and satellite stations, securing weekly rotations on BBC Radio 6 Music and a Top 20 peak on the NACC charts.",
    image: "/images/service-radio-submission.svg",
    metrics: [
      { value: "#14 Peak", label: "Top 20 on NACC College Radio Charts" },
      { value: "68 Stations", label: "Active adds across US & UK radio" },
    ],
    credit: "Planetary Group Radio Campaign Case Study",
    sourceName: "Planetary Group Radio Case Study",
    sourceUrl: "https://www.planetarygroup.com",
  },
  // 9. AI Software & Design
  {
    kind: "industry-example",
    serviceSlug: "ai-software-design",
    title: "Neural Audio Stem Separation & Smart Tagging Interface",
    summary:
      "Custom web interface and neural audio engine performing real-time 4-stem separation, automated key/BPM detection, and algorithmic mood classification for catalog search.",
    image: "/images/service-ai-software-design.svg",
    metrics: [
      { value: "10× Speed", label: "Real-time AI audio stem extraction" },
      { value: "55%", label: "Less time on search & curation" },
    ],
    credit: "Cyanite AI & Audio Software Case Study",
    sourceName: "Cyanite AI Music Analysis",
    sourceUrl: "https://cyanite.ai",
  },
  // 10. AI Music Video & Animation (Agency Original)
  {
    kind: "rapho-project",
    serviceSlug: "ai-video-animation",
    title: "Anime Garage Story",
    summary:
      "A hand-drawn style animated short built scene by scene from custom character design and setting, combining AI motion tools with authored creative direction.",
    image: "/images/poster-anime-garage-story.jpg",
    metrics: [
      { value: "Hand-Drawn Style", label: "Character animation built scene by scene" },
      { value: "Original", label: "Full visual world & cinematic story" },
    ],
    client: "Agency Original Production",
  },
  // 11. Music Videos (Agency Studio Project & Industry Benchmark)
  {
    kind: "rapho-project",
    serviceSlug: "music-videos",
    title: "Trust the Process",
    summary:
      "Expressive 2D character animation and cinematic direction that carries the emotion, identity, and narrative arc of the record.",
    image: "/images/poster-trust-the-process.jpg",
    metrics: [
      { value: "2D Cinema", label: "Character-led animated music film" },
      { value: "Original", label: "Narrative visual direction" },
    ],
    client: "Agency Music Video",
  },
  {
    kind: "industry-example",
    serviceSlug: "music-videos",
    title: "Yonnyboii — Tak Sangka",
    summary:
      "A stylized animated music video that uses exaggeration and strong character drawing to stage entrapment, defiance, and rebirth in a surreal circus world.",
    image: "/images/service-music-videos.svg",
    metrics: [
      { value: "6 Weeks at #1", label: "on Malaysia's Carta RIM" },
      { value: "Animated", label: "Symbolic storytelling beyond live-action" },
    ],
    credit: "Directed by Thaqif Saadon; produced by Atypical Visual and Studio Firepulse",
    sourceName: "Academic case study (IJRISS)",
    sourceUrl:
      "https://rsisinternational.org/journals/ijriss/articles/enhancing-music-videos-through-animation-a-case-study-of-tak-sangka-2021/",
  },
  // 12. 2D & 3D Animation
  {
    kind: "rapho-project",
    serviceSlug: "3d-animation",
    title: "Happy Ape's Space Adventure",
    summary:
      "A colourful animated adventure world with original character modeling, environment design, and playful cinematic motion timing.",
    image: "/images/poster-happy-apes-space-adventure.jpg",
    metrics: [
      { value: "Character", label: "Original 2D & 3D character design" },
      { value: "World Build", label: "Complete animated environment" },
    ],
    client: "Agency Animation Project",
  },
  {
    kind: "industry-example",
    serviceSlug: "3d-animation",
    title: "Kanye West — BLKK SKKKN HEAD",
    summary:
      "Facial animation, motion capture rigging, and polygonal character mesh development for an interactive 3D music video experience.",
    image: "/images/service-3d-animation.svg",
    metrics: [
      { value: "Interactive", label: "Real-time 3D music video engine" },
      { value: "Face Rig", label: "High-fidelity facial animation rigging" },
    ],
    credit: "Mimic Productions",
    sourceName: "Mimic Productions portfolio",
    sourceUrl: "https://www.mimicproductions.com/music-videos",
  },
  // 13. Motion Design
  {
    kind: "rapho-project",
    serviceSlug: "motion-design",
    title: "Inner Eye Games",
    summary:
      "Fluid color transitions and kinetic geometry engineered to give musical rhythm a distinct, pulsing visual signature.",
    image: "/images/poster-inner-eye-games.jpg",
    metrics: [
      { value: "Fluid Motion", label: "Audio-reactive kinetic rhythm" },
      { value: "Screen Design", label: "Built for display & video loops" },
    ],
    client: "Agency Motion Project",
  },
  {
    kind: "industry-example",
    serviceSlug: "motion-design",
    title: "Tour Motion Content — Lola Indigo, Pink, Elton John",
    summary:
      "Concert and festival motion graphics engineered specifically for giant stage LED walls and acoustic stadium environments.",
    image: "/images/service-motion-design.svg",
    metrics: [
      { value: "LED + Stage", label: "Screen content for live rooms" },
      { value: "World Tours", label: "Named stadium artist tour content" },
    ],
    credit: "Motion for Music",
    sourceName: "Motion for Music live visuals",
    sourceUrl: "https://www.motionformusic.com/project_category/live-visuals/",
  },
  // 14. Music Visuals
  {
    kind: "rapho-project",
    serviceSlug: "music-visuals",
    title: "Animated Cover Visualizer",
    summary:
      "A release cover reimagined as a seamless looping visualizer for Spotify Canvas, YouTube, and vertical social feeds.",
    image: "/images/poster-animated-cover-visualizer.jpg",
    metrics: [
      { value: "Canvas Loop", label: "Seamless streaming visual loop" },
      { value: "Multi-Format", label: "Optimized for social & mobile" },
    ],
    client: "Agency Visualizer",
  },
  {
    kind: "rapho-project",
    serviceSlug: "music-visuals",
    title: "Crash Dummie",
    summary:
      "Cover art brought to life with dynamic motion, textured grain, and a split-screen visual rhythm.",
    image: "/images/poster-crash-dummie.jpg",
    metrics: [
      { value: "Visual Pulse", label: "High-impact cover animation" },
      { value: "Split-Screen", label: "Dynamic multi-panel motion" },
    ],
    client: "Agency Animated Cover",
  },
  {
    kind: "industry-example",
    serviceSlug: "music-visuals",
    title: "Transformations — Nova Music",
    summary:
      "An audio-responsive particle system developed for the Deep Cinematic album series, using frequency input to drive visual form.",
    image: "/images/service-music-visuals.svg",
    metrics: [
      { value: "Audio-Reactive", label: "Particle system driven by music" },
      { value: "Deep Cinematic", label: "Universal Music album series" },
    ],
    credit: "Rod Steele, Design for Music, for Nova Music / Universal Music",
    sourceName: "Design for Music case study",
    sourceUrl: "https://designformusic.com/album-cover-design/",
  },
  // 15. Artwork & Cover Design (Agency Client Originals)
  {
    kind: "rapho-project",
    serviceSlug: "artwork-cover-design",
    title: "Hustle Money",
    summary:
      "A bold portrait-led cover with a typographic side panel, subtle grit, and warm cinematic lighting.",
    image: "/images/cover-hustle-money.jpg",
    metrics: [
      { value: "Single Cover", label: "Portrait-led visual identity" },
      { value: "Typography", label: "Editorial typographic panel" },
    ],
    client: "Agency Cover Artwork",
  },
  {
    kind: "rapho-project",
    serviceSlug: "artwork-cover-design",
    title: "Street Beast",
    summary:
      "High-energy single artwork built around a hero vehicle, fire, and sharp, glitched typography.",
    image: "/images/cover-street-beast.jpg",
    metrics: [
      { value: "Cover Art", label: "High-octane hero artwork" },
      { value: "Glitched Type", label: "Custom distressed lettering" },
    ],
    client: "Agency Cover Artwork",
  },
  {
    kind: "rapho-project",
    serviceSlug: "artwork-cover-design",
    title: "Call Ya No Me Enamoro",
    summary:
      "A stylized illustrated cover featuring an energetic neon-green stage world and layered character art.",
    image: "/images/cover-call-ya-no-me-enamoro.jpg",
    metrics: [
      { value: "Illustrated", label: "Neon-green stylized artwork" },
      { value: "Character Art", label: "Custom digital illustration" },
    ],
    client: "Agency Cover Artwork",
  },
  {
    kind: "rapho-project",
    serviceSlug: "artwork-cover-design",
    title: "Bernie Mackin",
    summary:
      "Maximalist throwback cover design with metallic chrome lettering, gold chains, and a dense photo collage.",
    image: "/images/cover-bernie-mackin.jpg",
    metrics: [
      { value: "Album Cover", label: "Throwback maximalist collage" },
      { value: "Chrome Type", label: "Dimensional metallic lettering" },
    ],
    client: "Agency Cover Artwork",
  },
  // 16. Artist Branding
  {
    kind: "industry-example",
    serviceSlug: "artist-branding",
    title: "Pink Floyd Records — Label Identity",
    summary:
      "The original Animals lettering evolved into a custom alphabet and flexible identity system across an expansive 27-disc box set and global merchandise.",
    image: "/images/service-artist-branding.svg",
    metrics: [
      { value: "27 Discs", label: "The Early Years box set" },
      { value: "3 Cuts", label: "Custom type for small, medium & display" },
    ],
    credit: "Pentagram with Aubrey Powell of Hipgnosis",
    sourceName: "Pentagram project case study",
    sourceUrl: "https://www.pentagram.com/work/pink-floyd-records",
  },
  // 17. Social & Content
  {
    kind: "industry-example",
    serviceSlug: "social-content",
    title: "Maná & Joy — Eres Mi Religión",
    summary:
      "A branded CapCut video template featuring the song with lyric overlays, earning prime mobile placement to drive viral user creations.",
    image: "/images/service-social-content.svg",
    metrics: [
      { value: "47,000+", label: "Uses of the video template" },
      { value: "5M+", label: "Impressions on CapCut" },
    ],
    credit: "Warner Music Group Latin America with TikTok / CapCut",
    sourceName: "TikTok for Business case study",
    sourceUrl: "https://ads.tiktok.com/business/en/inspiration/Warner-Music-Latam-CapCut",
  },
  // 18. DJ & Live Visuals
  {
    kind: "industry-example",
    serviceSlug: "dj-live-visuals",
    title: "Tiësto — A Town Called Paradise World Tour",
    summary:
      "Unified cinematic visual direction translating album themes into large-scale concert visuals across a worldwide stadium and festival tour.",
    image: "/images/service-dj-live-visuals.svg",
    metrics: [
      { value: "15+ Songs", label: "Custom cinematic visual content" },
      { value: "Worldwide", label: "Large-scale touring system" },
    ],
    credit: "Moment Factory with Tiësto",
    sourceName: "Moment Factory project case study",
    sourceUrl: "https://momentfactory.com/products/tiesto-a-town-called-paradise-tour",
  },
  // 19. VFX & Cinematic
  {
    kind: "industry-example",
    serviceSlug: "vfx-cinematic",
    title: "Tones and I — Fly Away",
    summary:
      "Wire removal, rotoscoping, clean-plating, and green screen tracking to erase harnesses and seamlessly place talent in a cinematic sky environment.",
    image: "/images/service-vfx-cinematic.svg",
    metrics: [
      { value: "3 Days", label: "Delivery turnaround" },
      { value: "4 Artists", label: "On the visual sequence" },
    ],
    credit: "Vince Bufalino, Visible Studios, via CG Spectrum",
    sourceName: "CG Spectrum breakdown",
    sourceUrl: "https://www.cgspectrum.com/blog/music-video-vfx-breakdown",
  },
  // 20. Digital Presence
  {
    kind: "industry-example",
    serviceSlug: "digital-presence",
    title: "Australian Bass Producer — Website Overhaul",
    summary:
      "A multi-page responsive web experience with Tour, Shop, Listen, Watch, and Story hubs, music schema integration, and fan newsletter automation.",
    image: "/images/service-digital-presence.svg",
    metrics: [
      { value: "+240%", label: "Site traffic uplift" },
      { value: "+88%", label: "Average time on site" },
    ],
    credit: "Fred & Augustus (artist not named)",
    sourceName: "Fred & Augustus case study",
    sourceUrl: "https://www.fredandaugustus.com/musician-website-design-case-study",
  },
  // 21. Press & Media
  {
    kind: "industry-example",
    serviceSlug: "press-media",
    title: "Macy Todd — 3-Month PR Campaign",
    summary:
      "Targeted media outreach and outlet coaching securing 45+ editorial features, blog placements, and an exclusive single premiere on Paste Magazine.",
    image: "/images/service-press-media.svg",
    metrics: [
      { value: "45+", label: "Editorial placements" },
      { value: "~1.5M", label: "Combined streams by campaign end" },
    ],
    credit: "Cyber PR Music",
    sourceName: "Cyber PR Music case study",
    sourceUrl: "https://cyberprmusic.com/case-study-macytodd",
  },
  // 22. Artist Development
  {
    kind: "industry-example",
    serviceSlug: "artist-development",
    title: "Vade Mey — Multi-Release Growth",
    summary:
      "Consistent targeted advertising and editorial positioning across multiple release cycles, converting cold listeners into long-term algorithmic discovery.",
    image: "/images/service-artist-development.svg",
    metrics: [
      { value: "89%", label: "Audience programmed algorithmically" },
      { value: "320,000+", label: "Streams from 171,000 listeners in year one" },
    ],
    credit: "Now Listen PR",
    sourceName: "Now Listen PR case study",
    sourceUrl: "https://nowlistenpr.com/artist-success/",
  },
  // 23. Music Growth
  {
    kind: "industry-example",
    serviceSlug: "music-growth",
    title: "Bishop Ivy — IRIS EP",
    summary:
      "Audience clusters realigned with Meta ad traffic routed to targeted playlists around release week, triggering Spotify's algorithm for organic reach.",
    image: "/images/service-spotify-growth.svg",
    metrics: [
      { value: "11×", label: "Algorithmic streams vs previous EP" },
      { value: "~45%", label: "Algorithmic share in 3 weeks" },
    ],
    credit: "Music Tomorrow with Handwritten Records",
    sourceName: "Music Tomorrow case study",
    sourceUrl:
      "https://music-tomorrow.com/blog/case-study-how-we-got-11x-algorithmic-discover-weekly-streams-on-release-week",
  },
];

export const services: Service[] = [
  {
    slug: "music-growth",
    title: "Music Growth",
    tagline: "Build attention around your music.",
    description:
      "We create strategic release campaigns that increase visibility, reach relevant audiences and strengthen your digital presence.",
    items: [
      "Music Promotion",
      "Spotify Promotion",
      "SoundCloud Growth",
      "YouTube Music Promotion",
      "Audience Development",
      "Release Campaigns",
    ],
  },
  {
    slug: "music-distribution",
    title: "Music Distribution",
    tagline: "Move every release with clarity.",
    description:
      "We coordinate digital delivery, release setup and platform readiness so your music arrives professionally and on time.",
    items: [
      "Digital Distribution",
      "Spotify",
      "Apple Music",
      "YouTube Music",
      "Amazon Music",
      "Release Management",
      "Metadata",
      "Pre-Save Campaigns",
    ],
  },
  {
    slug: "track-mastering",
    title: "Track Mastering",
    tagline: "Make it ready for every speaker.",
    description:
      "We polish your final mixes so they translate cleanly and competitively across streaming platforms, clubs and headphones.",
    items: [
      "Stereo Mastering",
      "Loudness Optimization",
      "Streaming-Ready Masters",
      "EP & Album Sequencing",
      "Reference Matching",
      "Revisions",
    ],
  },
  {
    slug: "sync-licensing",
    title: "Sync Licensing",
    tagline: "Put your music on screen.",
    description:
      "We prepare your catalog and pitch it for film, TV, advertising, games and online content opportunities.",
    items: [
      "Catalog Preparation",
      "Sync Pitching",
      "Metadata & Cue Sheets",
      "Instrumental & Stem Versions",
      "Licensing Support",
      "Opportunity Research",
    ],
  },
  {
    slug: "music-monetization",
    title: "Music Monetization",
    tagline: "Turn plays into income.",
    description:
      "We set up and optimize the revenue streams around your catalog so your music earns across platforms, not just on release day.",
    items: [
      "Platform Monetization",
      "YouTube Monetization",
      "Content ID Setup",
      "Royalty Collection",
      "Revenue Optimization",
      "Channel Setup",
    ],
  },
  {
    slug: "cd-selling",
    title: "CD & Physical Sales",
    tagline: "Put your music in people's hands.",
    description:
      "We help you produce and sell physical releases, from CD runs to packaging and online storefronts.",
    items: [
      "CD Production",
      "Vinyl & Merch Options",
      "Packaging Design",
      "Online Store Setup",
      "Fulfilment Guidance",
      "Limited Editions",
    ],
  },
  {
    slug: "copyright-protection",
    title: "Copyright",
    tagline: "Protect what you create.",
    description:
      "We guide you through registering and protecting your songs, recordings and artwork so your rights stay yours.",
    items: [
      "Copyright Registration",
      "Ownership Documentation",
      "Split Agreements",
      "Takedown Support",
      "Rights Guidance",
      "Catalog Protection",
    ],
  },
  {
    slug: "radio-submission",
    title: "Radio & Music Submission",
    tagline: "Get heard by the right ears.",
    description:
      "We prepare and submit your releases to radio, playlists, curators and music platforms that fit your sound.",
    items: [
      "Radio Submission",
      "Playlist Submission",
      "Curator Outreach",
      "Music Blog Submission",
      "Submission Packages",
      "Follow-Up",
    ],
  },
  {
    slug: "ai-video-animation",
    title: "AI Music Video & Animation",
    tagline: "Bigger visuals, faster.",
    description:
      "We combine AI tools with creative direction to produce music videos and animated stories that still feel authored and intentional.",
    items: [
      "AI Music Videos",
      "AI Animation Videos",
      "Concept Development",
      "Storyboarding",
      "Lyric Videos",
      "Visual Loops",
    ],
  },
  {
    slug: "ai-software-design",
    title: "AI Software & Design",
    tagline: "Build the tools around your music.",
    description:
      "We design and develop AI-powered tools, apps and interfaces for artists, labels and music brands.",
    items: [
      "AI Software Development",
      "Web & App Design",
      "UI/UX Design",
      "Automation Tools",
      "Custom Integrations",
      "Prototyping",
    ],
  },
  {
    slug: "music-videos",
    title: "Music Videos",
    tagline: "Turn the record into a world.",
    description:
      "We develop visual concepts and music films that carry the emotion, identity and ambition of your sound.",
    items: [
      "2D Music Videos",
      "3D Music Videos",
      "Hybrid Videos",
      "Cinematic Videos",
      "Animated Music Videos",
      "Narrative Visuals",
    ],
  },
  {
    slug: "3d-animation",
    title: "2D & 3D Animation",
    tagline: "Create beyond the physical.",
    description:
      "We shape immersive digital worlds, characters and motion systems for releases, campaigns and live experiences.",
    items: [
      "2D Animation",
      "3D Animation",
      "3D Modeling",
      "Character Animation",
      "Environment Design",
      "Motion Graphics",
      "3D Visual Effects",
    ],
  },
  {
    slug: "motion-design",
    title: "Motion Design",
    tagline: "Give your identity movement.",
    description:
      "We design expressive motion assets that make artist identities and release campaigns feel connected and alive.",
    items: [
      "2D Animation",
      "Motion Graphics",
      "Kinetic Typography",
      "Logo Animation",
      "Motion Posters",
      "Animated Graphics",
    ],
  },
  {
    slug: "music-visuals",
    title: "Music Visuals",
    tagline: "Make every sound visible.",
    description:
      "We translate rhythm, texture and energy into visual systems built for screens, platforms and performance.",
    items: [
      "Music Visualizers",
      "Audio Waveforms",
      "Audio Spectrum",
      "Equalizer Animations",
      "Beat-Synchronized Visuals",
      "Reactive Visuals",
    ],
  },
  {
    slug: "artwork-cover-design",
    title: "Artwork & Cover Design",
    tagline: "Make the first impression count.",
    description:
      "We create distinctive cover systems that frame your music with a clear visual point of view.",
    items: [
      "Album Covers",
      "Single Covers",
      "EP Artwork",
      "2D/3D Covers",
      "Cinematic Artwork",
      "Typography Covers",
      "Animated Covers",
    ],
  },
  {
    slug: "artist-branding",
    title: "Artist Branding",
    tagline: "Define the artist people remember.",
    description:
      "We build visual identities that connect your sound, story and ambition across every audience touchpoint.",
    items: [
      "Artist Identity",
      "Logo Design",
      "Creative Direction",
      "Brand Graphics",
      "Social Identity",
      "Release Campaign Identity",
    ],
  },
  {
    slug: "social-content",
    title: "Social & Content",
    tagline: "Keep the release moving.",
    description:
      "We create platform-native content that turns a release into an ongoing, coherent conversation.",
    items: [
      "Instagram Reels",
      "TikTok Content",
      "YouTube Shorts",
      "Teasers",
      "Release Announcements",
      "Promotional Content",
    ],
  },
  {
    slug: "dj-live-visuals",
    title: "DJ & Live Visuals",
    tagline: "Build a stage world.",
    description:
      "We create live visual systems that make performance environments feel intentional, immersive and unmistakably yours.",
    items: [
      "DJ Visuals",
      "VJ Loops",
      "Concert Visuals",
      "LED Visuals",
      "Stage Visuals",
      "Tour Visuals",
    ],
  },
  {
    slug: "vfx-cinematic",
    title: "VFX & Cinematic",
    tagline: "Push the image further.",
    description:
      "We use cinematic post-production to heighten atmosphere, story and visual impact without losing the artist at the center.",
    items: [
      "VFX",
      "Compositing",
      "Tracking",
      "Screen Replacement",
      "Particle Effects",
      "Lighting Effects",
      "Title Sequences",
    ],
  },
  {
    slug: "digital-presence",
    title: "Digital Presence",
    tagline: "Give your career a proper home.",
    description:
      "We create considered digital experiences that present your work clearly and help audiences move deeper into your world.",
    items: [
      "Artist Websites",
      "Landing Pages",
      "SEO",
      "Link-in-Bio",
      "Digital Artist Profiles",
      "Interactive Music Experiences",
    ],
  },
  {
    slug: "google-digital-identity",
    title: "Google & Digital Identity",
    tagline: "Be understood across search.",
    description:
      "We improve the consistency and readiness of your public artist information across search and key digital platforms.",
    items: [
      "Google Knowledge Panel Readiness",
      "Artist Entity Optimization",
      "Google Search Presence",
      "Artist Digital Identity",
    ],
  },
  {
    slug: "press-media",
    title: "Press & Media",
    tagline: "Tell the story with intention.",
    description:
      "We package and place your release story for media, radio and culture-facing opportunities.",
    items: [
      "EPK",
      "Press Releases",
      "Media Outreach",
      "Radio Submission",
      "Blog Outreach",
      "Interview Coordination",
    ],
  },
  {
    slug: "artist-development",
    title: "Artist Development",
    tagline: "Build beyond one release.",
    description:
      "We help artists make stronger long-term decisions across career direction, creative identity and campaign planning.",
    items: [
      "Career Strategy",
      "Release Planning",
      "Creative Strategy",
      "Artist Consultation",
      "Campaign Strategy",
      "Long-Term Support",
    ],
  },
];
