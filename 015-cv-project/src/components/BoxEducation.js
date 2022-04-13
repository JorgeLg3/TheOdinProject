import React, {Component } from 'react';
import uniqid from "uniqid";

export class BoxEducation extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: uniqid(),
            title: "Some title",
            trainer: "Great University of software",
            description: "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat.",
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
                <div className='education'>
                    <div className='title-education'>{title}</div>
                    <div className='trainer'>{trainer}</div>
                    <div className='dates'>
                        <div className='from'>{from}</div>
                        <div className='to'>{to}</div>
                    </div>
                    <div className='description'>{description}</div>
                </div>
            );
        }
        
    }
}