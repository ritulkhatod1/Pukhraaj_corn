import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SectionTitle, Timeline, WhyCards } from "@/components/ui";

export const metadata = { title: "About Us" };

export default function About() {
  return <><Header /><main className="pt-[76px]">
    <section className="relative isolate overflow-hidden py-24 text-center text-white sm:py-28">
      <Image src="/images/corn-processing-hero.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-[#102d24]/82" />
      <div className="shell mx-auto max-w-4xl">
        <p className="eyebrow">ABOUT PUKHRAAJ</p>
        <h1 className="display mt-4 text-5xl leading-[.95] sm:text-7xl">Built on Experience.<br /><i className="text-[#edc74d]">Moving Forward with Innovation.</i></h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#e0e8dd]">Pukhraaj Corn Products is built on a business legacy that began in 1980. Across three generations, the business has evolved through cotton trading, processing, grain trading, advanced grading, and modern corn-product manufacturing.</p>
      </div>
    </section>

    <section className="shell grid gap-12 py-22 lg:grid-cols-2">
      <SectionTitle eyebrow="OUR STORY" title="A Journey of Continuous Growth" />
      <div className="text-sm leading-7 text-stone-600">
        <p>The journey began in 1980 with cotton trading under the leadership of Rameshchandra Khatod. Over the following decades, the business expanded into processing operations, increased production capabilities, modernized equipment, and diversified into grain trading.</p>
        <p className="mt-5">In 2023, the business added advanced chickpea grading capabilities. In 2025, this experience led to the launch of Pukhraaj Corn Products and an FSSAI-certified corn grit manufacturing facility.</p>
        <p className="mt-5">The result is a business combining agricultural experience, processing knowledge, modern technology, and long-term relationships.</p>
      </div>
    </section>

    <section className="bg-[#f4efdf] py-22"><div className="shell">
      <SectionTitle eyebrow="WHAT GUIDES US" title="Legacy, Innovation, Quality" copy="The same values that shaped the business through agricultural trading and processing continue to guide Pukhraaj Corn Products today." />
      <WhyCards />
    </div></section>

    <section className="shell py-22">
      <SectionTitle eyebrow="OUR JOURNEY" title="GROWTH THROUGH THE DECADES" copy="From agricultural trading in 1980 to modern corn-product manufacturing, our journey reflects three generations of growth, experience, and innovation." />
      <Timeline />
    </section>

    <section className="bg-[#f4efdf] py-22"><div className="shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
      <SectionTitle eyebrow="OUR EVOLUTION" title="From Agricultural Trading to Corn Products" />
      <div className="border-l-4 border-[#d5a51d] bg-white p-8 text-sm leading-7 text-stone-600">
        <p>Each stage of the journey added practical experience: farmer relationships, processing discipline, grain trading knowledge, grading technology, and modern manufacturing capabilities.</p>
        <p className="mt-5">Pukhraaj Corn Products by SCP carries that experience into a focused product range for businesses across India.</p>
      </div>
    </div></section>

    <section className="bg-[#18382b] py-22 text-white"><div className="shell flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <div><p className="eyebrow">START A CONVERSATION</p><h2 className="display mt-3 max-w-xl text-5xl leading-none">Talk to Us About Your Requirement</h2><p className="mt-5 max-w-xl text-sm leading-7 text-[#d2ded0]">Share your product and packaging needs with our team.</p></div>
      <Link href="/contact#quote" className="button button-primary">Discuss Your Requirement <ArrowRight size={15} /></Link>
    </div></section>
  </main><Footer /></>;
}
