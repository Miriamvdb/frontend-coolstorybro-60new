import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllSpaces } from "../../store/space/thunks";
import "./styles.css";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSpaces());
  }, [dispatch]);

  return (
    <div className="container-homepage">
      <h1>Hello there 👋</h1>
    </div>
  );
};

export default Homepage;
