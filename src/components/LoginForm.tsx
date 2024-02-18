import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants";
import { useUserContext } from "../context/AuthContext";

const INITIAL_STATE = {
  value: "",
  isValid: true,
  error: "",
  isTouched: false,
};

const VALID_STATE = {
  isValid: true,
  error: "",
  isTouched: true,
};

const passErrorMsg = "Password must be at least 8 characters.";
const usernameErrorMsg = "Username must be between 2 and 50 characters.";

const LoginForm = () => {
  const [username, setUsername] = useState({
    ...INITIAL_STATE,
    error: usernameErrorMsg,
  });
  const [password, setPassword] = useState({
    ...INITIAL_STATE,
    error: passErrorMsg,
  });

  const { loginUser } = useUserContext();
  const navigate = useNavigate();

  const isButtonDisabled =
    (!username?.isValid && username.isTouched) ||
    (!password?.isValid && password.isTouched);

  const handleUsernameChange = (value: string) => {
    if (value.trim().length > 50 || value.trim().length < 2) {
      setUsername({
        isValid: false,
        error: usernameErrorMsg,
        value,
        isTouched: true,
      });
      return;
    }

    setUsername({ ...VALID_STATE, value });
  };

  const handlePasswordChange = (value: string) => {
    if (value.trim().length < 8) {
      setPassword({
        isValid: false,
        error: passErrorMsg,
        value,
        isTouched: true,
      });
      return;
    }

    setPassword({ ...VALID_STATE, value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submit");

    const isValid =
      username.isValid &&
      password.isValid &&
      username.isTouched &&
      password.isTouched;

    if (!username.isTouched || !password.isTouched) {
      setUsername((prevState) => ({
        ...prevState,
        isTouched: true,
        isValid: false,
      }));
      setPassword((prevState) => ({
        ...prevState,
        isTouched: true,
        isValid: false,
      }));
      return;
    }

    if (!isValid) {
      return;
    }

    loginUser({ username: username.value });
    navigate(ROUTES.home);
  };

  return (
    <div className="m-auto w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-6 py-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="label" htmlFor="username">
            * Username
          </label>
          <input
            className="input focus:outline-none focuse:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username.value}
            onChange={(e) => handleUsernameChange(e.target.value)}
            onFocus={() => {
              if (!username.isTouched) {
                setUsername((prevState) => ({ ...prevState, isTouched: true }));
              }
            }}
          />
          {username?.error && username?.isTouched && (
            <p className="error text-xs">{username.error}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="label" htmlFor="password">
            * Password
          </label>
          <input
            className="input focus:outline-none focuse:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password.value}
            onChange={(e) => handlePasswordChange(e.target.value)}
            onFocus={() => {
              if (!password.isTouched) {
                setPassword((prevState) => ({ ...prevState, isTouched: true }));
              }
            }}
          />
          {password?.error && password?.isTouched && (
            <p className="error text-xs">{password.error}</p>
          )}
        </div>
        <button
          className={`${isButtonDisabled ? "button-disabled" : "button"}`}
          type="submit"
          disabled={isButtonDisabled}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
