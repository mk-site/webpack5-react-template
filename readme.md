### 命令

本地开发：
npm run dev:test  npm run dev:prod

部署：
npm run build:test npm run build:test


### eslint使用

vscode软件安装 ESLint软件即可

### 获取页面元素，自动打开vscode并自动打开相对应组件的文件

```
  press hotkey (ctrl⌃ + shift⇧ + commmand⌘ + c), then click the HTML element you wish to inspect.

  使用文档：https://www.npmjs.com/package/react-dev-inspector
```

### 目录说明
```

| assets
| components
| hooks
| pages 页面
    | detail
        | components 详情页面公共组件
        detailA
          | components 组件
          | index.tsx 页面
        detailB
          | components 组件
          | index.tsx 页面
    | home
        | components 组件
        | index.tsx 页面
    | test test页面

| router 路由
| store 状态管理

```