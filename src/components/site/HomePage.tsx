"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, Play, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { BrandLogo } from "@/components/site/BrandLogo";
import { recentWork, services } from "@/data/site";
const heroImage = "/images/maver-hero.jpg";
const introImage = "/images/maver-intro.jpg";
const strategyImage = "/images/maver-strategy.jpg";

const nav = [
  ["HOME", "#home"],
  ["SERVICES", "#services"],
  ["WORK", "#work"],
  ["RECENT WORK", "#recent-work"],
  ["ABOUT", "#about"],
  ["PROCESS", "#process"],
  ["FAQ", "#faq"],
  ["CONTACT", "#contact"],
] as const;

type WorkItem = { title: string; category: string; description: string } & (
  | { kind: "concept" | "cover"; image: string }
  | { kind: "video"; image: string; src: string; ratio: number }
);

const work: WorkItem[] = [
  {
    kind: "video",
    title: "Anime Garage Story",
    category: "AI ANIMATION VIDEO",
    description:
      "A hand-drawn style animated short, built scene by scene from a single character and setting.",
    image: "/images/poster-anime-garage-story.jpg",
    src: "/videos/anime-garage-story.mp4",
    ratio: 1274 / 720,
  },
  {
    kind: "video",
    title: "Trust the Process",
    category: "2D MUSIC VIDEO",
    description: "Expressive 2D character animation that carries the emotion of the record.",
    image: "/images/poster-trust-the-process.jpg",
    src: "/videos/trust-the-process.mp4",
    ratio: 16 / 9,
  },
  {
    kind: "video",
    title: "Crash Dummie",
    category: "ANIMATED ARTWORK",
    description: "Cover art brought to life with motion, texture and a split-screen visual rhythm.",
    image: "/images/poster-crash-dummie.jpg",
    src: "/videos/crash-dummie.mp4",
    ratio: 2,
  },
  {
    kind: "video",
    title: "Happy Ape's Space Adventure",
    category: "2D ANIMATION",
    description: "A colourful animated adventure with its own characters, world and story.",
    image: "/images/poster-happy-apes-space-adventure.jpg",
    src: "/videos/happy-apes-space-adventure.mp4",
    ratio: 16 / 9,
  },
  {
    kind: "video",
    title: "Inner Eye Games",
    category: "MOTION DESIGN",
    description: "Fluid colour and motion built to give sound a distinctive visual pulse.",
    image: "/images/poster-inner-eye-games.jpg",
    src: "/videos/inner-eye-games.mp4",
    ratio: 16 / 9,
  },
  {
    kind: "video",
    title: "Animated Cover Visualizer",
    category: "ANIMATED COVER",
    description:
      "A release cover reimagined as a looping, layered visual for social and streaming.",
    image: "/images/poster-animated-cover-visualizer.jpg",
    src: "/videos/animated-cover-visualizer.mp4",
    ratio: 1,
  },
  {
    kind: "cover",
    title: "Hustle Money",
    category: "COVER ART",
    description:
      "A bold portrait-led cover with a typographic side panel and warm, cinematic light.",
    image: "/images/cover-hustle-money.jpg",
  },
  {
    kind: "cover",
    title: "Street Beast",
    category: "COVER ART",
    description:
      "High-energy artwork built around a hero vehicle, fire and sharp, glitched typography.",
    image: "/images/cover-street-beast.jpg",
  },
  {
    kind: "cover",
    title: "Call Ya No Me Enamoro",
    category: "ILLUSTRATED COVER ART",
    description:
      "A stylised illustrated cover with a neon-green stage world and layered character art.",
    image: "/images/cover-call-ya-no-me-enamoro.jpg",
  },
  {
    kind: "cover",
    title: "Bernie Mackin",
    category: "COVER ART",
    description:
      "Maximalist throwback cover design with metallic lettering, gold and a dense collage.",
    image: "/images/cover-bernie-mackin.jpg",
  },
  {
    kind: "concept",
    title: "Google Knowledge Panel Verification",
    category: "GOOGLE DIGITAL IDENTITY",
    description:
      "Official Google Search Knowledge Graph claiming, entity resolution, and music schema markup for verified musicians.",
    image: "/images/service-google-knowledge-panel.svg",
  },
  {
    kind: "concept",
    title: "Global DSP Distribution Network",
    category: "MUSIC DISTRIBUTION",
    description:
      "Direct digital release delivery across 200+ streaming services with lossless audio ingestion and synchronized metadata.",
    image: "/images/service-music-distribution.svg",
  },
  {
    kind: "concept",
    title: "Precision Audio Mastering Suite",
    category: "TRACK MASTERING",
    description:
      "Streaming-compliant stereo mastering optimized to -14.1 LUFS targets with safe true-peak ceiling and dynamic punch.",
    image: "/images/service-track-mastering.svg",
  },
  {
    kind: "concept",
    title: "Sync Placement & Cue Clearance",
    category: "SYNC LICENSING",
    description:
      "100% pre-cleared instrumental stem packages, metadata tagging, and direct sync representation for SVOD series and commercials.",
    image: "/images/service-sync-licensing.svg",
  },
  {
    kind: "concept",
    title: "YouTube Content ID Engine",
    category: "MUSIC MONETIZATION",
    description:
      "Automated audio fingerprinting and royalty recovery across user-generated content, capturing passive revenue without strikes.",
    image: "/images/service-music-monetization.svg",
  },
  {
    kind: "concept",
    title: "Electronic Press Kit (EPK)",
    category: "PRESS & MEDIA",
    description:
      "Strategic press release dissemination, artist photography assets, and editorial placement across music publications.",
    image: "/images/service-press-media.svg",
  },
];

