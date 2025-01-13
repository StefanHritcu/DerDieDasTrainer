import { useState } from "react";
import Homepage from "./Homepage";
import { useEffect } from "react";

const phrases = [
  "Das Leben gibt dir den Sinn, wenn du ihm einen gibst.",
  "Glück entsteht durch Schaffen, nicht Finden.",
  "Wer aufhört, besser zu werden, verliert seine Güte.",
  "Jeder Tag ist ein neuer Anfang.",
  "Lieb deine Arbeit, dann wird sie großartig.",
  "Nicht die Zeit vergeht, sondern wir verändern uns.",
  "Dinge sind, was du aus ihnen machst.",
  "Lernen ist wie Rudern – ohne Antrieb treibt man zurück.",
  "Ein Lächeln kostet nichts, aber macht viel.",
  "Veränderung beginnt bei uns selbst.",
  "Abenteuer warten außerhalb der Komfortzone.",
  "Wer seine Träume verfolgt, kann alles erreichen.",
  "Geduld führt zur Freude.",
  "Ein guter Tag beginnt mit einem positiven Gedanken.",
  "Hoffnung ist der erste Schritt zum Erfolg.",
  "Lebe nicht nur deinen Traum, sondern träume dein Leben.",
  "Zum Glück gibt es keine Abkürzung.",
  "Erfolg ergibt sich aus richtigen Entscheidungen.",
  "Glück liegt im Geben, nicht im Besitzen.",
  "Lebe das Leben, das du liebst und liebe es.",
  "Der Weg ist das Ziel.",
  "Echte Stärke zeigt sich in Schwäche.",
  "Zufriedenheit ist wahres Glück.",
  "Das Leben lächelt dir zurück, wenn du ihm lächelst.",
  "Der Mut, etwas Neues zu beginnen, bringt dich voran.",
  "Ein Problem ist eine Chance, das Beste zu geben.",
  "Zeit ist wertvoller als Gold.",
  "Freunde sind wie Sterne – du weißt, dass sie da sind.",
  "Manchmal ist der richtige Weg der schwerste Weg.",
  "Leben bedeutet, im Regen zu tanzen, nicht auf die Sonne zu warten.",
  "Wer wagt, gewinnt.",
  "Die schönsten Dinge spürt man im Herzen, nicht mit den Händen.",
  "Das Leben ist kurz – lächle, solange du noch Zähne hast.",
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
      <div className="relative flex items-center justify-center overflow-hidden w-screen h-auto bg-yellow-300">
        {/* KREIS MIT EINEM LAECHELNDEN EMOJI UND DEM TEXT hallo */}
        <div className="hidden laptop:block">
          <div className="absolute flex items-center justify-center z-20 tablet:z-50 left-1 top-4 w-[80px] h-[80px] tablet:w-[160px] tablet:h-[160px] rounded-full bg-orange-400">
            <div className="flex flex-col text-center rotate-14">
              <span className="text-white font-bold text-xl tablet:text-2xl">
                Hallo!
              </span>
              <p className="text-3xl">😊</p>
            </div>
          </div>
        </div>

        {/* Deutsche Flagge */}
        <div className="hidden laptop:block">
          <div className="absolute right-2 tablet:right-14 top-6 z-20 tablet:z-50 rotate-16">
            <div className="w-20 tablet:w-32 h-4 tablet:h-8 bg-black"></div>
            <div className="w-20 tablet:w-32 h-4 tablet:h-8 bg-red-600"></div>
            <div className="w-20 tablet:w-32 h-4 tablet:h-8 bg-yellow-500"></div>
          </div>
        </div>
        {/* Zufälliger Satz alle 60 Sekunden */}
        <div className="absolute max-w-[140px] sm:max-w-[200px] tablet:max-w-[600px] flex items-center justify-center top-4 z-30 w-full text-center text-black text-[12px] sm:text-sm tablet:text-2xl font-semibold">
          {currentPhrase}
        </div>
        <Homepage />
      </div>
    </>
  );
}

export default App;
