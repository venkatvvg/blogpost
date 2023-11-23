// components/Header.js
import Link from 'next/link';
import { useState } from 'react';

export default function Header({ name, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
      <div className="text-center mt-4">
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go to Home
          </a>
        </Link>
      </div>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2 px-2 py-1 border border-gray-300"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </header>
  );
}
