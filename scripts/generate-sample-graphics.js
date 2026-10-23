import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.join(__dirname, "..", "public", "images");

function saveSvg(fileName, content) {
  const filePath = path.join(outputDir, fileName);
  fs.writeFileSync(filePath, content.trim(), "utf-8");
  console.log(`Saved: ${fileName}`);
}

// 16. Social Content & Viral Distribution (TikTok & CapCut)
saveSvg(
  "service-social-content.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="socBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121317"/>
      <stop offset="100%" stop-color="#0a0a0d"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#socBg)"/>

  <!-- Top Bar -->
  <rect x="0" y="0" width="1280" height="70" fill="#181920"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#252733" stroke-width="1"/>
  <text x="60" y="44" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700" letter-spacing="1">
    SOCIAL CONTENT &amp; VIRAL CAMPAIGN ARCHITECTURE
  </text>
  <rect x="970" y="18" width="250" height="34" rx="4" fill="#06b6d4"/>
  <text x="1095" y="42" text-anchor="middle" fill="#000000" font-family="sans-serif" font-size="20" font-weight="800">
    47K+ TEMPLATE USES
  </text>

  <!-- Metric Overview -->
  <g transform="translate(60, 95)">
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="270" height="120" rx="8" fill="#181a22" stroke="#282b36" stroke-width="1"/>
      <text x="24" y="36" fill="#9ca3af" font-family="sans-serif" font-size="20" font-weight="700">CAPCUT TEMPLATES</text>
      <text x="24" y="80" fill="#06b6d4" font-family="sans-serif" font-size="38" font-weight="700">47,000+</text>
      <text x="24" y="104" fill="#34d399" font-family="sans-serif" font-size="20">Organic creator UGC</text>
    </g>

    <g transform="translate(295, 0)">
      <rect x="0" y="0" width="270" height="120" rx="8" fill="#181a22" stroke="#282b36" stroke-width="1"/>
      <text x="24" y="36" fill="#9ca3af" font-family="sans-serif" font-size="20" font-weight="700">TOTAL IMPRESSIONS</text>
      <text x="24" y="80" fill="#f43f5e" font-family="sans-serif" font-size="38" font-weight="700">5M+</text>
      <text x="24" y="104" fill="#34d399" font-family="sans-serif" font-size="20">Direct placements</text>
    </g>

    <g transform="translate(590, 0)">
      <rect x="0" y="0" width="270" height="120" rx="8" fill="#181a22" stroke="#282b36" stroke-width="1"/>
      <text x="24" y="36" fill="#9ca3af" font-family="sans-serif" font-size="20" font-weight="700">TIKTOK SOUND LIFT</text>
      <text x="24" y="80" fill="#d4af37" font-family="sans-serif" font-size="38" font-weight="700">+820%</text>
      <text x="24" y="104" fill="#34d399" font-family="sans-serif" font-size="20">Audio creation velocity</text>
    </g>

    <g transform="translate(885, 0)">
      <rect x="0" y="0" width="275" height="120" rx="8" fill="#181a22" stroke="#282b36" stroke-width="1"/>
      <text x="24" y="36" fill="#9ca3af" font-family="sans-serif" font-size="20" font-weight="700">SPARK ADS CAMPAIGN</text>
      <text x="24" y="80" fill="#a855f7" font-family="sans-serif" font-size="30" font-weight="700">Warner LatAm</text>
      <text x="24" y="104" fill="#34d399" font-family="sans-serif" font-size="20">Maná — Eres Mi Religión</text>
    </g>
  </g>

  <!-- Mobile Screen Vertical Mockup Display -->
  <g transform="translate(60, 245)">
    <rect x="0" y="0" width="1160" height="420" rx="8" fill="#15171d" stroke="#282a35" stroke-width="1.5"/>
    <text x="30" y="44" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">
      VERTICAL VIDEO CAMPAIGN ASSETS (INSTAGRAM REELS / TIKTOK / YOUTUBE SHORTS)
    </text>

    <!-- 3 Smartphone Frame Mockups -->
    <!-- Phone 1 -->
    <g transform="translate(100, 65)">
      <rect x="0" y="0" width="260" height="320" rx="20" fill="#1c1f28" stroke="#333745" stroke-width="2"/>
      <rect x="100" y="8" width="60" height="10" rx="5" fill="#000000"/>
      <rect x="10" y="25" width="240" height="270" rx="10" fill="#252a38"/>
      <circle cx="130" cy="140" r="30" fill="#f43f5e" opacity="0.3"/>
      <polygon points="125,125 145,140 125,155" fill="#ffffff"/>
      <text x="130" y="240" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">LYRICS OVERLAY</text>
      <text x="130" y="268" text-anchor="middle" fill="#06b6d4" font-family="sans-serif" font-size="20">CapCut Feature Spot</text>
    </g>

    <!-- Phone 2 -->
    <g transform="translate(450, 65)">
      <rect x="0" y="0" width="260" height="320" rx="20" fill="#1c1f28" stroke="#d4af37" stroke-width="2"/>
      <rect x="100" y="8" width="60" height="10" rx="5" fill="#000000"/>
      <rect x="10" y="25" width="240" height="270" rx="10" fill="#20232e"/>
      <circle cx="130" cy="140" r="30" fill="#d4af37" opacity="0.3"/>
      <polygon points="125,125 145,140 125,155" fill="#ffffff"/>
      <text x="130" y="240" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">VIRAL AUDIO CUT</text>
      <text x="130" y="268" text-anchor="middle" fill="#d4af37" font-family="sans-serif" font-size="20">TopView &amp; Spark Ads</text>
    </g>

    <!-- Phone 3 -->
    <g transform="translate(800, 65)">
      <rect x="0" y="0" width="260" height="320" rx="20" fill="#1c1f28" stroke="#333745" stroke-width="2"/>
      <rect x="100" y="8" width="60" height="10" rx="5" fill="#000000"/>
      <rect x="10" y="25" width="240" height="270" rx="10" fill="#252a38"/>
      <circle cx="130" cy="140" r="30" fill="#a855f7" opacity="0.3"/>
      <polygon points="125,125 145,140 125,155" fill="#ffffff"/>
      <text x="130" y="240" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">RELEASE TEASER</text>
      <text x="130" y="268" text-anchor="middle" fill="#a855f7" font-family="sans-serif" font-size="20">Spotify Pre-Save Link</text>
    </g>
  </g>
</svg>`,
);

// 17. DJ & Live Visuals (Tiësto Arena Visuals)
saveSvg(
  "service-dj-live-visuals.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="djBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14151b"/>
      <stop offset="100%" stop-color="#090a0d"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#djBg)"/>

  <!-- Top Bar -->
  <rect x="0" y="0" width="1280" height="70" fill="#181922"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#262936" stroke-width="1"/>
  <text x="60" y="44" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700" letter-spacing="1">
    DJ &amp; LIVE VISUALS — ARENA TOURING &amp; DMX LIGHTING
  </text>
  <rect x="980" y="18" width="240" height="34" rx="4" fill="#f59e0b"/>
  <text x="1100" y="42" text-anchor="middle" fill="#000000" font-family="sans-serif" font-size="20" font-weight="800">
    RESOLUME ARENA VJ
  </text>

  <g transform="translate(60, 95)">
    <rect x="0" y="0" width="1160" height="570" rx="8" fill="#13141b" stroke="#282b37" stroke-width="1.5"/>

    <!-- Arena Stage Rig Visual -->
    <path d="M120,80 L1040,80 L880,420 L280,420 Z" fill="#1c1f2b" stroke="#f59e0b" stroke-width="2"/>
    <line x1="580" y1="80" x2="580" y2="420" stroke="#d4af37" stroke-width="1.5" stroke-dasharray="6,4"/>

    <!-- Laser Cones Simulation -->
    <polygon points="580,80 180,480 320,480" fill="#f59e0b" opacity="0.12"/>
    <polygon points="580,80 980,480 840,480" fill="#3b82f6" opacity="0.12"/>

    <!-- DJ Booth Silhouette -->
    <rect x="490" y="380" width="180" height="60" rx="4" fill="#090a0d" stroke="#f59e0b" stroke-width="1"/>
    <circle cx="580" cy="355" r="16" fill="#f59e0b"/>

    <!-- Project Credit Overlay -->
    <g transform="translate(50, 490)">
      <text x="0" y="28" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">
        Tiësto — A Town Called Paradise World Tour
      </text>
    </g>
    <text x="1110" y="518" text-anchor="end" fill="#f59e0b" font-family="sans-serif" font-size="20" font-weight="700">
      15+ TOUR CITIES WORLDWIDE
    </text>
  </g>
</svg>`,
);

