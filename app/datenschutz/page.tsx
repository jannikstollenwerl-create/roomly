
export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-16 text-[#2d2d2d]">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="text-sm text-[#8b7355] hover:underline"
        >
          ← Zurück zur Startseite
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Datenschutzerklärung
        </h1>

        <div className="mt-8 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-semibold">
              1. Verantwortlicher
            </h2>
            <p className="mt-3">
              Verantwortlich für die Verarbeitung personenbezogener
              Daten auf dieser Website ist:
            </p>
            <p className="mt-3">
              ROOMLY
              <br />
              [Vollständiger Name]
              <br />
              [Anschrift]
              <br />
              E-Mail: [Kontakt-E-Mail]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              2. Daten bei der Nutzung der Website
            </h2>
            <p className="mt-3">
              Beim Besuch der Website können technische Daten
              verarbeitet werden, die für die Bereitstellung,
              Sicherheit und den Betrieb der Website erforderlich
              sind. Welche Daten dabei verarbeitet werden, hängt
              von den eingesetzten Hosting- und technischen
              Diensten ab.
            </p>
            <p className="mt-3">
              [Hosting-Anbieter, konkrete Daten, Zweck und
              Rechtsgrundlage ergänzen.]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              3. Warteliste
            </h2>
            <p className="mt-3">
              Wenn du dich für die ROOMLY-Warteliste anmeldest,
              verarbeiten wir die von dir eingegebenen Daten.
              Dazu gehören insbesondere deine E-Mail-Adresse
              sowie gegebenenfalls deine Angaben zu Rolle und
              Interesse.
            </p>
            <p className="mt-3">
              Die Daten werden verwendet, um deine Anmeldung
              zur Warteliste zu speichern und dich im Rahmen
              der Warteliste zu kontaktieren.
            </p>
            <p className="mt-3">
              Die Speicherung erfolgt über Supabase.
              [Rechtsgrundlage, Speicherdauer und weitere
              Angaben zur Datenverarbeitung ergänzen.]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              4. Empfänger und Dienstleister
            </h2>
            <p className="mt-3">
              Für den Betrieb der Website und die Speicherung
              der Wartelistendaten werden technische
              Dienstleister eingesetzt.
            </p>
            <p className="mt-3">
              [Hosting-Anbieter, Datenbankanbieter,
              gegebenenfalls weitere Empfänger und mögliche
              Drittlandübermittlungen konkret benennen.]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              5. Speicherdauer
            </h2>
            <p className="mt-3">
              Personenbezogene Daten werden nur so lange
              gespeichert, wie es für die jeweiligen Zwecke
              erforderlich ist oder gesetzliche Pflichten
              dies verlangen.
            </p>
            <p className="mt-3">
              [Konkrete Löschfristen für Wartelistendaten
              ergänzen.]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              6. Deine Rechte
            </h2>
            <p className="mt-3">
              Du hast im Rahmen der gesetzlichen Voraussetzungen
              das Recht auf Auskunft über deine gespeicherten
              personenbezogenen Daten sowie auf Berichtigung,
              Löschung, Einschränkung der Verarbeitung und
              Datenübertragbarkeit.
            </p>
            <p className="mt-3">
              Außerdem kannst du dich bei einer zuständigen
              Datenschutzaufsichtsbehörde beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              7. Kontakt zum Datenschutz
            </h2>
            <p className="mt-3">
              Bei Fragen zum Datenschutz kannst du uns unter
              folgender Adresse kontaktieren:
            </p>
            <p className="mt-3">
              [Kontakt-E-Mail]
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}