import React, { Component } from 'react';
import DesktopHeader from '../DesktopHeader/index';
import AboutSection from '../AboutSection/index';
import WorksSection from '../WorksSection/index';
import ContactUsSection from "../ContactUsSection";
import PortfolioSection from "../PortfolioSection";
import bannerImage from "../../static/img.jpg";
import mobImage from "../../static/mob_img.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.state = {
      mobileView: false,
      activeMobileMenu: false,
    };
  }
  
  componentDidMount() {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      this.setState({
        mobileView: true
      })
    }
  }
  
  toggleMobileMenu() {
    const oldStateMenu = this.state.activeMobileMenu;
    const bodyNode = document.getElementsByTagName("body");
    if (!oldStateMenu) {
      bodyNode[0].style.overflow = "hidden";
    } else {
      bodyNode[0].style.overflow = "auto";
    }
    this.setState({
      activeMobileMenu: !oldStateMenu,
    })
  }
  
  renderHeader(width) {
    let { activeMobileMenu } = this.state;
    let isMobileWidth = (width <= 768);
    if (isMobileWidth) {
      return (
        <DesktopHeader
          mobileView={isMobileWidth}
          activeMobileMenu={activeMobileMenu}
          toggleMenu={this.toggleMobileMenu}
        />
      )
    } else {
      return (<div>Restore Settings</div>)
    }
  }
  
  render() {
    let windowWidth = window.innerWidth;
    let { activeMobileMenu } = this.state;
    return (
      <div className={"app " + (activeMobileMenu ? "opened" : "")}>
				{
					activeMobileMenu ?
						<section
							className="side-menu"
						>
              <p>ИП Такушевич</p>
              <a href="#about">О Нас</a>
              <a href="#works">Наши работа</a>
              <a href="#portfolio">Портфолио</a>
              <a href="#contact-us">Контакты</a>
            </section> :
						null
				}
				<div className={activeMobileMenu ? "menu-show" : ""}>
					{this.renderHeader(windowWidth)}
					<div className="banner">
            <p>Проектирование и сопровождение проектов</p>
					</div>
          <AboutSection />
          <WorksSection />
          <PortfolioSection />
          <ContactUsSection />
				</div>
      </div>
    );
  }
}

export default App;
