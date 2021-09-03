import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";

import UserCard from "../user-card/UserCard";

import { RiHome2Line, RiUserLine } from "react-icons/ri";
import { IoNotificationsOutline, IoBookmarkOutline, IoLogoTwitter } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import { BsViewList } from "react-icons/bs";
import { FiHash, FiLogOut } from "react-icons/fi";

import ApiService from "../../services/ApiService";

import "./navigation.scss";
import TweetForm from "../tweet-form/TweetForm";

const Link = ({ icon: Icon, title, ...rest }) => {
	return (
		<NavLink {...rest}>
			<div className="nav-link">
				<Icon className="icon" />
				<span className="title">{title}</span>
			</div>
		</NavLink>
	);
};

Modal.setAppElement("#root");

const Navigation = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		ApiService.getUser().then((res) => {
			setUser(res.data.user);
		});
	}, []);

	return (
		<div className="sidebar">
			<div className="logo">
				<IoLogoTwitter className="logo-icon" />
				<span className="logo-name">twitter</span>
			</div>
			<UserCard {...user} />
			<div className="nav-links">
				<Link to="/home" icon={RiHome2Line} title="Home" />
				<Link to="#" icon={FiHash} title="Explore" />
				<Link to="#" icon={IoNotificationsOutline} title="Notifications" />
				<Link to="#" icon={MdMailOutline} title="Messages" />
				{/* <Link to="#" icon={IoBookmarkOutline} title="Bookmarks" /> */}
				{/* <Link to="#" icon={BsViewList} title="Lists" /> */}
				<Link to={`/profile/${user.username}`} icon={RiUserLine} title="Profile" />
				<Link to="#" icon={CgMoreO} title="More" />
			</div>
			<div className="post-tweet">
				<button onClick={() => setModalIsOpen(true)}>Tweet</button>
				<Modal style={{ content: { height: "200px" } }} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
					<TweetForm {...user} modalCloseHandler={() => setModalIsOpen(false)} />
				</Modal>
			</div>
			<div className="logout">
				<div className="nav-link">
					<FiLogOut className="icon" />
					<span className="title">Logout</span>
				</div>{" "}
			</div>
		</div>
	);
};

export default Navigation;
