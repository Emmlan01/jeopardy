'use client';
import React, { useState } from 'react';
import { GameBoard } from '../components/gameboard';
import { Questions } from '../components/questions';

const questions: Record<string, Record<number, string>> = {
  Frida: {
    100: 'Vad är Fridas favoritfärg?',
    200: 'När fyller Frida år?',
    300: '?',
    400: 'Hur träffade Frida Gustafs syster Linnea första gången?',
    500: '?',
  },
  Gustaf: {
    100: '?',
    200: '?',
    300: '?',
    400: '?',
    500: '?',
  },
  Paret: {
    100: '',
    200: 'Vart bodde Gustaf och Frida innan de köpte denna lägenhet?',
    300: 'Vart friade Gustaf till Frida?',
    400: 'Vad brukar Gustaf och Frida göra till frukost nästan varje helg?',
    500: '',
  },
};

export default function GamePage() {
  const [selected, setSelected] = useState<{ category: string; points: number } | null>(null);

  const handleSelect = (category: string, points: number) => {
    setSelected({ category, points });
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-violet-300 px-4 py-8">
    <h1 className="text-4xl font-bold mb-10 text-center">🎉🎉🎉🎉</h1>
    <GameBoard onSelect={handleSelect} />
    {selected && (
      <Questions
        category={selected.category}
        points={selected.points}
        question={questions[selected.category]?.[selected.points] || 'No question available.'}
        onClose={handleClose}
      />
    )}
  </main>
  
  );
}
