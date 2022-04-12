import React, {Component } from 'react';

export class Intro extends Component{
    constructor(props) {
        super(props)
        
    }

    handleChange = (event) => {
        this.props.handleToUpdate(event);
    }

    render(){

        return (
            
            <div className='intro'>
                Awesome Intro
                <form>
                    <label htmlFor="nameInput">Name</label>
                    <input
                        type="text"
                        id="nameInput"
                        onChange={this.handleChange}
                        name="name"
                    />
                    <label htmlFor="lastNameInput">Last Name</label>
                    <input
                        type="text"
                        id="lastNameInput"
                        onChange={this.handleChange}
                        name="lastName"
                    />
                    <label htmlFor='resume'>Resume</label>
                    <textarea
                        rows='6'
                        columns='20'
                        id='resume'
                        name='resume'
                        onChange={this.handleChange}
                    ></textarea>
                </form>
            </div>
        );
    }
}