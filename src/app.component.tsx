import { type FunctionComponent } from 'react';

import { Desktop } from './components/desktop/desktop.component';
import { ScreenLock } from './components/screen-lock/screen-lock.component';

export const App: FunctionComponent<AppProps> = (props) => {
  const {} = props;

  return (
    <div>
      <ScreenLock ProfileProps={[
        {
          login: 'vfrolov',
          pass: '',
          iconProfile: 'https://avatars.mds.yandex.net/i?id=ee1d6d355e9bb7a78fa4046a3fc1bc2e-4612841-images-thumbs&n=13',
        },
      ]} />
      <Desktop
        linkProps={[
          {
            icon: 'https://img.icons8.com/ios-filled/1x/windows-10.png',
            name: 'windows',
            command: 'windows 10',
          },
          {
            icon: 'https://img.icons8.com/color/1x/adobe-photoshop--v2.png',
            name: 'photoshop',
            command: 'Adobe Photoshop',
          },
          {
            icon: 'https://img.icons8.com/color/1x/folder-invoices.png',
            name: 'folder',
            command: 'Folder',
          },
        ]}
      />
    </div>
  );
};

export interface AppProps {}
