export default function MainPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold">Main</h1>
      <p className="mt-4 text-sm text-neutral-600">
        This is the `/main` route.
      </p>
      <a className="mt-4 inline-block underline" href="/main/notice">
        Go to notice
      </a>
    </main>
  );
}
