function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 查找同级目录下以vue结尾的组件
const requireComponent = require.context("./components", true, /\.vue$/);
// 对外暴露install方法
const install = (Vue) => {
  requireComponent.keys().forEach((fileName) => {
    let config = requireComponent(fileName);
    let componentName = changeStr(
      fileName.replace(/^\.\//, "").replace(/\.\w+$/, "")
    );
    componentName = componentName.split('/')[componentName.split('/').length - 1]
    Vue.component(componentName, config.default || config);
  });
};

export default {
  // 对外暴露install方法
  install,
};