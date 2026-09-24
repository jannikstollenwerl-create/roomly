"use client";

import { useEffect, useState } from "react";
import WaitlistForm from "./components/WaitlistForm";

const categories = [
  ["🎸", "Musik", "Proberäume, Studios & mehr"],
  ["📸", "Foto & Video", "Studios, Sets & Content"],
  ["🛠️", "Werkstatt", "DIY, Handwerk & Projekte"],
  ["🎨", "Kreativ", "Ateliers & Arbeitsräume"],
  ["🎙️", "Content", "Podcast, Streaming & Creator"],
  ["🍳", "Food", "Küchen & Backräume"],
  ["🧘", "Sport", "Yoga, Training & Bewegung"],
  ["🎮", "Freizeit", "Gaming & besondere Hobbys"],
];

const benefits = [
  {
    number: "01",
    title: "Finde den passenden Raum",
    text: "Suche nach Ort, Kategorie und dem, was du vorhast.",
  },
  {
    number: "02",
    title: "Buche flexibel",
    text: "Nutze besondere Räume genau dann, wenn du sie brauchst.",
  },
  {
    number: "03",
    title: "Mach dein Ding",
    text: "Kein eigener Raum nötig. Einfach loslegen.",
  },
];

export default function Home() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist-count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-2xl font-black tracking-tight">
            ROOMLY
          </a>

          <a
            href="#warteliste"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Frühzugang sichern
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(148,163,184,0.22),_transparent_40%)]" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
              🇩🇪 Startet bald deutschlandweit
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Dein Hobby braucht
              <span className="block text-slate-400">
                keinen eigenen Raum.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
  Entdecke besondere Räume in deiner Nähe und miete sie flexibel
  stundenweise – vom Proberaum über das Fotostudio bis zur
  Werkstatt. Oder biete deinen eigenen Raum auf ROOMLY an.
