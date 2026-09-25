
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
              Verantwortlich für die Verarbeitung
              personenbezogener Daten auf dieser Website ist:
            </p>
            <p className="mt-3">
              Spacendo
              <br />
              Jannik Stollenwerk
              <br />
              [Scherbstr., 52072 Aachen]
              <br />
              E-Mail: [spacendo@gmx.de]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              2. Hosting und Bereitstellung der Website
            </h2>
            <p className="mt-3">
              Diese Website wird über Vercel bereitgestellt.
              Beim Aufruf der Website können technische Daten
              verarbeitet werden, die für die Bereitstellung,
              Sicherheit und den Betrieb erforderlich sind.
              Dazu können insbesondere IP-Adresse, Zeitpunkt
              des Zugriffs, angeforderte Seiten und technische
              Informationen zum verwendeten Browser gehören.
            </p>
            <p className="mt-3">
              Die Verarbeitung erfolgt zum Zweck der technischen
              Bereitstellung und Sicherheit der Website.
              Die konkrete Rechtsgrundlage und die
              Speicherdauer sind anhand der eingesetzten
              Dienste und deren Einstellungen zu prüfen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              3. Anmeldung zur Warteliste
            </h2>
            <p className="mt-3">
              Wenn du dich für die Spacendo-Warteliste anmeldest,
              verarbeiten wir die von dir eingegebenen Daten.
              Dazu gehören:
            </p>
            <ul className="mt-3 list-disc pl-6">
              <li>deine E-Mail-Adresse</li>
              <li>deine ausgewählte Rolle (Raum mieten,
                Raum anbieten oder beides)</li>
              <li>deine ausgewählten Interessen</li>
            </ul>
            <p className="mt-3">
              Wir verwenden diese Daten, um deine Anmeldung
              zur Warteliste zu speichern und dich über den
              Start von Spacendo zu informieren.
            </p>
            <p className="mt-3">
              Die Speicherung erfolgt über Supabase.
              Die Rechtsgrundlage ist abhängig von der
              konkreten Ausgestaltung der Anmeldung und
              der erteilten Einwilligung beziehungsweise
              dem verfolgten Zweck zu bestimmen.
            </p>
            <p className="mt-3">
              Eine Verwendung für weitere Werbe-E-Mails
              erfolgt nicht ohne eine dafür erforderliche
              Rechtsgrundlage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              4. Empfänger und Dienstleister
            </h2>
            <p className="mt-3">
              Für den Betrieb der Website und die Speicherung
              der Wartelistendaten setzen wir folgende
              technische Dienstleister ein:
            </p>
            <ul className="mt-3 list-disc pl-6">
              <li>
                Vercel – Bereitstellung und Hosting der Website
              </li>
              <li>
                Supabase – Speicherung der Wartelistendaten
              </li>
            </ul>
            <p className="mt-3">
              Je nach technischer Konfiguration können
              Daten auch außerhalb der Europäischen Union
              verarbeitet werden. Die konkreten Empfänger,
              Verarbeitungsorte und gegebenenfalls
              erforderlichen Schutzmaßnahmen sind anhand
              der Verträge und Einstellungen der Anbieter
              zu prüfen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              5. Speicherdauer und Löschung
            </h2>
            <p className="mt-3">
              Wir speichern personenbezogene Daten nur so
              lange, wie es für den jeweiligen Zweck
              erforderlich ist oder gesetzliche Pflichten
              dies verlangen.
            </p>
            <p className="mt-3">
              Wartelistendaten werden gelöscht, sobald sie
              für die genannten Zwecke nicht mehr erforderlich
              sind und keine gesetzlichen Aufbewahrungspflichten
              entgegenstehen.
            </p>
            <p className="mt-3">
              [Konkrete Speicherdauer und Löschkriterien
              für die Wartelistendaten festlegen und eintragen.]
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              6. Cookies und Tracking
            </h2>
            <p className="mt-3">
              Nach aktuellem Stand setzen wir auf der Website
              keine eigenen Analyse- oder Werbe-Tracking-Pixel
              ein. Ob durch die eingesetzten technischen
              Dienste weitere Cookies oder vergleichbare
              Technologien verwendet werden, ist anhand
              der tatsächlichen Konfiguration zu prüfen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              7. Deine Rechte
            </h2>
            <p className="mt-3">
              Du hast im Rahmen der gesetzlichen
              Voraussetzungen das Recht auf Auskunft über
              deine personenbezogenen Daten sowie auf
              Berichtigung, Löschung, Einschränkung der
              Verarbeitung und Datenübertragbarkeit.
            </p>
            <p className="mt-3">
              Soweit eine Verarbeitung auf einer Einwilligung
              beruht, kannst du diese mit Wirkung für die
              Zukunft widerrufen. Außerdem hast du das Recht,
              dich bei einer zuständigen
              Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">
              8. Kontakt zum Datenschutz
            </h2>
            <p className="mt-3">
              Bei Fragen zum Datenschutz oder zur Ausübung
              deiner Rechte kannst du uns unter folgender
              Adresse kontaktieren:
            </p>
            <p className="mt-3">
              [spacendo@gmx.de]
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}