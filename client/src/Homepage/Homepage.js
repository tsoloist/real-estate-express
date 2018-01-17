import React, { Component } from 'react';
import './Homepage.css';
import InfoCard from './InfoCard/InfoCard.js';
import ContactImg from '../images/contact.png';
import LoyaltyImg from '../images/loyalty.png';
import WalletImg from '../images/wallet.png';
import FeaturedListingSlider from '../FeaturedListingSlider/FeaturedListingSlider';


class Homepage extends Component {


	render() {
		const contactStyle = {
			backgroundImage: "url(" + ContactImg + ")"
		}
		const loyaltyStyle = {
			backgroundImage: "url(" + LoyaltyImg + ")"
		}
		const walletStyle = {
			backgroundImage: "url(" + WalletImg + ")"
		}
		return (
			<div className="App">
				<header>
				  <section id="hero1">
				    <div className="info">
					      <InfoCard style={contactStyle} title="Contact Me">
					        	<p>Lenore Smith<br />Cell: 999-999-9999<br />address@address.com</p>
					      </InfoCard>
					      <InfoCard style={loyaltyStyle} title="Investment Properties">
					        	<p>Search publicly available inventory below.Request access to unlisted properites.<br /><a href="">Send Request</a></p>
					      </InfoCard>
					      <InfoCard style={walletStyle} title="Hard Money Lenders">
					        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus commodo bibendum. Fusce elit eros.</p>
					      </InfoCard>
				    </div>
				  </section>
				  <section id="hero2">
				    <h1 className="App-title"><span>Welcome. I'm Lenore Smith</span><br />Atlanta's Investment Property Specialist</h1>
				    <h2>Get access to exclusive unlisted properties in Atlanta and surrounding areas</h2>
				  </section>
				</header>
				<section id="Featured">
					<h1>Featured Listings</h1>
					<FeaturedListingSlider /><FeaturedListingSlider />
				</section>
			</div> 
		);		
	}
		
}

export default Homepage;