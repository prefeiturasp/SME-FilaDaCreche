import calculatePreschoolGroup from './calculatePreschoolGroup';
import GLOBALS from '../configs/MainConfigs';

describe('Works in 2017', () => {
  beforeEach(() => {
    GLOBALS.current_year = 2017;
  });

  it('Separates kids correctly on their groups', () => {
    expect(calculatePreschoolGroup(5, 2017)).toHaveProperty('cd_faixa', "1");
    expect(calculatePreschoolGroup(2, 2017)).toHaveProperty('cd_faixa', "1");
    expect(calculatePreschoolGroup(4, 2016)).toHaveProperty('cd_faixa', "1");
    expect(calculatePreschoolGroup(3, 2016)).toHaveProperty('cd_faixa', "2");
    expect(calculatePreschoolGroup(12, 2015)).toHaveProperty('cd_faixa', "2");
    expect(calculatePreschoolGroup(2, 2015)).toHaveProperty('cd_faixa', "3");
    expect(calculatePreschoolGroup(1, 2014)).toHaveProperty('cd_faixa', "4");
    expect(calculatePreschoolGroup(6, 2013)).toHaveProperty('cd_faixa', "4");
    expect(calculatePreschoolGroup(3, 2013)).toEqual({error: true});
    expect(calculatePreschoolGroup(7, 2012)).toEqual({error: true});
    expect(calculatePreschoolGroup(1, 2018)).toEqual({error: true});
    expect(calculatePreschoolGroup(4, 2019)).toEqual({error: true});
  });
});

describe('Works in 2019', () => {
  beforeEach(() => {
    GLOBALS.current_year = 2019;
  });

  it('Separates kids correctly on their groups', () => {
    expect(calculatePreschoolGroup(4, 2019)).toHaveProperty('cd_faixa', "1");
    expect(calculatePreschoolGroup(1, 2018)).toHaveProperty('cd_faixa', "2");
    expect(calculatePreschoolGroup(8, 2013)).toEqual({error: true});
    expect(calculatePreschoolGroup(8, 2020)).toEqual({error: true});
  });
});
