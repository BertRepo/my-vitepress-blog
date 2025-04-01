---
description: 💁 学习一下什么是受控组件/非受控组件
title: 受控/非受控组件
author: Bert
date: 2025-04-01
hidden: false
comment: true
sticky: 115
top: 120
recommend: 22
tag:
  - 前端
category:
  - 工程化
---

# 🎯 理解 受控组件 vs 非受控组件

受控/非受控组件是处理表单元素的两种不同方式，主要区别在于数据的管理方式和更新机制。

## 一、核心概念对比

### 1. 受控组件 (Controlled Components)
```jsx
// 典型代码结构
const [value, setValue] = useState('');
<input value={value} onChange={(e) => setValue(e.target.value)} />
```

受控组件的内部状态并不是封闭的，其存在内部状态变量向外部组件暴露的情况。比如，通过props实现父子组件通信，父组件可以通过props修改子组件中的某个状态变量。

**核心特征**：
- 🎛️ 完全受 React 状态控制
- 🔄 通过 `props` 实现状态暴露
- 📡 数据流：用户输入 → onChange → 更新 state → 重新渲染

### 2. 非受控组件 (Uncontrolled Components)
```jsx
// 典型代码结构
const inputRef = useRef(null);
<input ref={inputRef} defaultValue="初始值" />
```

非受控组件的内部状态则是封闭组件内部的，此外没有任何属性。他的组件状态不受外部环境的控制，由DOM节点自身维护。

**核心特征**：
- 🕳️ 状态封闭在 DOM 内部
- 🎯 通过 `ref` 按需获取值
- 🏷️ 更接近原生 HTML 表单行为

因此，想要实现非受控组件向受控组件转换，将组件内部的状态变量暴露给外部组件即可。

## 二、深度特性分析

### 状态管理对比
| 维度               | 受控组件                     | 非受控组件               |
|--------------------|----------------------------|-------------------------|
| **状态存储位置**    | React 状态                 | DOM 节点                |
| **状态暴露方式**    | 通过 props 暴露             | 完全封闭                |
| **更新触发条件**    | 每次 onChange 触发渲染      | 仅提交时获取值          |
| **默认值设置**      | 通过 `value` 属性          | 使用 `defaultValue`     |

### 混合模式实现

但是如果想要实现一个组件既是受控组件，又是非受控组件，则需要保持他既可实现组件间状态同步，又可直接使用内部状态。

```jsx
function HybridComponent({ value: propValue, onChange }) {
  const [internalValue, setInternalValue] = useState(propValue);
  
  // 判断是否为受控模式
  const isControlled = propValue !== undefined;
  const value = isControlled ? propValue : internalValue;

  const handleChange = (e) => {
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
    onChange?.(e.target.value);
  };

  return <input value={value} onChange={handleChange} />;
}
```

**混合模式特点**：
- 🤹 同时支持受控/非受控两种模式
- 🔄 优先判断外部是否传入 value 属性
- ⚖️ 内部维护 fallback 状态

## 三、最佳实践指南

### 何时选择受控组件？
✅ 需要即时验证（如密码强度检查）  
✅ 表单值依赖其他组件状态  
✅ 需要动态禁用/启用提交按钮  

### 何时选择非受控组件？
✅ 大型表单性能优化（避免频繁渲染）  
✅ 集成第三方非 React 库  
✅ 简单的一次性提交表单  

### 性能优化技巧
```jsx
// 优化频繁更新的受控组件
const [value, setValue] = useState('');
const memoizedInput = useMemo(() => (
  <ExpensiveComponent value={value} />
), [value]);
```

## 四、常见误区解析

❌ **误区1**："非受控组件不能设置初始值"  
💡 正解：可以通过 `defaultValue` 设置初始值

❌ **误区2**："受控组件必须用 useState"  
💡 正解：也可以使用 useReducer 或其他状态管理

❌ **误区3**："ref 只能用于非受控组件"  
💡 正解：受控组件也可以使用 ref 访问 DOM 节点

---

> 📌 **关键总结**：  
> 1. 受控组件通过 React 状态驱动，适合需要精确控制的场景  
> 2. 非受控组件依赖 DOM 状态，适合简单表单或性能敏感场景  
> 3. 混合模式组件可同时兼容两种模式，但会增加复杂度


参考文章

👉 [antd mobile 作者教你写 React 受控组件和非受控组件](https://mp.weixin.qq.com/s?__biz=MzI1ODk2Mjk0Nw==&mid=2247490176&idx=1&sn=72744e3f22fc3c749e77a070c26957f4&chksm=ea0179ecdd76f0faa76a68711e0d2c881ae7143fa1d7f73fc6ac35e11b7bd89f03df0b11463d&scene=27)

