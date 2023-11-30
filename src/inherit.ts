/**
 * 继承
 */
function inherit(child: Function, parent: Function) {
  // 继承父类原型，相当于空的中间类
  const parentPrototype = Object.create(parent.prototype);
  // 子类原型的属性可以覆盖父类
  child.prototype = Object.assign(parentPrototype, child.prototype);
  child.prototype.constructor = child;
}

export default inherit;
