import Header from "@/components/header";
import Footer from "@/components/footer";
import { ContactDetails, QuoteForm } from "@/components/ui";
import { business } from "@/components/site-data";

export const metadata = { title: "Contact Us" };

export default function Contact() {
  return <><Header /><main className="pt-[76px]">
    <section className="bg-[#18382b] py-20 text-white"><div className="shell">
      <p className="eyebrow">CONTACT US</p>
      <h1 className="display mt-4 text-5xl leading-[.95] sm:text-7xl">Let&apos;s Talk About<br /><i className="text-[#edc74d]">Your Requirements.</i></h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-[#d3dfd0]">Looking for corn products for your business? Contact Pukhraaj Corn Products for product information and business enquiries.</p>
    </div></section>

    <section className="shell grid gap-12 py-20 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <p className="eyebrow">CONNECT WITH US</p>
        <h2 className="display mt-3 text-4xl text-[#18382b]">We&apos;re here to help.</h2>
        <div className="mt-8"><ContactDetails /></div>
      </div>
      <div id="quote" className="border border-[#ded7c5] bg-[#f4efdf] p-6 sm:p-9">
        <p className="eyebrow">REQUEST A QUOTE</p>
        <h2 className="display mt-3 text-4xl text-[#18382b]">Tell us what you need.</h2>
        <p className="mt-3 text-sm leading-6 text-stone-600">Share your requirements, then review and send the prepared message in WhatsApp.</p>
        <div className="mt-7"><QuoteForm /></div>
      </div>
    </section>

    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-[#d5a51d]/40 bg-[#fdfbf5]/96 text-center text-xs font-extrabold uppercase tracking-wide text-[#18382b] shadow-[0_-8px_20px_rgba(24,56,43,.08)] backdrop-blur md:hidden">
      <a className="flex min-h-12 items-center justify-center" href={`tel:${business.phone}`}>Call</a>
      <a className="flex min-h-12 items-center justify-center border-x border-[#ded7c5]" href={business.whatsapp}>WhatsApp</a>
      <a className="flex min-h-12 items-center justify-center" href="#quote">Get Quote</a>
    </div>
  </main><Footer /></>;
}
