"use client";

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// On définit le type pour la navigation
type ViewState = 'landing' | 'selection' | 'chapters' | 'lesson' | 'quiz';

const Navbar = ({ setView }: { setView: (v: ViewState) => void }) => (
  <nav className="flex justify-between items-center p-6 border-b bg-white w-full">
    <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => setView('landing')}>
      <div className="w-8 h-8 bg-black rounded-full"></div>
      <span>Wikipedia <span className="font-light text-gray-400">Learn</span></span>
    </div>
    <div className="flex gap-6 text-sm font-medium">
      <button onClick={() => setView('selection')} className="hover:text-blue-600 transition">Parcours</button>
      <button className="bg-black text-white px-4 py-2 rounded-full">Mon Profil</button>
    </div>
  </nav>
);