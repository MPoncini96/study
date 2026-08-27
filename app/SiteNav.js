import Link from "next/link";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Carlo Acutis", href: "/saint" },
  { label: "The Measure", href: "/#wellbeing" },
  { label: "Financials", href: "/#financials" },
  { label: "Staff Directory", href: "/#staff-directory" },
  { label: "Curriculum", href: "/#curriculum" },
  { label: "Athletics", href: "/#athletics" },
  { label: "Cafeteria", href: "/#cafeteria" },
  { label: "Physical Education", href: "/#physical-education" },
  { label: "Community Service", href: "/#community-service" },
  { label: "Graduate Profile", href: "/#graduate-profile" }
];

export default function SiteNav() {
  return (
    <header className="site-nav">
      <div className="nav-shell">
        <Link className="brand" href="/#home">Saint Carlo Acutis High School</Link>
        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
