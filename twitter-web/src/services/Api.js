import axios from "axios";

export default () => {
	return axios.create({
		baseURL: "http://localhost:8080",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});
};
