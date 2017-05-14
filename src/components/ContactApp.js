import React, {Component} from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactHeader from './ContactHeader';
class ContactApp extends Component {

    render() {
        return (
            <div className="contact-app">
              <h4>List of participants</h4>
              <AddContact/>
                <table className="table" width="100%">
                  <thead>
                    <ContactHeader/>
                  </thead>
                    <ContactList/>
                </table>
            </div>
        );
    }
}

export default ContactApp;
