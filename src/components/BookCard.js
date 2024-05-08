import React, { useState, useEffect } from "react";
import axios from "axios";

function BookCard({ book }) {
	const [coverUrl, setCoverUrl] = useState(null);
	const [loading, setLoading] = useState(true); // Loading durumu için state eklendi

	useEffect(() => {
		const fetchCover = async () => {
			try {
				setCoverUrl(await ( await axios.get(`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`)).config.url);
			} catch (error) {
				console.error("Error fetching cover image:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCover();

		

	}, [book.cover_i]);

	return (
		<div className="book-card p-3 min-w-full flex justify-center items-center flex-col">
			{loading ? (
				<div>
					<div className="flex space-x-2 justify-center h-44 items-center ">
						<span className="sr-only">Loading...</span>
						<div className="h-8 w-8 bg-custom-colorTwo400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
						<div className="h-8 w-8 bg-custom-colorTwo400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
						<div className="h-8 w-8 bg-custom-colorTwo400 rounded-full animate-bounce"></div>
					</div>
				</div>
			) : (
				
				<div onClick={() => console.log("dsa")} className="relative cursor-pointer">
					<img className="rounded-md min-h-460 max-h-460" src={coverUrl} alt={`${book.title} cover`} />
					<h2 className={`w-full border-b border-slate-950 mt-2 text-center font-semibold text-l ${book.title.length >= 30 ? "truncated-title" : ""}`} data-title={book.title}>{book.title.length > 30 ? book.title.substring(0,30) + "..." : book.title}</h2>
				</div>
			)}
		</div>
	);
}

export default BookCard;
