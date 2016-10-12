import React, { Component, PropTypes } from 'react';

export default ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
);

// class Note extends Component {
//
//     constructor(props) {
//         super(props);
//     }
//
//     render() {
//         return(
//             <div>Note</div>
//         );
//     }
// }
//
// Note.propTypes = propTypes;
// Note.defaultProps = defaultProps;
