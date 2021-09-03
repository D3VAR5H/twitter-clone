import React, { useState } from "react";
import redirect from "react-router-dom";

import ApiService from "../../services/ApiService";

import "./signup.scss";

const Signup = (props) => {
	const [login, setLogin] = useState(true);

	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
		verify_password: "",
		name: "",
	});

	const submitHandler = (e) => {
		e.preventDefault();

		if (login) {
			ApiService.userLogin(credentials).then((res) => {
				localStorage.setItem("isLoggedIn", true);
				localStorage.setItem("token", res.data.token);
				props.history.push("/home");
			});
		} else {
			ApiService.userSignup(credentials).then((res) => {
				setLogin(true);
			});
		}
	};

	return (
		<>
			<form onSubmit={submitHandler}>
				<input defaultChecked={login} id="signin" name="action" type="radio" value="signin" />
				<label for="signin" onClick={() => setLogin(true)}>
					Sign in
				</label>
				<input defaultChecked={!login} id="signup" name="action" type="radio" value="signup" />
				<label for="signup" onClick={() => setLogin(false)}>
					Sign up
				</label>
				<div id="wrapper">
					<div id="arrow"></div>
					{!login && (
						<input
							id="name"
							value={credentials.name}
							onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
							placeholder="Name"
							type="text"
						/>
					)}
					<input
						id="username"
						value={credentials.username}
						onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
						placeholder="Username"
						type="text"
					/>
					<input
						id="password"
						value={credentials.password}
						onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
						placeholder="Password"
						type="password"
					/>
					{!login && (
						<input
							id="verify_password"
							value={credentials.verify_password}
							onChange={(e) => setCredentials({ ...credentials, verify_password: e.target.value })}
							placeholder="Repeat password"
							type="password"
						/>
					)}
				</div>
				<button type="submit">
					<span>{login ? "Sign in" : "Sign up"}</span>
				</button>
			</form>
			<div id="hint">Click on the tabs</div>
		</>
	);
};

export default Signup;
