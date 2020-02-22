# antd-blog-pro
a blog use antd react umi dva

```
    git clone https://github.com/guyuezhai/antd-blog-pro.git
    cd antd-blog-pro
    
    <kbd> npm </kbd> 安装依赖模块比较慢 推荐采用 <kbd>cnpm</kbd> 镜像安装依赖
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    cnpm i
    npm run dev
```
# 文档目录结构
```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```
* 欢迎页
* 地图页

![热烈欢迎](https://github.com/guyuezhai/antd-blog-pro/tree/master/src/assets/welcome.jpg "热烈欢迎")
![中国地图](https://github.com/guyuezhai/antd-blog-pro/tree/master/src/assets/map.jpg "中国地图")
