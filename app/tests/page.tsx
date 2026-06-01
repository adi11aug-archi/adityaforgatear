import Link from "next/link";

export default function TestsPage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Mock Tests
      </h1>

      <div className="space-y-4">

        <Link
          href="/tests/history-01"
          className="block border p-4 rounded-lg"
        >
          History Test 01
        </Link>

        <Link
          href="/tests/planning-01"
          className="block border p-4 rounded-lg"
        >
          Planning Test 01
        </Link>

        <Link
          href="/tests/building-services-01"
          className="block border p-4 rounded-lg"
        >
          Building Services Test 01
        </Link>

      </div>
    </main>
  );
}