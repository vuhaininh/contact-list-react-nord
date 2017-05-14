import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact'
class ContactList extends Component {
  render() {
    var contacts = this.props.contacts.contactList;

    var renderContacts = function(){
      return contacts.map((contact) => {
        return (
          <Contact key={contact.id} contact={contact} />
        );
      });
    }

    return (
      <tbody>
        {renderContacts()}
      </tbody>
    );
  }
}

export default connect(
  (state) => {
    return state;
  }
)(ContactList);
