/**
 * 事件触发器
 */

class EventEmitter {
  listeners: { [k: string]: ((...args: any[]) => void)[] } = {};

  on = (name: string, fn: (...args: any[]) => void) => {
    if (this.listeners[name]) {
      this.listeners[name].push(fn);
    } else {
      this.listeners[name] = [fn];
    }
  };

  off = (name: string, fn: (...args: any[]) => void) => {
    if (this.listeners[name]) {
      const index = this.listeners[name].indexOf(fn);
      if (index !== -1) {
        this.listeners[name].splice(index, 1);
      }
    }
  };

  once = (name: string, fn: (...args: any[]) => void) => {
    const func = (...args: any[]) => {
      fn(...args);
      this.off(name, func);
    };
    this.on(name, func);
  };

  emit = (name: string, data: any) => {
    if (this.listeners[name]) {
      this.listeners[name].forEach((fn) => {
        fn(data);
      });
    }
  };
}
