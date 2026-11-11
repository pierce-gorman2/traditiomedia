import { mission } from "@/lib/content";
import { Eyebrow, Section } from "./Section";

export default function Mission() {
  return (
    <Section id="mission" labelledBy="mission-title" className="border-t border-edge bg-coal">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <Eyebrow>{mission.eyebrow}</Eyebrow>
          <h2 id="mission-title" className="font-serif text-4xl leading-tight sm:text-6xl">
            {mission.heading}
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-mute">
          {mission.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <ul className="mt-24 grid gap-px bg-edge sm:grid-cols-3">
        {mission.pillars.map((p) => (
          <li key={p.title} className="bg-coal p-8 sm:p-10">
            <h3 className="font-serif text-2xl text-gold">{p.title}</h3>
            <p className="mt-3 text-mute">{p.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
