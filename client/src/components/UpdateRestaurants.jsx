import { useParams } from "react-router-dom";

const UpdateRestaurants = () => {
  // ✅ Capitalized name
  const test = useParams();
  console.log(test);
  return <div>Update Restaurant</div>;
};
export default UpdateRestaurants; // ✅ Also update export
