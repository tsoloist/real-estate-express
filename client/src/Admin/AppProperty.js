import React, {Component} from 'react';
import Aux from '../hoc/Auxilary';
import '../App.css';
import InternalPages from '../Layout/InternalPages';
import Axios from 'axios';

class AddProperty extends Component {
    state ={propertiesList:[]};
    
    addPropertyHandler = (e) => {
        console.log(e.target);
        Axios.post('/api/properties',{
            streetaddress: e.target.streetaddress.value,
            city: e.target.city.value,
            state: e.target.state.value,
            zipcode:e.target.zipcode.value ,
            price: e.target.price.value,
            bedrooms: e.target.bedrooms.value,
            baths:e.target.baths.value,
            sqfootage: e.target.sqfootage.value,
            imgurl: e.target.imgurl.value,
            featured: e.target.featured.value
        }).then((entry) => {
            this.state.propertiesList.concat(entry);
        });
    }
    render(){
        return(
            <InternalPages>
            <Aux>
                <h1>Add New Property</h1>
                <form onSubmit={this.addPropertyHandler}>
                    <label htmlFor="streetaddress">Address</label>
                    <input id="streetaddress" name="streetaddress" type="text" />
        
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city" />
        
                    <label htmlFor="state">State</label>
                    <input id="state" type="text" name="state" placeholder="Georgia" />
        
                    <label htmlFor="zipcode">Zip</label>
                    <input id="zipcode" type="text" name="zip" placeholder="30097" />
        
                    <label htmlFor="price">Price</label>
                    <input id="price" type="text" name="price" placeholder="200,000" />
        
                    <label htmlFor="bedrooms">Number of Bedrooms</label>
                    <input id="bedrooms" type="text" name="bedrooms" />
        
                    <label htmlFor="baths">Number of Baths</label>
                    <input id="baths" type="text" name="baths" />
        
                    <label htmlFor="sqfootage">Square Footage</label>
                    <input id="sqfootage" type="text" name="sqfootage" placeholder="3500" />
        
                    <label htmlFor="upload">Upload Image</label>
                    <input id="upload" type="text" name="imgurl" />
        
                    <label htmlFor="featured">Show on Homepage</label>
                    <input id="featured" type="checkbox" name="featured" />
        
                    <button type="submit" className="button-primary" value="addToPage">Add to Display Page</button>
                </form>
            </Aux>
            </InternalPages>
        );
    }
}

export default AddProperty;