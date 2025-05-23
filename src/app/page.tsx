import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400 text-center p-6">
      <h1 className="text-5xl font-bold mb-8">Välkommen till</h1>
      <h1 className="text-5xl font-bold mb-8">Frida's möhippa jeopardy 🎉</h1>
      <Link href="/game">
        <button className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 transition">
          Börja spelet
        </button>
      </Link>
    </main>
  );
}
