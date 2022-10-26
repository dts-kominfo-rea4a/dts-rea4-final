import { Link } from "react-router-dom";

const SuratCard = () => {
  return (
    <article className="bg-white flex flex-col max-w-xs mx-auto overflow-hidden rounded-lg shadow">
      <img
        src="https://m.media-amazon.com/images/M/MV5BZjUyOTJlZmMtMzVkNS00MTNkLTk5ZTAtOTEzNWMwNmNiY2MyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        alt="Dr. Zoidberg holding out his claws"
      />
      <div className="px-4 py-6">
        <h2 className="font-bold text-2xl">Dr. John A. Zoidberg</h2>
        <dl>
          <dt className="font-bold mt-2">First appearance:</dt>
          <dd>"The Series has landed"</dd>

          <dt className="font-bold mt-2">Voiced by:</dt>
          <dd>Billy West</dd>
        </dl>
        <Link to={`/surat/1`}>Detail</Link>
      </div>
    </article>
  );
};

export default SuratCard;
