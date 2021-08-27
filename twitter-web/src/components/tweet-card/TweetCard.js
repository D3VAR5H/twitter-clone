import React from "react";

import "./tweet-card.scss";

const TweetCard = () => {
	return (
		<div className="tweet">
			<div className="tweet-profile">
				<img src="" />
			</div>
			<div className="tweet-main">
				<div className="heading">
					<span className="name">Jon Doe</span>
					<span className="username">@jon-doe</span>
				</div>
				<div className="content">
					<p>message</p>
					<img src="" />
				</div>
			</div>
		</div>
	);
};

export default TweetCard;
