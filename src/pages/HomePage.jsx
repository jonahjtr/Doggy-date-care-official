import HomePageFeed from "../components/HomePagefeed";
import useGetAxios from "../hooks/useGetAxios";
const HomePage = () => {
  const { data, error } = useGetAxios("/user/profile");
  const neededData = data[0];
  if (!neededData || error) return <div> no user neededData {error}</div>;
  return (
    <div className="border border-black bg-darkGreen h-full min-h-screen py-10 w-full">
      <HomePageFeed list={neededData.dogs} />
    </div>
  );
};

export default HomePage;
