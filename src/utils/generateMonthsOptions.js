import React from 'react';
import GLOBALS from 'configs/MainConfigs';

export default function generateMonthsOptions() {
  let monthsList = GLOBALS.months_list;
  let monthsOptions = monthsList.map((month, i) =>
    <option key={'mo_' + i} value={i + 1}>{month}</option>
  );
  return monthsOptions;
}
