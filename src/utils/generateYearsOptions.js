import React from 'react';
import GLOBALS from '../configs/MainConfigs';

export default function generateYearsOptions() {
  const currentYear = GLOBALS.current_year;
  const maxPreschoolAge = GLOBALS.max_preschool_age;
  const startYear = currentYear - maxPreschoolAge;
  let yearsList = [];
  let yearsOptions = [];
  for (var i = startYear; i <= currentYear; i++) {
    yearsList.push(i);
    let yearOption = <option key={'yo_' + i} value={i}>{i}</option>
    yearsOptions.push(yearOption);
  }
  return yearsOptions;
}
