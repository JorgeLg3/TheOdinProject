import React, {Component } from 'react';
import {BoxExperience} from './BoxExperience';
import uniqid from "uniqid";

export class Experience extends Component{
    constructor(props) {
        super(props)
        this.state = {
            boxes: [],
            editMode: this.props.editMode,
            numChild: 1,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.editMode !== this.props.editMode){
            this.setState({editMode: this.props.editMode});
        }
    }

    addExperience = () => {
        this.setState({
            //boxes: this.state.boxes.concat(<BoxExperience editMode={this.state.editMode}/>),
            numChild: this.state.numChild + 1,
        })
        /* 
            <div>
                    {this.state.boxes.map(box => <div>{box}</div>)}
                </div>
        */
    }

    render(){
        const renderAddButton = () => {
            if (this.state.editMode){
                return <button onClick={this.addExperience} className='addBtn'>Add</button>;
            }
        }

        return (
            <div className='section'>
                <h2>Experience information</h2>
                
                <div className='box-container'>
                    {[...Array(this.state.numChild)].map((x, i) =>
                        <BoxExperience editMode={this.state.editMode} />
                    )}
                </div>
                {renderAddButton()}
            </div>
        );
    }
}