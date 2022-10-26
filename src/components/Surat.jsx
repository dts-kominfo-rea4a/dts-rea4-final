import { Link } from "react-router-dom";
import mosque from "../mosque.jpg";

const Surat = ({ surat }) => {
  return (
    <article>
      <Link to={`/surat/${surat.id}`}>
        <div className="group bg-white flex flex-row h-32 overflow-hidden relative rounded-lg shadow-md text-grey-darkest">
          <img
            className="hidden sm:block sm:w-16 aspect-square"
            src={mosque}
            alt="Surat"
          />
          <div className="absolute right-0 w-16 py-2 leading-none text-center whitespace-nowrap font-bold bg-blue-600 group-hover:bg-blue-800 text-white rounded-full pr-3 -mr-3">
            {surat.id}
          </div>
          <div className="w-full flex flex-col group-hover:text-blue-600">
            <div className="px-4 py-3 flex-1">
              <h3 className="font-bold mb-1 text-grey-darkest">
                {surat.name_simple}
              </h3>
              <div className="text-sm">
                <div className="pr-1">{surat.translated_name?.name}</div>
              </div>
              <div className="flex items-center mb-2 text-xs">
                <div className="pr-1">{surat.verses_count} Ayat</div>
                <div className="px-1">•</div>
                <div className="pl-1">{surat.revelation_place}</div>
              </div>
              <div className="text-4xl text-grey-darkest text-right group-hover:-mt-4">
                {surat.name_arabic}
              </div>
            </div>

            <div className="hidden md:group-hover:flex absolute h-full left-0 bg-white flex items-center justify-center w-16 text-center">
              <span className="text-blue-600" title="Lihat Surat">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
export default Surat;
