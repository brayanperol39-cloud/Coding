import React from 'react';
import { Link } from 'react-router-dom';

function NextPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans flex flex-col items-center justify-center">
      <main className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Bienvenue sur la Page Suivante !
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Ceci est un exemple de page après avoir cliqué sur le bouton.
        </p>
        <Link to="/" className="inline-block px-8 py-3 rounded-full font-bold text-lg
          bg-gradient-to-r from-purple-600 to-blue-400 hover:from-purple-700 hover:to-blue-500
          transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Retour à l'Accueil
        </Link>
      </main>
    </div>
  );
}

export default NextPage;