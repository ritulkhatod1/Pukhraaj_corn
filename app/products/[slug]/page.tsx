import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { InfoList, ProductCards } from "@/components/ui";
import { products } from "@/components/site-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return { title: product.seoTitle, description: product.seoDescription };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "whole-corn") redirect("/products/whole-maize");
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const enquiryHref = `/contact?product=${product.slug}#quote`;

  return <><Header /><main className="pt-[76px]">
    <nav aria-label="Breadcrumb" className="shell flex min-h-12 items-center gap-2 py-4 text-xs text-stone-500">
      <Link className="inline-flex min-h-10 items-center hover:text-[#18382b]" href="/">Home</Link>
      <span aria-hidden="true">/</span>
      <Link className="inline-flex min-h-10 items-center hover:text-[#18382b]" href="/products">Products</Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{product.name}</span>
    </nav>

    <section className="shell grid gap-10 pb-20 lg:grid-cols-2 lg:items-center">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#e6ddc6]"><Image src={product.image} alt={`${product.name} product imagery`} fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover" priority /></div>
      <div><p className="eyebrow">PUKHRAAJ CORN PRODUCTS</p><h1 className="display mt-4 text-5xl text-[#18382b] sm:text-6xl">{product.name}</h1><p className="mt-6 text-base leading-7 text-stone-600">{product.short}</p><Link className="button button-dark mt-8" href={enquiryHref}>{product.cta} <ArrowRight size={15} /></Link></div>
    </section>

    <section className="bg-[#f4efdf] py-18"><div className="shell grid gap-7 md:grid-cols-3">
      <InfoList title="Applications" type="applications" items={product.applications} />
      <InfoList title="Specifications" type="specifications" items={product.specifications} />
      <InfoList title="Packaging" type="packaging" items={product.packaging} />
    </div></section>

    <section className="shell py-20">
      <div className="flex flex-wrap items-end justify-between gap-6"><h2 className="display text-4xl text-[#18382b]">Related Products</h2><Link className="inline-flex min-h-11 items-center text-xs font-bold uppercase tracking-widest text-[#18382b] hover:text-[#b1830d]" href="/products">All Products</Link></div>
      <div className="mt-8"><ProductCards limit={3} exclude={product.slug} /></div>
    </section>

    <section className="bg-[#18382b] py-18 text-white"><div className="shell flex flex-col justify-between gap-6 md:flex-row md:items-center">
      <div><p className="eyebrow">BUSINESS ENQUIRY</p><h2 className="display mt-3 text-4xl">Need {product.name}?</h2></div>
      <Link className="button button-primary" href={enquiryHref}>{product.cta} <ArrowRight size={15} /></Link>
    </div></section>
  </main><Footer /></>;
}
