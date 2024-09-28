import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();


  return <div>User searched </div>;
};

export default SearchPage;
