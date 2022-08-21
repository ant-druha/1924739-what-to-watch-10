import {PageFooter} from '../../components/page-footer/page-footer';
import Logo from '../../components/logo/logo';
import {FormEvent, useRef, useState} from 'react';
import {AuthData} from '../../types/user';
import {loginAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

export const LoginScreen = (): JSX.Element => {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const [errorText, setErrorText] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const validatePassword = (password: string | undefined): boolean => {
    const regexp = new RegExp('\\d+\\D+|\\D+\\d+');
    if (!password || !regexp.test(password)) {
      setErrorText('Password must contain at least one letter and one digit');
      setIsPasswordError(true);
      return false;
    }
    return true;
  };

  const validateEmail = (email: string | undefined): boolean => {
    if (!email) {
      setErrorText('Email must not be empty');
      setIsEmailError(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const password = passwordRef.current?.value;
    const login = loginRef.current?.value;

    if (!validateEmail(login) || !validatePassword(password)) {
      return;
    }

    onSubmit({
      login,
      password,
    } as AuthData);
  };

  const errorMessageElement = (
    <div className="sign-in__message">
      <p>{errorText}</p>
    </div>
  );

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="" className="sign-in__form" onSubmit={handleSubmit}>
          {errorText && errorMessageElement}
          <div className="sign-in__fields">
            <div className={`sign-in__field ${isEmailError ? 'sign-in__field--error' : '' }`}>
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${isPasswordError ? 'sign-in__field--error' : '' }`}>
              <input className="sign-in__input"
                ref={passwordRef}
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <PageFooter/>
    </div>
  );
};
