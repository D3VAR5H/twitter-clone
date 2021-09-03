import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";

const Routes = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Signup} />
					<PrivateRoute exact path="/home" component={Home} />
					<PrivateRoute exact path="/profile/:username" component={Profile} />
				</Switch>
			</Router>
		</>
	);
};

export default Routes;
