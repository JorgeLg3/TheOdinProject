import React, {Component } from 'react';
import uniqid from "uniqid";

export class BoxExperience extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: uniqid(),
            position: "Awesome Job",
            employer: "Nice Software Company",
            description: "In this position I develope some incredible tasks of developing",
            from: "2021-03-25",
            to: "2022-03-25",
        }
    }
    handleChange = (e) => {
        //this.props.handleToUpdate(event);
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        const {position, employer, description, from, to} = this.state;
        if(this.props.editMode){
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
                            value={position}
                        />
                        <label htmlFor="employerInput">Company name</label>
                        <input
                            type="text"
                            id="employerInput"
                            name='employer'
                            onChange={this.handleChange}
                            value={employer}
                        />
                        <label htmlFor="fromInput">From: </label>
                        <input
                            type="date"
                            id="fromInput"
                            name='from'
                            onChange={this.handleChange}
                            value={from}
                        />
                        <label htmlFor="toInput">From: </label>
                        <input
                            type="date"
                            id="toInput"
                            name='to'
                            onChange={this.handleChange}
                            value={to}
                        />
                        <label htmlFor='descriptionInput'>Job description</label>
                        <textarea
                            rows='6'
                            columns='20'
                            id='descriptionInput'
                            name='description'
                            onChange={this.handleChange}
                            value={description}
                        ></textarea>

                    </form>
                    
                </div>
            );
        } else{
            return(
                <div>
                    <h3>{position}</h3>
                    <h4>{employer}</h4>
                    <h5>{from}</h5>
                    <h5>{to}</h5>
                    <p>{description}</p>
                </div>
            );
        }
        
    }
}