"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Factory, Handshake, Mail, MapPin, MessageCircle, Package, Phone, Settings, ShieldCheck, Sparkles, Sprout, Truck, Utensils } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { business, milestones, products } from "./site-data";

export function Marquee() {
  const items = ["EXCELLENCE IN EVERY KERNEL", "WHOLE MAIZE", "BROKEN MAIZE", "CORN GRIT", "CORN FLOUR", "CATTLE FEED", "SERVING BUSINESSES ACROSS INDIA", "SINCE 1980"];
  const set = <span className="marquee-set">{items.map((item, i) => <span className="marquee-item" key={item}>{item}{i < items.length - 1 && <b>•</b>}</span>)}</span>;
  return <div className="marquee-shell"><div className="marquee-track">{set}{set}{set}{set}</div></div>;
}

export function SectionTitle({ eyebrow, title, copy, inverse = false }: { eyebrow: string; title: string; copy?: string; inverse?: boolean }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className={`display mt-3 text-4xl leading-[.98] sm:text-5xl ${inverse ? "text-white" : "text-[#18382b]"}`}>{title}</h2>{copy && <p className={`mt-5 text-sm leading-7 sm:text-base ${inverse ? "text-[#d3dfd0]" : "text-stone-600"}`}>{copy}</p>}</div>;
}

