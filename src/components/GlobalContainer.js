import React, { Component, PropTypes } from 'react';

import MainContainer from './MainContainer.js';

const propTypes = {

};
const defaultProps = {

};

class GlobalContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>GlobalContainer
            <MainContainer notes={this.props.notes} onDelete={this.deleteNote}/>
            </div>
        );
    }
}

GlobalContainer.propTypes = propTypes;
GlobalContainer.defaultProps = defaultProps;

export default GlobalContainer;
