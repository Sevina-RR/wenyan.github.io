import Link from "next/link";

const navItems = [
  ["About", "/"],
  ["Publications", "/publications"],
  ["Projects", "/projects"],
  ["Photography", "/photography"],
  ["CV", "/cv"]
];

export function Header({ active }: { active: string }) {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/">
          Your Name
        </Link>
        <div className="nav-links">
          {navItems.map(([label, href]) => (
            <Link key={href} className={active === label ? "active" : ""} href={href}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
