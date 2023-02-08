import { type FunctionComponent } from 'react';

import { Login, type LoginProps } from './login/login.component';

export const ScreenLock: FunctionComponent<ScreenLockProps> = (props) => {
  const { ProfileProps } = props;

  return (
    <div>
      {/* заблоченый экран, Дата время , переход к вводу пароля */}
      {ProfileProps.map((ProfileProps, index) =>
        <Login key={index} {...ProfileProps} />)}
    </div>
  );
};

export interface ScreenLockProps {
  ProfileProps: LoginProps[];
}
