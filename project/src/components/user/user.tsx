import Logout from '../logout/logout';
import {memo} from 'react';

type UserProps = {
  avatarUrl?: string,
}

const User = ({avatarUrl}: UserProps) => (
  <ul className="user-block">
    <li className="user-block__item">
      <div className="user-block__avatar">
        <img src={avatarUrl || 'img/avatar.jpg'} alt="User avatar" width="63" height="63"/>
      </div>
    </li>
    <li className="user-block__item">
      <Logout/>
    </li>
  </ul>
);

export default memo(User);
