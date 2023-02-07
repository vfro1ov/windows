import { type FunctionComponent } from 'react';

import { desktopLink$ } from '../subjects/desktop-link.subject';

export const DesktopLink: FunctionComponent<DesktopLinkProps> = (props) => {
  const { icon, name, command } = props;

  return (
    <div className="desktop-link">
      <figure
        onClick={() => {
          desktopLink$.next(command);
        }}
      >
        <img src={icon} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

export interface DesktopLinkProps {
  icon: string;
  name: string;
  command: string;
}
