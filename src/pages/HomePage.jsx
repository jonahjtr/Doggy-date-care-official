import HomePageFeed from "../components/HomePagefeed";
import useAxios from "../hooks/useAxios";
const HomePage = () => {
  const { data, error } = useAxios("/user/profile");

  if (!data || error) return <div> no user data {error}</div>;
  return (
    <div className="border border-black bg-darkGreen h-full min-h-screen py-10 w-full">
      <HomePageFeed list={data.dogs} />
    </div>
  );
};

export default HomePage;
