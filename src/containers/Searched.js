import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Searched.css";

const Searched = () => {
    const [searchMovies, setSearchMovies] = useState([]);
    const MY_API_KEY = "ead655b7daa5e197959b5e726f5833ab";
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${name}`
        );
        const searchData = await data.json();
        setSearchMovies(searchData.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <>
            <main id="site-main" className="site-main">
                <section className="is-section section-search-result pd-screen">
                    <h2>{searchMovies.title}</h2>
                    <div className="search-result">
                        {searchMovies.map((item) => {
                            return (
                                <div
                                    className="search-result-item"
                                    key={item.id}
                                >
                                    <Link to={"/movie/" + item.id}>
                                        <h3 className="entry-title">
                                            {item.title}
                                        </h3>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </>
    );
};

export default Searched;
