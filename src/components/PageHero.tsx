type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 pb-20 pt-32 text-white md:pb-24 md:pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(83,227,106,0.15),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#53e36a]">{eyebrow}</p>
        <h1 className="max-w-5xl text-5xl font-black leading-[0.93] tracking-[-0.055em] md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">{text}</p>
      </div>
    </section>
  );
}
