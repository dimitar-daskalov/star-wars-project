import DataTable from "../components/DataTable";
import Loader from "../components/Loader";
import { useUserContext } from "../context/AuthContext";
import useGetStarWarsData from "../hooks/useGetStarWarsData";

const Home = () => {
  const { user, logOutUser } = useUserContext();
  const { data, isLoading, error } = useGetStarWarsData();

  return (
    <div className="m-auto">
      <h2 className="h2">Welcome {user.username}!</h2>
      <button type="button" onClick={logOutUser} className="button mb-4">
        Log Out
      </button>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p className="error text-lg font-bold px-2">
          Failed to fetch Star Wars data! Please try again!
        </p>
      ) : (
        <DataTable tableData={data} />
      )}
    </div>
  );
};

export default Home;
