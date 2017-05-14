import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sortContact} from '../actions/ContactListActions';
import HeaderIcon from './HeaderIcon';
class ContactHeader extends Component {

  handleOnSort(e){
    var {dispatch,contacts} = this.props;
    var sortBy = e.target.name;
    var sortDir = "";
    if (contacts.sortDir === "ASC")
        sortDir = "DESC"
    else {
        sortDir = "ASC"
    }

    dispatch(sortContact({sortBy: sortBy, sortDir:sortDir}));
  }
  render() {

    return (

      <tr>
        <th><button type="button" className="btn btn-default btn-header" name="name" onClick={this.handleOnSort.bind(this)}>Name </button><HeaderIcon/> </th>
        <th><button type="button" className="btn btn-default btn-header" name="email" onClick={this.handleOnSort.bind(this)}>Email</button></th>
        <th><button type="button" className="btn btn-default btn-header" name="phone" onClick={this.handleOnSort.bind(this)}>Phone</button></th>
        <th></th>
      </tr>
    );
  }
}

export default connect(  (state) => {
    return state;
  })(ContactHeader);