</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#warteliste"
                className="rounded-full bg-slate-950 px-7 py-4 text-center font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                🚀 Auf die Warteliste
              </a>

              <a
                href="#raum-anbieten"
                className="rounded-full border border-slate-300 bg-white px-7 py-4 text-center font-semibold transition hover:bg-slate-50"
              >
                Ich habe einen Raum
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
              <span>✓ Kostenlos</span>
              <span>✓ Unverbindlich</span>
              <span>✓ Deutschlandweit</span>
            </div>

            {/* WAITLIST COUNTER */}
            {count !== null && (
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm text-white">
                  ✓
                </div>

                <div>
                  <div className="text-lg font-black">
                    {count} {count === 1 ? "Person" : "Menschen"}
                  </div>

                  <div className="text-sm text-slate-500">
                    bereits auf der ROOMLY-Warteliste
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-100 p-3 shadow-2xl">
              <div className="grid grid-cols-2 gap-3">
                <div className="flex h-52 items-end rounded-3xl bg-white p-5 shadow-sm">
                  <div>
                    <div className="text-4xl">🎸</div>
                    <div className="mt-3 font-bold">Musikraum</div>
                    <div className="text-sm text-slate-500">
                      Für deine nächste Session
                    </div>
                  </div>
                </div>

                <div className="flex h-52 items-end rounded-3xl bg-slate-900 p-5 text-white">
                  <div>
                    <div className="text-4xl">📸</div>
                    <div className="mt-3 font-bold">Fotostudio</div>
                    <div className="text-sm text-slate-400">
                      Licht. Raum. Idee.
                    </div>
                  </div>
                </div>

                <div className="flex h-52 items-end rounded-3xl bg-slate-900 p-5 text-white">
                  <div>
                    <div className="text-4xl">🛠️</div>
                    <div className="mt-3 font-bold">Werkstatt</div>
                    <div className="text-sm text-slate-400">
                      Platz für dein Projekt
                    </div>
                  </div>
                </div>

                <div className="flex h-52 items-end rounded-3xl bg-white p-5 shadow-sm">
                  <div>
                    <div className="text-4xl">🎙️</div>
                    <div className="mt-3 font-bold">Podcastraum</div>
                    <div className="text-sm text-slate-500">
                      Dein Content. Dein Raum.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:block">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                ROOMLY
              </div>
              <div className="mt-1 font-bold">
                Der Raum für deine Idee.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / IDEA */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="text-3xl">🏠</div>
              <h3 className="mt-4 text-lg font-bold">
                Besondere Räume entdecken
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Räume, die mehr können als vier Wände – passend zu deinem
                Vorhaben.
              </p>
            </div>

            <div>
              <div className="text-3xl">⏱️</div>
              <h3 className="mt-4 text-lg font-bold">
                Nur so lange wie nötig
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Stundenweise statt langfristig mieten. Flexibel für spontane
                Ideen und regelmäßige Projekte.
              </p>
            </div>

            <div>
              <div className="text-3xl">💡</div>
              <h3 className="mt-4 text-lg font-bold">
                Mehr Möglichkeiten
              </h3>
              <p className="mt-2 leading-7 text-slate-600">
                Vom Proberaum bis zur Werkstatt – ROOMLY soll Raum für fast
                jede Leidenschaft schaffen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
            Was suchst du?
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Ein Raum für fast alles.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Deine Idee ist speziell? Umso besser. ROOMLY soll Menschen und
            Räume zusammenbringen, die sonst nur schwer zueinander finden.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([icon, title, description]) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
            >
              <div className="text-4xl">{icon}</div>

              <h3 className="mt-6 text-lg font-bold">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {description}
              </p>

              <div className="mt-5 text-sm font-semibold text-slate-900 opacity-0 transition group-hover:opacity-100">
                Bald auf ROOMLY →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              So funktioniert ROOMLY
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Von der Idee zum Raum.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-400">
              Einfach den passenden Ort finden, Zeit auswählen und loslegen.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {benefits.map(({ number, title, text }) => (
              <div
                key={number}
                className="border-t border-slate-800 pt-7"
              >
                <div className="text-sm font-bold text-slate-500">
                  {number}
                </div>

                <h3 className="mt-5 text-2xl font-bold">{title}</h3>

                <p className="mt-4 leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section
        id="raum-anbieten"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="overflow-hidden rounded-[2rem] bg-slate-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Für Raumanbieter
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Dein Raum kann mehr.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Steht deine Werkstatt, dein Studio oder dein Hobbyraum
                regelmäßig leer? Mit ROOMLY soll daraus eine Möglichkeit
                werden, deinen Raum flexibel anzubieten.
              </p>

              <a
                href="#warteliste"
                className="mt-8 inline-block rounded-full bg-slate-950 px-7 py-4 font-semibold text-white transition hover:bg-slate-800"
              >
                Raum anbieten
              </a>
            </div>

            <div className="flex min-h-[400px] items-center justify-center bg-slate-900 p-10 text-white">
              <div className="max-w-sm">
                <div className="text-6xl">🏠</div>

                <h3 className="mt-8 text-3xl font-black">
                  Ungenutzter Raum wird zur Möglichkeit.
                </h3>

                <div className="mt-8 space-y-4 text-slate-300">
                  <div>✓ Preis selbst bestimmen</div>
                  <div>✓ Verfügbarkeit selbst festlegen</div>
                  <div>✓ Raum individuell beschreiben</div>
                  <div>✓ Menschen mit passenden Interessen erreichen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="warteliste" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-slate-100 px-6 py-16 text-center sm:px-12">
          <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
            🚀 ROOMLY Pre-Launch
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Sei von Anfang an dabei.
          </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
  Trag dich kostenlos ein und erfahre als Erste:r, wenn ROOMLY startet.
  Entdecke passende Räume, finde neue Möglichkeiten für dein Hobby und
  hilf uns dabei, ROOMLY von Anfang an mitzugestalten.
</p>

<div className="mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
  <div className="rounded-2xl bg-white p-4 shadow-sm">
    <div className="text-xl">🔔</div>
    <div className="mt-2 font-bold">Früh informiert</div>
    <div className="mt-1 text-sm text-slate-500">
      Erfahre zuerst, wann ROOMLY startet.
    </div>
  </div>

  <div className="rounded-2xl bg-white p-4 shadow-sm">
    <div className="text-xl">🏠</div>
    <div className="mt-2 font-bold">Räume entdecken</div>
    <div className="mt-1 text-sm text-slate-500">
      Finde neue Möglichkeiten für deine Ideen.
    </div>
  </div>

  <div className="rounded-2xl bg-white p-4 shadow-sm">
    <div className="text-xl">💡</div>
    <div className="mt-2 font-bold">Mitgestalten</div>
    <div className="mt-1 text-sm text-slate-500">
      Hilf uns, ROOMLY von Anfang an zu entwickeln.
    </div>
  </div>
</div>

          <div className="mx-auto mt-10 max-w-xl">
            <WaitlistForm />
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Kostenlos · Unverbindlich · Zum Start informiert werden
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Was würdest du machen, wenn du den richtigen Raum hättest?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Genau dafür bauen wir ROOMLY.
          </p>

          <a
            href="#warteliste"
            className="mt-8 inline-block rounded-full bg-slate-950 px-8 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            🚀 Jetzt auf die Warteliste
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-bold text-slate-950">ROOMLY</div>

          <div>Der Raum für deine Idee.</div>
        </div>
      </footer>
    </main>
  );
}