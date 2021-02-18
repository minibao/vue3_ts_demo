Portals
Portals 是特殊的组件，用来在当前组件之外渲染某些内容。它也是在 React 中实现的功能之一。这就是 React 文档关于 Portals 的内容：

“Portals 提供了一种独特的方法来将子级渲染到父组件的 DOM 层次结构之外的 DOM 节点中。”

这种处理模式，是弹出式窗口以及通常显示在页面顶部的组件所使用的一种非常好的方法。通过使用 Portals，你可以确保没有任何主机组件 CSS 规则会影响你要显示的组件，并且可以避免用 z-index 进行的黑客攻击。

对于每个 Portal，我们需要为其指定目标位置，在该目标位置将渲染 Portals 内容。在下面，你可以从 portal-vue 库中看到实现，该库将此功能添加到了 Vue 2：

<portal to="destination">
  <p>This slot content will be rendered wherever thportal-target with name 'destination'
    is  located.</p>
</portal>

<portal-target name="destination">
  <!--
  This component can be located anywhere in your App.
  The slot content of the above portal component wilbe rendered here.
  -->
</portal-target>
Portals是vue2.X的产物

Vue 3 对 Portals 提供开箱即用的支持！使用全新的 teleport组件