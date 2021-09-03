import React, { useEffect, useState } from "react";

import TweetCard from "../../components/tweet-card/TweetCard";
import ApiService from "../../services/ApiService";

import "./home.scss";

const Home = () => {
	const [tweets, setTweets] = useState([]);

	useEffect(() => {
		ApiService.getAllTweets().then((res) => setTweets(res.data.tweets));
	}, []);

	return (
		<div className="home-container">
			<div className="heading">Tweets</div>
			{tweets?.map((tweet) => (
				<TweetCard {...tweet} />
			))}
		</div>
	);
};

export default Home;
