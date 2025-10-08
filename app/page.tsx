import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          App 1 - Root Application
        </h1>
        <div className="bg-blue-100 p-8 rounded-lg">
          <p className="text-lg mb-4">This is the root application (App 1)</p>
          <p className="mb-4">Current path: /</p>
          <Link
            href="/app2"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Go to App 2 →
          </Link>
        </div>
      </div>
    </main>
  );
}
