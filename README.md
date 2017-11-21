# 口袋豆瓣
## 1. 功能
    - 列表页展示
    - 底部 Tab 切换类别
    - 顶部搜索框功能
    - 点击 item 展示详情页
    - 返回列表页等功能。

## 2. 通过JSONP 拉取豆瓣数据
使用豆瓣 API 接口，涉及到跨域问题，可通过 `JSONP` 方式解决， JSONP 拉取组件（React 体系中不建议 jQuery）：
- [fetch-jsonp](https://github.com/camsong/fetch-jsonp)


### 豆瓣接口说明
[豆瓣开发者网站](https://developers.douban.com/wiki/?title=guide)有许多接口的说明文档，需要根据看豆瓣文档中接口的数据格式说明来进行开发页面。本应用涉及的接口文档如下：

**注意：豆瓣 API 有权限和访问次数限制，单个 ip 限制每个小时 150 次，这个问题大家可查看[这里](https://developers.douban.com/wiki/?title=api_v2)的说明。因此建议大家在开发时把拉取到的数据存到本地，避免超过次数。**


## 3. Standard
使用 `Standard` 来管理 JavaScript 的代码规范。

- [Standard 文档](https://standardjs.com/)
- [Standard - github 仓库](https://github.com/standard/standard)

