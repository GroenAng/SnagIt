'use client';
import React from 'react';
import RecentDeals from '@/components/RecentDeals';

export default function FavoritesPage() {
  return (
    <main className="min-h-screen p-10 bg-white text-black">
      <h1 className="text-3xl font-semibold mb-6">📌 Favorites Dashboard</h1>
      <RecentDeals />
    </main>
  );
}
