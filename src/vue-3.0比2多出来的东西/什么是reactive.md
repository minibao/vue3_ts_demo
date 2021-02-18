

### 官方解释

reactive
返回对象的响应式副本

const obj = reactive({ count: 0 })
响应式转换是“深层”的——它影响所有嵌套 property。在基于 ES2015 Proxy 的实现中，返回的代理是不等于原始对象。建议只使用响应式代理，避免依赖原始对象。

类型声明：

function reactive<T extends object>(target: T): UnwrapNestedRefs<T>