describe("resolved promise", () => {
  test("resolved promise", () => {
    expect(Promise.resolve(12)).resolves.toBe(12);
  });

  test("resolved promise using async await", async () => {
    const resolve = await new Promise((res, rej) => res(20));
    //console.log(resolve);
    expect(resolve).toBe(20);
  });
});

describe("rejected promise", () => {
  test("rejected promise with throw", () => {
    expect(Promise.reject(new Error("promise rejected"))).rejects.toThrow(
      "promise rejected"
    );
  });

  test("rejected promise with toMatch", () => {
    expect(Promise.reject("promise rejected")).rejects.toMatch(
      "promise rejected"
    );
  });
});

//unexpected errors
describe("unexpected errors with async/await", () => {
  test("rejected promise new Error ", async () => {
    try {
      await new Promise((res, reject) =>
        reject(new Error("promise rejected"))
      );
    } catch (error) {
      //fail("Promise should not reject");
      expect(error.message).toMatch("promise rejected");
    }
  });

  test("rejected promise without New Err ", async () => {
    try {
   await new Promise((res, reject) =>
        reject("promise rejected")
      );
    } catch (error) {
      expect(error).toMatch("promise rejected");
    //   console.log(error);
    }
  });

});
