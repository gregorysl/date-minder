import React from 'react';
import { Link } from 'react-router';
import DatesPage from './DatesPage';

function weeks_between(date1, date2) {
  const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
  const date1_ms = date1.getTime();
  const date2_ms = date2.getTime();
  const difference_ms = Math.abs(date1_ms - date2_ms);
  return Math.floor(difference_ms / ONE_WEEK);
}
function days_between(date1, date2) {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const date1_ms = date1.getTime();
  const date2_ms = date2.getTime();
  const difference_ms = Math.abs(date1_ms - date2_ms);
  return Math.floor(difference_ms / ONE_DAY);
}
function months_between(date1, date2) {
  let months = date2.getMonth() - date1.getMonth()
    + (12 * (date2.getFullYear() - date1.getFullYear()));

  if (date2.getDate() < date1.getDate()) {
    months--;
  }
  return months;
}
const HomePage = () => {
  const natka = new Date("2016-11-03T18:40:00");
  const days = days_between(natka, new Date());
  const weeks = weeks_between(natka, new Date());
  const months = months_between(natka, new Date());
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
