export function Footer() {
  return (
    <footer className="bg-[#050505] px-6 py-10 text-white/50">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <p>© 2026 GRABME E-Taxi. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}