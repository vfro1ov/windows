import { type FunctionComponent } from 'react';

import { Cover } from './cover/cover.component';
import { Login, type LoginProps } from './login/login.component';

export const ScreenLock: FunctionComponent<ScreenLockProps> = (props) => {
  const { } = props;

  return (
    <div>
      {/* заблоченый экран, Дата время , переход к вводу пароля */}
      <Cover />
      {/* {ProfileProps.map((ProfileProps, index) =>
        <Login key={index} {...ProfileProps} />)} */}
    </div>
  );
};

export interface ScreenLockProps {
  // ProfileProps: LoginProps[];
}
