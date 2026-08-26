"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [["Home", "/"], ["About", "/about"], ["Products", "/products"], ["Contact Us", "/contact"]];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(scrollY > 22);
    update();
    addEventListener("scroll", update);
    return () => removeEventListener("scroll", update);
  }, []);

  return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-stone-200 bg-[#fdfbf5]/95 shadow-sm backdrop-blur" : "bg-[#fdfbf5]/95 backdrop-blur-sm"}`}>
    <div className={`shell flex items-center justify-between transition-all ${scrolled ? "h-[64px]" : "h-[76px]"}`}>
      <Link href="/" className="relative block h-14 w-44 shrink-0 sm:w-52" aria-label="Pukhraaj Corn Products home">
        <Image src="/logo/brand-mark-logo-cropped.png" alt="Pukhraaj Corn Products" fill sizes="(max-width: 640px) 176px, 208px" priority className="object-contain object-left" />
      </Link>
      <nav className="hidden items-center gap-7 lg:flex">
        {links.map(([name, href]) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return <Link aria-current={active ? "page" : undefined} key={href} className={`nav-link text-xs font-bold tracking-wide ${active ? "text-[#b28412]" : "text-[#31473a] hover:text-[#b28412]"}`} href={href}>{name}</Link>;
        })}
        <Link className="button button-primary" href="/contact#quote">Get a Quote <ArrowUpRight size={15} /></Link>
      </nav>
      <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center text-[#18382b] lg:hidden" aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="border-t border-stone-200 bg-[#fdfbf5] px-5 py-5 shadow-lg lg:hidden">
      {links.map(([name, href]) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return <Link aria-current={active ? "page" : undefined} onClick={() => setOpen(false)} key={href} href={href} className={`block border-b border-stone-200 py-4 text-sm font-bold ${active ? "text-[#b28412]" : "text-[#18382b]"}`}>{name}</Link>;
      })}
      <Link onClick={() => setOpen(false)} className="button button-primary mt-5" href="/contact#quote">Get a Quote <ArrowUpRight size={15} /></Link>
    </nav>}
  </header>;
}
