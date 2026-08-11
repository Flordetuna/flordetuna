interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionTitleProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className="text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: "#C9A56A" }}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="mt-5 font-display text-4xl leading-[1.08] md:text-5xl lg:text-6xl"
        style={{
          color: light ? "#F6F2EB" : "#043D0C",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="mt-6 max-w-2xl text-base leading-8 md:text-lg"
          style={{
            color: light ? "rgba(246,242,235,0.78)" : "#5E5A53",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}