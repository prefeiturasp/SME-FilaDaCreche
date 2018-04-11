import convertKilometerToMeter from './convertKilometerToMeter';

it('Converts kilometers to meters, rounding tenths of a number', () => {
  expect(convertKilometerToMeter(1.256)).toEqual(1260);
  expect(convertKilometerToMeter(1.249)).toEqual(1250);
  expect(convertKilometerToMeter(3.012)).toEqual(3010);
});
