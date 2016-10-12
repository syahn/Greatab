import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';


const Editable = ({editing, value, className, onEdit}) => {
  if(editing) {
    return <Edit
      value={value}
      className={className}
      onEdit={onEdit}/>;
  }
  return <Editable.Value className={className} value={value} />;
}

Editable.Value = ({value, className, ...props}) =>
  <span className={classnames('value', className)} {...props}>
    {value}
  </span>


class Edit extends Component {
  render() {
    const {className, value, ...props} = this.props;

    return <input
      type="text"
      className={classnames('edit', className)}
      autoFocus={true}
      defaultValue={value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter}
      {...props} />;
  }

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);
    }
  }
}

Editable.Edit = Edit;

export default Editable;
