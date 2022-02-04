import { Meteor } from 'meteor/meteor';
import '/imports/api/incomes/IncomePublications';

import { IncomesCollection } from '/imports/api/incomes/IncomeCollection';
import { PizzasCollection, } from '/imports/api/pizzas/PizzasCollection';

function insertPizza(
  flavor: string,
  price: number,
  orders_per_day: number,
  ) {
  PizzasCollection.insert({ flavor, price, orders_per_day });
}

function insertIncome(
  month: string,
  year: number,
  total_sales: number,
  total_expenses: number
  ) {
    IncomesCollection.insert({ month, year, total_sales, total_expenses });
}

Meteor.startup(() => {

  if (IncomesCollection.find().count() === 0) {
    [
      {
        month: 'Oct',
        year: 2021,
        total_sales: 24482.00,
        total_expenses: 10227.32
      },
      {
        month: 'Nov',
        year: 2021,
        total_sales: 27522.20,
        total_expenses: 9894.46
      },
      {
        month: 'Dec',
        year: 2021,
        total_sales: 39420.80,
        total_expenses: 13864.51
      },
      {
        month: 'Jan',
        year: 2022,
        total_sales: 37374.00,
        total_expenses: 11718.42,
      }
    ].map(income => {
      insertIncome(income.month, income.year, income.total_sales, income.total_expenses)
    })
  }

  if (PizzasCollection.find().count() === 0) {
    [{
      flavor: 'Calabresa',
      price: 28.90,
      order_per_day: 14,
    },
    {
      flavor: 'Frango com catupiry',
      price: 29.90,
      order_per_day: 6,
    },
    {
      flavor: 'Marguerita',
      price: 31.90,
      order_per_day: 8,
    },
      {
      flavor: 'Mussarela',
      price: 28.90,
      order_per_day: 4,
    },
    {
      flavor: 'Portuguesa',
      price: 29.90,
      order_per_day: 10,
    }].map(pizza => {
      insertPizza(pizza.flavor, pizza.price, pizza.order_per_day)
    })
  }
});
