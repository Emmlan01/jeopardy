export default function Vemvet() {
  const questions = [
    { nr: 1, alt1: 'Snubbla omkull under vigselcermonin', e: 'ELLER', alt2: 'Komma 30 min för sent till vigseln' },
    { nr: 2, alt1: 'Bröllop i skogen',  e: 'ELLER', alt2: 'Bröllop på en strand' },
    { nr: 3, alt1: 'Få ett frieri på storbildsskärm',  e: 'ELLER', alt2: 'Privat i en stuga i fjällen' },
    { nr: 4, alt1: 'Få regn på bröllopsdagen',  e: 'ELLER', alt2: 'Att toastmastern glömmer manus' },
    { nr: 5, alt1: 'Ta första dansen till Carola', e: 'ELLER',  alt2: 'Ta första dansen till PitBull' },
    { nr: 6, alt1: 'Festa till 05', e: 'ELLER',  alt2: 'Smita hem vid midnatt' },
    { nr: 7, alt1: 'Genomstekt, torrt kött till bröllopsmiddagen', e: 'ELLER',  alt2: 'Du och enstaka gäster hittar hårstrån i salladen' },
    { nr: 8, alt1: 'Åka på bröllopsresa till Svalbard', e: 'ELLER',  alt2: 'Åka på bröllopsresa till Turkmenistan' },
    { nr: 9, alt1: 'Glömma brudbuketten', e: 'ELLER',  alt2: 'Glömma slöjan' },
    { nr: 10, alt1: 'Gå barfota hela bröllopet',  e: 'ELLER', alt2: 'Ha skyhöga klackar hela dagen' },
    { nr: 11, alt1: 'Vara nykter hela dagen',  e: 'ELLER', alt2: 'Ha en shot i handen redan under sminkningen' },
    { nr: 12, alt1: 'Ha med ett ex på bröllopet',  e: 'ELLER', alt2: 'Råka bjuda din tråkigaste släkting' },
    { nr: 13, alt1: 'Gustaf sjunger en egenskriven låt till dig på bröllopet',  e: 'ELLER', alt2: 'Framföra en egengjord dans' },
    { nr: 14, alt1: 'Din mamma blir för full och ska hålla långt, pinsamt tal',  e: 'ELLER', alt2: 'Din pappa...' },
  ];

return (
    <main className="min-h-screen bg-violet-300 px-4 py-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-4xl font-bold text-indigo-900 mb-8">
        Vem känner bruden bäst? 👰
      </h1>

      <div className="w-full max-w-md grid grid-cols-4 gap-2 text-sm sm:text-base text-white">
        <div className="bg-violet-500 font-semibold text-center py-2">Nr</div>
        <div className="bg-violet-500 font-semibold text-center py-2">Alternativ 1</div>
          <div className="bg-violet-500 font-semibold text-center py-2"> </div>
        <div className="bg-violet-500 font-semibold text-center py-2">Alternativ 2</div>

        {questions.map((q) => (
          <>
            <div key={`nr-${q.nr}`} className="bg-violet-400 text-center py-2">{q.nr}</div>
            <div key={`alt1-${q.nr}`} className="bg-violet-400 text-center py-2">{q.alt1}</div>
             <div key={`e-${q.nr}`} className="bg-violet-400 text-center py-2">{q.e}</div>
            <div key={`alt2-${q.nr}`} className="bg-violet-400 text-center py-2">{q.alt2}</div>
          </>
        ))}
      </div>
    </main>
  );
}
