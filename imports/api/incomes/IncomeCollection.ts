import { Mongo } from 'meteor/mongo';

export interface Income {
  _id?: string;
  month: string;
  year: number;
  total_sales: number;
  total_expenses: number;
}

export const IncomesCollection = new Mongo.Collection<Income>('incomes');
