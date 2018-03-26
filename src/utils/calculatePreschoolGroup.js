import GLOBALS from 'configs/MainConfigs';

export default function calculatePreschoolGroup(ageMonths) {
  const ageRanges = GLOBALS.age_ranges;
  for (var i = 0; i < ageRanges.length; i++) {
    if (ageMonths > ageRanges[i].mes_min && ageMonths <= ageRanges[i].mes_max) {
      return ageRanges[i];
    }
  }
  return {error: true};
}
