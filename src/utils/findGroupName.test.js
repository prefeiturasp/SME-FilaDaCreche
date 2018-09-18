import findGroupName from './findGroupName';

test('Finds the group name given a valid groupCode', () => {
  expect(findGroupName("27")).toEqual("Mini Grupo I");
});
