import Head from "next/head";

export default function SeatSpotPrivacy() {
  return (
    <>
      <Head>
        <title>SeatSpot Privacy Policy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Privacy policy for SeatSpot, a library seat app."
        />
      </Head>
      <main className="min-h-screen bg-white text-neutral-900">
        <article className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
          <p className="text-sm font-medium tracking-wide text-neutral-500">
            Last updated 13 November 2026
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            SeatSpot Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            SeatSpot is a library seat app. It collects your name, email, and
            password to create an account. It stores your seat preferences and
            any seat you hold.
          </p>

          <h2 className="mt-10 text-xl font-semibold">Match</h2>
          <p className="mt-3 leading-relaxed">
            Match sends the sentence you type, your seat preferences, and which
            seats are free to OpenAI so it can suggest a seat. It does not send
            your password.
          </p>

          <h2 className="mt-10 text-xl font-semibold">Storage and deletion</h2>
          <p className="mt-3 leading-relaxed">
            Your account data is stored in Supabase. You can delete your
            account in the app under Account.
          </p>

          <h2 className="mt-10 text-xl font-semibold">Contact</h2>
          <p className="mt-3 leading-relaxed">
            Contact: use the email on the Play Store listing.
          </p>
        </article>
      </main>
    </>
  );
}
