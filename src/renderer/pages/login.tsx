/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import '../css/Login.css';
import Navbar from '../components/Navbar';
import AuthHandler from '../utils/authHandler';

interface LoginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login(_props: LoginProps): React.ReactElement {
  const { isLoggedIn, setIsLoggedIn } = _props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onButtonClick = async () => {
    setEmailError('');
    setPasswordError('');

    if (email === '') {
      setEmailError('Please enter your email');
      return;
    }

    if (password === '') {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Password must be 8 characters or longer');
      return;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    const userData = { email, password };

    try {
      const loginResponse = await AuthHandler.login(userData);
      // Assuming you get a token or some sort of success indicator
      if (loginResponse.message === 'Login successful') {
        setIsLoggedIn(true);
        toast.success(loginResponse.message, {
          position: 'top-center',
          draggable: false,
        });

        setTimeout(() => {
          window.location.replace('/');
        }, 4000);
      } else {
        throw new Error(loginResponse.message);
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: 'top-center',
        draggable: false,
      });
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      window.location.replace('/');
    }
  }, [isLoggedIn]);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              id="email"
              value={email}
              placeholder="Enter email address here"
              onChange={(ev) => setEmail(ev.target.value)}
              className="user-box"
            />

            <label className="errorLabel" htmlFor="email">
              {emailError}
            </label>
          </div>
          <div className="user-box">
            <input
              id="password"
              value={password}
              placeholder="Enter password here"
              onChange={(ev) => setPassword(ev.target.value)}
              className="user-box"
            />
            <label className="errorLabel" htmlFor="password">
              {passwordError}
            </label>
          </div>
          <input
            onClick={onButtonClick}
            className="inputButton"
            type="button"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
}

export default Login;
