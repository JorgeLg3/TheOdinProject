import React, {Component } from 'react';
import {BoxEducation} from './BoxEducation';
import uniqid from "uniqid";

export class Education extends Component{
    constructor(props) {
        super(props)
        this.state = {
            editMode: this.props.editMode,
            numChild: 1,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.editMode !== this.props.editMode){
            this.setState({editMode: this.props.editMode});
        }
    }

    addEducation = () => {
        this.setState({
            numChild: this.state.numChild + 1,
        })
    }

    render(){
        const renderAddButton = () => {
            if (this.state.editMode){
                return <button onClick={this.addEducation} className='addEducation'>Add</button>;
            }
        }

        return (
            <div className='education'>
                <h2>Education information</h2>
                
                <div>
                    {[...Array(this.state.numChild)].map((x, i) =>
                        <BoxEducation editMode={this.state.editMode} />
                    )}
                </div>
                {renderAddButton()}
            </div>
        );
    }
}