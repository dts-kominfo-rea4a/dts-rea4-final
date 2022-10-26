import BtnToTop from "../components/BtnToTop";
import Loader from "../components/Loader";
import LoaderFull from "../components/LoaderFull";
import Toast from "../components/Toast";
import useQuranStore, { selectIsLoading } from "../stores/quran";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  const isLoading = useQuranStore(selectIsLoading);

  return isLoading ? (
    <LoaderFull />
  ) : (
    <div>
      <div className="bg-slate-300 pb-2 min-h-screen">
        <NavBar />
        <div className="max-w-screen-md mx-auto">
          <div className="pt-18 px-2">{children}</div>
        </div>
      </div>
      <Toast />
      <BtnToTop />
      <Loader visible={isLoading} />
    </div>
  );
};
export default Layout;
