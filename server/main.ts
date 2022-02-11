import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

import '/imports/api/incomes/IncomePublications';
import '/imports/api/users/UserMethod';

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

const SEED_USERNAME = 'user';
const SEED_PASSWORD = '1234567';
const ANOTHER_SEED_USERNAME = 'maicon';
const ANOTHER_SEED_PASSWORD = '7654321';

Meteor.startup(() => {
  if(Roles.getAllRoles().fetch().length <= 0) {
    Roles.createRole('USERS_ACCESS');
    Roles.createRole('INCOMES_ACCESS');
    Roles.createRole('manager');
    Roles.createRole('user');
    Roles.createRole('accountant');

    Roles.addRolesToParent(['USERS_ACCESS', 'INCOMES_ACCESS'], 'manager');
    Roles.addRolesToParent(['INCOMES_ACCESS'], 'accountant');
  }

  if(!Accounts.findUserByUsername(SEED_USERNAME)) {
    const newUserId = Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });

    Roles.addUsersToRoles(newUserId, 'accountant')
  }

  if(!Accounts.findUserByUsername(ANOTHER_SEED_USERNAME)) {
    const newUserId = Accounts.createUser({
      username: ANOTHER_SEED_USERNAME,
      password: ANOTHER_SEED_PASSWORD,
    });

    Roles.addUsersToRoles(newUserId, 'manager')
  }

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
