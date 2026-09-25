
"use client";

import { useEffect, useState } from "react";
import WaitlistForm from "./components/WaitlistForm";

const categories = [
  {
    title: "Musik",
    description: "Proberäume, Studios & mehr",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Foto & Video",
    description: "Studios, Sets & Content",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Werkstatt",
    description: "DIY, Handwerk & Projekte",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Kreativ",
    description: "Ateliers & Arbeitsräume",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Content",
    description: "Podcast, Streaming & Creator",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Food",
    description: "Küchen & Backräume",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Sport",
    description: "Yoga, Training & Bewegung",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Freizeit",
    description: "Gaming & besondere Hobbys",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85",
  },
];

const benefits = [
  {
    number: "01",
    title: "Finde deinen Raum",
    text: "Entdecke Orte, die zu dem passen, was du vorhast.",
  },
  {
    number: "02",
    title: "Buche flexibel",
    text: "Nutze besondere Räume genau dann, wenn du sie brauchst.",
  },
  {
    number: "03",
    title: "Mach dein Ding",
    text: "Kein eigener Raum nötig. Einfach hingehen und loslegen.",
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
    <main className="min-h-screen bg-white text-[#211f1d]">
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-[#eeeae5] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-3xl font-bold tracking-[-0.07em]"
          >
            Spacendo<span className="text-[#a66b48]">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#393530] md:flex">
            <a href="#raeume" className="transition hover:text-[#a66b48]">
              Räume entdecken
            </a>
            <a
              href="#so-funktionierts"
              className="transition hover:text-[#a66b48]"
            >
              So funktioniert's
            </a>
            <a
              href="#raum-anbieten"
              className="transition hover:text-[#a66b48]"
            >
              Raum anbieten
            </a>
          </nav>

          <a
            href="#warteliste"
            className="rounded-full bg-[#29231e] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#514338]"
          >
            Frühzugang sichern
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-[1600px] lg:min-h-[580px] lg:grid-cols-[0.85fr_1.15fr]">
          {/* HERO TEXT */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-20 lg:pl-16 xl:pl-24">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#a66b48]">
              Der Raum für deine Idee.
            </p>

            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Dein Hobby
              <br />
              <span className="text-[#a66b48]">braucht Raum.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#625d57]">
              Entdecke besondere Räume in deiner Nähe und miete sie flexibel
              stundenweise – vom Proberaum über das Fotostudio bis zur
              Werkstatt.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#warteliste"
                className="rounded-full bg-[#29231e] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#514338]"
              >
                Frühzugang sichern
              </a>

              <a
                href="#raum-anbieten"
                className="rounded-full border border-[#29231e] px-7 py-4 text-center text-sm font-semibold transition hover:bg-[#f8f6f3]"
              >
                Ich habe einen Raum
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#625d57]">
              <span>✓ Kostenlos</span>
              <span>✓ Unverbindlich</span>
              <span>✓ Deutschlandweit</span>
            </div>

            {count !== null && (
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#d7b79d] text-sm font-semibold text-[#46372c]">
                    R
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#b9c2b1] text-sm font-semibold text-[#394436]">
                    M
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#d9c6b5] text-sm font-semibold text-[#594538]">
                    J
                  </div>
                </div>

                <div>
                  <p className="font-semibold">
                    {count} {count === 1 ? "Person" : "Menschen"}
                  </p>
                  <p className="text-sm text-[#817970]">
                    bereits auf der Spacendo-Warteliste
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* BILDCOLLAGE */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <div className="relative min-h-[230px] overflow-hidden sm:min-h-[300px] lg:min-h-[290px]">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1100&q=85"
                alt="Musikraum mit Instrumenten und Studioausstattung"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-lg font-semibold text-white sm:bottom-7 sm:left-7 sm:text-xl">
                Musikräume
              </span>
            </div>

            <div className="relative min-h-[230px] overflow-hidden sm:min-h-[300px] lg:min-h-[290px]">
              <img
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1100&q=85"
                alt="Fotostudio mit professioneller Ausstattung"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-lg font-semibold text-white sm:bottom-7 sm:left-7 sm:text-xl">
                Foto & Video
              </span>
            </div>

            <div className="relative min-h-[230px] overflow-hidden sm:min-h-[300px] lg:min-h-[290px]">
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1100&q=85"
                alt="Tischlerei mit Werkbank, Holz und Schreinerwerkzeug"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-lg font-semibold text-white sm:bottom-7 sm:left-7 sm:text-xl">
                Tischlerei & Werkstatt
              </span>
            </div>

            <div className="relative min-h-[230px] overflow-hidden sm:min-h-[300px] lg:min-h-[290px]">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1100&q=85"
                alt="Kreativer Arbeitsraum mit Tisch und Materialien"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-lg font-semibold text-white sm:bottom-7 sm:left-7 sm:text-xl">
                Kreativräume
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-[#eeeae5] bg-[#faf9f7]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-20">
          <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
            Nicht jeder braucht einen eigenen Raum.
          </h2>

          <div>
            <p className="text-lg leading-8 text-[#625d57]">
              Spacendo bringt Menschen mit Räumen zusammen, die sonst nur schwer
              zueinander finden. Für ein paar Stunden, einen Tag oder genau so
              lange, wie deine Idee es braucht.
            </p>
            <p className="mt-5 text-sm font-medium text-[#a66b48]">
              Mehr Möglichkeiten. Weniger feste Verpflichtungen.
            </p>
          </div>
        </div>
      </section>

      {/* KATEGORIEN */}
      <section id="raeume" className="mx-auto max-w-[1600px] px-6 py-16 sm:px-10 lg:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a66b48]">
              Entdecke Möglichkeiten
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Ein Raum für fast alles.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-[#625d57] md:text-right">
            Von Musik bis Handwerk, von Content bis Bewegung – deine Idee gibt
            den Raum vor.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
          {categories.map(({ title, description, image }) => (
            <article
              key={title}
              className="overflow-hidden rounded-lg border border-[#eeeae5] bg-white transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-36 overflow-hidden bg-[#f0ece7] sm:h-40">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="px-3 py-3 sm:px-4">
                <h3 className="text-sm font-semibold sm:text-base">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-[#817970] sm:text-sm">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SO FUNKTIONIERT'S */}
      <section id="so-funktionierts" className="bg-[#29241f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a68d]">
            So funktioniert Spacendo
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Von der Idee zum Raum.
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-[#d1c9c0]">
            Einfach den passenden Ort finden, Zeit auswählen und loslegen.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {benefits.map(({ number, title, text }) => (
              <div key={number} className="border-t border-white/20 pt-6">
                <span className="text-sm text-[#c5a68d]">{number}</span>
                <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 max-w-sm leading-7 text-[#d1c9c0]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAUM ANBIETEN */}
      <section
        id="raum-anbieten"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-20"
      >
        <div className="grid overflow-hidden rounded-xl bg-[#f5f1eb] lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a66b48]">
              Für Raumanbieter
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Dein Raum kann mehr.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#625d57]">
              Steht deine Werkstatt, dein Studio oder dein Hobbyraum regelmäßig
              leer? Mit Spacendo soll daraus eine Möglichkeit werden, deinen Raum
              flexibel anzubieten.
            </p>

            <a
              href="#warteliste"
              className="mt-8 inline-block rounded-full bg-[#29231e] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#514338]"
            >
              Raum anbieten
            </a>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
              alt="Heller, flexibel nutzbarer Arbeitsraum"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-7 grid gap-4 text-sm text-[#625d57] sm:grid-cols-2 lg:grid-cols-4">
          <p>✓ Preis selbst bestimmen</p>
          <p>✓ Verfügbarkeit selbst festlegen</p>
          <p>✓ Raum individuell beschreiben</p>
          <p>✓ Menschen mit passenden Interessen erreichen</p>
        </div>
      </section>

      {/* WARTELISTE */}
      <section
        id="warteliste"
        className="border-y border-[#eeeae5] bg-[#faf9f7]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a66b48]">
              Spacendo Pre-Launch
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl">
              Sei von Anfang an dabei.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#625d57]">
              Trag dich kostenlos ein und erfahre als Erste:r, wenn Spacendo
              startet. Entdecke passende Räume, finde neue Möglichkeiten für
              dein Hobby und hilf uns dabei, Spacendo von Anfang an mitzugestalten.
            </p>

            <div className="mt-8 space-y-4 text-sm text-[#625d57]">
              <p>✓ Erfahre zuerst, wann Spacendo startet.</p>
              <p>✓ Entdecke neue Möglichkeiten für deine Ideen.</p>
              <p>✓ Gestalte Spacendo von Anfang an mit.</p>
            </div>
          </div>

          
<div className="rounded-xl border border-[#e8e2da] bg-white p-6 sm:p-10">
  <h3 className="text-xl font-semibold">
    Jetzt kostenlos eintragen
  </h3>

  <p className="mt-2 text-sm leading-6 text-[#817970]">
    Unverbindlich anmelden und zum Start informiert werden.
  </p>

  <div className="mt-8">
    <WaitlistForm />
  </div>

  <p className="mt-6 text-xs leading-5 text-[#817970]">
    Mit deiner Anmeldung werden deine E-Mail-Adresse sowie
    deine Angaben zu Rolle und Interesse verarbeitet, damit
    wir dich über den Start von Spacendo informieren können.
    Weitere Informationen findest du in unserer{" "}
    <a
      href="/datenschutz"
      className="underline underline-offset-2 transition hover:text-[#a66b48]"
    >
      Datenschutzerklärung
    </a>.
  </p>

  <p className="mt-4 text-xs text-[#938a80]">
    Kostenlos · Unverbindlich · Zum Start informiert werden
  </p>
</div>
        </div>
      </section>

      {/* ABSCHLUSS */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a66b48]">
            Spacendo
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
            Was würdest du machen, wenn du den richtigen Raum hättest?
          </h2>

          <p className="mt-6 text-lg text-[#625d57]">
            Genau dafür bauen wir Spacendo.
          </p>

          <a
            href="#warteliste"
            className="mt-8 inline-block rounded-full bg-[#29231e] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#514338]"
          >
            Frühzugang sichern
          </a>
        </div>
      </section>

     
      {/* FOOTER */}
      <footer className="border-t border-[#eeeae5] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 text-sm text-[#817970] sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="text-2xl font-bold tracking-[-0.07em] text-[#211f1d]"
          >
            Spacendo<span className="text-[#a66b48]">.</span>
          </a>

          <p>Der Raum für deine Idee.</p>

          <nav className="flex flex-wrap gap-5">
            <a
              href="/impressum"
              className="hover:text-[#a66b48] hover:underline"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="hover:text-[#a66b48] hover:underline"
            >
              Datenschutz
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}