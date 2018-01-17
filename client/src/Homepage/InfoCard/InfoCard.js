import React, { Component } from 'react';
import './InfoCard.css';

class InfoCard extends Component {
	state = {
	    showInfoDetails: false
	}
	ToggleMoreInfoHandler = () => {
		const doesShow = this.state.showInfoDetails;
		this.setState( {showInfoDetails: !doesShow} )   
	}

	render() {
		return(
			<div className="InfoCard">
				<button style={this.props.style} onClick={this.ToggleMoreInfoHandler.bind(this)}>{this.props.title}</button>
				<div>
					{this.state.showInfoDetails ? this.props.children:null}
				</div>	
			</div>
		);	  	
	}

}


export default InfoCard;