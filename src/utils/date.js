// date.js // 日期处理工具文件

export function formatDate(date, fmt) { // 格式化日期函数
  if (/(y+)/.test(fmt)) { // 检查格式中是否包含年份
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)); // 替换年份格式
  }
  let o = { // 定义日期各部分映射
    'M+': date.getMonth() + 1, // 月份（从0开始需要+1）
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分钟
    's+': date.getSeconds() // 秒
  };
  for (let k in o) { // 遍历日期各部分
    if (new RegExp(`(${k})`).test(fmt)) { // 检查格式中是否包含当前部分
      let str = o[k] + ''; // 转换为字符串
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str)); // 替换格式，不足两位补0
    }
  }
  return fmt; // 返回格式化后的日期字符串
}

function padLeftZero(str) { // 左侧补0函数
  return ('00' + str).substr(str.length); // 在字符串前加'00'然后截取
}

export function str2Date(dateStr, separator) { // 字符串转日期函数
  if (!separator) { // 如果没有指定分隔符
    separator = "-"; // 默认使用"-"
  }
  let dateArr = dateStr.split(separator); // 按分隔符分割日期字符串
  let year = parseInt(dateArr[0]); // 解析年份
  let month; // 月份变量
  //处理月份为04这样的情况
  if (dateArr[1].indexOf("0") == 0) { // 如果月份以0开头
    month = parseInt(dateArr[1].substring(1)); // 去掉前导0后解析
  } else {
    month = parseInt(dateArr[1]); // 直接解析月份
  }
  let day = parseInt(dateArr[2]); // 解析日期
  let date = new Date(year, month - 1, day); // 创建日期对象（月份需要-1）
  return date; // 返回日期对象
}
