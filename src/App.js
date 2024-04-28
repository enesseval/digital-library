import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./logo.jpg";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<BookDetail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
