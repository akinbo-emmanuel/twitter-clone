import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
	return(
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>

			<div className="widgets__widgetContainer">
				<h2>What's happening</h2>

				<TwitterTweetEmbed tweetId={"1337230906818486272"} />

				<TwitterTimelineEmbed sourceType="profile" screenName="EmmanuelAkinb13" options={{ height:400 }} />

				<TwitterShareButton url={"https://www.facebook.com/Akinbo.Emmanuel.75"} options={{ text: "#reactjs is awesome", via: "EmmanuelAkinb13" }} />
			</div>
		</div>
	);
}

export default Widgets;