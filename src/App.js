import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Outlet,
} from "react-router-dom";

import "./App.css";
import { Header, Footer } from "components";
import Home from "pages/home/Home";

const RouteWithHAF = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<RouteWithHAF />}>
					<Route exact path="/" element={<Navigate to="/home" />} />
					<Route exact path="/home" element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
