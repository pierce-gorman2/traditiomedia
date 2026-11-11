import { beliefs } from "@/lib/content";
import { Eyebrow, Section } from "./Section";

export default function Beliefs() {
  return (
    <Section id="beliefs" labelledBy="beliefs-title">
      <Eyebrow>{beliefs.eyebrow}</Eyebrow>
      <h2 id="beliefs-title" className="max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">
        {beliefs.heading}
      </h2>
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-mute">{beliefs.intro}</p>

      <ul className="mt-16 grid gap-px bg-edge sm:grid-cols-2 lg:grid-cols-5">
        {beliefs.solas.map((s) => (
          <li key={s.latin} className="bg-ink p-8">
            <h3 className="font-serif text-2xl italic text-gold">{s.latin}</h3>
            <p className="mt-2 text-sm text-mute">{s.english}</p>
          </li>
        ))}
      </ul>

      <p className="mt-16 max-w-3xl border-l-2 border-gold pl-6 font-serif text-2xl leading-snug sm:text-3xl">
        {beliefs.postmillennial}
      </p>
    </Section>
  );
}
