import { getCookie } from './getCookie';
import { setCookie } from './setCookies';

export function checkCookie() {
  const username = getCookie('username');

  if (username !== '' && username != null) {
    setCookie('username', username, 365);
  }
}
