import STRINGS from 'configs/Strings';
import GLOBALS from 'configs/MainConfigs';

export default function composeDateOfBirthMsg(month, year) {
  let monthName = GLOBALS.months_list[month - 1];
  monthName = monthName ? monthName.toLowerCase() : '';
  return STRINGS.date_of_birth_message(monthName, year);
}
