import { IoAddSharp } from "react-icons/io5";

function Header() {
  return (
    <header className="hidden tablet:block rounded-xl">
      <div className="bg-yellow-300 flex flex-col items-stretch">
        {/* Container principale */}
        <div className="relative flex flex-wrap justify-center items-center gap-4 py-4">
          {/* DER */}
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl py-3 px-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-60">
            <h2 className="text-xl font-semibold text-white mb-2">Der</h2>
            <div className="flex justify-center gap-2">
              <Badge color="bg-green-500" title="Gemerkt" />
              <Badge color="bg-yellow-500" title="Noch zu verbessern" />
              <Badge color="bg-red-400" title="Zum Nachlernen" />
              <Badge color="bg-blue-400" title="Gerade erstellt" />
            </div>
          </div>

          {/* DIE */}
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl py-3 px-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-60">
            <h2 className="text-xl font-semibold text-white mb-2">Die</h2>
            <div className="flex justify-center gap-2">
              <Badge color="bg-green-500" title="Gemerkt" />
              <Badge color="bg-yellow-500" title="Noch zu verbessern" />
              <Badge color="bg-red-400" title="Zum Nachlernen" />
              <Badge color="bg-blue-400" title="Gerade erstellt" />
            </div>
          </div>

          {/* DAS */}
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl py-3 px-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-60">
            <h2 className="text-xl font-semibold text-white mb-2">Das</h2>
            <div className="flex justify-center gap-2">
              <Badge color="bg-green-500" title="Gemerkt" />
              <Badge color="bg-yellow-500" title="Noch zu verbessern" />
              <Badge color="bg-red-400" title="Zum Nachlernen" />
              <Badge color="bg-blue-400" title="Gerade erstellt" />
            </div>
          </div>

          {/* WORT ERSTELLEN */}
          <div className="flex items-center justify-center">
            <button className="bg-lime-500 flex items-center py-4 px-8 rounded-xl text-gray-800 font-semibold text-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
              Ein Wort mit Artikel erstellen
              <IoAddSharp className="rounded-full w-8 h-8 bg-green-700 text-white ml-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Badge({ color, title }) {
  return (
    <span
      title={title}
      className={`${color} flex items-center justify-center cursor-pointer rounded-full w-5 h-5 text-[10px] text-gray-600 font-bold shadow-md`}
    >
      0
    </span>
  );
}

export default Header;