// 18. VFX & Cinematic Post-Production
saveSvg(
  "service-vfx-cinematic.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="vfxBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121316"/>
      <stop offset="100%" stop-color="#0a0a0d"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#vfxBg)"/>

  <!-- Top Bar -->
  <rect x="0" y="0" width="1280" height="70" fill="#181920"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#252834" stroke-width="1"/>
  <text x="60" y="44" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700" letter-spacing="1">
    VFX &amp; CINEMATIC POST — MULTI-LAYER COMPOSITING
  </text>
  <rect x="1010" y="18" width="210" height="34" rx="4" fill="#10b981"/>
  <text x="1115" y="42" text-anchor="middle" fill="#000000" font-family="sans-serif" font-size="20" font-weight="800">
    4K COMPOSITING
  </text>

  <!-- VFX Compositing Pass Layers -->
  <g transform="translate(60, 95)">
    <rect x="0" y="0" width="1160" height="570" rx="8" fill="#14161d" stroke="#292c38" stroke-width="1.5"/>

    <!-- Split Screen Compositing Demonstration -->
    <!-- Left Half: Green Screen & Tracking Points -->
    <rect x="30" y="30" width="530" height="420" rx="6" fill="#15803d" stroke="#22c55e" stroke-width="1"/>
    <text x="50" y="70" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">PASS 1: GREEN SCREEN &amp; WIRE REMOVAL</text>
    <!-- Tracking crosshairs -->
    <circle cx="150" cy="180" r="8" fill="#ffffff"/>
    <circle cx="420" cy="160" r="8" fill="#ffffff"/>
    <circle cx="280" cy="300" r="8" fill="#ffffff"/>
    <text x="295" y="250" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20">Actor Rig Harness Erased &amp; Tracked</text>

    <!-- Right Half: Final CGI World Composited -->
    <rect x="600" y="30" width="530" height="420" rx="6" fill="#1f2330" stroke="#d4af37" stroke-width="1.5"/>
    <text x="620" y="70" fill="#d4af37" font-family="sans-serif" font-size="20" font-weight="700">PASS 4: FINAL GRADE &amp; CINEMATIC CGI</text>
    <circle cx="865" cy="240" r="110" fill="#38bdf8" opacity="0.2"/>
    <circle cx="865" cy="240" r="60" fill="#d4af37" opacity="0.4"/>
    <text x="865" y="248" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="800">CINEMATIC REALITY</text>

    <!-- Credits Bottom -->
    <g transform="translate(30, 490)">
      <text x="0" y="28" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">
        Tones and I — Fly Away (Visual Breakdown)
      </text>
    </g>
    <text x="1130" y="518" text-anchor="end" fill="#34d399" font-family="sans-serif" font-size="20" font-weight="700">
      3-DAY PRODUCTION TURNAROUND
    </text>
  </g>
</svg>`,
);

// 19. Digital Presence & Web Architecture
saveSvg(
  "service-digital-presence.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="webBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#131418"/>
      <stop offset="100%" stop-color="#0a0a0d"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#webBg)"/>

  <!-- Top Bar -->
  <rect x="0" y="0" width="1280" height="70" fill="#181920"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#262834" stroke-width="1"/>
  <text x="60" y="44" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700" letter-spacing="1">
    DIGITAL PRESENCE — ARTIST WEBSITE &amp; STREAMING HUB
  </text>
  <rect x="970" y="18" width="250" height="34" rx="4" fill="#3b82f6"/>
  <text x="1095" y="42" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="800">
    +240% SITE TRAFFIC
  </text>

  <!-- Multi-Device Mockup Presentation -->
  <g transform="translate(60, 95)">
    <rect x="0" y="0" width="1160" height="570" rx="8" fill="#15171e" stroke="#292c38" stroke-width="1.5"/>

    <!-- Desktop Browser Window Frame -->
    <rect x="60" y="40" width="800" height="420" rx="8" fill="#1c1f29" stroke="#373b4a" stroke-width="1.5"/>
    <!-- Browser Top Bar -->
    <rect x="60" y="40" width="800" height="36" rx="8" fill="#242834"/>
    <circle cx="85" cy="58" r="5" fill="#ef4444"/>
    <circle cx="102" cy="58" r="5" fill="#f59e0b"/>
    <circle cx="119" cy="58" r="5" fill="#10b981"/>
    <rect x="180" y="46" width="440" height="24" rx="12" fill="#171821"/>
    <text x="400" y="64" text-anchor="middle" fill="#9ca3af" font-family="sans-serif" font-size="20">artist-official.com/tour</text>

    <!-- Web Page Hero Inside Browser -->
    <rect x="60" y="76" width="800" height="384" fill="#161821"/>
    <text x="100" y="145" fill="#d4af37" font-family="sans-serif" font-size="20" font-weight="700" letter-spacing="2">NEW ALBUM STREAMING WORLDWIDE</text>
    <text x="100" y="195" fill="#ffffff" font-family="sans-serif" font-size="38" font-weight="800">HIGH FIDELITY TOUR 2026</text>
    <rect x="100" y="215" width="240" height="42" rx="4" fill="#d4af37"/>
    <text x="220" y="243" text-anchor="middle" fill="#000000" font-family="sans-serif" font-size="20" font-weight="800">LISTEN ON SPOTIFY</text>

    <!-- Smartphone Mobile Mockup Overlapping Right Side -->
    <g transform="translate(740, 80)">
      <rect x="0" y="0" width="220" height="420" rx="24" fill="#12131a" stroke="#d4af37" stroke-width="2"/>
      <rect x="80" y="12" width="60" height="12" rx="6" fill="#000000"/>
      <!-- Mobile content -->
      <rect x="12" y="35" width="196" height="365" rx="16" fill="#191c26"/>
      <text x="110" y="110" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="800">MOBILE HUB</text>
      <text x="110" y="138" text-anchor="middle" fill="#9ca3af" font-family="sans-serif" font-size="20">Links &amp; Merch</text>
      <!-- Smart links -->
      <rect x="25" y="165" width="170" height="36" rx="6" fill="#242836"/>
      <text x="110" y="190" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20">Spotify Stream</text>
      <rect x="25" y="212" width="170" height="36" rx="6" fill="#242836"/>
      <text x="110" y="237" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20">Tour Tickets</text>
      <rect x="25" y="259" width="170" height="36" rx="6" fill="#242836"/>
      <text x="110" y="284" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="20">Official Store</text>
    </g>

    <!-- Bottom Case Study Info -->
    <g transform="translate(60, 495)">
      <text x="0" y="28" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">
        Australian Bass Producer (Fred &amp; Augustus Rebuild) • +88% Avg Time on Site
      </text>
    </g>
  </g>
</svg>`,
);

