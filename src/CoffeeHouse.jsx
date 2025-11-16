// src/pages/CoffeeHouse.jsx

export default function CoffeeHouse() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top bar with back link + label */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <a
            href="/"
            className="text-xs text-slate-400 hover:text-slate-100 hover:underline underline-offset-4"
          >
            ← Back to portfolio
          </a>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            Client project · Coffee House
          </p>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {/* HERO / OVERVIEW */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] items-center rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 lg:p-10 shadow-[0_18px_60px_rgba(15,23,42,0.8)]">
          {/* LEFT */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
              Coffee House a warm, modern website for a neighbourhood café
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              Coffee House is a local café that wanted a simple, modern site
              where people could quickly see{" "}
              <span className="text-slate-100 font-medium">
                opening hours, location and signature drinks
              </span>
              , without scrolling through a long menu. I built a one-page layout
              focused on mobile visitors checking “are you open?” from their
              phones.
            </p>

            {/* TAGS */}
            <div className="mt-5 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/40 px-3 py-1">
                UX &amp; layout
              </span>
              <span className="rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/40 px-3 py-1">
                React &amp; Tailwind build
              </span>
              <span className="rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40 px-3 py-1">
                Mobile-first
              </span>
            </div>

            {/* CTA ROW */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#coffee-menu"
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-amber-400 transition"
              >
                View sample menu
              </a>
              <a
                href="#coffee-hours"
                className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 hover:bg-slate-900 transition"
              >
                See hours &amp; location
              </a>
            </div>
          </div>

          {/* RIGHT MOCKUP */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-[0_0_40px_rgba(15,23,42,0.9)]">
              <img
                src="/projects/coffee-house.png"
                alt="Mockup of the Coffee House café website on a laptop screen"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>

            {/* HOURS BADGE OVERLAY */}
            <div className="absolute -bottom-4 right-4 sm:right-6">
              <div className="rounded-2xl bg-slate-950/95 border border-slate-700 px-4 py-3 text-xs shadow-[0_0_30px_rgba(15,23,42,0.9)]">
                <div className="font-semibold text-amber-300 mb-1">
                  Today&apos;s hours
                </div>
                <p className="text-slate-200">08:00 – 19:00</p>
                <p className="text-slate-400 text-[11px]">
                  Happy hour · 16:00 – 18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTIONS GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* PROJECT GOALS */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100 mb-2">
              Project goals
            </h2>
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed list-disc list-inside">
              <li>Make opening hours and address obvious on mobile.</li>
              <li>
                Highlight 3–4 hero drinks with photos, not a long PDF menu.
              </li>
              <li>
                Let customers quickly check if they can book a table or send a
                group request.
              </li>
            </ul>
          </div>

          {/* WHAT I DELIVERED */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100 mb-2">
              What I delivered
            </h2>
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed list-disc list-inside">
              <li>
                One-page layout with clear sections: hero, drinks, menu, hours,
                contact.
              </li>
              <li>
                Responsive design tested on small phones and large screens.
              </li>
              <li>
                Contact form wired to email with structured fields (name, party
                size, date, time).
              </li>
            </ul>
          </div>

          {/* TECH & APPROACH */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
            <h2 className="text-sm font-semibold text-slate-100 mb-2">
              Tech &amp; approach
            </h2>
            <ul className="space-y-2 text-xs text-slate-300 leading-relaxed list-disc list-inside">
              <li>React + TailwindCSS, deployed as a static site.</li>
              <li>Semantic HTML and alt text for better SEO.</li>
              <li>
                Simple content structure so the café owner can edit text and
                prices later.
              </li>
            </ul>
          </div>
        </div>

        {/* MENU PREVIEW */}
        <section
          id="coffee-menu"
          className="mt-2 rounded-3xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h2 className="text-sm font-semibold text-slate-100">
              Sample menu what visitors see
            </h2>
            <p className="text-[11px] text-slate-400">
              Built as simple sections the owner can update without a developer.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 text-xs text-slate-200">
            {/* Espresso */}
            <div>
              <p className="uppercase tracking-[0.16em] text-[10px] text-slate-500 mb-2">
                Espresso bar
              </p>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>Espresso</span>
                  <span className="text-slate-400">2.40 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Flat white</span>
                  <span className="text-slate-400">3.90 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Caramel latte</span>
                  <span className="text-slate-400">4.20 €</span>
                </div>
              </div>
            </div>

            {/* Specials */}
            <div>
              <p className="uppercase tracking-[0.16em] text-[10px] text-slate-500 mb-2">
                Seasonal specials
              </p>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>Honey oat cappuccino</span>
                  <span className="text-slate-400">4.50 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Spiced chai latte</span>
                  <span className="text-slate-400">4.30 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Cold brew orange tonic</span>
                  <span className="text-slate-400">4.80 €</span>
                </div>
              </div>
            </div>

            {/* Pastries */}
            <div>
              <p className="uppercase tracking-[0.16em] text-[10px] text-slate-500 mb-2">
                Baked goods
              </p>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>Butter croissant</span>
                  <span className="text-slate-400">2.10 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Chocolate chip cookie</span>
                  <span className="text-slate-400">2.40 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Lemon poppy loaf</span>
                  <span className="text-slate-400">3.20 €</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOURS & LOCATION / CONTACT STRIP */}
        <section
          id="coffee-hours"
          className="grid gap-6 lg:grid-cols-[1.1fr_1.1fr]"
        >
          {/* Hours & Location */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-sm font-semibold text-slate-100 mb-3">
              Hours &amp; location
            </h2>
            <div className="text-xs text-slate-300 space-y-3">
              <div>
                <p className="font-medium text-slate-100 mb-1">Opening hours</p>
                <p>Mon – Fri · 08:00 – 19:00</p>
                <p>Sat · 09:00 – 19:00</p>
                <p>Sun · 09:00 – 17:00</p>
              </div>
              <div>
                <p className="font-medium text-slate-100 mb-1">Address</p>
                <p>12 Rue des Roasters, 13000 Marseille</p>
                <p className="text-slate-400">
                  Close to the tram stop, 3 min from the old port.
                </p>
              </div>
            </div>
          </div>

          {/* Booking / Contact */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-sm font-semibold text-slate-100 mb-3">
              Booking &amp; contact
            </h2>
            <p className="text-xs text-slate-300 mb-3">
              On the live site, this section is wired to a small form that sends
              structured booking requests to the café&apos;s inbox.
            </p>

            <div className="grid gap-2 text-xs text-slate-200">
              <p>
                Phone: <span className="text-slate-100">+33 4 00 00 00 00</span>
              </p>
              <p>
                Email:{" "}
                <span className="text-slate-100">
                  hello@coffeehouse-demo.com
                </span>
              </p>
            </div>

            <button
              type="button"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-[13px] font-medium text-slate-950 hover:bg-emerald-400 transition"
            >
              Example booking button
            </button>
            <a
              href="https://github.com/youniscode/coffeehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-500 text-indigo-300 px-4 py-2 rounded-xl text-sm transition-colors duration-200 hover:bg-indigo-600/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 active:scale-[0.98]"
            >
              View Source →
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
