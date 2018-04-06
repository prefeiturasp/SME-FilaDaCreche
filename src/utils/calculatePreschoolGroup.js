import GLOBALS from 'configs/MainConfigs';

export default function calculatePreschoolGroup(monthOfBirth, yearOfBirth) {
  const checkAge = Date.parse(monthOfBirth + "/15/" + yearOfBirth); // set it to middle of month
  const ageRanges = GLOBALS.age_ranges;
  for (var i = 0; i < ageRanges.length; i++) {
    if (checkAge >= ageRanges[i].birth_start && checkAge <= ageRanges[i].birth_end) {
      return ageRanges[i];
    }
  }
  return {error: true};
}
