import axios from "axios";
import React, { useState } from "react";
import BookCard from "../components/BookCard";

function Home() {
	const [searchVal, setSearchVal] = useState();
	const [data, setData] = useState([]);

	const getBooks = async (e) => {
		e.preventDefault();
		setData((await axios(`https://openlibrary.org/search.json?title=${searchVal}&fields=key,title,cover_i&limit=15`)).data.docs);
	};

	console.log(data);

	return (
		<div className="wrapper-container font-pop">
			<form onSubmit={getBooks}>
				<div className="relative">
					<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
						<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
						</svg>
					</div>
					<input onChange={(val) => setSearchVal(val.target.value)} id="search" className="block w-full p-4 ps-10 mt-1 text-lg text-gray-900 border border-gray-300 rounded-lg bg-custom-colorTwo100 focus:ring-custom-colorTwo400 focus:border-custom-colorTwo400" placeholder="Please search book..." required />
					<button type="submit" className="text-custom-colorTwo100 absolute end-2.5 bottom-2.5 bg-custom-colorThree hover:bg-custom-colorThree  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">
						Search
					</button>
				</div>
			</form>
			{data && (
				<div className="bg-custom-colorTwo100 rounded-sm my-3 grid justify-items-center gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{data.map((book) => (
						<BookCard key={book.cover_i} book={book} />
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
