import { useEffect, useState } from "react";
import useQuranStore, {
  selectAyatTersimpan,
  selectStoreAyat,
} from "../stores/quran";
import Marker from "./Marker";
import MarkerLine from "./MarkerLine";

const Ayat = ({ ayat }) => {
  const storeAyat = useQuranStore(selectStoreAyat);
  const ayatTersimpan = useQuranStore(selectAyatTersimpan);
  const [isTersimpan, setIsTersimpan] = useState(false);
  useEffect(() => {
    // console.log("pertama kali", ayatTersimpan);
    setIsTersimpan(ayatTersimpan.filter((x) => x.id === ayat.id).length > 0);
    // const apakah = ayatTersimpan.filter((x) => x.id == ayat.id).length > 0;
    // console.log(`Ayat id : ${ayat.id} tersimpan : ${apakah}`);
  }, [ayat, ayatTersimpan.length]);
  const handleSave = (e) => {
    storeAyat(ayat);
  };
  return (
    <div className="group relative">
      <article className="bg-white hover:bg-slate-100 cursor-default flex flex-row overflow-hidden relative rounded-lg shadow-md text-grey-darkest">
        <div className="px-4 py-6 w-full">
          <div className="bg-blue-700 absolute top-0 left-0 w-14 text-sm text-white text-center rounded-lg -ml-2 pl-2 py-1">
            {ayat?.verse_number}
          </div>
          <div className="text-right text-3xl pt-2 pl-16">
            {ayat?.text_madani}
          </div>
          <hr className="my-3" />
          <div
            dangerouslySetInnerHTML={{ __html: ayat?.translations[0]?.text }}
          ></div>
        </div>
      </article>
      <div
        className={`${
          isTersimpan ? `` : `md:hidden group-hover:block`
        } top-8 absolute md:top-0 w-12 md:-right-12 h-full`}
      >
        <div className="bg-white rounded-lg text-center absolute ml-2 shadow-md">
          <button
            onClick={handleSave}
            className="py-1 rounded mx-1 text-sm bg-white text-blue-700"
          >
            {isTersimpan ? <Marker /> : <MarkerLine />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ayat;
