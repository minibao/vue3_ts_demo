Multiple v-models
V-model 是一种指令，可用于在给定组件上实现双向绑定。我们可以传递响应性属性，并从组件内部对其进行修改。

我们可以从表单元素上很好的了解 v-model：

<input v-bind="property />
但是你知道可以对每个组件都使用 v-model 吗？在内部， v-model 只是传递 value 属性和侦听 input 事件的捷径。把上面的例子重写为以下语法，将具有完全相同的效果：

<input 
  v-bind:value="property"
  v-on:input="property = $event.target.value"
/>
我们甚至可以用组件 model 属性来更改默认属性和事件的名称：

model: {
  prop: 'checked',
  event: 'change'
}
如你所见，如果我们想要在组件中进行双向绑定，v-model 指令可能是一个非常有用的语法。不幸的是，每个组件只能有一个 v-model。

幸运的是，这在 Vue 3 中不会有问题！你将能够给 v-model 属性名，并根据需要拥有尽可能多的属性名。在下面的例子中，你可以在表单组件中找到两个 v-model：

<InviteeForm
  v-model:name="inviteeName"
  v-model:email="inviteeEmail"
/>
目前，此 API 的更改已在这个 RFC 中进行讨论，这意味着将来可能会有更改。