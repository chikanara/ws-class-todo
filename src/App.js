import React, { Component } from 'react'
import AddTask from './components/AddTask/AddTask'
import TaskList from './components/TaskList/TaskList'
import "./App.css"

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tasks:[
         {
          id:0, 
          task:"Learn HTML and CSS",
          isDone:true
         },
         {
          id:1, 
          task:"Learn Javascript",
          isDone:true
         },
         {
          id:2, 
          task:"Learn Node js",
          isDone:false
         }
       ]
    }
  }
   handleDelete = (taskId) => {
     this.setState({ tasks:  this.state.tasks.filter(task => task.id !==taskId) });
   }
   handleComplete = (taskId) => {
     this.setState({ tasks:this.state.tasks.map(task => task.id===taskId ? {...task,isDone:!task.isDone}  :task)  });
   }
   handleAdd = (task) => {
       
         this.setState({ tasks:[...this.state.tasks,task]  });
      
       
   }
  
  render() {
    return (
      <div className="app">
        <h1>Todo App</h1>
        <AddTask handleAdd={this.handleAdd}/>
        <TaskList tasks={this.state.tasks} handleDelete={this.handleDelete} handleComplete={this.handleComplete}/>
      </div>
    )
  }
}

export default App