// 20. Press & Media EPK Campaign
saveSvg(
  "service-press-media.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="prBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141518"/>
      <stop offset="100%" stop-color="#0b0c0e"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#prBg)"/>

  <!-- Top Bar -->
  <rect x="0" y="0" width="1280" height="70" fill="#181920"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#262834" stroke-width="1"/>
  <text x="60" y="44" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700" letter-spacing="1">
    PRESS &amp; MEDIA — EPK &amp; EDITORIAL CAMPAIGN
  </text>
  <rect x="1010" y="18" width="210" height="34" rx="4" fill="#d4af37"/>
  <text x="1115" y="42" text-anchor="middle" fill="#000000" font-family="sans-serif" font-size="20" font-weight="800">
    45+ PLACEMENTS
  </text>

  <!-- Editorial Press Showcase -->
  <g transform="translate(60, 95)">
    <rect x="0" y="0" width="1160" height="570" rx="8" fill="#161820" stroke="#292c38" stroke-width="1.5"/>

    <!-- Left: Major Media Premiere Feature Card -->
    <g transform="translate(40, 40)">
      <rect x="0" y="0" width="520" height="480" rx="8" fill="#1f222d" stroke="#d4af37" stroke-width="1.5"/>
      <rect x="25" y="21" width="230" height="34" rx="4" fill="#d4af37"/>
      <text x="140" y="45" text-anchor="middle" fill="#000000" font-family="sans-serif" font-size="20" font-weight="800">PREMIERE FEATURE</text>

      <text x="25" y="105" fill="#ffffff" font-family="sans-serif" font-size="32" font-weight="800">PASTE MAGAZINE</text>
      <text x="25" y="140" fill="#9ca3af" font-family="sans-serif" font-size="20" font-style="italic">
        "A breakout songwriting voice that
      </text>
      <text x="25" y="164" fill="#9ca3af" font-family="sans-serif" font-size="20" font-style="italic">
        blends vintage warmth with modern
      </text>
      <text x="25" y="188" fill="#9ca3af" font-family="sans-serif" font-size="20" font-style="italic">
        cinematic clarity."
      </text>

      <line x1="25" y1="210" x2="495" y2="210" stroke="#2e3342" stroke-width="1"/>

      <text x="25" y="248" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">Macy Todd — 3-Month PR Campaign</text>
      <text x="25" y="280" fill="#9ca3af" font-family="sans-serif" font-size="20">Executed by Cyber PR Music</text>

      <text x="25" y="325" fill="#34d399" font-family="sans-serif" font-size="20" font-weight="600">✓ 45+ Verified Editorial Placements</text>
      <text x="25" y="355" fill="#34d399" font-family="sans-serif" font-size="20" font-weight="600">✓ 1.5M Combined Streams by Campaign Finale</text>
      <text x="25" y="385" fill="#34d399" font-family="sans-serif" font-size="20" font-weight="600">✓ NPR &amp; Indie Tastemaker Blog Coverage</text>
    </g>

    <!-- Right: EPK Asset Kit Contents -->
    <g transform="translate(590, 40)">
      <rect x="0" y="0" width="530" height="480" rx="8" fill="#1b1d26" stroke="#2c303d" stroke-width="1"/>
      <g transform="translate(35, 35)">
        <text x="0" y="24" fill="#d4af37" font-family="sans-serif" font-size="20" font-weight="700" letter-spacing="1">EPK ASSET ARCHITECTURE</text>
        <text x="0" y="58" fill="#ffffff" font-family="sans-serif" font-size="24" font-weight="700">Complete Press &amp; Media Package</text>

        <g transform="translate(0, 85)">
          <rect x="0" y="0" width="460" height="50" rx="4" fill="#232734"/>
          <text x="20" y="33" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="600">High-Res Studio Photography (300 DPI)</text>

          <rect x="0" y="65" width="460" height="50" rx="4" fill="#232734"/>
          <text x="20" y="98" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="600">Official Artist Bio (All Lengths)</text>

          <rect x="0" y="130" width="460" height="50" rx="4" fill="#232734"/>
          <text x="20" y="163" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="600">Embargoed Pre-Release Audio Links</text>

          <rect x="0" y="195" width="460" height="50" rx="4" fill="#232734"/>
          <text x="20" y="228" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="600">Press Release List (850 Editors)</text>
        </g>
      </g>
    </g>
  </g>
</svg>`,
);

// 21. Artist Development Career Blueprint
saveSvg(
  "service-artist-development.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
  <defs>
    <linearGradient id="devBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#131417"/>
      <stop offset="100%" stop-color="#0a0a0c"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#devBg)"/>

  <!-- Top Bar -->
  <rect x="0" y="0" width="1280" height="70" fill="#181920"/>
  <line x1="0" y1="70" x2="1280" y2="70" stroke="#252733" stroke-width="1"/>
  <text x="60" y="44" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700" letter-spacing="1">
    ARTIST DEVELOPMENT — CAREER ROADMAP &amp; GROWTH
  </text>
  <rect x="970" y="18" width="250" height="34" rx="4" fill="#10b981"/>
  <text x="1095" y="42" text-anchor="middle" fill="#000000" font-family="sans-serif" font-size="20" font-weight="800">
    SUSTAINED GROWTH
  </text>

  <!-- Roadmap Timeline Flow -->
  <g transform="translate(60, 95)">
    <rect x="0" y="0" width="1160" height="570" rx="8" fill="#15171d" stroke="#292c37" stroke-width="1.5"/>

    <!-- 4 Phases of Development -->
    <!-- Phase 1 -->
    <g transform="translate(40, 50)">
      <rect x="0" y="0" width="250" height="260" rx="8" fill="#1c1e28" stroke="#333746" stroke-width="1"/>
      <text x="25" y="45" fill="#d4af37" font-family="sans-serif" font-size="20" font-weight="700">PHASE 01</text>
      <text x="25" y="90" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">Sonic Identity</text>
      <line x1="25" y1="125" x2="225" y2="125" stroke="#2a2d39" stroke-width="1"/>
      <text x="25" y="175" fill="#34d399" font-family="sans-serif" font-size="20">✓ 10-Song Arc</text>
    </g>

    <!-- Phase 2 -->
    <g transform="translate(320, 50)">
      <rect x="0" y="0" width="250" height="260" rx="8" fill="#1c1e28" stroke="#333746" stroke-width="1"/>
      <text x="25" y="45" fill="#38bdf8" font-family="sans-serif" font-size="20" font-weight="700">PHASE 02</text>
      <text x="25" y="90" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">Visual Universe</text>
      <line x1="25" y1="125" x2="225" y2="125" stroke="#2a2d39" stroke-width="1"/>
      <text x="25" y="175" fill="#34d399" font-family="sans-serif" font-size="20">✓ Full Style Guide</text>
    </g>

    <!-- Phase 3 -->
    <g transform="translate(600, 50)">
      <rect x="0" y="0" width="250" height="260" rx="8" fill="#1c1e28" stroke="#333746" stroke-width="1"/>
      <text x="25" y="45" fill="#a855f7" font-family="sans-serif" font-size="20" font-weight="700">PHASE 03</text>
      <text x="25" y="90" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">Audience Funnel</text>
      <line x1="25" y1="125" x2="225" y2="125" stroke="#2a2d39" stroke-width="1"/>
      <text x="25" y="175" fill="#34d399" font-family="sans-serif" font-size="20">✓ 89% Algorithmic</text>
    </g>

    <!-- Phase 4 -->
    <g transform="translate(880, 50)">
      <rect x="0" y="0" width="240" height="260" rx="8" fill="#1c1e28" stroke="#10b981" stroke-width="1.5"/>
      <text x="25" y="45" fill="#10b981" font-family="sans-serif" font-size="20" font-weight="700">PHASE 04</text>
      <text x="25" y="90" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="700">Monetization</text>
      <line x1="25" y1="125" x2="215" y2="125" stroke="#2a2d39" stroke-width="1"/>
      <text x="25" y="175" fill="#34d399" font-family="sans-serif" font-size="20">✓ Artist Business</text>
    </g>

    <!-- Case Study Footer Bar -->
    <g transform="translate(40, 380)">
      <text x="0" y="30" fill="#ffffff" font-family="sans-serif" font-size="20" font-weight="700">
        Vade Mey — Multi-Release Growth (Case Study: Now Listen PR)
      </text>
      <text x="0" y="64" fill="#9ca3af" font-family="sans-serif" font-size="20">
        Result: 89% of audience sustainably acquired through Spotify recommendation algorithms;
      </text>
      <text x="0" y="92" fill="#9ca3af" font-family="sans-serif" font-size="20">
        320,000+ streams from 171,000 listeners in year one.
      </text>
    </g>
  </g>
</svg>`,
);

console.log("All complete service graphics generated!");
