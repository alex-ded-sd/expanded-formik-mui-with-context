import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { AppContextProvider } from "./AppContext";
import AppRouter from "./components/AppRouter";

function App() {
	return (
		<div>
			<nav style={{ marginBottom: "100px" }}>
				<h1>Hello</h1>
				<div>
					<Link to="/company-info">Company info</Link>
				</div>
				<div>
					<Link to="/Loan-info">Loan info</Link>
				</div>
			</nav>
			<main
				style={{ backgroundColor: "rgba(211,211,211,0.4)", height: "500px" }}
			>
				<Box justifyContent="center" alignItems="center" display="flex">
					<AppContextProvider>
						<AppRouter />
					</AppContextProvider>
				</Box>
			</main>
		</div>
	);
}

export default App;
