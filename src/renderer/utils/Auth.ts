/* eslint-disable no-console */
class AuthService {
  static async isLoggedIn() {
    const url = `http://localhost:3001/user/auth/isLoggedIn`;
    try {
      const response = await fetch(url, {
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
  // static logout() {
  //   Cookies.remove('JWT');
  //   window.location.replace('/');
  // }
}

export default AuthService;
