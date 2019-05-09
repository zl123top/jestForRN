const { fetchData, fetchDataPromise, fetchDataPromiseFalse } = require('./test4.js');

test('the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    // done();
  }

  fetchData(callback);
});

test('the data is peanut butter Promise', () => {
  return fetchDataPromise().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataPromiseFalse().catch(e => expect(e).toMatch('error'));
});

test('the data is peanut butter', () => {
  return expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () => {
  return expect(fetchDataPromiseFalse()).rejects.toMatch('error');
});

test('the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchDataPromise();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchDataPromiseFalse();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
// Of course, you can combine async and await with .resolves or .rejects.

test('the data is peanut butter', async () => {
  await expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataPromiseFalse()).rejects.toThrow('error');
});
