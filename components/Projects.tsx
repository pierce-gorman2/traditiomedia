import { projects } from "@/lib/content";
import { Eyebrow, Section } from "./Section";

export default function Projects() {
  return (
    <Section id="projects" labelledBy="projects-title">
      <Eyebrow>{projects.eyebrow}</Eyebrow>
      <h2 id="projects-title" className="max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
        {projects.heading}
      </h2>
      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {projects.items.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col border border-edge bg-coal p-10 transition-colors hover:border-gold sm:p-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{p.tagline}</p>
            <h3 className="mt-5 font-serif text-4xl sm:text-5xl">{p.name}</h3>
            <p className="mt-6 flex-1 leading-relaxed text-mute">{p.description}</p>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-paper transition-colors group-hover:text-gold"
            >
              {p.cta}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
