import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as faker from 'faker';
import {addContact} from '../actions/ContactListActions';
class AddContact extends Component {
  handleSubmit (e){
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(addContact({id: faker.random.uuid(),
                        name: this.refs.name.value,
                        email: this.refs.email.value,
                        phone: this.refs.phone.value,
                        isEdit: false}));
    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.phone.value = '';
  }
  render() {

    return (
        <form className="form-inline contact-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" className="form-control"  ref="name" placeholder="Full Name" required/>
          <input type="email" className="form-control" ref="email" placeholder="Email Address" required/>
          <input type="tel" className="form-control" ref="phone" placeholder="Phone Number" required/>
          <button type="submit" className="btn btn-default">Add New</button>
        </form>
    );
  }
}

export default connect()(AddContact);
