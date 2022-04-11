import React, {Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    /*this.state = {
      tasks: [],
      task: { 
        text: '',
        id: uniqid()
      },
    };*/
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
        <h1> Title </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="taskInput">Enter task</label>
          <input
           type="text" 
           name='data'
           id='taskInput'
           placeholder="Yout input here..." 
           required
           //value={task.text}
           //onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
  
}


export default App;
