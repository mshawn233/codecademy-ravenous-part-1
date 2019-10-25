import React, { Component } from 'react';
import './Business.css';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
            name: 'MarginOtto Pizzeria',
            address: '1010 Paddington Way',
            city: 'Flavortown',
            state: 'NY',
            zipCode: '10101',
            category: 'Italian',
            rating: 4.5,
            reviewCount: 90
        }
    }

    render() {

        return <>
            <div className='Business'>
                <div className='image-container'>
                    <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' />
                </div>
                <h2>{this.state.name}</h2>
                <div className='Business-information'>
                    <div className='Business-address'>
                        <p>{this.state.address}</p>
                        <p>{this.state.city}</p>
                        <p>{this.state.state} {this.state.zipCode}</p>
                    </div>
                    <div className='Business-reviews'>
                        <h3>{this.state.category}</h3>
                        <h3 className='rating'>{this.state.rating} stars</h3>
                        <p>{this.state.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        </>
    }
}

export default Business;