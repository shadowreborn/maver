import Image from "next/image";

const logoSrc = "/images/new logo.jpeg";

type BrandLogoProps = {
  compact?: boolean;
  priority?: boolean;
};

export function BrandLogo({ compact = false, priority = false }: BrandLogoProps) {
  if (compact) {
    return (
      <span className="flex items-center gap-3" aria-hidden="true">
        <span className="relative h-16 w-16 shrink-0 border border-primary/25 bg-black p-0.5 shadow-[0_0_32px_-12px_var(--primary)] sm:h-[4.5rem] sm:w-[4.5rem]">
          <Image
            src={logoSrc}
            alt=""
            width={1254}
            height={1254}
            preload={priority}
            sizes="(max-width: 640px) 64px, 72px"
            className="h-full w-full object-contain"
          />
        </span>
        <span className="hidden leading-none sm:block">
          <span className="block font-display text-xl font-semibold tracking-[0.08em] text-foreground">
            RAPHO
          </span>
          <span className="mt-1.5 block text-[0.5rem] font-semibold tracking-[0.3em] text-primary">
            MUSIC AGENCY
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className="block w-full max-w-[280px] border border-primary/20 bg-black p-3 shadow-[0_24px_80px_-40px_var(--primary)]">
      <Image
        src={logoSrc}
        alt="Rapho Music Agency — Independent Vision. Global Sound."
        width={1254}
        height={1254}
        sizes="(max-width: 640px) 240px, 280px"
        className="h-auto w-full"
      />
    </span>
  );
}
