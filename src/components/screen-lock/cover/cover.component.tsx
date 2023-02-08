import { type FunctionComponent } from 'react';
import { interval, map } from 'rxjs';

import { useObservable } from '../../../utils/use-obserable.function';
import { zeroPad } from '../../../utils/zero-pad.function';
import './cover.component.scss';

const source = interval(10).pipe(map(() => new Date()));
const initialDate = new Date();
const timeOptions: Intl.DateTimeFormatOptions = { timeStyle: 'medium' };
const dateOptions: Intl.DateTimeFormatOptions = { dateStyle: 'full' };

export const Cover: FunctionComponent<CoverProps> = (props) => {
  const {} = props;
  const date = useObservable(source, initialDate);
  const centiseconds = Math.round(date.getMilliseconds() / 10);

  return (
    <div className="cover">
      <div className="cover-info">
        <div className="cover-info-time">
          {date.toLocaleTimeString(undefined, timeOptions)}.
          {zeroPad(centiseconds, 2)}
        </div>
        <div className="cover-info-date">{date.toLocaleDateString(undefined, dateOptions)}</div>
      </div>
    </div>
  );
};

export interface CoverProps {}
