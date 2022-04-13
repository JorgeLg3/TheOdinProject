import React, {Component } from 'react';
import { Contact } from './components/Contact';
import {Intro} from './components/Intro';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.setStateOfParent = this.setStateOfParent.bind(this);

    this.state = {
      name: "",
      lastName: "",
      resume: "",
      title: "",
      phone: "",
      email: "",
      address: "",

      editMode: true,
      btnText: 'preview',
    };
  }

  setStateOfParent = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  changeVisualizationMode = (e) => {
    if(this.state.editMode){
      this.setState({
        editMode: false,
        btnText: 'edit',
      });
    } else{
      this.setState({
        editMode: true,
        btnText: 'preview'
      });
    }
    console.log(this.state.editMode);
  }

  /*handleSubmit = event => {
    event.preventDefault();
    this.setState({ 
      //submitdata: event.target.data.value,
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: ''},
    });
  }

  handleChange = event => {
    this.setState({ 
      task : {
        text: event.target.value,
        id: this.state.task.id
      }
    });
  }*/

  render() {
    //const {task, tasks} =this.state;
    //if(this.state.editMode){
      return (
        <div className={this.state.editMode ? 'editView' : 'previewView'}>
          
          <div className='main'>
            <Intro handleToUpdate = {this.setStateOfParent} editMode = {this.state.editMode}/>
            <Education editMode ={this.state.editMode} />
            <Experience editMode ={this.state.editMode}/>
          </div>
          <div className='sidebar'>
            <Contact handleToUpdate = {this.setStateOfParent} editMode ={this.state.editMode}/>
          </div>
          <button onClick={this.changeVisualizationMode} className='viewBtn material-icons'>{this.state.btnText}</button>
        </div>
      );
    /*} else {
      <div className="CV">
          <Intro handleToUpdate = {this.setStateOfParent} editMode = {this.state.editMode}/>
          <Contact handleToUpdate = {this.setStateOfParent}/>
          <Experience/>
          <button onClick={this.changeVisualizationMode}>Toggle Edit/Preview mode</button>
        </div>
    }*/
    
  }
  
}


export default App;
