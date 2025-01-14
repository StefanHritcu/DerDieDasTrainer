import { IoAddSharp } from "react-icons/io5";

function MobileHeader() {
  return (
    <header className="tablet:hidden pb-6 bg-yellow-300">
      <div className="flex justify-center items-center bg-yellow-300 gap-4 p-4">
        {/* DER */}
        <div className="flex flex-col  items-center bg-gradient-to-r xs2:px-3 from-blue-500 to-purple-600 rounded-lg py-3 px-2 shadow-md w-full max-w-xs">
          <h2 className="text-lg font-semibold text-white">Der</h2>
          <div className="flex justify-center mt-2">
            <Badge color="bg-green-500" title="Gemerkt" />
            <Badge color="bg-yellow-500" title="Noch zu verbessern" />
            <Badge color="bg-red-400" title="Zum Nachlernen" />
            <Badge color="bg-blue-400" title="Gerade erstellt" />
          </div>
        </div>

        {/* DIE */}
        <div className="flex flex-col items-center bg-gradient-to-r xs2:px-3 from-blue-500 to-purple-600 rounded-lg py-3 px-2 shadow-md w-full max-w-xs">
          <h2 className="text-lg font-semibold text-white">Die</h2>
          <div className="flex justify-center mt-2">
            <Badge color="bg-green-500" title="Gemerkt" />
            <Badge color="bg-yellow-500" title="Noch zu verbessern" />
            <Badge color="bg-red-400" title="Zum Nachlernen" />
            <Badge color="bg-blue-400" title="Gerade erstellt" />
          </div>
        </div>

        {/* DAS */}
        <div className="flex flex-col items-center bg-gradient-to-r xs2:px-3 from-blue-500 to-purple-600 rounded-lg py-3 px-2 shadow-md w-full max-w-xs">
          <h2 className="text-lg font-semibold text-white">Das</h2>
          <div className="flex justify-center mt-2">
            <Badge color="bg-green-500" title="Gemerkt" />
            <Badge color="bg-yellow-500" title="Noch zu verbessern" />
            <Badge color="bg-red-400" title="Zum Nachlernen" />
            <Badge color="bg-blue-400" title="Gerade erstellt" />
          </div>
        </div>
      </div>

      {/* WORT ERSTELLEN */}
      <div className="flex items-center justify-center">
        <button className="bg-lime-500 flex items-center h-[80px] w-auto py-3 px-6 rounded-lg text-gray-800 font-semibold text-sm shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105">
          <IoAddSharp className="rounded-full w-6 h-6 bg-green-700 text-white ml-3" />
          <p className="text-white ml-6">Hinzufügen</p>
        </button>
      </div>
    </header>
  );
}

function Badge({ color, title }) {
  return (
    <span
      title={title}
      className={`${color} flex items-center justify-center cursor-pointer rounded-full sm:mx-[1.5px] sm2:mx-[2.5px] w-5 h-5 text-[10px] text-gray-600 font-bold shadow-md`}
    >
      0
    </span>
  );
}

export default MobileHeader;
