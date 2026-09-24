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
      <div className="mx-auto max-w-xl rounded-[2rem] border border-[#e7ddd2] bg-[#fffaf5] p-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ead7c5] text-2xl">
          ✓
        </div>

        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[#241c17]">
          Du bist dabei.
        </h3>

        <p className="mt-3 text-[#766b63]">
          Wir informieren dich, sobald ROOMLY startet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-8">
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-left text-sm font-medium text-[#4f443d]"
        >
          Deine E-Mail-Adresse
        </label>

        <input
          id="email"
          type="email"
          placeholder="name@beispiel.de"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full rounded-2xl border border-[#ded2c7] bg-white px-5 py-4 text-[#241c17] outline-none transition placeholder:text-[#aaa098] focus:border-[#a65f3b] focus:ring-4 focus:ring-[#a65f3b]/10"
        />
      </div>

      <div>
        <p className="mb-3 text-left text-sm font-medium text-[#4f443d]">
          Was möchtest du bei ROOMLY machen?
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["renter", "Raum mieten"],
            ["provider", "Raum anbieten"],
            ["both", "Beides"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setRole(value)}
              className={`rounded-2xl border px-4 py-4 text-sm font-medium transition ${
                role === value
                  ? "border-[#a65f3b] bg-[#a65f3b] text-white shadow-sm"
                  : "border-[#ded2c7] bg-white text-[#4f443d] hover:border-[#b9a99c] hover:bg-[#fffaf5]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label
          htmlFor="interest"
          className="mb-2 block text-left text-sm font-medium text-[#4f443d]"
        >
          Was interessiert dich?
        </label>

        <select
          id="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          className="w-full rounded-2xl border border-[#ded2c7] bg-white px-5 py-4 text-[#241c17] outline-none transition focus:border-[#a65f3b] focus:ring-4 focus:ring-[#a65f3b]/10"
        >
          <option value="">Kategorie auswählen</option>
          <option value="musik">Musik</option>
          <option value="foto-video">Foto & Video</option>
          <option value="werkstatt">Werkstatt</option>
          <option value="kreativ">Kreativ</option>
          <option value="content">Content</option>
          <option value="food">Food</option>
          <option value="sport">Sport</option>
          <option value="gaming">Gaming & Freizeit</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-[#241c17] px-7 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3a2d25] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Wird eingetragen..." : "Frühzugang sichern"}
      </button>

      <p className="text-xs text-[#8c8178]">
        Keine Werbung. Nur Updates zum ROOMLY-Launch.
      </p>
    </form>
  );
}