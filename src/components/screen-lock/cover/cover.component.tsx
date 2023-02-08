import { type FunctionComponent } from 'react';
import { interval, map } from 'rxjs';

import { useObservable } from '../../../utils/use-obserable.function';
import './cover.component.scss';

const source = interval(10).pipe(map(() => new Date()));
const initialDate = new Date();
const timeOptions: Intl.DateTimeFormatOptions = { timeStyle: 'medium' };
const dateOptions: Intl.DateTimeFormatOptions = { dateStyle: 'full' };

export const Cover: FunctionComponent<CoverProps> = (props) => {
  const { backgroundImageUrl } = props;
  const date = useObservable(source, initialDate);

  return (
    <div className="cover" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="cover-info">
        <div className="cover-info-time">{date.toLocaleTimeString(undefined, timeOptions)}</div>
        <div className="cover-info-date">{date.toLocaleDateString(undefined, dateOptions)}</div>
      </div>
    </div>
  );
};

export interface CoverProps {
  backgroundImageUrl: string;
}
