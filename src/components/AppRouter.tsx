import { Route, Switch } from "react-router-dom";
import CompanyInfo from "./CompanyInfo";
import Home from "./Home";
import LoanInfo from "./LoanInfo";

export default function AppRouter() {
	return (
		<Switch>
			<Route path="/" exact component={Home}></Route>
			<Route path="/company-info" exact component={CompanyInfo}></Route>
			<Route path="/loan-info" exact component={LoanInfo}></Route>
		</Switch>
	);
}
