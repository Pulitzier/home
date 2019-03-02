import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

export default class BannerSection extends Component {
	constructor(props) {
		super(props);
		this.scrollToView = this.scrollToView.bind(this);
	}
	
	scrollToView() {
		const firstSection = document.getElementById("about");
		firstSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
	}
	
	render() {
		return (
			<div className="banner-wrapper">
				<div className="banner">
					<h1>Разработка и сопровождение проектов по электроснабжению</h1>
				</div>
				<Button className="click-me-down" onClick={this.scrollToView}>
					<FontAwesomeIcon icon={faChevronCircleDown}/>
				</Button>
			</div>
		)
	}
};