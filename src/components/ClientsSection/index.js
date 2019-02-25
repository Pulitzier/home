import React, { Component } from 'react';
import akd from '../../static/akd-small.jpg';
import be from '../../static/be-small.jpg';
import bsb from '../../static/bsb-small.jpg';
import gsb from '../../static/gsb-small.jpg';
import sek from '../../static/sek-small.png';

export default class Clients extends Component {
	componentDidMount() {
		let slides = document.querySelectorAll('#slides .slide');
		let currentSlide = 0;
		let slideInterval = setInterval(nextSlide,2000);
		
		console.log(slides);
		
		function nextSlide() {
			slides[currentSlide].className = 'slide';
			currentSlide = (currentSlide+1)%slides.length;
			slides[currentSlide].className = 'slide showing';
		}
	}
	
	render() {
		return (
			<section id="clients">
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