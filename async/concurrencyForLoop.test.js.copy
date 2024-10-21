async function fetchAdminData(url1, url2) {
  try {
    const res1 = await fetch(url1);
    const res2 = await fetch(url2);
    if (!res1.ok || !res2.ok) throw new Error("no data found");
    // console.log(".ok ", res1.ok, res2.ok);
    const data1 = await res1.json();
    const data2 = await res2.json();
    return { data1, data2 };
  } catch (error) {
    throw new Error("failed to fetch data");
  }
}

test("works well", async () => {
  const url1 = "https://jsonplaceholder.typicode.com/users/1";
  const url2 = "https://jsonplaceholder.typicode.com/photos/1";
  const { data1, data2 } = await fetchAdminData(url1, url2);
  await expect(data1).toHaveProperty("id", 1);
});

test("url err", async () => {
  try {
    const url1 = "https://jsonplaceholder.typicode.com/users/1";
    const url2 = "34424";
    await fetchAdminData(url1, url2);
  } catch (error) {
    expect(error.message).toMatch("failed to fetch data");
  }
});
