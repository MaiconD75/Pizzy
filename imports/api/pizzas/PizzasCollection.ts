import { Mongo } from 'meteor/mongo';

export interface Pizza {
  _id?: string;
  flavor: string;
  price: number;
  orders_per_day: number;
}

export const PizzasCollection = new Mongo.Collection<Pizza>('pizzas');
