export default function convertKilometerToMeter(km) {
  let converted = Math.round(km * 100) * 10;
  return converted;
}
