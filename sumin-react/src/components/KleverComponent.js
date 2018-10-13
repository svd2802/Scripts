import React from 'react';
import { DummyComponent } from './DummyComponent';
import {ToDoItem} from "./ToDOItem";

class KlevComponent extends React.Component {
    state = {
        notes: [],
        newNoteText: ''
    }

    onInputChange = (event) =>{
        this.setState({
            newNoteText: event.target.value
        });
    }      

    onOkButtonClick = () => {
        const newItem = {
            text: this.state.newNoteText,
            isComplete: false,
        };
        this.setState({
            notes: [...this.state.notes, newItem],
            newNoteText: ''
        });
    }

    onToDoComplete = (index) => () => {
        const updatedItems = [
            ...this.state.notes.slice(0,index),
            {...this.state.notes[index], isComplete:!this.state.notes[index].isComplete},
            ...this.state.notes.slice(index + 1)
        ];
        this.setState({
            notes: updatedItems
        });
    }

    render() {

      return(
        <div>
          <input 
          onChange = {this.onInputChange}
          value={this.state.newNoteText} />
          <DummyComponent onOkButtonClick = {this.onOkButtonClick}/>
          {
            this.state.notes.map( (n, index) => (
                <ToDoItem key= {index} {...n} 
                onComplete= {this.onToDoComplete(index)} />)
            )
          }
        </div>
      );
    }
  }

  export default KlevComponent;