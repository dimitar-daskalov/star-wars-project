import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { useUserContext } from "../../context/AuthContext";
import Input from "./Input";
import { IInput } from "../../interfaces";

const LoginForm = () => {
  const [loginData, setLoginData] = useState<Record<string, IInput>>({
    username: {} as IInput,
    password: {} as IInput,
  });

  const { username, password } = loginData;

  const { loginUser } = useUserContext();
  const navigate = useNavigate();

  const isButtonDisabled = !username?.isValid || !password?.isValid;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid =
      username.isValid &&
      password.isValid &&
      username.isTouched &&
      password.isTouched;

    if (!isValid) {
      return;
    }

    loginUser({ username: username.value });
    navigate(ROUTES.home);
  };

  const onChange = (name: string, value: IInput) => {
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="m-auto w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-6 py-8"
        onSubmit={handleSubmit}
      >
        <Input
          name="username"
          onChange={onChange}
          placeholder="Username"
          type="text"
          validationType="username"
        />
        <Input
          name="password"
          onChange={onChange}
          placeholder="********"
          type="password"
          validationType="password"
        />
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
