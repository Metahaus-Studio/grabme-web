type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-20 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(122,201,67,0.22),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-4 font-semibold text-[#7AC943]">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">{text}</p>
      </div>
    </section>
  );
}