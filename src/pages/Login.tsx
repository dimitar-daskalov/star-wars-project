import LoginForm from "../components/LoginForm";

const Login = () => (
  <div>
    <h2 className="mb-4 text-base font-extrabold leading-none tracking-tight md:text-lg lg:text-xl text-white">
      Welcome to STAR WARS API Project.
    </h2>
    <p className="mb-6 text-base font-normal lg:text-lg sm:px-16 xl:px-48 text-gray-400">
      Please log in using the form below, to continue.
    </p>
    <LoginForm />
  </div>
);

export default Login;
