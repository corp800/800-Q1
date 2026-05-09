export default function MainPage() {
  return (
    <main className="min-h-screen bg-background p-8 text-foreground">
      <h1 className="text-2xl font-semibold">Main</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        This is the `/main` route.
      </p>
      <a
        className="mt-4 inline-block text-primary underline underline-offset-4"
        href="/main/notice"
      >
        Go to notice
      </a>
    </main>
  );
}
