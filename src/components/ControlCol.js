import React, { Component, PropTypes } from 'react';

import ContentArea from './ContentArea.js';
import RightCol from './RightCol.js';

const propTypes = {

};
const defaultProps = {

};

class ControlCol extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
              ControlCol
            <ContentArea />
            <RightCol notes={this.props.notes} onDelete={this.deleteNote}/>
            </div>
        );
    }
}

ControlCol.propTypes = propTypes;
ControlCol.defaultProps = defaultProps;

export default ControlCol;
