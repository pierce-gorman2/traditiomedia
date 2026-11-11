import Image from "next/image";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center"
    >
      {/* soft golden glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #b8924a 0%, transparent 65%)" }}
      />
      <div className="relative max-w-4xl">
        <Image
          src="/logo.png"
          alt=""
          width={204}
          height={443}
          priority
          className="mx-auto mb-8 h-40 w-auto sm:h-52"
        />
        <p className="mb-8 text-xs font-medium uppercase tracking-[0.4em] text-gold">Est. MMXXVI</p>
        <h1 id="hero-title" className="font-serif text-6xl font-medium leading-[0.95] sm:text-8xl md:text-9xl">
          {site.name}
        </h1>
        <div aria-hidden className="mx-auto my-10 h-px w-24 bg-gold" />
        <p className="font-serif text-2xl italic text-gold sm:text-4xl">{site.slogan}</p>
        <a
          href="#mission"
          className="mt-12 inline-block border border-gold px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Our Mission
        </a>
      </div>
    </section>
  );
}
