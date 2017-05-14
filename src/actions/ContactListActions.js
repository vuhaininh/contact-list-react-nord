import * as types from '../constants/ActionTypes';

export function addContact(contact) {
    return {
        type: types.ADD_CONTACT,
        contact
    };
};

export function removeContact(id){
  return {
    type: types.REMOVE_CONTACT,
    id
  };
};

export function editContact(id){
  return {
    type: types.EDIT_CONTACT,
    id
  };
};

export function cancelContact(id){
  return {
    type: types.CANCEL_CONTACT,
    id
  };
};

export function updateContact(contact){
  return {
    type: types.UPDATE_CONTACT,
    contact
  };
};
export function sortContact(sort){
  return {
    type: types.SORT_CONTACT,
    sort
  };
};
