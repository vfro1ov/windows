import { useEffect, useState } from 'react';
import { BehaviorSubject, type Observable } from 'rxjs';

export function useObservable<T, I = null>(
  observable: Observable<T>,
  initialState: I = null as I,
): T | I {
  initialState =
    observable instanceof BehaviorSubject
      ? observable.value
      : observable.source && observable.source instanceof BehaviorSubject
        ? observable.source.value
        : initialState;

  const [value, setValue] = useState<T | I>(initialState);

  useEffect(() => {
    let prevValue: T;

    const subscription = observable.subscribe((nextValue) => {
      if (nextValue === prevValue) {
        return;
      }

      prevValue = nextValue;
      setValue(nextValue);
    });

    return () => {
      if (!subscription.closed) {
        subscription.unsubscribe();
      }
    };
  }, [observable]);

  return value;
}
