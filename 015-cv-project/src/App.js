import React, {Component } from 'react';
import { Contact } from './components/Contact';
import {Intro} from './components/Intro';
import { Experience } from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props)

    this.setStateOfParent = this.setStateOfParent.bind(this);

    this.state = {
      name: "",
      lastName: "",
      resume: "",
      phone: "",
      email: "",
      address: "",

      editMode: true,
    };
  }

  setStateOfParent = (e) => {
    this.setState({[e.target.name]: e.target.value});
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

    return (
      <div className="App">
        <Intro handleToUpdate = {this.setStateOfParent}/>
        <Contact handleToUpdate = {this.setStateOfParent}/>
        <Experience/>
      </div>
    )
  }
  
}


export default App;