export function ProductCards({ limit, exclude }: { limit?: number; exclude?: string }) {
  const shown = products.filter((p) => p.slug !== exclude).slice(0, limit);
  return <div className="product-grid grid gap-5 sm:grid-cols-2 lg:grid-cols-6">{shown.map((p) => {
    const number = products.findIndex((item) => item.slug === p.slug) + 1;
    return <Link href={`/products/${p.slug}`} key={p.slug} className="product-card group lg:col-span-2">
      <div className="image-overlay relative h-56 overflow-hidden">
        <Image src={p.image} alt={`${p.name} product imagery`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-[360ms] ease-out group-hover:scale-[1.03]" />
        <span className="absolute left-4 top-4 z-10 text-xs font-extrabold tracking-widest text-[#f4d36e]">{String(number).padStart(2, "0")}</span>
      </div>
      <div className="p-5"><h3 className="text-[#18382b]">{p.name}</h3><p className="mt-3 text-sm leading-6 text-stone-600 sm:min-h-24">{p.short}</p><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#18382b] transition group-hover:text-[#b1830d]">{p.cta} <ArrowRight size={16} className="transition duration-300 group-hover:translate-x-1.5" /></span></div>
    </Link>;
  })}</div>;
}

export function Process({ inverse = false }: { inverse?: boolean }) {
  const steps = [["01", "Sourcing", "We source directly from farmers, building transparent relationships from the start. No middlemen, no extra cost, and a clearer path from Farmer to Fork.", Sprout], ["02", "Processing", "Directly sourced maize is carefully processed and graded into consistent products, keeping the Farmer to Fork journey efficient and dependable.", Factory], ["03", "Packaging", "Finished products are packed appropriately to help maintain product quality during storage, handling, and transportation.", Package], ["04", "Delivery", "Orders are prepared and dispatched to customers with a focus on dependable supply across India.", Truck]] as const;
  return <div className="mt-10 grid gap-0 md:grid-cols-4">{steps.map(([n, t, c, Icon]) => <div className="process-step group relative border-l border-[#d5a51d]/40 px-5 pb-7 md:border-l-0 md:border-t md:px-5 md:pt-7" key={n}><span className="absolute -left-[6px] top-0 h-3 w-3 rounded-full bg-[#d5a51d] transition group-hover:scale-125 md:-top-[6px] md:left-5" /><div className={`icon-box ${inverse ? "bg-[#f4efdf] text-[#18382b]" : "bg-[#18382b] text-[#f2cb53]"}`}><Icon size={21} /></div><p className="mt-5 text-xs font-bold tracking-widest text-[#d5a51d]">{n}</p><h3 className={`mt-2 text-lg font-bold transition group-hover:text-[#d5a51d] ${inverse ? "text-white" : "text-[#18382b]"}`}>{t}</h3><p className={`mt-2 text-sm leading-6 ${inverse ? "text-[#d3dfd0]" : "text-stone-600"}`}>{c}</p></div>)}</div>;
}

export function Timeline() {
  const [active, setActive] = useState(0);
  const [hasHoveredYear, setHasHoveredYear] = useState(false);
  const m = milestones[active];
  function selectMilestone(index: number) {
    setActive(index);
    setHasHoveredYear(true);
  }
  return <div className="mt-10">
    <div className="hidden md:block"><div className="relative grid grid-cols-7 gap-0"><span className="absolute left-0 right-0 top-[31px] h-px bg-[#d5a51d]/35" /><span className="absolute left-0 top-[31px] h-px bg-[#d5a51d] transition-all duration-500" style={{ width: `${(active / (milestones.length - 1)) * 100}%` }} />{milestones.map((item, i) => <button type="button" aria-pressed={i === active} key={item.year} onMouseEnter={() => selectMilestone(i)} onFocus={() => selectMilestone(i)} onClick={() => selectMilestone(i)} className={`timeline-dot relative z-10 text-left ${i === active ? "is-active" : ""}`}><span>{item.year}</span><i /></button>)}</div></div>
    <div className="grid gap-3 md:hidden">{milestones.map((item, i) => <button type="button" aria-pressed={i === active} key={item.year} onClick={() => selectMilestone(i)} className={`timeline-mobile ${i === active ? "is-active" : ""}`}><span>{item.year}</span><strong>{item.title}</strong></button>)}</div>
    <article aria-live="polite" className={`timeline-detail mt-8 max-w-3xl bg-white p-7 shadow-sm transition duration-500 sm:p-9 md:mt-10 ${hasHoveredYear ? "is-revealed" : ""}`}><p className="text-sm font-extrabold tracking-[.18em] text-[#b1830d]">{m.year}</p><h3 className="display mt-3 text-4xl text-[#18382b]">{m.title}</h3><div className="timeline-detail-copy"><p className="mt-4 text-sm leading-7 text-stone-600">{m.copy}</p><div className="mt-7 inline-flex whitespace-pre-line border-l-4 border-[#d5a51d] bg-[#f4efdf] px-5 py-4 text-sm font-extrabold tracking-wider text-[#18382b]">{m.stat}</div></div><p className="timeline-hover-hint mt-5 text-xs font-bold uppercase tracking-widest text-[#b1830d]">Hover over a year to view details</p></article>
  </div>;
}

export function InfoList({ title, items, type }: { title: string; items: string[]; type: "applications" | "specifications" | "packaging" }) {
  const Icon = type === "applications" ? Utensils : type === "specifications" ? Settings : Package;
  return <article className="info-card group"><div className="icon-box bg-[#f4efdf] text-[#b1830d]"><Icon size={20} /></div><h2 className="mt-5 text-lg font-bold uppercase tracking-wide text-[#18382b]">{title}</h2><ul className="mt-4 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-stone-600"><CheckCircle2 size={16} className="mt-1 shrink-0 text-[#d5a51d]" />{item}</li>)}</ul></article>;
}

