"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "./Container";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    number: "01",
    title: "Matéria-prima",
    description:
      "Madeiras selecionadas por sua resistência, beleza e personalidade.",
  },
  {
    number: "02",
    title: "Produção artesanal",
    description:
      "Cada peça é desenvolvida manualmente, respeitando as formas naturais da madeira.",
  },
  {
    number: "03",
    title: "Exclusividade",
    description:
      "Nenhuma criação é igual à outra. Cada veio e detalhe torna a peça verdadeiramente única.",
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[#F6F2EB] py-24 md:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#C9A56A]/10 blur-3xl" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#DDD5C8]">
              <Image
                src="/images/flor-de-tuna/about/about-main.jpg"
                alt="Processo artesanal de criação de uma peça Flor de Tuna"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#043D0C]/25 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-4 hidden w-[48%] border-8 border-[#F6F2EB] bg-[#043D0C] p-6 text-[#F6F2EB] md:block lg:-right-10">
              <span className="block font-display text-4xl text-[#C9A56A]">
                Única
              </span>

              <p className="mt-2 text-sm leading-6 text-[#F6F2EB]/80">
                Assim como a natureza que inspira cada criação.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <SectionTitle
              eyebrow="A Flor de Tuna"
              title="Entre a natureza e o design, nasce uma peça para toda a vida."
              description="Criamos peças artesanais em madeira que preservam as formas, marcas e histórias da matéria-prima."
            />

            <div className="mt-8 space-y-6 text-base leading-8 text-[#4E4A43] md:text-lg">
              <p>
                A Flor de Tuna nasceu do encontro entre a sensibilidade
                artística, o trabalho manual e o respeito pela natureza.
              </p>

              <p>
                Cada criação começa com a escolha da madeira e evolui por meio
                de um processo cuidadoso, no qual formas orgânicas, resina e
                acabamento se encontram para criar peças funcionais e
                escultóricas.
              </p>
            </div>

            <div className="mt-12 border-t border-[#043D0C]/15">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-4 border-b border-[#043D0C]/15 py-7 sm:grid-cols-[56px_160px_1fr] sm:items-start"
                >
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A56A]">
                    {item.number}
                  </span>

                  <h3 className="font-display text-xl text-[#043D0C]">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-[#5E5A53]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}