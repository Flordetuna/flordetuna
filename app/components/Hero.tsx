"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden bg-forest"
    >
      <Image
        src="/images/flor-de-tuna/hero/hero.jpg"
        alt="Peça artesanal em madeira criada pela Flor de Tuna"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="image-overlay" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(201,165,106,0.12),transparent_35%)]" />

      <Container className="relative z-10 flex min-h-screen items-end pb-16 pt-36 md:pb-20 lg:pb-24">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="eyebrow text-[#C9A56A]"
            >
              Madeira, natureza e design
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="display-title mt-7 max-w-5xl text-[#F6F2EB]"
            >
              A natureza desenha.
              <span className="block text-[#C9A56A]">
                Nós eternizamos.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.48 }}
              className="mt-8 max-w-2xl text-base leading-8 text-[#F6F2EB] md:text-lg"
            >
              Peças exclusivas em madeira maciça e resina, criadas
              artesanalmente para transformar ambientes e carregar histórias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.62 }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
            >
              <Button href="#contato" variant="light">
                Solicitar orçamento
              </Button>

              <a
  href="#produtos"
  style={{ color: "#F6F2EB" }}
  className="group inline-flex min-h-14 items-center gap-3 px-2 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 hover:opacity-80"
>
  Conhecer as peças

  <span
    style={{ backgroundColor: "#C9A56A" }}
    className="h-px w-12 transition-all duration-300 group-hover:w-20"
  />
</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hidden justify-self-end lg:block"
          >
            <p className="max-w-[220px] text-sm leading-7 text-[#F6F2EB]">
              Cada veio, marca e imperfeição torna a peça verdadeiramente única.
            </p>
          </motion.div>
        </div>
      </Container>

      <motion.a
  href="#sobre"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1.1 }}
  aria-label="Ir para a próxima seção"
  style={{ color: "#F6F2EB" }}
  className="absolute bottom-6 right-6 z-10 hidden items-center gap-3 md:flex lg:right-10"
>
  <span className="text-[10px] font-semibold uppercase tracking-[0.24em]">
    Descubra
  </span>

  <span
    style={{ borderColor: "rgba(246, 242, 235, 0.45)" }}
    className="flex h-11 w-11 items-center justify-center rounded-full border"
  >
    <ArrowDown
      size={16}
      className="animate-float"
      style={{ color: "#F6F2EB" }}
    />
  </span>
</motion.a>
    </section>
  );
}