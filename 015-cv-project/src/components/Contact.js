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
                <div className='section'>
                    <h2>Contact Information</h2>
                    <form>
                        <div className='field'>
                            <label htmlFor="phoneInput">Phone number</label>
                            <input
                                type="tel"
                                id="phoneInput"
                                name='phone'
                                onChange={this.handleChange}
                                value={phone}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="emailInput">Email</label>
                            <input
                                type="email"
                                id="emailInput"
                                name='email'
                                onChange={this.handleChange}
                                value={email}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="addressInput">Address</label>
                            <input
                                type="text"
                                id="addressInput"
                                name='email'
                                onChange={this.handleChange}
                                value={address}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="linkedinInput">Address</label>
                            <input
                                type="url"
                                id="linkedinInput"
                                name='linkedin'
                                onChange={this.handleChange}
                                value={linkedin}
                            />
                        </div>
                        
                    </form>
                </div>
            );
        } else{
            return(
                <div className='contactContainer'>
                    <h1>Contact</h1>
                    <ul>
                        <li className='contact-element'>
                            <span class="material-icons">phone</span>
                            {phone}
                        </li>
                        <li className='contact-element'>
                            <span class="material-icons">email</span>
                            {email}
                        </li>
                        <li className='contact-element'>
                            <span class="material-icons">home</span>
                            {address}
                        </li>
                        <li className='contact-element'>
                            <i class="fa-brands fa-linkedin"></i>
                            {linkedin}
                        </li>
                    </ul>
                </div>
            );
        }
        
    }
}