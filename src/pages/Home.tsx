import DataTable from "../components/DataTable";
import Loader from "../components/Loader";
import { useUserContext } from "../context/AuthContext";
import useGetStarWarsData from "../hooks/useGetStarWarsData";

const Home = () => {
  const { user, logOutUser } = useUserContext();
  const { data, isLoading, error } = useGetStarWarsData();

  return (
    <div className="m-auto">
      <h2 className="mb-4 text-base	font-extrabold leading-none tracking-tight md:text-lg lg:text-xl text-white">
        Welcome {user.username}!
      </h2>
      <button
        type="button"
        onClick={logOutUser}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Log Out
      </button>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500 text-lg font-bold px-2">
          Failed to fetch Star Wars data! Please try again!
        </p>
      ) : (
        <DataTable tableData={data} />
      )}
    </div>
  );
};

export default Home;
