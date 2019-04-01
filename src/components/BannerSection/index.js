import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./style.css";

function scrollToView() {
	const firstSection = document.getElementById("about");
	firstSection.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
};

export default class BannerSection extends Component {
	constructor(props) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.state = {
			entered: false
		}
	}
	
	handleMouseLeave() {
		this.setState({ entered: false })
	}
	
	handleMouseEnter() {
		this.setState({ entered: true });
		setTimeout(this.handleMouseLeave, 280);
	}
	
	render() {
		const { entered } = this.state;
		return (
			<div className="banner-wrapper">
				<div className="banner">
					<h1>Разработка и сопровождение проектов по электроснабжению</h1>
				</div>
				<Button className={`click-me-down ${entered ? "entered" : ""}`} onClick={scrollToView} onMouseEnter={this.handleMouseEnter}>
					<FontAwesomeIcon icon={faChevronDown}/>
					<FontAwesomeIcon icon={faChevronDown}/>
					<FontAwesomeIcon icon={faChevronDown}/>
				</Button>
			</div>
		)
	}
};