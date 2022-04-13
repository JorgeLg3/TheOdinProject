import React, {Component } from 'react';
import uniqid from "uniqid";

export class BoxEducation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: uniqid(),
            title: "Some title",
            trainer: "Great University of software",
            description: "Around this course I learned so much",
            from: "2021-03-25",
            to: "2022-03-25",
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        const {title, trainer, description, from, to} = this.state;
        if(this.props.editMode){
            return (
                <div className='box'>
                    
                    <form>
                        <div className='field  fullLine'>
                            <label htmlFor="titleInput">Title of qualification</label>
                            <input
                                type="text"
                                id="titleInput"
                                name='title'
                                onChange={this.handleChange}
                                value={title}
                            />
                        </div>
                        <div className='field  fullLine'>
                            <label htmlFor="trainerInput">Organization providing education</label>
                            <input
                                type="text"
                                id="trainerInput"
                                name='trainer'
                                onChange={this.handleChange}
                                value={trainer}
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
                            <label htmlFor="toInput">To: </label>
                            <input
                                type="date"
                                id="toInput"
                                name='to'
                                onChange={this.handleChange}
                                value={to}
                            />
                        </div>
                        <div className='field fullLine'>
                            <label htmlFor='descriptionInput'>Education description</label>
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
                    <h3>{title}</h3>
                    <h4>{trainer}</h4>
                    <h5>{from}</h5>
                    <h5>{to}</h5>
                    <p>{description}</p>
                </div>
            );
        }
        
    }
}