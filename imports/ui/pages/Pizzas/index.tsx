import React, { useMemo } from 'react';
import { useTracker } from 'meteor/react-meteor-data'

import DataContainer from '../../components/DataContainer';

import { Container, PizzaTable } from './styles';
import { PizzasCollection } from '/imports/api/pizzas/PizzasCollection';

const Pizzas: React.FC = () => {
  const pizzas = useTracker(() => PizzasCollection.find({}).fetch())

  const memoizedData = useMemo(() => {
    let averagePrice = 0;
    pizzas.map(pizza => {
      averagePrice += pizza.price;
    });
    averagePrice = averagePrice / pizzas.length;

    let averageOrdersPerDay = 0;
    pizzas.map(pizza => {
      averageOrdersPerDay += pizza.orders_per_day;
    });

    return {
      averagePrice,
      averageOrdersPerDay
    }
  }, [pizzas]);

  return (
    <Container>
      <div>
        <DataContainer title="Flavors" content={`${pizzas.length}`} />
        <DataContainer title="Average price" content={`$ ${memoizedData.averagePrice}`} />
        <DataContainer title="Average orders per day" content={`${memoizedData.averageOrdersPerDay}`} />
      </div>
      <PizzaTable>
        <thead>
          <tr>
            <th>
              <p>
                Flavor
              </p>
              </th>
            <th>
              <p>
                Price
              </p>
              </th>
            <th>
              <p>
                Orders per day
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map(pizza => (
            <tr key={pizza._id}>
              <td>
                <p>{pizza.flavor}</p>
              </td>
              <td>
                <p>$ {pizza.price}</p>
              </td>
              <td>
                <p>{pizza.orders_per_day}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </PizzaTable>
    </Container>
  );
}

export default Pizzas;