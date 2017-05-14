import React, { Component } from 'react';
import { connect } from 'react-redux';
import {removeContact,editContact,cancelContact,updateContact} from '../actions/ContactListActions';
import {Icon} from 'react-fa';
class Contact extends Component {
  constructor (props, context) {
    super(props, context);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleRemove(e){
    e.preventDefault();
    var {dispatch,contact} = this.props;
    dispatch(removeContact(contact.id));

  }
  handleEdit(e){
    e.preventDefault();
    var {dispatch,contact} = this.props;
    dispatch(editContact(contact.id));

  }
  handleCancel(e){
    e.preventDefault();
    var {dispatch,contact} = this.props;
    dispatch(cancelContact(contact.id));
  }
  handleUpdate(e){
    e.preventDefault();
    var {dispatch,contact} = this.props;
    dispatch(updateContact({...contact,name:this.refs.name.value,email:this.refs.email.value,phone:this.refs.phone.value}));

  }

  render() {
    if(this.props.contact.isEdit){
      return(
        <tr>
            <td><input type="text" className="form-control" ref="name" defaultValue={this.props.contact.name} required/></td>
            <td><input type="email" className="form-control" ref="email" defaultValue={this.props.contact.email} required/></td>
            <td><input type="tel" className="form-control" ref="phone" defaultValue={this.props.contact.phone} required/></td>
            <td className="update-control"><button type="button" className="btn btn-default btn-cancel" onClick={this.handleCancel}>Cancel</button> <button type="button" className="btn btn-default btn-save"  onClick={this.handleUpdate}>Save</button></td>
        </tr>
      );
    }
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.email}</td>
        <td>{this.props.contact.phone}</td>
        <td  className="contact-item"><Icon name="pencil" onClick={this.handleEdit} className="edit"/>  <Icon name="trash" onClick={this.handleRemove} className="remove"/></td>
      </tr>
    );
  }
}

export default connect()(Contact);
