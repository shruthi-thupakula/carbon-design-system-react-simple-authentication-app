const USER = "user";
interface UserDetails {
  accessToken: string;
  provider: "google" | "manual";
  email?: string;
}

/**
 * @method setLogin
 * @param {UserDetails} data details of the user to be stored
 */
export const setLogin = (data: UserDetails) => {
  localStorage.setItem(
    USER,
    JSON.stringify({
      ...data,
    })
  );
};

/**
 * @method getLogin
 * @returns {UserDetails} data of current user
 */
export const getLogin = (): UserDetails => {
  return JSON.parse(String(localStorage.getItem(USER)));
};

/**
 * @method logout
 * @description clears the user details and logouts the user
 */
export const logout = () => {
  localStorage.removeItem(USER);
  return;
};
