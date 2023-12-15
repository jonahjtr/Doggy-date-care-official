import HomePageFeed from "../components/HomePagefeed";
import useGetAxios from "../hooks/useGetAxios";
const HomePage = () => {
  const { data, error } = useGetAxios("/user/profile");

  if (!data || error) return <div> no user data {error}</div>;
  const dogData = data[0];
  return (
    <div className="border border-black bg-darkGreen h-full min-h-screen py-10 w-full">
      <HomePageFeed list={dogData.dogs} />
    </div>
  );
};

export default HomePage;
