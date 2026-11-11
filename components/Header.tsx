import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

const links = [
  { label: "Mission", href: "/mission/" },
  { label: "Beliefs", href: "/beliefs/" },
  { label: "Organizations", href: "/#organizations" },
  { label: "Library", href: "/library/" },
];

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 px-6 py-6 sm:py-8">
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl flex-col items-center gap-5 sm:flex-row sm:justify-between">
        <Link href="/" className="flex items-center gap-3 font-serif text-xl tracking-wide">
          <Image src="/logo.png" alt="" width={204} height={443} className="h-9 w-auto" />
          {site.name}
        </Link>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-mute sm:gap-x-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-paper">{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
