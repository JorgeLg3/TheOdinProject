import React, {Component } from 'react';

export class Contact extends Component{
    constructor(props) {
        super(props)
        this.state = {
            phone: "+00 555 444 333",
            email: "johnDoeman@example.com",
            address: "Some awesome place",
            linkedin: "www.linkedin.in/example"
          };
    }
    handleChange = (event) => {
        this.props.handleToUpdate(event);
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        const {phone, email, address, linkedin} =this.state;
        if (this.props.editMode){
            return (
                <div className='contact'>
                    Awesome contact information
                    <form>
                        <label htmlFor="phoneInput">Phone number</label>
                        <input
                            type="tel"
                            id="phoneInput"
                            name='phone'
                            onChange={this.handleChange}
                            value={phone}
                        />
                        <label htmlFor="emailInput">Email</label>
                        <input
                            type="email"
                            id="emailInput"
                            name='email'
                            onChange={this.handleChange}
                            value={email}
                        />
                        <label htmlFor="addressInput">Address</label>
                        <input
                            type="text"
                            id="addressInput"
                            name='email'
                            onChange={this.handleChange}
                            value={address}
                        />
                        <label htmlFor="linkedinInput">Address</label>
                        <input
                            type="url"
                            id="linkedinInput"
                            name='linkedin'
                            onChange={this.handleChange}
                            value={linkedin}
                        />
                    </form>
                </div>
            );
        } else{
            return(
                <div className='contactContainer'>
                    <h1>Contact</h1>
                    <ul>
                        <li>
                            {phone}
                        </li>
                        <li>
                            {email}
                        </li>
                        <li>
                            {address}
                        </li>
                        <li>
                            {linkedin}
                        </li>
                    </ul>
                </div>
            );
        }
        
    }
}