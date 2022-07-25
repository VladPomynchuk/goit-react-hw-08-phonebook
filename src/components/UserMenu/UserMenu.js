import { Button, Typography } from '@mui/material';
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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Typography component={'span'} variant="subtitle1" mr={2}>
        {name}
      </Typography>
      <Button onClick={handleClick}>LogOut</Button>
    </div>
  );
};

export default UserMenu;
