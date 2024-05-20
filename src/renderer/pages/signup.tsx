/* eslint-disable react/function-component-definition */
/* eslint-disable consistent-return */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Auth from '../utils/Auth';
import '../css/SignUp.css';

interface SignUpProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormState {
  email: string;
  username: string;
  password: string;
}

const SignUpPage: React.FC<SignUpProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    username: '',
    password: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const postNewUserSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: formState.email,
      username: formState.username,
      password: formState.password,
    };

    try {
      const response = await fetch('add-url-here', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (!response.ok) {
        toast.error(`${res.message}`);
      } else {
        toast.success(`${res.message}`);
        setTimeout(() => {
          window.location.replace('/login');
        }, 2000);
      }
    } catch (error) {
      toast.error('Error during signup. Please try again.');
    }
  };

  if (isLoggedIn) {
    window.location.replace('/');
  } else {
    return (
      <>
        <Navbar isLoggedIn={isLoggedIn} />
        <div className="signup-form-wrapper">
          <form onSubmit={postNewUserSignUp} className="signup-form">
            <h1 className="text-light">Create an account</h1>
            <div className="signup-form-group">
              <label className="signup-form-label" htmlFor="email">
                Email:
                <input
                  required
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter email: email@example.com"
                  onChange={handleInputChange}
                  className="signup-form-input"
                />
              </label>
            </div>
            <div className="signup-form-group">
              <label className="signup-form-label" htmlFor="username">
                Username:
                <input
                  required
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Create username"
                  onChange={handleInputChange}
                  className="signup-form-input"
                />
              </label>
            </div>
            <div className="signup-form-group">
              <label className="signup-form-label" htmlFor="password">
                Password:
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create password"
                  onChange={handleInputChange}
                  className="signup-form-input"
                />
              </label>
            </div>
            <button type="submit" className="signup-button">
              <span>Sign Up</span>
              <i />
            </button>
          </form>
        </div>
      </>
    );
  }
};

export default SignUpPage;
