import { type FunctionComponent } from 'react';

// import { Desktop } from './components/desktop/desktop.component';
import { ScreenLock } from './components/screen-lock/screen-lock.component';

export const App: FunctionComponent<AppProps> = (props) => {
  const {} = props;

  return (
    <div>
      <ScreenLock />
      {/* <Desktop
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
      /> */}
    </div>
  );
};

export interface AppProps {}
