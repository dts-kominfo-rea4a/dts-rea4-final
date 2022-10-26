import { useEffect } from "react";

import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import LoaderFull from "./LoaderFull";
import useQuranStore, {
  selectAyatTersimpan,
  selectStoreAyatLocal,
} from "../stores/quran";

const ProtectedComponent = ({
  children,
  title = "Quran API",
  withAuth = true,
}) => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const storeAyatLocal = useQuranStore(selectStoreAyatLocal);
  const ayatTersimpan = useQuranStore(selectAyatTersimpan);

  useEffect(() => {
    const ayatTersimpanLocal = JSON.parse(
      localStorage.getItem("quran:tersimpan")
    );
    if (ayatTersimpanLocal?.length) {
      storeAyatLocal(ayatTersimpanLocal);
    }
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!user && withAuth) {
      navigate("/login");
    }
    if (user && !withAuth) {
      navigate("/");
    }
  }, [user, isLoading]);

  return isLoading ? <LoaderFull /> : children;
};

export default ProtectedComponent;
