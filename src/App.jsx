import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import AppTodo from './components/todos/AppTodo'
import Header from './components/Header'

import store from './stores/index'
import './App.css';



export default class App extends Component {

  render() {
    return (
      <div className="app">
        <Header className="header"/>
        <section className="mainContainer">
          <nav className="leftCol"></nav>
          <main className="content">
            <article className="contentArea">
              <div className="card card__feed">
              </div>
            </article>
            <section className="rightCol">
              <Provider store={store}>
                <AppTodo />
              </Provider>
            </section>
          </main>
        </section>
      </div>
    );
  }

 //  addNote = () => {
 //    this.setState({
 //      notes: [...this.state.notes, {id: uuid.v4(), task: 'New task'}]}
 //    )
 //  }
 //
 //  deleteNote = (id, e) => {
 //    // Avoid bubbling to edit
 //    e.stopPropagation(); // this is to tell the DOM to stop bubbling events
 //
 //    this.setState({
 //      notes: this.state.notes.filter(note => note.id !== id)
 //    });
 //  }
 //
 //  activateNoteEdit = (id) => {
 //   this.setState({
 //     notes: this.state.notes.map(note => {
 //       if(note.id === id) {
 //         note.editing = true;
 //       }
 //
 //       return note;
 //     })
 //   });
 // }
 //
 // editNote = (id, task) => {
 //   this.setState({
 //     notes: this.state.notes.map(note => {
 //       if(note.id === id) {
 //         note.editing = false;
 //         note.task = task;
 //       }
 //
 //       return note;
 //     })
 //   });
 // }


}



// import GlobalContainer from './components/GlobalContainer.js';
// import Notes from './components/todolist/Notes';
// import Calculator from './components/calculator/Calculator';
// import bankStore from './stores/bankStore';
// import aircheapStore from './stores/aircheapStore';
// import AppCheap from './AppCheap';

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
