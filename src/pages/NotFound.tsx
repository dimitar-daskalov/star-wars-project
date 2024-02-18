import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h2 className="h2">404 - Page Not Found</h2>
      <h2 className="p">Sorry, the requested page does not exist.</h2>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="max-w-40 button"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
