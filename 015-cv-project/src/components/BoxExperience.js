import React, {Component } from 'react';
import uniqid from "uniqid";

export class BoxExperience extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: uniqid(),
            postion: "",
            employer: "",
            description: "",
        }
    }
    handleChange = (e) => {
        //this.props.handleToUpdate(event);
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div className='experience'>
                <h1>Sample Experience</h1>
                <form>
                    <label htmlFor="positionInput">Position title</label>
                    <input
                        type="text"
                        id="positionInput"
                        name='position'
                        onChange={this.handleChange}
                    />
                    <label htmlFor="employerInput">Company name</label>
                    <input
                        type="text"
                        id="employerInput"
                        name='employer'
                        onChange={this.handleChange}
                    />
                    <label htmlFor='descriptionInput'>Job description</label>
                    <textarea
                        rows='6'
                        columns='20'
                        id='descriptionInput'
                        name='description'
                        onChange={this.handleChange}
                    ></textarea>
                </form>
                
            </div>
        );
    }
}