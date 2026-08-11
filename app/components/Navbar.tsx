"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "./Button";
import Container from "./Container";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "A Marca", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Processo", href: "#processo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/10 bg-[#F6F2EB]/95 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-[88px] items-center justify-between">
          <Link href="#inicio" className="shrink-0">
            <Image
              src="/images/flor-de-tuna/logo/logo.png"
              alt="Flor de Tuna"
              width={165}
              height={60}
              priority
              className="w-[150px] md:w-[165px]"
            />
          </Link>

          <nav className="hidden items-center gap-10 xl:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: scrolled ? "#043D0C" : "#F6F2EB",
                }}
                className="relative text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:block">
            <Button
              href="#contato"
              variant={scrolled ? "primary" : "gold"}
            >
              Solicitar orçamento
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`relative z-50 xl:hidden ${
              scrolled ? "text-[#043D0C]" : "text-[#F6F2EB]"
            }`}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#043D0C] transition-all duration-300 xl:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <Container className="flex h-full flex-col justify-center gap-8 pt-24">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl text-[#F6F2EB]"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-6">
            <Button
              href="#contato"
              variant="gold"
              className="w-full"
            >
              Solicitar orçamento
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}