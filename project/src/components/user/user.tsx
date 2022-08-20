import Logout from '../logout/logout';
import {memo} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type UserProps = {
  avatarUrl?: string,
}

const User = ({avatarUrl}: UserProps) => (
  <ul className="user-block">
    <li className="user-block__item">
      <Link to={AppRoute.MyList} className="user-block__avatar">
        <img src={avatarUrl || 'img/avatar.jpg'} alt="User avatar" width="63" height="63"/>
      </Link>
    </li>
    <li className="user-block__item">
      <Logout/>
    </li>
  </ul>
);

export default memo(User);
