/**
 * 观察者模式
 */

class Observer {
  name = '';
  constructor(name: string) {
    this.name = name;
  }
  update = () => {
    console.log(this.name, '观察者更新');
  };
}

class Subject {
  observers: Observer[] = [];

  notice = () => {
    this.observers.forEach((observer) => {
      observer.update();
    });
  };

  register = (observer: Observer) => {
    this.observers.push(observer);
  };

  unregister = (observer: Observer) => {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  };
}

const subject = new Subject();
subject.register(new Observer('demo'));
subject.notice();

export { Observer, Subject };
