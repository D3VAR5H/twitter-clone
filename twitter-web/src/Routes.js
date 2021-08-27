import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

const Routes = () => {
	return (
		<>
			<Router>
				<Switch>
					<PrivateRoute exact path="/home" component={Home} />
					<PrivateRoute exact path="/profile" component={Profile} />
				</Switch>
			</Router>
		</>
	);
};

export default Routes;
