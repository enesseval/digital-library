import React, { useState, useEffect } from "react";
import axios from "axios";

function BookCard({ book }) {
	const [coverUrl, setCoverUrl] = useState(null);
	const [loading, setLoading] = useState(true); // Loading durumu için state eklendi

	useEffect(() => {
		const fetchCover = async () => {
			try {
				setCoverUrl(await (await axios.get(`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`)).config.url);
			} catch (error) {
				console.error("Error fetching cover image:", error);
			} finally {
				setLoading(false); // İstek tamamlandığında loading'i false yap
			}
		};

		fetchCover();

		// useEffect'ten dönüş olarak temizleme fonksiyonu döndürülebilir, ancak bu durumda gerekli değil.
	}, [book.cover_i]);

	return (
		<div className="book-card p-3    ">
			{loading ? (
				<div>
					<div class="flex space-x-2 justify-center h-44 items-center ">
						<span class="sr-only">Loading...</span>
						<div class="h-8 w-8 bg-custom-colorTwo400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
						<div class="h-8 w-8 bg-custom-colorTwo400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
						<div class="h-8 w-8 bg-custom-colorTwo400 rounded-full animate-bounce"></div>
					</div>
				</div>
			) : (
				<img className="rounded-md" src={coverUrl} alt={`${book.title} cover`} />
			)}
		</div>
	);
}

export default BookCard;
