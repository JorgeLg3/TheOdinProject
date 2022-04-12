import React, {Component } from 'react';

export class Contact extends Component{
    constructor(props) {
        super(props)
    }
    handleChange = (event) => {
        this.props.handleToUpdate(event);
    }

    render(){
        return (
            <div className='contact'>
                Awesome contact information
                <form>
                    <label htmlFor="phoneInput">Phone number</label>
                    <input
                        type="tel"
                        id="phoneInput"
                        name='number'
                        onChange={this.handleChange}
                    />
                    <label htmlFor="emailInput">Email</label>
                    <input
                        type="email"
                        id="emailInput"
                        name='email'
                        onChange={this.handleChange}
                    />
                    <label htmlFor="addressInput">Address</label>
                    <input
                        type="text"
                        id="addressInput"
                        name='email'
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}