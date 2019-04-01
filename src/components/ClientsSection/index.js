import React, { Component } from 'react';
import akd from '../../static/media/akd-small.jpg';
import be from '../../static/media/be-small.jpg';
import bsb from '../../static/media/bsb-small.jpg';
import gsb from '../../static/media/gsb-small.jpg';
import sek from '../../static/media/sek-small.png';
import './style.css';

export default class Clients extends Component {
	componentDidMount() {
		const slides = document.querySelectorAll('#slides .slide');
		const slideInterval = setInterval(nextSlide,2000);
		let currentSlide = 0;
		
		function nextSlide() {
			slides[currentSlide].className = 'slide';
			currentSlide = (currentSlide+1)%slides.length;
			slides[currentSlide].className = 'slide showing';
		}
	}
	
	render() {
		return (
			<section id="clients">
				<header>Наши клиенты</header>
				<ul id="slides">
					<li className="slide showing">
						<img src={akd} />
					</li>
					<li className="slide">
						<img src={be} />
					</li>
					<li className="slide">
						<img src={bsb} />
					</li>
					<li className="slide">
						<img src={gsb} />
					</li>
					<li className="slide">
						<img src={sek} />
					</li>
				</ul>
			</section>
		)
	}
};