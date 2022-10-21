import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBooksStore, {
  selectFetchBooks,
  selectBooks,
  selectIsLoading,
} from "../stores/book";

const DetailsPage = () => {
  let { bookId } = useParams();

  const fetchBook = useBooksStore(selectFetchBooks);
  const dataBooks = useBooksStore(selectBooks);
  const isLoading = useBooksStore(selectIsLoading);

  useEffect(() => {
    // fetchBook(query);
  }, []);
  //   console.log(dataBooks.items.length);
  return (
    <>
      <section className="px-4 py-2 bg-slate-100">
        <div className="">{bookId}</div>
      </section>
    </>
  );
};

export default DetailsPage;
