import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function contactReducer(state = initialState, action){
  switch(action.type){
    case types.ADD_CONTACT:
      return {...state, contactList:[action.contact,...state.contactList]};

    case types.REMOVE_CONTACT:
      return {...state, contactList: state.contactList.filter(function(contact){
        return contact.id !== action.id;
      })};

    case types.EDIT_CONTACT:
      return {...state,contactList:state.contactList.map((contact) => {
        if(contact.id === action.id)
          return{
            ...contact,
            isEdit: true
          }
        else {
          return contact;
        }
      })};

      case types.CANCEL_CONTACT:
        return {...state,contactList:state.contactList.map((contact) => {
          if(contact.id === action.id)
            return{
              ...contact,
              isEdit: false
            }
          else {
            return contact;
          }
        })};

        case types.UPDATE_CONTACT:
          var updatedContact = {...action.contact,isEdit: false};
          var updatedState = {...state,contactList:state.contactList.map((contact) => {
            if(contact.id ===updatedContact.id)
              return updatedContact;
            else return contact;
          })};
          return updatedState;

        case types.SORT_CONTACT:
          var dir = action.sort.sortDir;
          var sortBy = action.sort.sortBy;
          var sortedList = state.contactList.sort(function(a,b){

              var objA=a[sortBy].toLowerCase(), objB=b[sortBy].toLowerCase()
              if (objA < objB ) //sort string ascending
                  return -1
              if (objA > objB)
                  return 1
              return 0 //default return value (no sorting)
          });
          if(dir === "DESC")
            return {...state, contactList:sortedList.reverse(), sortBy:sortBy,sortDir:dir};
          else {
            return {...state, contactList:sortedList, sortBy:sortBy, sortDir:dir};
          }
    default:
      return state;
  }
}
