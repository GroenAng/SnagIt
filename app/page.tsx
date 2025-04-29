'use client';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">🎉 Welcome to SnagIt!</h1>
      <p className="text-lg mb-6">Find your favorite savings easily.</p>
      <Link href="/dashboard/favorites" className="text-blue-600 underline hover:text-blue-800 transition">
        Go to Favorites
      </Link>
    </main>
  );
}

