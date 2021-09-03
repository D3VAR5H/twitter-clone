import React from "react";

import "./user-card.scss";

import placeholder from "../../media/placeholder_image.png"

const UserCard = (user) => {
	return (
		<div className="user">
			<div className="user-avatar">
				<img src={placeholder} />
				<span className="name">{user.name || "Twitter User"}</span>
				<span className="username">@{user.username || "twitter-user"}</span>
			</div>
			<div className="user-stats">
				<div>
					<div class="stat">
						<div class="stat-num">123</div>
						<div class="stat-title">Tweets</div>
					</div>
					<div class="stat-separator"></div>
				</div>
				<div>
					<div class="stat">
						<div class="stat-num">2345</div>
						<div class="stat-title">Followers</div>
					</div>
					<div class="stat-separator"></div>
				</div>
				<div>
					<div class="stat">
						<div class="stat-num">3681</div>
						<div class="stat-title">Following</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserCard;