const faqs = [
  [
    "What does Rapho Music Agency do?",
    "We connect music growth, distribution, visuals, branding, content, digital presence and artist development into one creative ecosystem.",
  ],
  [
    "Do you work with independent artists?",
    "Yes. Independent and emerging artists are central to our work, alongside labels, bands, producers, DJs and creative brands.",
  ],
  [
    "Can you help with a complete music release?",
    "Yes. We can shape the release strategy, distribution, artwork, visual content, promotion and digital rollout as one connected campaign.",
  ],
  [
    "Do you provide music distribution?",
    "Yes. We support digital delivery, metadata, release management and platform readiness across major streaming services.",
  ],
  [
    "Do you create music videos?",
    "Yes. We develop 2D, 3D, hybrid, cinematic, animated and narrative music video projects.",
  ],
  [
    "Do you offer 2D and 3D animation?",
    "Yes. Our animation work includes motion graphics, characters, environments, typography and visual effects.",
  ],
  [
    "Can you create my artist branding?",
    "Yes. We can build your visual identity, logo, creative direction, social presence and release campaign system.",
  ],
  [
    "Can you help with Spotify and SoundCloud promotion?",
    "Yes. We plan audience-focused campaigns for Spotify, SoundCloud, YouTube and the wider digital music ecosystem.",
  ],
  [
    "Do you build artist websites?",
    "Yes. We create artist websites, landing pages, link-in-bio experiences and digital profiles.",
  ],
  [
    "What is Google Knowledge Panel readiness?",
    "It is the process of improving the consistency and structure of public artist information so search engines can understand your identity more clearly.",
  ],
  [
    "Can I hire Rapho for only one service?",
    "Yes. You can begin with one focused service or combine several into a complete release ecosystem.",
  ],
  [
    "How do I start a project?",
    "Use the project form below. Tell us what you are creating, what stage it is at and where you want it to go.",
  ],
] as const;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const sections = nav
      .map(([, href]) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const currentId = current?.target.id;
        if (currentId) setActive(`#${currentId}`);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.1, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? "border-border bg-background/90 backdrop-blur-xl" : "border-transparent bg-transparent"}`}
    >
      <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-5 px-5 sm:h-24 lg:px-10">
        <a href="#home" aria-label="Rapho Music Agency home" className="shrink-0">
          <BrandLogo compact priority />
        </a>
        <nav
          aria-label="Primary navigation"
          className="hidden items-center justify-center gap-4 lg:flex"
        >
          {nav.map(([label, href]) => (
            <a
              key={label}
              href={href}
              aria-current={active === href ? "page" : undefined}
              className={`inline-flex min-h-11 min-w-11 items-center justify-center px-1 text-[0.62rem] font-semibold transition-colors hover:text-foreground ${active === href ? "text-primary" : "text-muted-foreground"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <Button asChild variant="hero" size="editorial" className="hidden lg:inline-flex">
          <a href="#contact">
            START A PROJECT <ArrowRight />
          </a>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="col-start-3 h-11 w-11 text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className={`border-border bg-background transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[calc(100svh-5rem)] overflow-y-auto border-t" : "pointer-events-none max-h-0 overflow-hidden border-t-0"}`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col px-5 py-6">
          {nav.map(([label, href], i) => (
            <a
              key={label}
              href={href}
              aria-current={active === href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`flex min-h-14 items-center justify-between border-b border-border py-3 font-display text-xl ${active === href ? "text-primary" : "text-foreground"}`}
            >
              <span>{label}</span>
              <span className="text-xs text-muted-foreground">0{i + 1}</span>
            </a>
          ))}
          <Button asChild variant="hero" size="editorial" className="mt-6">
            <a href="#contact" onClick={() => setOpen(false)}>
              START A PROJECT <ArrowRight />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}

function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[0.62rem] font-semibold uppercase ${light ? "text-light-ink/60" : "text-muted-foreground"}`}
    >
      <span className={`h-px w-8 ${light ? "bg-light-ink/30" : "bg-primary"}`} />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="grain relative flex min-h-[540px] items-end sm:min-h-[85svh] overflow-hidden border-b border-border pt-24"
    >
      <Image
        src={heroImage}
        alt="Artist working at a studio mixing desk"
        fill
        preload
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="image-shade absolute inset-0" />
      <div className="relative mx-auto grid w-full max-w-[1440px] items-end gap-8 px-5 pb-12 sm:pb-20 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,.65fr)] lg:px-10 lg:pb-24">
        <div className="max-w-5xl">
          <SectionLabel>Rapho / Music + creative agency</SectionLabel>
          <h1 className="max-w-5xl text-[clamp(2.5rem,8vw,8.2rem)] font-medium uppercase leading-[0.82]">
            We build the world <span className="brand-gradient-text">around your music.</span>
          </h1>
        </div>
        <div className="max-w-md lg:justify-self-end">
          <p className="text-sm leading-7 text-foreground/75 sm:text-base">
            Music growth. Distribution. Visuals. Branding. Everything your music needs to move
            further.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="editorial">
              <a href="#contact">
                START A PROJECT <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="editorial" size="editorial">
              <a href="#work">EXPLORE OUR WORK</a>
            </Button>
          </div>
        </div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to introduction"
        className="absolute bottom-5 right-5 hidden h-11 w-11 sm:grid place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary lg:right-10"
      >
        <ArrowDownRight className="h-4 w-4" />
      </a>
    </section>
  );
}

