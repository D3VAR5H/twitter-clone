import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserCard from "../../components/user-card/UserCard";
import TweetCard from "../../components/tweet-card/TweetCard";

import "./profile.scss";
import ApiService from "../../services/ApiService";

const Profile = (props) => {
	const { username } = useParams();
	const [user, setUser] = useState({});
	const [tweets, setTweets] = useState([]);

	useEffect(() => {
		ApiService.getUser(username).then((res) => setUser(res.data.user));
	}, []);

	useEffect(() => {
		if (user._id) {
			ApiService.getUserTweets(user._id).then((res) => setTweets(res.data.tweets));
		}
	}, [user]);

	return (
		<div className="profile-container">
			<div className="left-section">
				<div className="wrapper">
					<UserCard {...user} />
				</div>
				<div className="follow-btn">
					<button>Follow</button>
				</div>
			</div>
			<div className="right-section">
				{tweets?.map((tweet) => (
					<TweetCard {...tweet} />
				))}
			</div>
		</div>
	);
};

export default Profile;
