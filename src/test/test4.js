function fetchData(callback) {
  setTimeout(() => {
    callback('peanut butter');
  }, 2000);
}

function fetchDataPromise() {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 4900);
  });
}

function fetchDataPromiseFalse() {
  return new Promise(( resolve, reject ) => {
    setTimeout(() => {
      reject('error');
    }, 2000);
  });
}

module.exports = { fetchData, fetchDataPromise, fetchDataPromiseFalse };
