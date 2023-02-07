import { type FunctionComponent } from 'react';

import { Desktop } from './components/Desktop';

export const App: FunctionComponent<AppProps> = (props) => {
  const {} = props;

  return (
    <div>
      <Desktop
        linkProps={[
          {
            icon: 'https://cdn-icons-png.flaticon.com/512/3706/3706340.png',
            name: 'free',
            command: 'assaf',
          },
          {
            icon: 'https://cdn-icons-png.flaticon.com/512/3706/3706340.png',
            name: 'leee',
            command: 'leeee bratishka',
          },
        ]}
      />
    </div>
  );
};

export interface AppProps {}
