import React from 'react';
import {Link} from 'react-router';

function weeks_between(date1, date2) {
	const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
	const date1_ms = date1.getTime();
	const date2_ms = date2.getTime();
	const difference_ms = Math.abs(date1_ms - date2_ms);
	return Math.floor(difference_ms / ONE_WEEK);
}
const HomePage = () => {
  const natka = new Date("2016-11-03T18:40:00");
  const weeks = weeks_between(natka,new Date());
  return (
    <div>
      <h1>Weeks since Natka was born: {weeks}</h1>

    </div>
  );
};

export default HomePage;
