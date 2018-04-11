import generateMonthsOptions from './generateMonthsOptions';

test('Generates option tags for each month of the year', () => {
  const monthsOptions = generateMonthsOptions();

  expect(monthsOptions.length).toEqual(12);

  const initalMonthValue = 1;

  for (var i = 0; i < monthsOptions.length; i++) {
    let monthValue = initalMonthValue + i;
    expect(monthsOptions[i].props.value).toEqual(monthValue)
  }
});
