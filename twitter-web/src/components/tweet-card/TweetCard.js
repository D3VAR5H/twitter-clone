import React from "react";
import { NavLink } from "react-router-dom";

import "./tweet-card.scss";

import placeholder from "../../media/placeholder_image.png"

const TweetCard = (tweet) => {
	return (
		<div className="tweet">
			<NavLink to={`/profile/${tweet.user?.username}`}>
				<div className="tweet-profile">
					<img src={placeholder} />
				</div>
			</NavLink>
			<div className="tweet-main">
				<NavLink to={`/profile/${tweet.user?.username}`}>
					<div className="heading">
						<span className="name">{tweet.user?.name}</span>
						<span className="username">@{tweet.user?.username}</span>
					</div>
				</NavLink>
				<div className="content">
					<p>{tweet.message}</p>
				</div>
			</div>
		</div>
	);
};

export default TweetCard;
