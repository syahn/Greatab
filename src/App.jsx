import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import uuid from 'uuid';

import logo from './logo.svg';
import './AppCheap.css';

import Header from './components/Header.js';
// import GlobalContainer from './components/GlobalContainer.js';
import Notes from './components/todolist/Notes';
import Calculator from './components/calculator/Calculator';
import bankStore from './stores/bankStore';
import aircheapStore from './stores/aircheapStore';
import AppCheap from './AppCheap';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    const {notes} = this.state;

    return (
      <div className="App">


        <Provider store={aircheapStore}>
          <AppCheap />
        </Provider>

      </div>
    );
  }

  addNote = () => {
    this.setState({
      notes: [...this.state.notes, {id: uuid.v4(), task: 'New task'}]}
    )
  }

  deleteNote = (id, e) => {
    // Avoid bubbling to edit
    e.stopPropagation(); // this is to tell the DOM to stop bubbling events

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  activateNoteEdit = (id) => {
   this.setState({
     notes: this.state.notes.map(note => {
       if(note.id === id) {
         note.editing = true;
       }

       return note;
     })
   });
 }

 editNote = (id, task) => {
   this.setState({
     notes: this.state.notes.map(note => {
       if(note.id === id) {
         note.editing = false;
         note.task = task;
       }

       return note;
     })
   });
 }


}

// <Header/>
// <div>
//   <button className="add-note" onClick={this.addNote}>+</button>
// </div>
// <Notes
//   notes={notes}
//   onNoteClick={this.activateNoteEdit}
//   onEdit={this.editNote}
//   onDelete={this.deleteNote}/>
//
// <Provider store={bankStore}>
//   <Calculator />
// </Provider>
//
