import React, {Component } from 'react';
import {BoxExperience} from './BoxExperience';
import uniqid from "uniqid";

export class Experience extends Component{
    constructor(props) {
        super(props)
        this.state = {
            boxes: [],
            experience: [],
            box:{
                id: uniqid(),
                position: "",
                employer: "",
                description: "",
            }
        }
    }
    /*handleChange = (event) => {
        this.props.handleToUpdate(event);
    }*/

    addExperience = () => {
        this.setState({
            experience: this.state.experience.concat(this.state.box),
            boxes: this.state.boxes.concat(<BoxExperience key={this.state.box.id}/>),
            box:{
                id: uniqid(),
                position: "",
                employer: "",
                description: "",
            }
        })
    }

    setStateOfParent(id) {
        this.setState({

        });
      }

    render(){
        return (
            <div className='experience'>
                <h1>Experience information</h1>
                <div>
                    {this.state.boxes.map(box => <div>{box}</div>)}
                </div>
                <button onClick={this.addExperience} className='addExperience'>Add</button>
            </div>
        );
    }
}