export function WhyCards() {
  const cards = [[Handshake, "Legacy & Trust", "Three Generations of Expertise", "Building strong relationships with local farmers and business partners since 1980."], [Sparkles, "Innovation", "Constantly Moving Forward", "From manual processing equipment to modern automatic grading and processing lines, our journey reflects continuous evolution."], [ShieldCheck, "Quality Assurance", "Quality at Every Stage", "Our FSSAI-certified corn grit manufacturing facility forms the latest chapter of our journey."]] as const;
  return <div className="mt-10 grid gap-5 md:grid-cols-3">{cards.map(([Icon, label, title, copy], i) => <article className="group border border-[#ded7c5] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#d5a51d] hover:shadow-lg" key={label}><div className="icon-box bg-[#18382b] text-[#f2cb53]"><Icon size={22} /></div><p className="mt-8 text-xs font-bold text-[#d5a51d]">{String(i + 1).padStart(2, "0")}</p><p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#b1830d]">{label}</p><h3 className="mt-3 text-xl font-bold text-[#18382b]">{title}</h3><p className="mt-3 text-sm leading-6 text-stone-600">{copy}</p></article>)}</div>;
}

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("product");
    const product = products.find((item) => item.slug === slug);
    if (product) setSelectedProduct(product.name);
  }, []);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Pukhraaj Corn Products enquiry",
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Product: ${data.get("product")}`,
      `Quantity: ${data.get("quantity")}`,
      `Delivery location: ${data.get("location")}`,
      `Message: ${data.get("message") || "Details available on enquiry"}`,
    ].join("\n");
    window.open(`${business.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }
  const fields = [["Full Name", "name", "text"], ["Company Name", "company", "text"], ["Phone Number", "phone", "tel"], ["Email", "email", "email"], ["Required Quantity", "quantity", "text"], ["Delivery Location", "location", "text"]] as const;
  return <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
    {fields.map(([label, name, type]) => <label key={name} className="text-xs font-bold uppercase tracking-wider text-[#435348]">{label}<input required name={name} autoComplete={name === "phone" ? "tel" : name} type={type} maxLength={name === "phone" ? 20 : 120} className="mt-2 w-full border border-[#d9d1be] bg-[#fffdf8] px-3 py-3 text-sm font-normal outline-none focus:border-[#d5a51d]" /></label>)}
    <label className="text-xs font-bold uppercase tracking-wider text-[#435348]">Product Required<select required name="product" value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)} className="mt-2 w-full border border-[#d9d1be] bg-[#fffdf8] px-3 py-3 text-sm font-normal outline-none focus:border-[#d5a51d]"><option value="">Select a product</option>{products.map((p) => <option key={p.slug}>{p.name}</option>)}<option>Other</option></select></label>
    <label className="text-xs font-bold uppercase tracking-wider text-[#435348] sm:col-span-2">Message<textarea name="message" maxLength={1000} className="mt-2 min-h-28 w-full border border-[#d9d1be] bg-[#fffdf8] px-3 py-3 text-sm font-normal outline-none focus:border-[#d5a51d]" /></label>
    <button className="button button-primary w-fit sm:col-span-2" type="submit">Send via WhatsApp <MessageCircle size={16} /></button>
    {sent && <p role="status" className="rounded-lg bg-[#e9f0e5] p-4 text-sm text-[#18382b] sm:col-span-2">Your enquiry has opened in WhatsApp. Review the message there and tap send.</p>}
  </form>;
}

export function ContactDetails() {
  return <div className="space-y-5">
    <div className="contact-item group flex gap-3"><div className="icon-box bg-[#f4efdf] text-[#b1830d]"><MapPin size={18} /></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#a1760d]">Factory Address</p><p className="mt-1 whitespace-pre-line text-sm leading-6 text-stone-600">{business.address}</p></div></div>
    <div className="contact-item group flex gap-3"><div className="icon-box bg-[#f4efdf] text-[#b1830d]"><Phone size={18} /></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#a1760d]">Phone</p><a className="mt-1 flex min-h-9 items-center text-sm text-stone-600 hover:text-[#b1830d]" href={`tel:${business.phone}`}>{business.phoneDisplay}</a><a className="flex min-h-9 items-center text-sm text-stone-600 hover:text-[#b1830d]" href={`tel:${business.altPhoneLink}`}>{business.altPhone}</a></div></div>
    <div className="contact-item group flex gap-3"><div className="icon-box bg-[#f4efdf] text-[#b1830d]"><Mail size={18} /></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#a1760d]">Email</p><a className="mt-1 flex min-h-9 items-center break-all text-sm text-stone-600 hover:text-[#b1830d]" href={`mailto:${business.email}`}>{business.email}</a></div></div>
    <div className="contact-item group flex gap-3"><div className="icon-box bg-[#f4efdf] text-[#b1830d]"><Phone size={18} /></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#a1760d]">Direct Contact</p><a className="mt-1 flex min-h-9 items-center text-sm text-stone-600 hover:text-[#b1830d]" href={`tel:${business.contactPersonPhone}`}>{business.contactPersonPhoneDisplay}</a></div></div>
    <div className="contact-item group flex gap-3"><div className="icon-box bg-[#f4efdf] text-[#b1830d]"><Clock size={18} /></div><div><p className="text-xs font-bold uppercase tracking-wider text-[#a1760d]">Business Hours</p><p className="mt-1 whitespace-pre-line text-sm leading-6 text-stone-600">{business.hours}</p></div></div>
  </div>;
}
