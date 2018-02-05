import React, {Component} from 'react';
import InternalPages from '../../Layout/InternalPages';
import axios from 'axios';

class ViewPropertiesList extends Component {
	constructor() {
		super();
		this.state = {
		    propertiesList: []
		}
	}

	componentDidMount() {
		axios.get('/api/viewpropertieslist')
		.then(res => {
			this.setState({propertiesList: res.data});
		});
    }

    render () {
        const list = this.state.propertiesList.map(
            listItem => {
                return(
                    <div>
                        <img src={listItem.imgurl} />
                        <p>{listItem.streetaddress}, {listItem.city}, {listItem.state}, {listItem.zipcode}</p>
                        <p>${listItem.price}</p>
                        <p>Number of Bedrooms: {listItem.bedrooms}</p>
                        <p>Number of Bathrooms: {listItem.baths}</p>
                        <p>Square Footage: {listItem.sqfootage}</p>
                        <hr />
                    </div>
                );
            }
        );
        return(
            <InternalPages>
                {list}
            </InternalPages>
        );
    }
    
}

export default ViewPropertiesList;