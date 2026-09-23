"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    if (!role) {
      setError("Bitte wähle aus, was dich interessiert.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("waitlist").insert({
      email,
      role,
      interest: interest || null,
    });

    if (error) {
      console.error(error);
      setError("Das hat leider nicht funktioniert. Bitte versuche es erneut.");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setEmail("");
    setRole("");
    setInterest("");
    setLoading(false);
  }

  if (success) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-10 text-center shadow-sm">
        <div className="text-5xl">🎉</div>

        <h3 className="mt-5 text-2xl font-bold">
          Du bist dabei!
        </h3>

        <p className="mt-3 text-slate-600">
          Wir informieren dich, sobald ROOMLY startet.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-4"
    >
      <input
        type="email"
        placeholder="Deine E-Mail-Adresse"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-slate-900"
      />

      <div>
        <p className="mb-3 text-left text-sm font-semibold">
          Was möchtest du bei ROOMLY machen?
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["renter", "🏠", "Raum mieten"],
            ["provider", "🔑", "Raum anbieten"],
            ["both", "✨", "Beides"],
          ].map(([value, icon, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setRole(value)}
              className={`rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                role === value
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white hover:bg-slate-50"
              }`}
            >
              <span className="block text-xl">{icon}</span>
              <span className="mt-1 block">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="interest"
          className="mb-2 block text-left text-sm font-semibold"
        >
          Was interessiert dich?
        </label>

        <select
          id="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none focus:border-slate-900"
        >
          <option value="">Kategorie auswählen</option>
          <option value="musik">🎸 Musik</option>
          <option value="foto-video">📸 Foto & Video</option>
          <option value="werkstatt">🛠️ Werkstatt</option>
          <option value="kreativ">🎨 Kreativ</option>
          <option value="content">🎙️ Content</option>
          <option value="food">🍳 Food</option>
          <option value="sport">🧘 Sport</option>
          <option value="gaming">🎮 Gaming & Freizeit</option>
          <option value="sonstiges">✨ Sonstiges</option>
        </select>
      </div>

      {error && (
        <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Wird eingetragen..." : "Auf die Warteliste"}
      </button>

      <p className="text-xs text-slate-500">
        Keine Werbung. Nur Updates zum ROOMLY-Launch.
      </p>
    </form>
  );
}