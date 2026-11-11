import Image from "next/image";
import { site } from "@/lib/content";

const links = [
  { label: "Mission", href: "#mission" },
  { label: "Beliefs", href: "#beliefs" },
  { label: "Work", href: "#projects" },
  { label: "Library", href: "#library" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 px-6 py-8">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-serif text-xl tracking-wide">
          <Image src="/logo.png" alt="" width={204} height={443} className="h-9 w-auto" />
          {site.name}
        </a>
        <ul className="hidden gap-8 text-sm text-mute sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-paper">{l.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
