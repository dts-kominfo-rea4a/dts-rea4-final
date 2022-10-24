import "./Banner.css";
// import requests from "../Requests";

const Banner = ({ select, is_single }) => {
  // const genres = await axios.get(requests.getGenres);
  
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };
  console.log(select);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${select?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {select?.title || select?.name || select?.original_name}
        </h1>
        <ul className="banner__genree">
          {select.genres?.map((genre) => (
            <li key={genre?.id}>{genre?.name}</li>
          ))}
        </ul>
        <p className="banner__description">{truncate(select?.overview, 150)}</p>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
