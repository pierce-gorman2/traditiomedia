import { footer, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-edge px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-serif text-xl">{site.name}</p>
          <p className="mt-2 text-sm italic text-mute">{footer.note}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-8 text-sm text-mute">
            {footer.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-mute sm:text-left">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
