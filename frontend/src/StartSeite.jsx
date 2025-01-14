import { FaPencil, FaBook } from "react-icons/fa6";
import { BsRepeat } from "react-icons/bs";

function StartSeite() {
  return (
    <>
      <div className="bg-anotherSpecialBlue text-white w-screen h-auto py-10 flex flex-col items-center">
        <h4 className="text-specialYellow font-semibold text-xl">Services</h4>
        <h1 className="font-extrabold text-[56px]">German Articles Training</h1>

        <div className="flex justify-around items-center my-16">
          {/* Artikeltraining */}
          <div className="max-w-[220px]">
            <div className="w-32 h-32 bg-white rounded-full mx-auto justify-center items-center flex">
              <FaPencil className="text-anotherSpecialBlue w-12 h-12" />
            </div>
            <h2 className="text-[30px] font-semibold text-center my-2">
              Artikeltraining
            </h2>
            <p className="text-center">
              Übungen zum Lernen der Artikel (tägliche Wiederholung der
              erstellten Artikel bis zur Erinnerung)
            </p>
          </div>

          {/* Artikeltraining */}
          <div className="max-w-[220px] mx-48">
            <div className="w-32 h-32 bg-white rounded-full mx-auto justify-center items-center flex">
              <BsRepeat className="text-anotherSpecialBlue w-12 h-12" />
            </div>
            <h2 className="text-[30px] font-semibold text-center my-2">
              Wiederholung
            </h2>
            <p className="text-center">
              Tägliche Wiederholung des Artikels im Laufe der Zeit, bis zur
              dauerhaften Erinnerung an den Artikel
            </p>
          </div>

          {/* Artikeltraining */}
          <div className="max-w-[220px]">
            <div className="w-32 h-32 bg-white rounded-full mx-auto justify-center items-center flex">
              <FaBook className="text-anotherSpecialBlue w-12 h-12" />
            </div>
            <h2 className="text-[30px] font-semibold text-center my-2">
              Deklinationen
            </h2>
            <p className="text-center">
              Allgemeine Grundlagen für die Deklination von Substantiven
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartSeite;
