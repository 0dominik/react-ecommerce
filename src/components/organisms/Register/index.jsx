import React, { useState, useRef } from 'react';
import { Alert } from '../../atoms/Alert';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { Heading } from '../../atoms/Heading';
import { Form, Container, Info, InputsContainer } from '../../atoms/Form';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { useTitle } from '../../../hooks/useTitle';
import PulseLoader from 'react-spinners/PulseLoader';
import { useTheme } from '../../../hooks/useTheme';

export const Register = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();
  const { currentUser, register } = useAuth();
  const theme = useTheme();
  useTitle('register');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (email.length > 30) {
      return setError('Max length of email is 30 characters');
    }

    if (password !== passwordConfirm || password.length < 6 || password.length > 30) {
      return setError('Passwords must match and be at least 6 characters');
    }

    try {
      setError('');
      setIsLoading(true);
      await register(email, password);
      history.push('/');
    } catch {
      setError('Failed to create an account');
      setIsLoading(false);
    }
  };

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <Container>
      {!isLoading ? (
        <>
          <Form onSubmit={handleSubmit}>
            <Heading>Register</Heading>
            <InputsContainer>
              <label htmlFor='email'>
                email:
                <Input id='email' type='email' placeholder='Your email...' ref={emailRef} required autocomplete='email' />
              </label>
              <label htmlFor='password'>
                Password:
                <Input id='password' type='password' placeholder='Your password...' ref={passwordRef} required autocomplete='new-password' />
              </label>
              <label htmlFor='confirm-password'>
                confirm password:
                <Input id='confirm-password' type='password' placeholder='Confirm password...' ref={passwordConfirmRef} required autocomplete='new-password' />
              </label>
            </InputsContainer>
            <Button type='submit' disabled={isLoading}>
              Submit
            </Button>
          </Form>
          <Info>
            Have an account? <Link to='/login'>Log in</Link>
          </Info>
          {error && <Alert type='error'>{error}</Alert>}
        </>
      ) : (
        <PulseLoader color={theme.colors.primary} size={theme.loaderSize} />
      )}
    </Container>
  );
};
