// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}

// 这段代码是PostCSS的配置文件，用于配置CSS处理插件：
//
// - `postcss-import`：处理CSS中的@import语句
// - `postcss-url`：处理CSS中的URL路径
// - `autoprefixer`：自动添加浏览器厂商前缀，兼容不同浏览器
//
// 配置遵循postcss-load-config规范，通过package.json中的browserslist字段指定目标浏览器。
