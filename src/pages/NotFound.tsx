import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4 text-white font-bold items-center">
      <h2 className="text-2xl">404 - Page Not Found</h2>
      <p className="text-lg">Sorry, the requested page does not exist.</p>

      <button
        type="button"
        onClick={() => navigate(-1)}
        className="max-w-40 bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
