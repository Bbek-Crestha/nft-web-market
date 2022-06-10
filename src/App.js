import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Outlet,
} from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import { Header, Footer } from "components";
import Home from "pages/home/Home";

const RouteWithHAF = () => {
	return (
		<>
			<Header />
			<Box sx={{ marginTop: "4rem" }}>
				<Outlet />
			</Box>
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
