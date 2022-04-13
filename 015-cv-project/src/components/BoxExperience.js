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
                <div className='box'>                    
                    <form>
                        <div className='field fullLine'>
                            <label htmlFor="positionInput">Position title</label>
                            <input
                                type="text"
                                id="positionInput"
                                name='position'
                                onChange={this.handleChange}
                                value={position}
                            />
                        </div>
                        <div className='field fullLine'>
                            <label htmlFor="employerInput">Company name</label>
                            <input
                                type="text"
                                id="employerInput"
                                name='employer'
                                onChange={this.handleChange}
                                value={employer}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="fromInput">From: </label>
                            <input
                                type="date"
                                id="fromInput"
                                name='from'
                                onChange={this.handleChange}
                                value={from}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="toInput">From: </label>
                            <input
                                type="date"
                                id="toInput"
                                name='to'
                                onChange={this.handleChange}
                                value={to}
                            />
                        </div>
                        <div className='field fullLine'>
                            <label htmlFor='descriptionInput'>Job description</label>
                            <textarea
                                rows='6'
                                columns='20'
                                id='descriptionInput'
                                name='description'
                                onChange={this.handleChange}
                                value={description}
                            ></textarea>
                        </div>
                        
                        
                        
                        
                        

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