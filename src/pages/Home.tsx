import DataTable from "../components/tables/DataTable";
import Loader from "../components/Loader";
import { useUserContext } from "../context/AuthContext";
import useGetStarWarsData from "../hooks/useGetStarWarsData";

const Home = () => {
  const { user, logoutUser } = useUserContext();
  const { data, isLoading, error } = useGetStarWarsData();

  return (
    <div className="mx-auto">
      <h2 className="h2">Welcome {user.username}!</h2>
      <button type="button" onClick={logoutUser} className="button mb-4">
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
