import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/site/BrandLogo";
import { Button } from "@/components/ui/button";
import { services } from "@/data/site";

type Params = { slug: string };

const heroImage = "/images/maver-hero.jpg";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  const title = service
    ? `${service.title} — Rapho Music Agency`
    : "Service unavailable — Rapho Music Agency";
  const description =
    service?.description ?? "Explore music and creative services from Rapho Music Agency.";
  return {
    title,
    description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: { title, description, type: "website", url: `/services/${slug}` },
    twitter: { card: "summary_large_image" },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] inline-flex min-h-11 -translate-y-24 items-center bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:h-24 lg:px-10">
          <Link href="/" aria-label="Rapho Music Agency home">
            <BrandLogo compact priority />
          </Link>
          <Button asChild variant="editorial" size="editorial">
            <Link href="/#services">
              <ArrowLeft /> ALL SERVICES
            </Link>
          </Button>
        </div>
      </header>
      <main id="main-content" className="min-h-screen bg-background">
        <section className="grain relative flex min-h-[72svh] items-end overflow-hidden">
          <Image
            src={heroImage}
            alt="Artist in a music studio"
            fill
            preload
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="image-shade absolute inset-0" />
          <div className="relative mx-auto w-full max-w-[1440px] px-5 pb-16 pt-32 lg:px-10 lg:pb-24">
            <p className="text-[0.62rem] font-semibold uppercase text-primary">
              Rapho Music Agency / Services
            </p>
            <h1 className="mt-6 max-w-6xl text-[clamp(3.4rem,9vw,9rem)] font-medium uppercase leading-[0.82]">
              {service.title}
            </h1>
            <p className="mt-7 text-xl text-foreground/75 sm:text-2xl">{service.tagline}</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1440px] gap-16 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-36">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase text-primary">What we deliver</p>
            <h2 className="mt-5 text-[clamp(2.6rem,5vw,5rem)] font-medium uppercase leading-[0.9]">
              Built around the music. Shaped for the artist.
            </h2>
            <p className="mt-8 max-w-xl leading-8 text-muted-foreground">{service.description}</p>
          </div>
          <div className="border-t border-border">
            {service.items.map((item, index) => (
              <div key={item} className="grid grid-cols-[50px_1fr] border-b border-border py-6">
                <span className="text-xs text-primary">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-lg uppercase sm:text-xl">{item}</h3>
              </div>
            ))}
            <Button asChild variant="hero" size="editorial" className="mt-10">
              <Link href="/#contact">
                TALK ABOUT YOUR PROJECT <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t border-border px-5 py-8 text-xs text-muted-foreground lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} RAPHO MUSIC AGENCY</span>
          <Link href="/" className="inline-flex min-h-11 items-center hover:text-foreground">
            BACK TO HOME
          </Link>
        </div>
      </footer>
    </>
  );
}
