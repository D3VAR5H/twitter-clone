import Api from "./Api";

export default {
	userLogin(credentials) {
		return Api().post("users/login", credentials);
	},
	userSignup(credentials) {
		return Api().post("users/signup", credentials);
	},
	getUser(userId) {
		return Api().get(userId === undefined || userId === "" || userId === null ? "users" : `users/${userId}`);
	},
	getTweetById(tweetId) {
		return Api().get(`tweets/${tweetId}`);
	},
	getAllTweets() {
		return Api().get("tweets");
	},
	getUserTweets(username) {
		return Api().get(`tweets/${username}`);
	},
	postTweet(message) {
		return Api().post("tweets/create", { message });
	},
};
