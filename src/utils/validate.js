// 验证用户名是否有效（长度至少3位）
export function isvalidUsername(str) {
  // const valid_map = ['admin', 'test']  // 注释掉的白名单验证方式
  // return valid_map.indexOf(str.trim()) >= 0  // 注释掉的白名单验证方式
  return str.trim().length>=3  // 验证去空格后字符串长度是否大于等于3
}

/* 合法uri*/
export function validateURL(textval) {
  // 定义URL正则表达式，验证http/https/ftp协议的URL格式
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)  // 使用正则表达式测试URL格式是否合法
}

/* 小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/  // 定义只匹配小写字母的正则表达式
  return reg.test(str)  // 测试字符串是否只包含小写字母
}

/* 大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/  // 定义只匹配大写字母的正则表达式
  return reg.test(str)  // 测试字符串是否只包含大写字母
}

/* 大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/  // 定义匹配大小写字母的正则表达式
  return reg.test(str)  // 测试字符串是否只包含大小写字母
}
