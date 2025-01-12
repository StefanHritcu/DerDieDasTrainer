import { useState } from "react";
import Homepage from "./Homepage";
import { useEffect } from "react";

const phrases = [
  "Der Sinn des Lebens ist, dem Leben einen Sinn zu geben.",
  "Glück ist nicht etwas, das man findet, sondern etwas, das man erschafft.",
  "Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar.",
  "Es gibt keinen Weg zum Glück. Glücklichsein ist der Weg.",
  "Wer aufhört, besser zu werden, hat aufgehört, gut zu sein.",
  "Die schwierigste Zeit im Leben ist die beste Gelegenheit, innere Stärke zu entwickeln.",
  "Das Leben ist wie ein Buch. Jeden Tag schreiben wir eine neue Seite.",
  "Jeder Tag ist ein neuer Anfang.",
  "Der einzige Weg, großartige Arbeit zu leisten, ist, zu lieben, was man tut.",
  "Es ist nicht die Zeit, die vergeht, sondern wir, die uns verändern.",
  "Die Dinge sind nie so, wie sie sind. Sie sind immer das, was man aus ihnen macht.",
  "Lernen ist wie Rudern gegen den Strom. Sobald man aufhört, treibt man zurück.",
  "Ein Lächeln kostet nichts, aber es gibt viel.",
  "Veränderung beginnt in uns selbst.",
  "Die größten Abenteuer warten außerhalb der Komfortzone.",
  "Wer den Mut hat, seine Träume zu verfolgen, kann Berge versetzen.",
  "Geduld ist der Schlüssel zur Freude.",
  "Ein guter Tag beginnt mit einem positiven Gedanken.",
  "Hoffnung ist der erste Schritt zum Erfolg.",
  "Träume nicht dein Leben, sondern lebe deinen Traum.",
  "Es gibt keine Abkürzungen zum Glück.",
  "Erfolg ist die Summe richtiger Entscheidungen.",
  "Das Geheimnis des Glücks liegt nicht im Besitz, sondern im Geben.",
  "Die beste Zeit, einen Baum zu pflanzen, war vor 20 Jahren. Die zweitbeste Zeit ist jetzt.",
  "Liebe das Leben, das du lebst. Lebe das Leben, das du liebst.",
  "Der Weg ist das Ziel.",
  "Echte Stärke zeigt sich im Umgang mit Schwäche.",
  "Zufriedenheit ist der wahre Reichtum.",
  "Das Leben ist wie ein Spiegel: Lächelt man hinein, lächelt es zurück.",
  "Der Mut, etwas Neues zu beginnen, ist die halbe Miete.",
  "Ein Problem ist eine Gelegenheit, das Beste zu geben.",
  "Man kann nicht zurückgehen und den Anfang ändern, aber man kann starten, wo man ist, und das Ende verändern.",
  "Zeit ist kostbarer als Gold.",
  "Gute Freunde sind wie Sterne. Du kannst sie nicht immer sehen, aber du weißt, dass sie da sind.",
  "Manchmal ist der schwierigste Weg der richtige Weg.",
  "Die wahre Kunst des Lebens besteht darin, im Regen zu tanzen, statt auf die Sonne zu warten.",
  "Es ist nicht wichtig, was andere über dich denken. Wichtig ist, was du über dich denkst.",
  "Wer wagt, gewinnt.",
  "Die schönsten Dinge im Leben sind nicht die, die man sehen oder anfassen kann, sondern die, die man im Herzen fühlt.",
  "Das Leben ist kurz. Lächle, solange du noch Zähne hast.",
];

function App() {
  const [currentPhrase, setCurrentPhrase] = useState("");

  useEffect(() => {
    const changePhrase = () => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[randomIndex]);
    };
    changePhrase();
    const interval = setInterval(changePhrase, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center overflow-hidden w-screen h-screen bg-yellow-300">
        {/* KREIS MIT EINEM LAECHELNDEN EMOJI UND DEM TEXT hallo */}
        <div className="absolute flex items-center justify-center z-20 tablet:z-0 left-1 top-4 w-[80px] h-[80px] tablet:w-[160px] tablet:h-[160px] rounded-full bg-orange-400">
          <div className="flex flex-col text-center rotate-14">
            <span className="text-white font-bold text-xl tablet:text-2xl">
              Hallo!
            </span>
            <p className="text-3xl">😊</p>
          </div>
        </div>

        {/* KREIS MIT EINEM LAECHELNDEN EMOJI UND DEM TEXT hallo */}
        <div className="absolute right-2 tablet:right-14 top-6 z-20 tablet:z-0 rotate-16">
          <div className="w-20 tablet:w-32 h-4 tablet:h-8 bg-black"></div>
          <div className="w-20 tablet:w-32 h-4 tablet:h-8 bg-red-600"></div>
          <div className="w-20 tablet:w-32 h-4 tablet:h-8 bg-yellow-500"></div>
        </div>
        {/* Zufälliger Satz alle 60 Sekunden */}
        <div className="absolute max-w-[200px] tablet:max-w-[600px] flex items-center justify-center top-2 z-30 w-full text-center text-black text-sm tablet:text-2xl font-semibold">
          {currentPhrase}
        </div>
        <Homepage />
      </div>
    </>
  );
}

export default App;
