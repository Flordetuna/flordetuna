"use client";

import { motion } from "framer-motion";
import { Trees, Hammer, Sparkles, PackageCheck } from "lucide-react";

import Container from "./Container";
import SectionTitle from "./SectionTitle";

const steps = [
  {
    icon: Trees,
    number: "01",
    title: "Seleção da Madeira",
    description:
      "Cada projeto começa com a escolha cuidadosa da madeira, respeitando sua origem, textura, desenho natural e características únicas.",
  },
  {
    icon: Hammer,
    number: "02",
    title: "Criação Artesanal",
    description:
      "O trabalho manual preserva a essência da madeira enquanto transforma cada peça em uma criação exclusiva.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Acabamento Premium",
    description:
      "Lixamento, resina, proteção e acabamento são executados para destacar a beleza natural e garantir durabilidade.",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Entrega",
    description:
      "Cada peça é cuidadosamente preparada para chegar ao cliente pronta para fazer parte de um novo ambiente.",
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="bg-[#F6F2EB] py-24 md:py-32 lg:py-40"
    >
      <Container>
        <SectionTitle
          eyebrow="Nosso Processo"
          title="Cada detalhe importa."
          description="Da escolha da madeira ao acabamento final, cada etapa é realizada manualmente para garantir autenticidade, qualidade e exclusividade."
          align="center"
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden border border-[#043D0C]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A56A]/40 hover:shadow-xl"
              >
                <span className="absolute right-8 top-8 font-display text-5xl text-[#C9A56A]/20">
                  {step.number}
                </span>

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#043D0C] text-[#C9A56A] transition-colors duration-300 group-hover:bg-[#C9A56A] group-hover:text-[#043D0C]">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 font-display text-2xl text-[#043D0C]">
                  {step.title}
                </h3>

                <p className="mt-5 leading-8 text-[#5E5A53]">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}