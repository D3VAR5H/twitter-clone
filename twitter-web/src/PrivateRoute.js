import React from "react";
import { Route, Redirect } from "react-router-dom";

import Navigation from "./components/navigation/Navigation";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const isLoggedIn = localStorage.getItem("isLoggedIn");

	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? (
					<>
						<Navigation />
						<div className="main">
							<Component {...props} />
						</div>
					</>
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

export default PrivateRoute;
