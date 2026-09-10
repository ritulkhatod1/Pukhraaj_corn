import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { business, products } from "./site-data";

export default function Footer() {
  const quickLinks = [["Home", "/"], ["About", "/about"], ["Products", "/products"], ["Contact Us", "/contact"]];
  return <footer className="bg-[#18382b] pt-16 text-[#f6f0df]">
    <div className="shell grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.35fr]">
      <div>
        <Image src="/logo/brand-mark-logo-cropped.png" alt="Pukhraaj Corn Products" width={300} height={94} className="h-auto w-60 object-contain object-left" />
        <p className="mt-5 text-xs font-extrabold uppercase tracking-[.16em] text-[#d5a51d]">PUKHRAAJ CORN PRODUCTS BY SCP</p>
        <p className="mt-2 text-xs font-bold uppercase tracking-[.18em] text-[#f6f0df]">EXCELLENCE IN EVERY KERNEL</p>
        <p className="mt-5 max-w-xs text-sm leading-6 text-[#cfdbc8]">Quality corn products backed by generations of agricultural, processing, and manufacturing experience.</p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-[12px] border border-[#d5a51d]/60 bg-[#214535] px-3 py-2 text-xs font-extrabold tracking-widest text-[#f4d36e]"><ShieldCheck size={16} />FSSAI CERTIFIED</div>
      </div>
      <div>
        <p className="mb-4 text-xs font-bold tracking-widest text-[#d5a51d]">QUICK LINKS</p>
        {quickLinks.map(([name, href]) => <Link className="mb-2 block text-sm text-[#dfe8da] hover:text-[#d5a51d]" key={href} href={href}>{name}</Link>)}
      </div>
      <div>
        <p className="mb-4 text-xs font-bold tracking-widest text-[#d5a51d]">PRODUCTS</p>
        {products.map((product) => <Link className="mb-2 block text-sm text-[#dfe8da] hover:text-[#d5a51d]" key={product.slug} href={`/products/${product.slug}`}>{product.name}</Link>)}
      </div>
      <div>
        <p className="mb-4 text-xs font-bold tracking-widest text-[#d5a51d]">CONTACT</p>
        <p className="mb-3 flex gap-2 whitespace-pre-line text-sm leading-5 text-[#dfe8da]"><MapPin size={15} className="mt-1 shrink-0 text-[#d5a51d]" />{business.address}</p>
        <a href={`tel:${business.phone}`} className="mb-2 flex gap-2 text-sm hover:text-[#d5a51d]"><Phone size={15} />{business.phoneDisplay}</a>
        <a href={`tel:${business.altPhoneLink}`} className="mb-2 flex gap-2 text-sm hover:text-[#d5a51d]"><Phone size={15} />{business.altPhone}</a>
        <a href={`tel:${business.contactPersonPhone}`} className="mb-2 flex gap-2 text-sm hover:text-[#d5a51d]"><Phone size={15} />{business.contactPersonPhoneDisplay}</a>
        <a href={`mailto:${business.email}`} className="mb-3 flex gap-2 text-sm hover:text-[#d5a51d]"><Mail size={15} />{business.email}</a>
        <p className="flex gap-2 whitespace-pre-line text-sm leading-5 text-[#dfe8da]"><Clock size={15} className="mt-1 shrink-0 text-[#d5a51d]" />{business.hours}</p>
      </div>
    </div>
    <div className="border-t border-white/15">
      <div className="shell flex flex-col gap-2 py-5 text-xs text-[#b9c9b3] sm:flex-row sm:justify-between"><span>© 2026 Pukhraaj Corn Products by SCP. All rights reserved.</span><span>FSSAI CERTIFIED</span></div>
    </div>
  </footer>;
}
