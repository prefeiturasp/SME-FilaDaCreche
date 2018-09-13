import composeDateOfBirthMsg from './composeDateOfBirthMsg';

it('Composes correct message informing date of birth', () => {
  expect(composeDateOfBirthMsg(3, 2016)).toEqual("A criança nasceu em março de 2016");
  expect(composeDateOfBirthMsg(4, 2014)).toEqual("A criança nasceu em abril de 2014");
});
