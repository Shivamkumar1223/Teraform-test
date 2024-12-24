'use client';

import React from 'react';
import Link from 'next/link';

// Mock data for featured games
const featuredGames = [
  { id: 1, name: 'CyberQuest', image: '/images/cyberquest.jpg', link: '/games/cyberquest' },
  { id: 2, name: 'StarFighter X', image: '/images/starfighterx.jpg', link: '/games/starfighterx' },
  { id: 3, name: 'Dungeon Master', image: '/images/dungeonmaster.jpg', link: '/games/dungeonmaster' },
];

// Mock categories
const categories = ['Action', 'Adventure', 'Strategy', 'RPG', 'Sports'];

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-700">
        <h1 className="text-5xl font-bold mb-4">Welcome to GameHub</h1>
        <p className="text-xl mb-8">Play, Compete, and Conquer the world of gaming!</p>
        <Link href="/signup">
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-bold hover:bg-yellow-400">
            Join Now
          </button>
        </Link>
      </section>

      {/* Featured Games */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGames.map((game) => (
            <div key={game.id} className="bg-gray-800 rounded-md overflow-hidden shadow-md">
              <img src={game.image} alt={game.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <Link href={game.link}>
                  <button className="bg-blue-500 px-4 py-2 rounded-md mt-2 hover:bg-blue-400">
                    Play Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-12 px-4 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Game Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-gray-700 px-4 py-2 rounded-md text-lg hover:bg-gray-600 cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-700 to-blue-500">
        <h2 className="text-3xl font-bold mb-4">Become a Pro Gamer Today!</h2>
        <p className="text-lg mb-6">Sign up now and start your gaming adventure.</p>
        <Link href="/signup">
          <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-bold hover:bg-yellow-400">
            Sign Up
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4">
        <p>&copy; {new Date().getFullYear()} GameHub. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
