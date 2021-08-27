import React from "react";

import "./user-card.scss";

const UserCard = () => {
	return (
		<div className="user">
			<div className="user-avatar">
				<img src="" />
				<span className="name">Jon Doe</span>
				<span className="username">@jon-doe</span>
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
