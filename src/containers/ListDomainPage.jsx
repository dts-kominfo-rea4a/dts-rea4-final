import { useEffect } from "react";
import { Plus, Clock, CheckCircle } from "react-feather";
import useJadwalSholatStore, {
  selectJadwalSholat,
  selectListKota,
  selectIsLoading,
  selectError,
  selectFetchJadwalSholat,
  selectFetchListKota,
} from "../stores/jadwalsholat";

const ListDomainPage = () => {
  const fetchJadwalSholat = useJadwalSholatStore(selectFetchJadwalSholat);
  const fetchListKota = useJadwalSholatStore(selectFetchListKota);
  const jadwalSholatLoading = useJadwalSholatStore(selectIsLoading);
  const jadwalSholatError = useJadwalSholatStore(selectError);
  const jadwalSholat = useJadwalSholatStore(selectJadwalSholat);
  const listKota = useJadwalSholatStore(selectListKota);

  useEffect(() => {
    fetchListKota();
  }, []);

  return (
    <>
      <section className="px-4 py-6 mb-3">
        <div className="flex flex-wrap items-center justify-between mb-3">
          <h2 className="mb-2 text-2xl font-bold uppercase text-primary">
            List Domain
          </h2>
          <a
            href="#"
            className="inline-flex items-center pr-3 mb-2 mr-2 overflow-hidden text-sm font-medium tracking-wide text-center text-white uppercase rounded-lg bg-primary hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-primary/50"
          >
            <Plus className="w-10 h-10 p-2 mr-2 bg-dark-primary" />
            Tambah Domain
          </a>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="drop-shadow-lg flex w-full bg-white aspect-[6/2] md:aspect-[8/2] rounded-lg overflow-hidden group relative hover:bg-slate-50">
            <div className="flex-none w-1 bg-primary group-hover:bg-primary/80"></div>
            <div className="self-center mx-4 text-2xl font-bold text-slate-900">
              <div className="py-3 mt-2">fasly.com</div>
              <div className="flex items-center pb-2 text-sm font-semibold">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Active
              </div>
            </div>
          </div>
          <div className="drop-shadow-lg flex w-full bg-white aspect-[6/2] md:aspect-[8/2] rounded-lg overflow-hidden group relative hover:bg-slate-50">
            <div className="flex-none w-1 bg-primary group-hover:bg-primary/80"></div>
            <div className="self-center mx-4 text-2xl font-bold text-slate-900">
              <div className="py-3 mt-2">fasly.com</div>
              <div className="flex items-center pb-2 text-sm font-semibold">
                <Clock className="w-5 h-5 mr-2 text-yellow-600" /> Pending Name
                Server Update
              </div>
            </div>
          </div>
          <div className="drop-shadow-lg flex w-full bg-white aspect-[6/2] md:aspect-[8/2] rounded-lg overflow-hidden group relative hover:bg-slate-50">
            <div className="flex-none w-1 bg-primary group-hover:bg-primary/80"></div>
            <div className="self-center mx-4 text-2xl font-bold text-slate-900">
              <div className="py-3 mt-2">fasly.com</div>
              <div className="flex items-center pb-2 text-sm font-semibold">
                <Clock className="w-5 h-5 mr-2 text-yellow-600" /> Status Name
                Server Update
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListDomainPage;
