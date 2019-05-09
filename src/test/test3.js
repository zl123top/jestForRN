// 匹配器
function fn(data) {
  data['two'] = 2;
  return data;
}

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

module.exports = {fn, compileAndroidCode};
