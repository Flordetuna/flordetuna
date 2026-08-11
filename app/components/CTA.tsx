"use client";

import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

import Button from "./Button";
import Container from "./Container";

export default function CTA() {
  return (
    <section
      id="contato"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#043D0C]"
    >
      <Image
        src="/images/flor-de-tuna/cta/cta.jpg"
        alt="Peça artesanal em madeira da Flor de Tuna"
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#021F07]/75" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(201,165,106,0.18),transparent_36%)]" />

      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C9A56A]"
          >
            Sua ideia, nossa criação
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-[#F6F2EB] md:text-6xl lg:text-7xl"
          >
            Sua próxima peça começa com uma conversa.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-8 text-[#F6F2EB]/80 md:text-lg"
          >
            Desenvolvemos peças exclusivas em madeira maciça e resina para quem
            busca autenticidade, qualidade e design artesanal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button
  href="https://wa.me/5554996223146"
  variant="gold"
  className="min-w-[320px] justify-center"
>
  Solicitar orçamento
</Button>

            <a
  href="https://wa.me/5554996223146"
  target="_blank"
  rel="noreferrer"
  className="group inline-flex min-h-14 items-center justify-center gap-3 border border-[#F6F2EB]/40 px-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#F6F2EB] transition-all duration-300 hover:border-[#F6F2EB] hover:bg-[#F6F2EB] hover:!text-[#043D0C]"
>
  <MessageCircle
    size={17}
    className="text-[#F6F2EB] transition-colors duration-300 group-hover:text-[#043D0C]"
  />

  <span className="text-[#F6F2EB] transition-colors duration-300 group-hover:text-[#043D0C]">
    Falar pelo WhatsApp
  </span>
</a>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 h-px w-full bg-[#C9A56A]/25" />
    </section>
  );
}