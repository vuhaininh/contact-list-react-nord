import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Icon} from 'react-fa';

class HeaderIcon extends Component {

  render() {
    if(this.props.contacts.sortDir === "ASC")
    return (
        <Icon name="arrow-down"/>
    );
    else
      return <Icon name="arrow-up"/>
  }
}

export default connect(  (state) => {
    return state;
  })(HeaderIcon);
