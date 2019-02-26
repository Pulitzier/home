import React, { Component } from 'react';
import DesktopHeader from '../Header/index';
import AboutSection from '../AboutSection/index';
import ServicesSection from '../ServicesSection/index';
import ContactUsSection from "../ContactUsSection";
import ClientsSection from "../ClientsSection";
import BannerSection from "../BannerSection";
import bannerImage from "../../static/img.jpg";
import mobImage from "../../static/mob_img.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      scrollStart: false,
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
    
    window.addEventListener("scroll", () => {
      if (window.pageYOffset !== 0) {
        this.setState({
          scrollStart: true
        })
      } else {
        this.setState({
          scrollStart: false
        })
      }
    })
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
  
  render() {
    let windowWidth = window.innerWidth;
    let { activeMobileMenu, scrollStart } = this.state;
    return (
      <div className={"app " + (activeMobileMenu ? "opened" : "")}>
				{
					activeMobileMenu ?
						<section
							className="side-menu"
						>
              <p>ИП Такушевич</p>
              <a href="/">Главная</a>
              <a href="#about">О Нас</a>
              <a href="#services">Услуги</a>
              <a href="#clients">Наши Заказчики</a>
              <a href="#contact-us">Контакты</a>
            </section> :
						null
				}
				<div className={activeMobileMenu ? "menu-show" : ""}>
          <DesktopHeader
            scrollStart={scrollStart}
            activeMobileMenu={activeMobileMenu}
            toggleMenu={this.toggleMobileMenu}
          />
					<BannerSection />
          <AboutSection />
          <ServicesSection />
          <ClientsSection />
          <ContactUsSection />
				</div>
      </div>
    );
  }
}

export default App;
