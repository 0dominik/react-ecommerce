import React, { useState } from 'react';
import { Hamburger } from '../../atoms/Hamburger';
import { Button } from '../../atoms/Button';
import { MenuList } from '../../molecules/MenuList';
import { Nav, ButtonsContainer } from './style';
import { useOuterClick } from '../../../hooks/useOuterClick';
import { useAuth } from '../../../context/AuthContext';
import { useHistory, Link } from 'react-router-dom';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const innerRef = useOuterClick(() => setIsOpen(false));
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch {
      alert('Failed to log out');
    }
  };

  return (
    <div ref={innerRef}>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Nav isOpen={isOpen}>
        <MenuList />
        {currentUser ? (
          <ButtonsContainer>
            <p>{currentUser.email}</p>
            <Button size='s' type='button' onClick={handleLogout} mt={10}>
              log out
            </Button>
          </ButtonsContainer>
        ) : (
          <ButtonsContainer>
            <Link as={Button} size='s' type='button' to='/login'>
              <Button size='s' type='button'>
                log in
              </Button>
            </Link>
            <Link as={Button} size='s' type='button' to='/register'>
              <Button size='s' type='button' mt={5}>
                register
              </Button>
            </Link>
          </ButtonsContainer>
        )}
      </Nav>
    </div>
  );
};
