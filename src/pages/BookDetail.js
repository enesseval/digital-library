import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import coverImg from "../images/cover-not-found.jpg";

function BookDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    async function getBookDetails() {
      try {
        setLoading(true);
        const res = await axios(`https://openlibrary.org/works/${id}.json`);
        const data = res.data;

        if (data) {
          const {
            description,
            title,
            covers,
            subject_places,
            subject_times,
            subjects,
          } = data;
          const newBook = {
            description: description
              ? description.value
              : "No description found",
            title: title,
            covers: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(", ")
              : "No subject places found",
            subject_times: subject_times
              ? subject_times.join(", ")
              : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found",
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
    getBookDetails();
  }, []);

  console.log(book);

  if(loading) return <div>Loading...</div>

  return (
    <div className="wrapper-container mt-5">
      <button
        className="flex justify-center items-center"
        type="button"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft size={22} />
        <span className="text-semibold text-xl ml-3">Go Back</span>
      </button>

      <div className="grid md:grid-cols-2 mt-5">
        <div className="w-full flex items-start justify-center mt-3">
          <img src={book.covers} alt={book.title} />
        </div>
        <div className="mt-5 md:mt-0">
          <h1 className="font-bold text-center mb-3 text-2xl">{book.title}</h1>
          <p className="indent-7">{book.description}</p>
          <p className="mt-2 px-2 md:p-0"><span className="font-bold">Subject Places:</span> {book.subject_places}</p>
          <p className="mt-2 px-2 md:p-0"><span className="font-bold">Subject Times:</span> {book.subject_times}</p>
          <p className="mt-2 px-2 md:p-0"><span className="font-bold">Subjects:</span> {book.subjects}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
