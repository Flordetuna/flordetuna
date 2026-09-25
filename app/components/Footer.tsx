import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowUpRight,
  Camera,
  MapPin,
  MessageCircle,
} from "lucide-react";

import Container from "./Container";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "A Marca", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#021F07] text-[#F6F2EB]">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#C9A56A]/10 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid gap-14 border-b border-[#F6F2EB]/15 py-20 md:py-24 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-20">
          <div>
            <Link
              href="#inicio"
              aria-label="Voltar ao início"
              className="inline-block"
            >
              <Image
                src="/images/flor-de-tuna/logo/logo.png"
                alt="Flor de Tuna"
                width={180}
                height={70}
                className="h-auto w-[165px] object-contain"
              />
            </Link>

            <p
              className="mt-8 max-w-md text-base leading-8"
              style={{ color: "rgba(246, 242, 235, 0.75)" }}
            >
              Peças artesanais em madeira e resina, criadas para transformar
              ambientes e preservar histórias.
            </p>

            <a
              href="https://wa.me/5554996223146"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: "#C9A56A" }}
            >
              Solicitar orçamento

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#C9A56A" }}
            >
              Navegação
            </span>

            <nav className="mt-7 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm transition-opacity duration-300 hover:opacity-60"
                  style={{ color: "#F6F2EB" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#C9A56A" }}
            >
              Fale conosco
            </span>

            <div className="mt-7 space-y-5">
              <a
                href="https://wa.me/5554996223146"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F6F2EB]/20 transition-colors duration-300 group-hover:border-[#C9A56A]">
                  <MessageCircle size={17} />
                </span>

                <span>
                  <span
                    className="block text-xs uppercase tracking-[0.14em]"
                    style={{ color: "rgba(246, 242, 235, 0.55)" }}
                  >
                    WhatsApp
                  </span>

                  <span
                    className="mt-1 block text-sm"
                    style={{ color: "#F6F2EB" }}
                  >
                    Solicite seu orçamento
                  </span>
                </span>
              </a>

              <a
                href="https://www.instagram.com/flordetunanp/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F6F2EB]/20 transition-colors duration-300 group-hover:border-[#C9A56A]">
                  <Camera size={17} />
                </span>

                <span>
                  <span
                    className="block text-xs uppercase tracking-[0.14em]"
                    style={{ color: "rgba(246, 242, 235, 0.55)" }}
                  >
                    Instagram
                  </span>

                  <span
                    className="mt-1 block text-sm"
                    style={{ color: "#F6F2EB" }}
                  >
                    @flordetunanp
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F6F2EB]/20">
                  <MapPin size={17} />
                </span>

                <span>
                  <span
                    className="block text-xs uppercase tracking-[0.14em]"
                    style={{ color: "rgba(246, 242, 235, 0.55)" }}
                  >
                    Localização
                  </span>

                  <span
                    className="mt-1 block text-sm"
                    style={{ color: "#F6F2EB" }}
                  >
                    Nova Prata, Rio Grande do Sul
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-7 text-xs md:flex-row md:items-center md:justify-between">
          <p style={{ color: "rgba(246, 242, 235, 0.5)" }}>
            © {currentYear} Flor de Tuna. Todos os direitos reservados.
          </p>

          <kyvo-selo data-alinhar="direita" className="self-start md:self-auto" />
        </div>
      </Container>

      <Script src="https://kyvo.dev.br/selo.js" strategy="afterInteractive" />
    </footer>
  );
}