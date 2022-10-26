import { useEffect } from "react";
import Surat from "../components/Surat";
import useQuranStore, {
  selectFetchListSurat,
  selectListSurat,
} from "../stores/quran";
import Layout from "./Layout";

const HomePage = () => {
  const listSurat = useQuranStore(selectListSurat);
  const fetchListSurat = useQuranStore(selectFetchListSurat);

  useEffect(() => {
    fetchListSurat();
  }, [listSurat.length]);

  return (
    <Layout>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-4 mb-2">
        {listSurat.map((surat) => (
          <Surat key={surat.id} surat={surat} />
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
