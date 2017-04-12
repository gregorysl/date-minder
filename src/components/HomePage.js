import React from 'react';
import { Link } from 'react-router';
import DatesPage from './DatesPage';
import moment from 'moment';

const HomePage = () => {
  const natka = moment([2016, 10, 3]);
  const days = moment().diff(natka, 'days');
  const weeks = moment().diff(natka, 'weeks');
  const months = moment().diff(natka, 'months');
  return (
    <div>
      <h1>Days since Natka was born: {days}</h1>
      <h1>Weeks since Natka was born: {weeks}</h1>
      <h1>Months since Natka was born: {months}</h1>
      <DatesPage />
    </div>
  );
};

export default HomePage;
