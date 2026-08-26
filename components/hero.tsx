"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const up = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  return <section className="relative min-h-[680px] overflow-hidden bg-[#18382b] text-white">
    <motion.div initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: .82, scale: 1 }} transition={{ duration: .75 }} className="absolute inset-0">
      <Image priority src="/images/corn-processing-hero.png" alt="Corn kernels near grain-processing equipment" fill className="object-cover" sizes="100vw" />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-r from-[#122b20]/95 via-[#18382b]/60 to-transparent" />
    <div className="shell relative flex min-h-[604px] items-center py-18">
      <motion.div initial="hidden" animate="show" transition={{ staggerChildren: .065, delayChildren: .04 }} className="max-w-4xl">
        <motion.p variants={up} className="eyebrow">PUKHRAAJ CORN PRODUCTS BY SCP</motion.p>
        <motion.h1 variants={up} className="display mt-5 max-w-4xl text-6xl leading-[.92] sm:text-7xl">Excellence in Every<br className="hidden lg:block" /> Kernel</motion.h1>
        <motion.p variants={up} className="mt-7 max-w-xl text-xl font-medium leading-8 text-[#f4f1e7]">Quality Corn Products. Built on Generations of Trust.</motion.p>
        <motion.p variants={up} className="mt-4 max-w-2xl text-sm leading-7 text-[#d4dfd0]">From agricultural trading to modern processing, our journey has been built on experience, relationships, continuous evolution and a commitment to quality. Today, we supply businesses across India.</motion.p>
        <motion.div variants={up} className="mt-8 flex flex-wrap gap-3">
          <Link className="button button-primary" href="/products">Explore Our Products <ArrowRight size={16} /></Link>
          <Link className="button button-light" href="/contact#quote">Get a Quote <ArrowUpRight size={15} /></Link>
        </motion.div>
      </motion.div>
    </div>
    <div className="absolute bottom-7 right-[max(1.25rem,calc((100vw-1180px)/2))] hidden items-center gap-2 text-xs text-[#e5e5d9] md:flex"><span className="h-px w-12 bg-[#d5a51d]" /> Since 1980</div>
  </section>;
}
