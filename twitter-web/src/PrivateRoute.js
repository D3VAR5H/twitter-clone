import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/navigation/Navigation"

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<>
                    <Navigation />
					<Component {...props} />
				</>
			)}
		/>
	);
};

export default PrivateRoute;
