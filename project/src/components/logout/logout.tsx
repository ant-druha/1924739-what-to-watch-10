import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {memo} from 'react';
import {logoutAction} from '../../store/api-actions';

const Logout = () => {
  const dispatch = useAppDispatch();

  const onLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <Link to={AppRoute.Root} onClick={onLogoutClick} className="user-block__link">Sign out</Link>
  );
};

export default memo(Logout);
