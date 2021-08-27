import React from "react";

import UserCard from "../../components/user-card/UserCard";
import TweetCard from "../../components/tweet-card/TweetCard";

import "./profile.scss";

const Profile = () => {
	return (
		<div className="profile-container">
			<div className="left-section">
				<div className="wrapper">
					<UserCard />
				</div>
				<div className="follow-btn">
					<button>Follow</button>
				</div>
			</div>
			<div className="right-section">
				<TweetCard />
				<TweetCard />
				<TweetCard />
				<TweetCard />
				<TweetCard />
				<TweetCard />
				<TweetCard />
				<TweetCard />
			</div>
		</div>
	);
};

export default Profile;
