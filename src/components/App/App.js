import React, { Component } from 'react';
import Header from '../Header/index';
import AboutSection from '../AboutSection/index';
import ServicesSection from '../ServicesSection/index';
import ContactUsSection from "../ContactUsSection";
import PartnersSection from "../PartnersSection";
import BannerSection from "../BannerSection";
import WhatWeDo from '../WhatWeDoSection';
import OurBenefits from '../OurBenefitsSection';
import HowWeDoItSection from '../HowWeDoItSection';
import ProjectStructureSection from '../ProjectStructureSection';
import FooterSection from '../FooterSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
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
  
  render() {
    let { activeMobileMenu } = this.state;
    return (
      <div>
				<div>
          <Header
            activeMobileMenu={activeMobileMenu}
            toggleMenu={this.toggleMobileMenu}
          />
					<BannerSection />
          <AboutSection />
          <WhatWeDo />
          <OurBenefits />
          <ServicesSection />
          <HowWeDoItSection />
          <ProjectStructureSection />
          <PartnersSection />
          <ContactUsSection />
          <FooterSection />
				</div>
      </div>
    );
  }
}

export default App;
