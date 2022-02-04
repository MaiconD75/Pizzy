import { IncomesCollection } from './IncomeCollection';
import { Meteor } from 'meteor/meteor';

Meteor.publish('allIncomes', () => {
  return IncomesCollection.find();
})