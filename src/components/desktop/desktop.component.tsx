import { type FunctionComponent } from 'react';

import { DesktopLink, type DesktopLinkProps } from './desktop-link/desktop-link.component';
import { desktopLink$ } from './desktop-link/desktop-link.subject';
import { useObservable } from '../../utils/use-obserable.function';

export const Desktop: FunctionComponent<DesktopProps> = (props) => {
  const { linkProps } = props;
  const command = useObservable(desktopLink$);

  return (
    <div className="desktop">
      <div className="desktop-wall">
        {linkProps.map((linkProps, index) =>
          <DesktopLink key={index} {...linkProps} />)}
      </div>
      <div className="desktop-start">{command}</div>
    </div>
  );
};

export interface DesktopProps {
  linkProps: DesktopLinkProps[];
  // programs: Program[];
}
