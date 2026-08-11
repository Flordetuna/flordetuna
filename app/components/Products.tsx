"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Container from "./Container";
import SectionTitle from "./SectionTitle";

const products = [
  {
    number: "01",
    title: "Relógios",
    description:
      "Relógios artesanais em madeira maciça e resina, desenvolvidos para unir funcionalidade, design e personalidade em uma única peça.",
    image: "/images/flor-de-tuna/products/relogio.jpg",
  },
  {
    number: "02",
    title: "Tábuas",
    description:
      "Tábuas exclusivas para servir, decorar e transformar momentos à mesa em experiências especiais.",
    image: "/images/flor-de-tuna/products/tabua.jpg",
  },
  {
    number: "03",
    title: "Peças Decorativas",
    description:
      "Criações autorais que unem madeira, formas orgânicas e acabamento artesanal para compor ambientes únicos.",
    image: "/images/flor-de-tuna/products/decoracao.jpg",
  },
];

export default function Products() {
  return (
    <section
      id="produtos"
      className="relative overflow-hidden bg-[#043D0C] py-24 md:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(201,165,106,0.10),transparent_32%)]" />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
          <SectionTitle
            eyebrow="Nossas criações"
            title="Peças que transformam ambientes e atravessam gerações."
            description="Cada criação nasce da combinação entre matéria-prima, técnica artesanal e um olhar atento aos detalhes."
            light
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-sm text-sm leading-7 text-[#F6F2EB]/65 lg:justify-self-end"
          >
            Desenvolvemos peças sob medida e coleções exclusivas, respeitando
            as características naturais de cada madeira.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              className="group"
            >
              <a href="#contato" className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#173F1C]">
                  <Image
                    src={product.image}
                    alt={`Categoria de produtos: ${product.title}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#021F07]/85 via-[#021F07]/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A56A]">
                        {product.number}
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F6F2EB]/30 text-[#F6F2EB] transition-all duration-300 group-hover:border-[#C9A56A] group-hover:bg-[#C9A56A] group-hover:text-[#043D0C]">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-3xl text-[#F6F2EB] md:text-4xl">
                      {product.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#F6F2EB]/65">
                  {product.description}
                </p>
              </a>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}