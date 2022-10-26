import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../auth/firebase";
import Ayat from "../components/Ayat";
import useQuranStore, { selectAyatTersimpan } from "../stores/quran";
import Layout from "./Layout";

const ProfilePage = () => {
  const ayatTersimpan = useQuranStore(selectAyatTersimpan);
  const [user] = useAuthState(auth);

  return (
    <Layout>
      <div className="bg-white rounded p-4 flex flex-col sm:flex-row justify-between">
        <h1 className="font-bold">
          Selamat Datang, {user?.displayName ? user.displayName : ``}
        </h1>
        {user ? (
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            Email : {user.email}
          </span>
        ) : (
          ``
        )}
      </div>
      {ayatTersimpan.length ? (
        <div className="bg-white rounded p-4 mt-2">
          <div className="pb-2">
            <h1 className="font-bold">Ayat Tersimpan</h1>
          </div>
          <div className="grid gap-2">
            {ayatTersimpan?.map((ayat) => (
              <div
                key={ayat.id}
                className="bg-gray-100 py-2 px-1 rounded-lg group"
              >
                <div className="pb-2 flex justify-between h-8">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    {ayat.verse_key}
                  </span>
                  <Link
                    to={`/surat/${ayat.chapter_id}`}
                    className="md:hidden group-hover:block text-sm bg-white rounded py-1 px-2"
                  >
                    Lihat Surat Lengkap
                  </Link>
                </div>
                <div>
                  <Ayat ayat={ayat} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ``
      )}
    </Layout>
  );
};

export default ProfilePage;
