import React, { Component, PropTypes } from 'react';

const propTypes = {

};
const defaultProps = {

};

class Header extends Component {

    render() {
        return(
          <header className="header">
            <span className="logo">Greatab</span>
          </header>
        );
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
