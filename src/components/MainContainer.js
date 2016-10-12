import React, { Component, PropTypes } from 'react';

import LeftCol from './LeftCol.js';
import ControlCol from './ControlCol.js';

const propTypes = {

};
const defaultProps = {

};

class MainContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>MainContainer
            <LeftCol />
            <ControlCol notes={this.props.notes} onDelete={this.deleteNote}/>
            </div>
        );
    }
}

MainContainer.propTypes = propTypes;
MainContainer.defaultProps = defaultProps;

export default MainContainer;
