import GLOBALS from 'configs/MainConfigs';

export default function findGroupName (groupCode) {
  return GLOBALS.age_ranges.find(
    // eslint-disable-next-line eqeqeq
    o => o.serie == groupCode,
  ).dc_serie_ensino;
}
