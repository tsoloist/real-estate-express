import React, {Component} from 'react';
import './FeaturedListingSlider.css';

class FeaturedListingSlider extends Component {
	constructor() {
		super();
		this.state = {
			properties: []
		}
	}

	componentDidMount() {
		fetch('/api/properties')
		.then(res => res.json())
		.then(properties => this.setState({properties}, () => console.log("Properties fetched...", properties)));
	}

	render() {
		return(
			<div className="FeaturedSlide">
				<img src="http://via.placeholder.com/370x187" />
				<div>
					<p>123 Peachtree Street, Atlanta, GA<br />
						$325,000</p>
					<p>3 Beds | 2 Baths</p>
				</div>
			</div>
		);
	}
}

export default FeaturedListingSlider;