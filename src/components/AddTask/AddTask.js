import React, { Component } from 'react'

export class AddTask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text:""
        }
    }
    handleChange = (e) => {
        this.setState({ text:e.target.value  });
        console.log(this.state.text)
    }
    addTask = () => {
        if(this.state.text){
            this.props.handleAdd({id:Math.random(),task:this.state.text,isDone:false});
            this.setState({ text:""});}
        else {
            alert("Write Something please")
        }
       
    }
     
    render() {
        return (
            <div className="add">
                <input type="text" onChange={this.handleChange} value={this.state.text} />
                <button onClick={this.addTask}>Add</button>
            </div>
        )
    }
}

export default AddTask
