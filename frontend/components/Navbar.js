import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 glass">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <div className="hidden md:flex items-center gap-6 text-sm">
          {['About', 'Services', 'Tech', 'Projects', 'Pricing', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
