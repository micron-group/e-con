import Link from 'next/link';

    export default function Home() {
      return (
        <main className="min-h-screen p-8 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-6 text-center">Your Digital Marketplace</h1>
          <p className="text-xl text-center mb-8">Buy premium templates, themes, and software</p>
          <Link href="/products">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
              Browse Products
            </button>
          </Link>
        </main>
      );
    }