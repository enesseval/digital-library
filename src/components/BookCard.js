import React, { useState, useEffect } from "react";
import axios from "axios";

import coverNotFound from "../images/cover-not-found.jpg"
import { Link } from "react-router-dom";

function BookCard({ book }) {
	const [coverUrl, setCoverUrl] = useState(null);
	const [loading, setLoading] = useState(true); // Loading durumu için state eklendi

	useEffect(() => {
		const fetchCover = async () => {
			try {
				book.cover_i ? setCoverUrl(await ( await axios.get(`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`)).config.url) : setCoverUrl(coverNotFound)
				
			} catch (error) {
				console.error("Error fetching cover image:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchCover();
	}, [book.cover_i]);

	return (
		
		<div className="cursor-pointer flex flex-col justify-between px-12 py-8 rounded-md bg-white transition-all duration-300 ease-in-out shadow-book-shadow hover:shadow-book-shadow-hover">
			<Link to={`/detail/${book.key.replace("/works/","")}`}>
			<div>
				<img className="mx-auto max-w-48" src={coverUrl} alt={`${book.title} cover`} />
			</div>
			<div className=" text-center mt-8">
				
				<div className="mb-4 leading-tight font-semibold text-xl">
					<span>{book.title}</span>
				</div>
				
			</div>
			</Link>
		</div>
	);
}

export default BookCard;
