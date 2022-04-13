import React, {Component } from 'react';
import uniqid from "uniqid";

export class BoxExperience extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: uniqid(),
            position: "Awesome Job",
            employer: "Nice Software Company",
            description: "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat.",
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
                <div className='experience'>
                    <div className='position'>{position}</div>
                    <div className='employer'>{employer}</div>
                    <div className='dates'>
                        <div className='from'>{from}</div>
                        <div className='to'>{to}</div>
                    </div>
                    <p className='description'>{description}</p>
                </div>
            );
        }
        
    }
}