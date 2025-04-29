import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to SnagIt!</h1>
      <p className="mt-4 text-lg text-gray-600">Find your favorite savings easily.</p>
      <nav className="mt-6">
        <ul className="list-disc pl-5">
          <li>
            <Link href="/dashboard/favorites">Go to Favorites</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
