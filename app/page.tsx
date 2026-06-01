import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold text-blue-700">
          AdityaForGATEAR
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          India's Architecture Exam Platform
        </p>

        <p className="mt-4 text-gray-500">
          GATE AR | Assistant Architect | Lecturer | Planning Officer
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/tests"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Start Free
          </Link>

          <Link
            href="/tests"
            className="border border-gray-300 px-6 py-3 rounded-lg"
          >
            Browse Tests
          </Link>
        </div>
      </section>
    </main>
  );
}