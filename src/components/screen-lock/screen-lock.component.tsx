import { type FunctionComponent } from 'react';

import { Cover } from './cover/cover.component';

export const ScreenLock: FunctionComponent<ScreenLockProps> = (props) => {
  const { } = props;

  return (
    <div>
      {/* заблоченый экран, Дата время , переход к вводу пароля */}
      <Cover backgroundImageUrl="https://wp-s.ru/wallpapers/11/1/364103651406617/peschanyj-morskoj-plyazh-na-fone-golubogo-neba.jpg"/>
      {/* {ProfileProps.map((ProfileProps, index) =>
        <Login key={index} {...ProfileProps} />)} */}
    </div>
  );
};

export interface ScreenLockProps {
  // ProfileProps: LoginProps[];
}
