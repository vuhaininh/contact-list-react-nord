import * as faker from 'faker';

var contactList = [];
for (var i = 0; i < 20; i++){
  var contact = {
    id:faker.random.uuid(),
    name: faker.name.findName(),
    email:faker.internet.email(),
    phone:faker.phone.phoneNumberFormat(),
    isEdit: false
  };
  contactList.push(contact);
}
export default {
  contactList: contactList,
  sortBy: "name",
  sortDir: ""
}
