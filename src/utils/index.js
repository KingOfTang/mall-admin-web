export function parseTime(time, cFormat) { // 解析时间函数
  if (arguments.length === 0) { // 如果没有传入参数
    return null // 返回null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}' // 默认格式化字符串
  let date // 日期变量
  if (typeof time === 'object') { // 如果time是对象
    date = time // 直接赋值
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000 // 如果是10位时间戳，转换为13位
    date = new Date(time) // 创建日期对象
  }
  const formatObj = { // 格式化对象
    y: date.getFullYear(), // 年
    m: date.getMonth() + 1, // 月（需要+1）
    d: date.getDate(), // 日
    h: date.getHours(), // 时
    i: date.getMinutes(), // 分
    s: date.getSeconds(), // 秒
    a: date.getDay() // 星期
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => { // 替换格式化字符串
    let value = formatObj[key] // 获取对应值
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1] // 星期特殊处理
    if (result.length > 0 && value < 10) { // 如果需要补0
      value = '0' + value // 补0
    }
    return value || 0 // 返回值或0
  })
  return time_str // 返回格式化后的时间字符串
}

export function formatTime(time, option) { // 格式化时间显示函数
  time = +time * 1000 // 转换为毫秒
  const d = new Date(time) // 创建日期对象
  const now = Date.now() // 获取当前时间

  const diff = (now - d) / 1000 // 计算时间差（秒）

  if (diff < 30) { // 如果小于30秒
    return '刚刚' // 返回刚刚
  } else if (diff < 3600) { // less 1 hour // 如果小于1小时
    return Math.ceil(diff / 60) + '分钟前' // 返回分钟前
  } else if (diff < 3600 * 24) { // 如果小于1天
    return Math.ceil(diff / 3600) + '小时前' // 返回小时前
  } else if (diff < 3600 * 24 * 2) { // 如果小于2天
    return '1天前' // 返回1天前
  }
  if (option) { // 如果有自定义选项
    return parseTime(time, option) // 使用parseTime格式化
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分' // 返回中文格式时间
  }
}
