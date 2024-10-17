let testArr = [];
let addElement = { name: "Mal", age: 28 };
describe("test arr of objects", () => {
  beforeEach(() => {
    testArr = [];
  });

  test("adding ele by push", () => {
    testArr.push(addElement);
    expect(testArr).toEqual([addElement]);
  });

  test("remove ele by pop", () => {
    testArr.unshift(addElement);
    expect(testArr[0]).toEqual(addElement);
  });

  test("arr initial length be 0", () => {
    expect(testArr).toHaveLength(0);;
  });
});
