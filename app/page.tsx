export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold">Home</h1>
      <p className="mt-4 text-sm text-neutral-600">
        Go to <a href="/main">/main</a> or{" "}
        <a href="/main/notice">/main/notice</a>.
      </p>
    </main>
  );
}
