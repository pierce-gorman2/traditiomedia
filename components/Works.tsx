import { works } from "@/lib/content";
import { Eyebrow, Section } from "./Section";

export default function Works() {
  return (
    <Section id="library" labelledBy="library-title" className="border-t border-edge bg-coal">
      <Eyebrow>{works.eyebrow}</Eyebrow>
      <h2 id="library-title" className="font-serif text-4xl leading-tight sm:text-6xl">
        {works.heading}
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-mute">{works.intro}</p>

      <ul className="mt-16 grid gap-10 sm:grid-cols-3">
        {works.kinds.map((k) => (
          <li key={k.title} className="border-t border-gold pt-6">
            <h3 className="font-serif text-2xl">{k.title}</h3>
            <p className="mt-3 text-mute">{k.text}</p>
          </li>
        ))}
      </ul>

      {/* PLACEHOLDER: replace this block with a podcast embed (iframe) or a list of books. */}
      <div className="mt-20 flex min-h-56 flex-col items-center justify-center border border-dashed border-edge p-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{works.placeholder.label}</p>
        <p className="mt-4 max-w-md text-mute">{works.placeholder.text}</p>
      </div>
    </Section>
  );
}
