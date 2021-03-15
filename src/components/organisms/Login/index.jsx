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

export const Login = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const { currentUser, login } = useAuth();
  const theme = useTheme();
  useTitle('log in');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      setError('');
      setIsLoading(true);
      await login(email, password);
      history.push('/');
    } catch {
      setError('Failed to log in');
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
            <Heading>Log in</Heading>
            <InputsContainer>
              <label htmlFor='email'>
                email:
                <Input id='email' type='email' placeholder='Your email...' ref={emailRef} required autocomplete='email' />
              </label>
              <label htmlFor='password'>
                Password:
                <Input id='password' type='password' placeholder='Your password...' ref={passwordRef} required autocomplete='current-password' />
              </label>
            </InputsContainer>
            <Button type='submit' disabled={isLoading}>
              Submit
            </Button>
          </Form>
          {error && <Alert type='error'>{error}</Alert>}
          <Info>
            Need an account? <Link to='/register'>Register</Link>
          </Info>
        </>
      ) : (
        <PulseLoader color={theme.colors.primary} size={theme.loaderSize} />
      )}
    </Container>
  );
};
