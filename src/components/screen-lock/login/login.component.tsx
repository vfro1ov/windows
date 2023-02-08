import { type FunctionComponent } from 'react';

export const Login: FunctionComponent<LoginProps> = (props) => {
  const { login, pass, iconProfile } = props;
  // const password = '123';

  // if (password !== '123') {
  //   return console.log('Неверный пароль, повторите попытку ');
  // }

  return (
    <div>
      <div className="login-window">
        <div className="icon-profile"><img src={iconProfile} alt={login} /></div>
        <span>{login}</span>
        <input type="password" alt="pass" />
        <input type="submit" value=""></input>
      </div>
    </div>
  );
};

export interface LoginProps {
  login: string;
  pass?: string;
  iconProfile: string;
}
