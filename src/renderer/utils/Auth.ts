/* eslint-disable no-console */
class AuthService {
  static async isLoggedIn(): Promise<boolean> {
    const url: string = `http://localhost:3001/user/auth/isLoggedIn`;
    try {
      const response: Response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      // throw new Error();
      console.error('error: ', error);
      return false;
    }
  }

  // TODO: Make this call the backend to clear the JWT since its HTTP-Only
  static async logout(): Promise<boolean> {
    const url: string = `http://localhost:3001/user/auth/logout`;
    try {
      const response: Response = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
      });
      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      // throw new Error();
      console.error('error: ', error);
      return false;
    }
  }
}

export default AuthService;
