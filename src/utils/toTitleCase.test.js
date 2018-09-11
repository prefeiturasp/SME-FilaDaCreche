import toTitleCase from './toTitleCase';

it('Converts words to title case', () => {
  expect(toTitleCase("Beterraba")).toEqual("Beterraba");
  expect(toTitleCase("índio")).toEqual("Índio");
  expect(toTitleCase("maÇãs")).toEqual("Maçãs");
  expect(toTitleCase("ÔNIBUS")).toEqual("Ônibus");
  expect(toTitleCase("NúM3ros")).toEqual("Núm3ros");
});

it('Converts every word in some text to title case', () => {
  expect(toTitleCase("Space separated.")).toEqual("Space Separated.");
  expect(toTitleCase("What about commas, dots? That kind'o stuff.")).toEqual("What About Commas, Dots? That Kind'o Stuff.");
  expect(toTitleCase("What.AbOut.missing spaces?")).toEqual("What.about.missing Spaces?");
});

it("Doesn't crash on corner cases", () => {
  expect(toTitleCase("")).toEqual("");
  expect(toTitleCase(".,.")).toEqual(".,.");
});
