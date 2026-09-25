
export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-16 text-[#2d2d2d]">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="text-sm text-[#8b7355] hover:underline"
        >
          ← Zurück zur Startseite
        </a>

        <h1 className="mt-8 text-4xl font-bold">Impressum</h1>

        <section className="mt-8 space-y-6 leading-7">
          <div>
            <h2 className="text-xl font-semibold">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="mt-2">
              Spacendo
              <br />
              Jannik Stollenwerk
              <br />
              [Scherbstr. ]
              <br />
              52072 Aachen
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Kontakt</h2>
            <p className="mt-2">
              E-Mail: [spacendo@gmx.de]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Weitere Angaben
            </h2>
            <p className="mt-2">
              Spacendo wird derzeit als Einzelprojekt
              betrieben. Weitere gesetzlich erforderliche
              Angaben sind gegebenenfalls zu ergänzen.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}