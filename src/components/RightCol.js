import React, { Component, PropTypes } from 'react';
import Notes from './todolist/Notes.js';

const propTypes = {

};
const defaultProps = {

};

class RightCol extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Notes notes={this.props.notes} onDelete={this.deleteNote}/>
            // <div>{this.props.cards}</div>
        );
    }
}

RightCol.propTypes = propTypes;
RightCol.defaultProps = defaultProps;

export default RightCol;
