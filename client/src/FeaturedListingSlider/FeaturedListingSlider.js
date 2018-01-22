import React, {Component} from 'react';
import './FeaturedListingSlider.css';
import axios from 'axios';
import Slider from 'react-slick';


class FeaturedListingSlider extends Component {
	constructor() {
		super();
		this.state = {
			featuredProperties: []
		}
	}

	componentDidMount() {
		axios.get('/api/properties')
		.then(res => {
			this.setState({featuredProperties: res.data});
		});
	}

	render() {
		const slides =this.state.featuredProperties.map(
			slide => {
					return(	
						<div className="FeaturedSlide" key={slide.id}>
							<img src={slide.imgurl} />
							<div>
								<p>{slide.streetaddress}, {slide.city}, {slide.state}<br />
									{slide.price}</p>
								<p>{slide.bedrooms} Beds |{slide.bathrooms} Baths</p>
							</div>	
						</div>
					);
			}
		);

		let settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1
		};

		return (
				<div className="ListCarousel">
					<Slider {...settings}>
						{slides}
					</Slider>
				</div>		
		);
	}
}

export default FeaturedListingSlider;