function Intro() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[.82fr_1.18fr] lg:px-10 lg:py-40"
    >
      <div className="relative min-h-[300px] overflow-hidden sm:min-h-[440px] lg:min-h-[640px]">
        <Image
          src={introImage}
          alt="Singer recording at a studio microphone"
          fill
          sizes="(max-width: 1023px) calc(100vw - 2.5rem), 42vw"
          className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.025]"
        />
        <span className="absolute bottom-5 right-5 text-4xl text-primary">+</span>
      </div>
      <div className="flex flex-col justify-center lg:pl-[10%]">
        <SectionLabel>Our point of view</SectionLabel>
        <h2 className="text-[clamp(2.25rem,6vw,6.5rem)] font-medium uppercase leading-[0.86]">
          Your music.
          <br />
          Your identity.
          <br />
          <span className="brand-gradient-text">Your world.</span>
        </h2>
        <p className="mt-8 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
          Rapho Music Agency helps artists transform music into complete creative experiences — from
          release strategy and distribution to visuals, animation, branding, content and digital
          presence.
        </p>
        <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/80">
          We understand music. We understand visuals. We understand artists.
        </p>
      </div>
    </section>
  );
}

function ServiceGrid() {
  const [showAll, setShowAll] = useState(false);
  const images: Record<string, string> = {
    "music-growth": "/images/service-spotify-growth.svg",
    "music-distribution": "/images/service-music-distribution.svg",
    "track-mastering": "/images/service-track-mastering.svg",
    "sync-licensing": "/images/service-sync-licensing.svg",
    "music-monetization": "/images/service-music-monetization.svg",
    "cd-selling": "/images/service-cd-physical-sales.svg",
    "copyright-protection": "/images/service-copyright-protection.svg",
    "radio-submission": "/images/service-radio-submission.svg",
    "ai-video-animation": "/images/poster-anime-garage-story.jpg",
    "ai-software-design": "/images/service-ai-software-design.svg",
    "music-videos": "/images/poster-trust-the-process.jpg",
    "3d-animation": "/images/poster-happy-apes-space-adventure.jpg",
    "motion-design": "/images/poster-inner-eye-games.jpg",
    "music-visuals": "/images/poster-animated-cover-visualizer.jpg",
    "artwork-cover-design": "/images/cover-hustle-money.jpg",
    "artist-branding": "/images/service-artist-branding.svg",
    "social-content": "/images/service-social-content.svg",
    "dj-live-visuals": "/images/service-dj-live-visuals.svg",
    "vfx-cinematic": "/images/service-vfx-cinematic.svg",
    "digital-presence": "/images/service-digital-presence.svg",
    "google-digital-identity": "/images/service-google-knowledge-panel.svg",
    "press-media": "/images/service-press-media.svg",
    "artist-development": "/images/service-artist-development.svg",
  };
  const visibleServices = showAll ? services : services.slice(0, 8);
  return (
    <section id="services" className="border-y border-border bg-panel py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid gap-4 border-b border-border pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-[clamp(2.25rem,6vw,6.5rem)] font-medium uppercase leading-none">
              What we do
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">
            A connected creative ecosystem for building, presenting, promoting and growing music
            careers.
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          {visibleServices.map((service, index) => (
            <Link
              href={`/services/${service.slug}`}
              key={service.slug}
              className={`group relative min-h-[220px] overflow-hidden border-b border-border p-5 sm:min-h-[300px] sm:p-8 ${index % 2 === 0 ? "md:border-r" : ""}`}
            >
              {images[service.slug] && (
                <Image
                  src={images[service.slug]}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-50 group-hover:grayscale-0"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="relative flex h-full flex-col justify-between gap-10">
                <div className="flex items-start justify-between">
                  <span className="text-[0.6rem] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowDownRight className="h-5 w-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-medium uppercase sm:text-3xl">{service.title}</h3>
                  <p className="mt-3 max-w-md text-xs leading-6 text-muted-foreground">
                    {service.items.slice(0, 5).join(" • ")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {!showAll && services.length > visibleServices.length && (
          <div className="flex flex-col items-start justify-between gap-5 border-b border-border py-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Start with the core services, or open the complete {services.length}-service
              capability list.
            </p>
            <Button
              type="button"
              variant="editorial"
              size="editorial"
              aria-expanded={showAll}
              onClick={() => setShowAll(true)}
            >
              VIEW ALL SERVICES <ArrowDownRight />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function Portfolio() {
  const [selected, setSelected] = useState<WorkItem | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleWork = showAll ? work : work.slice(0, 6);
  return (
    <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
      <section id="work" className="mx-auto max-w-[1440px] px-5 py-14 sm:py-20 lg:px-10 lg:py-28">
        <div className="grid gap-4 border-b border-border pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="text-[clamp(2.25rem,6vw,6.5rem)] font-medium uppercase leading-none">
              Ideas made visible.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">
            Original visual studies showing the range of worlds Rapho Music Agency can build around
            sound.
          </p>
        </div>
        <div className="grid gap-x-5 gap-y-10 pt-8 md:grid-cols-2">
          {visibleWork.map((item) => (
            <Button
              variant="ghost"
              key={item.title}
              onClick={() => setSelected(item)}
              className="group block h-auto w-full whitespace-normal rounded-none p-0 text-left hover:bg-transparent"
            >
              <div
                className={`relative overflow-hidden bg-panel ${
                  item.kind === "cover"
                    ? "aspect-square"
                    : item.kind === "concept"
                      ? "aspect-[16/9]"
                      : "aspect-[1.25]"
                }`}
              >
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.category.toLowerCase()}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className={`h-full w-full transition duration-700 ${
                    item.kind === "concept"
                      ? "object-contain group-hover:opacity-100 opacity-90"
                      : "object-cover group-hover:scale-105"
                  }`}
                />
                {item.kind === "video" && (
                  <span
                    className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center border border-foreground/30 bg-background/75 text-foreground backdrop-blur-md transition group-hover:border-primary group-hover:text-primary"
                    aria-hidden="true"
                  >
                    <Play className="h-4 w-4 fill-current" />
                  </span>
                )}
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-border py-5">
                <div>
                  <p className="text-[0.65rem] font-semibold text-primary">{item.category}</p>
                  <h3 className="mt-2 font-display text-2xl uppercase">{item.title}</h3>
                </div>
                <ArrowDownRight className="mt-2 h-5 w-5 transition group-hover:translate-x-1 group-hover:translate-y-1" />
              </div>
            </Button>
          ))}
        </div>
        {!showAll && work.length > visibleWork.length && (
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-y border-border py-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              A focused selection is shown first. Open the complete visual archive when you want to
              explore deeper.
            </p>
            <Button
              type="button"
              variant="editorial"
              size="editorial"
              aria-expanded={showAll}
              onClick={() => setShowAll(true)}
            >
              VIEW ALL {work.length} PROJECTS <ArrowDownRight />
            </Button>
          </div>
        )}
      </section>
      {selected && (
        <DialogContent className="max-h-[90svh] w-[calc(100%-2rem)] max-w-5xl gap-0 overflow-auto rounded-none border-border bg-panel p-0 sm:rounded-none md:grid md:grid-cols-2">
          <div className="relative bg-black">
            {selected.kind === "video" ? (
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: selected.ratio }}
              >
                <video
                  key={selected.src}
                  src={selected.src}
                  poster={selected.image}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : (
              <Image
                src={selected.image}
                alt=""
                width={1024}
                height={1024}
                className={
                  selected.kind === "cover"
                    ? "aspect-square w-full object-cover"
                    : "h-full max-h-[40svh] min-h-[200px] w-full object-cover md:max-h-none md:min-h-[320px]"
                }
              />
            )}
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-12">
            <p className="text-[0.65rem] font-semibold text-primary">{selected.category}</p>
            <DialogTitle className="mt-4 font-display text-4xl font-normal uppercase leading-none sm:text-6xl">
              {selected.title}
            </DialogTitle>
            <DialogDescription className="mt-6 text-base leading-7 text-muted-foreground">
              {selected.description}
            </DialogDescription>
            <Button asChild variant="hero" size="editorial" className="mt-9 self-start">
              <a href="#contact" onClick={() => setSelected(null)}>
                TALK ABOUT YOUR PROJECT <ArrowRight />
              </a>
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

function RecentWork() {
  const [filter, setFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    const f = new URLSearchParams(window.location.search).get("filter");
    if (f) setFilter(f);
  }, []);
  const allGroups = services
    .map((service) => ({
      service,
      items: recentWork.filter((item) => item.serviceSlug === service.slug),
    }))
    .filter((group) => group.items.length > 0);
  const filteredItems =
    filter === "all" ? recentWork : recentWork.filter((item) => item.serviceSlug === filter);
  const visibleItems = filter === "all" && !showAll ? filteredItems.slice(0, 6) : filteredItems;
  const activeService = services.find((service) => service.slug === filter);
  const isSingleCard = filteredItems.length === 1;
  const gridLayout =
    filter === "all" || filteredItems.length <= 2
      ? "md:grid-cols-2"
      : "md:grid-cols-2 xl:grid-cols-3";
  return (
    <section id="recent-work" className="border-y border-border bg-panel py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid gap-4 border-b border-border pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-2 lg:items-end">
          <div>
            <SectionLabel>Recent work</SectionLabel>
            <h2 className="text-[clamp(2.25rem,6vw,6.5rem)] font-medium uppercase leading-none">
              Results in the wild.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">
            Documented campaigns from across the music industry showing what each service can
            achieve. Credited and linked to their original sources.
          </p>
        </div>
        <div
          className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 pt-8 sm:mx-0 sm:flex-wrap sm:px-0"
          role="group"
          aria-label="Filter recent work by service"
        >
          {[{ slug: "all", title: "All" }, ...allGroups.map((group) => group.service)].map(
            (option) => (
              <button
                key={option.slug}
                type="button"
                aria-pressed={filter === option.slug}
                onClick={() => {
                  setFilter(option.slug);
                  setShowAll(false);
                }}
                className={`min-h-11 shrink-0 snap-start border px-4 py-2 text-[0.65rem] font-semibold uppercase transition-colors ${filter === option.slug ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-foreground"}`}
              >
                {option.title}
              </button>
            ),
          )}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            <span className="mr-2 text-primary">
              {String(filteredItems.length).padStart(2, "0")}
            </span>
            {filter === "all" ? "documented case studies" : activeService?.title}
          </p>
          {activeService ? (
            <Link
              href={`/services/${activeService.slug}`}
              className="text-[0.62rem] font-semibold uppercase text-muted-foreground transition hover:text-primary"
            >
              Explore this service →
            </Link>
          ) : (
            <p className="text-[0.65rem] uppercase text-muted-foreground/70" aria-live="polite">
              Showing {visibleItems.length} of {filteredItems.length} sourced studies
            </p>
          )}
        </div>
        <div className={`mt-6 grid gap-5 ${gridLayout}`}>
          {visibleItems.map((item) => {
            const service = services.find((entry) => entry.slug === item.serviceSlug);
            if (!service) return null;
            return (
              <article
                key={`${item.serviceSlug}-${item.title}`}
                className={`group flex h-full flex-col overflow-hidden border border-border bg-background transition-colors hover:border-primary/55 ${
                  isSingleCard ? "col-span-full" : ""
                }`}
                style={{ gridColumn: isSingleCard ? "1 / -1" : undefined }}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#0e0f13]">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes={isSingleCard ? "100vw" : "(max-width: 767px) 100vw, 50vw"}
                    className={`h-full w-full transition duration-700 group-hover:scale-[1.025] group-hover:opacity-90 group-hover:grayscale-0 ${
                      item.image.endsWith(".svg")
                        ? "object-contain opacity-90 grayscale-[10%]"
                        : "object-cover opacity-75 grayscale-[20%]"
                    }`}
                  />
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-border px-4 py-3 sm:px-5">
                  <span className="border border-primary/40 px-3 py-2 text-[0.65rem] font-semibold uppercase text-primary">
                    {service.title}
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase text-foreground/70">
                    Case study
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[0.65rem] font-semibold uppercase text-primary">
                        {item.kind === "industry-example" ? "Industry reference" : "Rapho project"}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex min-h-11 items-center text-[0.65rem] font-semibold uppercase text-muted-foreground transition hover:text-primary"
                      >
                        View service →
                      </Link>
                    </div>
                    <h3 className="font-display text-2xl uppercase leading-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">{item.summary}</p>
                  </div>
                  <div className="mt-8 pt-6">
                    <dl className="grid grid-cols-2 gap-4 border-t border-border pt-6">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <dt className="font-display text-2xl text-primary sm:text-3xl">
                            {metric.value}
                          </dt>
                          <dd className="mt-1 text-[0.58rem] uppercase leading-4 text-muted-foreground">
                            {metric.label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-border pt-5">
                      {item.kind === "industry-example" ? (
                        <>
                          <div className="flex max-w-[70%] flex-wrap items-center gap-3">
                            <span className="shrink-0 border border-border px-3 py-2 text-[0.65rem] font-semibold uppercase text-muted-foreground">
                              Illustrative graphic
                            </span>
                            <p className="text-[0.65rem] uppercase leading-5 text-muted-foreground">
                              {item.credit}
                            </p>
                          </div>
                          <a
                            href={item.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Read ${item.sourceName}: ${item.title}`}
                            className="inline-flex min-h-11 items-center text-[0.65rem] font-semibold uppercase text-foreground transition hover:text-primary"
                          >
                            Source ↗
                          </a>
                        </>
                      ) : (
                        <>
                          <div className="flex max-w-[70%] flex-wrap items-center gap-3">
                            <span className="shrink-0 border border-border px-3 py-2 text-[0.65rem] font-semibold uppercase text-muted-foreground">
                              Original production
                            </span>
                            <p className="text-[0.65rem] uppercase leading-5 text-muted-foreground">
                              {item.client || "Rapho original production"}
                            </p>
                          </div>
                          <span className="inline-flex min-h-11 items-center text-[0.65rem] font-semibold uppercase text-muted-foreground">
                            Rapho original production
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {filter === "all" && !showAll && filteredItems.length > visibleItems.length && (
          <div className="mt-8 flex flex-col items-start justify-between gap-5 border-y border-border py-8 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-6 text-muted-foreground">
              Six studies are shown first to keep the page focused. The complete sourced archive is
              one click away.
            </p>
            <Button
              type="button"
              variant="editorial"
              size="editorial"
              aria-expanded={showAll}
              onClick={() => setShowAll(true)}
            >
              VIEW ALL {filteredItems.length} STUDIES <ArrowDownRight />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

const reasons = [
  [
    "Music + visuals under one roof",
    "Strategy, distribution, promotion, visuals and branding connected together.",
  ],
  [
    "Artist-first thinking",
    "We build around the artist rather than forcing every project into the same template.",
  ],
  [
    "Creative + strategic",
    "Beautiful visuals should always serve the music and the artist's goals.",
  ],
  [
    "Complete release ecosystem",
    "From artwork and Canvas to music video, promotion, distribution and social content.",
  ],
  ["Global mindset", "We work with artists and creative projects across different markets."],
  ["Long-term partnership", "We aim to become a creative partner artists can grow with."],
] as const;

function WhyRapho() {
  return (
    <section className="bg-light-section py-14 text-light-ink sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <SectionLabel light>Built around artists</SectionLabel>
        <h2 className="max-w-4xl text-[clamp(2.25rem,6vw,6.5rem)] font-medium uppercase leading-[0.9]">
          Why work with Rapho?
        </h2>
        <div className="mt-10 grid border-t border-light-ink/20 md:grid-cols-3">
          {reasons.map(([title, text], i) => (
            <div
              key={title}
              className={`border-b border-light-ink/20 py-8 md:px-7 ${i % 3 !== 2 ? "md:border-r" : ""}`}
            >
              <span className="text-[0.6rem] text-light-ink/45">0{i + 1}</span>
              <h3 className="mt-8 text-lg font-semibold uppercase">{title}</h3>
              <p className="mt-4 text-sm leading-6 text-light-ink/65">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StrategyCTA() {
  return (
    <section className="grain relative flex min-h-[480px] items-center sm:min-h-[600px] overflow-hidden">
      <Image
        src={strategyImage}
        alt="Artist performing to a concert audience"
        fill
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/55" />
      <div className="image-shade absolute inset-0" />
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:py-24 lg:px-10">
        <SectionLabel>Beyond the song</SectionLabel>
        <h2 className="max-w-5xl text-[clamp(2.4rem,7vw,7.5rem)] font-medium uppercase leading-[0.85]">
          Your music deserves a{" "}
          <span className="brand-gradient-text">stronger visual strategy.</span>
        </h2>
        <p className="mt-8 max-w-xl text-sm leading-7 text-foreground/75 sm:text-base">
          Your song is only the beginning. We help build the visuals, identity, content and strategy
          that give your music somewhere to go.
        </p>
        <Button asChild variant="hero" size="editorial" className="mt-8">
          <a href="#contact">
            BUILD WITH RAPHO <ArrowRight />
          </a>
        </Button>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["Discover", "We learn about your music, identity, audience and goals."],
    ["Strategize", "We develop the creative direction and project strategy."],
    ["Create", "Our team develops the visuals, content, branding or campaign."],
    ["Launch", "We prepare and deploy the final assets across the required platforms."],
    ["Grow", "We review performance, refine the strategy and help build the next stage."],
  ] as const;
  return (
    <section id="process" className="mx-auto max-w-[1440px] px-5 py-14 sm:py-20 lg:px-10 lg:py-28">
      <div className="grid gap-8 lg:gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <SectionLabel>Our approach</SectionLabel>
          <h2 className="text-[clamp(2.25rem,6vw,6.5rem)] font-medium uppercase leading-none">
            How we work
          </h2>
        </div>
        <div className="border-t border-border">
          {steps.map(([title, text], i) => (
            <div
              key={title}
              className="grid gap-4 border-b border-border py-7 sm:grid-cols-[70px_180px_1fr]"
            >
              <span className="text-xs text-primary">0{i + 1}</span>
              <h3 className="text-lg uppercase">{title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatementStrip() {
  return (
    <div className="brand-gradient-bg border-y border-foreground/10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-2 px-5 lg:grid-cols-4 lg:px-10">
        {["MUSIC + VISUALS", "GLOBAL CREATIVE", "MULTI-PLATFORM", "ARTIST-FIRST"].map((item, i) => (
          <div
            key={item}
            className={`py-7 text-center text-[0.62rem] font-semibold ${i % 2 === 0 ? "border-r border-foreground/20" : ""} lg:border-r lg:last:border-r-0`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-10 lg:py-28"
    >
      <div>
        <SectionLabel>Answers</SectionLabel>
        <h2 className="text-[clamp(2.25rem,6vw,6rem)] font-medium uppercase leading-none">
          Frequently asked
        </h2>
      </div>
      <Accordion type="single" collapsible className="border-t border-border">
        {faqs.map(([q, a], i) => (
          <AccordionItem key={q} value={`faq-${i}`}>
            <AccordionTrigger className="py-6 text-left text-base font-normal uppercase hover:no-underline sm:text-lg">
              {q}
            </AccordionTrigger>
            <AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setErrorMessage("");
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error ?? "Something went wrong.");
      form.reset();
      setStatus("sent");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong.");
      setStatus("error");
    }
  };
  return (
    <section id="contact">
      <div className="brand-gradient-bg">
        <div className="mx-auto grid max-w-[1440px] gap-6 px-5 py-10 sm:py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10">
          <div>
            <p className="text-[0.62rem] font-semibold">START A CONVERSATION</p>
            <h2 className="mt-5 max-w-5xl text-[clamp(2rem,5vw,5.5rem)] font-medium uppercase leading-[0.9]">
              Let's build something around your music.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-primary-foreground/80">
              Have a release, visual idea, campaign or artist project in mind? Tell us what you're
              building.
            </p>
          </div>
          <ArrowDownRight className="hidden h-12 w-12 lg:block" />
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28">
        <div>
          <SectionLabel>Project inquiry</SectionLabel>
          <h2 className="text-[clamp(2.25rem,6vw,6rem)] font-medium uppercase leading-[0.9]">
            Ready to build <span className="brand-gradient-text">what's next?</span>
          </h2>
          <p className="mt-7 max-w-md leading-7 text-muted-foreground">
            Bring us the music, the idea, or simply the vision. We'll help turn it into something
            people can see, hear and remember.
          </p>
        </div>
        <form
          onSubmit={submit}
          className="grid gap-7 sm:grid-cols-2"
          aria-busy={status === "sending"}
        >
          {[
            ["Name", "Your name", "name", "text", "name"],
            ["Email", "you@example.com", "email", "email", "email"],
            ["Artist / brand", "Project or artist name", "brand", "text", "organization"],
            ["Service", "What do you need?", "service", "text", "off"],
          ].map(([label, placeholder, name, type, autoComplete]) => (
            <label
              key={label}
              htmlFor={`contact-${name}`}
              className="text-[0.62rem] font-semibold uppercase text-muted-foreground"
            >
              {label}
              <input
                required
                id={`contact-${name}`}
                name={name}
                type={type}
                autoComplete={autoComplete}
                className="mt-3 h-12 w-full border-b border-border bg-transparent text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                placeholder={placeholder}
              />
            </label>
          ))}
          <label
            htmlFor="contact-message"
            className="text-[0.62rem] font-semibold uppercase text-muted-foreground sm:col-span-2"
          >
            Tell us about the project
            <textarea
              required
              id="contact-message"
              name="message"
              rows={5}
              className="mt-3 w-full resize-y border-b border-border bg-transparent py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/50 focus:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              placeholder="Release date, goals, ideas and scope"
            />
          </label>
          <div className="sm:col-span-2" aria-live="polite">
            {status === "sent" ? (
              <p className="border-l-2 border-primary py-3 pl-4 text-sm text-foreground">
                Thanks — your message has been sent. We will get back to you soon.
              </p>
            ) : (
              <>
                <Button
                  type="submit"
                  variant="hero"
                  size="editorial"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "SENDING..." : "START A PROJECT"} <ArrowRight />
                </Button>
                {status === "error" && (
                  <p className="mt-4 text-sm text-destructive">{errorMessage}</p>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const socialLinks = [
    ["YouTube", "https://www.youtube.com/@RaphoMusicAgency"],
    ["Discord", "https://discord.com/users/raphomusicagency"],
    ["X / Twitter", "https://x.com/RaphoMusicagenc"],
    ["TikTok", "https://www.tiktok.com/@raphomusicagency"],
    ["SoundCloud", "https://soundcloud.com/discover"],
  ] as const;
  return (
    <footer className="border-t border-border bg-panel px-5 pb-6 pt-12 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.25fr_.6fr_.75fr]">
        <div>
          <BrandLogo />
          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Independent vision. Global sound.
          </p>
          <a
            href="mailto:raphomusicagency@gmail.com"
            className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-border text-sm text-foreground transition hover:border-primary hover:text-primary"
          >
            raphomusicagency@gmail.com <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div>
          <p className="text-[0.6rem] font-semibold text-primary">NAVIGATION</p>
          <div className="mt-5 grid gap-3">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="inline-flex min-h-11 items-center text-xs text-muted-foreground transition hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[0.6rem] font-semibold text-primary">FOLLOW RAPHO</p>
          <div className="mt-5 grid">
            {socialLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-11 items-center justify-between border-b border-border text-xs text-muted-foreground transition hover:border-primary hover:text-foreground"
              >
                {label}
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1440px] flex-wrap justify-between gap-3 border-t border-border pt-6 text-[0.58rem] text-muted-foreground">
        <span>© {new Date().getFullYear()} RAPHO MUSIC AGENCY</span>
        <span>YOUR MUSIC DESERVES A WORLD AROUND IT.</span>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] inline-flex min-h-11 -translate-y-24 items-center bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Intro />
        <ServiceGrid />
        <Portfolio />
        <RecentWork />
        <WhyRapho />
        <StrategyCTA />
        <Process />
        <StatementStrip />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
