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
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            * Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <p className="text-red-500 text-xs italic">{username.error}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            * Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <p className="text-red-500 text-xs italic">{password.error}</p>
          )}
        </div>
        <button
          className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
            isButtonDisabled
              ? "cursor-not-allowed bg-gray-500 hover:bg-gray-700 "
              : "bg-blue-500 hover:bg-blue-700"
          }`}
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
