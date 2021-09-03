import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ApiService from "../../services/ApiService";

import "./tweetform.scss";

const TweetForm = ({ modalCloseHandler, ...user }) => {
	const [message, setMessage] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (message) ApiService.postTweet(message).then(modalCloseHandler);
	};

	return (
		<form className="tweet-wrapper" onSubmit={handleSubmit}>
			<div className="cmd">
				<FaTimes className="form_close" onClick={modalCloseHandler} />
				<div className="title-bar">
					{user.name} @{user.username} <muted>tweets...</muted>
				</div>
				<textarea className="textarea" placeholder="Tell me something juicy" onChange={(e) => setMessage(e.target.value)} />
				<button type="submit">
					<span>Send</span>
				</button>
			</div>
		</form>
	);
};

export default TweetForm;
