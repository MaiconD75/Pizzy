import React, { useEffect, useState } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import DataContainer from '../../components/DataContainer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { Container } from './styles';
import { useFind, useSubscribe, useTracker } from 'meteor/react-meteor-data';
import { IncomesCollection, Income } from '/imports/api/incomes/IncomeCollection';
import { Navigate } from 'react-router-dom';

const options = {
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sales and expenses per month' ,
      },
      scales: {
        ticks: {
          textStrokeColor: "#fefefe",
        }
      }
    }
}

const Income: React.FC = () => {
  const user = useTracker(() => Meteor.user());

  const isLoading = useSubscribe('allIncomes');
  const incomes = useFind(() => IncomesCollection.find({}));
  const [getAccess, setGetAccess] = useState(true);

  useEffect(() => {
    if (user?._id) {
      setGetAccess(Roles.userIsInRole(user._id, 'INCOMES_ACCESS'));
    }
  }, [user?._id])

  if(isLoading()) {
    return (
      <Container>
        <strong>
          loading...
        </strong>
      </Container>
    );
  }

  if (!getAccess) {
    return <Navigate to="/dashboard/pizzas" />
  }

  const data = {
    labels: incomes.map(income => income.month),
    datasets: [
      {
        label: 'Sales',
        data: incomes.map(income => income.total_sales),
        backgroundColor: '#FDBC37',
      },
      {
        label: 'Expenses',
        data: incomes.map(income => income.total_expenses),
        backgroundColor: '#B33924',
      }
    ]
  }

  return (
    <Container>
      <div>
        <DataContainer
          title='Month total sales' 
          content={`$ ${incomes[incomes.length-1].total_sales }`}
        />
        <DataContainer
          title='Month total expenses' 
          content={`$ ${incomes[incomes.length-1].total_expenses }`}
        />
        <DataContainer
          title='Month profit ' 
          content={`$ ${incomes[incomes.length-1].total_sales - incomes[incomes.length-1].total_expenses }`}
        />
      </div>

      <Bar options={options} data={data} />
    </Container>
  );
}

export default Income;