import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div>
      <span>{name}</span>
      <button onClick={handleClick}>LogOut</button>
    </div>
  );
};

export default UserMenu;
