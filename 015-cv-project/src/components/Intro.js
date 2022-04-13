import React, {Component } from 'react';

export class Intro extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "John",
            lastName: "Doeman",
            resume: "Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.",
            title: "Software Developer",
          };
    }

    handleChange = (event) => {
        this.props.handleToUpdate(event);
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        const {name, lastName, resume, title} =this.state;

        if (this.props.editMode){
            return (
            
                <div className='section'>
                    <h2>Introduction</h2>
                    <form>
                        <div className='field'>
                            <label htmlFor="nameInput">Name</label>
                            <input
                                type="text"
                                id="nameInput"
                                onChange={this.handleChange}
                                name="name"
                                value={name}
                            />
                        </div>
                        <div className='field'>
                            <label htmlFor="lastNameInput">Last Name</label>
                            <input
                                type="text"
                                id="lastNameInput"
                                onChange={this.handleChange}
                                name="lastName"
                                value={lastName}
                            />
                        </div>
                        <div className='field fullLine'>
                            <label htmlFor="titleInput">Title</label>
                            <input
                                type="text"
                                id="titleInput"
                                onChange={this.handleChange}
                                name="title"
                                value={title}
                            />
                        </div>
                        <div className='field fullLine'>
                        <label htmlFor='resumeInput'>Resume</label>
                        <textarea
                            rows='6'
                            columns='20'
                            id='resumeInput'
                            name='resume'
                            onChange={this.handleChange}
                            value={resume}
                        ></textarea>
                        </div>
                    </form>
                </div>
            );
        } else {
            return (
                <div className='introContainer'>
                    <h1 className='name'>{name + " " +lastName}</h1>
                    <h2 className='title'>{title}</h2>
                    <p className='resume'>{resume}</p>
                </div>
            );
        }
        
    }
}