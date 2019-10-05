import GLOBALS from '../configs/MainConfigs';
import generateYearsOptions from './generateYearsOptions';

test('Generates years option based on current date and global variables', () => {
  const yearsOptions = generateYearsOptions();

  const maxPreschoolAge = GLOBALS.max_preschool_age;
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - maxPreschoolAge;

  expect(yearsOptions.length).toEqual(maxPreschoolAge + 1);

  for (var i = 0; i < yearsOptions.length; i++) {
    let yearValue = startYear + i;
    expect(yearsOptions[i].props.value).toEqual(yearValue)
  }

});
