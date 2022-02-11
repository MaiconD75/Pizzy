import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

Meteor.methods({
  'users.insert'({username, password}) {
    return Accounts.createUser({username, password});
  },

  'users.find_by_username'({username}) {
    return Accounts.findUserByUsername(username);
  }
})