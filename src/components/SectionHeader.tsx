type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
};

export function SectionHeader({ eyebrow, title, text, dark = false }: SectionHeaderProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 font-semibold text-[#7AC943]">{eyebrow}</p>
      <h2
        className={`text-4xl font-black tracking-[-0.04em] md:text-6xl ${
          dark ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-5 text-lg leading-8 ${dark ? "text-white/60" : "text-black/60"}`}>
          {text}
        </p>
      )}
    </div>
  );
}