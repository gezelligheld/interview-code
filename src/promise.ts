enum Status {
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
}

class MyPromise {
  status = Status.pending;

  resolveFns: ((res: any) => any)[] = [];

  rejectFns: ((e: any) => any)[] = [];

  value: any | null = null;

  constructor(
    fn: (resolve: (res: any) => any, reject: (e: any) => any) => void
  ) {
    try {
      fn(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }

  resolve = (res: any) => {
    if (this.status !== Status.pending) {
      return;
    }
    this.value = res;
    this.resolveFns.forEach((fn) => {
      fn(this.value);
    });
  };

  reject = (e: any) => {
    if (this.status !== Status.pending) {
      return;
    }
    this.value = e;
    this.rejectFns.forEach((fn) => {
      fn(this.value);
    });
  };

  then = (resolve: (res: any) => any, reject?: (e: any) => any) => {
    if (this.status === Status.pending) {
      this.resolveFns.push(resolve);
      reject && this.rejectFns.push(reject);
    } else if (this.status === Status.resolved) {
      resolve(this.value);
    } else {
      reject?.(this.value);
    }
  };
}
