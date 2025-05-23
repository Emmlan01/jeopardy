'use client';
import React, { useState } from 'react';
import { GameBoard } from '../components/gameboard';
import { Questions } from '../components/questions';

const questions: Record<string, Record<number, string>> = {
  Frida: {
    100: 'Vad är Fridas favoritfärg?',
    200: 'När fyller Frida år?',
    300: 'I vilken tätort kommer Frida ifrån?',
    400: 'Hur träffade Frida Gustafs syster Linnea första gången?',
    500: 'Vilket hockeylag ligger närmast till hjärtat för Frida?',
  },
  Gustaf: {
    100: 'Vilken månad fyllar Gustaf år?',
    200: 'Vilken ytterligare roll utöver köksmästare, inköpsmästare och skattmästare hade Gustaf i klubbmästeriet?',
    300: 'Hur många sporter har Gustaf utfört/tränat? Ange antal',
    400: 'Hur många liter öl drack Gustaf under hela deras resa till oktoberfest?',
    500: 'Vilket smeknamn gillar Gustaf INTE att bli kallad för?',
  },
  Paret: {
    100: 'Vad hette de två klubbmästerierna som Frida och Gustaf var med i?',
    200: 'Vart bodde Gustaf och Frida innan de köpte denna lägenhet?',
    300: 'Vart friade Gustaf till Frida?',
    400: 'Vad brukar Gustaf och Frida göra till frukost nästan varje helg?',
    500: 'Vad tycker Frida om Gustafs ölbryggning?',
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
